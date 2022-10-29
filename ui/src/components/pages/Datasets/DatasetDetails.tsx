import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown } from 'semantic-ui-react'
import { Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'
import DataVariableTable from '../../visualizations/tables/DataVariableTable'

function useRawDatasetDataVariablesQuery({rawDatasetID}) {
  return {}
}

export default function DatasetDetails() {
  const { datasetID } = useParams()
  const { data, loading, error } = useQuery(gql`
		query RawDatasetDetails($rawDatasetID: ID!) {
			rawDatasets (where: {rawDatasetID: $rawDatasetID}) {
				rawDatasetID
				name
				description
        fromStudy {
          studyID
          shortName
        }
        studySite {
          city
          country
        }
			}
		}`,
    { variables: { rawDatasetID: datasetID } })
  if (!data?.rawDatasets) {
    return null
  }
  const [{ rawDatasetID, name, description, fromStudy, studySite }] = data.rawDatasets
  return (
    <>
      <Grid>
        <Grid.Column width={16}>
          <Message>
            <Divider horizontal content='Dataset Details' />
            <Header content={name} subheader={description} />
            <Divider horizontal />
            <Label>
              Study
              <Label.Detail content={fromStudy.shortName} />
              {/* TODO: every raw dataset can be assumed to have study site, remove this check? */}
              {!!studySite && <Label.Detail content={`${studySite.city} (${studySite.country})`} />}
              
            </Label>
          </Message>
        </Grid.Column>
        <Grid.Row divided>
          <Grid.Column width={10}>
            <Divider horizontal content='Dataset Files' />
            <MinioBucket bucketName={`raw-dataset-${rawDatasetID}`} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Divider horizontal content='Transformation Into Data Variables' />
              <Dropdown
                placeholder='Select transformation for the raw dataset minio bucket'
                fluid search selection
                options={[]}
              />
              <Message>
                Transformation requirements
              </Message>
              <Button fluid content='Submit' />
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Column width={16}>
          <Segment>
            <Divider horizontal content='If transformation is successful...' />
            <Segment>
              <>
                {/* <DownloadDataVariables data={data.dataVariables} /> */}
                <DataVariableTable data={[]} />
              </>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}