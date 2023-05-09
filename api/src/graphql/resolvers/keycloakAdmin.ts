import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import * as R from 'remeda'
import { KeycloakSyncOperation, KeycloakSyncSet } from '../../../../ui/src/types/types';

const keycloak_users_find = async (obj, { }, { driver, kcAdminClient }) => {
  try {
    const users = await kcAdminClient.users.find();
    return users
  } catch (error) {
    console.log(error)
    throw new ApolloError('query.keycloak_users_find error')
  }
}

const keycloak_clients_find = async (obj, { }, { driver, kcAdminClient }) => {
  try {
    const clients = await kcAdminClient.clients.find({ clientId: 'pibu-app' });
    return clients;
  } catch (error) {
    console.log(error);
    throw new ApolloError('query.keycloak_clients_find error');
  }
}

const keycloak_clients_findRole = async (obj, { clientID, roleName }, { kcAdminClient }) => {
  try {
    const role = await kcAdminClient.clients.findRole({
      id: clientID,
      roleName,
    });
    return role;
  } catch (error) {
    console.log(error);
    throw new ApolloError('query.keycloak_clients_findRole error');
  }
}

const keycloak_users_listAvailableClientRoleMappings = async (obj, { userID, clientID }, { kcAdminClient }) => {
  try {
    if (!userID) {
      return [];
    }
    const roles = await kcAdminClient.users.listAvailableClientRoleMappings({
      id: userID,
      clientUniqueId: clientID,
    });
    return roles;
  } catch (error) {
    console.log(error);
    throw new ApolloError('query.keycloak_users_listAvailableClientRoleMappings error');
  }
}

const keycloak_users_listClientRoleMappings = async (obj, { userID, clientID }, { kcAdminClient }) => {
  try {
    if (!userID) {
      return [];
    }
    const roles = await kcAdminClient.users.listClientRoleMappings({
      id: userID,
      clientUniqueId: clientID,
    });
    return roles;
  } catch (error) {
    console.log(error);
    throw new ApolloError('query.keycloak_users_listClientRoleMappings error');
  }
}

const keycloak_clients_createRole = async (obj, { clientID, roleName }, { kcAdminClient }) => {
  try {
    await kcAdminClient.clients.createRole({
      id: clientID,
      name: roleName,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloak_clients_createRole error');
  }
}

const keycloak_clients_delRole = async (obj, { clientID, roleName }, { kcAdminClient }) => {
  try {
    await kcAdminClient.clients.delRole({
      id: clientID,
      roleName: roleName,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloak_clients_delRole error');
  }
}

const keycloak_users_addClientRoleMappings = async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient }) => {
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
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloak_users_addClientRoleMappings error');
  }
}

const keycloak_users_delClientRoleMappings = async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient }) => {
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
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloak_users_delClientRoleMappings error');
  }
}

const keycloak_users_create = async function (obj, { email }, { kcAdminClient }) {
  try {
    const user = await kcAdminClient.users.create({
      username: email,
      email: email,
    });
    return { ...user, email, username: email };
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloak_users_create error');
  }
}

const keycloak_users_delete = async (obj, { userID }, { kcAdminClient }) => {
  try {
    const ret = await kcAdminClient.users.del({
      id: userID,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloak_users_delete error');
  }
}

const keycloakSyncUsersDeleteNeo4jMissingKeycloak = async (obj, { }, { kcAdminClient, driver, ogm }) => {
  try {
    const keycloakUsers = await keycloak_users_find(obj, {}, { kcAdminClient, driver });
    const UserModel = ogm.model('KeycloakUser');
    const neo4jUsers = await UserModel.find();

    const user = await kcAdminClient.users.create({
      username: email,
      email: email,
    });
    return { ...user, email, username: email };
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloakSyncUsersDeleteNeo4jMissingKeycloak error');
  }
}

const keycloakSyncUsers = async (
    obj,
    { missingIn, operation } : { missingIn : KeycloakSyncSet, operation : KeycloakSyncOperation },
    { kcAdminClient, driver, ogm }
  ) => {
  try {
    const keycloakUsers = await keycloak_users_find(obj, {}, { kcAdminClient, driver });
    const UserModel = ogm.model('KeycloakUser');
    const neo4jUsers = await UserModel.find();

    const keycloakUsersIDs = keycloakUsers.map(u => u.id);
    const neo4jUsersIDs = neo4jUsers.map(u => u.keycloakUserID);

    const inKeycloakNotNeo4j = R.difference(keycloakUsersIDs, neo4jUsersIDs);
    const inNeo4jNotKeycloak = R.difference(neo4jUsersIDs, keycloakUsersIDs);

    if (missingIn == 'keycloak') {
      const missingUsers = neo4jUsers.filter(u => inNeo4jNotKeycloak.includes(u.keycloakUserID)).map(u => ({
        keycloakUserID: u.keycloakUserID,
        name: u.name,
        email: u.email,
        roles: u.roles,
      }));

      if (operation == 'add') {
        for (const user of missingUsers) {

          // create user
          const ret = await keycloak_users_create(obj, { email: user.email }, { kcAdminClient })
          // update id to new id generated by keycloak
          await UserModel.update({ where: {keycloakUserID: user.keycloakUserID}, update: { keycloakUserID: ret.id }})

          // get client id
          const pibuClients = await keycloak_clients_find(obj, { }, { driver, kcAdminClient })
          const pibuClientID = pibuClients[0].id

          // get keycloak roles
          const availableRoles = await keycloak_users_listAvailableClientRoleMappings(obj, { userID: ret.id, clientID: pibuClientID }, { kcAdminClient })

          // add roles from neo4j to keycloak
          for (const roleName of user.roles) {
            const roleID = R.find(availableRoles, x => x.name == roleName).id
            await keycloak_users_addClientRoleMappings(obj, { userID: ret.id, clientID: pibuClientID, roleID, roleName }, { kcAdminClient })
          }
        }
      } else if (operation == 'delete') {
        for (const user of missingUsers) {
          await UserModel.delete({ where: { keycloakUserID: user.keycloakUserID}})
        }
      } else {
        throw new ApolloError('mutation.keycloakSyncUsers error');
      }
    } else if (missingIn == 'neo4j') {
      const missingUsers = await Promise.all(keycloakUsers.filter(u => inKeycloakNotNeo4j.includes(u.id)).map(async u => {

        // get client id
        const pibuClients = await keycloak_clients_find(obj, { }, { driver, kcAdminClient })
        const pibuClientID = pibuClients[0].id

        // get keycloak role
        const roles = await keycloak_users_listClientRoleMappings(obj, { userID: u.id, clientID: pibuClientID }, { kcAdminClient })

        // get role names
        const roleNames = roles.map(r => r.name)
        
        return {
          keycloakUserID: u.id,
          name: u.username,
          email: u.email,
          roles: roleNames,
      }}))

      if (operation == 'add') {
        await UserModel.create({ input: await missingUsers });
      } else if (operation == 'delete') {
        for (const user of missingUsers) {
          await keycloak_users_delete(obj, { userID: user.keycloakUserID }, { kcAdminClient })
        }
      } else {
        throw new ApolloError('mutation.keycloakSyncUsers error');
      }
    } else {
      throw new ApolloError('mutation.keycloakSyncUsers error');
    }

    return null;
  } catch (error) {
    console.log(error);
    throw new ApolloError('mutation.keycloakSyncUsers error');
  }
}

export const resolvers = {
  Query: {
    keycloak_users_find: keycloak_users_find,
    keycloak_clients_find: keycloak_clients_find,
    keycloak_clients_findRole: keycloak_clients_findRole,
    keycloak_users_listAvailableClientRoleMappings: keycloak_users_listAvailableClientRoleMappings,
    keycloak_users_listClientRoleMappings: keycloak_users_listClientRoleMappings,
  },
  Mutation: {
    keycloak_clients_createRole: keycloak_clients_createRole,
    keycloak_clients_delRole: keycloak_clients_delRole,
    keycloak_users_addClientRoleMappings: keycloak_users_addClientRoleMappings,
    keycloak_users_delClientRoleMappings: keycloak_users_delClientRoleMappings,
    keycloak_users_create: keycloak_users_create,
    keycloak_users_delete: keycloak_users_delete,
    keycloakSyncUsers: keycloakSyncUsers,
  },
}