import React, { useCallback } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Message, Divider, Container, Icon, List, Input, Segment, Form, Button, Modal, Grid, Label } from 'semantic-ui-react'
import SegmentPlaceholder from '../SegmentPlaceholder'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { gql, useQuery, useMutation } from '@apollo/client'
import useMinioUploadMutation from '../../../hooks/useMinioUploadMutation'
import { MinioUpload } from '../../../types/types'
// import { getPermissionRoles } from '../../../state/appContext'

export default function MinioBucket({ datasetID } : { datasetID:String }) {
    const bucketName = `dataset-${datasetID}`
    const { data, loading, error, refetch } = useQuery(gql`
        query MinioUploads($bucketName: ID!) {
            minioUploads(where: {bucketName: $bucketName}) {
                bucketName
                objectName
                filename
                # rawdataFileRawDataset {
                #     datasetID
                # }
            }
        }`,
        { variables: { bucketName }, fetchPolicy: 'network-only' })

    function MinioUploadModal({ datasetID } : { datasetID:String }) {
        const bucketName = `dataset-${datasetID}`
        // const {allowedStudies, allowedSites} = getPermissionRoles()

        const { state: uploadState, dispatch: uploadDispatch, mutation: uploadMutation } = useMinioUploadMutation(refetch)
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
                trigger={<Button fluid icon='upload' />}
            >
                <Modal.Content>
                <div {...getRootProps()}>

                    <SegmentPlaceholder text='Click to upload a file' icon='upload'>
                        {/* <input {...getInputProps()} /> */}

                        {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here</p>
      }
                            <Button>
                                Or click to Upload a file
                                <input {...getInputProps()} />
                            </Button>
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

    // const {allowedStudies, allowedSites} = getPermissionRoles()

    if (!data?.minioUploads) {
        return null
    }
    const { minioUploads } : { minioUploads: MinioUpload[] } = data
    return (
        <Segment >
            <Divider horizontal content='Dataset Files' />

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
                                <Button compact 
                                    attached='left' 
                                    color='blue' 
                                    basic
                                    // inverted
                                    icon='download' 
                                    key={'button.' + minioUpload.objectName} 
                                    // onClick={() => { window.open(`/minio/download/${minioUpload.objectName}`) }}
                                    content={minioUpload.filename}
                                />
                                {/* <Label
                                    content={minioUpload.objectName}
                                /> */}
                                {/* {
                                    isCodebook && <Label color='blue' >Codebook</Label>
                                }
                                {
                                    isRawdataFile && <Label color='blue'>Rawdata</Label>
                                } */}
                                <Button compact attached='right' color='red' icon='trash' key={'button.' + minioUpload.objectName} onClick={() => { minioDelete({variables: {objectName: minioUpload.objectName}}) }}/>
                                <Divider />

                            </List.Item>
                        </div>
                    })}
                </List>
            }
        </Segment>
    )
}