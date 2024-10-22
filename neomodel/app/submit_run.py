import datetime

import graphene

import app.schema as schema
from .models import Run as RunModel
# from .schema import Run

from os import getenv, remove
from pathlib import Path
from dotenv import load_dotenv

dotenv_path = Path('../.env')
load_dotenv(dotenv_path=dotenv_path)
# from werkzeug.datastructures import FileStorage

# from bson.objectid import ObjectId

import sys
import json
import csv
from wes_client import util
from wes_client.util import modify_jsonyaml_paths

from minio import Minio
# from minio.error import ResponseError
# from minio.error import S3Error


import socket

def makeGLIPHJob(runID, run):
    if (getenv("GRAPHENE_DEV") == "False"):
        with open('/app/src/minioIP.txt', 'r') as file:
            minioIP = file.read().replace('\n', '')
    else:
        # minioIP = getenv("MINIO_IP")
        minioIP = "host.docker.internal"
        # minioIP = "172.17.0.2"
        # minioIP = "localhost"
        # minioIP = "10.0.0.97"

    # print(run.as_dict())
    # get runParameters from run
    runParameters = run.runParameters
    print("RUN PARAMS:")
    print(runParameters)

    minioInputPaths = []
    for upload in run.minioUploads:
        minioInputPaths.append("minio/"+upload.bucketName)
    minioInputPaths.append("minio/run-" + run.runID)

    print(minioInputPaths)

    # # Add paths to pull from minio
    # minioInputPaths = []
    # for id in run['datasetIDs']:
    #     minioInputPaths.append("minio/dataset-" + str(id))
    # # This must also be read from to retrieve datasets.csv and script
    # minioInputPaths.append("minio/run-" + runId)

    # Filling in structure
    job = {
        # "project_id": "crescent",
        # "matrix_input_type" : "DGE",
        # "pvalue_cutoff" : 0.05,
        # "fdr_cutoff" : 0.1,

        # "minioInputPath": minioInputPaths,
        "minioInputPath": "minio/run-" + runID, 
        # "destinationPath": "run-" + runID, 
        "destinationPath": "minio/run-" + runID, 
        "access": getenv("MINIO_ROOT_USER"),
        "secret": getenv("MINIO_ROOT_PASSWORD"),
        "domain": minioIP,
        "port": getenv("MINIO_API_PORT")
    }
    return job

def minioUpload(script_name, script_path, json_path, runID, csv_path=None):
    # Attempting to upload all relevant files neccesary for this run to the run bucket
    try:
        # Connect to minio
        minioEndpoint = getenv("MINIO_IP")+':'+ getenv("MINIO_API_PORT")
        minioClient = Minio(minioEndpoint, getenv("MINIO_ROOT_USER"), getenv("MINIO_ROOT_PASSWORD"), secure=False)

        # Upload files to bucket
        bucket = "run-" + runID
        minioClient.fput_object(bucket, 'tigerdb_gliph_inputs.json', json_path)

        # minioClient.fput_object(bucket, 'GLIPHII_Analysis.R', script_path)
        minioClient.fput_object(bucket, 'parameter_file.txt', script_path)

        
        # Check if at least one sent corretly
        if minioClient.stat_object(bucket, "tigerdb_gliph_inputs.json") == None:
            return False
        return True

    except Exception as e:
        print(format(e))
        return False

class SubmitRun(graphene.Mutation):
    class Arguments:
        runID = graphene.ID()
        # dataset_ids = graphene.List(graphene.String)
    
    run = graphene.Field(lambda: schema.Run)

    def mutate(self, info, runID):
        try: 
            run = RunModel.get_one_by_id(runID)

            if run is None:
                print("Run not found")
                return "Run not found"

            # print(run.as_dict())
            # Convert the run to a dictionary and access minioUploads
            run_dict = run.as_dict()
            minio_uploads = run_dict.get('minioUploads', [])
            print(f"MinioUploads: {minio_uploads}")
            
            job = makeGLIPHJob(runID= runID, run= run)

            # Sending files to minio
            # Create temp json file to send to minio
            fileName = "frontend_gliph_inputs_" + runID + ".json"
            print(fileName)
            with open(fileName, 'w') as outfile:
                json.dump(job, outfile)
                outfile.close()
            
            # Also upload datasets.csv for multiple datasets

            minio_worked = minioUpload(script_name = "parameter_file.txt", script_path= "/app/tcr-db/scripts/parameter_file.txt", json_path= fileName, runID= runID)
            print(minio_worked)
            
            # Delete temp json file
            remove(fileName)

            if not minio_worked:
                print("minio upload failed in submit_run.py")
                return "minio upload failed"

            # Get input paths
            path_to_cwl = "/app/tcr-db/"
            path_to_gliph_cwl = "/app/tcr-db/gliph-cwl/"


            # Set up WESClient object
            client_object = util.WESClient(
                {'auth': '', 'proto': 'http', 'host': getenv('WES_SERVER') + ":" + getenv('WES_PORT')}
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

            # req = client_object.run(path_to_gliph_cwl + "cp.cwl", job, [])

            run.wesID = req["run_id"]
            run.submittedOn = str(datetime.datetime.now().isoformat(timespec='microseconds'))
            run.status = 'submitted'
            print(run.as_dict())
            run.save()

            # check status: http://localhost:8081/ga4gh/wes/v1/runs/{wesID}

            return SubmitRun(run=schema.Run(**run.as_dict()))
            
        except Exception as e:
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
            # Delete temp json file
            # remove(fileName)

#             # Check for errors in connecting/accessing minio
#             if minioWorked == False:
#                 print("minio upload failed in submit_run.py")
#                 return "minio upload failed"
    
#             # Get input paths
#             pathToCWL = "/app/crescent/"
#             pathToGsvaCWL = "/app/crescent/gsvaCWL/"

#             # Set up WESClient object
#             clientObject = util.WESClient(
#                 {'auth': '', 'proto': 'http', 'host': getenv('WES_SERVER') + ":" + getenv('WES_PORT')}) # should come from env var
      
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