import React, { useCallback, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Message, Divider, Header, Table, Icon, List, Popup, Segment, Form, Button, Modal, Grid, Label } from 'semantic-ui-react'
import SegmentPlaceholder from '../SegmentPlaceholder'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { gql, useQuery, useMutation } from '@apollo/client'
import useMinioUploadMutation from '../../../hooks/useMinioUploadMutation'
import useCreateCuratedAnnotationFromDatasetMutation from '../../../hooks/useCreateCuratedAnnotationFromDatasetMutation'
import useCreateCuratedDatasetFromDatasetMutation from '../../../hooks/useCreateCuratedDatasetFromDatasetMutation'
import useIsAdmin from '../../../hooks/useIsAdmin'

import { MinioUpload } from '../../../types/types'
import FileHeaderSelection from '../table'
import { select } from 'd3'
// import { getPermissionRoles } from '../../../state/appContext'

// The header options to display in the dropdown for each column
const headerOptions = [
    // { key: 'locus', text: 'Locus', value: 'locus' },
    { key: 'cdr3b', text: 'CDR3b', value: 'cdr3b' },
    { key: 'trbv', text: 'TRBV', value: 'trbv' },
    { key: 'trbj', text: 'TRBJ', value: 'trbj' },
    { key: 'cdr3a', text: 'CDR3a', value: 'cdr3a' },
    { key: 'subject:condition', text: 'Subject:Condition', value: 'subject:condition' },
    { key: 'count', text: 'Clone Count', value: 'count' },
    // { key: 'mhc', text: 'MHC', value: 'mhc' },
    // { key: 'mhcClass', text: 'MHC Class', value: 'mhcClass' },
    // { key: 'epitope', text: 'Epitope', value: 'epitope' },
    // { key: 'epitopeGene', text: 'Epitope Gene', value: 'epitopeGene' },
    // { key: 'epitopeSpecies', text: 'Epitope Species', value: 'epitopeSpecies' },
    // { key: 'reference', text: 'Reference', value: 'reference' }
]


export default function MinioBucket({ datasetID } : { datasetID:String }) {
    const bucketName = `dataset-${datasetID}`
    const { data, loading, error, refetch } = useQuery(gql`
        query MinioUploads($bucketName: ID!) {
            minioUploads(where: {bucketName: $bucketName}) {
                bucketName
                objectName
                filename
                presignedURL
                processedDataset {
                    bucketName
                    objectName
                    filename
                    createdAt
                    selectedDelimiter
                    # curatedDataset {
                    #     curatedDatasetID
                    # }
                    # presignedURL
                }
                # rawdataFileRawDataset {
                #     datasetID
                # }
            }
        }`,
        { variables: { bucketName }, fetchPolicy: 'network-only' })

    function MinioUploadModal({ datasetID } : { datasetID:String }) {
        const bucketName = `dataset-${datasetID}`
        // const {allowedStudies, allowedSites} = getPermissionRoles()

        const { state: uploadState, dispatch: uploadDispatch, mutation: uploadMutation, loading: uploadLoading, error: uploadError } = useMinioUploadMutation(refetch)
        const onDrop = useCallback((files: FileWithPath[]) => {
            uploadMutation({
                variables: {
                    datasetID: datasetID,
                    bucketName: bucketName,
                    file: files[0]
                }
            })
        }, [])
        const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
        return (
            <Modal
                closeIcon
                closeOnDimmerClick={false}
                trigger={
                <Button fluid size='medium' color='blue' animated='vertical' >
                    <Button.Content visible>
                        <Icon name='cloud upload'/>
                    </Button.Content>
                    <Button.Content hidden content="Upload TCR data"/>
                </Button>
                }
            >
                <Modal.Content>
                <div {...getRootProps()}>

                    <SegmentPlaceholder text='Upload a TCR data file' icon='cloud upload' loading={uploadLoading}>
                        {/* <input {...getInputProps()} /> */}
                        <Button fluid size='medium' color='blue'>
                            <Button.Content>
                            Browse
                            <input {...getInputProps()} />
                            </Button.Content>
                        </Button>
                        {
        isDragActive ?
                <SegmentPlaceholder basic icon='hand pointer' text='Drop the files here!'/>
                : 
                <SegmentPlaceholder basic icon='hand pointer outline' text={`Drag 'n' drop a file in here!`}/>
      }

                    </SegmentPlaceholder>
                    </div>

                </Modal.Content>
            </Modal>
        )
    }

    const [minioDelete, { data: minioDeleteData, loading: minioDeleteLoading, error: minioDeleteError }] =  useMutation(gql`
        mutation minioDelete($bucketName: String!, $objectName: String!) {
            minioDelete(bucketName: $bucketName, objectName: $objectName)
        }`,
        {
            variables: {bucketName, objectName: null},
            fetchPolicy: 'network-only',
            onCompleted: () => { refetch() }
        }
    )

    const [createCuratedDatasetFromDataset, { data: curatedDatasetData, loading: curatedDatasetLoading,  error: curatedDatasetError }, success] = useCreateCuratedDatasetFromDatasetMutation();
    const [createCuratedAnnotationFromDataset, { data: curatedAnnotationData, loading: curatedAnnotationLoading,  error: curatedAnnotationError }, annotationSuccess] = useCreateCuratedAnnotationFromDatasetMutation();

    const { isAdmin, loading: adminLoading, error: adminError, refetch: adminRefetch } = useIsAdmin();

    const [open, setOpen] = useState(false);


    if (!data?.minioUploads) {
        return null
    }
    const { minioUploads } : { minioUploads: MinioUpload[] } = data


    return (
        <Segment >
            <Divider horizontal content='Uploads' />

            <MinioUploadModal datasetID={datasetID} />
            <Divider />
            {!minioUploads.length ? <SegmentPlaceholder text={'No uploads yet'} /> :
                
                <List celled divided>
                    {minioUploads.map(minioUpload => {

                        // const isRawdataFile = !!minioUpload.rawdataFileRawDataset

                        return <div key={'div.' + minioUpload.objectName}>
                            <List.Item
                                key={'list.' + minioUpload.objectName}
                            >
                                {/* download button/file  */}
                                <Button key={'button.' + minioUpload.objectName} as='div' labelPosition='right'>
                                    <Button basic color='blue'>
                                    {minioUpload.filename}
                                    </Button>

                                    <Label 
                                        as='a'
                                        download={minioUpload.filename}
                                        href={minioUpload.presignedURL}
                                        // compact 
                                        pointing='left' 
                                        color='blue' 
                                        icon='cloud download' 
                                    />
                                </Button>
                                {
                                    minioUpload.processedDataset ?
                                    
                                    <Button key={'button.' + minioUpload.processedDataset.objectName} as='div' labelPosition='right'>
                                    <Button basic color='green'>
                                    {minioUpload.processedDataset.filename}
                                    </Button>

                                    <Label 
                                        as='a'
                                        download={minioUpload.processedDataset.filename}
                                        // href={minioUpload.processedDataset.presignedURL}
                                        // compact 
                                        pointing='left' 
                                        color='green' 
                                        icon='cloud download' 
                                        disabled
                                    />
                                </Button>
                                    : null
                                }
                                {/* delete button */}
                                <Popup 
                                    inverted
                                    position='top center'
                                    content='Delete'
                                    trigger={
                                        <Button color='red' floated='right'
                                        circular
                                            icon='trash'
                                            key={'delete.' + minioUpload.objectName} onClick={() => { minioDelete({variables: {objectName: minioUpload.objectName}}) }}
                                        />
                                    }
                                />
                                {/* curate annotations button - admin only */}
                                {
                                     isAdmin && 
                                     <Button 
                                     circular
                                    //  color={success || !adminQueryData.isAdmin ? 'grey' : 'teal'} 
                                    color='facebook' 
                                    floated='right'
                                     key={'curate.' + minioUpload?.objectName} onClick={() => { createCuratedAnnotationFromDataset({variables: {
                                        datasetID, 
                                        bucketName: minioUpload?.bucketName, 
                                        objectName: minioUpload?.objectName,
                                     }}) 
                                    }}
                                     loading={curatedAnnotationLoading}
                                     disabled={annotationSuccess || !isAdmin || curatedAnnotationLoading || minioUpload === null || minioUpload === undefined}
                                     icon='certificate'
                                    >
                                     {/* <Icon name='certificate' /> */}
                                     {annotationSuccess ? 'ANNOTATED' : null}
                                     </Button>
                                }
                                {/* curate button - admin only */}
                                {
                                     isAdmin && 
                                     <Button 
                                     circular
                                    //  color={success || !adminQueryData.isAdmin ? 'grey' : 'teal'} 
                                    color='teal' 
                                    floated='right'
                                     key={'curate.' + minioUpload.processedDataset?.objectName} onClick={() => { createCuratedDatasetFromDataset({variables: {
                                        datasetID, 
                                        bucketName: minioUpload.processedDataset?.bucketName, 
                                        objectName: minioUpload.processedDataset?.objectName,
                                        selectedDelimiter: minioUpload.processedDataset?.selectedDelimiter,
                                     }}) 
                                    }}
                                     loading={curatedDatasetLoading}
                                     disabled={success || !isAdmin || curatedDatasetLoading || minioUpload.processedDataset === null || minioUpload.processedDataset === undefined}
                                     icon='certificate'
                                 >
                                     {/* <Icon name='certificate' /> */}
                                     {success ? 'CURATED' : null}
                                     </Button>
                                }

                                {/* table button/modal */}
                                <Modal
                                size='large'
                                closeIcon
                                closeOnDimmerClick={false}
                                open={open}
                                onClose={() => setOpen(!open)}
                            
                                // add popup at some point
                                trigger={
                                    <Button
                                    circular
                                    floated='right'
                                    color={minioUpload.processedDataset ? 'green' : 'blue'}
                                    disabled={minioUpload.processedDataset}
                                    icon={minioUpload.processedDataset ? 'check' : 'table'}
                                    key={'info.' + minioUpload.objectName}
                                    onClick={() => setOpen(!open)}
                                    />
                                
                                }
                                >
                                <Modal.Content>
                                    <Segment.Group>
                                    <Segment>
                                    {
                                        <Header textAlign='center'>
                                        Set Headers for <span style={{color:'#2185D0'}}>{minioUpload.filename}</span>
                                        <Header.Subheader content='Select CDR3b and TRBV from your file' />
                                        </Header>
                                    }
                                    </Segment>
                                    <FileHeaderSelection
                                        presignedURL={minioUpload.presignedURL} //?.replace('minio', '10.0.0.97')} // The presigned URL to fetch the file
                                        headerOptions={headerOptions}
                                        bucketName={minioUpload.bucketName} // The callback to handle the selected headers when the user submits
                                        objectName={minioUpload.objectName}
                                        filename={minioUpload.filename}
                                        onSubmitHeaders={(headers) => {
                                            console.log('Headers submitted:', headers);
                                            refetch(); // Refetch the data
                                            setOpen(!open); // Close the modal on submit
                                          }}
                                        />                                    
                                        </Segment.Group>
                                </Modal.Content>
                                </Modal>


                                <Divider />

                            </List.Item>
                        </div>
                    })}
                </List>
            }
        </Segment>
    )
}