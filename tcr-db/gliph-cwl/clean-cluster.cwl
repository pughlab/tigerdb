cwlVersion: v1.0
class: CommandLineTool
baseCommand: ["sed", "/^[[:space:]]*$/d"]
inputs:
  cluster_csv:
    type: File
    inputBinding:
      position: 1
stdout: $(inputs.cluster_csv.basename)
outputs:
  cleaned_cluster_output:
    type: stdout
