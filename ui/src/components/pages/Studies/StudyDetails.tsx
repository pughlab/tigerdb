import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { useParams } from 'react-router-dom'

import useStudyDetailsQuery from '../../../hooks/useStudyDetailsQuery'
import useSearchGeographyCitiesQuery from '../../../hooks/useSearchGeographyCitiesQuery'
import useUpdateGeographyCityToStudy from '../../../hooks/useUpdateGeographyCityToStudy'

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