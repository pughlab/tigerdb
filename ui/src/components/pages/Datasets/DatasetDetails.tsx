import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState, useReducer } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown, Item } from 'semantic-ui-react'
import { Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'
// import DataVariableTable from '../../visualizations/tables/DataVariableTable'
import { v4 as uuidv4 } from 'uuid'
import { GeographyCity, MinioUpload, Study, Task } from '../../../types/types'

function useRawDatasetDataVariablesQuery({ rawDatasetID }) {
  return {}
}

function DatasetTransformationSubmit({ rawDatasetID }) {
  const bucketName = `raw-dataset-${rawDatasetID}`
  
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
              mismatches {
                lineNumber
                fileA
                fileB
              }
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
          mutation submitTask($name: String!, $image: String!, $description: String!, $taskID: String!, $command: String!) {
            submitTask(
              name: $name
              image: $image
              description: $description
              taskID: $taskID
              command: $command
            ) {
              id
            }
          }`)

    function setCommand(objectNameRF, objectNameCB, taskID) {
      // const const_program = `python api/src/funnel/programmaticLoad.py`
      const const_program = `TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/programmaticLoad.ts`
      const const_mode = `neo4j`
      // const const_mode = `programmatic`
      const const_permission_keys = `allowedSites,allowedStudies`
      const const_permission_values = `admin,admin`
      const const_isdelall = `ndelall` // ydelall to delete all before load
      const command = `${const_program} ${rawDatasetID} ${objectNameRF} ${objectNameCB} ${const_mode} ${const_permission_keys} ${const_permission_values} ${const_isdelall} ${taskID}`
      return command
    }

    const initialState = { name: uuidv4(), description: rawDatasetID, taskID: uuidv4(), image: const_image, objectNameRF:null, objectNameCB: null, command: null }
    const [funnelLoadState, funnelLoadDispatch] = useReducer((state, action) => {
        const { type, payload } = action
        let objectNameRF, objectNameCB, command, taskID
        switch (type) {
            case 'taskID':
              ({ objectNameRF } = state);
              ({ objectNameCB } = state);
              ({ taskID } = payload);
              command = setCommand(objectNameRF, objectNameCB, taskID)
              return { ...state, objectNameCB, command, taskID }
            case 'objectNameRF':
                ({ objectNameRF } = payload);
                ({ objectNameCB } = state);
                ({ taskID } = state);
                command = setCommand(objectNameRF, objectNameCB, taskID)
                return { ...state, objectNameRF, command, taskID }
            case 'objectNameCB':
                ({ objectNameRF } = state);
                ({ objectNameCB } = payload);
                ({ taskID } = state);
                command = setCommand(objectNameRF, objectNameCB, taskID)
                return { ...state, objectNameCB, command, taskID }
        }
        return state
    }, initialState)
    return { funnelLoadState, funnelLoadDispatch, funnelLoadMutation, funnelLoadMutationState }
  }

  const { funnelLoadState, funnelLoadDispatch, funnelLoadMutation, funnelLoadMutationState } = useFunnelLoadReducer()
  const { data: funnelLoadMutationData, loading: funnelLoadMutationLoading, error: funnelLoadMutationError } = funnelLoadMutationState



  function useFunnelConnectedDataReducer() {

    const initialState = { codebook: null, rawDataset:null, codebookPair: null, rawDataPair: null }
    const [funnelConnectedDataState, funnelConnectedDataDispatch] = useReducer((state, action) => {
        const { type, payload } = action
        switch (type) {
            case 'codebook':
                const { codebook } = payload
                return { ...state, codebook }
            case 'rawDataset':
              const { rawDataset } = payload
                return { ...state, rawDataset }
            case 'codebookPair':
              const { codebookPair } = payload
                return { ...state, codebookPair }
            case 'rawDataPair':
              const { rawDataPair } = payload
                return { ...state, rawDataPair }
        }
        return state
    }, initialState)
  
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
        let codebook = null
        let rawDataset = null
        let codebookPair = null
        let rawDataPair = null
  
        codebook = (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].codeBook) && (data.rawDatasets[0].codeBook.objectName) ? data.rawDatasets[0].codeBook.objectName : null
        funnelConnectedDataDispatch({ type: 'codebook', payload: {codebook} })
  
        rawDataset = (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].rawdataFile) && (data.rawDatasets[0].rawdataFile.objectName) ? data.rawDatasets[0].rawdataFile.objectName : null
        funnelConnectedDataDispatch({ type: 'rawDataset', payload: {rawDataset} })
  
        codebookPair = (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].codeBook) && (data.rawDatasets[0].codeBook.pairedRawdataFile) && (data.rawDatasets[0].codeBook.pairedRawdataFile.objectName) ? data.rawDatasets[0].codeBook.pairedRawdataFile.objectName : null
        funnelConnectedDataDispatch({ type: 'codebookPair', payload: {codebookPair} })
  
        rawDataPair = (data) && (data.rawDatasets[0]) &&(data.rawDatasets[0].rawdataFile) && (data.rawDatasets[0].rawdataFile.pairedCodebook) && (data.rawDatasets[0].rawdataFile.pairedCodebook.objectName) ? data.rawDatasets[0].rawdataFile.pairedCodebook.objectName : null
        funnelConnectedDataDispatch({ type: 'rawDataPair', payload: {rawDataPair} })
  
        funnelLoadDispatch({ type: 'objectNameCB', payload: {objectNameCB: codebook} });
        funnelLoadDispatch({ type: 'objectNameRF', payload: {objectNameRF: rawDataset} });

        validateRawfileCodebookPairDispatch({ type: 'objectNameCB', payload: {objectNameCB: codebook} });validateRawfileCodebookPairDispatch({ type: 'objectNameRF', payload: {objectNameRF: rawDataset} });
  
      }
    })

    return { funnelConnectedDataState, funnelConnectedDataDispatch, rawDatasetDetailsData, rawDatasetDetailsLoading, rawDatasetDetailsError, rawDatasetDetailsRefetch }
  }
  
  const { funnelConnectedDataState, funnelConnectedDataDispatch, rawDatasetDetailsData, rawDatasetDetailsLoading, rawDatasetDetailsError, rawDatasetDetailsRefetch } = useFunnelConnectedDataReducer()


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
          onChange={(e, { value }) => { validateCodebookDispatch({ type: 'setObjectName', payload: {objectName: value} }) }}
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
          onChange={(e, { value }) => { validateRawdatafileDispatch({ type: 'setObjectName', payload: {objectName: value} }) }}
        />
        <Button fluid content='Validate Raw Data' onClick={() => { validateRawdatafileMutation({ variables: validateRawdatafileState })}} />
        {
          (validateRawdatafileMutationData) && (validateRawdatafileMutationData.validateRawdatafile) && (validateRawdatafileMutationData.validateRawdatafile.message) &&
          <Message>{validateRawdatafileMutationData.validateRawdatafile.message}</Message>
        }
        <Divider horizontal content='Validate rawdata codebook pair' />
        <Button disabled={funnelConnectedDataState && !(funnelConnectedDataState.codebook && funnelConnectedDataState.rawDataset)} fluid content='Validate rawdata codebook pair' onClick={() => { validateRawfileCodebookPairMutation({ variables: validateRawfileCodebookPairState })}} />
        {
          (validateRawfileCodebookPairMutationData) && (validateRawfileCodebookPairMutationData.validateRawfileCodebookPair) && (validateRawfileCodebookPairMutationData.validateRawfileCodebookPair.message) &&
          <Message>{validateRawfileCodebookPairMutationData.validateRawfileCodebookPair.message}</Message>
        }
        <Divider horizontal />
        <Button disabled={funnelConnectedDataState && !(funnelConnectedDataState.codebook && funnelConnectedDataState.rawDataset && funnelConnectedDataState.codebookPair && funnelConnectedDataState.rawDataPair)} fluid content='Submit'  onClick={ async () => { await funnelLoadDispatch({ type: 'taskID', payload: {taskID: uuidv4()} }); funnelLoadMutation({ variables: funnelLoadState })}}/>
        {
            <Message>
              codebook: {funnelConnectedDataState && funnelConnectedDataState.codebook ? funnelConnectedDataState.codebook : 'No file'}
              <br/>
              rawdata: {funnelConnectedDataState && funnelConnectedDataState.rawDataset ? funnelConnectedDataState.rawDataset : 'No file'}
              <br/>
              codebook pair: {funnelConnectedDataState && funnelConnectedDataState.codebookPair ? funnelConnectedDataState.codebookPair : 'No file'}
              <br/>
              rawdata pair: {funnelConnectedDataState && funnelConnectedDataState.rawDataPair ? funnelConnectedDataState.rawDataPair : 'No file'}
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
      rawDatasets(where: {rawDatasetID: $rawDatasetID}) {
        rawDatasetID
        name
        description
        files {
          bucketName
          objectName
          filename
        }
        funnelTasks {
          creationTime
          description
          id
          name
          state
          fromRawDataset {
            rawDatasetID
            name
            description
          }
          generatedCuratedDataset {
            curatedDatasetID
            name
            exportTask {
              generatedExport {
                bucketName
                objectName
                filename
                presignedURL
              }
            }
            fieldDefinitions {
              dataVariableFieldDefinitionID
            }
            dataVariablesAggregate {
              count
            }
            fieldDefinitionsAggregate {
              count
            }
          }
        }
        fromStudy {
          studyID
          shortName
          __typename
        }
        studySite {
          city
          country
        }
      }
    }`,
    { variables: { rawDatasetID: datasetID } })

  const [funnelTaskExportCuratedDatasetMutation, funnelTaskExportCuratedDatasetState] = useMutation(gql`
    mutation funnelTaskExportCuratedDataset($taskID: ID!, $curatedDatasetID: ID!) {
    funnelTaskExportCuratedDataset(
      taskID: $taskID
      curatedDatasetID: $curatedDatasetID
    ) {
      creationTime
      taskID
      name
      state
    }
  }`, 
  {
    errorPolicy: 'none',
  })

  if (!data?.rawDatasets) {
    return null
  }

  const [{ rawDatasetID, name, description, fromStudy, studySite, files, funnelTasks }] : [{ rawDatasetID: String, name: String, description: String, fromStudy: Study, studySite: GeographyCity, files: MinioUpload, funnelTasks: Task }]= data.rawDatasets
  
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
            <MinioBucket rawDatasetID={`${rawDatasetID}`} />
          </Grid.Column>
          <Grid.Column width={6}>
            <DatasetTransformationSubmit {...{rawDatasetID}} />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Column width={16}>
          <Segment>
            <Divider horizontal content='Funnel Tasks...' />
            <Segment>
              <List>
                {funnelTasks &&
                  funnelTasks.map((funnelTask: Task) => {
                
                  const linkURL = funnelTask?.generatedCuratedDataset?.exportTask?.generatedExport?.presignedURL
                  const linkText = funnelTask?.generatedCuratedDataset?.exportTask?.generatedExport?.filename

                  // console.log(linkText)
                  // console.log(linkURL)

                  return <List.Item key={`List.Item.${funnelTask.id}`}>
                    <Button
                      disabled={funnelTask.state !== 'COMPLETE'}
                      onClick={() => { funnelTaskExportCuratedDatasetMutation({ variables: {taskID: uuidv4(), curatedDatasetID: funnelTask?.generatedCuratedDataset?.curatedDatasetID} })} }
                      key={`Button.${funnelTask.id}`}
                      content={
                        `
                        id: ${funnelTask.id}
                        |state: ${funnelTask.state}
                        |fdCount: ${funnelTask?.generatedCuratedDataset?.fieldDefinitionsAggregate ? funnelTask?.generatedCuratedDataset?.fieldDefinitionsAggregate?.count : 0}
                        |dvCount: ${funnelTask?.generatedCuratedDataset?.dataVariablesAggregate ? funnelTask?.generatedCuratedDataset?.dataVariablesAggregate?.count : 0}`
                      }
                    />
                    <a href={linkURL} target='_blank'>{linkText}</a>
                  </List.Item>
                })}
              </List>
            </Segment>
          </Segment>
        </Grid.Column>

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