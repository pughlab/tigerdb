import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback } from 'react'
import * as React from 'react'
import {useState} from 'react'
import { Button, Form, Header, TextArea, Input, Segment, Container, Message, List, Divider, Modal } from 'semantic-ui-react'

function AddStudyModal (

) {
	const [fullName, setFullName] = useState('')
	const [shortName, setShortName] = useState('')
	const [description, setDescription] = useState('')
	
	const [createStudy, {data, loading, error}] = useMutation(gql`
		mutation createStudy($fullName: String!, $shortName: String!, $description: String!) {
			createStudies(input: [{fullName: $fullName, shortName: $shortName, description: $description}]) {
				studies {
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
					onChange={(e, {value}) => setFullName(value)}
				/>
				<Form.Field
					control={Input}
					label='Short name (e.g. CHILD)'
					placeholder="Study shortened name/acronym"
					value={shortName}
					onChange={(e, {value}) => setShortName(value)}
				/>
				<Form.Field
					control={Input}
					label='Description (e.g. A study across four sites from pre-natal to ...)'
					placeholder="A description of the study"
					value={description}
					onChange={(e, {value}) => setDescription(value)}
				/>
			</Form>

			<Message>
			</Message>

			</Modal.Content>
			<Modal.Actions>
				<Button content='Add study' loading={loading} onClick={() => createStudy({variables: {fullName, shortName, description}})} />
			</Modal.Actions>
		</Modal>
	)
}

function StudiesListItem ({study}) {
		const {fullName, shortName, description} = study
		// const navigate = useNavigate()
		return (
			<>
			<List.Item as={Segment} onClick={() => {}}>
				<List.Content floated='right' as={Segment} basic>
	
				</List.Content>
				<List.Content>
					<List.Header as={Header}>
						{`${fullName}`}
						<Header.Subheader content={shortName} />
					</List.Header>
					
					<List.Description content={description} />
					<List.List>
						<List.Item >Time points: #</List.Item>
						<List.Item >Datasets: #: </List.Item>
					</List.List>
				</List.Content>
			</List.Item>
			<Divider horizontal hidden/>
			</>
		)
	}
	

export default function Studies (
	// {state: {databaseView}, dispatch}: {state: {databaseView: any}, dispatch: any}
) {
	const {data, loading, error} = useQuery(gql`
		query {
			studies {
				fullName
				shortName
				description
			}
		}
	`)
	if (! data?.studies) {
		return null
	}
	console.log(data)
	return (
		<>
		<Container>
			<Message content='These are studies' >
					Some text about studies

					<Divider horizontal />
					<AddStudyModal />
			</Message>
			<Form>
				<Form.Field
						control={Input}
						label='Search'
						placeholder='Names and descriptions'
						// value={description}
						// onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
				/>
			</Form>
			<List relaxed='very' selection size='large'>
				{
					data.studies.map(study => <StudiesListItem {...{study}} />)
				}
					{/* {
							[{fullName: "Canadian Healthy Infant Longitudinal Development", shortName: "CHILD", description: "A study across four sites from pre-natal to age 11"}].map(
									(study) => <ManageStudiesListItem {...{study}} />
							)
					} */}
			</List>
		</Container>
		</>
	)
}