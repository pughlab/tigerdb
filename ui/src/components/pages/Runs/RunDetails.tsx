import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState, useReducer } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Dropdown, Item, Popup } from 'semantic-ui-react'
import { Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'
// import DataVariableTable from '../../visualizations/tables/DataVariableTable'
import { v4 as uuidv4 } from 'uuid'
// import { GeographyCity, MinioUpload, Study, Task } from '../../../types/types'
// import { getPermissionRoles } from '../../../state/appContext'

function useDatasetDataVariablesQuery({ datasetID }) {
  return {}
}

// function AddTimePointToDataset({ }) {

//   const [open, setOpen] = useState(false)

//   return (
//     <Modal
//       open={open}
//       onOpen={() => setOpen(true)}
//       onClose={() => setOpen(false)}
//       trigger={<Button>Add Time Point</Button>}
//     >
//       <Modal.Header>Assign time point to this dataset</Modal.Header>
//       <Modal.Content>
//         <Form>
//           <Form.Field>
//             <label>Select which time point this dataset is from</label>
//             <Dropdown
//               placeholder="Select time point"
//               fluid
//               selection
//               options={[{key: 'birth', value: 'birth', text: 'Birth'}]}
//             // onChange={handleDropdownChange}
//             // value={selectedOption}
//             />
//           </Form.Field>
//         </Form>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button color="black" >
//           Close
//         </Button>
//         <Button
//           positive
//           icon="checkmark"
//           labelPosition="right"
//           content="Save"
//         />
//       </Modal.Actions>
//     </Modal>
//   )
// }

// function DatasetTransformationSubmit({ rawDatasetID }) {
//   const bucketName = `raw-dataset-${rawDatasetID}`

//   function usevalidateCodebookReducer() {
//     // const studiesQuery = useStudiesQuery({})

//     const [validateCodebookMutation, validateCodebookMutationState] = useMutation(gql`
//           mutation validateCodebook($objectName: ID!, $rawDatasetID: ID!) {
//             validateCodebook(
//               rawDatasetID: $rawDatasetID
//               objectName: $objectName
//             ) {
//               isValid
//               message
//             }
//           }`,
//       {
//         errorPolicy: 'none',
//         onCompleted: () => { rawDatasetDetailsRefetch() },
//       }
//     )

//     const initialState = { objectName: null, rawDatasetID: rawDatasetID }
//     const [validateCodebookState, validateCodebookDispatch] = useReducer((state, action) => {
//       const { type, payload } = action
//       switch (type) {
//         case 'setObjectName':
//           const { objectName } = payload
//           return { ...state, objectName }
//       }
//       return state
//     }, initialState)
//     return { validateCodebookState, validateCodebookDispatch, validateCodebookMutation, validateCodebookMutationState }
//   }

//   const { validateCodebookState, validateCodebookDispatch, validateCodebookMutation, validateCodebookMutationState } = usevalidateCodebookReducer()
//   const { data: validateCodebookMutationData, loading: validateCodebookMutationLoading, error: validateCodebookMutationError } = validateCodebookMutationState



//   function useValidateRawdatafileReducer() {
//     // const studiesQuery = useStudiesQuery({})

//     const [validateRawdatafileMutation, validateRawdatafileMutationState] = useMutation(gql`
//           mutation validateRawdatafile($objectName: ID!, $rawDatasetID: ID!) {
//             validateRawdatafile(
//               rawDatasetID: $rawDatasetID
//               objectName: $objectName
//             ) {
//               isValid
//               message
//             }
//           }`,
//       {
//         errorPolicy: 'none',
//         onCompleted: () => { rawDatasetDetailsRefetch() },
//       })

//     const initialState = { objectName: null, rawDatasetID: rawDatasetID }
//     const [validateRawdatafileState, validateRawdatafileDispatch] = useReducer((state, action) => {
//       const { type, payload } = action
//       switch (type) {
//         case 'setObjectName':
//           const { objectName } = payload
//           return { ...state, objectName }
//       }
//       return state
//     }, initialState)
//     return { validateRawdatafileState, validateRawdatafileDispatch, validateRawdatafileMutation, validateRawdatafileMutationState }
//   }

//   const { validateRawdatafileState, validateRawdatafileDispatch, validateRawdatafileMutation, validateRawdatafileMutationState } = useValidateRawdatafileReducer()
//   const { data: validateRawdatafileMutationData, loading: validateRawdatafileMutationLoading, error: validateRawdatafileMutationError } = validateRawdatafileMutationState



//   function useValidateRawfileCodebookPairReducer() {
//     // const studiesQuery = useStudiesQuery({})

//     const [validateRawfileCodebookPairMutation, validateRawfileCodebookPairMutationState] = useMutation(gql`
//           mutation validateRawfileCodebookPair($rawDatasetIDRF: ID!, $objectNameRF: ID!, $rawDatasetIDCB: ID!, $objectNameCB: ID!) {
//             validateRawfileCodebookPair(
//               rawDatasetIDRF: $rawDatasetIDRF
//               objectNameRF: $objectNameRF
//               rawDatasetIDCB: $rawDatasetIDCB
//               objectNameCB: $objectNameCB
//             ) {
//               isValid
//               message
//               mismatches {
//                 lineNumber
//                 fileA
//                 fileB
//               }
//             }
//           }`,
//       {
//         errorPolicy: 'none',
//         onCompleted: () => { rawDatasetDetailsRefetch() },
//       })

//     const initialState = { rawDatasetIDRF: rawDatasetID, objectNameRF: null, rawDatasetIDCB: rawDatasetID, objectNameCB: null }
//     const [validateRawfileCodebookPairState, validateRawfileCodebookPairDispatch] = useReducer((state, action) => {
//       const { type, payload } = action
//       switch (type) {
//         case 'objectNameRF':
//           const { objectNameRF } = payload
//           return { ...state, objectNameRF }
//         case 'objectNameCB':
//           const { objectNameCB } = payload
//           return { ...state, objectNameCB }
//       }
//       return state
//     }, initialState)
//     return { validateRawfileCodebookPairState, validateRawfileCodebookPairDispatch, validateRawfileCodebookPairMutation, validateRawfileCodebookPairMutationState }
//   }

//   const { validateRawfileCodebookPairState, validateRawfileCodebookPairDispatch, validateRawfileCodebookPairMutation, validateRawfileCodebookPairMutationState } = useValidateRawfileCodebookPairReducer()
//   const { data: validateRawfileCodebookPairMutationData, loading: validateRawfileCodebookPairMutationLoading, error: validateRawfileCodebookPairMutationError } = validateRawfileCodebookPairMutationState



//   function useFunnelLoadReducer() {
//     // const studiesQuery = useStudiesQuery({})
//     const const_image = `funnel-base`
//     const { allowedStudies, allowedSites } = getPermissionRoles()

//     const [funnelLoadMutation, funnelLoadMutationState] = useMutation(gql`
//           mutation submitTask($name: String!, $image: String!, $description: String!, $taskID: String!, $command: String!, $allowedStudies: [String], $allowedSites: [String]) {
//             submitTask(
//               name: $name
//               image: $image
//               description: $description
//               taskID: $taskID
//               command: $command
//               allowedStudies: $allowedStudies
//               allowedSites: $allowedSites
//             ) {
//               id
//             }
//           }`)

//     function setCommand(objectNameRF, objectNameCB, taskID) {
//       // const const_program = `python api/src/funnel/programmaticLoad.py`
//       const const_program = `TS_NODE_TRANSPILE_ONLY=true npx ts-node --project tsconfig.api.json api/src/funnel/programmaticLoad.ts`
//       const const_mode = `neo4j`
//       // const const_mode = `programmatic`
//       let const_permission_keys = ``
//       let const_permission_values = ``
//       for (let study of allowedStudies) {
//         const_permission_keys = const_permission_keys.concat(`,allowedStudies`)
//         const_permission_values = const_permission_values.concat(`,${study}`)
//       }
//       for (let site of allowedSites) {
//         const_permission_keys = const_permission_keys.concat(`,allowedSites`)
//         const_permission_values = const_permission_values.concat(`,${site}`)
//       }
//       const const_isdelall = `ndelall` // ydelall to delete all before load
//       const command = `${const_program} ${rawDatasetID} ${objectNameRF} ${objectNameCB} ${const_mode} ${const_permission_keys} ${const_permission_values} ${const_isdelall} ${taskID}`
//       return command
//     }

//     const initialState = { name: uuidv4(), description: rawDatasetID, taskID: uuidv4(), image: const_image, objectNameRF: null, objectNameCB: null, command: null, allowedStudies, allowedSites }
//     const [funnelLoadState, funnelLoadDispatch] = useReducer((state, action) => {
//       const { type, payload } = action
//       let objectNameRF, objectNameCB, command, taskID
//       switch (type) {
//         case 'taskID':
//           ({ objectNameRF } = state);
//           ({ objectNameCB } = state);
//           ({ taskID } = payload);
//           command = setCommand(objectNameRF, objectNameCB, taskID)
//           return { ...state, objectNameCB, command, taskID }
//         case 'objectNameRF':
//           ({ objectNameRF } = payload);
//           ({ objectNameCB } = state);
//           ({ taskID } = state);
//           command = setCommand(objectNameRF, objectNameCB, taskID)
//           return { ...state, objectNameRF, command, taskID }
//         case 'objectNameCB':
//           ({ objectNameRF } = state);
//           ({ objectNameCB } = payload);
//           ({ taskID } = state);
//           command = setCommand(objectNameRF, objectNameCB, taskID)
//           return { ...state, objectNameCB, command, taskID }
//       }
//       return state
//     }, initialState)
//     return { funnelLoadState, funnelLoadDispatch, funnelLoadMutation, funnelLoadMutationState }
//   }

//   const { funnelLoadState, funnelLoadDispatch, funnelLoadMutation, funnelLoadMutationState } = useFunnelLoadReducer()
//   const { data: funnelLoadMutationData, loading: funnelLoadMutationLoading, error: funnelLoadMutationError } = funnelLoadMutationState



//   function useFunnelConnectedDataReducer() {

//     const initialState = { codebook: null, rawDataset: null, codebookPair: null, rawDataPair: null }
//     const [funnelConnectedDataState, funnelConnectedDataDispatch] = useReducer((state, action) => {
//       const { type, payload } = action
//       switch (type) {
//         case 'codebook':
//           const { codebook } = payload
//           return { ...state, codebook }
//         case 'rawDataset':
//           const { rawDataset } = payload
//           return { ...state, rawDataset }
//         case 'codebookPair':
//           const { codebookPair } = payload
//           return { ...state, codebookPair }
//         case 'rawDataPair':
//           const { rawDataPair } = payload
//           return { ...state, rawDataPair }
//       }
//       return state
//     }, initialState)

//     const { data: rawDatasetDetailsData, loading: rawDatasetDetailsLoading, error: rawDatasetDetailsError, refetch: rawDatasetDetailsRefetch } = useQuery(gql`
//     query RawDatasetDetails($rawDatasetID: ID!) {
//         rawDatasets(where:
//           {rawDatasetID: $rawDatasetID}) {
//           rawDatasetID
//           codeBook {
//             bucketName
//             objectName
//             filename
//             pairedRawdataFile {
//               bucketName
//               objectName
//               filename
//             }
//           }
//           rawdataFile {
//             bucketName
//             objectName
//             filename
//             pairedCodebook {
//               bucketName
//               objectName
//               filename
//             }
//           }
//       }
//     }`,
//       {
//         variables: { rawDatasetID: rawDatasetID },
//         fetchPolicy: 'network-only',
//         onCompleted: (data) => {
//           let codebook = null
//           let rawDataset = null
//           let codebookPair = null
//           let rawDataPair = null

//           codebook = (data) && (data.rawDatasets[0]) && (data.rawDatasets[0].codeBook) && (data.rawDatasets[0].codeBook.objectName) ? data.rawDatasets[0].codeBook.objectName : null
//           funnelConnectedDataDispatch({ type: 'codebook', payload: { codebook } })

//           rawDataset = (data) && (data.rawDatasets[0]) && (data.rawDatasets[0].rawdataFile) && (data.rawDatasets[0].rawdataFile.objectName) ? data.rawDatasets[0].rawdataFile.objectName : null
//           funnelConnectedDataDispatch({ type: 'rawDataset', payload: { rawDataset } })

//           codebookPair = (data) && (data.rawDatasets[0]) && (data.rawDatasets[0].codeBook) && (data.rawDatasets[0].codeBook.pairedRawdataFile) && (data.rawDatasets[0].codeBook.pairedRawdataFile.objectName) ? data.rawDatasets[0].codeBook.pairedRawdataFile.objectName : null
//           funnelConnectedDataDispatch({ type: 'codebookPair', payload: { codebookPair } })

//           rawDataPair = (data) && (data.rawDatasets[0]) && (data.rawDatasets[0].rawdataFile) && (data.rawDatasets[0].rawdataFile.pairedCodebook) && (data.rawDatasets[0].rawdataFile.pairedCodebook.objectName) ? data.rawDatasets[0].rawdataFile.pairedCodebook.objectName : null
//           funnelConnectedDataDispatch({ type: 'rawDataPair', payload: { rawDataPair } })

//           funnelLoadDispatch({ type: 'objectNameCB', payload: { objectNameCB: codebook } });
//           funnelLoadDispatch({ type: 'objectNameRF', payload: { objectNameRF: rawDataset } });

//           validateRawfileCodebookPairDispatch({ type: 'objectNameCB', payload: { objectNameCB: codebook } }); validateRawfileCodebookPairDispatch({ type: 'objectNameRF', payload: { objectNameRF: rawDataset } });

//         }
//       })

//     return { funnelConnectedDataState, funnelConnectedDataDispatch, rawDatasetDetailsData, rawDatasetDetailsLoading, rawDatasetDetailsError, rawDatasetDetailsRefetch }
//   }

//   const { funnelConnectedDataState, funnelConnectedDataDispatch, rawDatasetDetailsData, rawDatasetDetailsLoading, rawDatasetDetailsError, rawDatasetDetailsRefetch } = useFunnelConnectedDataReducer()


//   const { data, loading, error } = useQuery(gql`
//   query MinioUploads($bucketName: ID!) {
//       minioUploads(where: {bucketName: $bucketName}) {
//           bucketName
//           objectName
//           filename
//       }
//   }`,
//     { variables: { bucketName }, fetchPolicy: 'network-only' })

//   const [disconnectCodebookMutation, disconnectCodebookState] = useMutation(gql`
//     mutation disconnectCodebook($rawDatasetID: ID!, $objectName: ID!) {
//       updateRawDatasets(
//         where: { rawDatasetID: $rawDatasetID }
//         disconnect: { codeBook: {where: {node: { objectName: $objectName }}}}
//       ) {
//         info {
//           nodesDeleted
//           relationshipsDeleted
//         }
//       }
//   }`)

//   const [disconnectRawdataFileMutation, disconnectRawdataFileState] = useMutation(gql`
//     mutation disconnectRawdataFile($rawDatasetID: ID!, $objectName: ID!) {
//       updateRawDatasets(
//         where: { rawDatasetID: $rawDatasetID }
//         disconnect: { rawdataFile: {where: {node: { objectName: $objectName }}}}
//       ) {
//         info {
//           nodesDeleted
//           relationshipsDeleted
//         }
//       }
//   }`)

//   const [disconnectPairedCodebookMutation, disconnectPairedCodebookState] = useMutation(gql`
//     mutation disconnectPairedCodebook($objectNameRF: ID!, $objectNameCB: ID!) {
//       updateMinioUploads(
//         where: { objectName: $objectNameCB }
//         disconnect: { pairedRawdataFile: {where: {node: { objectName: $objectNameRF }}}}
//       ) {
//         info {
//           nodesDeleted
//           relationshipsDeleted
//         }
//       }
//   }`)

//   const [disconnectPairedRawdataFileMutation, disconnectCodebookPairState] = useMutation(gql`
//   mutation disconnectPairedRawdataFile($objectNameRF: ID!, $objectNameCB: ID!) {
//     updateMinioUploads(
//       where: { objectName: $objectNameRF }
//       disconnect: { pairedCodebook: {where: {node: { objectName: $objectNameCB }}}}
//     ) {
//       info {
//         nodesDeleted
//         relationshipsDeleted
//       }
//     }
// }`)

//   if (!data?.minioUploads) {
//     return null
//   }

//   const { minioUploads } = data
//   const dropdownOptions = minioUploads.map(({ filename, objectName }) => ({
//     value: objectName, text: filename, description: objectName
//   }))

//   return (
//     <>
//       <Segment>
//         {/* TODO: a global Message component content object to hold all text in one place */}
//         <Message>
//           Steps: validate codebook, validate raw data, submit to make available to admins
//         </Message>
//         <Divider horizontal content='Codebook' />
//         <Dropdown
//           placeholder='Select codebook file'
//           fluid search selection
//           options={dropdownOptions}
//           // This will be the minioUpload.objectName from above
//           onChange={(e, { value }) => { validateCodebookDispatch({ type: 'setObjectName', payload: { objectName: value } }) }}
//         />
//         <Button fluid content='Validate Codebook' onClick={() => { validateCodebookMutation({ variables: validateCodebookState }) }} />
//         {/* TODO: add checker to disable buttons in order of validation (e.g. raw data validation only after codebook), can be checked from RawDataset  */}
//         {
//           (validateCodebookMutationData) && (validateCodebookMutationData.validateCodebook) && (validateCodebookMutationData.validateCodebook.message) &&
//           <Message>{validateCodebookMutationData.validateCodebook.message}</Message>
//         }
//         <Divider horizontal content='Raw Data' />
//         <Dropdown
//           placeholder='Select raw data file'
//           fluid search selection
//           options={dropdownOptions}
//           onChange={(e, { value }) => { validateRawdatafileDispatch({ type: 'setObjectName', payload: { objectName: value } }) }}
//         />
//         <Button fluid content='Validate Raw Data' onClick={() => { validateRawdatafileMutation({ variables: validateRawdatafileState }) }} />
//         {
//           (validateRawdatafileMutationData) && (validateRawdatafileMutationData.validateRawdatafile) && (validateRawdatafileMutationData.validateRawdatafile.message) &&
//           <Message>{validateRawdatafileMutationData.validateRawdatafile.message}</Message>
//         }
//         <Divider horizontal content='Validate rawdata codebook pair' />
//         <Button disabled={funnelConnectedDataState && !(funnelConnectedDataState.codebook && funnelConnectedDataState.rawDataset)} fluid content='Validate rawdata codebook pair' onClick={() => { validateRawfileCodebookPairMutation({ variables: validateRawfileCodebookPairState }) }} />
//         {
//           (validateRawfileCodebookPairMutationData) && (validateRawfileCodebookPairMutationData.validateRawfileCodebookPair) && (validateRawfileCodebookPairMutationData.validateRawfileCodebookPair.message) &&
//           <Message>{validateRawfileCodebookPairMutationData.validateRawfileCodebookPair.message}</Message>
//         }
//         <Divider horizontal />
//         <Button disabled={funnelConnectedDataState && !(funnelConnectedDataState.codebook && funnelConnectedDataState.rawDataset && funnelConnectedDataState.codebookPair && funnelConnectedDataState.rawDataPair)} fluid content='Submit' onClick={async () => { await funnelLoadDispatch({ type: 'taskID', payload: { taskID: uuidv4() } }); funnelLoadMutation({ variables: funnelLoadState }) }} />
//         {

//           <Message>
//             codebook: {funnelConnectedDataState && funnelConnectedDataState.codebook ?
//               <Popup content='Click to unlink codebook'
//                 trigger={<Button onClick={() => { disconnectCodebookMutation({ variables: { rawDatasetID, objectName: funnelConnectedDataState.codebook } }); rawDatasetDetailsRefetch() }}>{funnelConnectedDataState.codebook}</Button>} />
//               : 'No file'}
//             <br />

//             rawdata: {funnelConnectedDataState && funnelConnectedDataState.rawDataset ?
//               <Popup content='Click to unlink rawdata'
//                 trigger={<Button onClick={() => { disconnectRawdataFileMutation({ variables: { rawDatasetID, objectName: funnelConnectedDataState.rawDataset } }); rawDatasetDetailsRefetch() }}>{funnelConnectedDataState.rawDataset}</Button>} />
//               : 'No file'}
//             <br />

//             codebook pair: {funnelConnectedDataState && funnelConnectedDataState.codebookPair ?
//               <Popup content='Click to unlink codebook pair'
//                 trigger={<Button onClick={() => { disconnectPairedCodebookMutation({ variables: { objectNameRF: funnelConnectedDataState.codebookPair, objectNameCB: funnelConnectedDataState.codebook } }); rawDatasetDetailsRefetch() }}>{funnelConnectedDataState.codebookPair}</Button>} />
//               : 'No file'}
//             <br />

//             rawdata pair: {funnelConnectedDataState && funnelConnectedDataState.rawDataPair ?
//               <Popup content='Click to unlink rawdata pair'
//                 trigger={<Button onClick={() => { disconnectPairedRawdataFileMutation({ variables: { objectNameRF: funnelConnectedDataState.rawDataset, objectNameCB: funnelConnectedDataState.rawDataPair } }); rawDatasetDetailsRefetch() }}>{funnelConnectedDataState.rawDataPair}</Button>} />
//               : 'No file'}
//             <br />

//           </Message>
//         }
//       </Segment>
//     </>
//   )
// }

export default function RunDetails() {

  const { runID } = useParams()

  const { data, loading, error, refetch } = useQuery(gql`
	query RunDetails($runID: ID!) {
      runs(where: {runID: $runID}) {
        name
        description
		createdOn
		createdBy {
			keycloakUserID
			email
			name
		}
		datasets {
			datasetID
			name
		}
        # files {
        #   bucketName
        #   objectName
        #   filename
        # }

        # funnelTasks {
        #   creationTime
        #   description
        #   id
        #   name
        #   state
        #   fromDataset {
        #     datasetID
        #     name
        #     description
        #   }
        #   generatedCuratedDataset {
        #     curatedDatasetID
        #     name
        #     exportTask {
        #       taskID
        #       generatedExport {
        #         bucketName
        #         objectName
        #         filename
        #         presignedURL
        #       }
        #     }
        #     fieldDefinitions {
        #       dataVariableFieldDefinitionID
        #     }
        #     dataVariablesAggregate {
        #       count
        #     }
        #     fieldDefinitionsAggregate {
        #       count
        #     }
        #   }
        # }
        # fromStudy {
        #   studyID
        #   shortName
        #   __typename
        # }
        # studySite {
        #   city
        #   country
        # }
      }
    }`,
    { variables: { runID: runID } })

  // const [funnelTaskExportCuratedDatasetMutation, funnelTaskExportCuratedDatasetState] = useMutation(gql`
  //   mutation funnelTaskExportCuratedDataset($taskID: ID!, $curatedDatasetID: ID!, $allowedStudies: [String], $allowedSites: [String]) {
  //   funnelTaskExportCuratedDataset(
  //     taskID: $taskID
  //     curatedDatasetID: $curatedDatasetID
  //     allowedStudies: $allowedStudies
  //     allowedSites: $allowedSites
  //   ) {
  //     creationTime
  //     taskID
  //     name
  //     state
  //   }
  // }`,
  //   {
  //     errorPolicy: 'none',
  //   })

  if (!data?.runs) {
    return null
  }

  // const { allowedStudies, allowedSites } = getPermissionRoles()

  const [{ name, description, createdBy, status, datasets}]: [{ runID: String, name: String, description: String, createdBy: Object, status: String, datasets: Object }] = data.runs

  return (
    <>
      <Grid>
        <Grid.Column width={16}>
          <Message>
            <Divider horizontal content='Run Details' />
            <Header content={name} subheader={createdBy.email} />
			<Message content={description} />

            <Divider horizontal />
            <Label onClick={() => { refetch() }}>
              Run
              {/* <Label.Detail content={fromStudy.shortName} />
              {!!studySite && <Label.Detail content={`${studySite.city} (${studySite.country})`} />} */}
            </Label>
			<List.Description>
					<Divider/>
						{
							(datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
						}
					</List.Description>
            {/* <AddTimePointToDataset /> */}

          </Message>
		  <Segment basic>
			<Button fluid icon='paper plane' color='violet' size='large' onClick={() => console.log("submit run")} />

		</Segment>
        </Grid.Column>


        {/* <Grid.Column width={16}>
          <Segment>
            <Divider horizontal content='Funnel Tasks' />
            <Segment>
              <List>
                {funnelTasks &&
                  funnelTasks.map((funnelTask: Task) => {

                    const exportTasks = funnelTask?.generatedCuratedDataset ?
                      funnelTask?.generatedCuratedDataset?.exportTask : []

                    return (<List.Item key={`List.Item.${funnelTask.id}`}>
                      <Button
                        disabled={funnelTask.state !== 'COMPLETE'}
                        onClick={() => { funnelTaskExportCuratedDatasetMutation({ variables: { taskID: uuidv4(), curatedDatasetID: funnelTask?.generatedCuratedDataset?.curatedDatasetID, allowedStudies, allowedSites } }) }}
                        key={`Button.${funnelTask.id}`}
                        content={
                          `
                                    id: ${funnelTask.id}
                                    |state: ${funnelTask.state}
                                    |fdCount: ${funnelTask?.generatedCuratedDataset?.fieldDefinitionsAggregate ? funnelTask?.generatedCuratedDataset?.fieldDefinitionsAggregate?.count : 0}
                                    |dvCount: ${funnelTask?.generatedCuratedDataset?.dataVariablesAggregate ? funnelTask?.generatedCuratedDataset?.dataVariablesAggregate?.count : 0}`
                        }
                      />
                      {exportTasks.map((exportTask: Task) => {
                        const linkURL = exportTask?.generatedExport?.presignedURL
                        const linkText = exportTask?.generatedExport?.filename

                        // console.log(linkText)
                        // console.log(linkURL)

                        return <Label><a href={linkURL} target='_blank'>{linkText}</a></Label>
                      })}
                    </List.Item>
                    )
                  })}
              </List>
            </Segment>
          </Segment>
        </Grid.Column> */}

        {/* <Grid.Column width={16}>
          <Segment>
            <Divider horizontal content='If transformation is successful' />
            <Segment>
              <>
                <DownloadDataVariables data={data.dataVariables} />
                <DataVariableTable data={[]} />
              </>
            </Segment>
          </Segment>
        </Grid.Column> */}
      </Grid>
    </>
  )
}