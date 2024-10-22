import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Loader, Dimmer, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

// import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

import useProjectsQuery from '../../../hooks/useProjectsQuery'

import AddProjectModal from './AddProjectModal'

function ProjectsListItem({ project }) {
	const { projectID, name, description, createdBy, datasets } = project
	console.log(createdBy)
	const { navigate } = useRouter()
	return (
		<>
			<List.Item as={Segment} onClick={() => { navigate(projectID) }}>
				{/* <List.Content floated='right' as={Segment} basic>

				</List.Content> */}
				<List.Content>
					<List.Header as={Header}>
						{`${name}`}
						<Label content='Project' style={{backgroundColor: "#3B5998", color: "white"}} />
						<Header.Subheader content={createdBy.email} />
					</List.Header>

					<List.Description content={description} />
					<List.Description>
					<Divider/>
						{
							(datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
						}
					</List.Description>
				</List.Content>
			</List.Item>
			<Divider horizontal hidden />
		</>
	)
}

export default function ProjectsList({

}) {

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
		<>
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
					(projects.length === 0) ?
					<Label>No projects available. Add a project above or ask your administrator to update your permissions.
					</Label> :
					<Segment placeholder>
						<List relaxed='very' selection size='large'>
							{
								projects.map(project => <ProjectsListItem key={project.projectID} {...{ project }} />)
							}
						</List>
					</Segment>
					}
				</Grid.Column>
			</Grid>
		</>
	)
}