import { makeBucket } from '../../minio/minio';
import { ApolloError } from "apollo-server";

export const resolvers = {
  Query: {
    getRuns: async (obj, args, { ogm, kauth }) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content;
        const UserModel = ogm.model("KeycloakUser");
        const user = await UserModel.find({
          where: { keycloakUserID: keycloakUserID },
        });
        if (!user) {
          throw new Error("User not found");
        }

        const filters = {
          OR: [
            { createdBy: user[0] },
            // { isPublic: true },
            //{ sharedWith_IN: [user[0]] }
          ]
        }

        // Optionally add projectID to the filters if provided
        if (args.runID) {
          filters.runID = args.runID;
        }

        const RunModel = ogm.model("Run");
        const selectionSet = `{
          runID
          wesID
          name
          description
          createdBy {
            keycloakUserID
            email
            name
          }
          createdOn
          submittedOn
          status
          processedDatasets {
            objectName
            bucketName
            filename
          }
          runParameters {
            outPrefix
            localMinpValue
            pDepth
            globalConvergenceCutoff
            simulationDepth
            kmerMinDepth
            localMinOVE
            allAAInterchangeable
          }
        }`;
        RunModel.selectionSet = selectionSet;
        const runs = await RunModel.find({
          where: filters,
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
      { name, description, processedDatasets },
      { ogm, kauth, minioClient }
    ) => {
      try {
        const { sub: keycloakUserID } = kauth.accessToken.content;
        const UserModel = ogm.model("KeycloakUser");
        const user = await UserModel.find({
          where: { keycloakUserID: keycloakUserID }
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
        const RunParametersModel = ogm.model("RunParameters");


        const runInput = {
          name,
          description,
          createdBy: {
            connect: {
              where: { node: { keycloakUserID: user[0].keycloakUserID } }
            }
          },
          // datasets: {
          //   connect: datasetIDs.map((datasetID: string) => ({
          //     where: { node: { datasetID: datasetID }}
          //   }))
          // },
          // minioUploads: {
          //   connect: minioUploads.map((objectName: string) => ({
          //     where: { node: { objectName: objectName } }
          //   }))
          // },
          processedDatasets: {
            connect: processedDatasets.map((objectName: string) => ({
              where: { node: { objectName: objectName } }
            }))
          },

          // should we connect to project?
          // project: {
          //   connect: {
          //     where: { node: { projectID: projectID }}
          //   }
          // },
        }
        const { runs: [run] } = await RunModel.create({
          input: [runInput],
        })

        const { runID } = run

            // Now create the RunParameters node and connect it to the Run
        await RunParametersModel.create({
          input: [{
            runID: runID, // Use the same runID to ensure one-to-one relationship
            // Set default parameter values as blanks:
            // outPrefix: "",
            // localMinpValue: 0.0,
            // pDepth: 0,
            // globalConvergenceCutoff: 0,
            // simulationDepth: 0,
            // kmerMinDepth: 0,
            // localMinOVE: 0,
            // allAAInterchangeable: 1,

            outPrefix: 'TIGERdb',
            localMinpValue: 0.001,
            pDepth: 1000,
            globalConvergenceCutoff: 1,
            simulationDepth: 1000,
            kmerMinDepth: 4,
            localMinOVE: 10,
            allAAInterchangeable: 1,
            run: {
              connect: {
                where: { node: { runID: runID } }
              }
            }
          }],
        })
        
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
    // updateRun: async (
    //   parent,
    //   { runID, wesID, name, description, datasets },
    //   { ogm }
    // ) => {
    //   try {
    //     const RunModel = ogm.model("Run");
    //     const run = await RunModel.find({
    //       where: { id: runID }
    //     })
    //     if (!run) {
    //       throw new Error('Run not found')
    //     }

    //     const runInput = { wesID, name, description }
    //     await run.update({
    //       input: [{
    //         runInput,
    //         datasets: {
    //           connect: datasets.map((dataset: any) => ({
    //             where: { node: { dataset } }
    //           }))
    //         }
    //       }]
    //     })

    //     return run.records[0].get(0).properties
    //   } catch (error) {
    //     console.log("updateRun", error);
    //     throw new ApolloError("updateRun", error as string);
    //   }
    // },

    // updateRunParameters: async (
    //   parent: any,
    //   { runID, outPrefix, localMinpValue, pDepth, globalConvergenceCutoff, simulationDepth, kmerMinDepth, localMinOVE, allAAInterchangeable },
    //   { ogm }
    // ) => {

    //   // const { ogm } = context;

    //   // // Log to check if OGM is defined
    //   // if (!ogm) {
    //   //   console.error("OGM is not defined in the context");
    //   //   throw new Error("OGM instance not available in the context");
    //   // }
    //   // console.log("OGM in resolver:", ogm);
  
    //   try {
    //     // Check if runID is provided
    //     if (!runID) {
    //       throw new Error("runID is required");
    //     }
    //     // Get the Run model from OGM
    //     const RunModel = ogm.model("Run");

    //     // Find the run by ID
    //     const { runs: [run] } = await RunModel.find({ where: { runID: runID } });
    //     if (!run) {
    //       throw new Error('Run not found');
    //     }

    //     // Get the RunParameters model from OGM
    //     const RunParametersModel = ogm.model("RunParameters");

    //     const runParametersInput = {
    //       outPrefix,
    //       localMinpValue,
    //       pDepth,
    //       globalConvergenceCutoff,
    //       simulationDepth,
    //       kmerMinDepth,
    //       localMinOVE,
    //       allAAInterchangeable
    //     }

    //     let [runParameters] = await RunParametersModel.find({ where: { runID: runID } });

    //     // let runParameters;

    //     if (runParameters) {
    //       await RunParametersModel.update({
    //         where: { runID: runID },
    //         update: {
    //           outPrefix,
    //           localMinpValue,
    //           pDepth,
    //           globalConvergenceCutoff,
    //           simulationDepth,
    //           kmerMinDepth,
    //           localMinOVE,
    //           allAAInterchangeable
    //         }
    //       })
    //     } else {
    //       [runParameters] = await RunParametersModel.create({
    //         input: [{ runID: runID,           
    //           ...runParametersInput }]
    //       })
    //     }

    //     if (!run.runParameters) {
    //       await RunModel.update({
    //         where: { runID: runID },
    //         connect: {
    //           runParameters: {
    //             where: { node: { runID: runID } },
    //           },
    //         },
    //       })
    //     }

    //     return run
    //   } catch (error) {
    //     console.error("updateRunParameters error", error);
    //     throw new Error("Failed to update run parameters.");
    //   }
    // },

    // // New mutation to cancel a run using WES API
    // cancelRun: async (parent, { runID }, { dataSources, ogm }) => {
    //   try {
    //     const RunModel = ogm.model("Run");
    //     const run = await RunModel.find({ where: { runID } });

    //     if (!run.length) {
    //       throw new Error('Run not found');
    //     }

    //     const { status_code } = await dataSources.wesAPI.cancelRun(runID);
    //     if (!status_code) {
    //       await RunModel.update({
    //         where: { runID },
    //         update: { status: "failed" }
    //       });
    //       return "failed";
    //     }

    //     await RunModel.update({
    //       where: { runID },
    //       update: { status: "failed" }
    //     });

    //     return "canceled";
    //   } catch (error) {
    //     console.error("cancelRun error", error);
    //     throw new ApolloError("Error canceling run");
    //   }
    // },    
  },

  Run: {
    // Resolver for fetching logs
    // logs: async ({ runID }, variables, { dataSources }) => {
    //   try {
    //     const { docker_logs } = await dataSources.wesAPI.getLogs(runID);
    //     return docker_logs;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    getRunData: async ({ wesID }, variables, context, info) => {
      try {
        console.log('datasources')
        console.log(context.dataSources)
        const { run_log } = await context.dataSources.wesAPI.getRunData(wesID);
        return run_log.stderr;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    // Resolver for fetching failed run logs from Minio
    failedRunLogs: async ({ runID }, variables, { Minio }) => {
      try {
        const objectStream = await Minio.client.getObject(`run-${runID}`, `failedRunLog-${runID}.txt`);
        let failedRunLogs = '';

        return await new Promise((resolve, reject) => {
          objectStream.on('data', chunk => failedRunLogs += chunk);
          objectStream.on('error', err => reject(err));
          objectStream.on('end', () => resolve(failedRunLogs));
        });
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    // // Resolver to check if the run has results in Minio
    // hasResults: async ({ runID }, variables, { Minio }) => {
    //   try {
    //     const runBucketObjects = await Minio.bucketObjectsList(`run-${runID}`);
    //     const hasResultsDir = runBucketObjects.some(obj => obj.prefix === 'SEURAT/');
    //     return hasResultsDir;
    //   } catch (error) {
    //     console.log(error);
    //     return false;
    //   }
    // },
    status: async ({ wesID, status }, variables, context, info) => {
      // console.log('Data sources available:', dataSources);
      // console.log('wesAPI instance:', dataSources.wesAPI);


      if (!wesID || ['completed', 'failed'].includes(status)) return status;

      try {
        // Get the status from the WES API
        const { state }: { state: 'COMPLETE' | 'EXECUTOR_ERROR' | 'RUNNING' } = await context.dataSources.wesAPI.getStatus(wesID);

        // Define the mapping of states to statuses
        const statusMapping: { [key: string]: string } = {
          COMPLETE: 'completed',
          EXECUTOR_ERROR: 'failed',
          RUNNING: 'submitted',
        };

        // Return the mapped status or the current status if the state is unknown
        return statusMapping[state] || status;
      } catch (error) {
        console.log(error);
        return status;
      }
    },

    // // Resolver to get the run status from WES
    // status: async ({ wesID, status }, variables, { dataSources }) => {
    //   if (!wesID || ['completed', 'failed'].includes(status)) return status;

    //   try {
    //     const { state } = await dataSources.wesAPI.getStatus(wesID);
    //     return {
    //       'COMPLETE': 'completed',
    //       'EXECUTOR_ERROR': 'failed',
    //       'RUNNING': 'submitted'
    //     }[state] || status;
    //   } catch (error) {
    //     console.log(error);
    //     return status;
    //   }
    // },

    // Resolver for fetching the completedOn date from WES
    completedOn: async ({ wesID, runID, completedOn, submittedOn }, variables, { Runs, Minio, dataSources }) => {
      if (completedOn || !wesID) return completedOn;

      try {
        const response = await dataSources.wesAPI.getRunData(wesID);

        if (response.state === 'EXECUTOR_ERROR') {
          Minio.client.putObject(`run-${runID}`, `failedRunLog-${runID}.txt`, response.run_log.stderr);
          const { completed_on } = await dataSources.wesAPI.getCompletedOn({ state: 'EXECUTOR_ERROR', wesID });
          return completed_on || Date.now();
        } else if (response.state === "COMPLETE") {
          const { completed_on } = await dataSources.wesAPI.getCompletedOn({
            runID,
            state: 'COMPLETE',
            submittedOnTime: new Date(submittedOn).getTime(),
            wesID
          });
          return completed_on;
        }
      } catch (error) {
        console.log("Error fetching completedOn", error);
      }
      return null;
    }
  },
};
