import * as React from 'react'

import { useKeycloak } from "@react-keycloak/web";
//Checking if user is logged in on Keycloak
const RenderOnApproved = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    let isApproved = false
    const const_adminRole = 'role|allowedRoles|approved'
    const const_resource = 'pibu-app'
    if (keycloak.hasResourceRole(const_adminRole, const_resource)) {
        isApproved = true
    }

    // Approve an account by adding the user to the role:
    // 'role|allowedRoles|approved'

    return isLoggedIn ? (isApproved ? children : <>Please ask your administrator to approve your account</>) : <>Please login</>
};

export default RenderOnApproved;