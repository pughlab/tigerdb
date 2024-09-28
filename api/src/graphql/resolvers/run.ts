import { ApolloError } from "apollo-server";

export const resolvers = {
  Query: {},
  Mutation: {
    createRun: async (
      parent,
      { projectID, name, datasets, description, wesID },
      { ogm, kauth }
    ) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content;
        const UserModel = ogm.model("KeycloakUser");
        const user = await UserModel.find({
          where: { id: keycloakUserID },
        });
        if (!user) {
          throw new Error("User not found");
        }

        const ProjectModel = ogm.model("Project");
        const { project } = await ProjectModel.find({
          where: { id: projectID },
        });

        if (!project) {
          throw new Error("Project not found");
        }

        const RunModel = ogm.model("Run");
        const runInput = { description, name, wesID, status: "pending" };
        const run = await RunModel.create({
          input: runInput,
          createdBy: {
            connect: {
              where: { node: { id: keycloakUserID }}
            }
          },
          datasets: {
            connect: datasets.map((dataset: any) => ({
              where: { node: { dataset }}
            }))
          }
        });

        return run.records[0].get(0).properties
      } catch (error) {
        console.log("createRun", error);
        throw new ApolloError("createRun", error as string);
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
