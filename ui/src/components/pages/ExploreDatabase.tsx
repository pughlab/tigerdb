import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import * as React from 'react'
import { Button, FeedSummary, Header, Segment } from 'semantic-ui-react'
import { LoadDataButton, DeleteDataButton } from '../upload/DataButtons'
import SampleData from '../tables/example/SampleData'

const Questionnaires = () => {
    return (
      <div>
        Questionnaires
      </div>
    )
  }
  
  const LIMS = () => {
    return (
      <div>
        LIMS
      </div>
    )
  }
  


export default function ExploreDatabase (
  // {state: {databaseView}, dispatch}: {state: {databaseView: any}, dispatch: any}
) {
  return (
    <>
      {/* <Button.Group widths={3}>
        <Button
          onClick={() => dispatch({type: 'setDatabaseView', databaseView: 'questionnaires'})}
          color={databaseView == 'questionnaires' ? 'teal' : 'grey'}
        >
          <Button.Content><Header inverted>Questionnaires</Header></Button.Content>
        </Button>
        <Button
          onClick={() => dispatch({type: 'setDatabaseView', databaseView: 'sampledata'})}
          color={databaseView == 'sampledata' ? 'teal' : 'grey'}
        >
          <Button.Content><Header inverted>Sample Data</Header></Button.Content>
        </Button>
        <Button
          onClick={() => dispatch({type: 'setDatabaseView', databaseView: 'lims'})}
          color={databaseView == 'lims' ? 'teal' : 'grey'}
        >
          <Button.Content><Header inverted>LIMS</Header></Button.Content>
        </Button>
      </Button.Group>

      {
        databaseView == 'questionnaires' ?
        <Questionnaires /> :
        databaseView == 'sampledata' ?
        <SampleData /> :
        databaseView == 'lims' ?
        <LIMS /> :
        null        
      } */}
    </>
  )
}