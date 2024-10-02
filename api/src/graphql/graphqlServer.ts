import { ApolloServer } from 'apollo-server-express'

import {neo4jSchema, typeDefs, resolvers} from './schema'
import { applyDirectiveTransformers } from "./authDirectiveTransformer"

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
import { gql } from 'apollo-server'

// Specify host, port and path for GraphQL endpoint
const graphqlPort = process.env.GRAPHQL_SERVER_PORT || 4001
const graphqlPath = process.env.GRAPHQL_SERVER_PATH || '/graphql'
const graphqlHost = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'
const voyagerPath = process.env.GRAPHQL_VOYAGER_PATH || '/voyager'

const keycloakhost = process.env.KEYCLOAK_SERVER_HOST || '0.0.0.0'
const keycloakport = process.env.KEYCLOAK_SERVER_PORT
const keycloakhostandport = process.env.KEYCLOAK_SERVER_HOST_AND_PORT
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
  schema = applyDirectiveTransformers(schema)
  
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
          baseUrl: `https://${keycloakhostandport}/auth`,
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


      // // Query info
      // const queryString = req.body.query
      // const queryObj = gql`${queryString}`
      // const queryOperation = queryObj.definitions[0].operation
      // const queryName = queryObj.definitions[0].selectionSet.selections[0].name.value

      // Keycloak info
      if (kauth.accessToken) {
        const email = kauth.accessToken.content.email
        const sub = kauth.accessToken.content.sub
        let roles : string[] = kauth.accessToken?.content?.resource_access['pibu-app']?.roles

        roles = roles ? roles : []
        const allowedWithoutApproved = ['keycloakAcceptTOS', 'me']
        const allowedWithoutTOS = ['keycloakAcceptTOS', 'me']

        // // Global requirement of approved
        // if (!roles.includes('role|allowedRoles|approved')) {
        //   if (!allowedWithoutApproved.includes(queryName))
        //   throw new Error(`Access denied. User [${email} / ${sub}] has not been approved. Please contact your administrator to approve this account.`)
        // }

        // // Global requirement of accept TOS
        // if (!roles.includes('role|allowedRoles|acceptedTOS')) {
        //   if (!allowedWithoutTOS.includes(queryName))
        //   throw new Error(`Access denied. User [${email} / ${sub}] has not accepted the TOS. Please accept the TOS to gain access.`)
        // }
      } else {
        throw new Error(`Access denied. Keycloak auth token required to access graphql. Please login with keycloak.`)
      }


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