import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import useRawDatasetsQuery from '../../../hooks/useRawDatasetsQuery'

import AddDatasetModal from './AddDatasetModal'
import { useLocation } from 'react-router-dom'

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
  const { data, loading, error, refetch, searchText, setSearchText } = useRawDatasetsQuery({})

	const location = useLocation()
	useEffect(() => {
		refetch()
	}, [location.key])
  
  return (
    <>
      <Container>
        <Message>
          

          <Divider horizontal />
          <AddDatasetModal refetch={refetch} />
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
          <List selection size='large' key='rawDataset'>
            {!!data?.rawDatasets &&
              data.rawDatasets.map(rawDataset => (
                <DatasetListItem key={rawDataset.rawDatasetID} {...{ rawDataset }} />
              ))
            }
          </List>
        </Segment>
      </Container>
    </>
  )
}