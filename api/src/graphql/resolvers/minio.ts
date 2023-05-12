import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import papa from 'papaparse'
import * as R from 'remeda'
import { v4 as uuidv4 } from 'uuid';

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
    minioUploadFile: async (obj, { bucketName, file, rawDatasetID, allowedStudies, allowedSites }, { driver }) => {
      try {
        const { filename, mimetype, encoding, createReadStream } = await file
        const objectName = uuidv4()
        
        let filenameExt = filename
        let stream = createReadStream()

        if (extname(filename) != ".gz") {
          stream = createReadStream().pipe(zlib.createGzip())
          filenameExt = filename.concat(".gz") 
        }
        
        // assume file is already gzipped:
        // const stream = createReadStream()

        // to gzip the file:
        // const compressedFileStream = createReadStream().pipe(zlib.createGzip());

        await minioClient.putObject(bucketName, objectName, stream)

        const session = driver.session()
        const createMinioUpload = await session.run(
          `
          MATCH (rd:RawDataset {rawDatasetID: "${rawDatasetID}"})
          MERGE (rd)-[:HAS_FILE]->(a:MinioUpload {bucketName: $bucketName, objectName: "${objectName}", filename: $filenameExt})
          SET a.allowedStudies = $allowedStudies
          SET a.allowedSites = $allowedSites
          RETURN a
          `,
          { bucketName, filenameExt, allowedStudies, allowedSites }
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
        const presignedURL = await minioClient.presignedUrl('GET', bucketName, objectName, 24 * 60 * 60, { "response-content-disposition": `attachment; filename=${objectName}` })
        console.log(presignedURL)
        return presignedURL
      } catch (error) {
        console.log(error)
        console.log('minioupload.presignedurl error')
        throw new ApolloError('minioupload.presignedurl', error)
      }
    }

  }
}