import React from 'react'
import { Container, Header, Icon, Segment } from 'semantic-ui-react'
export default function SegmentPlaceholder ({text='', icon='exclamation', basic=false, color='', loading=false, children}:  {text: string | Element, icon: string, basic: boolean, color: string, loading: boolean, buttons?: [Element]}) {
    return (
        <Segment placeholder basic={basic} color={color} loading={loading}>
          <Header icon>
            <Icon name={icon} />
              {text}
          </Header>
          {children}
        </Segment>
    )
}

export function ContainerSegmentPlaceholder(props) {
  return (
    <Container>
      <SegmentPlaceholder {...props} />
    </Container>
  )
}