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

function MinioUploadModal({ datasetID, refetch }: { datasetID: String; refetch: () => any; }) {
  const bucketName = `dataset-${datasetID}`;
  // const {allowedStudies, allowedSites} = getPermissionRoles()

  const {
    state: uploadState,
    dispatch: uploadDispatch,
    mutation: uploadMutation,
    loading: uploadLoading,
    error: uploadError,
  } = useMinioUploadMutation(refetch);
  const onDrop = useCallback((files: FileWithPath[]) => {
    uploadMutation({
      variables: {
        datasetID: datasetID,
        bucketName: bucketName,
        file: files[0],
      },
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      trigger={
        <Button fluid size="medium" color="blue" animated="vertical">
          <Button.Content visible>
            <Icon name="cloud upload" />
          </Button.Content>
          <Button.Content hidden content="Upload TCR data" />
        </Button>
      }
    >
      <Modal.Content>
        <div {...getRootProps()}>
          <SegmentPlaceholder
            text="Upload a TCR data file"
            icon="cloud upload"
            loading={uploadLoading}
          >
            {/* <input {...getInputProps()} /> */}
            <Button fluid size="medium" color="blue">
              <Button.Content>
                Browse
                <input {...getInputProps()} />
              </Button.Content>
            </Button>
            {isDragActive ? (
              <SegmentPlaceholder
                basic
                icon="hand pointer"
                text="Drop the files here!"
              />
            ) : (
              <SegmentPlaceholder
                basic
                icon="hand pointer outline"
                text={`Drag 'n' drop a file in here!`}
              />
            )}
          </SegmentPlaceholder>
        </div>
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
              variables: { objectName: upload.objectName },
            });
          }}
        />
      }
    />
  )
}

function CurateAnnotationsButton({ upload, loading, disabled, success, datasetID, curateAnnotation }) {
  return (
    <Popup
      inverted
      position="top center"
      content="Annotate"
      trigger={
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
      }
    />
  )
}

function CurateDatasetButton({ processedDataset, datasetID, loading, disabled, success, curate }) {
  return (
    <Popup
      inverted
      position="top center"
      content="Curate"
      trigger={
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
      }
    />
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
  isOwner,
}: Readonly<{
  datasetID: String;
  isReference?: Boolean;
  isPublic?: Boolean;
  isOwner?: Boolean;
}>) {
  const bucketName = `dataset-${datasetID}`;
  const { data, loading, refetch } = useQuery(
    gql`
      query MinioUploads($bucketName: ID!) {
        minioUploads(where: { bucketName: $bucketName }) {
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
      variables: { bucketName, objectName: null },
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

  if (!data?.minioUploads) {
    return null;
  }
  const { minioUploads }: { minioUploads: MinioUpload[] } = data;

  return (
    <Segment>
      <Divider horizontal content="Uploads" />

      {!isPublic && (
        <>
          <MinioUploadModal datasetID={datasetID} refetch={refetch} />
          <Divider />
        </>
      )}
      {minioUploads.length === 0 ? (
        <SegmentPlaceholder text={"No uploads yet"} />
      ) : (
        <List celled divided>
          {minioUploads.map((minioUpload) => {
              // const isRawdataFile = !!minioUpload.rawdataFileRawDataset

              return (
                <div key={"div." + minioUpload.objectName}>
                  <List.Item key={"list." + minioUpload.objectName}>
                    <DownloadButton upload={minioUpload} />
                    {(isOwner || isCurator || isAdmin) && <DeleteButton upload={minioUpload} doDelete={minioDelete} disabled={false} />} {/* disabled={isPublic} />} */}
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
      )}
    </Segment>
  );
}
