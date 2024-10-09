import datetime

import graphene

import app.schema as schema
from .models import Run as RunModel
# from .schema import Run

from bson.objectid import ObjectId
from os import environ, remove

import sys
import json
import csv
from wes_client import util
from wes_client.util import modify_jsonyaml_paths

from minio import Minio
from minio.error import ResponseError

import socket

def makeGLIPHJob(run_id, run):
    if (environ["GRAPHENE_DEV"] == "False"):
        with open('/app/src/schema/minioIP.txt', 'r') as file:
            minioIP = file.read().replace('\n', '')
    else:
        minioIP = "host.docker.internal"
    
    minioInputPaths = []
    minioInputPaths.append("minio/run-" + run_id)

    # Filling in structure
    job = {
        # "project_id": "crescent",
        # "matrix_input_type" : "DGE",
        # "pvalue_cutoff" : 0.05,
        # "fdr_cutoff" : 0.1,

        "minioInputPath": minioInputPaths,
        "destinationPath": "minio/run-" + run_id, 
        "access_key": environ["MINIO_ACCESS_KEY"],
        "secret_key": environ["MINIO_SECRET_KEY"],
        "minio_domain": minioIP,
        "minio_port": environ["MINIO_HOST_PORT"]
    }
    return job

def minioUpload(script_name, script_path, json_path, run_id, csv_path=None):
    # Attempting to upload all relevant files neccesary for this run to the run bucket
    try:
        # Connect to minio
        minioEndpoint = 'minio:' + environ["MINIO_HOST_PORT"]
        minioClient = Minio(minioEndpoint, environ["MINIO_ACCESS_KEY"], environ["MINIO_SECRET_KEY"], secure=False)

        # Upload files to bucket
        bucket = "run-" + run_id
        minioClient.fput_object(bucket, 'tigerdb_gliph_inputs.json', json_path)

        minioClient.fput_object(bucket, 'Runs_GLIPH_v1.R', script_path)
        
        # Check if at least one sent corretly
        if minioClient.stat_object(bucket, "tigerdb_gliph_inputs.json") == None:
            return False
        return True

    except:
        # Catch connection and response errors
        e = sys.exc_info()[1]
        print(format(e))
        return False

class SubmitRun(graphene.Mutation):
    class Arguments:
        run_id = graphene.ID()
        wes_id = graphene.ID()
        dataset_ids = graphene.List(graphene.String)
        project_id = graphene.ID()
    
    run = graphene.Field(lambda: schema.Run)

    def mutate(self, info, run_id, wes_id, dataset_ids, project_id):
        try: 
            run = RunModel.get_one_by_id(run_id)

            if run is None:
                print("Run not found")
                return "Run not found"

            job = makeGLIPHJob(run_id= run_id, run= run)

            # Sending files to minio
            # Create temp json file to send to minio
            fileName = "frontend_gliph_inputs_" + run_id + ".json"
            with open(fileName, 'w') as outfile:
                json.dump(job, outfile)
                outfile.close()
            
            # Also upload datasets.csv for multiple datasets

            minio_worked = minioUpload(scriptName = "GLIPHII_Analysis.R", scriptPath= "/app/tcrdb/scripts/GLIPHII_Analysis.R", json_path= fileName, run_id= run_id)
            # Delete temp json file
            remove(fileName)

            if not minio_worked:
                print("minio upload failed in submit_run.py")
                return "minio upload failed"

            # Get input paths
            path_to_cwl = "/app/tcrdb/"
            path_to_gliph_cwl = "/app/tcrdb/GLIPH/"


            # Set up WESClient object
            client_object = WESClient(
                {'auth': '', 'proto': 'http', 'host': environ['WES_SERVER'] + ":" + environ['WES_PORT']}
            )

            # Sending request to WES container
            # All workflow related files must be passed as attachments here, excluding files in Minio such as the script and datasets
            job = json.dumps(job)

            req = client_object.run(
                path_to_gliph_cwl + "workflow-gliph.cwl", job, 
                [path_to_gliph_cwl + "extract-gliph.cwl", 
                path_to_gliph_cwl + "gliph.cwl",  
                path_to_gliph_cwl + "upload-gliph.cwl"]
            )

            run.wes_id = req["run_id"]
            run.submitted_on = datetime.datetime.now()
            run.status = 'submitted'
            run.save()

            return SubmitRun(run=schema.Run(**run.as_dict()))
            
        except:
            e = sys.exc_info()[1]
            print(format(e))


# # template code
# class SubmitRun(Mutation):
#     # Subclass for describing what arguments mutation takes
#     class Arguments:
#         runId = ID()

#     # WES ID Output
#     wesID = ID()

#     # Resolver function with arguments
#     def mutate(root, info, runId):
#         try:
#             # Connect to mongo and get the run
#             run = db.runs.find_one({'runID': ObjectId(runId)})
#             if run is None:
#                 print("Run not found")
#                 return "Run not found"
        

#             job = makeGsvaJob(runId= runId, run= run)

#             # Sending files to minio
#             # Create temp json file to send to minio
#             fileName = "frontend_gsva_inputs_" + runId + ".json"
#             with open(fileName, 'w') as outfile:
#                 json.dump(job, outfile)
#                 outfile.close()
            
#             # Also upload datasets.csv for multiple datasets

#             minioWorked = minioUpload(scriptName = "Runs_GSVA.R", scriptPath= "/app/crescent/Script/Runs_GSVA.R", jsonPath= fileName, runId= runId)
#             # Delete temp json file
#             remove(fileName)

#             # Check for errors in connecting/accessing minio
#             if minioWorked == False:
#                 print("minio upload failed in submit_run.py")
#                 return "minio upload failed"
    
#             # Get input paths
#             pathToCWL = "/app/crescent/"
#             pathToGsvaCWL = "/app/crescent/gsvaCWL/"

#             # Set up WESClient object
#             clientObject = util.WESClient(
#                 {'auth': '', 'proto': 'http', 'host': environ['WES_SERVER'] + ":" + environ['WES_PORT']}) # should come from env var
      
#             # Sending request to WES container
#             # All workflow related files must be passed as attachments here, excluding files in minio such as the script and datasets
#             job = json.dumps(job)

#             req = clientObject.run(
#                 pathToGsvaCWL + "workflow-gsva.cwl", job, 
#                 [pathToGsvaCWL + "extract-gsva.cwl", 
#                 pathToGsvaCWL + "gsva.cwl",  
#                 pathToGsvaCWL + "upload-gsva.cwl"])

#             # Update wesID and submitted on in mongo
#             db.runs.find_one_and_update({'runID': ObjectId(runId)}, {'$push': { 'secondaryRuns': {'$each': [{'wesID': req["run_id"], 'submittedOn': datetime.datetime.now(), 'completedOn': None, 'status': 'submitted'}]}}})

           
#             return SubmitRun(wesID = req["run_id"])
#         except:
#             e = sys.exc_info()[1]
#             print(format(e))