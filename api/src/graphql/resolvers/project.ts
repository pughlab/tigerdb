import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {
    getProjects: async (obj, {}, {ogm, kauth})=> {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content
        const UserModel = ogm.model('KeycloakUser')
        const user = await UserModel.find({
          where: {keycloakUserID: keycloakUserID}
        })
        if (!user) {
          throw new Error('User not found')
        }
        const filters = {
          OR: [
            { createdBy: user[0] },
            { isPublic: true },
            //{ sharedWith_IN: [user[0]] }
          ]
        }
        // if (name) {
        //   filters.name = name
        // }

        // if (description) {
        //   filters.description = description
        // }

        const ProjectModel = ogm.model('Project')
        const selectionSet = `{
          projectID
          name
          createdOn
          isPublic
          description
          createdBy {
            keycloakUserID
            name
            email
          }
        }`
        ProjectModel.selectionSet = selectionSet
        const projects = await ProjectModel.find({
          where: filters,
        }
      )

        return projects
      } catch (error) {
        console.log('getProjects', error)
        throw new ApolloError('getProjects', error as string)
      }
    }
  },
  Mutation: {
    createProject: async (
      obj,
      {name, description}, // missing data fill out here
      { ogm, kauth }
    ) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content
        const UserModel = ogm.model('KeycloakUser')
        const user = await UserModel.find({
          where: {keycloakUserID: keycloakUserID}
        })
        if (!user) {
          throw new Error('User not found')
        }
        const ProjectModel = ogm.model('Project')
        const projectInput = {
          name,
          description,
          isPublic: false,
          sharedWith: [],
          // datasets: [],
          // runs: [],
          createdBy: { 
            connect: {
              where: { node: { keycloakUserID: user[0].keycloakUserID }}
            }
        }}
        const {projects: [project]} = await ProjectModel.create({ 
          input: [projectInput]
        })
        console.log('Created project is:')
        console.log(project)
        return project//.records[0].get(0).properties 
      } catch (error) {
        console.log('createProject', error)
        throw new ApolloError('createProject', error as string)
      }
    },
    updateProject: async (
      parent,
      {projectID, name, description, sharedWith, isPublic, datasets},
      {ogm, kauth}
    ) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content
        const UserModel = ogm.model('KeycloakUser')
        const user = await UserModel.find({
          where: {keycloakUserID: keycloakUserID}
        })
        if (!user) {
          throw new Error('User not found')
        }

        const ProjectModel = ogm.model('Project')

        const projectInput = { name, description, sharedWith, isPublic }
        const { project } = await ProjectModel.find({
          where: { projectID: projectID }
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
          where: { projectID: projectID }
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