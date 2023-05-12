import * as React from 'react'

import { useKeycloak } from "@react-keycloak/web";
import { Button } from 'semantic-ui-react';
import { gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Keycloak from 'keycloak-js';
import { keycloakRefreshToken } from '../../common';
//Checking if user is logged in on Keycloak
const RenderOnAcceptedTOS = ({ children }) => {
    const { keycloak } = useKeycloak();

    const [keycloakToken, setKeycloakToken] = useState(keycloak.token)

    // AcceptTOS
    const [acceptTOS, { }] = useMutation(gql`
    mutation keycloakAcceptTOS {
        keycloakAcceptTOS
    }`, {onCompleted: () => { keycloakRefreshToken(keycloak, setKeycloakToken) }})

    const isLoggedIn = keycloak.authenticated;

    let isAcceptedTOS = false
    const const_adminRole = 'role|allowedRoles|acceptedTOS'
    const const_resource = 'pibu-app'
    if (keycloak.hasResourceRole(const_adminRole, const_resource)) {
        isAcceptedTOS = true
    }

    const userID = keycloak.subject
    const clientID = keycloak.clientId

    // Approve an account by adding the user to the role:
    // 'role|allowedRoles|approved'

    return isLoggedIn ?
        (
            isAcceptedTOS ? children : <>You must <Button onClick={ () => acceptTOS() }>accept</Button> the TOS before you can access the IMIC portal.</>
        )
        : <>Please login</>
};

export default RenderOnAcceptedTOS;