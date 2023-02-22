if (process.argv.length !== 8) {
  console.error(`Expected 6 arguments (got ${process.argv.length - 2})!
  
  e.g. TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/createCuratedDatasetFromRawDataset.ts {rawDatasetID} {rawObjectName} {codebookObjectName} {neo4j|programmatic} 111222,111222,111333 111aaa,111bbb,333aaa

  e.g. TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/createCuratedDatasetFromRawDataset.ts 7ec33aac-9209-4948-8804-8cc115bc8b20 rawdata_sample_3.csv.gz codebook_sample_3.csv.gz neo4j 111222,111222,111333 111aaa,111bbb,333aaa

  e.g. TS_NODE_TRANSPILE_ONLY=true TS_NODE_PROJECT=tsconfig.api.json npx nodemon --watch api/src/funnel/programmaticLoad.ts --exec "node --require ts-node/register" --inspect=0.0.0.0:9232 -r ts-node/register api/src/funnel/programmaticLoad.ts 7ec33aac-9209-4948-8804-8cc115bc8b20 "rawdata_sample_4.csv.gz" "codebook_sample_3.csv.gz" neo4j %allowedSites,%allowedSites,%allowedStudies Vancouver,Toronto,Milk
  
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
import { v4 as uuidv4 } from 'uuid';

(async function () {

  const curatedDatasetID = uuidv4()

  const rawDatasetID = process.argv[2]

  const rawObjectName = process.argv[3]
  // const rawObjectName = 'rawdata_sample_4.csv.gz'
  // const rawObjectName = 'Data-Table 1.csv.gz'
  // const rawObjectName = 'test3m.bedgraph.gz'

  const codebookObjectName = process.argv[4]
  // const codebookObjectName = "codebook_sample_3.csv.gz"

  // const mode = 'programmatic'
  const mode = 'neo4j'
  // const mode = process.argv[5]

  const properties = process.argv[6]
  // const properties = ''
  const values = process.argv[7]
  // const values = ''

  let permissions_map = {}
  const properties_split = properties.split(',')
  const values_split = values.split(',')

  if (properties_split.length !== values_split.length) {
    console.error(`Arguments 5 and 6 must be comma separated strings that are the same length.`);
    process.exit(1);
  }

  properties_split.forEach((prop, index) => {
    const val = values_split[index]

    if (prop == '') {
      return
    }

    if (!(prop in permissions_map)) {
      permissions_map[prop] = []
    }
    permissions_map[prop].push(val)

  })
  
  const permissions_codebook = {'%permissions_codebook': Object.keys(permissions_map)}

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

  // const curatedDatasetInput = {name: 'test', description: 'testgen',
  //                              generatedByRawDataset: {connect: {where: {node: {rawDatasetID}}}},
  //                              ...permissions_map
  //                             }
  // const { curatedDatasets: [curatedDataset] } = await CuratedDatasetModel.create({ input: [curatedDatasetInput],  })
  // const { curatedDatasetID } = curatedDataset

  await session.run(`
  CREATE (n:CuratedDataset {curatedDatasetID: "${curatedDatasetID}"})
  SET n += $permissions_map
  SET n += $permissions_codebook
  `, {permissions_map: permissions_map, permissions_codebook: permissions_codebook})

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
    MERGE (cd)-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition { xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo, dataVariableFieldDefinitionID: apoc.create.uuid()})
    SET dvfd += $permissions_map
    ;`,
    {curatedDatasetID: curatedDatasetID, presignedCodebookURL: presignedURLCodebook, 'permissions_map': permissions_map}
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
        // SET dv += $permissions_map
        // ',
        // {batchSize:10000, iterateList:true, parallel:true, params:{argsToUpdate: $argsToUpdate, permissions_map: $permissions_map}}
        // )
        // YIELD batches, total, timeTaken, operations, updateStatistics
        // RETURN batches, total, timeTaken, operations, updateStatistics;`, {'argsToUpdate': chunk, permissions_map: permissions_map})



        // // neo4j unwind
        // const vvv = await session.run(`
        //   MATCH (cd: CuratedDataset {curatedDatasetID: "${curatedDatasetID}"})
        //   UNWIND $argsToUpdate AS args
        //   CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: "${curatedDatasetID}", dataVariableID: apoc.create.uuid()})
        //   SET dv += args
        //   SET dv += $permissions_map
        //   ;`, {'argsToUpdate': chunk, permissions_map: permissions_map})




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
          SET dv += $permissions_map
          ;
          `, {argsToUpdate: result, permissions_map: permissions_map})

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
    SET dv += $permissions_map
    ;',
    {batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL, permissions_map: $permissions_map}}
    )
    YIELD batches, total, timeTaken, operations, updateStatistics
    RETURN batches, total, timeTaken, operations, updateStatistics;`,
        {curatedDatasetID: curatedDatasetID, presignedDataURL: presignedURLRaw, permissions_map: permissions_map}
      )
    





  } else {
    console.log(`invalid mode: ${mode}`)
  }


  console.timeEnd('5')
  console.time('6')
  process.exit();
  return curatedDataset
})()