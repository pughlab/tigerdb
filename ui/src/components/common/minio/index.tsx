import React, { useCallback, useState } from "react";
import { Divider, Header, Icon, List, Popup, Segment, Button, Modal, Label } from "semantic-ui-react";
import SegmentPlaceholder from "../SegmentPlaceholder";
import { useDropzone, FileWithPath } from "react-dropzone";
import { gql, useQuery, useMutation } from "@apollo/client";
import useMinioUploadMutation from "../../../hooks/useMinioUploadMutation";
import useCreateCuratedAnnotationFromDatasetMutation from "../../../hooks/useCreateCuratedAnnotationFromDatasetMutation";
import useCreateCuratedDatasetFromDatasetMutation from "../../../hooks/useCreateCuratedDatasetFromDatasetMutation";
import useIsAdmin from "../../../hooks/useIsAdmin";
import useIsCurator from "../../../hooks/useIsCurator";

import { MinioUpload } from "../../../types/types";
import FileHeaderSelection from "../table";

// The header options to display in the dropdown for each column
const headerOptions = [
  // { key: 'locus', text: 'Locus', value: 'locus' },
  { key: "cdr3b", text: "CDR3b", value: "cdr3b" },
  { key: "trbv", text: "TRBV", value: "trbv" },
  { key: "trbj", text: "TRBJ", value: "trbj" },
  { key: "cdr3a", text: "CDR3a", value: "cdr3a" },
  {
    key: "subject:condition",
    text: "Subject:Condition",
    value: "subject:condition",
  },
  { key: "count", text: "Clone Count", value: "count" },
  // { key: 'mhc', text: 'MHC', value: 'mhc' },
  // { key: 'mhcClass', text: 'MHC Class', value: 'mhcClass' },
  // { key: 'epitope', text: 'Epitope', value: 'epitope' },
  // { key: 'epitopeGene', text: 'Epitope Gene', value: 'epitopeGene' },
  // { key: 'epitopeSpecies', text: 'Epitope Species', value: 'epitopeSpecies' },
  // { key: 'reference', text: 'Reference', value: 'reference' }
];

function UploadArea({ datasetID, bucketName, label, refetch, tag }: Readonly<{ datasetID: string, bucketName: string, label: string, refetch: () => any, tag: string }>) {
  const {
    mutation: uploadMutation,
    loading: uploadLoading,
  } = useMinioUploadMutation(refetch);
  
  const onDrop = useCallback((files: FileWithPath[]) => {
    uploadMutation({
      variables: {
        datasetID: datasetID,
        bucketName: bucketName,
        file: files[0],
        tag: tag,
      },
    });
  }, [datasetID, bucketName, uploadMutation, tag]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
  return (
        <div {...getRootProps()}>
          <SegmentPlaceholder
            text={label}
            icon="cloud upload"
            loading={uploadLoading}
            compact
          >
            <Button fluid size="medium" color="blue">
              <Button.Content>
                Browse <input {...getInputProps()} />
              </Button.Content>
            </Button>
            {isDragActive ? (
              <SegmentPlaceholder
                basic
                icon="hand pointer"
                text="Drop the files here!"
              />
            ) : (
                <div style={{ textAlign: "center", marginTop: "10px", color: "grey" }}>
                    Drag 'n' drop a file here
                </div>
            )}
          </SegmentPlaceholder>
        </div>
  )
}

function MinioUploadModal({ datasetID, refetch }: Readonly<{ datasetID: string; refetch: () => any; }>) {
  const bucketName = `dataset-${datasetID}`;

  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      trigger={
        <Button fluid size="medium" color="blue" animated="vertical">
          <Button.Content visible>
            <Icon name="cloud upload" />
          </Button.Content>
          <Button.Content hidden content="Upload Data" />
        </Button>
      }
    >
      <Modal.Content scrolling>
        <Header as="h3" color="blue" dividing>TCR Data</Header>
        <UploadArea datasetID={datasetID} bucketName={bucketName} label="Upload TCR data" refetch={refetch} tag="TCR" />
        
        <Header as="h3" color="teal" dividing style={{ marginTop: '20px' }}>Accompanying Data</Header>
        <UploadArea datasetID={datasetID} bucketName={bucketName} label="Upload Accompanying Data" refetch={refetch} tag="Accompanying" />
        
        <Header as="h3" color="orange" dividing style={{ marginTop: '20px' }}>Other Data</Header>
        <UploadArea datasetID={datasetID} bucketName={bucketName} label="Upload Other Data" refetch={refetch} tag="Other" />
      </Modal.Content>
    </Modal>
  );
}

function DownloadButton({ upload }) {
  const { objectName, filename, presignedURL, processedDataset: dataset } = upload
  return (
    <>
      <Button
        key={"button." + objectName}
        as="div"
        labelPosition="right"
      >
        <Button basic color="blue">
          {filename}
        </Button>

        <Label
          as="a"
          download={filename}
          href={presignedURL}
          // compact
          pointing="left"
          color="blue"
          icon="cloud download"
        />
      </Button>
      {dataset ? (
        <Button
          key={
            "button." + dataset.objectName
          }
          as="div"
          labelPosition="right"
        >
          <Button basic color="green">
            {dataset.filename}
          </Button>

          <Label
            as="a"
            download={dataset.filename}
            // href={minioUpload.processedDataset.presignedURL}
            // compact
            pointing="left"
            color="green"
            icon="cloud download"
            disabled
          />
        </Button>
      ) : null}
    </>
  )
}

function DeleteButton({ upload, doDelete, disabled }) {
  return (
    <Popup
      inverted
      position="top center"
      content="Delete"
      trigger={
        <Button
          color="red"
          floated="right"
          circular
          icon="trash"
          disabled={disabled}
          key={"delete." + upload.objectName}
          onClick={() => {
            doDelete({
              variables: { objectName: upload.objectName, bucketName: upload.bucketName },
            });
          }}
        />
      }
    />
  )
}

function CurateAnnotationsButton({ upload, loading, disabled, success, datasetID, curateAnnotation }) {
  return (
    <Button
      circular
      //  color={success || !adminQueryData.isAdmin ? 'grey' : 'teal'}
      color="facebook"
      floated="right"
      key={"curate." + upload?.objectName}
      onClick={() => {
        curateAnnotation({
          variables: {
            datasetID,
            bucketName: upload?.bucketName,
            objectName: upload?.objectName,
          },
        });
      }}
      loading={loading}
      disabled={disabled}
      icon="certificate"
    >
      {/* <Icon name='certificate' /> */}
      {success ? "ANNOTATED" : null}
    </Button>
  )
}

function CurateDatasetButton({ processedDataset, datasetID, loading, disabled, success, curate }) {
  return (
    <Button
      circular
      //  color={success || !adminQueryData.isAdmin ? 'grey' : 'teal'}
      color="teal"
      floated="right"
      key={
        "curate." + processedDataset?.objectName
      }
      onClick={() => {
        curate({
          variables: {
            datasetID,
            bucketName:
              processedDataset?.bucketName,
            objectName:
              processedDataset?.objectName,
            selectedDelimiter:
              processedDataset?.selectedDelimiter,
          },
        });
      }}
      loading={loading}
      disabled={disabled}
      icon="certificate"
    >
      {/* <Icon name='certificate' /> */}
      {success ? "CURATED" : null}
    </Button>
  )
}

function TableModal({ upload, refetch, isPublic }) {
  const [open, setOpen] = useState(false);
  const {processedDataset, objectName, filename, presignedURL, bucketName } = upload
  return (
    <Modal
      size="large"
      closeIcon
      closeOnDimmerClick={false}
      open={open}
      onClose={() => setOpen(!open)}
      // add popup at some point
      trigger={
        <Button
          circular
          floated="right"
          color={
            processedDataset ? "green" : "blue"
          }
          disabled={isPublic || Boolean(processedDataset)}
          icon={
            processedDataset ? "check" : "table"
          }
          key={"info." + objectName}
          onClick={() => setOpen(!open)}
        />
      }
    >
      <Modal.Content>
        <Segment.Group>
          <Segment>
            {
              <Header textAlign="center">
                Set Headers for{" "}
                <span style={{ color: "#2185D0" }}>
                  {filename}
                </span>
                <Header.Subheader content="Select CDR3b and TRBV from your file" />
              </Header>
            }
          </Segment>
          <FileHeaderSelection
            presignedURL={presignedURL} //?.replace('minio', '10.0.0.97')} // The presigned URL to fetch the file
            headerOptions={headerOptions}
            bucketName={bucketName} // The callback to handle the selected headers when the user submits
            objectName={objectName}
            filename={filename}
            onSubmitHeaders={(headers) => {
              console.log("Headers submitted:", headers);
              refetch(); // Refetch the data
              setOpen(!open); // Close the modal on submit
            }}
          />
        </Segment.Group>
      </Modal.Content>
    </Modal>
  )
}

export default function MinioBucket({
  datasetID,
  isReference,
  isPublic,
}: Readonly<{
  datasetID: string;
  isReference?: boolean;
  isPublic?: boolean;
}>) {
  const bucketName = `dataset-${datasetID}`;

  const { data, loading, refetch } = useQuery(
    gql`
      fragment MinioUploadFields on MinioUpload {
          bucketName
          objectName
          filename
          presignedURL
          tag
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
      }
      query MinioUploadsMulti($bucketName: ID!) {
        tcrUploads: minioUploads(where: { bucketName: $bucketName, tag: "TCR" }) {
          ...MinioUploadFields
        }
        accompanyingUploads: minioUploads(where: { bucketName: $bucketName, tag: "Accompanying" }) {
          ...MinioUploadFields
        }
        otherUploads: minioUploads(where: { bucketName: $bucketName, tag: "Other" }) {
          ...MinioUploadFields
        }
      }
    `,
    { variables: { bucketName }, fetchPolicy: "network-only" }
  );

  const [minioDelete] = useMutation(
    gql`
      mutation minioDelete($bucketName: String!, $objectName: String!) {
        minioDelete(bucketName: $bucketName, objectName: $objectName)
      }
    `,
    {
      fetchPolicy: "network-only",
      onCompleted: () => {
        refetch();
      },
    }
  );

  const [
    createCuratedDatasetFromDataset,
    {
      loading: curatedDatasetLoading,
    },
    success,
  ] = useCreateCuratedDatasetFromDatasetMutation();
  const [
    createCuratedAnnotationFromDataset,
    {
      loading: curatedAnnotationLoading,
    },
    annotationSuccess,
  ] = useCreateCuratedAnnotationFromDatasetMutation();

  const { isAdmin } = useIsAdmin();
  const { isCurator } = useIsCurator();

  // Helper for rendering a list
  const renderUploadList = (uploads: MinioUpload[], title: string, color: string = "blue") => {
     if (!uploads || uploads.length === 0) {
         return (
             <>
                <Divider horizontal>
                    <Header as="h4" color="grey" style={{ textTransform: "uppercase", fontSize: "0.9em" }}>
                        {title}
                    </Header>
                </Divider>
                <SegmentPlaceholder text={`No uploads yet`} />
             </>
         );
     }
     
     return (
        <div style={{ marginBottom: "20px" }}>
            <Divider horizontal>
                <Header as="h4" color={color as any}>
                    {title}
                </Header>
            </Divider>
            <List celled divided>
            {uploads.map((minioUpload) => {
                return (
                    <div key={"div." + minioUpload.objectName}>
                    <List.Item key={"list." + minioUpload.objectName}>
                        <DownloadButton upload={minioUpload} />
                        {(isCurator || isAdmin) && <DeleteButton upload={minioUpload} doDelete={minioDelete} disabled={isPublic} />}
                        {(isCurator || isAdmin) && <CurateAnnotationsButton 
                        upload={minioUpload}
                        datasetID={datasetID}
                        loading={curatedAnnotationLoading}
                        disabled={
                            annotationSuccess ||
                            curatedAnnotationLoading ||
                            isPublic ||
                            minioUpload === null ||
                            minioUpload === undefined
                        }
                        success={annotationSuccess}
                        curateAnnotation={createCuratedAnnotationFromDataset}
                        /> }
                        {(isCurator || isAdmin) && <CurateDatasetButton 
                        processedDataset={minioUpload.processedDataset}
                        datasetID={datasetID}
                        loading={curatedDatasetLoading}
                        disabled={
                            success ||
                            curatedDatasetLoading ||
                            isPublic ||
                            minioUpload.processedDataset === null ||
                            minioUpload.processedDataset === undefined
                        }
                        success={success}
                        curate={createCuratedDatasetFromDataset}
                        />}
                        {!isReference && <TableModal upload={minioUpload} refetch={refetch} isPublic={isPublic} />}
                        <Divider />
                    </List.Item>
                    </div>
                );
            })}
            </List>
        </div>
     );
  };

  if (!data) {
    return null;
  }
  const { tcrUploads, accompanyingUploads, otherUploads } = data;

  return (
    <Segment>
      <Divider horizontal content="Uploads" />

      {!isPublic && (
        <>
          <MinioUploadModal datasetID={datasetID} refetch={refetch} />
          <Divider />
        </>
      )}
      
      {renderUploadList(tcrUploads, "TCR Data", "blue")}
      {renderUploadList(accompanyingUploads, "Accompanying Data", "teal")}
      {renderUploadList(otherUploads, "Other Data", "orange")}

    </Segment>
  );
}
