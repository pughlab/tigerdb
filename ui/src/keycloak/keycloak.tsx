import Keycloak from 'keycloak-js';

const keycloakhost = process.env.KEYCLOAK_SERVER_HOST || '0.0.0.0'
const keycloakport = process.env.KEYCLOAK_SERVER_PORT || '8080'

console.log('keycloakhost', keycloakhost)
console.log('keycloakport', keycloakport)

// const keycloakhost = window.location.hostname

console.log('process', process)
console.log('process.env', process.env)

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: `https://${keycloakhost}:${keycloakport}/auth`,
  realm: "plbr",
  clientId: 'plbr-app'
});

export default keycloak
