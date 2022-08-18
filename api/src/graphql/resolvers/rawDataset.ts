import { makeBucket } from '../../minio/minio'
import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {

  },
  Mutation: {
    createRawDatasetWithMinioBucket: async (
      parent,
      {studyID, name, description},
      { driver, ogm, minioClient }
    ) => {
      try {
        const RawDatasetModel = ogm.model("RawDataset")
        const { rawDatasets: [rawDataset] } = await RawDatasetModel.create({ input: [{ name, description }] })
        const { rawDatasetID } = rawDataset
        const bucketName = `raw-dataset-${rawDatasetID}`
        await makeBucket(minioClient, bucketName)

        const StudyModel = ogm.model('Study')
        const {studies: [study]} = await StudyModel.update({
          where: {studyID},
          connect: {rawDatasets: {where: {node: {rawDatasetID}}}}
        })
        return rawDataset
      } catch (error) {
        console.log('createRawDatasetWithMinio', error)
        throw new ApolloError('createRawDatasetWithMinio', error)
      }
    },
  },

  RawDataset: {
    minioBucket: async (
      { rawDatasetID },
      { },
      { minioClient }
    ) => {
      try {
        return {
          bucketName: `raw-dataset-${rawDatasetID}`
        }
      } catch (error) {
        console.log(error)
        throw new ApolloError('rawdataset.miniobucket', error)
      }
    }
  },
}