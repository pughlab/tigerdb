import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import { useParams } from 'react-router-dom'

import DatasetDetails from '../Datasets/DatasetDetails'
import useProjectDetailsQuery from '../../../hooks/useProjectDetailsQuery'

export default function ProjectDetails() {
	const { projectID } = useParams()
	const { project, loading: detailsLoading, error } = useProjectDetailsQuery({ projectID })
	// const { state: { searchText, results }, dispatch, loading: searchLoading } = useSearchGeographyCitiesQuery({})

	if (!project) {
		return null
	}
	// console.log(results)
	const { name, description, createdOn, createdBy, isPublic, sharedWith } = project
	console.log(project)
	return (
		<Grid columns={1}>
			<Grid.Column>
				<Message>
					<Header content={name} subheader={createdBy.name} />
					<Message content={description} />
					<Divider horizontal />
					{/* <Label.Group>
					{projectSites.map(({cityID, city, country, latitude, longitude }) => (
						<Label key={cityID} basic>
							{`${city} (${country})`}
						</Label>
					))}
					</Label.Group> */}
				</Message>
				<DatasetDetails/>
			</Grid.Column>
		</Grid>
	)
}