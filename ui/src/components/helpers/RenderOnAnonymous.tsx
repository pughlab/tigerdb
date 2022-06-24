import { useKeycloak } from "@react-keycloak/web";
//Checking if user is not logged in on Keycloak
const RenderOnAnonymous = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = !keycloak.authenticated;

    return isLoggedIn ? children : null;
};

export default RenderOnAnonymous;