cwlVersion: v1.0
class: CommandLineTool
requirements:
  DockerRequirement:
    # dockerPull: rocker/tidyverse:latest  # Ensure this image has all required R packages
    dockerImageId: tidyverse-optparse:latest
baseCommand: Rscript
inputs:
  script_file:
    type: File
    default: TIGERdb_inputPrep.R  # Name of R script
    inputBinding:
      position: 1
  # tumour_dir:
  #   type: Directory
  #   inputBinding:
  #     prefix: -t
  #     position: 2
  external_spcfc_file:
    type: File
    default: TIGERdb_MinimalScoreConfidence3_VersionII.tsv  # Name of external file
    inputBinding:
      prefix: -e
      position: 3
  # output_dir:
  #   type: Directory
    # inputBinding:
    #   prefix: -o
    #   position: 4
  # tumour_fname:
  #   type: File[]
  #   inputBinding:
  #     prefix: -n
  #     separate: true  # Allows multiple -n options
  #     position: 5
  datasets_file:
    type: File
    inputBinding:
      prefix: -d
      position: 5
  minio_paths:  
    type: Directory[]
    inputBinding:
      position: 6
      prefix: -x
      itemSeparator: ","
  output_name:
    type: string
    default: "TIGERdb"
    inputBinding:
      prefix: -p
      position: 7
outputs:
  gliph_input:
    type: File
    outputBinding:
      glob: "*_GLIPH_INPUT.txt"
