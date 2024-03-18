import * as React from 'react'

import logo from './logo.png'
import tigerdbLogo from './tigerdb-logo.png'
import { Image, Container, Message, Header, Button, Divider, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import BarChart from '../visualizations/bar/BarChart';

export function Logo ({size='medium', ... props}) {
    return (
        <Image size={size} src={logo} {... props} />
    )
}

export function AboutPortal ({}) {
    return (
      <Container>
        <Divider horizontal>
          <Header as='h1'>
            {/* <Icon name='tint' color='red' size='big' /> */}
            <Header.Content>
              TIGERdb: T-cell and ImmunoGlobulin Epitope Receptor DataBase
            </Header.Content>
          </Header>
        </Divider>

        <Message positive>
        This website is free and open to all users.
        </Message>
        <Message attached color='grey' >
        TIGERdb is a scalable web portal powered by a graph database. Features include a TCR sequence search and functions for integrative analysis.

        </Message>
        <Message attached='bottom'>
          <Button as={Link} to={'/public/annotations'} fluid style={{backgroundColor: "#E8F3F0"}} >
          <Image size='large' src={tigerdbLogo} centered />

          </Button>
        </Message>
        <Message positive>
          <BarChart />
        </Message>
        </Container>
    )
  }