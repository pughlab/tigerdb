import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { useParams } from 'react-router-dom'

import useStudyDetailsQuery from '../../../hooks/useStudyDetailsQuery'
import useSearchGeographyCitiesQuery from '../../../hooks/useSearchGeographyCitiesQuery'
import useUpdateGeographyCityToStudy from '../../../hooks/useUpdateGeographyCityToStudy'

function AddStudySiteModal () {
	return (
		<Modal
			size='large'
			trigger={
				<Button size='tiny' content='If a study site does not yet exist in the database, click here to add' />
			}
		>
			<Modal.Content>
				<Form>
					<Form.Group widths={2}>
					<Form.Field
						control={Input}
						label='Country'
						placeholder='Country name'
						// value={fullName}
						// onChange={(e, { value }) => setFullName(value)}
					/>
					<Form.Field
						control={Input}
						label='City'
						placeholder='City name'
						// value={shortName}
						// onChange={(e, { value }) => setShortName(value)}
					/>
					</Form.Group>
					<Form.Group widths={2}>
					<Form.Field
						control={Input}
						label='Latitude'
						placeholder='Latitude of city'
						// value={description}
						// onChange={(e, { value }) => setDescription(value)}
					/>
					<Form.Field
						control={Input}
						label='Longitude'
						placeholder='Longitude of city'
						// value={description}
						// onChange={(e, { value }) => setDescription(value)}
					/>
					</Form.Group>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button content='Cancel' />
				<Button content='Add study site' />
			</Modal.Actions>
		</Modal>
	)
}


export default function StudyDetails() {
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
					{studySites.map(({cityID, city, country, latitude, longitude }) => (
						<Label key={cityID} basic>
							{`${city} (${country})`}
						</Label>
					))}
					</Label.Group>
				</Message>
				<Divider horizontal />
				<Message>
					A study must have at least one study site in order to start uploading datasets.
					<Divider horizontal />
					<AddStudySiteModal />
				</Message>
				<Form as={Segment} loading={searchLoading || detailsLoading || addCityLoading}>
					<Divider horizontal>
						Add a site to this study						
					</Divider>
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