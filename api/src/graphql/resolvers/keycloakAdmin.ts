import { minioClient, listBucketObjects } from '../../minio/minio'
import { ApolloError } from 'apollo-server'
import  zlib  from 'zlib';
import { extname } from 'path'
import * as R from 'remeda'
import { KeycloakSyncOperation, KeycloakSyncSet } from '../../../../ui/src/types/types';

const keycloakUsersFind = async (obj, { }, { driver, kcAdminClient }) => {
  try {
    const users = await kcAdminClient.users.find();
    return users
  } catch (error) {
    console.log(error)
    throw new ApolloError(`query.keycloakUsersFind (${error?.response?.data?.error})`, error)
  }
}

const keycloakClientsFind = async (obj, { }, { driver, kcAdminClient }) => {
  try {
    const clients = await kcAdminClient.clients.find({ clientId: 'pibu-app' });
    return clients;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`query.keycloakClientsFind (${error?.response?.data?.error})`, error);
  }
}

const keycloakClientsFindRole = async (obj, { clientID, roleName }, { kcAdminClient }) => {
  try {
    const role = await kcAdminClient.clients.findRole({
      id: clientID,
      roleName,
    });
    return role;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`query.keycloakClientsFindRole (${error?.response?.data?.error})`, error);
  }
}

const keycloakUsersListAvailableClientRoleMappings = async (obj, { userID, clientID }, { kcAdminClient }) => {
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
    throw new ApolloError(`query.keycloakUsersListAvailableClientRoleMappings (${error?.response?.data?.error})`, error);
  }
}

const keycloakUsersListClientRoleMappings = async (obj, { userID, clientID }, { kcAdminClient }) => {
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
    throw new ApolloError(`query.keycloakUsersListClientRoleMappings (${error?.response?.data?.error})`, error);
  }
}

const keycloakClientsCreateRole = async (obj, { clientID, roleName }, { kcAdminClient }) => {
  try {
    await kcAdminClient.clients.createRole({
      id: clientID,
      name: roleName,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`mutation.keycloakClientsCreateRole (${error?.response?.data?.error})`, error);
  }
}

const keycloakClientsDelRole = async (obj, { clientID, roleName }, { kcAdminClient }) => {
  try {
    await kcAdminClient.clients.delRole({
      id: clientID,
      roleName: roleName,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`mutation.keycloakClientsDelRole (${error?.response?.data?.error})`, error);
  }
}

const keycloakUsersAddClientRoleMappings = async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient }) => {
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
    throw new ApolloError(`mutation.keycloakUsersAddClientRoleMappings (${error?.response?.data?.error})`, error);
  }
}

const keycloakUsersDelClientRoleMappings = async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient }) => {
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
    throw new ApolloError(`mutation.keycloakUsersDelClientRoleMappings (${error?.response?.data?.error})`, error);
  }
}

const keycloakUsersCreate = async function (obj, { email }, { kcAdminClient }) {
  try {
    const user = await kcAdminClient.users.create({
      username: email,
      email: email,
    });
    return { ...user, email, username: email };
  } catch (error) {
    console.log(error);
    throw new ApolloError(`mutation.keycloakUsersCreate (${error?.response?.data?.error})`, error);
  }
}

const keycloakUsersDelete = async (obj, { userID }, { kcAdminClient }) => {
  try {
    const ret = await kcAdminClient.users.del({
      id: userID,
    });
    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`mutation.keycloakUsersDelete (${error?.response?.data?.error})`, error);
  }
}

const keycloakSyncUsers = async (
    obj,
    { missingIn, operation } : { missingIn : KeycloakSyncSet, operation : KeycloakSyncOperation },
    { kcAdminClient, driver, ogm }
  ) => {
  try {
    const keycloakUsers = await keycloakUsersFind(obj, {}, { kcAdminClient, driver });
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
          const ret = await keycloakUsersCreate(obj, { email: user.email }, { kcAdminClient })
          // update id to new id generated by keycloak
          await UserModel.update({ where: {keycloakUserID: user.keycloakUserID}, update: { keycloakUserID: ret.id }})

          // get client id
          const pibuClients = await keycloakClientsFind(obj, { }, { driver, kcAdminClient })
          const pibuClientID = pibuClients[0].id

          // get keycloak roles
          const availableRoles = await keycloakUsersListAvailableClientRoleMappings(obj, { userID: ret.id, clientID: pibuClientID }, { kcAdminClient })

          // add roles from neo4j to keycloak
          for (const roleName of user.roles) {
            const roleID = R.find(availableRoles, x => x.name == roleName).id
            await keycloakUsersAddClientRoleMappings(obj, { userID: ret.id, clientID: pibuClientID, roleID, roleName }, { kcAdminClient })
          }
        }
      } else if (operation == 'delete') {
        for (const user of missingUsers) {
          await UserModel.delete({ where: { keycloakUserID: user.keycloakUserID}})
        }
      } else {
        throw new ApolloError(`mutation.keycloakSyncUsers (invalid params) (${error?.response?.data?.error})`, error);
      }
    } else if (missingIn == 'neo4j') {
      const missingUsers = await Promise.all(keycloakUsers.filter(u => inKeycloakNotNeo4j.includes(u.id)).map(async u => {

        // get client id
        const pibuClients = await keycloakClientsFind(obj, { }, { driver, kcAdminClient })
        const pibuClientID = pibuClients[0].id

        // get keycloak role
        const roles = await keycloakUsersListClientRoleMappings(obj, { userID: u.id, clientID: pibuClientID }, { kcAdminClient })

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
          await keycloakUsersDelete(obj, { userID: user.keycloakUserID }, { kcAdminClient })
        }
      } else {
        throw new ApolloError(`mutation.keycloakSyncUsers (neo4j/add) (${error?.response?.data?.error})`, error);
      }
    } else {
      throw new ApolloError(`mutation.keycloakSyncUsers (invalid params) (${error?.response?.data?.error})`, error);
    }

    return null;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`mutation.keycloakSyncUsers (${error?.response?.data?.error})`, error);
  }
}

const keycloakAcceptTOS = async (obj, { userID, clientID, roleID, roleName }, { kcAdminClient, driver, kauth }) => {
  try {

    const userID = kauth.accessToken.content.sub

    // get client id
    const pibuClients = await keycloakClientsFind(obj, { }, { driver, kcAdminClient })
    const clientID = pibuClients[0].id

    // get keycloak role
    const roleName = 'role|allowedRoles|acceptedTOS'
    const role = await keycloakClientsFindRole(obj, { clientID, roleName }, { kcAdminClient })
    const roleID = role.id

    await keycloakUsersAddClientRoleMappings(obj, { userID, clientID, roleID, roleName }, { kcAdminClient })

    return true;
  } catch (error) {
    console.log(error);
    throw new ApolloError(`mutation.keycloakUsersAddClientRoleMappings (${error?.response?.data?.error})`, error);
  }
}

export const resolvers = {
  Query: {
    keycloakUsersFind: keycloakUsersFind,
    keycloakClientsFind: keycloakClientsFind,
    keycloakClientsFindRole: keycloakClientsFindRole,
    keycloakUsersListAvailableClientRoleMappings: keycloakUsersListAvailableClientRoleMappings,
    keycloakUsersListClientRoleMappings: keycloakUsersListClientRoleMappings,
  },
  Mutation: {
    keycloakClientsCreateRole: keycloakClientsCreateRole,
    keycloakClientsDelRole: keycloakClientsDelRole,
    keycloakUsersAddClientRoleMappings: keycloakUsersAddClientRoleMappings,
    keycloakUsersDelClientRoleMappings: keycloakUsersDelClientRoleMappings,
    keycloakUsersCreate: keycloakUsersCreate,
    keycloakUsersDelete: keycloakUsersDelete,
    keycloakSyncUsers: keycloakSyncUsers,
    keycloakAcceptTOS: keycloakAcceptTOS,
  },
}