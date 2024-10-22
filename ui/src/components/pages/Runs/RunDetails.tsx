import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState, useReducer, useEffect } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Icon, Message, List, Divider, Loader, Grid, Dropdown, ButtonGroup, Image, Popup, TextArea, MessageContent, Dimmer } from 'semantic-ui-react'
import { Route, Routes, useParams } from 'react-router-dom'
import MinioBucket from '../../common/minio'
import { v4 as uuidv4 } from 'uuid'
import { useLocation } from 'react-router-dom'
import tigerdbLogo from '../../logos/tigerdb.png'
import Logs from './Logs'; // Assuming Logs component is in the same folder
import SegmentPlaceholder from '../../common/SegmentPlaceholder'

import useSubmitRunMutation from '../../../hooks/useSubmitRunMutation'
import useRunDetailsQuery from '../../../hooks/useRunDetailsQuery'
import useUpdateRunParametersMutation from '../../../hooks/useUpdateRunParametersMutation'

export default function RunDetails() {
  // const [{ name, description, createdBy, createdOn, datasets }] = data.runs;
  const initialParameters = {
    outPrefix: 'TIGERdb',
    localMinpValue: 0.001,
    pDepth: 1000,
    globalConvergenceCutoff: 1,
    simulationDepth: 1000,
    kmerMinDepth: 3,
    localMinOVE: 10,
    allAAInterchangeable: 1,
  };

  const { runID } = useParams()
  // const { parameters, setParameters, loading: saveLoading, error: saveError, updatedRun } = useUpdateRunParameters({runID, parameters: initialParameters});
  const {
    parameters,
    setParameters,
    updatedRun,
    loading: saveParametersLoading,
    error: saveParametersError,
  } = useUpdateRunParametersMutation({ runID, initialParameters })
  
	const { run, loading: runDetailsLoading, error: runDetailsError, refetch } = useRunDetailsQuery({ runID })
  const [submitRun, { data: submitRunData, loading: submitRunLoading,  error: submitRunError }, submitted] = useSubmitRunMutation();

	if (runDetailsLoading) {
		return (
		  <Segment placeholder textAlign='center'>
		  {/* <Icon size='massive' name='react' loading /> */}
			<Dimmer active inverted>
				<Loader size='large'>Loading...</Loader>
			</Dimmer>
		  </Segment>
		)
	}

	if (!run) {
		return (
			<SegmentPlaceholder text='Not found!' icon='exclamation triangle' />
		)
	}
  console.log(run)
  const { name, description, createdBy, createdOn, processedDatasets, wesID, status } = run;

	const createdOnDate = new Date(createdOn).toLocaleString('en-US', {
		weekday: 'long',  // "Sunday"
		year: 'numeric',  // "2024"
		month: 'short',   // "Oct"
		day: 'numeric',   // "2"
		hour: 'numeric',  // "4"
		minute: 'numeric', // "41"
		hour12: true,     // 12-hour format with AM/PM
	})

  const colorStatus = status == 'submitted' ? 'goldenrod' : status == "completed" ? 'green' : status == 'failed' ? 'red' : 'orange'
	const iconStatus = status === 'submitted' ? 'circle notch' : status === 'completed' ? 'check circle' : status === 'failed' ? 'times circle' : 'circle outline';

  // const location = useLocation()
	// useEffect(() => {
	// 	refetch()
	// }, [location.key])

  return (
    <>
      <Grid>
        <Grid.Column width={16}>
        <ButtonGroup fluid size='huge' attached='top'>
          {/* run-related buttons, cancel, download results */}

          <Button content='REFRESH' icon='refresh' color='black' onClick={() => { refetch() }} loading={runDetailsLoading}
            /> 

            {/* <ButtonOr /> */}
            <Button disabled content='SHARE' icon='users' color='facebook' onClick={() => { refetch() }} loading={runDetailsLoading}
              /> 
              {
                !!status && status === 'submitted' ?
                // cancel run if submitted
                <Button disabled content='CANCEL' icon='cancel' color='red' onClick={() => { refetch() }} loading={runDetailsLoading}/>
                : status === 'completed' ? 
                //  download results if completed
                <Button content='DOWNLOAD' icon='download' color='violet' onClick={() => { refetch() }} loading={runDetailsLoading}/>
                : status === 'failed' ?
                // logs if running
                <Button content='FAILED RUN LOGS' icon='cloud download' color='red' onClick={() => { refetch() }} loading={runDetailsLoading}/> 
                : 
                null
              }

            </ButtonGroup>

        <Message color={'grey'}>
				<Divider horizontal content='Run Details'/>
					<Message.Header content={name}/>
					<List size='large'>
						<List.Item icon='calendar' content={`${createdOnDate}`} />
						<List.Item icon='user' content={`${createdBy.email}`} />
						{/* <Message.Item content={`Public: ${isPublic}`} /> */}
						{/* <Message.Item content={`Shared with: ${sharedWith}`} /> */}
            <List.Item icon='info circle' content={`runID: ${runID}`} />

            <List.Item icon='cog' content={wesID ? `wesID: ${wesID}` : "Job ID available after submission"} />
            <List.Item  style={{color: colorStatus}} >
              <List.Icon name={iconStatus} loading={status === 'submitted' ? true : false} />
              <List.Content>{`${status.toUpperCase()}`}</List.Content>
            </List.Item>
					</List>
					<Message content={description} />
					<Divider horizontal />

          <List.Description>
					<Divider horizontal content='Data'/>
						{
							// (datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
              (processedDatasets.length > 0) ? processedDatasets.map(processedDataset => 
                <Button key={'button.' + processedDataset.objectName} as='div' labelPosition='right'>
                <Button basic color='green'>
                {processedDataset.filename}
                </Button>

                <Label 
                    as='a'
                    download={processedDataset.filename}
                    href={processedDataset.presignedURL}
                    // compact 
                    pointing='left' 
                    color='green' 
                    icon='cloud download' 
                />
            </Button>
              ) : null

						}
					</List.Description>
				</Message>
        { !!status && status === 'submitted' ?
        <Segment placeholder>
        <Image size='large' src={tigerdbLogo} centered />
          <Dimmer active inverted>
            {/* <Loader size='large'>Running GLIPH2...</Loader> */}
            {/* Logs Component */}
            <Logs />
          </Dimmer>
        </Segment> :
          null
        }

		  <Message color='grey'>
      <Header as={'h4'} icon>
            <Icon name='paper plane' />
              RUN PARAMETERS
          </Header>
        <Message>
        <Form>
            <Form.Field 
              control={Input}
              label='Results Prefix'
              placeholder='TIGERdb'
              value={parameters.outPrefix}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, outPrefix: value }))}
              />
            <Segment color='violet'>
            <Divider horizontal content='CDR3 INPUT'/>

            <Form.Field
              control={Dropdown}
              label='Project'
              placeholder='Select Project'
              fluid
              search
              selection
              // options={projectOptions}
              // loading={projectsLoading}
              // onChange={(_e, { value }) => {
              //   setProjectID(value) 
              //   setDatasetIDs([])
              // }}
              // value={projectID}
            />
            {/* {projectsError && <Message error content="Error loading projects" />} */}
            <Form.Field
              control={Dropdown}
              label='CDR File'
              placeholder='Select Datasets'
              fluid
              multiple
              search
              selection
              // options={datasetOptions}
              // loading={datasetsLoading}
              // onChange={(_e, { value }) => setDatasetIDs(value)}
              // value={datasetIDs}
              // disabled={!projectID} // Disable until a project is selected
            />
            {/* {datasetsError && <Message error content="Error loading datasets" />} */}
            <Form.Field
              control={Dropdown}
              label='Uploads'
              placeholder='Select Uploaded Files'
              fluid
              multiple
              search
              selection
              // options={minioUploadOptions}
              // loading={minioUploadsLoading}
              // onChange={(_e, { value }) => setMinioUploads(value)}
              value={processedDatasets}
              // disabled={!(datasetIDs.length > 0) || !projectID} // Disable until a dataset is selected
            />
            {/* {minioUploadsError && <Message error content="Error loading uploads" />} */}
            </Segment>
            <Form.Field 
              control={Dropdown}
              label='HLA File'
              placeholder='hla_file.txt'
              selection
              fluid

            />
            <Segment color='violet'>
            <Divider horizontal content='References'/>

            <Form.Field 
              control={Dropdown}
              label='Reference File'
              placeholder='ref_CD48_v2.0.txt'
              selection
              fluid
              search
            />
            <Form.Field 
              control={Dropdown}
              label='V Usage Frequency File'
              placeholder='ref_V_CD48_v2.0.txt'
              selection
              fluid
              search
            />
            <Form.Field 
              control={Dropdown}
              label='CDR3 Length Frequency File'
              placeholder='ref_L_CD48_v2.0.txt'
              search
              selection
              fluid
            />
            </Segment>
            {/* grid with two columns around these: */}
            <Grid columns={2}>
            <Grid.Column>
            <Form.Field 
              control={Input}
              label='Local Min P-Value'
              placeholder='0.001'
              value={parameters.localMinpValue}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, localMinpValue: parseFloat(value) }))}
              type='number'
              step='0.001' // Allows decimal numbers
            />
            <Form.Field 
              control={Input}
              label='P Depth'
              placeholder='1000'
              value={parameters.pDepth}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, pDepth: parseInt(value, 10) }))}
              type='number'
              step='100' 
            />
            <Form.Field 
              control={Input}
              label='Global Convergence Cutoff'
              placeholder='1'
              value={parameters.globalConvergenceCutoff}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, globalConvergenceCutoff: parseInt(value, 10) }))}
              type='number'
              step='1' 
            />
            <Form.Field 
              control={Input}
              label='Simulation Depth'
              placeholder='1000'
              value={parameters.simulationDepth}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, simulationDepth: parseInt(value, 10) }))}
              type='number'
              step='100'
            />
            </Grid.Column>
            <Grid.Column>
            <Form.Field 
              control={Input}
              label='Kmer Min Depth'
              placeholder='3'
              value={parameters.kmerMinDepth}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, kmerMinDepth: parseInt(value, 10) }))}
              type='number'
              step='1'

            />
            <Form.Field 
              control={Input}
              label='Local Min OVE'
              placeholder='10'
              value={parameters.localMinOVE}
              onChange={(e, { value }) => setParameters(prev => ({ ...prev, localMinOVE: parseInt(value, 10) }))}
              type='number'
              step='1'
            />
            <Form.Field 
              control={Dropdown}
              search
              label='Algorithm'
              // options: [gliph1 , gliph2
              options={[{key: 'gliph1', text: 'GLIPH1', value: 'GLIPH1'}, {key: 'gliph2', text: 'GLIPH2', value: 'GLIPH2'}]}
              placeholder='GLIPH2'
              value='GLIPH2'
              fluid
              selection
              disabled

            />
            <Form.Field 
              control={Dropdown}
              label='All AA Interchangeable'
              placeholder='1'
              options={[{key: '1', text: 'TRUE', value: 1}, {key: '0', text: 'FALSE', value: 0}]}
              selection 
              fluid
              value={parameters.allAAInterchangeable}
              onChange={(_, { value }) => setParameters(prev => ({ ...prev, allAAInterchangeable: value }))}

            />
              </Grid.Column>
            </Grid>
            {saveParametersLoading && <Message info content='Updating parameters...' />}
            {saveParametersError && <Message error content={`Error updating parameters: ${saveParametersError.message}`} />}
          </Form>
          </Message>
          <Divider horizontal />
        <Button fluid size='massive' color='violet' animated='vertical' 
          disabled={!(status === 'pending')} 
          onClick={() => { submitRun({variables: {runID: runID}}).then(() => refetch()) }}
          content={status === 'pending' ? 'SUBMIT RUN' : 'RUN SUBMITTED'}
        />

      </Message >

        </Grid.Column>
      </Grid>
    </>
  )
}