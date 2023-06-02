import React from 'react';
import { useMachine } from '@xstate/react';
import OntologyConceptDropdown from './OntologyConceptDropdown';
import TimePointDropdown from './TimePointDropdown';
import {Segment, Grid} from 'semantic-ui-react'

import dataSelectionMachine from '../../machines/dataSelectionMachine';

function DataSelectionSearch() {
  const [current, send] = useMachine(dataSelectionMachine);

  return (
    <Segment as={Grid}>
      <Grid.Row columns={2}>
        <Grid.Column>
          <TimePointDropdown dataSelectionSend={send} />
        </Grid.Column>
        <Grid.Column>
          <OntologyConceptDropdown dataSelectionSend={send} />
        </Grid.Column>
      </Grid.Row>
    </Segment>
  );
}

export default ParentComponent;
