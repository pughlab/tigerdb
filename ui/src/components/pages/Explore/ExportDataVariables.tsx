import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal, Grid } from 'semantic-ui-react'

import * as R from 'remeda'

import DataVariablesList from './DataVariablesList'

function AddDataVariableSnapshotModal({ exportReducer }) {
    const [selectedSnapshot, setSelectedSnapshot] = useState()
    const [selectedDataVariables, setSelectedDataVariables] = useState([])
    const [snapshotNote, setSnapshotNote] = useState('')
    return (
        <Modal
            size='large'
            trigger={
                <Button fluid content='Create snapshot visualization' />
            }
        >
            <Modal.Header>

            </Modal.Header>
            <Modal.Content>
                <Grid columns={2}>
                    <Grid.Column width={10}>
                        <Divider horizontal content='Data Variables' />
                        <List selection>
                            <List.Item content={exportReducer.state.fieldDefinitions.length} />
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Divider horizontal content='Visualization' />
                        <Dropdown
                            placeholder="Select snapshot visualization"
                            fluid
                            selection
                            options={[{ key: 'pie', value: 'pie', text: 'Pie plot' }]}
                            onChange={(e, { value }) => setSelectedSnapshot(value)}
                            value={selectedSnapshot}
                        />
                                        <Input type='text' placeholder='Note'
                    value={snapshotNote}
                    onChange={(e, {value}) => setSnapshotNote(value)}
                />
                    </Grid.Column>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button content='Cancel' />
                <Button content='Create snapshot'
                    onClick={() => exportReducer.dispatch({ type: 'addSnapshot', payload: { snapshotType: selectedSnapshot, selectedDataVariables, key: snapshotNote } })}
                />
            </Modal.Actions>
        </Modal>
    )
}

function ExportDataVariablesListModal({}) {
    return (
        <Modal
            size='large'
            trigger={
                <Button fluid content='Show selected data variables' />
            }
        >
            <Modal.Header>
            Selected Data Variables
            </Modal.Header>
            <Modal.Content>
                <DataVariablesList />
            </Modal.Content>
            <Modal.Actions>
                <Button content='Cancel' />
            </Modal.Actions>
        </Modal>
    )
}

function CreateDataExportModal ({}) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
	return (
		<Modal
			open={open}
			onClose={() => { setOpen(!open) }}
			size='large'
			trigger={
				<Button fluid content='Create export' onClick={() => setOpen(!open)} />
			}
		>
			<Modal.Content>
				<Form>
					<Form.Field
						control={Input}
						label='Name'
						placeholder="Data export name"
						value={name}
						onChange={(e, { value }) => setName(value)}
					/>
					<Form.Field
						control={Input}
						label='Description'
						placeholder="A description of the data export"
						value={description}
						onChange={(e, { value }) => setDescription(value)}
					/>
				</Form>
                <Divider horizontal />
                <ExportDataVariablesListModal />
			</Modal.Content>
			<Modal.Actions>
				<Button content='Create data export' onClick={() => {}} />
			</Modal.Actions>
		</Modal>
	)
}

export default function ExportDataVariables({ exportReducer }) {
    const { state, dispatch } = exportReducer
    return (
        <>
            <Segment>
                <Grid columns={2}>
                    <Grid.Column width={9}>
                        <Divider horizontal content='Data Variables' />
                        <ExportDataVariablesListModal />
                        
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Divider horizontal content='Visualize/Export' />
                        <AddDataVariableSnapshotModal {...{ exportReducer }} />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Segment>
                            How many data fields selected?
                            {exportReducer.state.fieldDefinitions.length}
                            <Divider horizontal />
                            <CreateDataExportModal />
                        </Segment>
                        
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    )
}