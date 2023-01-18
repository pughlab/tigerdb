if (process.argv.length !== 5) {
  console.error(`Expected 3 arguments (got ${process.argv.length - 2})!
  
  e.g. TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/createCuratedDatasetFromRawDataset.ts {rawDatasetID} {rawObjectName} {codebookObjectName}

  TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/createCuratedDatasetFromRawDataset.ts 7ec33aac-9209-4948-8804-8cc115bc8b20 rawdata_sample_3.csv.gz codebook_sample_3.csv.gz
  
  `);
  process.exit(1);
}

import {OGM} from '@neo4j/graphql-ogm'
import {neo4jSchema, typeDefs, resolvers} from '../graphql/schema'
import { driver } from '../graphql/neo4j'
import { listBucketObjects, makePresignedURL } from '../minio/minio'
import { minioClient } from '../minio/minio';

(async function () {

  const rawDatasetID = process.argv[2]
  const rawObjectName = process.argv[3]
  const codebookObjectName = process.argv[4]

  // const rawDatasetID = "7ec33aac-9209-4948-8804-8cc115bc8b20"
  // const rawObjectName = "rawdata_sample_3.csv.gz"
  // const codebookObjectName = "codebook_sample_3.csv.gz"

  const ogm = new OGM({typeDefs, driver, resolvers})
  console.log('1')
  await ogm.init()
  console.log('2')

  const CuratedDatasetModel = ogm.model("CuratedDataset")
  const bucketName = `raw-dataset-${rawDatasetID}`

  const curatedDatasetInput = {name: 'test', description: 'testgen', generatedByRawDataset: {connect: {where: {node: {rawDatasetID}}}}}
  const { curatedDatasets: [curatedDataset] } = await CuratedDatasetModel.create({ input: [curatedDatasetInput],  })
  const { curatedDatasetID } = curatedDataset

  console.log('3')
  const session = driver.session()
  console.log('4')

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
  console.log('5')
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
  console.log('6')
  process.exit();
  return curatedDataset
})()