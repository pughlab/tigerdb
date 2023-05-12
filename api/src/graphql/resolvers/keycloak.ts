import { ApolloError } from 'apollo-server'

export const resolvers = {
  Query: {

  },
  Mutation: {
    // TODO: use ogm models instead of session
    me: async (obj, params, { driver, kauth }, resolveInfo) => {
      try {
        const { sub: keycloakUserID, email, name, ...kcAuth } = kauth.accessToken.content
        let roles = kauth?.accessToken?.content?.resource_access['pibu-app']?.roles
        roles = roles ? roles : []
        const keycloakUser = { keycloakUserID, email, name, roles }

        const session = driver.session()
        const existingUser = await session.run(
          'MATCH (a:KeycloakUser {keycloakUserID: $keycloakUserID}) RETURN a',
          { keycloakUserID }
        )
        // console.log('match result', existingUser)
        if (!existingUser.records.length) {
          const createUser = await session.run(
            'CREATE (a:KeycloakUser {keycloakUserID: $keycloakUserID, name: $name, email: $email, roles: $roles}) RETURN a',
            keycloakUser
          )
          // console.log('createUser result', createUser)
          return createUser.records[0].get(0).properties
        } else {
          // console.log('existing user props', existingUser.records[0].get(0).properties)
          return keycloakUser
        }
      } catch (error) {
        throw new ApolloError('mutation.me', error)
      }
    },
  },
}