import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { useParams } from 'react-router-dom'

import useStudyDetailsQuery from '../../../hooks/useStudyDetailsQuery'
import useSearchGeographyCitiesQuery from '../../../hooks/useSearchGeographyCitiesQuery'
import useUpdateGeographyCityToStudy from '../../../hooks/useUpdateGeographyCityToStudy'

import AddGeographyCityModal from './AddGeographyCityModal'
import EditTimelineModal from '../Metadata/TimePoints/EditTimelineModal'
import AddStudySiteModal from './AddStudySiteModal'


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
					<AddGeographyCityModal />
					<Divider horizontal />
					<AddStudySiteModal />
				</Message>
				<Message>
					<Divider horizontal />
					<EditTimelineModal timelineStudyID={studyID}/>
				</Message>

			</Grid.Column>
			<Grid.Column>
				<GeographyVisualization cityMarkers={studySites} />
			</Grid.Column>
		</Grid>
	)
}