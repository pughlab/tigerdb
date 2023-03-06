#!/usr/bin/env bash

source .env

token=`curl -k -s -d "client_secret='this should be a long secret'" -d 'client_id=pibu-app' -d 'username=a@a.a' -d 'password=a' -d 'grant_type=password' "https://${KEYCLOAK_SERVER_HOST}:8085/auth/realms/pibu/protocol/openid-connect/token" | jq -r .access_token`

echo $token;

curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"query{studies {studyID fullName}}"}' https://localhost:4001/graphql | jq

# curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"mutation { testKeycloak }"}' https://localhost:4001/graphql | jq

curl -s -k -g -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $token" -d '{"query":"query { studies { studyID } }"}' https://localhost:4001/graphql | jq


# echo -e "\n\n\nbbb\n\n\n"


# curl -s -k --request POST \
#   --url https://localhost:4001/graphql \
#   -H "Authorization: Bearer $token" \
#   --header 'accept: application/json' \
#   --header 'accept-encoding: gzip, deflate, br' \
#   --header 'connection: keep-alive' \
#   --header 'dnt: 1' \
#   --header 'origin: http://localhost:4001/graphql' \
#   --form 'operations={"query": "mutation minioUpload($file: Upload!) {minioUpload( bucketName: \"raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20\" file: $file ) { bucketName objectName filename presignedURL  }}",   "variables": { "file": null } }' \
#   --form 'map={ "nFile": ["variables.file"] }' \
#   --form nFile=@/c/Users/jfoong/Downloads/rawdata_sample_4.csv.gz | jq



  # "mutation minioUpload {minioUpload( bucketName: "bbb" file: "bbb" ) { bucketName objectName filename presignedURL  }}"