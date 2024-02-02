import * as React from 'react'

import {Segment, Card, Image, Icon} from 'semantic-ui-react'
import { Logo } from '../logos'


export default function LoadingAuthentication ({}) {
    return (
    <Segment basic textAlign='center'>
      <Card.Group centered>
    <Card>
      <Logo />
      <Card.Content extra textAlign='center'>
        <a>
          {/* <Icon name='key' /> */}
          {`Loading TIGERdb... `}
          <Icon name='spinner' loading />
        </a>
      </Card.Content>
    </Card>
    </Card.Group>
    </Segment>
    )
}