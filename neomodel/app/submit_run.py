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

def create_datasets_tsv(datasets, tsv_path='datasets.tsv'):
    """
    Creates a datasets.tsv file with datasetID (bucketName) and objectName.

    Parameters:
    - datasets (list of dict): Each dict should have 'datasetID' (bucketName) and 'objectName' keys.
    - tsv_path (str): Path where the TSV will be saved.
    """
    fieldnames = ['datasetID', 'objectName']
    try:
        with open(tsv_path, mode='w', newline='') as tsvfile:
            writer = csv.DictWriter(tsvfile, fieldnames=fieldnames, delimiter='\t')
            writer.writeheader()
            for dataset in datasets:
                writer.writerow({
                    'datasetID': dataset['datasetID'],
                    'objectName': dataset['objectName']
                })
        print(f"Successfully created {tsv_path}")
    except Exception as e:
        print(f"Error creating {tsv_path}: {e}")

def generate_parameter_file(run_parameters, runID):
    lines = []
    lines.append("#this line will be ignored")
    
    # Map the parameter names correctly
    out_prefix = run_parameters.get('outPrefix', 'TIGERdb')
    lines.append(f"out_prefix={out_prefix}")
    
    # cdr3_file is not in runParameters; default it
    cdr3_file_name = out_prefix + "_GLIPH_INPUT.txt"
    cdr3_file = run_parameters.get('cdr3_file', cdr3_file_name)
    lines.append(f"cdr3_file=run-{runID}/{cdr3_file}")
    
    # hla_file (if provided)
    hla_file = run_parameters.get('hla_file')
    if hla_file:
        lines.append(f"hla_file=run-{runID}/{hla_file}")
    else:
        lines.append("#hla_file=hla_file.txt")
    
    refer_file = run_parameters.get('refer_file', 'ref_CD48_v2.0.txt')
    lines.append(f"refer_file=run-{runID}/{refer_file}")
    
    v_usage_freq_file = run_parameters.get('v_usage_freq_file', 'ref_V_CD48_v2.0.txt')
    lines.append(f"v_usage_freq_file=run-{runID}/{v_usage_freq_file}")
    
    cdr3_length_freq_file = run_parameters.get('cdr3_length_freq_file', 'ref_L_CD48_v2.0.txt')
    lines.append(f"cdr3_length_freq_file=run-{runID}/{cdr3_length_freq_file}")
    
    local_min_pvalue = run_parameters.get('localMinpValue', '0.001')
    lines.append(f"local_min_pvalue={local_min_pvalue}")
    
    p_depth = run_parameters.get('pDepth', '1000')
    lines.append(f"p_depth={p_depth}")
    
    global_convergence_cutoff = run_parameters.get('globalConvergenceCutoff', '1')
    lines.append(f"global_convergence_cutoff={global_convergence_cutoff}")
    
    simulation_depth = run_parameters.get('simulationDepth', '1000')
    lines.append(f"simulation_depth={simulation_depth}")
    
    kmer_min_depth = run_parameters.get('kmerMinDepth', '3')
    lines.append(f"kmer_min_depth={kmer_min_depth}")
    
    local_min_OVE = run_parameters.get('localMinOVE', '10')
    lines.append(f"local_min_OVE={local_min_OVE}")
    
    algorithm = run_parameters.get('algorithm', 'GLIPH2')
    lines.append(f"algorithm={algorithm}")
    
    all_aa_interchangeable = run_parameters.get('allAAInterchangeable', '1')
    lines.append(f"all_aa_interchangeable={all_aa_interchangeable}")
    
    return '\n'.join(lines)

def makeGLIPHJob(runID, run):
    if (getenv("GRAPHENE_DEV") == "False"):
        with open('/app/src/minioIP.txt', 'r') as file:
            minioIP = file.read().replace('\n', '')
    else:
        # minioIP = getenv("MINIO_IP")
        minioIP = "host.docker.internal"
        # minioIP = "localhost"

    print(run.as_dict())
    # get runParameters from run
    runParameters = run.runParameters.single().as_dict()
    print("RUN PARAMS:")
    print(runParameters)

    minioInputPaths = []
    for upload in run.processedDatasets:
        minioInputPaths.append("minio/"+upload.bucketName)
    minioInputPaths.append("minio/run-" + run.runID)
    minioInputPaths = list(set(minioInputPaths))

    print(minioInputPaths)

    datasets = [{
        'datasetID': upload.bucketName,      # Assuming bucketName is equivalent to datasetID
        'objectName': upload.objectName      # Ensure objectName is available
    } for upload in run.processedDatasets]

    tsv_filename = f'datasets_{runID}.tsv'

    create_datasets_tsv(datasets, tsv_path = tsv_filename)

    # # Add paths to pull from minio
    # minioInputPaths = []
    # for id in run['datasetIDs']:
    #     minioInputPaths.append("minio/dataset-" + str(id))
    # # This must also be read from to retrieve datasets.csv and script
    # minioInputPaths.append("minio/run-" + runId)

    # Filling in structure
    job = {
        "outPrefix": runParameters.get('outPrefix', 'TIGERdb'),

        "minioInputPath": minioInputPaths,
        # "minioInputPath": "minio/run-" + runID, 
        # "destinationPath": "run-" + runID, 
        "destinationPath": "minio/run-" + runID, 
        "access": getenv("MINIO_ROOT_USER"),
        "secret": getenv("MINIO_ROOT_PASSWORD"),
        "domain": minioIP,
        "port": getenv("MINIO_API_PORT")
    }
    return job, tsv_filename

def minioUpload(params_path, script_path, json_path, reference_path, runID, tsv_path):
    # Attempting to upload all relevant files neccesary for this run to the run bucket
    try:
        # Connect to minio
        minioEndpoint = getenv("MINIO_IP")+':'+ getenv("MINIO_API_PORT")
        minioClient = Minio(minioEndpoint, getenv("MINIO_ROOT_USER"), getenv("MINIO_ROOT_PASSWORD"), secure=False)

        # Upload files to bucket
        bucket = "run-" + runID
        minioClient.fput_object(bucket, 'tigerdb_gliph_inputs.json', json_path)
        minioClient.fput_object(bucket, 'TIGERdb_inputPrep.R', script_path + '/TIGERdb_inputPrep.R')
        minioClient.fput_object(bucket, 'parameter_file.txt', params_path)
        minioClient.fput_object(bucket, 'ref_CD48_v2.0.txt', reference_path + '/human_v2.0/ref_CD48_v2.0.txt')
        minioClient.fput_object(bucket, 'ref_L_CD48_v2.0.txt', reference_path + '/human_v2.0/ref_L_CD48_v2.0.txt')
        minioClient.fput_object(bucket, 'ref_V_CD48_v2.0.txt', reference_path + '/human_v2.0/ref_V_CD48_v2.0.txt')
        minioClient.fput_object(bucket, 'TIGERdb_MinimalScoreConfidence3_VersionII.tsv', reference_path + '/TIGERdb_MinimalScoreConfidence3_VersionII.tsv')
        
        # Upload datasets.tsv if provided
        if tsv_path:
            minioClient.fput_object(bucket, 'datasets.tsv', tsv_path)
            print(f"Uploaded 'datasets.tsv' to bucket '{bucket}'.")

        
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
            processed_datasets = run_dict.get('processedDatasets', [])
            print(f"ProcessedDatasets: {processed_datasets}")
            
            job, tsv_path = makeGLIPHJob(runID= runID, run= run)

            # Sending files to minio
            # Create temp json file to send to minio
            fileName = "frontend_gliph_inputs_" + runID + ".json"
            print(fileName)
            with open(fileName, 'w') as outfile:
                json.dump(job, outfile)
                outfile.close()
            
            # Extract runParameters directly
            runParameters = run.runParameters.single().as_dict()
            print("RUN PARAMETERS:")
            print(runParameters)

            # Generate the parameter file content
            parameter_file_content = generate_parameter_file(runParameters, runID)

            # Write the content to 'parameter_file.txt'
            parameter_file_name = 'parameter_file_' + runID + '.txt'
            with open(parameter_file_name, 'w') as f:
                f.write(parameter_file_content)
            print(f"Parameter file created: {parameter_file_name}")


            # Also upload datasets.csv for multiple datasets

            minio_worked = minioUpload(params_path = parameter_file_name, script_path='/app/tcr-db/scripts', json_path = fileName, reference_path='/app/tcr-db/references', runID = runID, tsv_path = tsv_path)
            print(minio_worked)
            
            # Delete temp files
            remove(fileName)
            remove(parameter_file_name)
            if tsv_path:
                remove(tsv_path)


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
                path_to_gliph_cwl + "inputPrep-gliph.cwl",
                path_to_gliph_cwl + "upload-inputPrep.cwl",
                path_to_gliph_cwl + "extract-inputPrep.cwl",
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