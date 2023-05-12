import * as R from 'remeda'

export const keycloakRefreshToken = (keycloak: Keycloak.KeycloakInstance, callbackFn: any) => {
  const SECONDS_IN_ONE_DAY = 86400
  keycloak.updateToken(SECONDS_IN_ONE_DAY).then(function(refreshed) {
      if (refreshed) {
        callbackFn(keycloak.token)
      // alert('Token was successfully refreshed');
      } else {
      // alert('Token is still valid');
      }
  }).catch(function() {
      alert('Failed to refresh the token, or the session has expired');
})}

export const sortRoles = (roles: any) => R.sortBy(roles, (r: any) => r.name)

export const filterRoles = (roles: any) => roles.filter((r: any) => r.name.split('|')[0] == 'role')