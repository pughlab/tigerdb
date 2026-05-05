FROM node:22

# Install Java and Nextflow
RUN apt-get update && apt-get install -y default-jre curl bash
RUN curl -s https://get.nextflow.io | bash && mv nextflow /usr/local/bin/
RUN chmod +x /usr/local/bin/nextflow

WORKDIR /usr/src/service
