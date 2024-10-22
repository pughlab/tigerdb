import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Loader, Dimmer, Card, Form, Header, Label, Input, Segment, Step, Icon, List, Divider, Modal, Grid } from 'semantic-ui-react'

// import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

import useRunsQuery from '../../../hooks/useRunsQuery'

import AddRunModal from './AddRunModal'
import SegmentPlaceholder from '../../common/SegmentPlaceholder'

function RunsListItem({ run }) {
	const { runID, name, description, createdBy, processedDatasets, createdOn, submittedOn, status } = run
	// console.log(createdBy)
	const dateCreator = (date) => {
		const newDate = new Date(date).toLocaleString('en-US', {
			weekday: 'long',  // "Sunday"
			year: 'numeric',  // "2024"
			month: 'short',   // "Oct"
			day: 'numeric',   // "2"
			hour: 'numeric',  // "4"
			minute: 'numeric', // "41"
			hour12: true,     // 12-hour format with AM/PM
		})
		return newDate
	}
	
	let colorStatus = status == 'submitted' ? 'yellow' : status == "completed" ? 'green' : status == 'failed' ? 'red' : 'orange'

	const { navigate } = useRouter()
	return (
		<>
			<Card color={colorStatus} onClick={() => { navigate(runID) }}>
				<Card.Content floated='right' as={Segment} basic>
				{/* <Label color={colorStatus} content={`Run | ${status.charAt(0).toUpperCase() + status.slice(1)}`} /> */}
				<Label color={colorStatus} content={`Run`} />

				</Card.Content>
				<Card.Content>
					<Card.Header as={Header}>
						{`${name}`}
						{/* <Header.Subheader content={createdBy.email} /> */}
						{/* <Header.Subheader content={createdOn} /> */}
						{/* <Header.Subheader content={submittedOn} /> */}


					</Card.Header>

					<List.Description content={description} />
					{/* <List.Description>
						<Label content='Datasets' detail={`${datasets.length}`} />
					</List.Description> */}
					<List.Description>
					<Divider/>
						{
							// (datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
							(processedDatasets.length > 0) ? processedDatasets.map(processedDataset => <Label basic color='green' key={processedDataset.objectName} content={processedDataset.filename} />) : null

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
    const [activeFilter, setActiveFilter] = useState('all'); // State to track the active filter

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

	// Initialize the counts object
	const counts = {
		pendingCount: 0,
		submittedCount: 0,
		completedCount: 0,
		failedCount: 0,
	};
	
	// Reduce projectRuns to count the statuses
	const { pendingCount, submittedCount, completedCount, failedCount } = runs.reduce((runCountsByStatus, { status }) => {
		if (status === 'pending') runCountsByStatus.pendingCount++;
		else if (status === 'submitted') runCountsByStatus.submittedCount++;
		else if (status === 'completed') runCountsByStatus.completedCount++;
		else if (status === 'failed') runCountsByStatus.failedCount++;
		return runCountsByStatus; // Return the updated counts object
	}, counts);
	console.log(pendingCount, submittedCount, completedCount, failedCount)
	
	// Calculate the total count of project runs
	const totalCount = runs.length;

	const runStatuses = 
	[
		{
		  key: 'all',
		  icon: 'file',
		  color: 'black',
		  title: `${totalCount} Total`,
		//   description: `${filesize(totalSize)}`
		},
		{
		  key: 'pending',
		  icon: 'circle outline',
		  color: 'orange',
		  title: `${pendingCount} Pending`,
		  description: 'To Submit'
		},
		{
		  key: 'submitted',
		  icon: 'circle notch',
		  color: 'yellow',
		  title: `${submittedCount} Submitted`,
		  description: 'Computing'
		},
		{
		  key: 'completed',
		  icon: 'circle check',
		  color: 'green',
		  title: `${completedCount} Completed`,
		  description: 'Successfully'
		},
		{
		  key: 'failed',
		  icon: 'times circle',
		  color: 'red',
		  title: `${failedCount} Failed`,
		  description: 'Errored'
		}
	]
	const filteredRuns = activeFilter === 'all' ? runs : runs.filter(run => run.status === activeFilter);


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
					<Step.Group fluid widths={5}>
					{
						runStatuses.map(
							({key, icon, color, title, description}) => (
							<Step key={key}
							active={key === activeFilter} // Set active based on current filter
							onClick={() => setActiveFilter(key)} // Set the active filter
							>
								<Icon name={icon} color={color}
									loading={key === 'submitted' && submittedCount !== 0}

								/>
								<Step.Content
								title={title}
								description={description}
								/>
							</Step>
							)
						)    
						
					}
					</Step.Group>
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
					(filteredRuns.length === 0) ?
					<SegmentPlaceholder icon='exclamation circle' text='No Runs Found!' textAlign='center'>
						{/* <Icon size='massive' name='exclamation circle' /> */}
					</SegmentPlaceholder> :
					<Segment placeholder>
					<Card.Group itemsPerRow={4} size='large'>
						{
							filteredRuns.map(run => <RunsListItem key={run.runID} {...{ run }} />)
						}
					</Card.Group>
					</Segment>
					}
				</Grid.Column>
			</Grid>
		</>
	)
}