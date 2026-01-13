import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Button, Dimmer, Loader, Segment, Message, List, Divider, Grid } from 'semantic-ui-react'

import { useParams } from 'react-router-dom'

// import DatasetDetailsModal from '../Datasets/DatasetDetailsModal'
// import AddDatasetModal from '../Datasets/AddDatasetModal'
import DatasetsList from '../Datasets/DatasetsList'
import useProjectDetailsQuery from '../../../hooks/useProjectDetailsQuery'
import useIsAdmin from '../../../hooks/useIsAdmin'

import SegmentPlaceholder from '../../common/SegmentPlaceholder'

export default function ProjectDetails() {
	const { projectID } = useParams()
	const { project, loading: detailsLoading, refetch } = useProjectDetailsQuery({ projectID })
	const { isAdmin } = useIsAdmin();
	const { data: ownerData } = useQuery(gql`
		query IsProjectOwner($projectID: ID!) {
			isProjectOwner(projectID: $projectID)
		}
	`, { variables: { projectID } })
	const [makeProjectPublic] = useMutation(gql`
		mutation MakeProjectPublic($projectID: ID!) {
			makeProjectPublic(projectID: $projectID) {
				projectID
				name
				isPublic
			}
		}
	`, { variables: { projectID }, onCompleted() {
		// setCanMakePublic(false)
		refetch()
	}, })

	const [makeProjectPrivate] = useMutation(gql`
		mutation MakeProjectPrivate($projectID: ID!) {
			makeProjectPrivate(projectID: $projectID) {
				projectID
				name
				isPublic
			}
		}
	`, { variables: { projectID }, onCompleted() {
		// setCanMakePublic(false)
		refetch()
	}, })
	const isOwner = ownerData?.isProjectOwner ?? false
	const [canMakePublic, setCanMakePublic] = useState(false)

	useEffect(() => {
		setCanMakePublic((isAdmin || isOwner))
	}, [isAdmin, isOwner])

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

	return (
		<Grid columns={1}>
			<Grid.Column>
				<Message color='grey'>
				<Divider horizontal content='Project Details'/>
					<Message.Header content={name} />
					<List size='large'>
						<List.Item icon='calendar' content={`${createdOnDate}`} />
						<List.Item icon='user' content={`${createdBy.email}`} />
						<Message.Item content={`${isPublic ? 'Public': 'Private'} project`} />
						{/* <Message.Item content={`Shared with: ${sharedWith}`} /> */}
					</List>
					<Message content={description} />
					<Divider horizontal />
					{ canMakePublic ? (
						isPublic ?
						<Button 
							fluid
							color='facebook' 
							icon='lock'
							content='MAKE PROJECT PRIVATE'
							onClick={() => makeProjectPrivate()}
						/> :
						<Button 
							fluid
							color='black' 
							icon='globe'
							content='MAKE PROJECT PUBLIC'
							onClick={() => makeProjectPublic()}
						/>
						) :
						<Button 
							fluid
							color='facebook' 
							icon='users'
							content='SHARE'
							disabled
							onClick={() => console.log('share')}
						/>
					}
				</Message>
				<DatasetsList project={project} isPublicProject={isPublic} />
			</Grid.Column>
		</Grid>
	)
}