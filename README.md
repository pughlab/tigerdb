IMiC readme here (how to start, how each service works)

Requires Node 16 and Docker (should come with `docker compose` command)
```
npm install
cp sample.env .env
cp ui/sample.ui.env ui/.env
```

Need to spin up to get values for editing the .env files, but first set your Gitlab access token
```
export GITLAB_AUTH_TOKEN=your_token_from_gitlab
make setup-volumes
make dev
```

In `.env`, find `KEYCLOAK_SERVER_PUBLIC_KEY` from the Keycloak console (localhost:8080) realm public key : `Realm Settings` -> `Keys` -> `Public Key` and add
```
NEO4J_URI=bolt://your_local_machine_ip_from_internet_settings:7687

...

KEYCLOAK_SERVER_HOST=your_local_machine_ip_from_internet_settings
KEYCLOAK_SERVER_PUBLIC_KEY=key_from_keycloak_admin_console

...

MINIO_IP=your_local_machine_ip_from_internet_settings
```
As well as in `ui/.env`. The variable `WEBPACK_PUBLIC_IP` is used for development. 
```
KEYCLOAK_SERVER_HOST_AND_PORT=your_local_machine_ip_from_internet_settings
...
WEBPACK_PUBLIC_IP=your_local_machine_ip_from_internet_settings
```


Keycloak `Valid Redirect URIs` must also be changed.
Go into `Keycloak console > Clients > pibu-app > Settings > Valid Redirect URIs` and add
```
https://localhost/*
https://localhost:4001/*
https://localhost:3001/*
``` 
On production, this should be changed to the app URL (i.e. whatever the domain name is).

You may also need to change some Docker options to give your containers (specifically the `api` container) enough memory to run (~4gb). 

When using the GraphQL Playground (localhost:4001/graphql), your header should have a `authorization: Bearer ${token}` field in order to be authenticated as a KeycloakUser.
Token can be generated by using the `get_keycloak_token.sh` script.

For Funnel, don't forget to build the `funnel-base` image. Specify `--platform linux/arm64/v8` if running on M1 Mac (also may need to do this for some services in `docker-compose.yml`).
```
docker build -f api/src/funnel/funnel-base.dockerfile -t funnel-base .
```

To set the roles of a test user, go into `Keycloak console > Manage > Users > ... > Role Mappings > Client Roles > pibu-app`
and add piped structure roles
```
role|allowedRoles|acceptedTOS
role|allowedRoles|approved
role|allowedRoles|admin
role|allowedSites|admin
role|allowedStudies|admin
```
These should be imported by the `realm-export.json` but if they're not you need to go to `Keycloak console > Clients > pibu-app > Roles` and add each one. If new roles are to be introduced this is where you'd need to start (and make sure its here since Keycloak API will check this source of truth, even though the `roles` of a `KeycloakUser` should reflect these values).

During development and you're using Chrome and it prevents you from opening the page due to certificate validation, type [thisisunsafe](https://stackoverflow.com/questions/35274659/when-you-use-badidea-or-thisisunsafe-to-bypass-a-chrome-certificate-hsts-err)" to skip.

React dev app: `https://localhost:3001`

GraphQL Playground: `https://localhost/graphql`

Neo4J browser: `http://localhost/browser/`

Minio console: `http://localhost/minio`

Keycloak admin console: `https://localhost/auth/`

Funnel task manager: `http://localhost/tasks`
