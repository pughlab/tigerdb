import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Button, Dimmer, Loader, Segment, Message, List, Divider, Grid, Label, Icon, Modal } from 'semantic-ui-react'

import { useParams } from 'react-router-dom'

// import DatasetDetailsModal from '../Datasets/DatasetDetailsModal'
// import AddDatasetModal from '../Datasets/AddDatasetModal'
import DatasetsList from '../Datasets/DatasetsList'
import useProjectDetailsQuery from '../../../hooks/useProjectDetailsQuery'
import useIsAdmin from '../../../hooks/useIsAdmin'

import SegmentPlaceholder from '../../common/SegmentPlaceholder'
import ShareProjectModal from './ShareProjectModal'

const STOP_SHARING_WITH_USER = gql`
	mutation StopSharingWithUser($projectID: ID!, $email: Email!) {
		stopSharingWithUser(projectID: $projectID, email: $email) {
			keycloakUserID
			name
			email
		}
	}
`

function StopSharingConfirmation({ userName, stopSharing }) {
	const [open, setOpen] = useState(false)
	return (
		<Modal
			closeIcon
			closeOnDimmerClick={false}
			size="small"
			trigger={
				<Icon name="delete" onClick={() => setOpen(true)} />
			}
			open={open}
			onClose={() => setOpen(false)}
		>
			<Modal.Content>
				<Divider horizontal content='STOP SHARING'/>
				<Modal.Description>
					Are you sure? {userName} will no longer have access to this project.
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button color='red' onClick={() => setOpen(false)}>
					<Icon name='remove' /> No
				</Button>
				<Button color='green' onClick={() => {
					stopSharing()
					setOpen(false)
				}}>
					<Icon name='checkmark' /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	)
}

function SharedUserLabel({
	projectID,
	user,
	updateUsers,
	canDelete = false
}: Readonly<{
	projectID?: string,
	user: { name: string; email: string },
	updateUsers: React.Dispatch<React.SetStateAction<any[]>>,
	canDelete?: boolean}>
) {
	const { name, email } = user
	const [stopSharing] = useMutation(STOP_SHARING_WITH_USER, {
		variables: {
			email: email,
			projectID: projectID,
		},
		onCompleted: () => {
			updateUsers(prev => prev.filter(u => u.email !== email))
		},
	})
	return (
		<Label size="medium">
			{name} ({email})
			{canDelete && <StopSharingConfirmation userName={name} stopSharing={stopSharing}/>}
		</Label>
	)
}

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
		refetch()
	}, })
	const isOwner = ownerData?.isProjectOwner ?? false
	const [canMakePublic, setCanMakePublic] = useState(false)
	const [sharedUsers, setSharedUsers] = useState<any[]>(project?.sharedWith ?? [])

	useEffect(() => {
		setCanMakePublic((isAdmin || isOwner))
	}, [isAdmin, isOwner])

	useEffect(() => {
        const newSharedWith = project?.sharedWith ?? []
        setSharedUsers(prev => {
            if (JSON.stringify(prev) === JSON.stringify(newSharedWith)) {
                return prev
            }
            return newSharedWith
        })
    }, [project?.sharedWith])

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
	const { name, description, createdOn, createdBy, isPublic } = project
	const createdOnDate = new Date(createdOn).toLocaleString('en-US', {
		weekday: 'long',  // "Sunday"
		year: 'numeric',  // "2024"
		month: 'short',   // "Oct"
		day: 'numeric',   // "2"
		hour: 'numeric',  // "4"
		minute: 'numeric', // "41"
		hour12: true,     // 12-hour format with AM/PM
	})

	let publicAndSharing = <></>

	if (isPublic) {
		publicAndSharing = (
			<Button 
				fluid
				color='facebook' 
				icon='lock'
				content='MAKE PROJECT PRIVATE'
				onClick={() => makeProjectPrivate()}
			/>
		)
	} else if (canMakePublic) {
		publicAndSharing = (
			<Button.Group fluid widths='2'>
				<Button
					color='black' 
					icon='globe'
					content='MAKE PROJECT PUBLIC'
					onClick={() => makeProjectPublic()}
				/>
				<Button.Or />
				<ShareProjectModal projectID={projectID} updateSharedUsers={setSharedUsers} />
			</Button.Group>
		)
	}

	return (
		<Grid columns={1}>
			<Grid.Column>
				<Message color='grey'>
				<Divider horizontal content='Project Details'/>
					<Message.Header content={name} />
					<List size='large'>
						<List.Item icon='calendar' content={`${createdOnDate}`} />
						<List.Item icon='user' content={`${createdBy.name}`} />
						{!isPublic && <List.Item icon="users" content={sharedUsers.map(user => <SharedUserLabel
								key={user.email}
								user={user}
								canDelete={isOwner || isAdmin}
								updateUsers={setSharedUsers}
								projectID={projectID}
							/>)}
						/>}
						{isPublic ? <List.Item icon='lock open' content='Public' /> : <List.Item icon='lock' content='Private' />}
					</List>
					<Message content={description} />
					<Divider horizontal />
					{ publicAndSharing }
				</Message>
				<DatasetsList project={project} isPublicProject={isPublic} />
			</Grid.Column>
		</Grid>
	)
}