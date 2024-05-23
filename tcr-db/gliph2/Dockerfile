# Use CentOS 7 as the base image
FROM centos:7

# Set the working directory
WORKDIR /gliph2

# Copy the GLIPH2 executable from your local machine to the Docker image
COPY irtools.centos /gliph2/irtools.centos

# Make the GLIPH2 executable runnable
RUN chmod a+x irtools.centos