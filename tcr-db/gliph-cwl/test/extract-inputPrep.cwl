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
  parameter_file:
    type: File
    outputBinding:
      glob: "run-*/parameter_file.txt"
  final_runs_dir:
    type: Directory
    outputBinding:
      glob: "run-*/"
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