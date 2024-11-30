class: CommandLineTool
cwlVersion: v1.0
hints:
  DockerRequirement:
    dockerImageId: minio/mc:latest
  EnvVarRequirement:
    envDef: 
      MC_HOST_minio: http://$(inputs.access):$(inputs.secret)@$(inputs.domain):$(inputs.port)
baseCommand: cp
inputs:
  minioInputPath:
    type: string[]
  access:
    type: string
  secret:
    type: string
  domain:
    type: string
  port:
    type: string
outputs:
  script_file:
    type: File
    outputBinding:
      glob: "run-*/TIGERdb_inputPrep.R"
  # parameter_file:
  #   type: File
  #   outputBinding:
  #     glob: "run-*/parameter_file.txt"
  runs_dir:
    type: Directory
    outputBinding:
      glob: "run-*/"
  datasets_dir:
    type: Directory[]
    outputBinding:
      glob: "dataset-*/"
  datasets_file:
    type: File
    outputBinding:
      glob: "run-*/datasets.tsv"
  # tumour_files:
  #   type: File[]
  #   outputBinding:
  #     glob: "dataset-*/processed-*"  # Adjust glob pattern as needed
  external_spcfc_file:
    type: File
    outputBinding:
      glob: "run-*/TIGERdb_MinimalScoreConfidence3_VersionII.tsv"  # Adjust glob pattern as needed
arguments:
  - "--recursive"
  # - "--debug"
  - "$(inputs.minioInputPath)"
  - "."


# class: CommandLineTool
# cwlVersion: v1.0
# hints:
#   DockerRequirement:
#     dockerImageId: minio/mc:latest
#   EnvVarRequirement:
#     envDef: 
#       MC_HOST_minio: http://$(inputs.access):$(inputs.secret)@$(inputs.domain):$(inputs.port)
# baseCommand: cp
# inputs:
#   - id: minioInputPath
#     # type: string[]
#     type: string
#   - id: access
#     type: string
#   - id: secret
#     type: string
#   - id: domain
#     type: string
#   - id: port
#     type: string
# outputs:
# #   input_dir:
# #     type: Directory
# #     outputBinding:
# #       glob: ["dataset-*/"]

#   parameter_file:
#     type: File
#     outputBinding:
#       glob: ["run-*/parameter_file.txt"]

#   runs_dir:
#     type: Directory
#     outputBinding:
#       glob: ["run-*/"]
# arguments:
#   - position: 0
#     prefix: ''
#     separate: false
#     valueFrom: --recursive
#   - position: 1
#     prefix: ''
#     separate: false
#     valueFrom: --debug
#   - position: 2
#     prefix: ''
#     separate: false
#     valueFrom: $(inputs.minioInputPath)
#   - position: 3
#     prefix: ''
#     separate: false
#     valueFrom: "."