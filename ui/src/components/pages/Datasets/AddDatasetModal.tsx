import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState, useReducer } from 'react'
import * as React from 'react'
import { Button, Form, Dropdown, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import useStudiesQuery from '../../../hooks/useStudiesQuery'
import { getPermissionRoles } from '../../../state/appContext'

function useAddDatasetReducer({projectID, refetch}) {
    // const studiesQuery = useStudiesQuery({})
    const [mutation, mutationState] = useMutation(gql`
        mutation createDatasetWithMinioBucket($projectID: ID!, $name: String! ) {
            createDatasetWithMinioBucket(projectID: $projectID, name: $name) {
                datasetID
            }
        }`, {onCompleted: () => { refetch()}})
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

export default function AddDatasetModal({projectID, refetch}) {
    const { state, dispatch, mutation, mutationState } = useAddDatasetReducer({projectID, refetch})
    const { name } = state
    const { loading: mutationLoading } = mutationState
    const [open, setOpen] = useState(false)
    return (
        <Modal
            size='large'
            open={open}
            onClose={() => setOpen(!open)}
            trigger={
                <Button fluid icon='plus' color='black' size='large' onClick={() => setOpen(!open)} />
            }
        >
            <Modal.Content>
                <Form loading={mutationLoading}>
                    <Form.Field
                        control={Input}
                        label='Dataset name'
                        placeholder='Dataset name'
                        value={name}
                        onChange={(e, { value }) => dispatch({ type: 'setName', payload: { name: value } })}
                    />
                    {/* future tags: */}
                    {/* <Form.Field
                        control={Input}
                        label='Dataset description'
                        placeholder='Dataset description'
                        value={description}
                        onChange={(e, { value }) => dispatch({ type: 'setDescription', payload: { description: value } })}
                    /> */}
                </Form>


            </Modal.Content>
            <Modal.Actions>
                {/* <Button content='Add dataset' loading={mutationLoading} onClick={() => {mutation({ variables: state }); setOpen(!open)}}
                    // Check that reducer state has neither empty string nor null using coercion
                    disabled={!Object.values(state).every(v => !!v)}
                /> */}
                <Segment basic textAlign='center'>
                <Button fluid color='blue' content="Add dataset" 
                loading={mutationLoading} onClick={() => {mutation({ variables: state }); setOpen(!open); dispatch({ type: 'setName', payload: { name: '' } })}}
                // Check that reducer state has neither empty string nor null using coercion
                disabled={!Object.values(state).every(v => !!v)}
                />
                </Segment>

            </Modal.Actions>
        </Modal>
    )
}