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