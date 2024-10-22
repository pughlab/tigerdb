class: Workflow
cwlVersion: v1.0

inputs:

  - id: minioInputPath
    # type: string[]
    type: string

  - id: destinationPath
    type: string

  - id: access
    type: string

  - id: secret
    type: string

  - id: domain
    type: string

  - id: port
    type: string
 
outputs: []
steps:
  - id: extract-gliph
    in:
      - id: minioInputPath
        source: minioInputPath

      - id: access
        source: access

      - id: secret
        source: secret
        
      - id: domain
        source: domain

      - id: port
        source: port
    out:
      - id: parameter_file
      # - id: input_dir
      - id: runs_dir

    run: ./extract-gliph.cwl

  - id: gliph
    in:
      - id: runs_dir
        source: extract-gliph/runs_dir
      
      # - id: R_script
      #   source: extract-gliph/R_file_GLIPH

      - id: parameter_file
        source: extract-gliph/parameter_file

    out:
      - id: gliph_output
    run: ./gliph.cwl

  - id: upload-gliph
    in:
      - id: GLIPH
        source: gliph/gliph_output

      - id: destinationPath
        source: destinationPath

      - id: access
        source: access

      - id: secret
        source: secret
        
      - id: domain
        source: domain

      - id: port
        source: port
    out:
      - id: GLIPH_dir
    run: ./upload-gliph.cwl