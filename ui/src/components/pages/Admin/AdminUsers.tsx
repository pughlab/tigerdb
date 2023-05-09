import { gql, useMutation, useQuery } from '@apollo/client'
import * as React from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'

import { Button, Divider, Form, Grid, Input, Label, Radio } from 'semantic-ui-react'

import * as R from 'remeda'
import { useEffect, useReducer, useState } from 'react'

const AdminUserDetails = ({userID, clientID, username, email}) => {

  // State
  const initialState = { newRole: 'role|roleType|roleValue' }
  const [adminUserDetailsState, adminUserDetailsDispatch] = useReducer((state, action) => {
      const { type, payload } = action
      switch (type) {
          case 'setAvailableID':
              const { availableID } = payload
              return { ...state, availableID }
          case 'setAvailableName':
              const { availableName } = payload
              return { ...state, availableName }
          case 'setAssignedID':
              const { assignedID } = payload
              return { ...state, assignedID }
          case 'setAssignedName':
              const { assignedName } = payload
              return { ...state, assignedName }
          case 'setNewRole':
              const { newRole } = payload
              return { ...state, newRole }
      }
      return state
  }, initialState)

  // Available Roles
  const { data: dataAvailableRoles, loading: loadingAvailableRoles, error: errorAvailableRoles, refetch: refetchAvailableRoles } = useQuery(gql`
  query keycloak_users_listAvailableClientRoleMappings($userID: ID, $clientID: ID!) {
    keycloak_users_listAvailableClientRoleMappings(userID: $userID, clientID: $clientID) {
      id
      name
    }
  }
  `,
  { variables: { userID, clientID }, fetchPolicy: 'network-only' })

  let availableRoles = []
  if (dataAvailableRoles?.keycloak_users_listAvailableClientRoleMappings) {
    availableRoles = dataAvailableRoles?.keycloak_users_listAvailableClientRoleMappings
  }

  // Assigned Roles
  const { data: dataAssignedRoles, loading: loadingAssignedRoles, error: errorAssignedRoles, refetch: refetchAssignedRoles } = useQuery(gql`
  query keycloak_users_listClientRoleMappings($userID: ID, $clientID: ID!) {
    keycloak_users_listClientRoleMappings(userID: $userID, clientID: $clientID) {
      id
      name
    }
  }
  `,
  { variables: { userID, clientID }, fetchPolicy: 'network-only' })

	const location = useLocation()
	useEffect(() => {
    refetchAvailableRoles()
		refetchAssignedRoles()
	}, [location.key])

  let assignedRoles = []
  if (dataAssignedRoles?.keycloak_users_listClientRoleMappings) {
    assignedRoles = dataAssignedRoles?.keycloak_users_listClientRoleMappings
  }

  const allRoleNames = (availableRoles.concat(assignedRoles)).map(x => x.name)

  // Assign a role
  const [addRole, { dataAddRole, loadingAddRole, errorAddRole }] = useMutation(gql`
  mutation keycloak_users_addClientRoleMappings(
    $userID: ID!
    $clientID: ID!
    $roleID: ID!
    $roleName: String!
  ) {
    keycloak_users_addClientRoleMappings(
      userID: $userID
      clientID: $clientID
      roleID: $roleID
      roleName: $roleName
    )
  }`, {onCompleted: () => { adminUserDetailsDispatch({type: 'setAssignedID', payload: {assignedID: adminUserDetailsState.availableID}}); adminUserDetailsDispatch({type: 'setAssignedName', payload: {assignedName: adminUserDetailsState.availableName}}); refetchAvailableRoles(); refetchAssignedRoles() }})

// UnAssign a role
const [delRole, { dataDelRole, loadingDelRole, errorDelRole }] = useMutation(gql`
mutation keycloak_users_delClientRoleMappings(
  $userID: ID!
  $clientID: ID!
  $roleID: ID!
  $roleName: String!
) {
  keycloak_users_delClientRoleMappings(
    userID: $userID
    clientID: $clientID
    roleID: $roleID
    roleName: $roleName
  )
}`, {onCompleted: () => { adminUserDetailsDispatch({type: 'setAvailableID', payload: {availableID: adminUserDetailsState.assignedID}}); adminUserDetailsDispatch({type: 'setAvailableName', payload: {availableName: adminUserDetailsState.assignedName}}); refetchAvailableRoles(); refetchAssignedRoles() }})

// Create a client role
const [createClientRole, { dataCreateClientRole, loadingCreateClientRole, errorCreateClientRole }] = useMutation(gql`
mutation keycloak_clients_createRole(
  $clientID: ID!
  $roleName: String!
) {
  keycloak_clients_createRole(
    clientID: $clientID
    roleName: $roleName
  )
}`, {onCompleted: () => { refetchAvailableRoles(); refetchAssignedRoles() }})

// Remove a client role
const [removeClientRole, { dataRemoveClientRole, loadingRemoveClientRole, errorRemoveClientRole }] = useMutation(gql`
mutation keycloak_clients_delRole(
  $clientID: ID!
  $roleName: String!
) {
  keycloak_clients_delRole(
    clientID: $clientID
    roleName: $roleName
  )
}`, {onCompleted: () => { refetchAvailableRoles(); refetchAssignedRoles() }})

  return (
  <Grid.Column key='UserDetails' width={10}>
    <Divider horizontal content={`User details: ${username}`} />
      <Form key='form.UserDetails'>
        <Form.Field>
          {/* <Label>Create new role</Label> */}
          <Input
            placeholder='role|roleType|roleValue'
            value={adminUserDetailsState.newRole}
            onChange={(e, {value}) => {adminUserDetailsDispatch({type: 'setNewRole', payload: {newRole: value}})}}
          />
          <Button type='submit' disabled={allRoleNames.includes(adminUserDetailsState.newRole)} onClick={() => { createClientRole({variables: {clientID, roleName: adminUserDetailsState.newRole}})}}>Create client role</Button>
          <Button type='submit' disabled={!allRoleNames.includes(adminUserDetailsState.newRole)} onClick={() => { removeClientRole({variables: {clientID, roleName: adminUserDetailsState.newRole}})}}>Remove client role</Button>
        </Form.Field>
      </Form>
      <Grid>
        <Grid.Column key='AvailableRoles' width={8}>
        <Divider horizontal content='Available Roles' />
        <Form key='form.AvailableRoles'>
          <Button type='submit' onClick={() => { addRole({variables: {userID, clientID, roleID: adminUserDetailsState.availableID, roleName: adminUserDetailsState.availableName}}) }}>{'Add selected >>'}</Button>
          {availableRoles.map(({id, name}) => {
                return (<>
                <Form.Field key={`form.field.${id}`}>
                  <Radio
                    key={`radio.${id}`}
                    label={name}
                    name={name}
                    value={id}
                    checked={adminUserDetailsState.availableID === id}
                    onChange={((e, {value}) => {adminUserDetailsDispatch({type: 'setAvailableID', payload: {availableID: value}}); adminUserDetailsDispatch({type: 'setAvailableName', payload: {availableName: name}});adminUserDetailsDispatch({type: 'setNewRole', payload: {newRole: name}})})}
                  />
                </Form.Field>
                </>)
            })
          }
        </Form>
        </Grid.Column>
        <Grid.Column key='AssignedRoles' width={8}>
          <Divider horizontal content='Assigned Roles' />
          <Form key='form.AssignedRoles'>
            <Button type='submit' onClick={() => { delRole({variables: {userID, clientID, roleID: adminUserDetailsState.assignedID, roleName: adminUserDetailsState.assignedName}}) }}>{'<< Remove selected'}</Button>
            {assignedRoles.map(({id, name}) => {
                  return (<>
                  <Form.Field key={`form.field.${id}`}>
                    <Radio
                      key={`radio.${id}`}
                      label={name}
                      name={name}
                      value={id}
                      checked={adminUserDetailsState.assignedID === id}
                      onChange={((e, {value}) => {adminUserDetailsDispatch({type: 'setAssignedID', payload: {assignedID: value}}); adminUserDetailsDispatch({type: 'setAssignedName', payload: {assignedName: name}});adminUserDetailsDispatch({type: 'setNewRole', payload: {newRole: name}})})}
                    />
                  </Form.Field>
                  </>)
              })
            }
          </Form>
        </Grid.Column>
      </Grid>
  </Grid.Column>
  )
}

export default function AdminUsers() {

  const [userID, setUserID] = useState(null)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)

  const { data: dataClients, loading: loadingClients, error: errorClients } = useQuery(gql`
  query keycloak_clients_find {
    keycloak_clients_find {
      id
      clientId
    }
  }
  `,
  { variables: { } })

  const { data: dataUsers, loading: loadingUsers, error: errorUsers, refetch: refetchUsers } = useQuery(gql`
  query keycloak_users_find {
    keycloak_users_find {
      id
      username
      email
    }
  }
  `,
  { variables: { } })

  

  // Create user
  const [addUser, { dataAddUser, loadingAddUser, errorAddUser }] = useMutation(gql`
  mutation keycloak_users_create(
    $email: String!
  ) {
    keycloak_users_create(
      email: $email
    ) {
      id
      username
      email
    }
  }`, {onCompleted: (data) => {
    setUserID(data.keycloak_users_create.id)
    setUsername(data.keycloak_users_create.username)
    setEmail(data.keycloak_users_create.email)
    refetchUsers()
  }})

  // Delete user
  const [delUser, { dataDelRole, loadingDelRole, errorDelRole }] = useMutation(gql`
  mutation keycloak_users_delete(
    $userID: ID!
  ) {
    keycloak_users_delete(
      userID: $userID
    )
  }`, {onCompleted: () => { refetchUsers() }})

	const location = useLocation()
	useEffect(() => {
    refetchUsers()
	}, [location.key])

  let users
  
  if (!dataClients?.keycloak_clients_find) {
    return null
  }

  if (!dataUsers?.keycloak_users_find) {
    users = []
  } else {
    users = dataUsers.keycloak_users_find
  }

  const const_appName = 'pibu-app'
  const appID = R.find(dataClients.keycloak_clients_find, ({clientId}) => clientId === const_appName)['id']

  return (<Grid>
    <Grid.Column  key='users' width={6}>
      <Divider horizontal content='Users' />
      <Form key='form.UserDetails'>
        <Form.Field>
          {/* <Label>Create new role</Label> */}
          <Input
            placeholder='user@email.com'
            value={username}
            onChange={(e, {value}) => {
              setEmail(value)
              setUsername(R.find(users, u => u.email == value)?.username)
              setUserID(R.find(users, u => u.email == value)?.id)
            }}
          />
          <Button type='submit' disabled={R.find(users, u => u.email == email)} onClick={() => { addUser({variables: { email }})}}>Create user</Button>
          <Button type='submit' disabled={!R.find(users, u => u.email == email)} onClick={() => { delUser({variables: { userID }})}}>Delete user</Button>
        </Form.Field>
      </Form>
      {users.map(({id, username, email}) => {
          return (<Grid.Row key={`grid.row.${id}`}>
            <Button onClick={() => { refetchUsers(); setUserID(id); setUsername(username); setEmail(email) }}>{username}</Button>
          </Grid.Row>)
      })}
    </Grid.Column>
    <AdminUserDetails userID={userID} username={username} email={email} clientID={appID}/>
    </Grid>)
}