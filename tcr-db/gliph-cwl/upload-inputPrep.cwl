cwlVersion: v1.0
class: CommandLineTool
hints:
  DockerRequirement:
    dockerPull: minio/mc:latest
  EnvVarRequirement:
    envDef:
      MC_HOST_minio: "http://$(inputs.access):$(inputs.secret)@$(inputs.domain):$(inputs.port)"
baseCommand: cp
inputs:
  # runs:
  #   type: Directory
  #   inputBinding:
  #     position: 1
  gliph_input:
    type: File
    inputBinding:
      position: 1
  destinationPath:
    type: string
    inputBinding:
      position: 2
  access:
    type: string
  secret:
    type: string
  domain:
    type: string
  port:
    type: string
outputs:
  # gliph_preprocessed:
  #   type: string
  #   outputBinding:
  #     outputEval: $(inputs.destinationPath)

  # runs_dir:
  #   type: Directory
  #   outputBinding:
  #     glob: "run-*/"

  # runs_dir:
  #   type: Directory
  #   outputBinding:
  #     # outputEval: $(inputs.runs_dir.location)
  #     outputEval: $(inputs.destinationPath)

  parameter_file:
    type: File
    outputBinding:
      glob: "run-*/parameter_file.txt"

arguments:
  - "--recursive"
  - "--debug"



# class: CommandLineTool
# cwlVersion: v1.0
# hints:
#   DockerRequirement:
#     dockerPull: minio/mc:latest
#   EnvVarRequirement:
#     envDef: 
#       MC_HOST_minio: http://$(inputs.access):$(inputs.secret)@$(inputs.domain):$(inputs.port)
# baseCommand: cp
# inputs:
#   - id: GLIPH
#     type: Directory
#   - id: destinationPath
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
#   GLIPH_dir:
#     type: string
#     outputBinding:
#       outputEval: $(inputs.GLIPH.location)
# arguments:
#   - position: 1
#     prefix: ''
#     separate: false
#     valueFrom: --recursive
#   - position: 2
#     prefix: ''
#     separate: false
#     valueFrom: $(inputs.GLIPH)
#   - position: 3
#     prefix: ''
#     separate: false
#     valueFrom: $(inputs.destinationPath)/