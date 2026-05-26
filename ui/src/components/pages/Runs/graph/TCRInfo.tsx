import React from 'react';
import {
  Button,
  Card,
  Dimmer,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Loader, Message,
  Popup,
  Segment
} from "semantic-ui-react";
import useRouter from "../../../../hooks/useRouter";
import useNodeDetailsQuery from "../../../../hooks/useNodeDetailsQuery";

export default function TCRInfo({ node }: Readonly<{ node: any }>) {
  const { data, loading, error } = useNodeDetailsQuery(node.label)
  const { navigate } = useRouter();

  if (loading) {
    return (
      <Segment placeholder textAlign="center">
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    )
  }

  if (error) {
    return <Message error>There was an error getting the node details</Message>;
  }

  let referenceButton

  if (data.reference) {
    referenceButton = (
      <Button fluid color="black">
        <Icon name="book" style={{ color: "white" }} />
        {data.reference}
      </Button>
    )
  } else if (data.datasetName) {
    referenceButton = (
      <Button fluid color="blue">
        <Icon name="database" style={{ color: "white" }} />
        {data.datasetName} - {data.projectName}
      </Button>
    )
  } else {
    referenceButton = <></>
  }

  const openDocument = (reference, projectID) => {
    if (reference?.startsWith("https")) {
      window.open(reference, "_blank");
    } else if (reference?.startsWith("PMID")) {
      const PMID = reference.split(":")[1].trim();
      window.open(
        `https://pubmed.ncbi.nlm.nih.gov/${PMID}/`,
        "_blank"
      );
    } else {
      navigate(`/home/data/${projectID}`);
    }
  }

  return (
    <Popup
      inverted
      content={
        data.reference
        ? `Click here to go to publication (${data.reference})`
        : `Click here to go to project (${data.projectName})`
      }
      position="top center"
      style={{ color: "white" }}
      icon={data.reference ? "book" : "database"}
      trigger={
        <List.Item
          as={Card}
          fluid
          style={{
            width: "95%",
            margin: "10px auto",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: "10px",
            cursor: 'pointer',
            backgroundColor: "white",
          }}
          onClick={() => {openDocument(data.reference, data.projectID)}
        }>
          <Label attached={"top right"} color="black">{node.source}</Label>
          <Grid columns={3} divided textAlign={"center"}>
            <Grid.Row>
              <Grid.Column>
                <List.Header as={Header} color={"blue"}>
                  <div>{node.label}</div>
                </List.Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column><strong>Node ID:</strong> {node.id}</Grid.Column>
              <Grid.Column><strong>Community:</strong> {node.group}</Grid.Column>
              <Grid.Column><strong>TRBV:</strong> {node.v_gene}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{data.projectName.length > 0 && (
                <>
                  <strong>Project:</strong> {data.projectName}
                </>
                )}
              </Grid.Column>
              <Grid.Column>
                {data.datasetName.length > 0 && (
                  <>
                    <strong>Dataset:</strong> {data.datasetName}
                  </>
                )}
              </Grid.Column>
              <Grid.Column>
                {data.trav.length > 0 && (
                  <>
                    <strong>TRAV:</strong> {data.trav}
                  </>
                )}
              </Grid.Column>
            </Grid.Row>
            {(data.j_gene || data.traj) && (
              <Grid.Row>
              <Grid.Column>
                {data.j_gene.length > 0 && (
                  <>
                    <strong>Subject Condition:</strong> {data.j_gene}
                  </>
                )}
              </Grid.Column>
              <Grid.Column>
                {data.traj.length > 0 && (
                  <>
                    <strong>Clone Count:</strong> {data.traj}
                  </>
                )}
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            )}
            {(data.mhc || data.mhcClass || data.epitopeGene) && (
              <Grid.Row>
                <Grid.Column><strong>MHC:</strong> {data.mhc || 'NA'}</Grid.Column>
                <Grid.Column><strong>MHC Class:</strong> {data.mhcClass || 'NA'}</Grid.Column>
                <Grid.Column><strong>Epitope Gene:</strong> {data.epitopeGene || 'NA'}</Grid.Column>
              </Grid.Row>
            )}
            {(data.epitopeAAseq || data.epitopeSpecies || data.mutation) && (
              <Grid.Row>
                <Grid.Column><strong>Epitope AA Sequence:</strong> {data.epitopeAAseq || 'NA'}</Grid.Column>
                <Grid.Column><strong>Epitope Species:</strong> {data.epitopeSpecies || 'NA'}</Grid.Column>
                <Grid.Column><strong>Mutation:</strong> {data.mutation || 'NA'}</Grid.Column>
              </Grid.Row>
            )}
            {(data.recognizesWTEpitope || data.uniProt) && (
              <Grid.Row>
                <Grid.Column><strong>Recognizes Wild Type Epitope:</strong> {data.recognizesWTEpitope || 'NA'}</Grid.Column>
                <Grid.Column><strong>UniProt:</strong> {data.uniProt || 'NA'}</Grid.Column>
              </Grid.Row>
            )}
          </Grid>
          <Divider horizontal hidden />
          {referenceButton}
        </List.Item>
      }
    />
  )
}