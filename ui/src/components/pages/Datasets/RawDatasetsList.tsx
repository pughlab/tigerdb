import * as React from 'react'
import { Segment, Menu, Button, Container, List, Message, Divider, Icon } from 'semantic-ui-react'


import { useNavigate } from 'react-router-dom'
import useRawDatasetsQuery from '../../../hooks/useRawDatasetsQuery'
import SegmentPlaceholder from '../../common/SegmentPlaceholder'

// generate graphql typescript types not working
function RawDatasetListItem ({rawDataset}: {rawDataset: any}) {
  const {name, description, rawDatasetID} = rawDataset
  const navigate = useNavigate()
  return (
    <>
    <Segment as={List.Item} onClick={() => navigate(rawDatasetID)}>
      <List.Content floated='right' as={Segment} basic>

      </List.Content>
      <List.Content>
        <List.Header content={name} />
        <List.Description content={description} />
        <List.List>
          <List.Item >Study: </List.Item>
          <List.Item >Time point: </List.Item>
        </List.List>
      </List.Content>
    </Segment>
    <Divider horizontal hidden/>
    </>
  )
}

export default function RawDatasetsList ({}) {
  const [rawDatasets, loading] = useRawDatasetsQuery()
  console.log(rawDatasets)
  if (!rawDatasets || loading) {
    return (
      <Container>
        <SegmentPlaceholder text={'Loading submitted raw datasets...'} icon='compass loading' />
      </Container>
    )
  }
  return (
    <>
    <Container>
      <Message content='These are raw datasets' />
      <List relaxed='very' selection size='large'>
      {
        rawDatasets.map((rawDataset) => <RawDatasetListItem {... {key: rawDataset.rawDatasetID, rawDataset}} />)
      }
      </List>
    </Container>
    </>
  )
}
