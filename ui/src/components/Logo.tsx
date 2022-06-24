import * as React from 'react'
import {useState, useEffect, useRef} from 'react'

import {Segment, Card, Image, Icon} from 'semantic-ui-react'

import logo from '../imic_logo.png'

export function Logo ({

}) {
  return (
    <Segment basic textAlign='center'>
      <Card.Group centered>
    <Card>
      <Image src={logo} centered size='medium' ui={false} wrapped />
      <Card.Content extra textAlign='center'>
        <a>
          <Icon name='key' />
          {`Redirecting from Keycloak `}
          <Icon name='user' />
        </a>
      </Card.Content>
    </Card>
    </Card.Group>
    </Segment>
  )
}