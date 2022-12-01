import { createApolloServer } from './graphql/graphqlServer'
import { readFileSync } from 'fs'
import { createServer } from 'https'
import runOnLoad from './runOnLoad'

(async () => {
  const {apolloServer, app, wssListenConfig} = await createApolloServer()

  const sslOptions = {
    key: readFileSync("./nginx/certs/bundle.key"),
    cert: readFileSync("./nginx/certs/bundle.crt"),
    secureOptions: require('constants').SSL_OP_NO_TLSv1,
  };

  const wss = createServer(sslOptions, app);
  apolloServer.installSubscriptionHandlers(wss);
  wss.listen(wssListenConfig, async () => {
    runOnLoad({wssListenConfig})
  });
})()