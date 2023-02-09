#!/usr/bin/env bash

source .env

token=`curl -k -s -d "client_secret='this should be a long secret'" -d 'client_id=pibu-app' -d 'username=a@a.a' -d 'password=a' -d 'grant_type=password' "https://${KEYCLOAK_SERVER_HOST}:8085/auth/realms/pibu/protocol/openid-connect/token" | jq -r .access_token`

echo $token;

curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"query{studies {studyID fullName}}"}' https://localhost:4001/graphql | jq

# curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"mutation { testKeycloak }"}' https://localhost:4001/graphql | jq