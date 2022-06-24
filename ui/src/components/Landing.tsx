import * as React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import logo from '../imic_logo.png';
import { PortalReducerArgs } from '../types/ui-types';

export const Landing = ({ state, dispatch } : PortalReducerArgs) => {
  return (
    <>
      <Image centered src={logo} />
      <Grid textAlign='center' style={{ height: '75vh' }} verticalAlign='middle'>
        <Grid.Column color='blue' style={{ height: '35vh' }}>
          <Button
            onClick={() => dispatch({ type: 'setLanding', payload: {view: 'home', landing: false }})}
          >
            <Button.Content>
              Start
            </Button.Content>
          </Button>
            <p>
              <br /><br />
              The International Milk Composition (IMiC) Consortium was created to support a comprehensive harmonized analysis of human breast milk from about 1000 mother-infant dyads living in diverse settings. The IMiC Consortium is comprised of five field sites across the world (Tanzania, Pakistan, Nepal, Burkina Faso, Canada) each tasked with the collection of breast milk and infant growth monitoring.
              <br /><br />
              Our overarching objective is to identify, comprehensively, human milk components linked to infant growth and resilience to inform maternal, newborn and infant nutrition recommendations and interventions.  We will establish a Consortium of maternal-child health and human milk researchers and methodologic experts who will co-develop a harmonized approach to breast milk analysis. This approach will be applied to comprehensively assess the nutritive and bioactive components of human milk, describe and identify sources of inter-individual variation, and determine the role of these milk components in infant growth and development.
            </p>
        </Grid.Column>
      </Grid>
    </>
  );
};
