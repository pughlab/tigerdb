import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Segment, Menu, Form, Button, Container, List, Message, Divider, Icon, Grid, Modal } from 'semantic-ui-react'


import useRawDatasetDetailsQuery from '../../../hooks/useRawDatasetDetailsQuery'
import SegmentPlaceholder, {ContainerSegmentPlaceholder} from '../../common/SegmentPlaceholder'


function MinioPresignedURLDownloadButton ({presignedURL, filename}) {
    return (
        <Button content='Download'
            onClick={() => {
                fetch(presignedURL, {method: 'GET'})
                    .then(response => response.blob())
                    .then(blob => {
                        const a = document.createElement('a');
                        a.href = window.URL.createObjectURL(blob);
                        a.download = filename; //file renaming doesnt work
                        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                        a.click(); a.remove();  //afterwards we remove the element again
                    });
            }}
            
        />
    )
}

function MinioUploadSegment ({minioUpload}) {
    const {filename, presignedURL} = minioUpload
    return (
        <SegmentPlaceholder text={filename} icon='file'>
            <MinioPresignedURLDownloadButton presignedURL={presignedURL} filename={filename} />
        </SegmentPlaceholder>
    )
}

function LabelDatasetTimeline () {
    return (
        <Modal trigger={<Button content='Label time point' />}>
            <Modal.Content>
            <Form>
                <Form.Group>
                    <Form.Field width={6}>
                        <label>Study</label>
                        <Form.Dropdown selection
                            placeholder='Select a study'
                            options={[{text: 'ELICIT', value: 'ELICIT'}, {text: 'CHILD', value: 'CHILD'}, {text: 'VITAL', value: 'VITAL'}]}
                        />
                    </Form.Field>
                    <Form.Field width={10}>
                        <label>Time points</label>
                        <Form.Dropdown selection
                        options={[
                            {text: '0 year + 0 weeks', value: '1'},
                            {text: '1 year + 0 weeks', value: '2'},
                            {text: '1 year + 4 weeks', value: '3'},
                        ]}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button content='Save' />
                <Button content='Cancel' />
            </Modal.Actions>
        </Modal>
    )
}

// generate graphql typescript types not working
export default function RawDatasetDetails () {
    const {rawDatasetID} = useParams()
    const [rawDataset, loading, error] = useRawDatasetDetailsQuery(rawDatasetID)
    if (loading) {
        <ContainerSegmentPlaceholder text='Loading' icon='compass loading' />
    }
    if (!rawDataset) {
        return <ContainerSegmentPlaceholder text='Not found' />
    }
    const {name, description, rawDataFile, codebookFile} = rawDataset
  return (
      <>
    <Container as={Segment}>
        <Divider horizontal content='Details' />
        <Message>
            <Message.Header>{name}</Message.Header>
            <Message.Content>
            {description}
            <Divider horizontal />  
            <LabelDatasetTimeline /> 
            <Button content='Approve for curation and download' />             
            </Message.Content>
        </Message>
        
        <Divider horizontal content='Raw files' />
        <Grid columns={2}>
            <Grid.Column>
                <MinioUploadSegment minioUpload={rawDataFile} />
            </Grid.Column>
            <Grid.Column>
                <MinioUploadSegment minioUpload={codebookFile} />
            </Grid.Column>
        </Grid>


    </Container>
            <Divider horizontal content='Curated view' />
            <Message content='curatedDataset (parsed rawDataset) from db here' />
            </>
  )
}