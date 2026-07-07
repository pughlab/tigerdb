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
    type: string
  access:
    type: string
  secret:
    type: string
  domain:
    type: string
  port:
    type: string
  forced_dep:
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
