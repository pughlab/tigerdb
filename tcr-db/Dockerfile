FROM r-base:4.0.2
RUN apt-get update && apt-get install -y gnupg2 

# # Add GPG keys for R
# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 0E98404D386FA1D9
# RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 6ED0E7B82643E131

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 40976EAF437D05B5
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3B4FE6ACC0B21F32

RUN apt-get update && \
    apt-get install -y libcurl4-openssl-dev libhdf5-dev libssl-dev libxml2-dev libgit2-dev
    
# ENV R_HOME /usr/lib/R

COPY install-base.R .
RUN Rscript install-base.R