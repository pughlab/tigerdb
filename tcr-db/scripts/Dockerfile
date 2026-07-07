# # Use the rocker tidyverse image as the base
# FROM rocker/tidyverse:latest

# # Install optparse using the install2.r script provided in the rocker image
# RUN install2.r optparse


# Use a smaller R base image
FROM r-base:latest

# Install required system dependencies for R packages
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    && rm -rf /var/lib/apt/lists/*

# Install tidyverse and optparse in R
RUN R -e "install.packages(c('tidyverse', 'optparse'), repos='https://cloud.r-project.org/')"
