import React from 'react';
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Popup,
} from "semantic-ui-react";
import useRouter from "../../../../hooks/useRouter";

export default function TCRInfo({ node }: Readonly<{ node: any }>) {
  const { navigate } = useRouter();

  let referenceButton

  if (node.reference) {
    referenceButton = (
      <Button fluid color="black">
        <Icon name="book" style={{ color: "white" }} />
        {node.reference}
      </Button>
    )
  } else if (node.datasetName) {
    referenceButton = (
      <Button fluid color="blue">
        <Icon name="database" style={{ color: "white" }} />
        {node.datasetName} - {node.projectName}
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
        node.reference
        ? `Click here to go to publication (${node.reference})`
        : `Click here to go to project (${node.projectName})`
      }
      position="top center"
      style={{ color: "white" }}
      icon={node.reference ? "book" : "database"}
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
          onClick={() => {openDocument(node.reference, node.projectID)}
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
                  <Label basic content="TRBV" detail={`${node.v_gene ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="TRBJ" detail={`${node.j_gene ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="TRAV" detail={`${node.trav ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="TRAJ" detail={`${node.traj ?? 'NA'}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="MHC" detail={`${node.mhc ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="MHC Class" detail={`${node.mhcClass ?? 'NA'}`} color="grey" />
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
                  <Label basic content="Epitope Amino Acid Sequence" detail={`${node.epitopeAAseq ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="Epitope Gene" detail={`${node.epitopeGene ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="Epitope Species" detail={`${node.epitopeSpecies ?? 'NA'}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="Mutation" detail={`${node.mutation ?? 'NA'}`} color="grey" />
                </Grid.Row>
                <Grid.Row>
                  <Label basic content="Recognizes Wild Type Epitope" detail={`${node.recognizesWTEpitope ?? 'NA'}`} color="grey" />
                </Grid.Row>
              </Grid.Column>
              
              <Grid.Column>
                <Grid.Row>
                  <Label basic content="UniProt" detail={`${node.uniProt ?? 'NA'}`} color="grey" />
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