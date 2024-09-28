import { makeBucket } from '../../minio/minio'
import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {

  },
  Mutation: {
    createDataset: async (
      parent,
      {projectID, tags, name, description },
      { driver, ogm, minioClient }
    ) => {
      try {
        const DatasetModel = ogm.model("Dataset")

        const datasetInput = {
          name, description, tags, fromProject: {connect: {where: {node: {projectID}}}},
        }
        const { Datasets: [Dataset] } = await DatasetModel.create({ input: [datasetInput] })
        const { datasetID } = Dataset
        const bucketName = `dataset-${datasetID}`
        await makeBucket(minioClient, bucketName)

        const ProjectModel = ogm.model('Project')
        const { project } = await ProjectModel.find({
          where: { id: projectID }
        })

        if(!project) {
          throw new Error('Project not found')
        }

        await project.update({
          where: {projectID},
          connect: {Datasets: {where: {node: {datasetID}}}}
        })

        await DatasetModel.update({
          where: {datasetID}
        })
        return Dataset
      } catch (error) {
        console.log('createDataset', error)
        throw new ApolloError('createDataset', error as string)
      }
    },
    updateDataset: async (
      parent,
      {
        datasetID,
        name,
        filename,
        tags,
        runs,
        projects
      },
      {ogm}
    ) => {
      const DatasetModel = ogm.model('Dataset')
      const datasetInput = { name, filename, tags }

      const dataset = await DatasetModel.find({
        where: { id: datasetID }
      })

      if (!dataset) {
        throw new Error('Dataset not found')
      }

      await dataset.update({
        input:[{
          datasetInput,
          runs: {
            connect: runs.map((run: any) => ({
              where: { node: { run }}
            }))
          },
          projects: {
            connect: projects.map((project: any) => ({
              where: { node: { project }}
            }))
          }
        }]
      })

      return dataset.records[0].get(0).properties
    }
  },

  Dataset: {
    minioBucket: async (
      { datasetID },
      { },
      { minioClient }
    ) => {
      try {
        return {
          bucketName: `dataset-${datasetID}`
        }
      } catch (error) {
        console.log(error)
        throw new ApolloError('Dataset.miniobucket', error as string)
      }
    }
  },
}