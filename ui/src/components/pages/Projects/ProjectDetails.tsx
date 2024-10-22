import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Icon, Header, Dimmer, Loader, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import { useParams } from 'react-router-dom'

// import DatasetDetailsModal from '../Datasets/DatasetDetailsModal'
// import AddDatasetModal from '../Datasets/AddDatasetModal'
import DatasetsList from '../Datasets/DatasetsList'
import useProjectDetailsQuery from '../../../hooks/useProjectDetailsQuery'
import useIsAdmin from '../../../hooks/useIsAdmin'

import SegmentPlaceholder from '../../common/SegmentPlaceholder'

export default function ProjectDetails() {
	const { projectID } = useParams()
	const { project, loading: detailsLoading, error } = useProjectDetailsQuery({ projectID })
	const { isAdmin, loading: adminLoading, error: adminError, refetch } = useIsAdmin();

	// const { state: { searchText, results }, dispatch, loading: searchLoading } = useSearchGeographyCitiesQuery({})

	if (detailsLoading) {
		return (
		  <Segment placeholder textAlign='center'>
		  {/* <Icon size='massive' name='react' loading /> */}
			<Dimmer active inverted>
				<Loader size='large'>Loading...</Loader>
			</Dimmer>
		  </Segment>
		)
	  }

	if (!project) {
		return (
			<SegmentPlaceholder text='Not found!' icon='exclamation triangle' />
		)
	}


	
	// console.log(results)
	const { name, description, createdOn, createdBy, isPublic, sharedWith } = project
	const createdOnDate = new Date(createdOn).toLocaleString('en-US', {
		weekday: 'long',  // "Sunday"
		year: 'numeric',  // "2024"
		month: 'short',   // "Oct"
		day: 'numeric',   // "2"
		hour: 'numeric',  // "4"
		minute: 'numeric', // "41"
		hour12: true,     // 12-hour format with AM/PM
	  })
	console.log(project)

	return (
		<Grid columns={1}>
			<Grid.Column>
				<Message color='grey'>
				<Divider horizontal content='Project Details'/>
					<Message.Header content={name} />
					<List size='large'>
						<List.Item icon='calendar' content={`${createdOnDate}`} />
						<List.Item icon='user' content={`${createdBy.email}`} />
						{/* <Message.Item content={`Public: ${isPublic}`} /> */}
						{/* <Message.Item content={`Shared with: ${sharedWith}`} /> */}
					</List>
					<Message content={description} />
					<Divider horizontal />
					{
					isAdmin ? 
					<Button 
					fluid
					color='facebook' 
					
					//  loading={curatedDatasetLoading}
					//  disabled={success || !adminQueryData.isAdmin || curatedDatasetLoading || minioUpload.processedDataset === null || minioUpload.processedDataset === undefined}
					icon='globe'
					content='MAKE PROJECT PUBLIC'
					onClick={() => console.log('make public')}
					/> :
					<Button 
					fluid
					color='facebook' 
					
					//  loading={curatedDatasetLoading}
					//  disabled={success || !adminQueryData.isAdmin || curatedDatasetLoading || minioUpload.processedDataset === null || minioUpload.processedDataset === undefined}
					icon='users'
					content='SHARE'
					disabled
					onClick={() => console.log('share')}
					/>
					}
				</Message>


					{/* should be eventually list of datasets: */}
					{/* <Label.Group>
					{projectSites.map(({cityID, city, country, latitude, longitude }) => (
						<Label key={cityID} basic>
							{`${city} (${country})`}
						</Label>
					))}
					</Label.Group> */}
					<DatasetsList projectID={projectID} />
			</Grid.Column>
		</Grid>
	)
}