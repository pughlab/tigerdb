import { makeBucket } from '../../minio/minio';
import { ApolloError } from "apollo-server";

export const resolvers = {
  Query: {
    getRuns: async (obj, {}, { ogm, kauth }) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content;
        const UserModel = ogm.model("KeycloakUser");
        const user = await UserModel.find({
          where: { keycloakUserID: keycloakUserID },
        });
        if (!user) {
          throw new Error("User not found");
        }

        const RunModel = ogm.model("Run");
        const selectionSet = `{
          runID
          name
          description
          createdBy {
            keycloakUserID
            email
            name
          }
          createdOn
          status
          datasets {
            datasetID
            name
          }
        }`;
        RunModel.selectionSet = selectionSet;
        const runs = await RunModel.find({
          where: { createdBy: user[0] },
        });

        return runs;
      } catch (error) {
        console.log("getRuns", error);
        throw new ApolloError("getRuns", error as string);
      }
    }



  },
  Mutation: {
    createRunWithMinioBucket: async (
      parent,
      { name, description, datasetIDs },
      { ogm, kauth, minioClient }
    ) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content;
        const UserModel = ogm.model("KeycloakUser");
        const user = await UserModel.find({
          where: {keycloakUserID: keycloakUserID}
        });
        if (!user) {
          throw new Error("User not found");
        }

        // const ProjectModel = ogm.model("Project");
        // const { project } = await ProjectModel.find({
        //   where: { id: projectID },
        // });

        // if (!project) {
        //   throw new Error("Project not found");
        // }

        const RunModel = ogm.model("Run");
        const runInput = { 
          name, 
          description,
          createdBy: {
            connect: {
              where: { node: { keycloakUserID: user[0].keycloakUserID }}
            }
          },
          datasets: {
            connect: datasetIDs.map((datasetID: string) => ({
              where: { node: { datasetID: datasetID }}
            }))
          },

          // should we connect to project?
          // project: {
          //   connect: {
          //     where: { node: { projectID: projectID }}
          //   }
          // },
        }
        const {runs: [run]} = await RunModel.create({
          input: [runInput],
        })

        const { runID } = run
        const bucketName = `run-${runID}`
        await makeBucket(minioClient, bucketName)

        console.log('Created run is:')
        console.log(run)
        return run //.records[0].get(0).properties
      } catch (error) {
        console.log("createRunWithMinioBucket", error);
        throw new ApolloError("createRunWithMinioBucket", error as string);
      }
    },
    updateRun: async (
      parent,
      { runID, wesID, name, description, datasets },
      { ogm }
    ) => {
      try {
        const RunModel = ogm.model("Run");
        const run  = await RunModel.find({
          where: { id: runID }
        })
        if (!run) {
          throw new Error('Run not found')
        }

        const runInput = { wesID, name, description }
        await run.update({
          input: [{
            runInput,
            datasets: {
              connect: datasets.map((dataset: any) => ({
                where: { node: { dataset }}
              }))
            }
          }]
        })

        return run.records[0].get(0).properties
      } catch (error) {
        console.log("updateRun", error);
        throw new ApolloError("updateRun", error as string);
      }
    },
  },
};
