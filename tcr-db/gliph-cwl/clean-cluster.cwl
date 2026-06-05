cwlVersion: v1.0
class: CommandLineTool

# Tell CWL to run a shell command
baseCommand: ["sh", "-c"]

# Pass the chained sed and awk commands as the string to execute
arguments:
  - valueFrom: |
      sed '/^[[:space:]]*$/d' $(inputs.cluster_csv.path) | awk 'BEGIN{FS=OFS=","} {for(i=1;i<=NF;i++) if($i=="-") $i=""; print}'

inputs:
  cluster_csv:
    type: File
    # We remove inputBinding because we refer to inputs.cluster_csv.path directly in the argument above

stdout: $(inputs.cluster_csv.basename)

outputs:
  cleaned_cluster_output:
    type: stdout