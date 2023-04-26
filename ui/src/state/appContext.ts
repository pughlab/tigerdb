import { useKeycloak } from '@react-keycloak/web';
import { createSlice, current } from '@reduxjs/toolkit';
import { RootState } from "./store";

interface KeycloakMe {
  keycloakUserID: string;
  name: string; 
  email: string;
}
export interface AppContextState {
    keycloakMe?: KeycloakMe;
}

const initialState: AppContextState = {
    keycloakMe: undefined,
} as AppContextState;

export const getPermissionRoles = () => {
	const { keycloak } = useKeycloak()
	const token = keycloak.tokenParsed
	const roles = token?.resource_access && token?.resource_access['pibu-app']?.roles
	const allowedStudies = roles?.filter(x => x.split('|')[0] == 'role' && x.split('|')[1] == 'allowedStudies' ).concat(['admin'])
	const allowedSites = roles?.filter(x => x.split('|')[0] == 'role' && x.split('|')[1] == 'allowedSites' ).concat(['admin'])

  return {allowedStudies, allowedSites}
}

export const appContextSlice = createSlice({
    name: 'context',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      setKeycloakMe: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.keycloakMe = action.payload.keycloakMe
      },
    },
  })

export const currentAppContextKeycloakMe = (state: RootState) => state.context.keycloakMe;
export const {setKeycloakMe} = appContextSlice.actions

export default appContextSlice.reducer;