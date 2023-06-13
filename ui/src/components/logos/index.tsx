import * as React from 'react'

import logo from './logo.png'
import { Image, Container, Segment, Header, Icon, Divider, Grid } from 'semantic-ui-react'

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
              TCRdb
            </Header.Content>
          </Header>
        </Divider>
      </Container>
    )
  }