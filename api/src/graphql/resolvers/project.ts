import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {
    getProjects: async (obj, args, {ogm, kauth})=> {
      try {
        const keycloakUserID = kauth.accessToken?.content.sub ?? null
        const filters = {}

        if (keycloakUserID) {
          const UserModel = ogm.model('KeycloakUser')
          const user = await UserModel.find({
            where: {keycloakUserID: keycloakUserID}
          })
          if (!user) {
            throw new Error('User not found')
          }
          filters.OR = [
            { createdBy: user[0] },
            { isPublic: true },
            { sharedWith: user[0] }
          ]
        } else {
          filters.isPublic = true;
        }

        // Use the single projectID only if no projectIDs array was provided.
        // If both are provided, projectIDs will be used.
        if (args?.projectID && !args?.projectIDs) {
          filters.projectID = args.projectID;
        } else if (args?.projectIDs) {
          filters.projectID_IN = args.projectIDs;
        }

        if (args?.query !== '') {
          filters.AND = [{
            OR: [
              { name_CONTAINS: args.query },
              { description_CONTAINS: args.query },
              { datasets: { 
                  tags: { 
                    OR: [
                      { name_CONTAINS: args.query },
                      { category_CONTAINS: args.query}
                    ]
                  }
                } 
              }
            ]
          }]
        }

        const ProjectModel = ogm.model('Project')
        const selectionSet = `{
          projectID
          name
          createdOn
          isPublic
          isReference
          description
          datasets {
            datasetID
            name
            tags {
              tagID
              name
              category
            }
            minioUpload {
              objectName
              filename
            }
          }
          createdBy {
            keycloakUserID
            name
            email
          }
        }`
        ProjectModel.selectionSet = selectionSet
        const projects = await ProjectModel.find({
          where: filters,
        })

        console.log(`args: ${JSON.stringify(args)}`)
        return projects
      } catch (error) {
        console.log('getProjects', error)
        throw new ApolloError('getProjects', error as string)
      }
    },
    countUnlabelledVariables: async (_obj, _args, { driver }) => {
      const session = driver.session()
      const unlabelledVarsList = await session.run(`
        MATCH (p:Project)
        OPTIONAL MATCH (p)-[:HAS_DATASET]->(d:Dataset)
        OPTIONAL MATCH (d)-[:HAS_CURATED_DATASET]->(c:CuratedDataset)
        OPTIONAL MATCH (c)-[:HAS_DATASET_VARIABLE]->(v:DatasetVariable)
        RETURN p AS projects, count(v) AS varCount`
      )
      const projectData: any[] = []
      console.log(unlabelledVarsList)
      unlabelledVarsList.records.forEach((record) => {
        projectData.push({
          name: record.get('projects').properties['name'],
          count: record.get('varCount')
        })
      })
      console.log(projectData)
      // const projectData = unlabelledVarsList.records.map((record) => {
      //   console.log(record.get('projects'))
      //   console.log(record.get('datasets'))
      //   console.log(record.get('varCount'))
      //   return {
      //     projects: [
      //       {
      //         name: record.get('projects').properties['name'],
      //         datasets: record.get('datasets').map(
      //           (dataset) => ({ name: dataset.properties['name'], count: record.get('varCount') })
      //         ),
      //       },
      //     ],
      //   }
      // })
      return projectData
    },
    isProjectOwner: async (_obj, { projectID }, { driver, kauth }) => {
      try {
        const keycloakUserID = kauth.accessToken?.content?.sub ?? undefined
        if (!keycloakUserID) {
          throw new Error('User not logged in')
        }
        const session = driver.session()
        const project = await session.run(
          `MATCH (p:Project { projectID: $projectID })-[:CREATED_BY]->(u:KeycloakUser { keycloakUserID: $keycloakUserID }) RETURN p, u`,
          { projectID, keycloakUserID }
        )
        return project.records.length > 0
      } catch (error) {
        console.log('isProjectOwner', error)
        throw new ApolloError('isProjectOwner', error as string)
      }
    }
  },
  Mutation: {
    createProject: async (
      obj,
      {name, description, isReference}, // missing data fill out here
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
          isReference: isReference ?? false,
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
    makeProjectPublic: async (parent, { projectID }, { ogm, kauth }) => {
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

        const project = await ProjectModel.find({
          where: { projectID: projectID }
        })
        if (project?.length === 0) {
          throw new Error('Project not found')
        }

        const result = await ProjectModel.update({
          where: { projectID: projectID },
          update: { isPublic: true }
        })
        
        return result.projects[0]
      } catch (error) {
        console.log("makeProjectPublic", error);
        throw new ApolloError("makeProjectPublic", error as string);
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