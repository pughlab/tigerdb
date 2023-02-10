ARG DENO_VERSION=1.29.3
FROM denoland/deno:bin-$DENO_VERSION AS deno
FROM frolvlad/alpine-glibc:alpine-3.17
COPY --from=deno /deno /usr/local/bin/deno
RUN echo "@testing http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories
RUN apk add --update --no-cache py3-numpy py3-pandas@testing
COPY service /usr/src/service
RUN apk add --no-cache --update openssl curl jq nodejs npm py3-pip
RUN pip install neo4j minio codetiming python-dotenv
WORKDIR /usr/src/service