ARG DENO_VERSION=1.29.3
FROM denoland/deno:bin-$DENO_VERSION AS deno
FROM frolvlad/alpine-glibc:alpine-3.17
COPY --from=deno /deno /usr/local/bin/deno
COPY service /usr/src/service
RUN apk add --no-cache --update openssl curl jq python3 nodejs npm
WORKDIR /usr/src/service