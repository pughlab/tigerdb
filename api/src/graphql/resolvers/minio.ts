import { minioClient, listBucketObjects, makePresignedURL, putObjectBucket } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import papa from 'papaparse'
import * as R from 'remeda'
import { v4 as uuidv4 } from 'uuid';
import path from 'path'

const validateFile = async (ogm, rawDatasetID, objectName, preview, header) => {

  const RawDatasetModel = ogm.model("RawDataset")
  const MinioUploadModel = ogm.model("MinioUpload")

  const bucketName = `raw-dataset-${rawDatasetID}`

  const rawDataset = await RawDatasetModel.find({ where: {rawDatasetID} })
  const datafileMinioUpload = await MinioUploadModel.find( {where: {bucketName: bucketName, objectName: objectName}})

  const stream = await minioClient.getObject(bucketName, objectName)

  // gunzip stream
  const compressedFileStream = stream.pipe(zlib.createGunzip())

  async function getCSV() {
    let result = []
    await new Promise((resolve, reject) => {
      papa.parse(compressedFileStream, {
        worker: true,
        header: header,
        delimiter: ",",
        preview: preview,
        step: (results) => {
          result.push(results.data)
        },
        complete: () => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      })
    })

    return {bucketName, rawDataset, datafileMinioUpload, result}
  }

  const result = await getCSV()

  return result

}

const checkNoPrefix = (keys) => {
    // keys.push('%permission_test1') // test invalid keys
    // keys.push('%permission_test2') // test invalid keys

    let toReturn

    const invalid_keys = keys.filter((key) => key.startsWith('%permission_'))
    const isValid = invalid_keys.length === 0
    let message
    
    if (isValid) {
      message = "File is valid"
    } else {
      message =`File is not valid. Data variables cannot start with '%permission_'. Invalid keys: ${invalid_keys}`
    }

    return {isValid, message}
}

export const resolvers = {
  Query: {
  },
  Mutation: {
    minioUploadFile: async (obj, { bucketName, file, datasetID }, { driver }) => {
      try {
        const { filename, mimetype, encoding, createReadStream } = await file
        const objectName = uuidv4()
        
        let filenameExt = filename
        let stream = createReadStream()


        // might need if we're using gzipped files; check if file is gzipped and gzip if not:
        // if (extname(filename) != ".gz") {
        //   stream = createReadStream().pipe(zlib.createGzip())
        //   filenameExt = filename.concat(".gz") 
        // }
        
        // assume file is already gzipped:
        // const stream = createReadStream()

        // to gzip the file:
        // const compressedFileStream = createReadStream().pipe(zlib.createGzip());

        // Construct the new object name by combining the object ID and the original filename
        const newObjectName = `${objectName}_${filename}`; // e.g., "123e4567-e89b-12d3-a456-426614174000_data.tsv"
        await minioClient.putObject(bucketName, newObjectName, stream)

        const session = driver.session()
        const createMinioUpload = await session.run(
          `
          MATCH (d:Dataset {datasetID: "${datasetID}"})
          MERGE (d)-[:HAS_FILE]->(a:MinioUpload {bucketName: $bucketName, objectName: "${newObjectName}", filename: $filenameExt})
          RETURN a
          `,
          { bucketName, filenameExt }
        )
        // console.log(createMinioUpload.records[0].get(0).properties)
        const minioUpload = createMinioUpload.records[0].get(0)
        return minioUpload.properties
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.minioUpload', error)
      }
    },

    minioDelete: async (obj, { bucketName, objectName }, { driver, ogm }) => {
      try {
        await minioClient.removeObject(bucketName, objectName)

        const MinioUpload = ogm.model("MinioUpload")

        const ret = await MinioUpload.delete({where: { bucketName, objectName}})

        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.minioDelete', error)
      }
    },

    uploadProcessedHeaders: async (
      parent,
      {bucketName, objectName, filename, headers, selectedDelimiter, includesHeader },
      { driver, ogm, minioClient }
    ) => {  
      try {
        console.log("PARAMS CHECK:")
        console.log(bucketName, objectName, filename, headers, selectedDelimiter, includesHeader)
        // Step 1: Retrieve the object directly from MinIO
        const stream = await minioClient.getObject(bucketName, objectName);
        
        // Step 2: Read the stream into a string (you can use a buffer or a string reader)
        const chunks = [];
        for await (const chunk of stream) {
          chunks.push(chunk);
        }
        const text = Buffer.concat(chunks).toString('utf-8');

        // Step 3: Process the CSV file based on selected headers and delimiter
        let rows = text.split('\n');

        // Check if the file includes a header row
        if (includesHeader) {
          rows = rows.slice(1);  // Skip the first row
        }

        const processedData = rows.map((row) => {
          const cells = row.split(selectedDelimiter); // Use the selected delimiter for splitting
          return headers.reduce((acc, { name, index }) => {
            acc[name] = cells[index];
            return acc;
          }, {});
        });
  
        // Step 4: Convert processed data into a stream format for uploading
        const processedFileStream = Buffer.from(processedData.map(row => Object.values(row).join('\t')).join('\n'));
  

        // Extract the file extension
        const fileExtension = path.extname(filename); // e.g., ".tsv" or ".csv"

        // Ensure the original filename has an extension
        if (!fileExtension) {
          throw new Error(`File "${filename}" lacks an extension.`);
        }

        // Construct the new object name by combining the object ID and the original filename
        const newObjectName = `processed-${objectName}_${filename}`; // e.g., "123e4567-e89b-12d3-a456-426614174000_data.tsv"


        // Step 5: Upload the processed file using putObjectBucket
        // const newObjectName = `processed-${objectName}`;
        const newFileName = `processed-${filename}`;
        await putObjectBucket(minioClient, processedFileStream, bucketName, newObjectName);
  
        // Step 6: Generate a presigned URL for the newly uploaded file
        const processedPresignedURL = await makePresignedURL(minioClient, bucketName, newObjectName);
  
        // Step 7: Create the `ProcessedDataset` node
        const ProcessedDatasetModel = ogm.model('ProcessedDataset');
        const processedDatasetInput = {
          objectName: newObjectName,
          bucketName,
          filename: newFileName,
          // headers: headers.map(header => ({ name: header.name, index: header.index })),
          rows: processedData.length,
          createdAt: new Date().toISOString(),
          // presignedURL: processedPresignedURL,
          selectedDelimiter,
        };

        const { processedDatasets: [processedDataset] } = await ProcessedDatasetModel.create({
          input: [processedDatasetInput],
        });

        const HeaderModel = ogm.model('Header');
        const headerInputs = headers.map(({ name, index }) => ({
          name,
          index,
          processedDataset: {
            connect: { where: { node: { objectName: processedDataset.objectName } } },
          },
        }))
    
        await HeaderModel.create({
          input: headerInputs,
        })

        // Step 8: Find the existing `MinioUpload` node and connect `ProcessedDataset` via HAS_PROCESSED_FILE
        const MinioUploadModel = ogm.model('MinioUpload');

        // Find the existing MinioUpload by objectName (as it's the ID field)
        const [existingMinioUpload] = await MinioUploadModel.find({
          where: { objectName: objectName },  // Find using objectName as it's unique (ID)
        });

        if (!existingMinioUpload) {
          throw new Error(`MinioUpload with objectName ${objectName} not found`);
        }

        // Step 9: Update the existing `MinioUpload` to connect the newly created `ProcessedDataset`
        await MinioUploadModel.update({
          where: { objectName: objectName },
          connect: {
            processedDataset: {
              where: { node: { objectName: processedDataset.objectName }},
            },
          },
        });

        return existingMinioUpload;  // Return the updated MinioUpload node

  
      } catch (error) {
        console.error('Error processing and uploading dataset:', error);
        throw new Error('Failed to upload processed headers');
      } 
    },

    // uploadProcessedHeaders: async (
    //   obj,
    //   { datasetID, bucketName, objectName, selectedHeaders, selectedDelimiter },
    //   { driver, ogm, minioClient }
    // ) => {
    //   try {
    //     // Step 1: Fetch the original file from MinIO
    //     const presignedURL = await makePresignedURL(minioClient, bucketName, objectName);
    //     const response = await fetch(presignedURL);
    //     const text = await response.text();
  
    //     // Step 2: Process the CSV file based on selected headers
    //     const rows = text.split('\n');
    //     const processedData = rows.map((row) => {
    //       const cells = row.split(selectedDelimiter); // Assuming TAB-delimited
    //       return selectedHeaders.reduce((acc, { name, index }) => {
    //         acc[name] = cells[index];
    //         return acc;
    //       }, {});
    //     });
  
    //     // Step 3: Save the processed data as a new file in MinIO
    //     const newFileName = `processed-${objectName}`;
    //     const processedFileURL = await putObjectBucket(minioClient, processedData, bucketName, );
  
    //     // Step 4: Update Neo4j graph by linking the processedDataset to MinioUpload
    //     const session = driver.session();
    //     const MinioUploadModel = ogm.model('MinioUpload');
  
    //     const minioUploadInput = {
    //       objectName: newFileName,
    //       url: processedFileURL,
    //       processedDataset: {
    //         create: {
    //           datasetID,
    //           headers: selectedHeaders,
    //           rows: processedData.length,
    //           createdAt: new Date().toISOString(),
    //         },
    //       },
    //     };
  
    //     const { minioUploads: [minioUpload] } = await MinioUploadModel.create({
    //       input: [minioUploadInput],
    //     });
  
    //     session.close();
  
    //     return minioUpload;
    //   } catch (error) {
    //     console.error('Error processing and uploading dataset:', error);
    //     throw new Error('Failed to upload processed headers');
    //   }
    // },
    
  
    validateRawdatafile: async (obj, { rawDatasetID, objectName }, { driver, ogm }) => {
      try {

        const RawDatasetModel = ogm.model("RawDataset")

        const {bucketName, rawDataset, datafileMinioUpload, result:csv} = await validateFile(ogm, rawDatasetID, objectName, 0, true)
        let keys = Object.keys(csv[0])

        const {isValid, message} = checkNoPrefix(keys)

        // const session = driver.session()
        // const rawDatasetModelUpdate1 = await session.run(
        //     `MATCH (n:RawDataset)-[r:HAS_RAWDATAFILE]->(m:MinioUpload)
        //     where n.rawDatasetID = "${rawDatasetID}"
        //     delete r`,
        // )

        if (isValid) {
          const MinioUploadModel = ogm.model("MinioUpload")
          const datafileMinioUploadOld = await MinioUploadModel.update({
            where: { bucketName: bucketName },
            disconnect: {rawdataFileRawDataset: {where: {node: {rawDatasetID: rawDatasetID}}}}
          })

          const rawDatasetModelUpdate = await RawDatasetModel.update({ 
            where: { rawDatasetID },
            update: { rawdataFile: {connect: {
              where: {node: {objectName: datafileMinioUpload[0].objectName}},
              edge: {validated: isValid},
            }}},
          })
        }

        return {isValid, message}
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.validateRawdatafile', error)
      }
    },
    validateCodebook: async (obj, { rawDatasetID, objectName }, { driver, ogm }) => {
      try {

        const RawDatasetModel = ogm.model("RawDataset")

        const {bucketName, rawDataset, datafileMinioUpload, result:csv} = await validateFile(ogm, rawDatasetID, objectName, 0, false)
        let keys = csv.map(x => x[0])

        const {isValid, message} = checkNoPrefix(keys)

        // const session = driver.session()
        // const rawDatasetModelUpdate1 = await session.run(
        //     `MATCH (n:RawDataset)-[r:HAS_CODEBOOK]->(m:MinioUpload)
        //     where n.rawDatasetID = "${rawDatasetID}"
        //     delete r`,
        // )

        if (isValid) {
          const MinioUploadModel = ogm.model("MinioUpload")
          const datafileMinioUploadOld = await MinioUploadModel.update({
            where: { bucketName: bucketName },
            disconnect: {codeBookRawDataset: {where: {node: {rawDatasetID: rawDatasetID}}}}
          })

          const rawDatasetModelUpdate2 = await RawDatasetModel.update({ 
            where: { rawDatasetID },
            update: { codeBook: {connect: {
              where: {node: {objectName: datafileMinioUpload[0].objectName}},
              edge: {validated: isValid},
            }}},
          })
        }

        return {isValid, message}
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.validateCodebook', error)
      }
    },
    validateRawfileCodebookPair: async (obj, { rawDatasetIDRF, objectNameRF, rawDatasetIDCB, objectNameCB }, { driver, ogm }) => {
      try {

        const MinioUploadModel = ogm.model("MinioUpload")

        const {bucketName:bucketNameRF, rawDataset:rawDatasetRF, datafileMinioUpload:datafileMinioUploadRF, result:csvRF} = await validateFile(ogm, rawDatasetIDRF, objectNameRF, 0, true)
        const {bucketName:bucketNameCB, rawDataset:rawDatasetCB, datafileMinioUpload:datafileMinioUploadCB, result:csvCB} = await validateFile(ogm, rawDatasetIDCB, objectNameCB, 0, false)
        let keysRF =  Object.keys(csvRF[0])
        let keysCB = csvCB.map(x => x[0])

        // keysRF.push('a') // test mismatches
        // keysCB.push('b') // test mismatches

        // keysRF.push('c') // test mismatches
        // keysCB.push('c') // test mismatches

        // keysRF.push('d') // test mismatches
        // keysCB.push('e') // test mismatches

        let isValid = true
        let message = `Rawdata file and codebook match`
        let mismatches = []

        if (keysRF.length !== keysCB.length) {
          message = `Number of columns in Rawdata file (${keysRF.length}) does not match number of data variables in the codebook (${keysCB.length})`
          isValid = false
        } else {

          keysRF.forEach((keyRF, index) => {
            const keyCB = keysCB[index]
            if (!(keyRF === keyCB)) {
              mismatches.push({lineNumber: index, fileA: keyRF, fileB: keyCB})
            }
          })

          if (Object.keys(mismatches).length != 0) {
            message = `Rawdata file does not match the codebook: ${JSON.stringify(mismatches)}`
            isValid = false
          }

        }

        if (isValid) {
          const rawDatasetModelUpdateRF = await MinioUploadModel.update({ 
            where: { objectName: datafileMinioUploadRF[0].objectName },
            update: { pairedCodebook: {connect: {
              where: {node: {objectName: datafileMinioUploadCB[0].objectName}},
              edge: {validated: isValid},
            }}},
          })

          const rawDatasetModelUpdateCB = await MinioUploadModel.update({ 
            where: { objectName: datafileMinioUploadCB[0].objectName },
            update: { pairedRawdataFile: {connect: {
              where: {node: {objectName: datafileMinioUploadRF[0].objectName}},
              edge: {validated: isValid},
            }}},
          })
        }

        return {isValid, message, mismatches}
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.validateCodebook', error)
      }
    },
  },

  MinioBucket: {
    minioObjects: async ({ bucketName }, { }, { minioClient, ogm, driver }) => {
      try {
        const MinioUploadModel = ogm.model("MinioUpload")
        const bucketItemNames = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)

        const res = await MinioUploadModel.find({
          where: {
            objectName: { IN: [bucketItemNames] }
          }
        })
        console.log(res)
        return []
        // const session = driver.session()
        // const findMinioUpload = await session.run(
        //   // Rename label to MinioUpload to match schema
        //   'MATCH (a:MinioObject) WHERE a.objectName IN $bucketItemNames RETURN a',
        //   {bucketItemNames}
        // )
        // console.log(findMinioUpload.records.map(record => record.toObject()))
        // console.log(createMinioUpload.records[0].get(0).properties)
        // const minioUpload = findMinioUpload.records[0].get(0)

        // return findMinioUpload.records.map(record => record.toObject())
        // return bucketItems.map(({name, ...rest}) => ({bucketName, objectName: name}))
      } catch (error) {
        console.log(error)
        throw new ApolloError('miniobucket.minioobjects', error)
      }
    }
  },

  MinioUpload: {
    presignedURL: async (
      { bucketName, objectName },
      { },
      { driver, ogm, minioClient }
    ) => {
      try {
        // TODO: response-content-disposition to enable clickable downloads? still doesn't work...
        // const presignedURL = await minioClient.presignedUrl('GET', bucketName, objectName, 24 * 60 * 60, { "response-content-disposition": `attachment; filename=${objectName}` })
        const presignedURL = makePresignedURL(minioClient, bucketName, objectName)
        // console.log(presignedURL)
        return presignedURL
      } catch (error) {
        console.log(error)
        console.log('minioupload.presignedurl error')
        throw new ApolloError('minioupload.presignedurl', error)
      }
    }

  }
}