import * as React from 'react'

import logo from './logo.png'
import tigerdb from './tigerdb.png'
import { Image, Container, Message, Header, Button, Divider, Icon, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";
import { EnhancedBarChart } from '../visualizations/bar/EnhancedBarChart';
import CalendarHeatmapVisualization from '../visualizations/heatmap/calendar/CalendarHeatmapVisualization';

export function Logo({ size = 'medium', ...props }) {
  return (
    <Image size={size} src={logo} {...props} />
  )
}

export function StatsPortal({ }) {

  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  return (
    <Container>
      <Divider horizontal>
        <Header as='h1'>
          {/* <Icon name='tint' color='red' size='big' /> */}
          <Header.Content>
            STATS
          </Header.Content>
        </Header>
      </Divider>

      {/* <Message color='teal'>
        <Icon name='lock open' />
        This website is free and open to all users.
      </Message>
      <Message attached color='grey' >
        <Icon name='info circle' />
        TIGERdb is a scalable web portal powered by a Neo4J graph database. Features include a TCR sequence search and functions for integrative analysis.

      </Message> */}
      {/* <Message attached='bottom'>
        <Button as={Link} to={isLoggedIn ? '/home/data' : '/public/search'} fluid  >
          <Image size='large' src={tigerdb} centered />

          </Button>
        </Message>
        <Message style={{color: 'white', backgroundColor: '#1f1f1f'}}>
          <EnhancedBarChart />
        </Message> */}
        <Divider horizontal content='CURATION TRACKER'/>
        <CalendarHeatmapVisualization/>
          <Message style={{color: 'white', backgroundColor: '#1f1f1f'}}>
          <EnhancedBarChart />
        </Message>
        </Container>
    )
  }
