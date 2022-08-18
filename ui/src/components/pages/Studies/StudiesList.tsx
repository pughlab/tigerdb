import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

import useStudiesQuery from '../../../hooks/useStudiesQuery'

import AddStudyModal from './AddStudyModal'

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

export default function StudiesList({

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
					<GeographyVisualization cityMarkers={allStudySites}/>
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