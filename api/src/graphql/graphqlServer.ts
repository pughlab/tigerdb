import { ApolloServer } from 'apollo-server-express'

import {neo4jSchema, typeDefs, resolvers} from './schema'

import { driver } from './neo4j'
import {OGM} from '@neo4j/graphql-ogm'
import { minioClient } from '../minio/minio'

import express from 'express'
import { graphqlUploadExpress } from 'graphql-upload'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import dotenv from 'dotenv'
dotenv.config()

import { configureKeycloak } from './keycloak'
const { KeycloakContext } = require('keycloak-connect-graphql')
import { KeycloakSchemaDirectives } from 'keycloak-connect-graphql'

// Specify host, port and path for GraphQL endpoint
const graphqlPort = process.env.GRAPHQL_SERVER_PORT || 4001
const graphqlPath = process.env.GRAPHQL_SERVER_PATH || '/graphql'
const graphqlHost = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'
const voyagerPath = process.env.GRAPHQL_VOYAGER_PATH || '/voyager'

console.log(graphqlPort, graphqlPath, graphqlHost)


export const createApolloServer = async () => {
  const app = express()

  const { keycloak } = configureKeycloak(app)

  app.use(graphqlUploadExpress())

  app.use(voyagerPath, voyagerMiddleware({ endpointUrl: graphqlPath }));

  let schema = await neo4jSchema.getSchema()
  let config = schema.toConfig()
  const apolloServer = new ApolloServer({
    context: async ({req, res}) => {
      const token = req.headers.authorization || '';
      // console.log(`Req Bearer Token: ${token}`);
      const kauth = new KeycloakContext({req}, keycloak)
      const jwt = kauth?.accessToken?.content
  
      // console.log(`kauth: ${kauth.accessToken}`);
      
      const ogm = new OGM({typeDefs, driver, resolvers})
      ogm.init()
      return {
        driver,
        neo4jDatabase: process.env.NEO4J_DATABASE,
        minioClient,
        kauth,
        ogm,
        jwt
      }
    },
    schema: schema,
    introspection: true,
    playground: true,
    uploads: false,
    schemaDirectives: KeycloakSchemaDirectives,
    logger: {
      debug: message => console.log(message),
      info: message => console.log(message),
      warn: message => console.log(message),
      error: message => console.log(message),
    },
  })
  apolloServer.applyMiddleware({ app, path: graphqlPath })

  const wssListenConfig = { host: graphqlHost, port: graphqlPort, path: graphqlPath }
  return {apolloServer, app, wssListenConfig}

}