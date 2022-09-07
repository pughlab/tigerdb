import { listBucketObjects } from '../../minio/minio'
import papa from 'papaparse'
import { ApolloError } from 'apollo-server'
import zlib from 'zlib'


export const resolvers = {
  Query: {

  },
  Mutation: {
    createCuratedDatasetFromRawDataset: async (parent, { name, description, rawDatasetID }, { driver, ogm, minioClient }) => {
      try {
        // Create model and add a curated dataset node to db
        const CuratedDatasetModel = ogm.model("CuratedDataset")
        const bucketName = `raw-dataset-${rawDatasetID}`

        const { curatedDatasets: [curatedDataset] } = await CuratedDatasetModel.create({ input: [{ name, description }] })
        const { curatedDatasetID } = curatedDataset

        const bucketItemNames = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
        console.log(bucketItemNames)

        // get last uploaded item in bucket (slice[-1][0]) and return stream 
        const stream = await minioClient.getObject(bucketName, bucketItemNames.slice(-1)[0])
        // gunzip stream
        const compressedFileStream = stream.pipe(zlib.createGunzip())

        async function dataVariableTransformation() {
          let result = { meta: {}, data: [] };
          // let result = []
          await new Promise((resolve, reject) => {
            papa.parse(compressedFileStream, {
              worker: true,
              delimiter: " ",
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
          // var i = 0, len = result.data.length
          // while (i < len) {
          
          for (let i = 0; i < result.data.length; i += chunkSize) {
          const chunk = result.data.slice(i, i + chunkSize);
          console.log("NOW PROCESSING CHUNK: "+i)
          // console.log(chunk)
          await Promise.all(chunk.map(async (result) => {
          // for (let i = 0; i < result.data.length; i += 4) {
            //gathering all chr1, putting into array named 'chromosome'
            const chromosome = result[0]
            const start = result[1]
            const end = result[2]

            const datavalue = result[3]

            const DataVariableModel = ogm.model("DataVariable");

            const { dataVariables: [dataVariable] } = await DataVariableModel.create({ input: [{ chromosome: chromosome, start: parseInt(start), end: parseInt(end), datavalue: parseFloat(datavalue) }] })
            const { dataVariableID, ...dataVariableRest } = dataVariable

            await CuratedDatasetModel.update({
              where: { curatedDatasetID },
              update: {
                dataVariables: {
                  connectOrCreate: {
                    where: { node: { dataVariableID } },
                    onCreate: { node: dataVariableRest }
                  }
                }
              }
            })

          }))
          // i+=chunkSize
          console.log("done neo4j transformation")
        }}
        dataVariableTransformation()
        return curatedDataset
      } catch (error) {
        console.log(error)
        throw new ApolloError('curatedDatasetFromRawDataset', error )
      }
    }
  },
}