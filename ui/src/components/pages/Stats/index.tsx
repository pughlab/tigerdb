import * as React from 'react';
import { Container, Segment, Grid, Header, Divider, Icon } from 'semantic-ui-react'

import CalendarHeatmapVisualization from '../../visualizations/heatmap/calendar/CalendarHeatmapVisualization'
import {StatsPortal} from '../../logos'

export default function Stats() {
  return (
    <Container as={Segment}>
      <Segment>
        <StatsPortal />
      </Segment>
      {/* <Segment>
        <CalendarHeatmapVisualization />
      </Segment> */}

    </Container>
  );
};
