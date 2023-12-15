import * as React from 'react'

import logo from './logo.png'
import { Image, Container, Message, Header, Segment, Divider, Grid } from 'semantic-ui-react'

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
              TCR-DB: T-Cell Receptor Database
            </Header.Content>
          </Header>
        </Divider>
        <Message>
        TCR-DB is a scalable web portal powered by a graph database. Features include a TCR sequence search and functions for integrative analysis.
        </Message>
      </Container>
    )
  }