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
              IMiC
              <Header.Subheader>
                <a href="https://www.milcresearch.com/imic.html" target='_blank'>
                International Milk Composition Consortium
                </a>
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Divider>
        <Segment color='black' size='big'>
        The International Milk Composition (IMiC) Consortium was established in 2020 to unite maternal-child health and human milk researchers with statistical experts to co-develop a harmonized approach to human milk analysis.
        </Segment>
      </Container>
    )
  }