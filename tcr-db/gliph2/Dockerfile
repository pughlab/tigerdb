# Use CentOS 7 as the base image
FROM centos:7

# Set the working directory
WORKDIR /gliph2

# Copy the GLIPH2 executable and rename it to 'irtools'
COPY irtools.centos /gliph2/irtools

# Make the GLIPH2 executable runnable
RUN chmod a+x /gliph2/irtools

# Add /gliph2 to the PATH
ENV PATH="/gliph2:${PATH}"