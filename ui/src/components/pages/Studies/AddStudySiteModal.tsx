import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

import useSearchGeographyCitiesQuery from '../../../hooks/useSearchGeographyCitiesQuery'
import useUpdateGeographyCityToStudy from '../../../hooks/useUpdateGeographyCityToStudy'
import { useParams } from 'react-router-dom'

export default function AddStudySiteModal () {
  const { state: { searchText, results }, dispatch, loading: searchLoading } = useSearchGeographyCitiesQuery({})
	const {mutation: updateGeographyCityToStudy, loading: addCityLoading} = useUpdateGeographyCityToStudy({})
	const { studyID } = useParams()

	return (
		<Modal
			size='large'
			trigger={
				<Button size='tiny' content='Add site to study' />
			}
		>
			<Modal.Content>
            <Form as={Segment} loading={searchLoading || addCityLoading}>
					<Divider horizontal>
						Add a site to this study						
					</Divider>
					<Form.Field
						control={Input}
						// label='Search study site cities'
						placeholder='Search city names'
						value={searchText}
						onChange={(e, { value }) => dispatch({ type: 'updateSearchText', payload: { searchText: value } })}
					/>
					<List selection celled>
						{results.map(({cityID, city, country, latitude, longitude }) => (
							<List.Item key={cityID}
								onClick={() => {updateGeographyCityToStudy({variables: {cityID, studyID}})}}
							>
								{`${city} (${country}) [${latitude}, ${longitude}]`}
							</List.Item>
						))}
					</List>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button content='Cancel' />
				<Button content='Add study site' />
			</Modal.Actions>
		</Modal>
	)
}
