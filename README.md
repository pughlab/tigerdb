Init
```
git clone git@gitlab.com:CHILDdb/imic.git
cd imic
mkdir ../imic_data

cat >> hormones1.csv << EOM
CHILDid,milk_adiponectin,milk_insulin,milk_leptin
20065,20.05487211,526.1793434,228.3795233
20068,25.46550067,537.8713673,153.7717263
EOM

cat >> hormones2.csv << EOM
CHILDid,a,b,c
20079,1,2,3
20084,4,5,6
20085,7,8,9
EOM

cat hormones1.csv > hormones.csv
# OR get full hormones.csv file from repo

cd ../imic

npm install
cp sample.env .env
cp ui/sample.ui.env ui/.env
```

Edit .env and ui/.env as needed. In particular, set KEYCLOAK_SERVER_HOST to your host's local ip. E.g. 192.168.x.x.

Change keycloak realm-public-key on keycloak.ts
```
docker-compose up
```

View at
```
You may need to allow the invalid cert to proceed to the website.

https://localhost:3001/
https://localhost:4001/graphql
https://localhost:8085
http://localhost:7474/browser/
```

Generate types
```
npm run generate:types
```