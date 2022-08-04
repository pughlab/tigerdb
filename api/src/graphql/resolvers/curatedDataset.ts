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

        // async function dataVariableCreateAndUpdateNode(result) {
        //   const chromosome = result.data[0]
        //   const start = result.data[1]
        //   const end = result.data[2]

        //   const datavalue = result.data[3]
        //   // console.log(result.data[0])

        //   const DataVariableModel = ogm.model("DataVariable");

        //   const { dataVariables: [dataVariable] } = await DataVariableModel.create({ input: [{ chromosome: chromosome, start: parseInt(start), end: parseInt(end), datavalue: parseFloat(datavalue) }] })
        //   const { dataVariableID, ...dataVariableRest } = dataVariable
        

        //   await CuratedDatasetModel.update({
        //     where: { curatedDatasetID },
        //     update: {
        //       dataVariables: {
        //         connectOrCreate: {
        //           where: { node: { dataVariableID } },
        //           onCreate: { node: dataVariableRest }
        //         }
        //       }
        //     }
        //   })
        // }

        async function dataVariableTransformation() {
          let result = { meta: {}, data: [] };
          await new Promise((resolve, reject) => {
            papa.parse(compressedFileStream, {
              worker: true,
              delimiter: " ",
              step: (results) => {
                result.data.push(results.data[0]);
                result.data.push(results.data[1]);
                result.data.push(results.data[2]);
                result.data.push(results.data[3]);
                // dataVariableCreateAndUpdateNode(results)
                
              },
              complete: () => {
                resolve(result);
              },
              error: (err) => {
                reject(err);
              },
            })
          })
          for (let i = 0; i < result.data.length; i += 4) {

            //gathering all chr1, putting into array named 'chromosome'
            const chromosome = result.data[i]
            const start = result.data[i + 1]
            const end = result.data[i + 2]

            const datavalue = result.data[i + 3]

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
          }
        }
        await dataVariableTransformation()
        return curatedDataset
      } catch (error) {
        console.log(error)
        throw new ApolloError('curatedDatasetFromRawDataset', error )
      }
    }
  },
}