import { useKeycloak } from "@react-keycloak/web";
import React from 'react'

//Checking if user is logged in on Keycloak

import Portal from '../Portal'
import PublicPortal from '../PublicPortal'
import CookieConsent from "../CookieConsent";
const RenderOnAuthenticated = () => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return (
        <>
            {isLoggedIn ? <Portal/> : <PublicPortal/>}
            <CookieConsent />
        </>
    );
};

export default RenderOnAuthenticated;