import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

export default function AddStudyModal(

) {
	const [fullName, setFullName] = useState('')
	const [shortName, setShortName] = useState('')
	const [description, setDescription] = useState('')

	const [createStudy, { data, loading, error }] = useMutation(gql`
		mutation createStudy($fullName: String!, $shortName: String!, $description: String!) {
			createStudies(input: [{fullName: $fullName, shortName: $shortName, description: $description}]) {
				studies {
					studyID
					fullName
					shortName
					description
				}
			}
		}
	`)
	return (
		<Modal
			size='large'
			trigger={
				<Button content='Add a study' />
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
				<Button content='Add study' loading={loading} onClick={() => createStudy({ variables: { fullName, shortName, description } })} />
			</Modal.Actions>
		</Modal>
	)
}
