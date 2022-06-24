import { createApolloServer } from './graphql/graphqlServer'
import { readFileSync } from 'fs'
import { createServer } from 'https'

const {apolloServer, app, wssListenConfig} = createApolloServer()

const sslOptions = {
  key: readFileSync("./nginx/certs/bundle.key"),
  cert: readFileSync("./nginx/certs/bundle.crt"),
  secureOptions: require('constants').SSL_OP_NO_TLSv1,
};

const wss = createServer(sslOptions, app);
apolloServer.installSubscriptionHandlers(wss);
wss.listen(wssListenConfig, () => {
  const { host: graphqlHost, port: graphqlPort, path: graphqlPath } = wssListenConfig
  console.log(`GraphQL server ready at http://${graphqlHost}:${graphqlPort}${graphqlPath}`)
});