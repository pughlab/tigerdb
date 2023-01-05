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
import { KeycloakContext } from 'keycloak-connect-graphql'
import { KeycloakSchemaDirectives } from 'keycloak-connect-graphql'

import KcAdminClient from '@keycloak/keycloak-admin-client';

// Specify host, port and path for GraphQL endpoint
const graphqlPort = process.env.GRAPHQL_SERVER_PORT || 4001
const graphqlPath = process.env.GRAPHQL_SERVER_PATH || '/graphql'
const graphqlHost = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'
const voyagerPath = process.env.GRAPHQL_VOYAGER_PATH || '/voyager'

const keycloakhost = process.env.KEYCLOAK_SERVER_HOST || '0.0.0.0'
const keycloakport = process.env.KEYCLOAK_SERVER_PORT || '8085'
const keycloakrealm = process.env.KEYCLOAK_SERVER_REALM || 'pibu'
const keycloakclient = process.env.KEYCLOAK_SERVER_CLIENT || 'pibu-app'
const keycloakpublickey = process.env.KEYCLOAK_SERVER_PUBLIC_KEY || ''

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

      const kcAdminClient = new KcAdminClient(
        // To configure the client, pass an object to override any of these  options:
        {
          baseUrl: `https://${keycloakhost}:${keycloakport}/auth`,
          // realmName: keycloakrealm,
          // requestOptions: {
          //   /* Fetch request options https://developer.mozilla.org/en-US/docs/Web/API/fetch#options */
          // },
        }
      );

      // Authorize with username / password
      await kcAdminClient.auth({
        username: 'admin',
        password: 'admin',
        grantType: 'password',
        clientId: 'admin-cli',
        // totp: '123456', // optional Time-based One-time Password if OTP is required in authentication flow
      })

      kcAdminClient.setConfig({
        realmName: keycloakrealm,
      });

      return {
        driver,
        neo4jDatabase: process.env.NEO4J_DATABASE,
        minioClient,
        kauth,
        ogm,
        jwt,
        kcAdminClient,
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