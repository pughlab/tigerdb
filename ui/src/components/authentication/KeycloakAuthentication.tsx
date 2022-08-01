import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import * as React from 'react'
import { Button, Container, Grid, GridColumn, Segment } from 'semantic-ui-react'
import { LoadDataButton, DeleteDataButton } from '../upload/DataButtons'
import SampleData from '../tables/example/SampleData'

import ExploreDatabase from './ExploreDatabase'
import {useDropzone} from 'react-dropzone'
import keycloak from '../../keycloak/keycloak'

export default function UserSettings () {
  return (
    <Container as={Segment}>
      {/* Keycloak Authentication with Login/Logout button */}
      <div>
          <Grid>
            <GridColumn textAlign="center"> {/* Centering login button */}
            {!keycloak.authenticated && (
                   <Button fluid
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </Button>
                 )}

                 {!!keycloak.authenticated && (
                   <Button fluid
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </Button>
                 )}
            </GridColumn>
          </Grid>
        </div>
    </Container>
  ) 
}