import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import { Loader, Dimmer, Form, Header, Label, Input, Segment, Icon, Message, List, Divider, Modal, Container, Dropdown } from 'semantic-ui-react'
// import useRouter from '../../../hooks/useRouter'
import useDatasetsQuery from '../../../hooks/useDatasetsQuery'

import AddDatasetModal from './AddDatasetModal'
import MinioBucket from '../../common/minio'

import { useLocation } from 'react-router-dom'


function DatasetListItem({ dataset }) {
  const { datasetID, name, project } = dataset
  const [isMinioBucketOpen, setMinioBucketOpen] = useState(false) // State to control MinioBucket visibility

  // const navigate = useNavigate()
  // const { navigate } = useRouter()
  return (
    <>
      <List.Item as={Segment}
        // onClick={() => navigate(`dataset/${datasetID}`)}
        onClick={() => setMinioBucketOpen(!isMinioBucketOpen)}
      >
        <List.Content floated='right' basic>
          <Icon size='large' name={isMinioBucketOpen ? 'chevron up' : 'chevron down'} />
        </List.Content>
        <List.Content floated='right' basic>

        </List.Content>
        <List.Content>
        <List.Header as={Header}>
          {`${name}`}

          {/* <List.Header as={Header} content={`${name}`} /> */}
          <Label content='Dataset' color='blue' />
        </List.Header>
        <Divider />
        <Label content='Tags' />
          {/* <List.Description content={`${description}`} /> */}
        </List.Content>

      </List.Item>
      {isMinioBucketOpen && <MinioBucket datasetID={`${datasetID}`} />} {/* Conditionally render MinioBucket */}

      <Divider horizontal hidden />
    </>
  )
}

export default function DatasetsList({ projectID }) {
  const { data, loading, error, refetch, searchText, setSearchText } = useDatasetsQuery({projectID})

	const location = useLocation()
	useEffect(() => {
		refetch()
	}, [location.key])

  let datasets
	if (!data?.datasets) {
		datasets = []
	} else {
		datasets = data.datasets
	}

	console.log(datasets)
  
  return (
    <>
      <>
        {/* <Message> */}
          

          <Divider horizontal />
        {/* </Message> */}
        <Message>
        <Divider horizontal content='Datasets' />
        <Segment basic>
          <AddDatasetModal projectID={projectID} refetch={refetch} />
        </Segment>

          <Form>
            <Form.Field control={Input}
              label='Search datasets'
              placeholder='Names and descriptions'
              value={searchText}
              onChange={(e, { value }) => setSearchText(value)}
            />
          </Form>
          <Divider horizontal />

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
					(datasets.length === 0) ?
					<Label>No datasets available. Add a dataset above or ask your administrator to update your permissions.
					</Label> :
          <Container>

          <List selection size='large' key='dataset'>
          {
            datasets.map(dataset => (
              <DatasetListItem key={dataset.datasetID} {...{ dataset }} />
            ))
          }
          </List>
          </Container>

          }

        </Message>
      </>
    </>
  )
}