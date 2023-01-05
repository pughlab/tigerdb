import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'


export const resolvers = {
  Query: {
    keycloak_users_find: async (obj, { bucketName, file }, { driver, kcAdminClient }) => {
      try {
        const users = await kcAdminClient.users.find();
        return users
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.keycloak_users_find error')
      }
    },
    keycloak_clients_find: async (obj, { bucketName, file }, { driver, kcAdminClient }) => {
      try {
        const clients = await kcAdminClient.clients.find({clientId: 'pibu-app'});
        return clients
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.keycloak_clients_find error')
      }
    },
    keycloak_clients_findRole: async (obj, { clientID, roleName }, { kcAdminClient }) => {
      try {
        const role = await kcAdminClient.clients.findRole({
          id: clientID,
          roleName,
        })
        return role
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.keycloak_clients_findRole error')
      }
    },
    keycloak_users_listAvailableClientRoleMappings: async (obj, { userID, clientID }, { kcAdminClient }) => {
      try {
        const roles = await kcAdminClient.users.listAvailableClientRoleMappings({
          id: userID,
          clientUniqueId: clientID,
        })
        return roles
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.keycloak_users_listAvailableClientRoleMappings error')
      }
    },
    keycloak_users_listClientRoleMappings: async (obj, { userID, clientID }, { kcAdminClient }) => {
      try {
        const roles = await kcAdminClient.users.listClientRoleMappings({
          id: userID,
          clientUniqueId: clientID,
        })
        return roles
      } catch (error) {
        console.log(error)
        throw new ApolloError('query.keycloak_users_listClientRoleMappings error')
      }
    },
  },
  Mutation: {
    keycloak_clients_createRole: async (obj, { clientID, roleName }, { kcAdminClient }) => {
      try {
        await kcAdminClient.clients.createRole({
          id: clientID,
          name: roleName,
        })
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.keycloak_clients_createRole error')
      }
    },
    keycloak_clients_delRole: async (obj, { clientID, roleName }, { kcAdminClient }) => {
      try {
        await kcAdminClient.clients.delRole({
          id: clientID,
          roleName: roleName,
        })
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.keycloak_clients_delRole error')
      }
    },
    keycloak_users_addClientRoleMappings: async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient }) => {
      try {
        await kcAdminClient.users.addClientRoleMappings({
          id: userID,
          clientUniqueId: clientID,
  
          // at least id and name should appear
          roles: [
            {
              id: roleID,
              name: roleName,
            },
          ],
        })
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.keycloak_users_addClientRoleMappings error')
      }
    },
    keycloak_users_delClientRoleMappings: async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient }) => {
      try {
        await kcAdminClient.users.delClientRoleMappings({
          id: userID,
          clientUniqueId: clientID,
  
          // at least id and name should appear
          roles: [
            {
              id: roleID,
              name: roleName,
            },
          ],
        })
        return true
      } catch (error) {
        console.log(error)
        throw new ApolloError('mutation.keycloak_users_delClientRoleMappings error')
      }
    },
  },
}