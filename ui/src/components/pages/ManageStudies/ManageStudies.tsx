import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import * as React from 'react'
import { Button, Form, Header, TextArea, Input, Segment, Container, Message, List, Divider, Modal } from 'semantic-ui-react'

function AddStudyModal (

) {
    return (
        <Modal
            size='large'
            trigger={
                <Button content='Add a study' />
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

function ManageStudiesListItem ({study}: {study: any}) {
    const {fullName, shortName, description} = study
    // const navigate = useNavigate()
    return (
      <>
      <List.Item as={Segment}
        // onClick={() => navigate(rawDatasetID)}
    >
        <List.Content floated='right' as={Segment} basic>
  
        </List.Content>
        <List.Content>
          <List.Header as={Header} content={`${shortName} (${fullName})`} />
          
          <List.Description content={description} />
          <List.List>
            <List.Item >Time points: #</List.Item>
            <List.Item >Datasets: #: </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
      <Divider horizontal hidden/>
      </>
    )
  }
  

export default function ManageStudies (
  // {state: {databaseView}, dispatch}: {state: {databaseView: any}, dispatch: any}
) {
  return (
    <>
    <Container>
      <Message content='These are raw datasets' >
          These are studies that have provided datasets to the consortium.
          Every study has a timeline of data collection timepoints (e.g. birth).
          A dataset must come from an existing study in order to be uploaded.

          <Divider horizontal />
          <AddStudyModal />
      </Message>
      <List relaxed='very' selection size='large'>
          {
              [{fullName: "Canadian Healthy Infant Longitudinal Development", shortName: "CHILD", description: "A study across four sites from pre-natal to age 11"}].map(
                  (study) => <ManageStudiesListItem {...{study}} />
              )
          }
      </List>
    </Container>
    </>
  )
}