#!/usr/bin/env bash

source .env

token=`curl -k -s -d "client_secret='this should be a long secret'" -d 'client_id=pibu-app' -d 'username=b@b.b' -d 'password=b' -d 'grant_type=password' "https://${KEYCLOAK_SERVER_HOST_AND_PORT}/auth/realms/pibu/protocol/openid-connect/token" | jq -r .access_token`

echo $token;

token=`curl -k -s -d "client_secret='this should be a long secret'" -d 'client_id=pibu-app' -d 'username=a@a.a' -d 'password=a' -d 'grant_type=password' "https://${KEYCLOAK_SERVER_HOST_AND_PORT}/auth/realms/pibu/protocol/openid-connect/token" | jq -r .access_token`

echo $token;

curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"query{studies {studyID fullName}}"}' https://${KEYCLOAK_SERVER_HOST_AND_PORT}/graphql | jq

# curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"mutation { testKeycloak }"}' https://localhost:4001/graphql | jq

# curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"query { studies { studyID } }"}' https://${KEYCLOAK_SERVER_HOST_AND_PORT}/graphql | jq


# echo -e "\n\n\nbbb\n\n\n"


# curl -s -k --request POST \
#   --url https://${KEYCLOAK_SERVER_HOST_AND_PORT}:4001/graphql \
#   -H "Authorization: Bearer $token" \
#   --header 'accept: application/json' \
#   --header 'accept-encoding: gzip, deflate, br' \
#   --header 'connection: keep-alive' \
#   --header 'dnt: 1' \
#   --header 'origin: https://${KEYCLOAK_SERVER_HOST_AND_PORT}:4001/graphql' \
#   --form 'operations={"query": "mutation minioUploadFile($file: Upload!) {minioUploadFile( bucketName: \"raw-dataset-6df28ac1-3291-4fa4-a38c-8ebfb8bb5f4a\" file: $file ) { bucketName objectName filename presignedURL  }}",   "variables": { "file": null } }' \
#   --form 'map={ "nFile": ["variables.file"] }' \
#   --form nFile=@/c/Users/jfoong/Downloads/rawdata_sample_4.csv.gz | jq



  # "mutation minioUpload {minioUpload( bucketName: "bbb" file: "bbb" ) { bucketName objectName filename presignedURL  }}"