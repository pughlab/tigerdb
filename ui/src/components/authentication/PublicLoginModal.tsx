import React, {useState, useEffect} from 'react';

import {Embed, Header, Segment, Button, Grid, Modal, Label, Divider, Icon, Image, Popup, Message, Menu} from 'semantic-ui-react'

import { useKeycloak } from '@react-keycloak/web'
import { useAppSelector } from '../../state/hooks';
import { currentAppContextKeycloakMe } from '../../state/appContext';
import { shallowEqual } from 'react-redux';
import {Logo} from '../logos'
import {LOGIN_MENU_ELEMENT_ID} from '../intros/PortalNavBarIntro'
import { keycloakRefreshToken } from '../../common';

import * as R from 'remeda'

export default function LoginModal ({}) {
  // console.log('test')
  // const {keycloakUser} = state
  // const {name, email} = keycloakUser
  const [open, setOpen] = useState(false)
  const { keycloak, initialized } = useKeycloak()
  // const keycloakMe = useAppSelector(currentAppContextKeycloakMe, shallowEqual)
  // console.log(keycloakMe)
  // if (!keycloakMe) {
  //   return (
  //     <Menu.Item
  //       header
  //       // icon={<Icon name='spinner' loading />}
  //       onClick={() => setOpen(!open)}
  //     />
  //   )
  // }
  // // console.log(context)
  // // return null
  // const {name, email} = keycloakMe

  return (
    <>
    <Popup size='large' flowing wide='very'
      trigger={
        <Menu.Item
          id={LOGIN_MENU_ELEMENT_ID}     
          header
          icon='user close'
          onClick={() => {setOpen(!open)}}
        />
      }
    >
      {`Not Logged In`}
    </Popup>
    
    <Modal
      {...{open}}
      closeIcon
      onClose={() => setOpen(!open)}
      closeOnDimmerClick={false}
    >
      <Modal.Content>
      {/* put logout here */}
        <Segment.Group>
          <Segment>
            <Logo centered />
          </Segment>
          <Segment>
          {
            <Header textAlign='center'>
              No user info found! Please login to save data.
            </Header>
          }
          </Segment>
          <Segment>
            <Button
              fluid color='facebook' size='massive'
              content='Login'
              onClick={() => keycloak.login()}
            />
          </Segment>
        </Segment.Group>
     </Modal.Content>
    </Modal>
    </>
  )
}