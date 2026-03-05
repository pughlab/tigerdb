import * as React from "react";
import {
  Button,
  Form,
  Header,
  Label,
  Input,
  Segment,
  Icon,
  Message,
  List,
  Divider,
  Loader,
  Grid,
  Dropdown,
  ButtonGroup,
  Image,
  Dimmer,
  ButtonOr,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import tigerdbLogo from "../../logos/tigerdb.png";
import Logs from "./Logs";
import SegmentPlaceholder from "../../common/SegmentPlaceholder";
import DisplayTableFromPresignedURL from "../../common/table/DisplayTableFromPresignedURL";
import GliphGraph3D from "./GliphGraph3D";

import useSubmitRunMutation from "../../../hooks/useSubmitRunMutation";
import useRunDetailsQuery from "../../../hooks/useRunDetailsQuery";
import useUpdateRunParametersMutation from "../../../hooks/useUpdateRunParametersMutation";
import useImportGliphMutation from "../../../hooks/useImportGliphMutation";
import { DatasetReadonlyTag } from "../Datasets/DatasetTag";

function RunActionsButton({
  status,
  loading,
  refetch,
  presignedURL,
  runID,
  importGliph,
  importLoading,
}: {
  status: string;
  loading: boolean;
  refetch: () => void;
  presignedURL?: string;
  runID: string;
  importGliph?: any;
  importLoading?: boolean;
}) {
  if (!status) return null;

  // submitted: keep as refetch (or wire cancel later if you add a cancel mutation)
  if (status === "submitted") {
    return (
      <Button
        content="CANCEL"
        color="red"
        icon="cancel"
        disabled
        onClick={() => refetch()}
        loading={loading}
      />
    );
  }

  // completed: make it a real download link
  if (status === "completed") {
    return (
      <>
        <Button
          as="a"
          href={presignedURL}
          download={`TIGERdb_${runID}_cluster.csv`}
          content="DOWNLOAD"
          color="violet"
          icon="download"
          loading={loading}
          disabled={!presignedURL}
        />
      </>
    );
  }

  if (status === "failed") {
    return (
      <Button
        content="FAILED RUN LOGS"
        color="red"
        icon="cloud download"
        onClick={() => refetch()}
        loading={loading}
        disabled={!presignedURL}
      />
    );
  }

  return null;
}

function RunResults({
  status,
  presignedURL,
  runID,
  importGliph,
  importLoading,
}: {
  status: string;
  presignedURL?: string;
  runID: string;
  importGliph: any;
  importLoading: boolean;
}) {
  const [viewMode, setViewMode] = React.useState('table'); // 'table' or 'graph'

  if (!status?.trim()) return null;

  if (status === "submitted") {
    return (
      <Segment placeholder>
        <Image size="large" src={tigerdbLogo} centered />
        <Dimmer active inverted>
          <Logs />
        </Dimmer>
      </Segment>
    );
  }

  if (status === "completed") {
    return (
      <Segment placeholder>
        <Segment.Group>
          <Segment>
            <Grid columns={3}>
              <Grid.Column width={4} />
              <Grid.Column width={8} textAlign="center">
                <Header as="h3">
                  Viewing GLIPH2 clusters from{" "}
                  <span style={{ color: "#6434C9" }}>
                    TIGERdb_cluster.csv
                  </span>
                </Header>
              </Grid.Column>
              <Grid.Column width={4} textAlign="right">
                <Button.Group  size='small' attached='top' >
                  <Button 
                    active={viewMode === 'table'} 
                    onClick={() => setViewMode('table')}
                    icon="table"
                    content="Table"
                    // active color = violet
                    color={viewMode === 'table' ? 'violet' : undefined}
                  />
                  <ButtonOr />
                  <Button 
                    active={viewMode === 'graph'} 
                    onClick={() => setViewMode('graph')}
                    icon="connectdevelop"
                    content="Graph"
                    color={viewMode === 'graph' ? 'teal' : undefined}
                  />
                </Button.Group>
              </Grid.Column>
            </Grid>
          </Segment>

          {/* Preview table from the run output */}
          {presignedURL ? (
            viewMode === 'table' ? (
              <DisplayTableFromPresignedURL presignedURL={presignedURL} />
            ) : (
              <GliphGraph3D 
                runID={runID} 
                presignedURL={presignedURL}
                importGliph={importGliph}
                importLoading={importLoading}
              />
            )
          ) : (
            <Message warning content="No presignedURL available for results preview." />
          )}
        </Segment.Group>

        <Message color="green">
          <Header as="h3" icon>
            <Icon name="check circle" color="green" />
            RUN COMPLETED - READY TO DOWNLOAD
          </Header>
        </Message>
      </Segment>
    );
  }

  return null;
}

function DataSources({ processedDatasets, referenceDatasets }) {
  const seenTagnames = new Set();
  let tags: any[] = [];

  referenceDatasets.map((reference) => {
    const uniqueTags =
      reference.dataset?.tags?.filter((tag) => {
        if (seenTagnames.has(tag.name)) {
          return false;
        }
        seenTagnames.add(tag.name);
        return true;
      }) || [];
    tags = [...tags, ...uniqueTags];
  });

  return (
    <>
      <Divider horizontal content="Data" />
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Header
              sub
              size="huge"
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              Orphan TCRs {processedDatasets.length > 0 ? `(${processedDatasets.length})` : ""}
            </Header>
            {
              // (datasets.length > 0) ? datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />) : null
              processedDatasets.length > 0
                ? processedDatasets.map((processedDataset) => (
                    <Button
                      key={"button." + processedDataset.objectName}
                      as="div"
                      labelPosition="right"
                    >
                      <Button basic color="green">
                        {processedDataset.filename}
                      </Button>
                      <Label
                        as="a"
                        download={processedDataset.filename}
                        href={processedDataset.presignedURL}
                        // compact
                        pointing="left"
                        color="green"
                        icon="cloud download"
                      />
                    </Button>
                  ))
                : null
            }
          </Grid.Column>
          <Grid.Column>
            <Header
              sub
              size="huge"
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              {/* {referenceDatasets.length}{" "} */}
              {/* {referenceDatasets.length === 1 ? "Reference" : "References"} */}
              Deorphanized TCRs { referenceDatasets.length > 0 ? `(${referenceDatasets.length})` : ""}
            </Header>
            {[...tags]
              .sort((tag1, tag2) => {
                if (tag1.name.toLowerCase() === tag2.name.toLowerCase()) {
                  return 0;
                }
                return tag1.name.toLowerCase() > tag2.name.toLowerCase()
                  ? 1
                  : -1;
              })
              .map((tag) => (
                <DatasetReadonlyTag key={tag.tagID} tag={tag} />
              ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

function getStatusColor(status: string): string {
  switch (status) {
    case "submitted":
      return "goldenrod";
    case "completed":
      return "green";
    case "failed":
      return "red";
    default:
      return "orange";
  }
}

function getStatusIcon(status: string): string {
  switch (status) {
    case "submitted":
      return "circle notch";
    case "completed":
      return "check circle";
    case "failed":
      return "times circle";
    default:
      return "circle outline";
  }
}

export default function RunDetails() {
  const initialParameters = {
    outPrefix: "TIGERdb",
    localMinpValue: 0.001,
    pDepth: 1000,
    globalConvergenceCutoff: 1,
    simulationDepth: 1000,
    kmerMinDepth: 3,
    localMinOVE: 10,
    allAAInterchangeable: 1,
  };

  const { runID } = useParams();
  const {
    parameters,
    setParameters,
    loading: saveParametersLoading,
    error: saveParametersError,
  } = useUpdateRunParametersMutation({ runID, initialParameters });
  const {
    run,
    loading: runDetailsLoading,
    refetch,
  } = useRunDetailsQuery({ runID });
  const [submitRun] = useSubmitRunMutation();
  const { importGliph, loading: importLoading, error: importError } = useImportGliphMutation();

  if (runDetailsLoading) {
    return (
      <Segment placeholder textAlign="center">
        {/* <Icon size='massive' name='react' loading /> */}
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    );
  }

  if (!run) {
    return <SegmentPlaceholder text="Not found!" icon="exclamation triangle" />;
  }
  console.log(run);
  const {
    name,
    description,
    createdBy,
    createdOn,
    processedDatasets,
    referenceDatasets,
    status,
    presignedURL 
  } = run;

  const createdOnDate = new Date(createdOn).toLocaleString("en-US", {
    weekday: "long", // "Sunday"
    year: "numeric", // "2024"
    month: "short", // "Oct"
    day: "numeric", // "2"
    hour: "numeric", // "4"
    minute: "numeric", // "41"
    hour12: true, // 12-hour format with AM/PM
  });

  const colorStatus = getStatusColor(status);
  const iconStatus = getStatusIcon(status);

  return (
    <Grid>
      <Grid.Column width={16}>
        <ButtonGroup fluid size="huge" attached="top">
          {/* run-related buttons, cancel, download results */}
          <Button
            content="REFRESH"
            icon="refresh"
            color="black"
            onClick={() => {
              refetch();
            }}
            loading={runDetailsLoading}
          />
          {/* <Button
            disabled
            content="SHARE"
            icon="users"
            color="facebook"
            onClick={() => {
              refetch();
            }}
            loading={runDetailsLoading}
          /> */}
        <RunActionsButton
          status={status}
          refetch={refetch}
          loading={runDetailsLoading}
          presignedURL={presignedURL}
          runID={runID!}
          importGliph={importGliph}
          importLoading={importLoading}
        />
        </ButtonGroup>
        <Message color={"grey"}>
          <Divider horizontal content="Run Details" />
          <Message.Header content={name} />
          <List size="large">
            <List.Item icon="calendar" content={`${createdOnDate}`} />
            <List.Item icon="user" content={`${createdBy.email}`} />
            {/* <Message.Item content={`Public: ${isPublic}`} /> */}
            {/* <Message.Item content={`Shared with: ${sharedWith}`} /> */}
            <List.Item icon="info circle" content={`runID: ${runID}`} />
            {/* <List.Item icon='cog' content={wesID ? `wesID: ${wesID}` : "Job ID available after submission"} /> */}
            <List.Item style={{ color: colorStatus }}>
              <List.Icon name={iconStatus} loading={status === "submitted"} />
              <List.Content>{`${status.toUpperCase()}`}</List.Content>
            </List.Item>
          </List>
          <Message content={description} />
          <Divider horizontal />
          <List.Description>
            <DataSources
              processedDatasets={processedDatasets}
              referenceDatasets={referenceDatasets}
            />
          </List.Description>
        </Message>
        <RunResults 
          status={status} 
          presignedURL={presignedURL} 
          runID={runID || ''} 
          importGliph={importGliph}
          importLoading={importLoading}
        />
        <Message color="grey">
          <Header as={"h4"} icon>
            <Icon name="paper plane" />
            RUN PARAMETERS
          </Header>
          <Message>
            <Form>
              <Form.Field
                control={Input}
                label="Results Prefix"
                placeholder="TIGERdb"
                value={parameters.outPrefix}
                onChange={(_e, { value }) =>
                  setParameters((prev) => ({ ...prev, outPrefix: value }))
                }
              />
              <Segment color="violet">
                <Divider horizontal content="CDR3 INPUT" />

                {/* <Form.Field
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
          /> */}
                {/* {projectsError && <Message error content="Error loading projects" />} */}
                {/* <Form.Field
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
          /> */}
                {/* {datasetsError && <Message error content="Error loading datasets" />} */}
                {/* <Form.Field
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
          /> */}
                {/* {minioUploadsError && <Message error content="Error loading uploads" />} */}

                <Form.Field
                  control={Dropdown}
                  label="External Specificity File"
                  placeholder="TIGERdb_MinimalScoreConfidence3_VersionII.tsv"
                  value="TIGERdb_MinimalScoreConfidence3_VersionII.tsv"
                  search
                  selection
                  fluid
                  disabled
                />
              </Segment>
              <Form.Field
                control={Dropdown}
                label="HLA File"
                placeholder="hla_file.txt"
                selection
                fluid
                disabled
              />
              <Segment color="violet">
                <Divider horizontal content="Reference Files" />

                <Form.Field
                  control={Dropdown}
                  label="Reference File"
                  placeholder="ref_CD48_v2.0.txt"
                  value="ref_CD48_v2.0.txt"
                  selection
                  fluid
                  search
                  disabled
                />
                <Form.Field
                  control={Dropdown}
                  label="V Usage Frequency File"
                  placeholder="ref_V_CD48_v2.0.txt"
                  value="ref_V_CD48_v2.0.txt"
                  selection
                  fluid
                  search
                  disabled
                />
                <Form.Field
                  control={Dropdown}
                  label="CDR3 Length Frequency File"
                  placeholder="ref_L_CD48_v2.0.txt"
                  value="ref_L_CD48_v2.0.txt"
                  search
                  selection
                  fluid
                  disabled
                />
              </Segment>
              {/* grid with two columns around these: */}
              <Grid columns={2}>
                <Grid.Column>
                  <Form.Field
                    control={Input}
                    label="Local Min P-Value"
                    placeholder="0.001"
                    value={parameters.localMinpValue}
                    onChange={(e, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        localMinpValue: parseFloat(value),
                      }))
                    }
                    type="number"
                    step="0.001" // Allows decimal numbers
                  />
                  <Form.Field
                    control={Input}
                    label="P Depth"
                    placeholder="1000"
                    value={parameters.pDepth}
                    onChange={(e, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        pDepth: parseInt(value, 10),
                      }))
                    }
                    type="number"
                    step="100"
                  />
                  <Form.Field
                    control={Input}
                    label="Global Convergence Cutoff"
                    placeholder="1"
                    value={parameters.globalConvergenceCutoff}
                    onChange={(e, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        globalConvergenceCutoff: parseInt(value, 10),
                      }))
                    }
                    type="number"
                    step="1"
                  />
                  <Form.Field
                    control={Input}
                    label="Simulation Depth"
                    placeholder="1000"
                    value={parameters.simulationDepth}
                    onChange={(e, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        simulationDepth: parseInt(value, 10),
                      }))
                    }
                    type="number"
                    step="100"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Field
                    control={Input}
                    label="Kmer Min Depth"
                    placeholder="3"
                    value={parameters.kmerMinDepth}
                    onChange={(e, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        kmerMinDepth: Number.parseInt(value, 10),
                      }))
                    }
                    type="number"
                    step="1"
                  />
                  <Form.Field
                    control={Input}
                    label="Local Min OVE"
                    placeholder="10"
                    value={parameters.localMinOVE}
                    onChange={(e, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        localMinOVE: Number.parseInt(value, 10),
                      }))
                    }
                    type="number"
                    step="1"
                  />
                  <Form.Field
                    control={Dropdown}
                    search
                    label="Algorithm"
                    // options: [gliph1 , gliph2
                    options={[
                      { key: "gliph1", text: "GLIPH1", value: "GLIPH1" },
                      { key: "gliph2", text: "GLIPH2", value: "GLIPH2" },
                    ]}
                    placeholder="GLIPH2"
                    value="GLIPH2"
                    fluid
                    selection
                    disabled
                  />
                  <Form.Field
                    control={Dropdown}
                    label="All AA Interchangeable"
                    placeholder="1"
                    options={[
                      { key: "1", text: "TRUE", value: 1 },
                      { key: "0", text: "FALSE", value: 0 },
                    ]}
                    selection
                    fluid
                    value={parameters.allAAInterchangeable}
                    onChange={(_, { value }) =>
                      setParameters((prev) => ({
                        ...prev,
                        allAAInterchangeable: value,
                      }))
                    }
                  />
                </Grid.Column>
              </Grid>
              {saveParametersLoading && (
                <Message info content="Updating parameters..." />
              )}
              {saveParametersError && (
                <Message
                  error
                  content={`Error updating parameters: ${saveParametersError.message}`}
                />
              )}
            </Form>
          </Message>
          <Divider horizontal />
          <Button
            fluid
            size="massive"
            color="violet"
            animated="vertical"
            disabled={status !== "pending"}
            onClick={() => {
              submitRun({ variables: { runID: runID } }).then(() => refetch());
            }}
            content={status === "pending" ? "SUBMIT RUN" : status === 'completed' ? 'RUN COMPLETED' : status === 'failed' ? 'RUN FAILED' : "RUN SUBMITTED"}
          />
        </Message>
      </Grid.Column>
    </Grid>
  );
}
