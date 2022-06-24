import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch } from "react";

export interface PortalReducerState {
  landing?: boolean,
  view?: 'home' | 'database' | 'upload' | 'settings',
  databaseView?: string,
  keycloakUser?: any,
}

export interface PortalReducerAction {
  type: 'setView' | 'setDatabaseView' | 'setLanding' | 'setKeycloakUser',
  payload: PortalReducerState
}

export interface PortalReducerArgs {
  state: PortalReducerState
  dispatch: Dispatch<PortalReducerAction>
}

export type refetchType = (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>