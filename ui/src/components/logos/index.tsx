import * as React from 'react'

import logo from './logo.png'
import tigerdb from './tigerdb.png'
import { Image, Container, Message, Header, Button, Divider, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import BarChart from '../visualizations/bar/BarChart';
import { useKeycloak } from "@react-keycloak/web";

export function Logo({ size = 'medium', ...props }) {
  return (
    <Image size={size} src={logo} {...props} />
  )
}

export function AboutPortal({ }) {

  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  return (
    <Container>
      <Divider horizontal>
        <Header as='h1'>
          {/* <Icon name='tint' color='red' size='big' /> */}
          <Header.Content>
            TIGERdb: <span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>T</span>-cell and <span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>I</span>mmuno<span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>G</span>lobulin <span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>E</span>pitope <span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>R</span>eceptor <span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>D</span>ata<span style={{ textDecoration: 'underline', textDecorationColor: 'tomato' }}>B</span>ase
          </Header.Content>
        </Header>
      </Divider>

      <Message color='teal'>
        <Icon name='lock open' />
        This website is free and open to all users.
      </Message>
      <Message attached color='grey' >
        <Icon name='info circle' />
        TIGERdb is a scalable web portal powered by a Neo4J graph database. Features include a TCR sequence search and functions for integrative analysis.

      </Message>
      <Message attached='bottom'>
        <Button as={Link} to={isLoggedIn ? '/home/data' : '/public/search'} fluid  >
          <Image size='large' src={tigerdb} centered />

        </Button>
      </Message>
      <Message positive>
        <BarChart />
      </Message>
    </Container>
  )
}