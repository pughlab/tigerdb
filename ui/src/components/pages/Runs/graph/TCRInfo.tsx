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

  const hlaFields = [
  { key: 'hla_a', title: 'HLA-A' },
  { key: 'hla_b', title: 'HLA-B' },
  { key: 'hla_c', title: 'HLA-C' },
  { key: 'hla_dpa1', title: 'HLA-DPA1' },
  { key: 'hla_dpb1', title: 'HLA-DPB1' },
  { key: 'hla_dqa1', title: 'HLA-DQA1' },
  { key: 'hla_dqb1', title: 'HLA-DQB1' },
  { key: 'hla_drb1', title: 'HLA-DRB1' },
  { key: 'hla_drb3', title: 'HLA-DRB3' },
  { key: 'hla_drb4', title: 'HLA-DRB4' },
  { key: 'hla_drb5', title: 'HLA-DRB5' }
];

  // Check if ANY of the HLA fields have a truthy value
  const hasAnyHla = hlaFields.some(field => node[field.key]);

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
          <Label attached={"top right"} style={{ backgroundColor: node.color || 'black', color: 'white' }}>{node.source}</Label>
          <Grid textAlign="center">
            <Grid.Row>
              <Grid.Column>
                <List.Header as={Header} style={{ color: node.color || '#2185d0' }}>
                  <div>{node.label}</div>
                </List.Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={5} divided textAlign="center">
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="TRBV" detail={`${node.v_gene ? node.v_gene : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="TRBJ" detail={`${data.j_gene ? data.j_gene : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="TRAV" detail={`${data.trav ? data.trav : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="TRAJ" detail={`${data.traj ? data.traj : 'NA'}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="MHC" detail={`${data.mhc ? data.mhc : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="MHC Class" detail={`${data.mhcClass ? data.mhcClass : 'NA'}`} color="grey" />
                </Grid.Row>
                { hasAnyHla && (
                  <Grid.Row>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '10px' }}>
                      {hlaFields.map(field => (
                        <Label 
                          key={field.key} 
                          basic 
                          content={field.title} 
                          detail={`${node[field.key] || 'NA'}`} 
                          color="grey" 
                        />
                      ))}
                    </div>
                  </Grid.Row>
                )}
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="Epitope Amino Acid Sequence" detail={`${data.epitopeAAseq ? data.epitopeAAseq : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="Epitope Gene" detail={`${data.epitopeGene ? data.epitopeGene : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="Epitope Species" detail={`${data.epitopeSpecies ? data.epitopeSpecies : 'NA'}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="Mutation" detail={`${data.mutation ? data.mutation : 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="Recognizes Wild Type Epitope" detail={`${data.recognizesWTEpitope ? data.recognizesWTEpitope : 'NA'}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="UniProt" detail={`${data.uniProt ? data.uniProt : 'NA'}`} color="grey" />
                </Grid.Row>
                {/* <Grid.Row>
                  <Label basic content="Node ID" detail={`${node.id}`} color="grey" />
                </Grid.Row> */}
                <Grid.Row>
                  <Label basic content="Community" detail={`${node.group}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider horizontal hidden />
          {referenceButton}
        </List.Item>
      }
    />
  )
}