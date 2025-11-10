import { gql, useMutation } from '@apollo/client'
import { useState, useReducer } from 'react'
import * as React from 'react'
import { Button, Form, Input, Segment, Divider, Modal, List, Icon } from 'semantic-ui-react'


function useAddDatasetReducer({ projectID, refetch }) {
  // const studiesQuery = useStudiesQuery({})
  const [mutation, mutationState] = useMutation(gql`
        mutation createDatasetWithMinioBucket($projectID: ID!, $name: String! ) {
            createDatasetWithMinioBucket(projectID: $projectID, name: $name) {
                datasetID
            }
        }`, { onCompleted: () => { refetch() } })
  const initialState = { name: '', projectID: projectID }
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action
    switch (type) {
      case 'setName':
        const { name } = payload
        return { ...state, name }
    }
    return state
  }, initialState)
  return { state, dispatch, mutation, mutationState }
}

export default function AddDatasetModal({ projectID, refetch }) {
  const { state, dispatch, mutation, mutationState } = useAddDatasetReducer({ projectID, refetch })
  const { name } = state
  const { loading: mutationLoading } = mutationState
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      size='large'
      open={open}
      onClose={() => setOpen(!open)}
      trigger={
        // <Button fluid icon='plus' color='black' size='large' onClick={() => setOpen(!open)} />
        <List.Item as={Segment} onClick={() => setOpen(!open)}>
          <List.Header>
            <Button attached='top' size='large'>
              <Icon name="plus" size="large" />
            </Button>
          </List.Header>
          <List.Content>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <p style={{
                fontWeight: "bold",
                fontSize: "2rem",
                textAlign: "center",
                color: "black",
                textDecoration: hovered ? "underline" : "none"
              }}>Add new dataset</p>
            </div>
          </List.Content>
        </List.Item>
      }
    >
      <Modal.Content>
        <Divider horizontal content='NEW DATASET' />
        <Form loading={mutationLoading}>
          <Form.Field
            control={Input}
            label='Dataset name'
            placeholder='Dataset name'
            value={name}
            onChange={(e, { value }) => dispatch({ type: 'setName', payload: { name: value } })}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Segment basic textAlign='center'>
          <Button fluid color='blue' content="CREATE DATASET"
            loading={mutationLoading} onClick={() => { mutation({ variables: state }); setOpen(!open); dispatch({ type: 'setName', payload: { name: '' } }) }}
            // Check that reducer state has neither empty string nor null using coercion
            disabled={!Object.values(state).every(v => !!v)}
          />
        </Segment>

      </Modal.Actions>
    </Modal>
  )
}