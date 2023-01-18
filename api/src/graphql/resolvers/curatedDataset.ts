import { listBucketObjects, makePresignedURL } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'


export const resolvers = {
  Query: {

  },
  Mutation: {
    createCuratedDatasetFromRawDatasetNew: async (parent, {rawDatasetID, rawObjectName, codebookObjectName }, { driver, ogm, minioClient }) => {
      try {
       // Create model and add a curated dataset node to db
        const CuratedDatasetModel = ogm.model("CuratedDataset")
        const bucketName = `raw-dataset-${rawDatasetID}`

        const curatedDatasetInput = {name: 'test', description: 'testgen', generatedByRawDataset: {connect: {where: {node: {rawDatasetID}}}}}
        const { curatedDatasets: [curatedDataset] } = await CuratedDatasetModel.create({ input: [curatedDatasetInput],  })
        const { curatedDatasetID } = curatedDataset

        const session = driver.session()

        const bucketObjects = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
        // console.log(bucketObjects)
        // const presignedURLRaw = await makePresignedURL(minioClient, bucketName, bucketObjects.slice(-1)[0])
        const presignedURLRaw = await makePresignedURL(minioClient, bucketName, rawObjectName)
        const presignedURLCodebook = await makePresignedURL(minioClient, bucketName, codebookObjectName)
        console.log(presignedURLCodebook, presignedURLRaw)
        
        // original api with datavariables containing chr,start,end,datavalue
        // "CALL apoc.periodic.iterate(\'CALL apoc.load.csv($presignedURL, {sep: \" \", compression: \"GZIP\"}) YIELD list\', \'MATCH (b:CuratedDataset {curatedDatasetID: $curatedDatasetID}) CREATE (a:DataVariable {dataVariableID: apoc.create.uuid(), chromosome: list[0], start: toInteger(list[1]), end: toInteger(list[2]), datavalue: toFloat(list[3]) }), (b)-[:HAS_DATA_VARIABLE]->(a) RETURN a\', { batchSize:10000, iterateList: true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedURL: $presignedURL}})",
        const createDataDefinitions = await session.run(
            `CALL apoc.load.csv($presignedURL, {sep: \",\", compression: \"GZIP\", header: false}) YIELD lineNo, list 
            MATCH (b:CuratedDataset {curatedDatasetID: $curatedDatasetID})
            MERGE (b)-[:HAS_FIELD_DEFINITION]->(a: DataVariableFieldDefinition { xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo})
            RETURN a`,
          {curatedDatasetID, presignedURL: presignedURLCodebook}
        )
        const createDataVariables = await session.run(
          `
          CALL {
            MATCH (b: CuratedDataset {curatedDatasetID: $curatedDatasetID})-[:HAS_FIELD_DEFINITION]->(a: DataVariableFieldDefinition)
            RETURN a AS dvfd, b as cd
          }
          WITH dvfd
          CALL apoc.periodic.iterate(
            \'CALL apoc.load.csv($presignedURL, {sep: \" \", compression: \"GZIP\", header: false}) YIELD lineNo, list\',
            \'
            MATCH (b: CuratedDataset {curatedDatasetID: $curatedDatasetID})
            CREATE (dv: DataVariable {dataVariableID: apoc.create.uuid()})
            UNWIND dvfd AS fieldDef
            MERGE (dvf: DataVariableField {xref: fieldDef.xref, value: list[fieldDef.rank]})-[:HAS_FIELD_DEFINITION]->(dv)
            RETURN dv, dvf\',
            {batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedURL: $presignedURL}}
          )
          YIELD batches, total RETURN batches, total`,
          {curatedDatasetID: curatedDatasetID, presignedURL: presignedURLRaw}
        )
        return curatedDataset
      } catch (error) {
        console.log(error)
        throw new ApolloError('curatedDatasetFromRawDatasetNew', error )
      }
    },
    createCuratedDatasetFromRawDataset: async (parent, { name, description, rawDatasetID }, { driver, ogm, minioClient }) => {
      try {
        // Create model and add a curated dataset node to db
        const CuratedDatasetModel = ogm.model("CuratedDataset")
        const bucketName = `raw-dataset-${rawDatasetID}`

        const curatedDatasetInput = {name, description, generatedByRawDataset: {connect: {where: {node: {rawDatasetID}}}}}
        const { curatedDatasets: [curatedDataset] } = await CuratedDatasetModel.create({ input: [curatedDatasetInput],  })
        const { curatedDatasetID } = curatedDataset

        const session = driver.session()

        const bucketObjects = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
        // console.log(bucketObjects)
        const presignedURL = await makePresignedURL(minioClient, bucketName, bucketObjects.slice(-1)[0])
        // console.log(presignedURL)
        
        // original api with datavariables containing chr,start,end,datavalue
        // "CALL apoc.periodic.iterate(\'CALL apoc.load.csv($presignedURL, {sep: \" \", compression: \"GZIP\"}) YIELD list\', \'MATCH (b:CuratedDataset {curatedDatasetID: $curatedDatasetID}) CREATE (a:DataVariable {dataVariableID: apoc.create.uuid(), chromosome: list[0], start: toInteger(list[1]), end: toInteger(list[2]), datavalue: toFloat(list[3]) }), (b)-[:HAS_DATA_VARIABLE]->(a) RETURN a\', { batchSize:10000, iterateList: true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedURL: $presignedURL}})",

        const createCuratedDatasetFromRawDataset = await session.run(
          `CALL apoc.periodic.iterate(
            \'CALL apoc.load.csv($presignedURL, {sep: \" \", compression: \"GZIP\", header: false}) YIELD list\',
            \'MATCH (b:CuratedDataset {curatedDatasetID: $curatedDatasetID})
            CREATE (a:DataVariable {dataVariableID: apoc.create.uuid()}),
              (c:DataVariableField {name: \"chromosome\", value: list[0]}),
              (d:DataVariableField {name: \"start\", value: list[1]}),
              (e:DataVariableField {name: \"end\", value: list[2]}),
              (f:DataVariableField {name: \"datavalue\", value: list[3]}),
              (a)-[:HAS_FIELD]->(c), (a)-[:HAS_FIELD]->(d), (a)-[:HAS_FIELD]->(e), (a)-[:HAS_FIELD]->(f), (b)-[:HAS_DATA_VARIABLE]->(a)
            RETURN a\',
            {batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedURL: $presignedURL}}
          )`,
          {curatedDatasetID: curatedDatasetID, presignedURL: presignedURL}
        )

        return curatedDataset
      } catch (error) {
        console.log(error)
        throw new ApolloError('curatedDatasetFromRawDataset', error )
      }
    }
  },
}