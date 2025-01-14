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
  # GLIPH:
  #   type: Directory
  #   inputBinding:
  #     position: 1
  cluster_output:
    type: File
    inputBinding:
      position: 1
  
  HLA_output:
    type: File
    inputBinding:
      position: 2
  
  cluster_txt_output:
    type: File
    inputBinding:
      position: 3
  
  kmer_output:
    type: File
    inputBinding:
      position: 4
  
  kmer_log_output:
    type: File
    inputBinding:
      position: 5
  
  parameter_output:
    type: File
    inputBinding:
      position: 6
  
  score_output:
    type: File
    inputBinding:
      position: 7

  destinationPath:
    type: string
    inputBinding:
      position: 8
  access:
    type: string
  secret:
    type: string
  domain:
    type: string
  port:
    type: string
outputs:
  GLIPH_dir:
    type: string
    outputBinding:
      outputEval: $(inputs.destinationPath)
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