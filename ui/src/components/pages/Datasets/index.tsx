import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, TextArea, Input, Segment, Container, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'

function AddDatasetModal (

) {
  const [createRawDatasetWithMinioBucket, {data, loading, error}] = useMutation(gql`
    mutation createRawDatasetWithMinioBucket($name: String!, $description: String!) {
      createRawDatasetWithMinioBucket(name: $name, description: $description) {
        rawDatasetID
      }
    }
  `)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  return (
      <Modal
          size='large'
          trigger={
              <Button content='Add a dataset' />
          }
      >
          <Modal.Content>
          <Form>
              <Form.Field
                  control={Input}
                  label='Dataset name'
                  placeholder='Dataset name'
                  value={name}
                  onChange={(e, {value}) => setName(value)}
              />
              <Form.Field
                  control={Input}
                  label='Dataset description'
                  placeholder='Dataset description'
                  value={description}
                  onChange={(e, {value}) => setDescription(value)}
              />
          </Form>

          <Message>

          </Message>

          </Modal.Content>
          <Modal.Actions>
              <Button content='Add study' loading={loading} onClick={() => createRawDatasetWithMinioBucket({variables: {name, description}})} />
          </Modal.Actions>
      </Modal>
  )
}

function DatasetListItem ({rawDataset}) {
    const {rawDatasetID, name, description} = rawDataset
    // const navigate = useNavigate()
    const {navigate} = useRouter()
    return (
      <>
      <List.Item as={Segment}
        onClick={() => navigate(rawDatasetID)}
    >
        <List.Content floated='right' as={Segment} basic>
  
        </List.Content>
        <List.Content>
          <List.Header as={Header} content={`${name}`} />
          
          <List.Description content={`${description}`} />
          <List.List>
            {/* <List.Item >ad</List.Item> */}
            {/* <List.Item >add</List.Item> */}
          </List.List>
        </List.Content>
      </List.Item>
      <Divider horizontal hidden/>
      </>
    )
  }

function DatasetsSearch () {
  return (
    <Form as={Segment}>
      <Form.Field
          control={Input}
          label='Search dataset name and descriptions'
          placeholder='Enter some terms'
          // value={description}
          // onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
      />
    </Form>
  )
}
  
function DatasetDetails () {
	const {datasetID} = useParams()
	const {data, loading, error} = useQuery(gql`
		query RawDatasetDetails($rawDatasetID: ID!) {
			rawDatasets (where: {rawDatasetID: $rawDatasetID}) {
				rawDatasetID
				name
				description
			}
		}`,
		{variables: {rawDatasetID: datasetID}})
	if (!data?.rawDatasets) {
		return null
	}
	const [{rawDatasetID, name, description}] = data.rawDatasets
	return (
		<>
		<Grid columns={2}>
		<Grid.Column>
			<Message>
				<Header content={name} subheader={description} />
			</Message>
		</Grid.Column>
		<Grid.Column>
			History/membership here
		</Grid.Column>
		</Grid>
    <Segment>
    <Form>
      <Form.Group>
      <Form.Field width={12}
        control={Input}
        label='Transformation'
        placeholder='Select transformation for the raw dataset minio bucket'
      />
      <Form.Field width={4}
        control={Button}
        label='Convert to portal data variables'
        fluid
        content='Submit'
      />
      </Form.Group>
		</Form>

      <Grid columns={2}>
        <Grid.Column>
          <Divider horizontal content='Dataset Files' />
          <MinioBucket bucketName={`raw-dataset-${rawDatasetID}`} />
        </Grid.Column>
        <Grid.Column>
          <Divider horizontal content='Transformation requirements' />
          <Segment>

          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>

		<Divider horizontal content='If transformation is successful...' />
		<Segment>
		Table goes here
		</Segment>
		</>
	)
}

export default function Datasets (
  // {state: {databaseView}, dispatch}: {state: {databaseView: any}, dispatch: any}
) {
	const {data, loading, error} = useQuery(gql`
		query {
			rawDatasets {
				rawDatasetID
				name
				description
			}
		}
	`)
	console.log(data)
  return (
    <Routes>
      {/* Default /datasets path goes to raw dataset search */}
      <Route index element={(
        <>
        <Container>
          <Message content='These are raw and harmonized datasets' >
              Some text about rd and hd

              <Divider horizontal />
              <AddDatasetModal />
          </Message>
          <DatasetsSearch />
          <List relaxed='very' selection size='large'>
			{!!data?.rawDatasets &&
				data.rawDatasets.map(rawDataset => (
					<DatasetListItem {...{rawDataset}} />
				))
			}
          </List>
        </Container>
        </>
      )} />

      <Route path=':datasetID' element={<DatasetDetails />} />
    </Routes>
  )
}