import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Loader, Dimmer, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid, Card, Popup, Button, Icon } from 'semantic-ui-react'

// import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

import useProjectsQuery from '../../../hooks/useProjectsQuery'

import AddProjectModal from './AddProjectModal'

function ProjectDetailsCard({ project }) {
	const { projectID, name, description, createdBy, datasets, isPublic, createdOn } = project
  const creationDate = new Date(createdOn).toDateString()
	const { navigate } = useRouter()
  const color = isPublic ? 'black' : 'facebook'
	return (
		<Card link color={color}  onClick={() => { navigate(projectID) }}>
      <Popup
        size='large' wide='very' position="top center"
        trigger={
          <Button attached='top' size='large'>
            <Icon name='folder open' size='large' />
          </Button>
        }        
      >
        {/* {project.isPublic ? 'Public' : 'Private'} project */}
        <Message size='mini'>
          <Message.Content>
            <Divider horizontal content='Details' />
            {description}
          </Message.Content>
        </Message>
        <Segment.Group>
          <Segment>
            <Label.Group>
              <Label>
                <Icon name='user' />
                {'Created by'}
                <Label.Detail content={createdBy.name} />
                <Label.Detail content={createdBy.email} />
              </Label>
              <Label >
                <Icon name='calendar alternate outline' />
                {'Created on'}
                <Label.Detail content={creationDate}  />
              </Label>
            </Label.Group>
          </Segment>
        </Segment.Group>
      </Popup>
      <Card.Content extra>
        <Header size='medium'>
          <Header.Content>
            {name}
          </Header.Content>
        </Header>
      </Card.Content>
      <Card.Content>
        <Label.Group>
          <Label as={Button} color={color} content={<Icon style={{margin: 0}} name={isPublic ? 'lock open' : 'lock'} />} detail={isPublic ? 'Public' : 'Private'} />
          <Label content={<Icon style={{margin: 0}} name='user' />} detail={createdBy.name} />
          <Label content={<Icon style={{margin: 0}} name='calendar alternate outline' />} detail={creationDate} />
        </Label.Group>
        <Divider />
        <Label.Group>
          {
            (datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
          }
        </Label.Group>
      </Card.Content>
		</Card>
	)
}

export default function ProjectsList() {

	const { data, loading, error, refetch } = useProjectsQuery()

	console.log(data)
	const location = useLocation()
	useEffect(() => {
		refetch()
	}, [location.key])

	let projects
	if (!data?.getProjects) {
		projects = []
	} else {
		projects = data.getProjects
	}

	console.log(projects)

	// const allStudySites = studies.map(study => study.studySites).flat()
	return (
		<Grid>
				{/* <Grid.Column width={7}>
					<GeographyVisualization cityMarkers={allStudySites}/>
				</Grid.Column> */}
				<Grid.Column>

					<Divider horizontal content='Projects' />
					<Segment basic>
						<AddProjectModal refetch={refetch} />
						</Segment>					
					<Form>
						<Form.Field
							control={Input}
							label='Search projects'
							placeholder='Names and descriptions'
						// value={description}
						// onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
						/>
					</Form>
          <Divider hidden />
					{
					(loading) ?  
					<Segment placeholder textAlign='center'>
						{/* <Icon size='massive' name='react' loading /> */}
						<Dimmer active inverted>
							<Loader size='large'>Loading...</Loader>
						</Dimmer>
					</Segment>
					:
					(projects.length === 0) ?
					<Label>No projects available. Add a project above or ask your administrator to update your permissions.
					</Label> :
					<Card.Group itemsPerRow={3}>
            {
              projects.map(project => <ProjectDetailsCard key={project.projectID} {...{ project }} />)
            }
          </Card.Group>
					}
				</Grid.Column>
			</Grid>
	)
}