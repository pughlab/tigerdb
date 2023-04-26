import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'
import { useKeycloak } from '@react-keycloak/web'
import { getPermissionRoles } from '../../../state/appContext'


export default function AddStudyModal({
	refetch
}) {
	const [fullName, setFullName] = useState('')
	const [shortName, setShortName] = useState('')
	const [description, setDescription] = useState('')
	const [open, setOpen] = useState(false)

	const {allowedStudies, allowedSites} = getPermissionRoles()

	const [createStudy, { data, loading, error }] = useMutation(gql`
		mutation createStudy($fullName: String!, $shortName: String!, $description: String!, $allowedStudies: [String], $allowedSites: [String]) {
			createStudies(input: [{
															fullName: $fullName, shortName: $shortName,
															description: $description,
															allowedStudies: $allowedStudies,
															allowedSites: $allowedSites,
													 }]) {
				studies {
					studyID
					fullName
					shortName
					description
					allowedStudies
					allowedSites
				}
			}
		}
	`, {onCompleted: () => { refetch() }})
	return (
		<Modal
			open={open}
			onClose={() => { setOpen(!open) }}
			size='large'
			trigger={
				<Button content='Add a study' onClick={() => setOpen(!open)} />
			}
		>
			<Modal.Content>
				<Form>
					<Form.Field
						control={Input}
						label='Full name'
						placeholder='Study full name'
						value={fullName}
						onChange={(e, { value }) => setFullName(value)}
					/>
					<Form.Field
						control={Input}
						label='Short name (e.g. CHILD)'
						placeholder="Study shortened name/acronym"
						value={shortName}
						onChange={(e, { value }) => setShortName(value)}
					/>
					<Form.Field
						control={Input}
						label='Description (e.g. A study across four sites from pre-natal to ...)'
						placeholder="A description of the study"
						value={description}
						onChange={(e, { value }) => setDescription(value)}
					/>
				</Form>

				<Message>
				</Message>

			</Modal.Content>
			<Modal.Actions>
				<Button content='Add study' loading={loading} onClick={() => {createStudy({ variables: { fullName, shortName, description, allowedStudies, allowedSites } }); setOpen(!open) }} />
			</Modal.Actions>
		</Modal>
	)
}
