import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState, useReducer } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown } from 'semantic-ui-react'
import { Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'
// import DataVariableTable from '../../visualizations/tables/DataVariableTable'
import { v4 as uuidv4 } from 'uuid'

function useRawDatasetDataVariablesQuery({ rawDatasetID }) {
  return {}
}

function DatasetTransformationSubmit({ rawDatasetID }) {
  const bucketName = `raw-dataset-${rawDatasetID}`

  const [codebook, setCodebook] = useState(null)
  const [rawDataset, setRawDataset] = useState(null)
  const [codebookPair, setCodebookPair] = useState(null)
  const [rawDatasetPair, setRawDatasetPair] = useState(null)

  const { data: rawDatasetDetailsData, loading: rawDatasetDetailsLoading, error: rawDatasetDetailsError, refetch: rawDatasetDetailsRefetch } = useQuery(gql`
  query RawDatasetDetails($rawDatasetID: ID!) {
      rawDatasets(where:
        {rawDatasetID: $rawDatasetID}) {
        rawDatasetID
        codeBook {
          bucketName
          objectName
          filename
          pairedRawdataFile {
            bucketName
            objectName
            filename
          }
        }
        rawdataFile {
          bucketName
          objectName
          filename
          pairedCodebook {
            bucketName
            objectName
            filename
          }
        }
    }
  }`,
  { 
    variables: { rawDatasetID: rawDatasetID },
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].codeBook) && (data.rawDatasets[0].codeBook.objectName) ? setCodebook(data.rawDatasets[0].codeBook.objectName) : setCodebook(null);

      (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].rawdataFile) && (data.rawDatasets[0].rawdataFile.objectName) ? setRawDataset(data.rawDatasets[0].rawdataFile.objectName) : setRawDataset(null);

      (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].codeBook) && (data.rawDatasets[0].codeBook.pairedRawdataFile) && (data.rawDatasets[0].codeBook.pairedRawdataFile.objectName) ? setCodebookPair(data.rawDatasets[0].codeBook.pairedRawdataFile.objectName) : setCodebookPair(null);

      (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].rawdataFile) && (data.rawDatasets[0].rawdataFile.pairedCodebook) && (data.rawDatasets[0].rawdataFile.pairedCodebook.objectName) ? setRawDatasetPair(data.rawDatasets[0].rawdataFile.pairedCodebook.objectName) : setRawDatasetPair(null);

    }
  })
  
  function usevalidateCodebookReducer() {
    // const studiesQuery = useStudiesQuery({})

    const [validateCodebookMutation, validateCodebookMutationState] = useMutation(gql`
          mutation validateCodebook($objectName: ID!, $rawDatasetID: ID!) {
            validateCodebook(
              rawDatasetID: $rawDatasetID
              objectName: $objectName
            ) {
              isValid
              message
            }
          }`, 
          {
            errorPolicy: 'none',
            onCompleted: () => { rawDatasetDetailsRefetch() },
          }
          )

    const initialState = { objectName: null, rawDatasetID: rawDatasetID }
    const [validateCodebookState, validateCodebookDispatch] = useReducer((state, action) => {
        const { type, payload } = action
        switch (type) {
            case 'setObjectName':
                const { objectName } = payload
                return { ...state, objectName }
        }
        return state
    }, initialState)
    return { validateCodebookState, validateCodebookDispatch, validateCodebookMutation, validateCodebookMutationState }
  }

  const { validateCodebookState, validateCodebookDispatch, validateCodebookMutation, validateCodebookMutationState } = usevalidateCodebookReducer()
  const { data: validateCodebookMutationData, loading: validateCodebookMutationLoading, error: validateCodebookMutationError } = validateCodebookMutationState



  function useValidateRawdatafileReducer() {
    // const studiesQuery = useStudiesQuery({})

    const [validateRawdatafileMutation, validateRawdatafileMutationState] = useMutation(gql`
          mutation validateRawdatafile($objectName: ID!, $rawDatasetID: ID!) {
            validateRawdatafile(
              rawDatasetID: $rawDatasetID
              objectName: $objectName
            ) {
              isValid
              message
            }
          }`, 
          {
            errorPolicy: 'none',
            onCompleted: () => { rawDatasetDetailsRefetch() },
          })

    const initialState = { objectName: null, rawDatasetID: rawDatasetID }
    const [validateRawdatafileState, validateRawdatafileDispatch] = useReducer((state, action) => {
        const { type, payload } = action
        switch (type) {
            case 'setObjectName':
                const { objectName } = payload
                return { ...state, objectName }
        }
        return state
    }, initialState)
    return { validateRawdatafileState, validateRawdatafileDispatch, validateRawdatafileMutation, validateRawdatafileMutationState }
  }

  const { validateRawdatafileState, validateRawdatafileDispatch, validateRawdatafileMutation, validateRawdatafileMutationState } = useValidateRawdatafileReducer()
  const { data: validateRawdatafileMutationData, loading: validateRawdatafileMutationLoading, error: validateRawdatafileMutationError } = validateRawdatafileMutationState



  function useValidateRawfileCodebookPairReducer() {
    // const studiesQuery = useStudiesQuery({})

    const [validateRawfileCodebookPairMutation, validateRawfileCodebookPairMutationState] = useMutation(gql`
          mutation validateRawfileCodebookPair($rawDatasetIDRF: ID!, $objectNameRF: ID!, $rawDatasetIDCB: ID!, $objectNameCB: ID!) {
            validateRawfileCodebookPair(
              rawDatasetIDRF: $rawDatasetIDRF
              objectNameRF: $objectNameRF
              rawDatasetIDCB: $rawDatasetIDCB
              objectNameCB: $objectNameCB
            ) {
              isValid
              message
            }
          }`, 
          {
            errorPolicy: 'none',
            onCompleted: () => { rawDatasetDetailsRefetch() },
          })

    const initialState = { rawDatasetIDRF: rawDatasetID, objectNameRF: null, rawDatasetIDCB: rawDatasetID, objectNameCB: null }
    const [validateRawfileCodebookPairState, validateRawfileCodebookPairDispatch] = useReducer((state, action) => {
        const { type, payload } = action
        switch (type) {
            case 'objectNameRF':
                const { objectNameRF } = payload
                return { ...state, objectNameRF }
            case 'objectNameCB':
                const { objectNameCB } = payload
                return { ...state, objectNameCB }
        }
        return state
    }, initialState)
    return { validateRawfileCodebookPairState, validateRawfileCodebookPairDispatch, validateRawfileCodebookPairMutation, validateRawfileCodebookPairMutationState }
  }

  const { validateRawfileCodebookPairState, validateRawfileCodebookPairDispatch, validateRawfileCodebookPairMutation, validateRawfileCodebookPairMutationState } = useValidateRawfileCodebookPairReducer()
  const { data: validateRawfileCodebookPairMutationData, loading: validateRawfileCodebookPairMutationLoading, error: validateRawfileCodebookPairMutationError } = validateRawfileCodebookPairMutationState



  function useFunnelLoadReducer() {
    // const studiesQuery = useStudiesQuery({})
    const const_image = `funnel-base`

    const [funnelLoadMutation, funnelLoadMutationState] = useMutation(gql`
          mutation submitTask($name: String!, $image: String!, $command: String!) {
            submitTask(
              name: $name
              image: $image
              command: $command
            ) {
              id
            }
          }`)

    function setCommand(objectNameRF, objectNameCB) {
      const const_program = `python api/src/funnel/programmaticLoad.py`
      const const_mode = `neo4j`
      // const const_mode = `programmatic`
      const const_permission_keys = `%permission_allowedSites,%permission_allowedStudies`
      const const_permission_values = `admin,admin`
      const command = `${const_program} ${rawDatasetID} ${objectNameRF} ${objectNameCB} ${const_mode} ${const_permission_keys} ${const_permission_values}`
      return command
    }

    const initialState = { name: uuidv4(), image: const_image, objectNameRF:null, objectNameCB: null, command: null }
    const [funnelLoadState, funnelLoadDispatch] = useReducer((state, action) => {
        const { type, payload } = action
        let objectNameRF, objectNameCB, command
        switch (type) {
            case 'objectNameRF':
                ({ objectNameRF } = payload);
                ({ objectNameCB } = state);
                command = setCommand(objectNameRF, objectNameCB)
                return { ...state, objectNameRF, command }
            case 'objectNameCB':
                ({ objectNameRF } = state);
                ({ objectNameCB } = payload);
                command = setCommand(objectNameRF, objectNameCB)
                return { ...state, objectNameCB, command }
        }
        return state
    }, initialState)
    return { funnelLoadState, funnelLoadDispatch, funnelLoadMutation, funnelLoadMutationState }
  }

  const { funnelLoadState, funnelLoadDispatch, funnelLoadMutation, funnelLoadMutationState } = useFunnelLoadReducer()
  const { data: funnelLoadMutationData, loading: funnelLoadMutationLoading, error: funnelLoadMutationError } = funnelLoadMutationState




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
          onChange={(e, { value }) => { validateCodebookDispatch({ type: 'setObjectName', payload: {objectName: value} }); validateRawfileCodebookPairDispatch({ type: 'objectNameCB', payload: {objectNameCB: value} }); funnelLoadDispatch({ type: 'objectNameCB', payload: {objectNameCB: value} }); }}
        />
        <Button fluid content='Validate Codebook' onClick={() => { validateCodebookMutation({ variables: validateCodebookState })}} />
        {/* TODO: add checker to disable buttons in order of validation (e.g. raw data validation only after codebook), can be checked from RawDataset  */}
        {
          (validateCodebookMutationData) && (validateCodebookMutationData.validateCodebook) && (validateCodebookMutationData.validateCodebook.message) &&
          <Message>{validateCodebookMutationData.validateCodebook.message}</Message>
        }
        <Divider horizontal content='Raw Data' />
        <Dropdown
          placeholder='Select raw data file'
          fluid search selection
          options={dropdownOptions}
          onChange={(e, { value }) => { validateRawdatafileDispatch({ type: 'setObjectName', payload: {objectName: value} }); validateRawfileCodebookPairDispatch({ type: 'objectNameRF', payload: {objectNameRF: value} }); funnelLoadDispatch({ type: 'objectNameRF', payload: {objectNameRF: value} }) }}
        />
        <Button fluid content='Validate Raw Data' onClick={() => { validateRawdatafileMutation({ variables: validateRawdatafileState })}} />
        {
          (validateRawdatafileMutationData) && (validateRawdatafileMutationData.validateRawdatafile) && (validateRawdatafileMutationData.validateRawdatafile.message) &&
          <Message>{validateRawdatafileMutationData.validateRawdatafile.message}</Message>
        }
        <Divider horizontal content='Validate rawdata codebook pair' />
        <Button fluid content='Validate rawdata codebook pair' onClick={() => { validateRawfileCodebookPairMutation({ variables: validateRawfileCodebookPairState })}} />
        {
          (validateRawfileCodebookPairMutationData) && (validateRawfileCodebookPairMutationData.validateRawfileCodebookPair) && (validateRawfileCodebookPairMutationData.validateRawfileCodebookPair.message) &&
          <Message>{validateRawfileCodebookPairMutationData.validateRawfileCodebookPair.message}</Message>
        }
        <Divider horizontal />
        <Button disabled={!(codebook && rawDataset && codebookPair && rawDatasetPair)} fluid content='Submit'  onClick={() => { funnelLoadMutation({ variables: funnelLoadState })}}/>
        {
          <Message>
            codebook: {codebook}
            <br/>
            rawdata: {rawDataset}
            <br/>
            codebook pair: {codebookPair}
            <br/>
            rawdata pair: {rawDatasetPair}
          </Message>
        }
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