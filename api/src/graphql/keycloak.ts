import session from 'express-session'
import { Express } from 'express'
import Keycloak from 'keycloak-connect'
const cors = require('cors')
import dotenv from 'dotenv'

dotenv.config()

const keycloakhost = process.env.KEYCLOAK_SERVER_HOST || '0.0.0.0'
const keycloakport = process.env.KEYCLOAK_SERVER_PORT || '8080'

const auth_server_url = `https://${keycloakhost}:${keycloakport}/auth`

console.log('auth_server_url', auth_server_url)

export const configureKeycloak = (app: Express) => {
  const keycloakConfig = {
    "realm": "plbr",
    // Keycloak Console -> Realm Settings -> Keys
    // Need a way to put this into environment variables at docker level?
    "realm-public-key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm8OHc3aZTHBbM/MGrBvxATLoVs36PfpZ0lw4Yx+k0SiOQTB0028QTETat9YjcJTNTJ/X7dimOl7UZbL22QYORmGonuYL1IcM4FNNnrR318vI6wAp5tI6Vt/2kkwpjsAsw/4ltDmXQ/37Mmx7ZcYsRi35mo1DOYwgEiwCYO8KS9qTgBiZM57p992w8uQSA+iMfJjbbHKl/exQFb8FjGdw3JVlnlSceyaI7pWMvU58JjcfcjDkeRt9W/0lHxjJdKGOTndth307zEl2J0eDikxHllWfJZYQYrQCET3J+uPMbVqwxJPq3jxVw6nVkFGRM4G4o4uvMvj7B9G3MP7mryJ2XQIDAQAB//ODdt7tr7Gy0FtNFuyY+mqxHSt6+WLLelHTXssdm+ul80hSGWuQQKfo0toH7RLSpSgogTzhXCy5rHQChg/QQxxZv5C5KcGSWucyVf///5PvkwWhmznCDdCDHSODwjKhlFH9eqO5KjXMLpUY6XHA9wULruKuJL9v0xYWF685Jb0WJW4SZkSfvg38fSVk9v+0DgkL/SF+Qbk1WiywRQsCQ9ZfmPI2v63b+SXGmincYEEZtXgAw814HHNNcB94VpvgU/ezTWAPIc+ryBNjqyewIDAQABMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArIOjyxKnopxnJTgAaixvZ6TEJ0yi4IN2viE5D8GAWxdnqkyaEm4rw9Zvzsc0QldxkR//ODdt7tr7Gy0FtNFuyY+mqxHSt6+WLLelHTXssdm+ul80hSGWuQQKfo0toH7RLSpSgogTzhXCy5rHQChg/QQxxZv5C5KcGSWucyVf///5PvkwWhmznCDdCDHSODwjKhlFH9eqO5KjXMLpUY6XHA9wULruKuJL9v0xYWF685Jb0WJW4SZkSfvg38fSVk9v+0DgkL/SF+Qbk1WiywRQsCQ9ZfmPI2v63b+SXGmincYEEZtXgAw814HHNNcB94VpvgU/ezTWAPIc+ryBNjqyewIDAQAB",
    "auth-server-url": auth_server_url,
    "ssl-required": "none",
    "resource": "plbr-app",
    "public-client": true,
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0,
    "bearer-only": true,
  }

  const memoryStore = new session.MemoryStore()
  app.use(session({
    secret: process.env.SESSION_SECRET_STRING || 'this should be a long secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }))

  const keycloak = new Keycloak({store: memoryStore}, keycloakConfig)

  app.use(keycloak.middleware())
  app.use(cors('*'))

  return { keycloak }
}