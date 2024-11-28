#!/usr/bin/env Rscript
suppressPackageStartupMessages(library(optparse))
suppressPackageStartupMessages(library(tidyverse))
suppressPackageStartupMessages(library(tools))  # For file extension handling

# Define command-line options
option_list <- list(
  make_option(c("-d", "--datasets_file"), help = "Tumour datasets.tsv with bucketName and objectName"),
  make_option(c("-e", "--external_spcfc_file"), help = "External specificity file path"),
  # make_option(c("-o", "--output_dir"), help = "Data output path"),
  make_option(c("-x", "--minio_paths"), help = "Minio paths mounted to container"),
  make_option(c("-p", "--output_name"), help = "Output filename")
)

opt_parser <- OptionParser(option_list = option_list)
opt <- parse_args(opt_parser)

# Assign command-line arguments to variables
external_spcfc_file <- opt$external_spcfc_file
datasets_file <- opt$datasets_file
# output_dir <- basename(opt$output_dir)
output_name <- opt$output_name
output_name_with_extension <- paste0(output_name, "_GLIPH_INPUT.txt")

# Read in datasets.csv
datasets <- readr::read_tsv(datasets_file)

# # Parse Minio paths (comma-separated string)
# MinioPaths <- strsplit(opt$minio_paths, ",")[[1]]

# # Create a data frame with Minio paths and datasetID (extracted from the paths)
# MinioDataPaths <- data.frame(
#   datasetID = basename(MinioPaths),  # Extract the datasetID from the path
#   dataset_path = MinioPaths,
#   stringsAsFactors = FALSE
# )
MinioPath <- opt$minio_paths

# MinioPaths <- as.list(strsplit(MinioPath, ",")[[1]])
MinioPaths <- strsplit(MinioPath, ",")[[1]]
MinioPaths <- trimws(MinioPaths)  # Remove any leading/trailing whitespace

# MinioDataPaths = data.frame(datasetID=rep(0, length(MinioPaths)), dataset_path=rep(0, length(MinioPaths)))
MinioDataPaths <- data.frame(
  datasetID = basename(MinioPaths),
  dataset_path = MinioPaths,
  stringsAsFactors = FALSE
)

# Validate that MinioPaths is not empty
if (length(MinioPaths) == 0) {
  stop("Error: No Minio paths provided.")
}

# for (i in seq_along(MinioPaths)) {
#   MinioDataPaths[i, ] = c(basename(MinioPaths[[i]]), MinioPaths[[i]])
# }

# # merged_data <- merge(datasets, MinioDataPaths, by.x = "datasetID", by.y = "dataset_ID", all.x = TRUE)
# merged_data <- merge(datasets, MinioDataPaths, by = "datasetID")

# Check column names
print(colnames(datasets))
print(colnames(MinioDataPaths))

# Ensure both datasetID columns are character type
datasets$datasetID <- as.character(datasets$datasetID)
MinioDataPaths$datasetID <- as.character(MinioDataPaths$datasetID)

# Proceed with the merge
merged_data <- merge(datasets, MinioDataPaths, by = "datasetID")

# Initialize an empty list to store data frames
tumour_list <- list()
gliph_colnames <- c("CDR3b", "TRBV", "TRBJ", "CDR3a", "subject:condition", "count")

# Loop over each tumour file and read it using the appropriate function
for (i in 1:nrow(merged_data)) {
  tumour_fname <- merged_data$objectName[i]  # Filename (objectName) from datasets.csv
  file_path <- merged_data$dataset_path[i]   # Corresponding Minio path
  
  # Determine the file extension
  file_ext <- tolower(file_ext(tumour_fname))  # Ensure the extension is in lowercase
  
  # Read the file based on its extension
  if (file_ext %in% c("tsv", "txt")) {
    tumour_data <- readr::read_tsv(file.path(file_path, tumour_fname), col_names=gliph_colnames, col_types = cols()) %>%
      dplyr::select(CDR3b, TRBV, TRBJ, CDR3a, `subject:condition`, count)
  } else if (file_ext == "csv") {
    tumour_data <- readr::read_csv(file.path(file_path, tumour_fname), col_names=gliph_colnames, col_types = cols()) %>%
      dplyr::select(CDR3b, TRBV, TRBJ, CDR3a, `subject:condition`, count)
  } else {
    stop(paste("Unsupported file extension for file:", tumour_fname))
  }
  
  # Store the dataframe in the list with the filename as the key
  tumour_list[[tumour_fname]] <- tumour_data
}

# Combine all tumour data frames into one and ensure uniqueness
tumour <- bind_rows(tumour_list) %>%
  distinct()

# Combine TRBV and TRBJ genes for each unique combination
tumour <- tumour %>%
  group_by(CDR3b, CDR3a, `subject:condition`) %>%
  mutate(
    TRBV = str_replace_all(paste(sort(unique(TRBV)), collapse = "-or"), "(?!^)TRBV", ""),
    TRBJ = str_replace_all(paste(sort(unique(TRBJ)), collapse = "-or"), "(?!^)TRBJ", "")
  ) %>%
  ungroup() %>%
  distinct() %>%
  dplyr::select(CDR3b, TRBV, TRBJ, CDR3a, `subject:condition`, count)

# Read external specificity data
external_spcfc <- readr::read_tsv(external_spcfc_file, col_types = cols()) %>%
  filter(!is.na(TRBV)) %>%
  mutate(
    TRBV = sapply(strsplit(TRBV, split = "*", fixed = TRUE), function(x) x[[1]]),
    TRBJ = sapply(strsplit(TRBJ, split = "*", fixed = TRUE), function(x) x[[1]]),
    count = 1
  ) %>%
  unite("pMHC", c(`Epitope gene/protein name`, `MHC`, Mutation, `Recognizes WT epitope`, `Epitope amino-acid sequence`), sep = "__") %>%
  unite("subject:condition", c(`Epitope species`, pMHC), sep = ":") %>%
  dplyr::select(CDR3b, TRBV, TRBJ, CDR3a, `subject:condition`, count)

# Combine tumour and external specificity data
final <- bind_rows(tumour, external_spcfc)

# Write the final data to the output file
write.table(
  final,
  file.path("./", output_name_with_extension),
  col.names = FALSE,
  row.names = FALSE,
  quote = FALSE,
  sep = "\t"
)
# readr::write_tsv(
#   final, 
#   file.path('./', output_name_with_extension), 
#   col_names = FALSE
# )
