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
import zlib from 'zlib'
import papa from 'papaparse'
import util from 'util'


(async function () {

  const rawDatasetID = process.argv[2]
  // const rawObjectName = process.argv[3]
  const rawObjectName = 'Data-Table 1.csv.gz'
  // const rawObjectName = 'test3m.bedgraph.gz'
  // const codebookObjectName = process.argv[4]
  const codebookObjectName = "codebook_sample_3.csv.gz"

  // const mode = 'programmatic'
  const mode = 'neo4j'

  // const limit = 0
  // const limit = 5
  // const limit = 1200
  // const limit = 1000
  // const limit = 10000
  // const limit = 100000

  // const rawDatasetID = "7ec33aac-9209-4948-8804-8cc115bc8b20"
  // const rawObjectName = "rawdata_sample_3.csv.gz"

  console.log(``)
  console.log(`data_file = ${rawObjectName}`)
  console.log(`codebook_file = ${codebookObjectName}`)
  console.log(`mode = ${mode}`)
  // console.log(`limit = ${limit}`)
  console.log(``)

  const ogm = new OGM({typeDefs, driver, resolvers})
  console.time('1')

  const session = driver.session()

  await session.run(
    `CALL apoc.periodic.iterate('MATCH (n:DataVariable) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
    YIELD batches, total, timeTaken, operations, updateStatistics
    RETURN batches, total, timeTaken, operations, updateStatistics;`
  )

  await session.run(
    `CALL apoc.periodic.iterate('MATCH (n:DataVariableFieldDefinition) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
    YIELD batches, total, timeTaken, operations, updateStatistics
    RETURN batches, total, timeTaken, operations, updateStatistics;`
  )

  await session.run(
    `CALL apoc.periodic.iterate('MATCH (n:CuratedDataset) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
    YIELD batches, total, timeTaken, operations, updateStatistics
    RETURN batches, total, timeTaken, operations, updateStatistics;`
  )

  await ogm.init()
  console.timeEnd('1')
  console.time('2')

  const CuratedDatasetModel = ogm.model("CuratedDataset")
  const bucketName = `raw-dataset-${rawDatasetID}`

  const curatedDatasetInput = {name: 'test', description: 'testgen', generatedByRawDataset: {connect: {where: {node: {rawDatasetID}}}}}
  const { curatedDatasets: [curatedDataset] } = await CuratedDatasetModel.create({ input: [curatedDatasetInput],  })
  const { curatedDatasetID } = curatedDataset

  console.timeEnd('2')
  console.time('3')
  // const session = driver.session()
  console.timeEnd('3')
  console.time('4')

  const bucketObjects = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
  // console.log(bucketObjects)
  // const presignedURLRaw = await makePresignedURL(minioClient, bucketName, bucketObjects.slice(-1)[0])
  const presignedURLRaw = await makePresignedURL(minioClient, bucketName, rawObjectName)
  const presignedURLCodebook = await makePresignedURL(minioClient, bucketName, codebookObjectName)
  console.time(presignedURLCodebook, presignedURLRaw)

  // Load codebook
  const createDataVariables = await session.run(
    `
    CALL apoc.load.csv($presignedCodebookURL, {sep: ",", compression: "GZIP", header: false}) YIELD lineNo, list, map
    MATCH (cd:CuratedDataset {curatedDatasetID: $curatedDatasetID})
    MERGE (cd)-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition { xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo, dataVariableFieldDefinitionID: apoc.create.uuid()});`,
    {curatedDatasetID: curatedDatasetID, presignedCodebookURL: presignedURLCodebook}
  )

  console.timeEnd('4')
  console.time('5')

  console.log(`${mode} load dv`)
  if (mode === 'programmatic') {

    // get last uploaded item in bucket (slice[-1][0]) and return stream 
    const stream = await minioClient.getObject(bucketName, rawObjectName)
    // gunzip stream
    const compressedFileStream = stream.pipe(zlib.createGunzip())

    async function dataVariableTransformation() {
      let result = { meta: {}, data: [] };
      // let result = []
      await new Promise((resolve, reject) => {
        papa.parse(compressedFileStream, {
          worker: true,
          header: true,
          delimiter: ",",
          // preview: limit,
          step: (results) => {
            result.data.push(results.data)
          },
          complete: () => {
            resolve(result);
          },
          error: (err) => {
            reject(err);
          },
        })
      })
      const chunkSize = 1000;
      console.log(result.data.length)
      // result.data = result.data.slice(0, limit);
      console.log(result.data.length)
      
      for (let i = 0; i < result.data.length; i += chunkSize) {
        const chunk = result.data.slice(i, i + chunkSize);
        console.log("NOW PROCESSING CHUNK: "+i)



        // // neo4j iterate
        // const vvv = await session.run(`
        // CALL apoc.periodic.iterate('
        // UNWIND $argsToUpdate AS args
        // RETURN args
        // '
        // ,
        // '
        // MATCH (cd: CuratedDataset {curatedDatasetID: "${curatedDatasetID}"})
        // CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: "${curatedDatasetID}", dataVariableID: apoc.create.uuid()})
        // SET dv += args
        // ',
        // {batchSize:10000, iterateList:true, parallel:true, params:{argsToUpdate: $argsToUpdate}}
        // )
        // YIELD batches, total, timeTaken, operations, updateStatistics
        // RETURN batches, total, timeTaken, operations, updateStatistics;`, {'argsToUpdate': chunk})



        // // neo4j unwind
        // const vvv = await session.run(`
        //   MATCH (cd: CuratedDataset {curatedDatasetID: "${curatedDatasetID}"})
        //   UNWIND $argsToUpdate AS args
        //   CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: "${curatedDatasetID}", dataVariableID: apoc.create.uuid()})
        //   SET dv += args
        //   ;`, {'argsToUpdate': chunk})




        // js promise.all
        // console.log(chunk)
        await Promise.all(chunk.map(async (result) => {
          const chromosome = result[0]
          const start = result[1]
          const end = result[2]

          const datavalue = result[3]

          const DataVariableModel = ogm.model("DataVariable");

          const sessionNest = driver.session()

          // console.log(util.inspect(result))

          const vvv = await sessionNest.run(`
          MATCH (cd: CuratedDataset {curatedDatasetID: "${curatedDatasetID}"})
          CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: "${curatedDatasetID}", dataVariableID: apoc.create.uuid()})
          SET dv += $argsToUpdate
          ;
          `, {argsToUpdate: result})

        }))




        console.log("done neo4j transformation")
    }}
    await dataVariableTransformation()
  } else if (mode === 'neo4j') {


    const createDataValues = await session.run(
        `
        CALL apoc.periodic.iterate('
        CALL apoc.load.csv($presignedDataURL, {sep: ",", compression: "GZIP", header: true}) YIELD map
    RETURN map
    '
    ,
    '
    MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})
    CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: $curatedDatasetID, dataVariableID: apoc.create.uuid()})
    SET dv += map
    ;',
    {batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL}}
    )
    YIELD batches, total, timeTaken, operations, updateStatistics
    RETURN batches, total, timeTaken, operations, updateStatistics;`,
        {curatedDatasetID: curatedDatasetID, presignedDataURL: presignedURLRaw}
      )
    





  } else {
    console.log(`invalid mode: ${mode}`)
  }


  console.timeEnd('5')
  console.time('6')
  process.exit();
  return curatedDataset
})()