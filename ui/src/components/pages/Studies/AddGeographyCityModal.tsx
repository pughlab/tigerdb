import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'

export default function AddGeographyCityModal () {
	return (
		<Modal
			size='large'
			trigger={
				<Button size='tiny' content='If a study site does not yet exist in the database, click here to add' />
			}
		>
			<Modal.Content>
				<Form>
					<Form.Group widths={2}>
					<Form.Field
						key='country'
						control={Input}
						label='Country'
						placeholder='Country name'
						// value={fullName}
						// onChange={(e, { value }) => setFullName(value)}
					/>
					<Form.Field
						key='city'
						control={Input}
						label='City'
						placeholder='City name'
						// value={shortName}
						// onChange={(e, { value }) => setShortName(value)}
					/>
					</Form.Group>
					<Form.Group widths={2}>
					<Form.Field
						key='latitude'
						control={Input}
						label='Latitude'
						placeholder='Latitude of city'
						// value={description}
						// onChange={(e, { value }) => setDescription(value)}
					/>
					<Form.Field
						key='longitude'
						control={Input}
						label='Longitude'
						placeholder='Longitude of city'
						// value={description}
						// onChange={(e, { value }) => setDescription(value)}
					/>
					</Form.Group>
				</Form>
			</Modal.Content>
			<Modal.Actions>
				<Button content='Cancel' />
				<Button content='Add study site' />
			</Modal.Actions>
		</Modal>
	)
}
