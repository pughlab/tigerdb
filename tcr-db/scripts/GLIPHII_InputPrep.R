suppressPackageStartupMessages(library(optparse))     # (CRAN) to handle one-line-commands
suppressPackageStartupMessages(library(tidyverse)) 

tumour_dir <- "/Users/shirin/Desktop/Immunarch/downsamplign/Projetcs/INSPIRE/dna/tumor/clones_productive"
external_spcfc_dir <- "/Users/shirin/Desktop/Immunarch/downsamplign/Projetcs/GLIPH_external_specificities"
data_path_output <- "/Users/shirin/Desktop/Immunarch/downsamplign/Projetcs/INSPIRE/dna/tumor/GLIPH/Cumulative/GLIPH_input"

tumour_fname <- "INSPIRE_TIL_TRBClonotypes.csv"
mdavis_fname <- "MarkDavis_TumorEnrichedTRB-CDR3.tsv"
vdjdb_fname <- "VDJdb_MinimalScoreConfidence3_VersionII.tsv"

# cycle_order <- c("ST" , "C2T" , "C3T" , "EOTT")
output_name <- "INSPIRE_CumulativeTumour.txt"


# user defined variable!! order of cycles
cycle_order <- c("ST" , "C2T" , "C3T" , "EOTT") 

tumour <- readr::read_csv(file.path(
        tumour_dir,
        tumour_fname )) %>%
        mutate(TRBV = unlist(sapply(strsplit(allVHitsWithScore, split = "*", fixed = TRUE), function(x) x[[1]][1], simplify=FALSE)) ,
               TRBJ = unlist(sapply(strsplit(allJHitsWithScore, split = "*", fixed = TRUE), function(x) x[[1]][1], simplify=FALSE)) ) %>%
        dplyr::select(Patient_id , Cycle , 
                      aaSeqCDR3 , TRBV , TRBJ ) %>%
        unique() %>%
        arrange(Patient_id , match(Cycle, cycle_order)) %>%
        group_by(Patient_id , aaSeqCDR3 ) %>%
        mutate(TRBV = str_replace_all( paste(sort (unique (TRBV) ) , collapse = "-or"), "(?!^)TRBV", ""),
               TRBJ = str_replace_all( paste(sort (unique (TRBJ) ) , collapse = "-or"), "(?!^)TRBJ", "")) %>%
        ungroup() %>%
        unique() %>%
        mutate(cloneCount = 1 ) %>%
        group_by(Patient_id , aaSeqCDR3 , TRBV , TRBJ) %>%
        pivot_wider(values_from = cloneCount ,
                    names_from = Cycle) %>%
        ungroup() %>%
        unique() %>%
        rowwise() %>%
        mutate(Cycle = paste( cycle_order [
                        which (
                                is.na (c_across(cycle_order)) == 0)] , 
                collapse = "-")) %>%
        
        mutate(
                `subject:condition` = paste( "PatientDerived" , (paste(Patient_id ,
                                                                Cycle ,
                                                                sep = "_")) , sep = ":") ,
                CDR3a = NA ,
                
                count = 1 
        ) %>%
        dplyr::select(aaSeqCDR3 ,
                      TRBV ,
                      TRBJ ,
                      CDR3a ,
                      `subject:condition` ,
                      count) %>%
        rename(CDR3b = aaSeqCDR3)


# janitor::get_dupes(INSPIRE_tumour , c("CDR3b" , "subject:condition") )


vdjdb_spcf <- readr::read_tsv(
        file.path(
                external_spcfc_dir , 
                vdjdb_fname
        )
) %>%
        filter(!(is.na(TRBV))) %>%
        mutate(TRBV = unlist(sapply(strsplit(TRBV, split = "*", fixed = TRUE), function(x) x[[1]][1], simplify=FALSE)) ,
               TRBJ = unlist(sapply(strsplit(TRBJ, split = "*", fixed = TRUE), function(x) x[[1]][1], simplify=FALSE)) ,
               CDR3a = NA ,
               count = 1)%>% 
        unite("pMHC",
              c(`MHC class` , Epitope , `Epitope gene`),
              sep = "__")%>%
        unite("subject:condition",
              c(`Epitope species` , pMHC),
              sep = ":")%>% 
        select(CDR3b ,
               TRBV ,
               TRBJ ,
               CDR3a ,
               `subject:condition` ,
               count)

mdavis_spcf <- readr::read_tsv(
        file.path(
                external_spcfc_dir , 
                mdavis_fname ))


external_spcfc <- bind_rows(vdjdb_spcf , mdavis_spcf)

patient_rep_MDavisIncluded <- bind_rows(tumour , external_spcfc)
write.table(patient_rep_MDavisIncluded, 
            file.path(data_path_output ,
                      output_name) ,
            col.names = FALSE , row.names = FALSE , 
            quote = FALSE ,
            sep = "\t" )
