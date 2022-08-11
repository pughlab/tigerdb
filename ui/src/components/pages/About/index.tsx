import * as React from 'react';
import { Container, Segment, Grid, Header, Divider, Icon } from 'semantic-ui-react'

import CalendarHeatmapVisualization from '../../visualizations/heatmap/calendar/CalendarHeatmapVisualization'
import {AboutPortal} from '../../logos'

export default function About() {
  return (
    <Container as={Segment}>
      <Segment>
        <AboutPortal />
      </Segment>
      <Segment>
        <CalendarHeatmapVisualization />
      </Segment>

    </Container>
  );
};
