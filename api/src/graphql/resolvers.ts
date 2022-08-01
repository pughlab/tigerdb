import { GraphQLUpload } from 'graphql-upload'
import * as R from 'ramda'
import { minioClient, listBucketObjects, makeBucket } from '../minio/minio'
import papa from 'papaparse'


// import { Resolvers, Study, Timepoint, Category, DataFile } from '../types/types'
import { putObjectBucket } from '../minio/minio'
import { ApolloError } from 'apollo-server'


interface parseResult {
  (result: any): Promise<string>;
}

export const resolvers = {
  Query: {

  },
  Mutation: {
    // TODO: use ogm models instead of session
    me: async (obj, params, {driver, kauth}, resolveInfo) => {
      try {
        const {sub: keycloakUserID, email, name, ... kcAuth} = kauth.accessToken.content
        const keycloakUser = { keycloakUserID, email, name }
  
        const session = driver.session()
        const existingUser = await session.run(
          'MATCH (a:User {keycloakUserID: $keycloakUserID}) RETURN a',
          {keycloakUserID}
        )
        // console.log('match result', existingUser)
        if (R.isEmpty(existingUser.records)) {
          const createUser = await session.run(
            'CREATE (a:User {keycloakUserID: $keycloakUserID, name: $name, email: $email}) RETURN a',
            keycloakUser
          )
          // console.log('createUser result', createUser)
          return createUser.records[0].get(0).properties
        } else {
          // console.log('existing user props', existingUser.records[0].get(0).properties)
          return keycloakUser
        } 
      } catch (error) {
        throw new ApolloError('mutation.me error')
      }
    },

    minioUpload: async (obj, {bucketName, file}, {driver}) => {
      try {
        const {filename, mimetype, encoding, createReadStream} = await file
        const stream = createReadStream()
        const session = driver.session()
        const createMinioUpload = await session.run(
          'CREATE (a:MinioUpload {bucketName: $bucketName, objectName: apoc.create.uuid(), filename: $filename}) RETURN a',
          {bucketName, filename}
        )
        // console.log(createMinioUpload.records[0].get(0).properties)
        const minioUpload = createMinioUpload.records[0].get(0)
        const {objectName} = minioUpload.properties 
        await minioClient.putObject(bucketName, objectName, stream)
        return minioUpload.properties
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.minioUpload error')
      } 
    },

    createRawDatasetWithMinioBucket: async (
      parent,
      // {name, description, rawDataFile, codebookFile},
      {name, description, rawDataFile},
      {driver, ogm, minioClient}
    ) => {
      try {
        // const session = driver.session()
        // const rawDataset = await session.run(
        //   'CREATE (a:RawDataset {name: $name, description: $description, apoc.create.uuid(), filename: $filename}) RETURN a',
        //   {name, description}
        // )        
        // const newMinioUpload = await session.run(
        //   'CREATE (a:MinioObject {bucketName: $bucketName, objectName: apoc.create.uuid(), filename: $filename}) RETURN a',
        //   {bucketName, filename}
        // )
        const RawDatasetModel = ogm.model("RawDataset")
        const {rawDatasets: [rawDataset]} = await RawDatasetModel.create({ input: [{name, description}]})
        // console.log(rawDataset)
        const {rawDatasetID} = rawDataset

        const bucketName = `raw-dataset-${rawDatasetID}`
        await makeBucket(minioClient, bucketName)

        // await RawDatasetModel.update({
        //   where: {rawDatasetID},
        //   update: {
        //     rawDataFile: {
        //       connectOrCreate: {
        //         where: {node: {objectName: rawDataFileMinioUpload.objectName}},
        //         onCreate: {node: rawDataFileInput}
        //       }
        //     },
        //     // codebookFile: {
        //     //   connectOrCreate: {
        //     //     where: {node: {objectName: codebookFileMinioUpload.objectName}},
        //     //     onCreate: {node: codebookFileInput}
        //     //   }
        //     // }
        //   }
        // })
        return rawDataset
      } catch (error) {
        console.log('createRawDatasetWithMinio', error)

      }
    },

    createCuratedDatasetFromRawDataset: async ({}, {rawDatasetID}, {driver, ogm, minioClient}) => {
      try {
        // Create model and add a curated dataset node to db
        const CuratedDatasetModel = ogm.model("CuratedDataset")
        const bucketName = `raw-dataset-${rawDatasetID}`
        
        // const {curatedDatasets: [curatedDataset]} = await CuratedDatasetModel.create({ input: [{name, description}]})
        // const {curatedDatasetID} = curatedDataset

        // await CuratedDatasetModel.update({
        //   where: {curatedDatasetID},
        //   update: {
        //     dataVariables: {
        //       connectOrCreate: {
        //         // 
        //       }
        //     }
        //   }
        // })
        

        // With the newly created curated dataset node, transform minio bucket into data variables that connect to newly made curated dataset

        // Return curated dataset after linking it to its data variables
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }


    // generateCuratedDataset: async (obj, {rawDatasetID}, {driver, ogm, minioClient}) => {
    //   try {
    //     const RawDatasetModel = ogm.model("RawDataset")
    //     const MinioUploadModel = ogm.model("MinioUpload")
    //     const SubjectModel = ogm.model('Subject')
    //     const DataVariableModel = ogm.model('DataVariable')
    //     const DataVariableSampleModel = ogm.model('DataVariableSample')


    //     const [rawDataset] = await RawDatasetModel.find({ input: [{rawDatasetID}]})
    //     console.log(rawDataset)
    //     const bucketName = `raw-dataset-${rawDatasetID}`
    //     const [rawMinioUpload] = await MinioUploadModel.find({where: {bucketName, minioUploadType: 'RAW'}})
    //     // const [codebookMinioUpload] = await MinioUploadModel.find({where: {bucketName, minioUploadType: 'CODEBOOK'}})
    //     // console.log(rawMinioUpload)
    //     // console.log(codebookMinioUpload)
    //     const test = await minioClient.getObject(rawMinioUpload.bucketName, rawMinioUpload.objectName)
    //     const parseStream = papa.parse(test, {
    //       delimiter: ',',
    //       // escapeChar: '\\',
    //       header: true,
    //       step: function(results, parser) {
    //         // console.log("Row data:", results.data['CHILDid']);
    //         // console.log("Row errors:", results.errors);
    //         // console.log(results.meta['fields'])
    //         const parseResult = async (results: any) => {
    //           const subjectInput = {childID: results.data['CHILDid']}
    //           const [existingSubject] = await SubjectModel.find({where: subjectInput})
    //           if (!existingSubject) {
    //             await SubjectModel.create({ input: [subjectInput]})
    //           }
    //           for (const field of results.meta['fields']) {
    //             const fieldInput = {title: field}
    //             let [existingDataVariable] = await DataVariableModel.find({where: fieldInput})
    //             if (!existingDataVariable) {
                  
    //               existingDataVariable = await DataVariableModel.create({
    //                 input: [fieldInput],
    //                 connectOrCreate: {
    //                   hasSamples: {
    //                       where: {node: {value: results.data[field]}},
    //                       onCreate: {node: {value: results.data[field]}}
    //                   }
    //                 }
    //               })
    //             }
    //             // console.log(existingDataVariable)
    //           }

    //           return
    //         }
    //         parseResult(results)

    //       },
    //       // complete: function(results) {

    //       //   console.log(results.meta['fields'])
    //       // }
    //     })
    //     // let data = [];
    //     // parseStream.on("data", chunk => {
    //     //     data.push(chunk);
    //     //     // console.log(chunk)
    //     // });

    //     // parseStream.on("finish", () => {
    //     //     // console.log(data);
    //     //     console.log('finish', data.length);
    //     // });
    //     // test.pipe(parseStream);
        



    //     // const {filename, mimetype, encoding, createReadStream} = await file
    //     // const stream = createReadStream()
    //     // const session = driver.session()
    //     // const createMinioUpload = await session.run(
    //     //   'CREATE (a:MinioObject {bucketName: $bucketName, objectName: apoc.create.uuid(), filename: $filename}) RETURN a',
    //     //   {bucketName, filename}
    //     // )
    //     // // console.log(createMinioUpload.records[0].get(0).properties)
    //     // const minioUpload = createMinioUpload.records[0].get(0)
    //     // const {objectName} = minioUpload.properties 
    //     // await minioClient.putObject(bucketName, objectName, stream)
    //     // return minioUpload.properties
    //     console.log(rawDatasetID)
    //     return null
    //   } catch (error) {
    //     console.log(error)
    //     throw new ApolloError('mutation.minioUpload error')
    //   } 
    // },

  },

  RawDataset: {
    minioBucket: async (
      {rawDatasetID},
      {},
      {minioClient}
    ) => {
      try {
        return {
          bucketName: `raw-dataset-${rawDatasetID}`
        }
      } catch (error) {
        console.log(error)
      }
    }
  },

  MinioBucket: {
    minioObjects: async ({bucketName}, {}, {minioClient, ogm, driver}) => {
      try {
        const MinioUploadModel = ogm.model("MinioUpload")
        const bucketItemNames = (await listBucketObjects(minioClient, bucketName)).map(({name}) => name)

        console.log(bucketItemNames)
        const res = await MinioUploadModel.find({
          where: {
            objectName: {IN: [bucketItemNames]} 
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
      }
    }
  },

  MinioUpload: {
    presignedURL: async (
      {bucketName, objectName},
      {},
      {driver, ogm, minioClient}
    ) => {
      try {
        const presignedURL = await minioClient.presignedUrl('GET', bucketName, objectName)
        console.log(presignedURL)
        return presignedURL
      } catch (error) {
        console.log(error)
        console.log('minioupload.presignedurl error')
      }
    }

  }
}