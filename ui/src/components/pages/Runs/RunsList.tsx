import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Loader, Dimmer, Card, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

// import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

import useRunsQuery from '../../../hooks/useRunsQuery'

import AddRunModal from './AddRunModal'

function RunsListItem({ run }) {
	const { runID, name, description, createdBy, datasets, createdOn, status } = run
	console.log(createdBy)
	let colorStatus = status == 'submitted' ? 'yellow' : status == "completed" ? 'green' : status == 'failed' ? 'red' : 'orange'
	const { navigate } = useRouter()
	return (
		<>
			<Card color={colorStatus} onClick={() => { navigate(runID) }}>
				<Card.Content floated='right' as={Segment} basic>
				{/* <Label color={colorStatus} content={`Run | ${status.charAt(0).toUpperCase() + status.slice(1)}`} /> */}
				<Label color={colorStatus} content={`Run | ${status.toUpperCase()}`} />

				</Card.Content>
				<Card.Content>
					<Card.Header as={Header}>
						{`${name}`}
						{/* <Header.Subheader content={createdBy.email} /> */}

					</Card.Header>

					<List.Description content={description} />
					{/* <List.Description>
						<Label content='Datasets' detail={`${datasets.length}`} />
					</List.Description> */}
					<List.Description>
					<Divider/>
						{
							(datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
						}
					</List.Description>
				</Card.Content>
			</Card>
			<Divider horizontal hidden />
		</>
	)
}

export default function RunsList({

}) {

	const { data, loading, error, refetch } = useRunsQuery()

	console.log(data)
	const location = useLocation()
	useEffect(() => {
		refetch()
	}, [location.key])

	let runs
	if (!data?.getRuns) {
		runs = []
	} else {
		runs = data.getRuns
	}

	console.log(runs)

	// const allStudySites = studies.map(study => study.studySites).flat()
	return (
		<>
			<Grid>
				{/* <Grid.Column width={7}>
					<GeographyVisualization cityMarkers={allStudySites}/>
				</Grid.Column> */}
				<Grid.Column>

					<Divider horizontal content='Runs' />
					<Segment basic>
						<AddRunModal refetch={refetch} />
					</Segment>
					<Form>
						<Form.Field
							control={Input}
							label='Search runs'
							placeholder='Names and descriptions'
						// value={description}
						// onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
						/>
					</Form>
					{
					(loading) ?  
					<>
					<Segment placeholder textAlign='center'>
						{/* <Icon size='massive' name='react' loading /> */}
						<Dimmer active inverted>
							<Loader size='large'>Loading...</Loader>
						</Dimmer>
					</Segment>
					</>
					:
					(runs.length === 0) ?
					<Label>No runs available. Add a run above or ask your administrator to update your permissions.
					</Label> :
					<Segment placeholder>
					<Card.Group itemsPerRow={4} size='large'>
						{
							runs.map(run => <RunsListItem key={run.runID} {...{ run }} />)
						}
					</Card.Group>
					</Segment>
					}
				</Grid.Column>
			</Grid>
		</>
	)
}