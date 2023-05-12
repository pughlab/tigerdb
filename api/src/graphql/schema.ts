import { mergeTypeDefs, mergeSchemas, mergeResolvers } from '@graphql-tools/merge'
import { KeycloakTypeDefs } from 'keycloak-connect-graphql'
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import { GraphQLUpload } from 'graphql-upload'
// import {Neo4jGraphQL} from '@neo4j/graphql'
// import { Neo4jGraphQL } from '../neo4jgraphql/packages/graphql/src'
// import { Neo4jGraphQL } from '../neo4jgraphql/packages/graphql/dist' // use this one if the @CHILDdb package does not work
import { Neo4jGraphQL } from '@CHILDdb/neo4j-graphql/packages/graphql/dist'
import { Neo4jGraphQLAuthJWTPlugin } from '@neo4j/graphql-plugin-auth'

// Load type defs and resolvers
const autoTypeDefs = loadFilesSync(path.join(__dirname, './typeDefinitions'), { extensions: ['graphql'] })
const customResolvers = loadFilesSync(path.join(__dirname, './resolvers'))

// Export for neo4j OGM
export const typeDefs = mergeTypeDefs([... autoTypeDefs, KeycloakTypeDefs, ])
export const resolvers = mergeResolvers([... customResolvers, {Upload: GraphQLUpload}])

export const neo4jSchema = new Neo4jGraphQL({
    typeDefs: mergeTypeDefs([... autoTypeDefs, KeycloakTypeDefs ]),
    resolvers: mergeResolvers([... customResolvers, {Upload: GraphQLUpload}]),
    plugins: {
        auth: new Neo4jGraphQLAuthJWTPlugin({
            secret: "super-secret",
            rolesPath: "resource_access.pibu-app.roles"
        })
    }
})

// export const schema = neo4jSchema.schema