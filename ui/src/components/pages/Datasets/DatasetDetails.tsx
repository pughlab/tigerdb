import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown } from 'semantic-ui-react'
import { Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'
// import DataVariableTable from '../../visualizations/tables/DataVariableTable'

function useRawDatasetDataVariablesQuery({ rawDatasetID }) {
  return {}
}

function DatasetTransformationSubmit({ rawDatasetID }) {
  const bucketName = `raw-dataset-${rawDatasetID}`
  const { data, loading, error } = useQuery(gql`
  query MinioUploads($bucketName: ID!) {
      minioUploads(where: {bucketName: $bucketName}) {
          bucketName
          objectName
          filename
      }
  }`,
    { variables: { bucketName }, fetchPolicy: 'network-only' })
  if (!data?.minioUploads) {
    return null
  }
  const { minioUploads } = data
  const dropdownOptions = minioUploads.map(({ filename, objectName }) => ({
    value: objectName, text: filename, description: objectName
  }))
  return (
    <>
      <Segment>
        {/* TODO: a global Message component content object to hold all text in one place */}
        <Message>
          Steps: validate codebook, validate raw data, submit to make available to admins
        </Message>
        <Divider horizontal content='Codebook' />
        <Dropdown
          placeholder='Select codebook file'
          fluid search selection
          options={dropdownOptions}
          // This will be the minioUpload.objectName from above
          onChange={(e, { value }) => { console.log(value) }}
        />
        <Button fluid content='Validate Codebook' />
        {/* TODO: add checker to disable buttons in order of validation (e.g. raw data validation only after codebook), can be checked from RawDataset  */}
        <Divider horizontal content='Raw Data' />
        <Dropdown
          placeholder='Select raw data file'
          fluid search selection
          options={[]}
        />
        <Button fluid content='Validate Raw Data' />

        <Divider horizontal />
        <Button fluid content='Submit' />
      </Segment>
    </>
  )
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
            <DatasetTransformationSubmit {...{rawDatasetID}} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Column width={16}>
          <Segment>
            <Divider horizontal content='If transformation is successful...' />
            <Segment>
              <>
                {/* <DownloadDataVariables data={data.dataVariables} /> */}
                {/* <DataVariableTable data={[]} /> */}
              </>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}