if (process.argv.length !== 9) {
  console.error(`Expected 7 arguments (got ${process.argv.length - 2})!

  e.g. TS_NODE_TRANSPILE_ONLY=true TS_NODE_PROJECT=tsconfig.api.json npx nodemon --watch api/src/funnel/programmaticExport.ts --exec "node --require ts-node/register" --inspect=0.0.0.0:9232 -r ts-node/register api/src/funnel/programmaticExport.ts 6cf31f33-1696-48cf-97d2-3cd4cec2e1e3 0027aa5d-9a0f-40f1-b7e6-7e070953acc7 802d6267-1b27-42c6-ac8f-cad7d3ab4d70 neo4j %permission_allowedSites,%permission_allowedSites,%permission_allowedStudies Vancouver,Toronto,Milk ydelall|ndelall
  
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
import * as R from 'remeda'

(async function () {

  const ogm = new OGM({typeDefs, driver, resolvers})
  await ogm.init()
  
  console.time('1')

  const session = driver.session()

  const CuratedDatasetModel = ogm.model("CuratedDataset")
  const DataVariableFieldDefinitionModel = ogm.model("DataVariableFieldDefinition")
  const DataVariableModel = ogm.model("DataVariable")

  const dvfdIDs = ['fa95d024-132b-4f16-b3ac-2011c7264cf9', 'b406a8f2-74f4-4df5-a83b-01b079267abf']
  const r = await DataVariableFieldDefinitionModel.find({where: {dataVariableFieldDefinitionID_IN: dvfdIDs}})

  let dvfdToCd = {}
  let cdToDvfd = {}
  let dvfdToXref = {}
  let xrefToDvfd = {}

  await Promise.all(dvfdIDs.map(async (dvfdID) => {
    const cd = await CuratedDatasetModel.find({where: {fieldDefinitions_SOME: {dataVariableFieldDefinitionID: dvfdID}}})
    const dvfd = await DataVariableFieldDefinitionModel.find({where: {dataVariableFieldDefinitionID: dvfdID}})

    const cdID = cd[0].curatedDatasetID
    const xref = dvfd[0].xref

    dvfdToCd[dvfdID] = cdID
    if (!cdToDvfd.hasOwnProperty(cdID)) {
      cdToDvfd[cdID] = []
    }
    cdToDvfd[cdID].push(dvfdID)

    dvfdToXref[dvfdID] = xref
    xrefToDvfd[xref] = dvfdID

  }))

  let papaFields = R.keys(xrefToDvfd)
  // papaFields.unshift('StudyCenter')
  // papaFields.unshift('CHILDid')

  let ret = []

  await Promise.all(R.keys(cdToDvfd).map(async (cdID) => {
    let rows = []

    // // OGM doesn't have properties that aren't in the graphql model
    // const dVs2 = await DataVariableModel.find({where: {curatedDataset: {curatedDatasetID: cdID}}})

    const dVs = await session.run(`
    MATCH (cd:CuratedDataset {curatedDatasetID: "${cdID}"})-[:HAS_DATA_VARIABLE]->(dv:DataVariable)
    RETURN dv
    `)

    dVs.records.forEach((record) => {
      const properties = record._fields[0].properties
      const dvfdIDs = cdToDvfd[cdID]
      let xrefs = R.map(dvfdIDs, (dvfdID) => { return dvfdToXref[dvfdID] })

      // xrefs.unshift('StudyCenter')
      // xrefs.unshift('CHILDid')

      const row = R.pick(properties, xrefs)
      ret.push(row)
      console.log()
    })

    cdToDvfd[cdID].map((dvfdID) => {
      const xref = dvfdToXref[dvfdID]

    })

  }))

  const csv = papa.unparse({
    fields: papaFields,
    data: ret
  }, {
    header: true
  })

  console.log(csv)

  const gzip = zlib.gzipSync(csv)

  const date = new Date()
  const formattedDate = date.toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/:/g, '-')
  const outFile = `${formattedDate}.csv.gz`
  const exportBucket = 'exports'

  try {
    const exists = await minioClient.bucketExists(exportBucket)
    if (!exists) {
      await minioClient.makeBucket(exportBucket)
    }
    await minioClient.putObject(exportBucket, outFile, gzip)
  } catch (error) {
    console.log(error)
  }

  process.exit();
})()