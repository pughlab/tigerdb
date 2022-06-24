import * as React from 'react'
import { ApolloProvider } from "@apollo/client"
import apolloClient from './apolloClient'

import {store as reduxStore} from './state/store'
import { Provider as ReduxProvider } from 'react-redux'

import Portal from './components/Portal'
import PublicPortal from './components/PublicPortal'

import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak/keycloak'
import {
  eventLogger as keycloakEventLogger,
  tokenLogger as keycloakTokenLogger,
  initOptions as keycloakInitOptions
} from './keycloak/providerConfig'

import { Logo } from './components/Logo'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import RenderOnAnonymous from './components/helpers/RenderOnAnonymous'
import RenderOnAuthenticated from './components/helpers/RenderOnAuthenticated'

const App = () => {
  
  return (
    // <ReactKeycloakProvider
    //   authClient={keycloak}
    //   onEvent={keycloakEventLogger}
    //   onTokens={keycloakTokenLogger}
    //   initOptions={keycloakInitOptions}
    //   LoadingComponent={<Logo />}
    // >
      
      <div>
        <ReactKeycloakProvider 
          authClient={keycloak}
        >
        <ReduxProvider {...{store: reduxStore}}>
          <ApolloProvider {...{client: apolloClient}}>
          {/* <Nav /> */}
          <BrowserRouter>

          {/* If user is authenticated, show full portal, if not, show PublicPortal */}
          <div>
            <RenderOnAnonymous>
              <PublicPortal />
            </RenderOnAnonymous>
            <RenderOnAuthenticated>
              <Portal />
            </RenderOnAuthenticated>
          </div>

          </BrowserRouter>
          </ApolloProvider>
        </ReduxProvider>
        </ReactKeycloakProvider>
        </div>    
  );
}

export default App