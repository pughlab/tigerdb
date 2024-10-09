FROM ubuntu:22.04

# # Update package sources and install Python 3.8
# RUN apt-get update && \
#     apt-get install -y python3.8 python3.8-dev python3-pip && \
#     # ln -s /usr/bin/python3.8 /usr/bin/python3 && \
#     # ln -s /usr/bin/python3.8 /usr/bin/python && \
#     python3 -m pip install --upgrade pip setuptools wheel


RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    python3 -m pip install --upgrade pip setuptools wheel

# Set locale environment variables
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

# Install project dependencies
ADD ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install werkzeug==0.16.1
RUN pip install wes-service
RUN pip install -r requirements.txt