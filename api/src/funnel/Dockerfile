# build stage
FROM golang:1.26-alpine AS build-env
RUN apk add make git bash build-base
ENV GOPATH=/go
ENV PATH="/go/bin:${PATH}"

WORKDIR /go/src/github.com/ohsu-comp-bio/funnel
RUN git clone https://github.com/calypr/funnel.git .
RUN go mod download
RUN --mount=type=cache,target=/root/.cache/go-build make build

# final stage
FROM alpine
RUN apk add --no-cache docker-cli docker
WORKDIR /opt/funnel
EXPOSE 8000 9090
ENV PATH="/app:${PATH}"
COPY --from=build-env /go/src/github.com/ohsu-comp-bio/funnel/funnel /app/
COPY --from=build-env /go/src/github.com/ohsu-comp-bio/funnel /funnel/

ENTRYPOINT ["/app/funnel"]