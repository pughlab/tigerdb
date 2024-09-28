import { ApolloError } from 'apollo-server'
import { connect } from 'http2'

export const resolvers = {
  Query: {

  },
  Mutation: {
    createProject: async (
      parent,
      {name, description}, // missing data fill out here
      { ogm, kauth }
    ) => {
      try {

        const { sub: keycloakUserID } = kauth.accessToken.content
        const UserModel = ogm.model('KeycloakUser')
        const user = await UserModel.find({
          where: {id: keycloakUserID}
        })
        if (!user) {
          throw new Error('User not found')
        }
        
        const ProjectModel = ogm.model('Project')
        const projectInput = {name, description, public: false, sharedWith: []}
        const {project} = await ProjectModel.create({ 
          input: projectInput,
          createdBy: {
            connect: {
              where: { node: { id: keycloakUserID }}
            }
          }
        })

        return project.records[0].get(0).properties 
      } catch (error) {
        console.log('createProject', error)
        throw new ApolloError('createProject', error as string)
      }
    },
    updateProject: async (
      parent,
      {projectID, name, description, sharedWith, isPublic, datasets, runs},
      {ogm, kauth}
    ) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content
        const UserModel = ogm.model('KeycloakUser')
        const user = await UserModel.find({
          where: {id: keycloakUserID}
        })
        if (!user) {
          throw new Error('User not found')
        }

        const ProjectModel = ogm.model('Project')

        const projectInput = { name, description, sharedWith, isPublic }
        const { project } = await ProjectModel.find({
          where: { id: projectID }
        })
        if (!project) {
          throw new Error('Project not found')
        }
        await project.update({
          input: [{
            projectInput,
            connect: datasets.map((dataset: any) => ({
              where: { node: { dataset }}
            }))
          }]
        })

        return project.records[0].get(0).properties
      } catch (error) {
        console.log('updateProject', error)
        throw new ApolloError('updateProject', error as string)
      }
    },
    addDatasetsToProject: async (
      parent,
      { projectID, datasets },
      { ogm }
    ) => {
      try {
        const ProjectModel = ogm.model('Project')

        const { project } = await ProjectModel.find({
          where: { id: projectID }
        })
        if (!project) {
          throw new Error('Project not found')
        }
        await project.update({
          input: [{
            connect: datasets.map((dataset: any) => ({
              where: { node: { dataset }}
            }))
          }]
        })
      } catch (error) {
        console.log("addDatasetsToProject", error);
        throw new ApolloError("addDatasetsToProject", error as string);
      }
    }
  }

}