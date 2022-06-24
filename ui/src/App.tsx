import * as React from 'react'
import { ApolloProvider } from "@apollo/client"
import apolloClient from './apolloClient'

import {store as reduxStore} from './state/store'
import { Provider as ReduxProvider } from 'react-redux'

import Portal from './components/Portal'

import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak/keycloak'
import {
  eventLogger as keycloakEventLogger,
  tokenLogger as keycloakTokenLogger,
  initOptions as keycloakInitOptions
} from './keycloak/providerConfig'

import { Logo } from './components/Logo'

import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={keycloakEventLogger}
      onTokens={keycloakTokenLogger}
      initOptions={keycloakInitOptions}
      LoadingComponent={<Logo />}
    >
      
        <ReduxProvider {...{store: reduxStore}}>
          <ApolloProvider {...{client: apolloClient}}>
          <BrowserRouter>
            <Portal />
          </BrowserRouter>
          </ApolloProvider>
        </ReduxProvider>
      
    </ReactKeycloakProvider>
  );
}

export default App