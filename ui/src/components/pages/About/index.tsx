import * as React from 'react';
import { Container, Segment, Grid, Header, Divider, Icon } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
// import logo from '../../imic_logo.png';
import uhn from '../../../../src/uhn.png';
import cbmp from '../../../../src/cbmp.png';
import ccs from '../../../../src/ccs.png';
import pugh from '../../../../src/pugh.png';

export default function About () {
  return (
    <Container as={Segment}>
        <Divider horizontal>
          {/* <Header size='huge' content={'PLBR (fragmentomics.ca)'} subheader={'Phenomic Liquid Biopsy Database'} /> */}
          <Header as='h1'>
            <Icon name='tint' color='red' size='big' />
           <Header.Content>
             PLBR (fragmentomics.ca)
             <Header.Subheader>Phenomic Liquid Biopsy Database</Header.Subheader>
            </Header.Content>
          </Header>
        </Divider>
        <Segment color='blue' size='big'>
            <Divider horizontal>
              <Header as='h2' content='About Us' />
            </Divider>     
            <b>PLBR: </b>the <b>Phenomic Liquid Biopsy Database</b> is currently under development. With funding support from the CCS (Canadian Cancer Society) via a Data Transformation Grant and support from the CBMP (Computational Biology and Medicine Program), we are building a a web-accessible database for secure sharing of systematically annotated cell-free DNA (cfDNA) fragmentomic profiles. 
            <br/>
            <br/>
            Fragmentomics, the study of DNA breakage patterns in blood plasma, is a rapidly emerging field to enable early detection and monitoring of any type of cancer. The PLBR will enable any user to query and retrieve fragmentomic profiles for use in their research, as well as upload their own profiles for sharing with collaborators or as an open data set. Long-term, we envision this system will become a centralized resource for researchers and clinical laboratorians around the world to build, validate, and launch clinical assays as these technologies enter routine use for early detection and monitoring of cancer.
          </Segment>
      <Segment>
            <Grid columns={2}>
            <Grid.Row/>

              <Divider horizontal>
                <Header as='h2' content='Developed By' />
              </Divider>

              <Grid.Row>
                <Grid.Column>
                  <Image src={pugh}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={uhn}/>
                </Grid.Column>
              </Grid.Row>

              <Divider horizontal>
                <Header as='h2' content='Proudly Funded By' />
              </Divider>

              <Grid.Row>
                <Grid.Column>
                  <Image src={ccs} />
                </Grid.Column>
                <Grid.Column>
                  <Image src={cbmp} />
                </Grid.Column>
              </Grid.Row>
            </Grid>



      {/* <Segment inverted>
            <Header content='Proudly Supported By'/>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image src={ccs}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={cbmp}/>
                </Grid.Column>
              </Grid.Row>
            </Grid> */}
          </Segment>
    </Container>
  );
};
