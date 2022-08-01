import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import * as React from 'react'
import { Button, Form, Header, TextArea, Input, Segment, Container, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'

function AddDatasetModal (

) {
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
                    label='Full name (e.g. Canadian Healthy Infant Longitudinal Development)'
                    placeholder='Study full name'
                    // value={description}
                    // onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
                />
                <Form.Field
                    control={Input}
                    label='Short name (e.g. CHILD)'
                    placeholder="Study shortened name/acronym"
                    // value={name}
                    // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                />
                <Form.Field
                    control={Input}
                    label='Description (e.g. A study across four sites from pre-natal to ...)'
                    placeholder="A description of the study"
                    // value={name}
                    // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                />

            </Form>

            <Message>
                When a study is added, a timeline is also created to track datasets across longitudinal timepoints.
                The union of all study timelines should be an ordered set of unique data collection events (e.g. all birth data collections across studies should fall under one event).
                As the study progresses and more timepoints are required, they may be added in the "Ontologies" page.
            </Message>

            </Modal.Content>
            <Modal.Actions>
                <Button content='Cancel' />
                <Button content='Add study' />
            </Modal.Actions>
        </Modal>
    )
}

function DatasetListItem () {
    // const {fullName, shortName, description} = study
    // const navigate = useNavigate()
    const {navigate} = useRouter()
    return (
      <>
      <List.Item as={Segment}
        onClick={() => navigate('datasetID')}
    >
        <List.Content floated='right' as={Segment} basic>
  
        </List.Content>
        <List.Content>
          <List.Header as={Header} content={`test`} />
          
          <List.Description content={'test'} />
          <List.List>
            <List.Item >ad</List.Item>
            <List.Item >add</List.Item>
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
  return (
    <>
    <Grid columns={2}>
      <Grid.Column>
        <Message>
          {datasetID} and other data
        </Message>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Button fluid content='Drag and drop button for uploading files' />
          <Divider horizontal />
          <List celled divided>
            <List.Item content={'minio object'} />
          </List>
        </Segment>
      </Grid.Column>
    </Grid>
    <Form as={Segment}>
      <Form.Field
        control={Input}
        label='Transformation'
        placeholder='Select transformation for the raw dataset minio bucket'
      />
      <Form.Field
        control={Button}
        label='Submit'
        fluid
        content='Submit transformation job to convert to data variables'
      />
    </Form>
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
            <DatasetListItem />
          </List>
        </Container>
        </>
      )} />

      <Route path=':datasetID' element={<DatasetDetails />} />
    </Routes>
  )
}