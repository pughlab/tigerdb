import { listBucketObjects, makePresignedURL } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'
import { getHeaders } from './minio'


export const resolvers = {
  Query: {
    countEpitopes: async (_parent, _args, { driver }) => {
      const session = driver.session()
      const epitopeSpeciesList = await session.run("MATCH (a:AnnotationVariable) RETURN DISTINCT a.epitopeSpecies AS e")
      const annotationVariables = await session.run("MATCH (a:AnnotationVariable) RETURN a")
      const unlabelledVariables = await session.run("MATCH (n:DatasetVariable) RETURN COUNT(n) AS n")
      const results = []
      
      const epitopeSpeciesCount = {}
      epitopeSpeciesList.records.map((species) => {
        epitopeSpeciesCount[species.get('e')] = 0
      })

      annotationVariables.records.forEach((variable) => {
        const species = variable.get('a').properties['epitopeSpecies']
        epitopeSpeciesCount[species]++
      })

      Object.keys(epitopeSpeciesCount).forEach((key) => {
        results.push({ "epitopeSpecies": key, "count": epitopeSpeciesCount[key] })
      })

      results.push({"epitopeSpecies": "Unlabelled", "count": unlabelledVariables.records[0].get('n')})

      return results
    }
  },
  Mutation: {
    createCuratedAnnotationFromDataset: async (parent, { datasetID, bucketName, objectName, selectedDelimiter }, { driver, ogm, minioClient }) => {
      try {
        const session = driver.session()
        const inputFields = await getHeaders(session, objectName)

        // cdr3b: String
        // cdr3a: String
        // trbv: String
        // trbj: String
        // trav: String
        // traj: String
        // mhc: String
        // mhcClass: String
        // epitopeGene: String
        // epitopeAAseq: String
        // epitopeSpecies: String
        // mutation: String
        // reference: String
        // uniProt: String

        // Create model and add a curated dataset node to db
        const CuratedAnnotationModel = ogm.model("CuratedAnnotation")
        // const bucketName = `dataset-${datasetID}`

        const curatedAnnotationInput = {
          dataset: {connect: {where: {node: {datasetID}}}}, 
          minioUpload: {connect: {where: {node: {objectName}}}}
        }

        const { curatedAnnotations: [curatedAnnotation] } = await CuratedAnnotationModel.create({ input: [curatedAnnotationInput],  })
        const { curatedAnnotationID } = curatedAnnotation

        const presignedURL = await makePresignedURL(minioClient, bucketName, objectName)
        // const accessibleURL = presignedURL.replace('localhost', 'host.docker.internal'); // Replace with accessible hostname or IP

        // console.log(presignedURL)
        // const createAnnotationVariables = await session.run(
        //   `CALL apoc.periodic.iterate(\'CALL apoc.load.csv($presignedURL, {sep: \"TAB\"}) YIELD list\', \'MATCH (b:CuratedAnnotation {curatedAnnotationID: $curatedAnnotationID}) CREATE (a:AnnotationVariable {annotationVariableID: apoc.create.uuid(), locus: list[0], cdr3b: list[1], trbv: list[2], trbj: list[3], mhc: list[4], mhcClass: list[5], epitope: list[6], epitopeGene: list[7], epitopeSpecies: list[8], reference: list[9] }), (b)-[:HAS_ANNOTATION_VARIABLE]->(a) RETURN a\', { batchSize:10000, iterateList: true, parallel:true, params:{curatedAnnotationID: $curatedAnnotationID, presignedURL: $presignedURL}})`,
        //   // {curatedAnnotationID: curatedAnnotationID, presignedURL: 'file:///TCRDB_mini.tsv'}
        //   {curatedAnnotationID: curatedAnnotationID, presignedURL: presignedURL}
        // )

        const createAnnotationVariables = await session.run(`
          CALL apoc.periodic.iterate(
            'CALL apoc.load.csv($presignedURL, {sep: "TAB"}) YIELD list',
            'MATCH (b:CuratedAnnotation {curatedAnnotationID: $curatedAnnotationID}) 
            CREATE (a:AnnotationVariable {annotationVariableID: apoc.create.uuid(), ${inputFields.map(field => `${field.name.replace(/[^a-zA-Z0-9]/g, '')}: list[${field.index}]`).join(', ')} }), 
            (b)-[:HAS_ANNOTATION_VARIABLE]->(a) 
            RETURN a',
            { batchSize: 10000, iterateList: true, parallel: true, params: { curatedAnnotationID: $curatedAnnotationID, presignedURL: $presignedURL, inputFields: $inputFields } }
            )
          `, {curatedAnnotationID, presignedURL, inputFields}, 
        )


        // const createCuratedDatasetFromRawDataset = await session.run(
        //   `CALL apoc.periodic.iterate(
        //     \'CALL apoc.load.csv($presignedURL, {sep: \" \", compression: \"GZIP\", header: false}) YIELD list\',
        //     \'MATCH (b:CuratedDataset {curatedDatasetID: $curatedDatasetID})
        //     CREATE (a:DataVariable {dataVariableID: apoc.create.uuid()}),
        //       (c:DataVariableField {name: \"chromosome\", value: toFloat(apoc.text.replace(list[0],\"chr\",\"\")) }),
        //       (d:DataVariableField {name: \"start\", value: toInteger(list[1])}),
        //       (e:DataVariableField {name: \"end\", value: toInteger(list[2])}),
        //       (f:DataVariableField {name: \"datavalue\", value: toFloat(list[3])}),
        //       (a)-[:HAS_FIELD]->(c), (a)-[:HAS_FIELD]->(d), (a)-[:HAS_FIELD]->(e), (a)-[:HAS_FIELD]->(f), (b)-[:HAS_DATA_VARIABLE]->(a)
        //     RETURN a\',
        //     {batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedURL: $presignedURL}}
        //   )`,
        //   {curatedDatasetID: curatedDatasetID, presignedURL: presignedURL}
        // )

        return curatedAnnotation
      } catch (error) {
        console.log(error)
        throw new ApolloError('curatedAnnotationFromDataset', error )
      }
    }
  },
}