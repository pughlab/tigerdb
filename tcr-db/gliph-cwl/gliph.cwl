cwlVersion: v1.0
class: CommandLineTool
requirements:
  DockerRequirement:
    dockerPull: gliph2:latest
  InitialWorkDirRequirement:   # Mounts the runs_dir as the working directory
    listing:
      - $(inputs.runs_dir)    # List the runs_dir so it's available in the container

baseCommand: irtools
inputs:
  # gliph_input:
  #   type: File
    # inputBinding:
    #   position: 1

  # runs:
  #   type: Directory
  #   inputBinding:
  #     position: 1

  parameter_file:
    type: File
    inputBinding:
      position: 1
      prefix: -c

outputs:
  # gliph_output:
  #   type: Directory
  #   outputBinding:
  #     glob: "GLIPH"
  HLA_output:
    type: File
    outputBinding:
      glob: "*_HLA.csv"
  
  cluster_output:
    type: File
    outputBinding:
      glob: "*_cluster.csv"
  
  cluster_txt_output:
    type: File
    outputBinding:
      glob: "*_cluster.txt"
  
  kmer_output:
    type: File
    outputBinding:
      glob: "*_kmer.txt"

  kmer_log_output:
    type: File
    outputBinding:
      glob: "*_kmer.log"
  
  parameter_output:
    type: File
    outputBinding:
      glob: "*_parameter.txt"
  
  score_output:
    type: File
    outputBinding:
      glob: "*_score.txt"


# output:
# TIGERdb_HLA.csv      TIGERdb_kmer.txt
# TIGERdb_cluster.csv  TIGERdb_parameter.txt
# TIGERdb_cluster.txt  TIGERdb_score.txt
# TIGERdb_kmer.log     

# cwlVersion: v1.0

# class: CommandLineTool

# requirements:
#   DockerRequirement:
#     dockerPull: gliph2:latest

# baseCommand: /irtools.centos

# inputs:
#   runs_dir:
#     type: Directory

#   parameter_file:
#     type: File
#     inputBinding:
#       position: 0
#       prefix: -c

# outputs:
#   gliph_output:
#     type: Directory
#     outputBinding:
#       glob: GLIPH