library(tidyverse)
library(igraph)
library(graphlayouts)

gliph_path <- "/Users/shirin/Desktop/Immunarch/downsamplign/Projetcs/INSPIRE/dna/tumor/GLIPH/Cumulative/GLIPH_input"
gliph_fname <- "P11817_VQ5GQWRNG2.csv"

gliph_data <- readr::read_csv(
        file.path(gliph_path , gliph_fname ))%>%
        select(
                type , TcRb , V ,
                pattern , Sample ) %>%
        group_by(type)%>% 
        filter(
                any (str_detect(pattern = "PatientDerived" , Sample))
        ) %>%
        ungroup() %>%
        mutate(
                Source = unlist(
                        sapply(
                                strsplit(Sample, split = ":", fixed = TRUE), 
                                function(x) x[[1]][1], simplify=FALSE)) ,
                
                Patient_id = ifelse(grepl ("PatientDerived" , Sample ) ,
                                    str_extract(Sample, "(?<=:).*?(?=_)"),
                                    "TBD"),
                
                Cycle = ifelse(grepl ("PatientDerived" , Sample ) ,
                               unlist (sapply(strsplit(Sample, split = "_", fixed = TRUE), 
                                              function(x) x[2][1], 
                                              simplify=FALSE)),
                               "TBD"),
                
                
                Node = stringr::str_c(TcRb , "_" , Sample)) 


color_shape_pallette <- data.frame(
        Paretnt_node = c(
                "MDavis" , "HomoSapiens" , 
                "EBV" ,  "CMV" ,
                "MCPyV" , "HCV" , "Influenza" , 
                "HPV" ,  "M.tuberculosis" , 
                "CEF"  ,   "S-pneumoniae" , 
                "YFV" , "HTLV" ) ,
        
        Node_color = c(
                "#CDEDFA" , #"MDavis" , 
                          "#FF9F01" , #"HomoSapiens" , 
                          "#AC261B" , #"EBV" ,  
                          "#266D1F" , #"CMV" ,
                          "#BAC70D" , #"MCPyV" , 
                          "#FFDF01" , #"HCV" , 
                          "#0C99BA" , #"Influenza" , 
                          "#1A578F" , #"HPV" ,  
                          "#FFC86D" , #"M.tuberculosis" , 
                          "#C1A132" , #"CEF"  ,   
                          "#D07F89" , #"S-pneumoniae"  ,
                          "#F3A3B5" , #"YFV" ,
                          "#6BB8B3"  #"HTLV"   
        ) )

gliph_data <- gliph_data %>%
        mutate(
                colors = case_when(
                        Source == "PatientDerived" ~ "#000000" ,

                        Source == "MDavis"         ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "MDavis"],
                        Source == "HomoSapiens"    ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "HomoSapiens"],
                        Source == "EBV"            ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "EBV"],
                        Source == "CMV"            ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "CMV"],
                        Source == "MCPyV"          ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "MCPyV"],
                        Source == "HCV"            ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "HCV"],
                        Source == "Influenza"      ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "Influenza"],
                        Source == "HPV"            ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "HPV"] ,
                        Source == "M.tuberculosis" ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "M.tuberculosis"] ,
                        Source == "CEF" ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "CEF"] ,
                        Source == "S-pneumoniae" ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "S-pneumoniae"] ,
                        Source == "HTLV" ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "HTLV"] ,
                        Source == "YFV" ~ color_shape_pallette$Node_color [color_shape_pallette$Paretnt_node == "YFV"]  ))




specificity_signatures <- unique(gliph_data$type)
n_count <- 1
for (sig in specificity_signatures) {
        
        cdr3s <- gliph_data$Node [gliph_data$type == sig]
        if (length(cdr3s) > 1) {
                
                if (n_count == 1) {
                        
                        EDGES <- data.frame (t (combn(cdr3s , 2 , simplify = TRUE)))
                        
                        n_count <- n_count + 1
                }
                else {
                        
                        edges <- data.frame (t (combn(cdr3s , 2 , simplify = TRUE)))
                        EDGES <- bind_rows(EDGES , edges)
                }
                
        }
        
}

network <- graph_from_data_frame(d = EDGES , 
                                 vertices = unique(gliph_data %>% 
                                                           group_by(Node) %>%
                                                           mutate(type = paste(sort (unique (type) ) , collapse = ",")) %>%
                                                           unique() %>% 
                                                           dplyr::select(Node , 
                                                                         Source , 
                                                                         Patient_id ,
                                                                         Cycle ,
                                                                         TcRb ,
                                                                         V ,
                                                                         type ,
                                                                         colors)) ,
                                 directed = FALSE)



### Network stats:
igraph::count_components(network)
#2083

range((igraph::components(network))$csize)
#[2 , 9223]

#Total number of patient-derived CDR3s used in specificity signature identification: 
length(V(network) [V(network)$Source == "PatientDerived"])
#10221

#Removing multi-edges
network <- simplify(network)
#count_components(network)

MaxClique_collection <- max_cliques(network, 
                                    min = 4, 
                                    max = NULL)


network <- induced_subgraph(network, 
                            unlist(MaxClique_collection))



### Network stats:
igraph::count_components(network)
#257

range((igraph::components(network))$csize)
#[4 , 6483]

#Total number of patient-derived CDR3s used in specificity signature identification: 
length(V(network) [V(network)$Source == "PatientDerived"])
#3838


communities_leiden <- igraph::cluster_leiden(network, 
                                             objective_function = "CPM",
                                             resolution_parameter = 0.1 ,
                                             n_iterations = 10000,
                                             beta = 0.01)


length (unique (communities_leiden$membership))
#1334

network <- set_vertex_attr(network, 
                           name = "LeidenCommunity", 
                           value = communities_leiden$membership)

#sort (unique(components(network)$csize))


# nt <- graph.disjoint.union(
#         decompose.graph(network) [which((igraph::components(network))$csize == n )])



saveRDS(communities_leiden,
        file.path(gliph_path ,
                  "Communities" ,
                  "CrappyAfternoonCommunityMap.rds") )
 
# saveRDS(network,
#         file.path(gliph_path ,
#                   "Network" ,
#                   "UntrimmedNetwork.rds") )

#Identifying the largest clique in each community:
largest_cliques_list <- c()


for (community_id in unique(communities_leiden$membership)) {
        subgraph <- igraph::subgraph(
                network ,
                which(V(network)$LeidenCommunity == community_id))
        
        if (clique_num (subgraph) > 4) {
                
                largest_cliques_list <- append(largest_cliques_list , 
                                               unique (names(unlist(largest_cliques(subgraph)))) )
        }
        rm (subgraph)
}


trimmedNetwork <- delete_vertices(network, 
                                  setdiff(V(network)$name , largest_cliques_list))


### Network stats:
#igraph::count_components(trimmedNetwork)
#211

#range((igraph::components(trimmedNetwork))$csize)
#[5 , 3612]


#Total number of INSPIRETumour CDR3s used in specificity signature identification: 
#length(V(trimmedNetwork) [V(trimmedNetwork)$Source == "PatientDerived"])
#1781


#We loop through the communities and count the number of INSPIRE-derived nodes:

GLIPHII_Community_Source <- as.data.frame(table(V(trimmedNetwork)$LeidenCommunity)) %>%
        set_names(c("Community_id", "Community_size")) %>%
        mutate(
                NumberOf_PatientDerived_Nodes = NA )

for (n in c(1:nrow(GLIPHII_Community_Source))) {
        
        community_id <- GLIPHII_Community_Source$Community_id [n]
        
        nt <- igraph::subgraph(
                trimmedNetwork ,
                which(V(trimmedNetwork)$LeidenCommunity == community_id ))
        
        GLIPHII_Community_Source$NumberOf_PatientDerived_Nodes [n] <- length(V(nt)$name [V(nt)$Source == "PatientDerived"])
        
        
        rm (community_id , nt)
        
}

CommunityIDs_Passed <- ( GLIPHII_Community_Source %>%
                                 filter(NumberOf_PatientDerived_Nodes > 0))$Community_id


trimmedNetwork_ContainsPatientNodes <- delete_vertices(trimmedNetwork, 
                                                       setdiff(V(trimmedNetwork)$name , 
                                                               V(trimmedNetwork)$name [V(trimmedNetwork)$LeidenCommunity %in% CommunityIDs_Passed]))



### Network stats:
igraph::count_components(trimmedNetwork_ContainsPatientNodes)
#212

range((igraph::components(trimmedNetwork_ContainsPatientNodes))$csize)
#[5 , 3475]


#Total number of INSPIRETumour CDR3s used in specificity signature identification: 
length(V(trimmedNetwork_ContainsPatientNodes) [V(trimmedNetwork_ContainsPatientNodes)$Source == "PatientDerived"])
#1781



saveRDS(trimmedNetwork_ContainsPatientNodes,
        file.path(network_path ,
                  "CliqueTrimmedNetwork.rds") )






GLIPHII_Community_stats <- as.data.frame(table(V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity)) %>%
        set_names(c("Community_id", "Community_size")) %>%
        mutate(Component_id = NA ,
               Component_size = NA ,
               PatientDerived_Nodes = NA ,
               NumberOf_PatientDerived_Nodes = NA ,
               Number_of_Patients = NA ,
               Cycle = NA ,
               Community_specificity = NA ,
               KnownExternalTCRs = NA)

for (n in c(1:nrow(GLIPHII_Community_stats))) {
        
        community_id <- GLIPHII_Community_stats$Community_id [n]
        
        Component_id <- unique(components(network)$membership [V(trimmedNetwork_ContainsPatientNodes)$name [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id]])
        
        GLIPHII_Community_stats$Component_id [n] <- Component_id
        GLIPHII_Community_stats$Component_size [n] <- components(trimmedNetwork_ContainsPatientNodes)$csize [Component_id]
        
        GLIPHII_Community_stats$Community_specificity [n] <- ifelse(sum (!grepl("PatientDerived" , 
                                                                                unique(V(trimmedNetwork_ContainsPatientNodes)$Source [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id]))) > 0 ,
                                                                    paste(
                                                                            sort (
                                                                                    grep("PatientDerived" , 
                                                                                         unique(V(trimmedNetwork_ContainsPatientNodes)$Source [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id]) , 
                                                                                         value = TRUE , 
                                                                                         invert = TRUE)) ,
                                                                            
                                                                            collapse = ",") ,
                                                                    "Patient_intrinsic") 
        
        
        GLIPHII_Community_stats$PatientDerived_Nodes [n] <- paste(
                sort (
                        unique(V(trimmedNetwork_ContainsPatientNodes)$name [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id & 
                                                        V(trimmedNetwork_ContainsPatientNodes)$Source == "PatientDerived"])) ,
                collapse = ",")
        
        
        
        GLIPHII_Community_stats$NumberOf_PatientDerived_Nodes [n] <- length(unique(V(trimmedNetwork_ContainsPatientNodes)$name [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id & 
                                                                                                            V(trimmedNetwork_ContainsPatientNodes)$Source == "PatientDerived"]))
        
        
        
        GLIPHII_Community_stats$Number_of_Patients [n] <- length(unique(V(trimmedNetwork_ContainsPatientNodes)$Patient_id [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id & 
                                                                                                       V(trimmedNetwork_ContainsPatientNodes)$Source == "PatientDerived"]))
        
        
        GLIPHII_Community_stats$KnownExternalTCRs [n] <- paste(
                sort (
                        unique(V(trimmedNetwork_ContainsPatientNodes)$name [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id & 
                                                        V(trimmedNetwork_ContainsPatientNodes)$Source != "PatientDerived" & V(trimmedNetwork_ContainsPatientNodes)$Source != "MDavis"])) ,
                collapse = ",")
        

        GLIPHII_Community_stats$Cycle [n] <- unique(V(trimmedNetwork_ContainsPatientNodes)$Cycle [V(trimmedNetwork_ContainsPatientNodes)$LeidenCommunity == community_id & 
                                                                              V(trimmedNetwork_ContainsPatientNodes)$Source == "PatientDerived"]) %>% 
                strsplit(split = "-", fixed = TRUE) %>%
                unlist () %>% 
                # str_replace_all("C2T|C3T|EOTT", "OnICB") %>%
                unique()%>%
                # {.[order(match(.,  c("ST" , "OnICB")))]} %>%
                paste(collapse = ",")
        
        rm (community_id , Component_id)
        
}

Annotation_Ref <- tibble(
        ExternalSpecificity = c("Patient_intrinsic" ,
                                "MDavis" ,
                                "HomoSapiens" ,
                                
                                "CEF" ,  "CMV" , 
                                "EBV" ,  "HCV" , 
                                "HPV" ,  "MCPyV" ,
                                
                                "S-pneumoniae" , "M.tuberculosis" , 
                                "Influenza" , "DENV" , "HTLV-1" , "YFV") ,
        
        Abstract_Annotation = c("Patient_intrinsic" ,
                                "MDavis" ,
                                "Human tumour and auto-antigens" ,
                                
                                "Viral" ,  "Viral" , 
                                "Viral" ,  "Viral" , 
                                "Viral" ,  "Viral" ,
                                
                                "Other pathogens" , "Other pathogens" , 
                                "Other pathogens" , "Other pathogens" , "Other pathogens" , "Other pathogens") )





Color_Ref <- tibble(
        Abstract_Annotation = c("Patient_intrinsic" ,
                                "MDavis" ,
                                "Human tumour and auto-antigens" ,
                                "Viral" ,
                                "Other pathogens" ,
                                "Cross-species") ,
        Color = c(          "#777777" ,
                                      "#CDEDFA" ,
                                      "#FF9F01" ,
                                      "#AC261B" ,
                                      "#BAC70D" ,
                                      "#FFDF01"))

# Function to extract HomoSapiens genes
getGenes <- function(string) {
        fullStrings <- grep("HomoSapiens" , 
                            unlist (strsplit(string , ",")),
                            value = TRUE) 
        genes <- paste (unique(sapply(
                strsplit (fullStrings , "__"), 
                function(x) x[[3]])),
                collapse = ",")
        
        return(genes)
        }




# Function for Abstract Annotation:
AbstractAnnotate <- function(string) {
        if (length(unlist (str_split(string , ","))) == 1) {
                annotation <- Annotation_Ref$Abstract_Annotation [Annotation_Ref$ExternalSpecificity == string]
        }
        
        else if (length(unlist (str_split(string , ","))) == 2 &
                 grepl("MDavis" , string) ) {
                
                annotation <- Annotation_Ref$Abstract_Annotation [Annotation_Ref$ExternalSpecificity == grep ("MDavis" , 
                                                                                                              unlist(str_split(string , ",")) ,
                                                                                                              value = TRUE ,
                                                                                                              invert = TRUE)]
        }
        
        else {
                annotation <- "Cross-species"
        }
        
        return(annotation)
}



# Function for Detailed Annotation:
DetailAnnotate <- function(string) {
        if (length(unlist (str_split(string , ","))) == 1) {
                annotation <- string
        }
        else {
                annotation <- paste( grep( "MDavis",
                                           unlist (str_split(string , ",")) ,
                                           value = TRUE ,
                                           invert = TRUE) , collapse = ",")
                
        }
        
        return(annotation)
}

GLIPHII_Community_stats <- GLIPHII_Community_stats %>%
        rowwise() %>%
        mutate(Abstract_Annotation = AbstractAnnotate (Community_specificity) ,
               Detailed_Annotation = DetailAnnotate (Community_specificity)) %>%
        mutate(Detailed_Annotation = str_replace(Detailed_Annotation , "HomoSapiens" , getGenes (KnownExternalTCRs))) %>%
        left_join(Color_Ref ,
                  by = "Abstract_Annotation")

write_csv(GLIPHII_Community_stats ,
          file.path(
                  "/Users/shirin/Desktop/Immunarch/downsamplign/Projetcs/INSPIRE/dna/tumor/GLIPH/Cumulative_New/GLIPH_output/Communities" ,
                  "CliqueTrimmed_Stats-and-Specificity.csv" ))
