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
        // get input headers later from non-header generated file
        // const inputFields = await getHeaders(session, objectName)

        const inputFields = [
          { name: 'cdr3b', index: 0 },
          { name: 'cdr3a', index: 1 },
          { name: 'trbv', index: 2 },
          { name: 'trav', index: 3 },
          { name: 'trbj', index: 4 },
          { name: 'traj', index: 5 },
          { name: 'mhc', index: 6 },
          { name: 'mhcClass', index: 7 },
          { name: 'epitopeAAseq', index: 8 },
          { name: 'epitopeGene', index: 9 },
          { name: 'mutation', index: 10 },
          { name: 'recognizesWTEpitope', index: 11 },
          { name: 'epitopeSpecies', index: 12 },
          { name: 'antigenClass', index: 13 },
          { name: 'reference', index: 14 },
          { name: 'uniProt', index: 15 },
          { name: 'notes', index: 16 },
        ]
        
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
        // antigenClass: String
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
            'CALL apoc.load.csv($presignedURL, {sep: "\t", header: true}) YIELD list',
            'MATCH (b:CuratedAnnotation {curatedAnnotationID: $curatedAnnotationID}) 
            CREATE (a:AnnotationVariable {annotationVariableID: apoc.create.uuid(), ${inputFields.map(field => `${field.name}: list[${field.index}]`).join(', ')} }), 
            (b)-[:HAS_ANNOTATION_VARIABLE]->(a) 
            RETURN a',
            { batchSize: 10000, iterateList: true, parallel: true, params: { curatedAnnotationID: $curatedAnnotationID, presignedURL: $presignedURL, inputFields: $inputFields } }
            )
          `, {curatedAnnotationID, presignedURL, inputFields}
        )

        // Generate tags for the dataset from the uploaded annotations
        await session.run(`
          MATCH (b:CuratedAnnotation {curatedAnnotationID: $curatedAnnotationID})-[:HAS_ANNOTATION_VARIABLE]->(a:AnnotationVariable)
          WHERE a.epitopeSpecies IS NOT NULL AND a.antigenClass IS NOT NULL
          WITH a, toLower(a.epitopeSpecies) AS rawSpecies, toLower(a.antigenClass) AS rawClass
          WITH a,
            CASE WHEN rawSpecies = 'human' THEN rawSpecies ELSE rawClass END AS tCategory,
            CASE WHEN rawSpecies = 'human' THEN rawClass ELSE rawSpecies END AS tName
          WHERE tName <> '' AND tName IS NOT NULL
          MATCH (d:Dataset {datasetID: $datasetID})
          MERGE (t:Tag {name: tName})
          ON CREATE SET t.tagID = apoc.create.uuid(), t.category = tCategory
          ON MATCH SET t.category = tCategory
          MERGE (d)-[:HAS_TAG]->(t)
          MERGE (a)-[:HAS_TAG]->(t)
        `, { curatedAnnotationID, datasetID })



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