import { makeBucket, makePresignedURL, listBucketObjects } from '../../minio/minio';
import { ApolloError } from "apollo-server";

export const resolvers = {
  Query: {
    getRuns: async (obj, args, { ogm, kauth }) => {
      try {
        const isAuthenticated = !!kauth?.accessToken?.content?.sub;
        let filters: any = {};

        if (isAuthenticated) {
          const { sub: keycloakUserID } = kauth.accessToken.content;
          const UserModel = ogm.model("KeycloakUser");
          const user = await UserModel.find({
            where: { keycloakUserID: keycloakUserID },
          });
          if (user.length === 0 || !user) {
            filters = { isPublic: true };
          } else {
            filters = {
            OR: [
                { createdBy: user[0] },
                // { isPublic: true },
                // { sharedWith_IN: [user[0]] }
              ]
            }
          }
        } else {
          filters = { isPublic: true };
        }

        // Optionally add runID to the filters if provided
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
            minioUpload {
              dataset {
                tags {
                  tagID
                  name
                  category
                }
              }
            }
          }
          referenceDatasetsAggregate{
            count
          }
          gliphPatternsAggregate {
            count
          }
          referenceDatasets {
            dataset {
              tags {
                tagID
                name
                category
              }
            }
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
    submitRun: async (parent, { runID }, { ogm, minioClient }) => {
      try {
        const RunModel = ogm.model("Run");
        const runs = await RunModel.find({
          where: { runID },
          selectionSet: `{
            runID
            wesID
            status
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
            processedDatasets {
              bucketName
              objectName
            }
          }`
        });

        if (runs.length === 0) {
          throw new Error("Run not found");
        }

        const run = runs[0];
        
        // 1. Generate parameters content
        const params = run.runParameters || {};
        const outPrefix = params.outPrefix || 'TIGERdb';
        const lines = [
          "#this line will be ignored",
          `out_prefix=${outPrefix}`,
          `cdr3_file=${outPrefix}_GLIPH_INPUT.txt`,
          params.hlaFile ? `hla_file=${params.hlaFile}` : `#hla_file=hla_file.txt`,
          `refer_file=ref_CD48_v2.0.txt`,
          `v_usage_freq_file=ref_V_CD48_v2.0.txt`,
          `cdr3_length_freq_file=ref_L_CD48_v2.0.txt`,
          `local_min_pvalue=${params.localMinpValue || '0.001'}`,
          `p_depth=${params.pDepth || '1000'}`,
          `global_convergence_cutoff=${params.globalConvergenceCutoff || '1'}`,
          `simulation_depth=${params.simulationDepth || '1000'}`,
          `kmer_min_depth=${params.kmerMinDepth || '3'}`,
          `local_min_OVE=${params.localMinOVE || '10'}`,
          `algorithm=GLIPH2`,
          `all_aa_interchangeable=${params.allAAInterchangeable || '1'}`
        ];
        const paramContent = lines.join('\n');

        // 2. Prepare mock dataset mappings (minio pipeline expects these)
        const datasetsTsvLines = ['datasetID\tobjectName'];
        const inputPaths = [];
        (run.processedDatasets || []).forEach(ds => {
          datasetsTsvLines.push(`.\t${ds.objectName}`);
          inputPaths.push(`s3://${ds.bucketName}/${ds.objectName}`);
        });

        // 3. (Optional) In a real scenario we'd stream paramContent to MinIO here
        // but Nextflow can also take arguments directly or we can write local files.
        const bucket = `run-${runID}`;
        await minioClient.putObject(bucket, 'parameter_file.txt', Buffer.from(paramContent));
        await minioClient.putObject(bucket, 'datasets.tsv', Buffer.from(datasetsTsvLines.join('\n')));

        inputPaths.push(`s3://${bucket}/parameter_file.txt`);
        inputPaths.push(`s3://${bucket}/datasets.tsv`);

        const nextflowPaths = inputPaths.join(',');

        // 4. Trigger Nextflow Pipeline mapping to Funnel inside the Node API via child_process
        const { spawn } = require('child_process');
        
        // Run nextflow asynchronously
        const nextflowProcess = spawn('nextflow', [
          '-log', `.nextflow-${runID}.log`,
          'run', 
          '/usr/src/service/tcr-db/nextflow/main.nf',
          '-w', `s3://${bucket}/work`,
          '--outPrefix', outPrefix,
          '--destinationPath', `s3://${bucket}/results`,
          '--minioInputPath', nextflowPaths
        ], {
           env: { ...process.env }, // Nextflow relies on env vars (e.g. AWS access keys mapped for minio)
           detached: true,
           stdio: 'ignore'
        });
        
        nextflowProcess.unref();

        // 5. Update database state
        const updateResult = await RunModel.update({
          where: { runID },
          update: { 
            status: "submitted", 
            submittedOn: new Date().toISOString(),
            wesID: `nextflow-${runID}` // Tag it for UI reference
          },
        });

        return { run: updateResult.runs[0] };
        
      } catch (error) {
        console.error("Error submitting run:", error);
        throw new ApolloError('Failed to submit run', error);
      }
    },

    createRunWithMinioBucket: async (
      parent,
      { name, description, processedDatasets, referenceDatasets },
      { ogm, kauth, minioClient }
    ) => {
      try {
        const isAuthenticated = !!kauth?.accessToken?.content?.sub;
        const UserModel = ogm.model("KeycloakUser");
        let user

        if (isAuthenticated) {
          const { sub: keycloakUserID } = kauth.accessToken.content;
          user = await UserModel.find({
            where: { keycloakUserID: keycloakUserID }
          });
        } else {
          // hardcoded default user email to get sample user.
          // Must move this email to env file after feature is finished.
          user = await UserModel.find({
            where: { email: 'public@tigerdb.ca' }
          });
        }
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
          isPublic: !isAuthenticated,
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
          referenceDatasets: {
            connect: referenceDatasets.map((objectName: string) => ({
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
    deleteRun: async (parent, { runID }, { ogm, kauth, driver }) => {
      try  {
        const isAuthenticated = !!kauth?.accessToken?.content?.sub;
        if (isAuthenticated) {
          const { sub: keycloakUserID } = kauth.accessToken.content
          const UserModel = ogm.model('KeycloakUser')
          const user = await UserModel.find({
            where: {keycloakUserID: keycloakUserID}
          })
          if (!user) {
            throw new Error('User not found')
          }
          const RunModel = ogm.model("Run");
          const run = await RunModel.find({ where: { runID: runID, createdBy: user[0] }})
          if (!run) {
            throw new Error('Run not found')
          }
          const session = driver.session()
          await session.run(`MATCH (x:Run)-[r]-(n)
            WHERE
              NOT type(r) = 'CREATED_BY'
              AND NOT 'ProcessedDataset' in labels(n)
              AND x.runID = '${run[0].runID}'
            DETACH DELETE x, n`
          )
          return JSON.stringify(run[0])
        } else {
          const session = driver.session()
          await session.run(`MATCH (u:KeycloakUser)<-[]-(x:Run)-[r]-(n)
            WHERE
              u.email = "public@tigerdb.ca"
              AND x.runID = '${runID}'
              AND NOT type(r) = 'CREATED_BY'
              AND NOT 'ProcessedDataset' in labels(n)
            DETACH DELETE x, n`
          )
          return JSON.stringify({})
        }
      } catch (error) {
        throw new ApolloError("deleteRun", error as string);
      }
    }
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
        if (wesID && wesID.startsWith('nextflow-')) {
          const runID = wesID.replace('nextflow-', '');
          const fs = require('fs');
          const path = require('path');
          
          let logs = '';
          const logPath = path.join('/usr/src/service/api', `.nextflow-${runID}.log`);
          if (fs.existsSync(logPath)) {
            logs += fs.readFileSync(logPath, 'utf8');
          } else {
            logs = "Nextflow logs not yet available.";
          }
          
          return logs;
        }

        // Fallback for older WES runs
        const { run_log } = await context.dataSources.wesAPI.getRunData(wesID);
        return run_log.stderr;
      } catch (error) {
        console.log(error);
        return "Error fetching logs";
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
        if (wesID.startsWith('nextflow-')) {
          // If we are tracking via Nextflow locally in the api container,
          // check if Nextflow log says SUCCESS or ERROR. Nextflow exits immediately
          // but we can query Funnel if Nextflow isn't running but we didn't update status,
          // OR the best way is Nextflow log parsing for now since Nextflow delegates tasks.
          // Ideally if it reached 'completed' or 'failed' it would be saved, 
          // but if it's 'submitted' let's check log.
          const runID = wesID.replace('nextflow-', '');
          const fs = require('fs');
          const path = require('path');
          const logPath = path.join('/usr/src/service/api', `.nextflow-${runID}.log`);
          
          if (fs.existsSync(logPath)) {
            const logs = fs.readFileSync(logPath, 'utf8');
            if (logs.includes('Pipeline completed successfully')) {
              return 'completed';
            } else if (logs.includes('nextflow.exception') || logs.includes('ERROR')) {
              return 'failed';
            } else {
              return 'submitted';
            }
          }
          return status;
        }

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
        if (wesID.startsWith('nextflow-')) {
          const fs = require('fs');
          const path = require('path');
          const logPath = path.join('/usr/src/service/api', `.nextflow-${runID}.log`);
          if (fs.existsSync(logPath)) {
            const logs = fs.readFileSync(logPath, 'utf8');
            const isFailed = logs.includes('nextflow.exception') || logs.includes('ERROR');
            const isCompleted = logs.includes('Pipeline completed successfully');

            if (isFailed) {
              try {
                await Minio.client.putObject(`run-${runID}`, `failedRunLog-${runID}.txt`, Buffer.from(logs));
              } catch (e) {
                console.log("Error uploading failed run log to Minio:", e);
              }
            }

            if (isFailed || isCompleted) {
              const stats = fs.statSync(logPath);
              // If the process is done, the file modified time is roughly completedOn
              return stats.mtime;
            }
          }
          return null;
        }

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
    },
    
    presignedURL: async (
      { runID, status },
      { },
      { minioClient }
    ) => {
      console.log('Status:', status);

      // if (status !== 'completed') {
      //   return null
      // }
      try {
        const bucketName = `run-${runID}`
        const bucketItemNames = (await listBucketObjects(minioClient, bucketName)).map(({ name }) => name)
        // if name includes 'cluster.txt' then return that name
        const objectName = bucketItemNames.find(name => name.includes('cluster.csv'))

        if (!objectName) {
          throw new Error(`No results found in bucket "${bucketName}"`)
        }

        // const presignedURL = await minioClient.presignedUrl('GET', bucketName, objectName, 24 * 60 * 60, { "response-content-disposition": `attachment; filename=${objectName}` })
        const presignedURL = makePresignedURL(minioClient, bucketName, objectName)
        // console.log(presignedURL)
        return presignedURL

        
      } catch (error) {
        console.log(error)
        console.log('run.presignedurl error')
        // throw new ApolloError('run.presignedurl', error)
      }
    }
  },
};
