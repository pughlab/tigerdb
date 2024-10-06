import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import { useParams } from 'react-router-dom'

import DatasetDetailsModal from '../Datasets/DatasetDetailsModal'
import AddDatasetModal from '../Datasets/AddDatasetModal'
import DatasetsList from '../Datasets/DatasetsList'
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
				<Divider horizontal content='Project Details' />

					<Header content={name} subheader={createdBy.email} />
					<Message content={description} />
					<Divider horizontal />
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