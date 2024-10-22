import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {
    isAdmin: async (parent, params, { kauth }) => {
      // const adminRoles : string[] = JSON.parse(process.env.KEYCLOAK_ADMIN_ROLES) || []
      const adminRoles = ["admin"]
      const clientName : string = process.env.KEYCLOAK_SERVER_CLIENT || ""
      console.log(kauth.accessToken.content.resource_access[clientName])
      return (
        kauth
        ? adminRoles.some((role) => kauth.accessToken.content.resource_access[clientName].roles.includes(role))
        : false
      )
    }
  },
  Mutation: {
    // TODO: use ogm models instead of session
    me: async (obj, params, { driver, kauth }, resolveInfo) => {
      try {
        const { sub: keycloakUserID, email, name } = kauth.accessToken.content
        //let roles = kauth?.accessToken?.content?.resource_access['pibu-app']?.roles ?? []
        const keycloakUser = { keycloakUserID, email, name }//, roles }

        const session = driver.session()
        const existingUser = await session.run(
          'MATCH (a:KeycloakUser {keycloakUserID: $keycloakUserID}) RETURN a',
          { keycloakUserID }
        )
        // console.log('match result', existingUser)
        if (!existingUser.records.length) {
          const createUser = await session.run(
            //'CREATE (a:KeycloakUser {keycloakUserID: $keycloakUserID, name: $name, email: $email, roles: $roles}) RETURN a',
            'CREATE (a:KeycloakUser {keycloakUserID: $keycloakUserID, name: $name, email: $email }) RETURN a',
            keycloakUser
          )
          // console.log('createUser result', createUser)
          return createUser.records[0].get(0).properties
        } else {
          // console.log('existing user props', existingUser.records[0].get(0).properties)
          return keycloakUser
        }
      } catch (error) {
        throw new ApolloError('mutation.me', error as string)
      }
    },
  },
}