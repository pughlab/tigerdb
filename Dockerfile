FROM node:16-alpine as build-deps

RUN apk add --no-cache python3 make g++

ARG GITLAB_AUTH_TOKEN
ENV GITLAB_AUTH_TOKEN $GITLAB_AUTH_TOKEN

WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY .npmrc .
RUN GITLAB_AUTH_TOKEN=${GITLAB_AUTH_TOKEN} npm install --force graphql-ws
RUN GITLAB_AUTH_TOKEN=${GITLAB_AUTH_TOKEN} npm i --force
RUN GITLAB_AUTH_TOKEN=${GITLAB_AUTH_TOKEN} npm --force ci

COPY . .
ENV NODE_ENV production
RUN npm run build:ui

WORKDIR /usr/src/app/imic_docs
RUN npm install --force
RUN npm run clean
RUN npm run build




FROM nginx:alpine
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/ui/dist ./dist
COPY --from=build-deps /usr/src/app/imic_docs/public ./docs

# RUN sed -i 's/https/http/' /etc/apk/repositories
# RUN apk add bash

# ENTRYPOINT ["/bin/bash", "-c", "nginx -g \"daemon off;\""]
CMD ["nginx", "-g", "daemon off;"]