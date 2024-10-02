import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

// import GeographyVisualization from '../../visualizations/geography/GeographyVisualization'

import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

import useProjectsQuery from '../../../hooks/useProjectsQuery'

import AddProjectModal from './AddProjectModal'

function ProjectsListItem({ project }) {
	const { projectID, name, description, createdBy } = project
	console.log(createdBy)
	const { navigate } = useRouter()
	return (
		<>
			<List.Item as={Segment} onClick={() => { navigate(projectID) }}>
				<List.Content floated='right' as={Segment} basic>

				</List.Content>
				<List.Content>
					<List.Header as={Header}>
						{`${name}`}
						<Header.Subheader content={createdBy.name} />
					</List.Header>

					<List.Description content={description} />
					{/* <List.Description>
						<Label content='Datasets' detail={`${datasets.length}`} />
					</List.Description> */}
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
					<Message>
						Projects

						<Divider horizontal />
						<AddProjectModal refetch={refetch} />
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
					{
					(projects.length === 0) ?
					<Label>No projects available. Add a project above or ask your administrator to update your permissions.
					</Label> :
					<List relaxed='very' selection size='large'>
						{
							projects.map(project => <ProjectsListItem key={project.projectID} {...{ project }} />)
						}
					</List>
					}
				</Grid.Column>
			</Grid>
		</>
	)
}