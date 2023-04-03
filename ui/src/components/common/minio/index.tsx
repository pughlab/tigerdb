import React, { useCallback } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Message, Divider, Container, Icon, List, Input, Segment, Form, Button, Modal, Grid } from 'semantic-ui-react'
import SegmentPlaceholder from '../SegmentPlaceholder'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { gql, useQuery, useMutation } from '@apollo/client'
import useMinioUploadMutation from '../../../hooks/useMinioUploadMutation'
import SegmentPlaceholder from '../SegmentPlaceholder'

export default function MinioBucket({ rawDatasetID } : { rawDatasetID:String }) {
    const bucketName = `raw-dataset-${rawDatasetID}`
    const { data, loading, error, refetch } = useQuery(gql`
        query MinioUploads($bucketName: ID!) {
            minioUploads(where: {bucketName: $bucketName}) {
                bucketName
                objectName
                filename
            }
        }`,
        { variables: { bucketName }, fetchPolicy: 'network-only' })

    function MinioUploadModal({ rawDatasetID } : { rawDatasetID:String }) {
        const bucketName = `raw-dataset-${rawDatasetID}`

        const { state: uploadState, dispatch: uploadDispatch, mutation: uploadMutation } = useMinioUploadMutation(refetch)
        const onDrop = useCallback((files: FileWithPath[]) => {
            uploadMutation({
                variables: {
                    rawDatasetID: rawDatasetID,
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
                    <SegmentPlaceholder text='Click to upload a file' icon='upload'>
                        <div {...getRootProps()}>
                            <Button>
                                Upload a file
                                <input {...getInputProps()} />
                            </Button>
                        </div>
                    </SegmentPlaceholder>
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

    if (!data?.minioUploads) {
        return null
    }
    const { minioUploads } = data
    return (
        <Segment>
            <MinioUploadModal rawDatasetID={rawDatasetID} />
            <Divider horizontal />
            {!minioUploads.length ? <SegmentPlaceholder text={'No uploads yet'} /> :
                <List celled divided>
                    {minioUploads.map(minioUpload => (
                        <div key={'div.' + minioUpload.objectName}>
                            <List.Item
                                key={'list.' + minioUpload.objectName}
                                content={minioUpload.filename}
                                description={minioUpload.objectName}
                            />
                            <Button key={'button.' + minioUpload.objectName} onClick={() => { minioDelete({variables: {objectName: minioUpload.objectName}}) }}>Delete</Button>
                        </div>
                    ))}
                </List>
            }
        </Segment>
    )
}