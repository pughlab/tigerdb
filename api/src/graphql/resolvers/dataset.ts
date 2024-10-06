import { makeBucket } from '../../minio/minio'
import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {

  },
  Mutation: {
    createDatasetWithMinioBucket: async (
      parent,
      {projectID, tags, name },
      { driver, ogm, minioClient }
    ) => {
      try {
        const DatasetModel = ogm.model("Dataset")

        const datasetInput = {
          name, tags, project: {connect: {where: {node: {projectID}}}},
        }
        const { datasets: [dataset] } = await DatasetModel.create({ input: [datasetInput] })
        const { datasetID } = dataset
        const bucketName = `dataset-${datasetID}`
        await makeBucket(minioClient, bucketName)

        const ProjectModel = ogm.model('Project')
        // const { projects: [project] } = await ProjectModel.find({
        //   where: { id: projectID }
        // })

        // if(!project) {
        //   throw new Error('Project not found')
        // }

        // await project.update({
        //   where: {projectID},
        //   connect: {datasets: {where: {node: {datasetID}}}}
        // })

        const { projects: [project] } = await ProjectModel.update({
          where: { projectID },
          connect: { datasets: { where: { node: { datasetID } } } }
        })

        // await DatasetModel.update({
        //   where: {datasetID}
        // })

        return dataset

      } catch (error) {
        console.log('createDatasetWithMinioBucket', error)
        throw new ApolloError('createDatasetWithMinioBucket', error as string)
      }
    },
    //  undetermined if we will allow updating datasets:
    // updateDataset: async (
    //   parent,
    //   {
    //     datasetID,
    //     name,
    //     filename,
    //     tags,
    //     runs,
    //     projects
    //   },
    //   {ogm}
    // ) => {
    //   const DatasetModel = ogm.model('Dataset')
    //   const datasetInput = { name, filename, tags }

    //   const dataset = await DatasetModel.find({
    //     where: { id: datasetID }
    //   })

    //   if (!dataset) {
    //     throw new Error('Dataset not found')
    //   }

    //   await dataset.update({
    //     input:[{
    //       datasetInput,
    //       runs: {
    //         connect: runs.map((run: any) => ({
    //           where: { node: { run }}
    //         }))
    //       },
    //       projects: {
    //         connect: projects.map((project: any) => ({
    //           where: { node: { project }}
    //         }))
    //       }
    //     }]
    //   })

    //   return dataset.records[0].get(0).properties
    // }
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
        throw new ApolloError('dataset.minioBucket', error as string)
      }
    }
  },
}