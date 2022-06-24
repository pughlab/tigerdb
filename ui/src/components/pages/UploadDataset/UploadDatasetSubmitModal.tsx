import { useState, useReducer, useCallback, useEffect } from 'react'
import * as React from 'react'
import { Button, Divider, Icon, Grid, Modal, Message, Segment, Step, Statistic, List, Label, Form, Input, TextArea, Popup, Header, Dropdown } from 'semantic-ui-react'
import DropzoneFileLabel from '../../common/DropzoneFileLabel'

import { ParserState } from '../../../hooks/useCSVParser'
import useCreateRawDatasetWithUploadsMutation from '../../../hooks/useCreateRawDatasetWithUploadsMutation'

import {HARDDATA} from '../../../harddata.js'
console.log(HARDDATA)

export default function UploadDatasetSubmitModal ({rawParserState, codebookParserState} : {rawParserState: ParserState, codebookParserState: ParserState}) {
    const initialState = {open: false, name: '', description: ''}
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'SET_OPEN':
                return {... state, open: action.open}
            case 'SET_NAME':
                return {... state, name: action.name}
            case 'SET_DESCRIPTION':
                return {... state, description: action.description}
            case 'RESET': return initialState
            default: return state
        }
    }, initialState)
    const {open, name, description} = state
    const openDisabled = (!rawParserState.file || !codebookParserState.file)
    const submitDisabled = (!state.name || !state.description)

    const [createRawDatasetWithUploads, mutationState, mutationSuccess] = useCreateRawDatasetWithUploadsMutation()

    const handleSubmit = useCallback(() => {
        createRawDatasetWithUploads({
            variables: {
                name, description,
                rawDataFile: rawParserState.file,
                codebookFile: codebookParserState.file
            }
        })
    }, [name, description, rawParserState.file, codebookParserState.file])
    

    return (
        <Modal open={open} onClose={() => dispatch({type: 'SET_OPEN', open: false})} size='large'
            trigger={
                <Step disabled={openDisabled} icon='table' title='Submit' description='Submit dataset for approval' onClick={() => dispatch({type: 'SET_OPEN', open: true})} />
            }
        >
            {
                mutationState.loading ? 
                <>
                    <Modal.Content>
                        <Segment placeholder>
                            <Header icon>
                                <Icon name='compass outline' loading />
                                Creating raw dataset...
                            </Header> 
                        </Segment>
                    </Modal.Content>
                </>
                : mutationSuccess ? 
                <>
                    <Modal.Content>
                        <Segment placeholder>
                            <Header icon>
                                <Icon name='check' />
                                Raw dataset successfully created
                            </Header> 
                            <Button content='Done' onClick={() => dispatch({type: 'SET_OPEN', open: false})} /> 
                        </Segment>
                    </Modal.Content>
                </>
                :
                <>
                    <Modal.Header content='Submit a raw dataset for curation' />
                    <Modal.Content>
                        <Form>
                            <Form.Field
                                control={Dropdown}
                                label='Study'
                                placeholder='Please specify which study this dataset comes from'
                                selection
                                options={HARDDATA.STUDIES}
                                // value={description}
                                // onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
                            />

                            <Form.Field
                                control={Input}
                                label='Dataset name'
                                placeholder='Please enter a dataset name'
                                value={name}
                                onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                            />
                            <Form.Field
                                control={TextArea}
                                label='Description'
                                placeholder='Please enter a dataset description'
                                value={description}
                                onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
                            />
                            <Form.Field>
                                <label>Raw data file</label>
                                <DropzoneFileLabel parserState={rawParserState} />
                            </Form.Field>
                            <Form.Field>
                                <label>Codebook file</label>
                                <DropzoneFileLabel parserState={codebookParserState} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button content='Cancel' onClick={() => dispatch({type: 'RESET'})} />
                        <Button disabled={submitDisabled} content='Submit'
                            onClick={() => handleSubmit()}
                        />
                    </Modal.Actions>
                </>
            }

        </Modal>
    )
}
