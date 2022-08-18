import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import useRawDatasetsQuery from '../../../hooks/useRawDatasetsQuery'

import AddDatasetModal from './AddDatasetModal'

function DatasetListItem({ rawDataset }) {
  const { rawDatasetID, name, description, fromStudy } = rawDataset
  // const navigate = useNavigate()
  const { navigate } = useRouter()
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
          <Label content='Study' detail={fromStudy.shortName} />
        </List.Content>
      </List.Item>
      <Divider horizontal hidden />
    </>
  )
}

export default function DatasetsList({ }) {
  const { data, loading, error, searchText, setSearchText } = useRawDatasetsQuery({})
  return (
    <>
      <Container>
        <Message>
          Some text about rd and hd

          <Divider horizontal />
          <AddDatasetModal />
        </Message>
        <Segment loading={loading}>
          <Form>
            <Form.Field control={Input}
              label='Search dataset name and descriptions'
              placeholder='Enter some terms'
              value={searchText}
              onChange={(e, { value }) => setSearchText(value)}
            />
          </Form>
          <List selection size='large'>
            {!!data?.rawDatasets &&
              data.rawDatasets.map(rawDataset => (
                <DatasetListItem {...{ rawDataset }} />
              ))
            }
          </List>
        </Segment>
      </Container>
    </>
  )
}