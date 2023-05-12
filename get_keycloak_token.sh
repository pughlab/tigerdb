#!/usr/bin/env bash

source .env

token=`curl -k -s -d "client_secret='this should be a long secret'" -d 'client_id=pibu-app' -d 'username=b@b.b' -d 'password=b' -d 'grant_type=password' "https://${KEYCLOAK_SERVER_HOST_AND_PORT}/auth/realms/pibu/protocol/openid-connect/token" | jq -r .access_token`

echo $token;