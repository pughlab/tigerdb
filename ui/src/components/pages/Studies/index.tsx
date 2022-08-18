import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'



function StudySitesGeography({
	cityMarkers=[]
}) {
	return (
		<GeographyVisualization cityMarkers={cityMarkers}/>
	)
}

function AddStudyModal(

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

function StudiesListItem({ study }) {
	const { studyID, fullName, shortName, description, studySites } = study
	const { navigate } = useRouter()
	return (
		<>
			<List.Item as={Segment} onClick={() => { navigate(studyID) }}>
				<List.Content floated='right' as={Segment} basic>

				</List.Content>
				<List.Content>
					<List.Header as={Header}>
						{`${fullName}`}
						<Header.Subheader content={shortName} />
					</List.Header>

					<List.Description content={description} />
					<List.Description>
						<Label content='Study sites' detail={`${studySites.length}`} />
					</List.Description>
				</List.Content>
			</List.Item>
			<Divider horizontal hidden />
		</>
	)
}

function useStudiesQuery({ }) {
	const { data, loading, error } = useQuery(gql`
		query {
			studies {
				studyID
				fullName
				shortName
				description
				studySites {
					city
					country
					latitude
					longitude
				}
			}
		}
	`, {fetchPolicy: 'network-only'})
	return { data, loading, error }
}

function useStudyDetailsQuery({ studyID }: { studyID: string }) {
	const [study, setStudy] = useState()
	const { data, loading, error } = useQuery(gql`
		query StudyDetails ($studyID: ID!) {
			studies(where: {studyID: $studyID}) {
				studyID
				fullName
				shortName
				description
				studySites {
					city
					country
					latitude
					longitude
				}
			}
		}
	`, {
		variables: { studyID },
		fetchPolicy: 'network-only'
	})
	useEffect(() => {
		if (!!data?.studies && data.studies.length > 0) {
			setStudy(data.studies[0])
		}
	}, [data])
	return { study, loading, error }
}

function StudiesList({

}) {
	const { data, loading, error } = useStudiesQuery({})
	if (!data?.studies) {
		return null
	}
	const {studies} = data
	const allStudySites = studies.map(study => study.studySites).flat()
	return (
		<>
			<Grid>
				<Grid.Column width={7}>
					<StudySitesGeography cityMarkers={allStudySites}/>
				</Grid.Column>
				<Grid.Column width={9}>
					<Message>
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
							studies.map(study => <StudiesListItem key={study.studyID} {...{ study }} />)
						}
					</List>
				</Grid.Column>
			</Grid>
		</>
	)
}

function useSearchGeographyCitiesQuery({ }) {
	const initialState = { searchText: '', results: [] }
	const [state, dispatch] = useReducer((state, action) => {
		const { type, payload } = action
		switch (type) {
			case 'updateSearchText':
				return { searchText: payload.searchText, results: [] }
			case 'updateResults':
				return { ...state, results: payload.results }
			default:
				throw new Error()
		}
	}, initialState)
	const { data, loading, error } = useQuery(gql`
		query SearchGeographyCities ($name: String!) {
			searchGeographyCities(name: $name) {
				cityID
				country
				city
				latitude
				longitude
			}
		}
	`, { variables: { name: state.searchText }, skip: !state.searchText })
	useEffect(() => {
		if (!!data?.searchGeographyCities) {
			dispatch({ type: 'updateResults', payload: { results: data.searchGeographyCities } })
		}
	}, [data])
	return { state, dispatch, loading, error }
}

function useUpdateGeographyCityToStudy({ }) {
	const [mutation, { data, loading, error }] = useMutation(gql`
	mutation UpdateGeographyCityToStudy ($cityID: ID!, $studyID: ID!) {
		updateGeographyCityToStudy(cityID: $cityID, studyID: $studyID) {
				id
				cityID
				city
				country
				latitude
				longitude
			}
		}
	`)
	console.log(data, loading, error)
	return {mutation, data, loading, error}
}

function StudyDetails() {
	const { studyID } = useParams()
	const { study, loading: detailsLoading, error } = useStudyDetailsQuery({ studyID })
	const { state: { searchText, results }, dispatch, loading: searchLoading } = useSearchGeographyCitiesQuery({})
	const {mutation: updateGeographyCityToStudy, loading: addCityLoading} = useUpdateGeographyCityToStudy({})

	if (!study) {
		return null
	}
	console.log(results)
	const { fullName, shortName, description, studySites } = study
	console.log(study)
	return (
		<Grid columns={2}>
			<Grid.Column>
				<Message>
					<Header content={fullName} subheader={shortName} />
					<Message content={description} />
					<Divider horizontal />
					<Label.Group>
					{studySites.map(({ city, country, latitude, longitude }) => (
						<Label key={city + country} basic>
							{`${city} (${country})`}
						</Label>
					))}
					</Label.Group>
				</Message>
				<Divider horizontal />
				<Form as={Segment} loading={searchLoading || detailsLoading || addCityLoading}>
					<Divider horizontal content='Add a study site' />
					<Form.Field
						control={Input}
						// label='Search study site cities'
						placeholder='Search city names'
						value={searchText}
						onChange={(e, { value }) => dispatch({ type: 'updateSearchText', payload: { searchText: value } })}
					/>
					<List selection celled>
						{results.map(({cityID, city, country, latitude, longitude }) => (
							<List.Item key={cityID}
								onClick={() => {updateGeographyCityToStudy({variables: {cityID, studyID}})}}
							>
								{`${city} (${country}) [${latitude}, ${longitude}]`}
							</List.Item>
						))}
					</List>
				</Form>

			</Grid.Column>
			<Grid.Column>
				<GeographyVisualization cityMarkers={studySites} />
			</Grid.Column>
		</Grid>
	)
}

export default function StudiesRoutes() {
	return (
		<Routes>
			{/* Default /datasets path goes to export search */}
			<Route index element={<StudiesList />} />

			<Route path=':studyID' element={<StudyDetails />} />
		</Routes>
	)
}