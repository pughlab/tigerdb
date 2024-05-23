import { useKeycloak } from "@react-keycloak/web";
import React from 'react'

//Checking if user is logged in on Keycloak

import Portal from '../Portal'
import PublicPortal from '../PublicPortal'
const RenderOnAuthenticated = () => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? <Portal/> : <PublicPortal/>;
};

export default RenderOnAuthenticated;