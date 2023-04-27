FROM node:16-alpine as build-deps

# RUN apk add --no-cache python make g++

ARG GITLAB_AUTH_TOKEN
ENV GITLAB_AUTH_TOKEN $GITLAB_AUTH_TOKEN

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY .npmrc .
RUN GITLAB_AUTH_TOKEN=${GITLAB_AUTH_TOKEN} npm install --force graphql-ws
# RUN npm i --force
RUN GITLAB_AUTH_TOKEN=${GITLAB_AUTH_TOKEN} npm --force ci

COPY . .
ENV NODE_ENV production
RUN npm run build:ui

FROM nginx:alpine
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/ui/dist ./dist

# RUN sed -i 's/https/http/' /etc/apk/repositories
# RUN apk add bash

# ENTRYPOINT ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
CMD ["nginx", "-g", "daemon off;"]