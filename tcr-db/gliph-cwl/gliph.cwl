cwlVersion: v1.0

class: CommandLineTool

requirements:
  DockerRequirement:
    dockerPull: gliph2:latest

baseCommand: /irtools.centos

inputs:
  runs_dir:
    type: Directory

  parameter_file:
    type: File
    inputBinding:
      position: 0
      prefix: -c

outputs:
  gliph_output:
    type: Directory
    outputBinding:
      glob: GLIPH