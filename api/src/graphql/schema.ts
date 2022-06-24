import { mergeTypeDefs, mergeSchemas } from '@graphql-tools/merge'
import { resolvers } from './resolvers'
const { KeycloakTypeDefs, KeycloakSchemaDirectives } = require('keycloak-connect-graphql')

import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'

import { GraphQLUpload } from 'graphql-upload'

const autoTypeDefs = loadFilesSync(path.join(__dirname, './schema'), { extensions: ['graphql'] })

import {Neo4jGraphQL} from '@neo4j/graphql'

export const typeDefs = mergeTypeDefs([... autoTypeDefs, KeycloakTypeDefs, ])

const neo4jSchema = new Neo4jGraphQL({
    typeDefs: mergeTypeDefs([
        ... autoTypeDefs,
        KeycloakTypeDefs
    ]),
    resolvers: {
        ...resolvers,
        Upload: GraphQLUpload, // Include Upload scalar schema
    },
    schemaDirectives: KeycloakSchemaDirectives,
    logger: {log: e => console.log(e)}
})

export const schema = neo4jSchema.schema