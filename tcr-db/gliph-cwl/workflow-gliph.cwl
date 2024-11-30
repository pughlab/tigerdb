cwlVersion: v1.0
class: Workflow
  
inputs:
  minioInputPath: string[]
  destinationPath: string
  access: string
  secret: string
  domain: string
  port: string
  outPrefix: string

outputs:
  GLIPH_dir:
    type: Directory
    outputSource: upload-gliph/GLIPH_dir

steps:
  extract-gliph:
    run: extract-gliph.cwl
    in:
      minioInputPath: minioInputPath
      access: access
      secret: secret
      domain: domain
      port: port
    out: [script_file, parameter_file, runs_dir, datasets_dir, datasets_file, external_spcfc_file]

  inputPrep-gliph:
    run: inputPrep-gliph.cwl
    in:
      script_file: extract-gliph/script_file
      minio_paths: extract-gliph/datasets_dir
      external_spcfc_file: extract-gliph/external_spcfc_file  # Adjust if needed
      datasets_file: extract-gliph/datasets_file
      output_dir: extract-gliph/runs_dir
      output_name: outPrefix
    # out: [runs_dir]
    out: [gliph_input]

  upload-inputPrep:
    run: upload-inputPrep.cwl
    in:
      gliph_input: inputPrep-gliph/gliph_input
      # runs: inputPrep-gliph/runs_dir
      destinationPath: destinationPath
      access: access
      secret: secret
      domain: domain
      port: port
    out: [parameter_file]

  # extract-inputPrep:
  #   run: extract-inputPrep.cwl
  #   in:
  #     minioInputPath: minioInputPath
  #     access: access
  #     secret: secret
  #     domain: domain
  #     port: port
  #   out: [final_runs_dir, parameter_file]

  gliph:
    run: gliph.cwl
    in:
      # gliph_input: inputPrep-gliph/gliph_input
      # runs: upload-inputPrep/runs_dir
      # parameter_file: extract-gliph/parameter_file
      parameter_file: upload-inputPrep/parameter_file
      # cdr3_file: inputPrep-gliph/gliph_input  # Pass the generated input file explicitly
    out: [HLA_output, cluster_output, cluster_txt_output, kmer_output, kmer_log_output, parameter_output, score_output]

  upload-gliph:
    run: upload-gliph.cwl
    in:
      cluster_output: gliph/cluster_output
      destinationPath: destinationPath
      access: access
      secret: secret
      domain: domain
      port: port
    out: [GLIPH_dir]