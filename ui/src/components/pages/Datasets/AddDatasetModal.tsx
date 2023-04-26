import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState, useReducer } from 'react'
import * as React from 'react'
import { Button, Form, Dropdown, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import useStudiesQuery from '../../../hooks/useStudiesQuery'
import { getPermissionRoles } from '../../../state/appContext'

function useAddDatasetReducer({refetch}) {
    const studiesQuery = useStudiesQuery({})
    const [mutation, mutationState] = useMutation(gql`
        mutation createRawDatasetWithMinioBucket($studyID: ID!, $name: String!, $description: String!, $studySiteID: ID!, $allowedStudies: [String], $allowedSites: [String] ) {
            createRawDatasetWithMinioBucket(studyID: $studyID, name: $name, description: $description, studySiteID: $studySiteID, allowedStudies: $allowedStudies, allowedSites: $allowedSites) {
                rawDatasetID
            }
        }`, {onCompleted: () => { refetch() }})
    const {allowedStudies, allowedSites} = getPermissionRoles()
    const initialState = { name: '', description: '', studyID: null, studySiteID: null, allowedStudies, allowedSites }
    const [state, dispatch] = useReducer((state, action) => {
        const { type, payload } = action
        switch (type) {
            case 'setName':
                const { name } = payload
                return { ...state, name }
            case 'setDescription':
                const { description } = payload
                return { ...state, description }
            case 'setStudyID':
                const { studyID } = payload
                return { ...state, studyID }
            case 'setStudySiteID':
                const { studySiteID } = payload
                return { ...state, studySiteID }
        }
        return state
    }, initialState)
    return { state, dispatch, studiesQuery, mutation, mutationState }
}

export default function AddDatasetModal({ refetch }) {
    const { state, dispatch, studiesQuery, mutation, mutationState } = useAddDatasetReducer({refetch})
    const { name, description, studyID, studySiteID } = state
    const { loading: studiesLoading } = studiesQuery
    const { loading: mutationLoading } = mutationState
    const [open, setOpen] = useState(false)
    return (
        <Modal
            size='large'
            open={open}
            onClose={() => setOpen(!open)}
            trigger={
                <Button content='Add a dataset' onClick={() => setOpen(!open)} />
            }
        >
            <Modal.Content>
                <Form loading={studiesLoading || mutationLoading}>
                    <Form.Field
                        control={Input}
                        label='Dataset name'
                        placeholder='Dataset name'
                        value={name}
                        onChange={(e, { value }) => dispatch({ type: 'setName', payload: { name: value } })}
                    />
                    <Form.Field
                        control={Input}
                        label='Dataset description'
                        placeholder='Dataset description'
                        value={description}
                        onChange={(e, { value }) => dispatch({ type: 'setDescription', payload: { description: value } })}
                    />
                    {
                        studiesQuery.loading ? 'loading studies' :
                            !!studiesQuery.data?.studies &&
                            <Form.Field
                                control={Dropdown}
                                fluid search selection
                                label='Study'
                                placeholder='What study is this dataset from?'
                                value={studyID}
                                options={studiesQuery.data.studies.map(({ studyID, shortName }) => ({ text: shortName, value: studyID }))}
                                onChange={(e, { value }) => dispatch({ type: 'setStudyID', payload: { studyID: value } })}
                            />
                    }

                    {
                        !!studyID && (() => {
                            const study = studiesQuery.data.studies.find(study => studyID === study.studyID)
                            const studySites = study.studySites
                            return (
                                <Form.Field
                                    control={Dropdown}
                                    fluid search selection
                                    label='Study Site'
                                    placeholder='What study site is this dataset from?'
                                    value={studySiteID}
                                    options={studySites.map(({ cityID, city, country }) => ({ text: `${city} (${country})`, value: cityID }))}
                                    onChange={(e, { value }) => dispatch({ type: 'setStudySiteID', payload: { studySiteID: value } })}
                                />
                            )
                        })()
                    }
                </Form>

                <Message>

                </Message>

            </Modal.Content>
            <Modal.Actions>
                <Button content='Add dataset' loading={mutationLoading} onClick={() => {mutation({ variables: state }); setOpen(!open)}}
                    // Check that reducer state has neither empty string nor null using coercion
                    disabled={!Object.values(state).every(v => !!v)}
                />
            </Modal.Actions>
        </Modal>
    )
}