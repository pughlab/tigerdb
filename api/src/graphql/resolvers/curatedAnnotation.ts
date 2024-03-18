import { listBucketObjects, makePresignedURL } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'


export const resolvers = {
  Query: {
    countEpitopeSpecies: async (_parent, _args, { driver }) => {
      const session = driver.session()
      const epitopeSpeciesList = await session.run("MATCH (a:AnnotationVariable) RETURN DISTINCT a.epitopeSpecies AS e")
      const annotationVariables = await session.run("MATCH (a:AnnotationVariable) RETURN a")
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

      return results
    }
  },
  Mutation: {
    createCuratedAnnotationFromRawDataset: async (parent, { name, description, rawDatasetID }, { driver, ogm, minioClient }) => {
      try {
        // Create model and add a curated dataset node to db
        const CuratedAnnotationModel = ogm.model("CuratedAnnotation")
        const bucketName = `raw-dataset-${rawDatasetID}`

        const curatedAnnotationInput = {name, description, generatedByRawDataset: {connect: {where: {node: {rawDatasetID}}}}}
        const { curatedAnnotations: [curatedAnnotation] } = await CuratedAnnotationModel.create({ input: [curatedAnnotationInput],  })
        const { curatedAnnotationID } = curatedAnnotation

        const session = driver.session()

        // const bucketObjects = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
        // // console.log(bucketObjects)
        // const presignedURL = await makePresignedURL(minioClient, bucketName, bucketObjects.slice(-1)[0])
        // // console.log(presignedURL)
        
        // original api with datavariables containing chr,start,end,datavalue
        const createCuratedAnnotationFromRawDataset = await session.run(
          `CALL apoc.periodic.iterate(\'CALL apoc.load.csv($presignedURL, {sep: \"TAB\"}) YIELD list\', \'MATCH (b:CuratedAnnotation {curatedAnnotationID: $curatedAnnotationID}) CREATE (a:AnnotationVariable {annotationVariableID: apoc.create.uuid(), locus: list[0], cdr3b: list[1], trbv: list[2], trbj: list[3], mhc: list[4], mhcClass: list[5], epitope: list[6], epitopeGene: list[7], epitopeSpecies: list[8], reference: list[9] }), (b)-[:HAS_ANNOTATION_VARIABLE]->(a) RETURN a\', { batchSize:10000, iterateList: true, parallel:true, params:{curatedAnnotationID: $curatedAnnotationID, presignedURL: $presignedURL}})`,
          {curatedAnnotationID: curatedAnnotationID, presignedURL: 'file:///VDJdb_MinimalScoreConfidence3_VersionII.tsv'}
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
        throw new ApolloError('curatedAnnotationFromRawDataset', error )
      }
    }
  },
}