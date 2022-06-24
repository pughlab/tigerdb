import { useState, useReducer, useCallback, useEffect } from 'react'
import * as React from 'react'
import { Button, Divider, Icon, Grid, Modal, Message, Segment, Step, Statistic, List, Label, Form, Input, TextArea, Popup, Header } from 'semantic-ui-react'
import useCSVParser, { ParserState } from '../../../hooks/useCSVParser'
import useRawDatasetValidator from '../../../hooks/useRawDatasetValidator'

import UploadPreviewTable from '../../tables/uploadPreview'
import SegmentPlaceholder from '../../common/SegmentPlaceholder'
import UploadDatasetSubmitModal from './UploadDatasetSubmitModal'
import CodebookDisplay from './CodebookDisplay'
import UploadDatasetSummary from './UploadDatasetSummary'
import DropzoneFileLabel from '../../common/DropzoneFileLabel'

export default function UploadDatasetTables () {
    const rawDatasetParser = useCSVParser({header: true})
    const [rawParserState, rawParserDispatch, rawParserDropzone] = rawDatasetParser
    const codebookParser = useCSVParser({header: false})
    const [codebookParserState, codebookParserDispatch, codebookParserDropzone] = codebookParser
    const [validatorState, validatorDispatch, validator] = useRawDatasetValidator(rawParserState.data, codebookParserState.data)
    // console.log(validatorState)
    return (
    <>
        <Message>
            <List ordered>
                <List.Item>
                    <List.Header content='Raw dataset file' />
                    <List.Description>
                        {!rawParserState.file ? "Click the 'Raw CSV' button below to upload a file" :
                            <DropzoneFileLabel {...{parserState: rawParserState, parserDispatch: rawParserDispatch}} />
                        }
                    </List.Description>
                </List.Item>
                <List.Item>
                    <List.Header content='Dataset codebook file' />
                    <List.Description>
                    {!codebookParserState.file ? "Click the 'Codebook' button below to upload a file" :
                        <DropzoneFileLabel {...{parserState: codebookParserState, parserDispatch: codebookParserDispatch}} />    
                    }
                    </List.Description>
                </List.Item>
                <List.Item>
                    <List.Header content='Preliminary validation' />
                    <List.Description content={'Ensure your dataset and codebook match'} />
                    {
                        !!validatorState.summary && (
                            ({variables: {matched, missingCodes, missingVars}}) => (
                                <Label.Group size='large'>
                                    <Label basic color='green' content={matched.length} detail={'Variables matched to codes'} />
                                    <Label basic color='red' content={missingCodes.length} detail={'Missing codes'} />
                                    <Label basic color='red' content={missingVars.length} detail={'Missing variables'} />
                                </Label.Group>
                            )
                        )(validatorState.summary)
                    }
                </List.Item>
                <List.Item>
                    <List.Header content='Submit raw dataset for curation' />
                    <List.Description content={'This will save your dataset data to be approved by an admin'} />
                </List.Item>
            </List>
            <Divider horizontal content='Upload dataset' />
            <Step.Group fluid>
                <Step {... rawParserDropzone.getRootProps()} completed={rawParserState.loaded}>
                    <Icon name='upload' />            
                    <Step.Content>
                        <Step.Title>Raw CSV</Step.Title>
                        <Step.Description>Upload your raw CSV dataset</Step.Description>
                        <input {... rawParserDropzone.getInputProps()} />
                    </Step.Content>
                </Step>
                <Step {... codebookParserDropzone.getRootProps()} completed={codebookParserState.loaded}>
                    <Icon name='upload' />            
                    <Step.Content>
                        <Step.Title>Codebook</Step.Title>
                        <Step.Description>Upload your dataset codebook</Step.Description>
                        <input {... codebookParserDropzone.getInputProps()} />
                    </Step.Content>
                </Step>
                <Popup wide flowing
                    trigger={
                        <Step icon='eye' title='Validate' description='Validate dataset against code book'
                            disabled={!(rawParserState.loaded && codebookParserState.loaded)}
                        />
                    }
                    content={'Use the table and panel below to inspect your raw dataset'}
                />
                <UploadDatasetSubmitModal {...{rawParserState, codebookParserState}} />
            </Step.Group>
        </Message>
        <Divider />
        <Grid divided>
            <Grid.Column width={12}>
                {rawParserState.loaded ?
                    <UploadPreviewTable {...{data: rawParserState.data, columns: rawParserState.columns, header: true, validator}} />
                    : <SegmentPlaceholder text='Upload the raw dataset .csv' />}
            </Grid.Column>
            <Grid.Column width={4}>
                {codebookParserState.loaded ? <CodebookDisplay {...{codebookParserState}} /> : <SegmentPlaceholder text='Upload the related codebook' />}
                <Divider horizontal />
                <UploadDatasetSummary {...{validatorState}} />
            </Grid.Column>
        </Grid>
        
    </>
  ) 
}