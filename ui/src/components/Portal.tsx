import * as React from 'react'
import { Sticky, Menu, Image, Divider, Container, Segment, Step } from 'semantic-ui-react'
import useKeycloakMeMutation from '../hooks/useKeycloakMeMutation'
import {Routes, Route, Outlet, useNavigate, useLocation, matchPath, Link} from 'react-router-dom'

import SegmentPlaceholder from './common/SegmentPlaceholder'

import {Logo} from './logos'

import useRouter from '../hooks/useRouter'
import About from './pages/About'
import LoginModal from './authentication/LoginModal'
import Studies from './pages/Studies'
import Datasets from './pages/Datasets'
import Explore from './pages/Explore'
import DataExports from './pages/DataExports'
import Metadata from './pages/Metadata'
import AdminUsers from './pages/Admin/AdminUsers'
import Annotations from './pages/Annotations'

import PortalNavBarIntro, {HOME_MENU_ELEMENT_ID, DATA_MENU_ELEMENT_ID} from './intros/PortalNavBarIntro'
import { useKeycloak } from '@react-keycloak/web'
import AdminData from './pages/Admin/AdminData'
import RenderOnApproved from './authentication/RenderOnApproved'
import RenderOnAcceptedTOS from './authentication/RenderOnAcceptedTOS'
import { keycloakRefreshToken } from '../common'
import { useState } from 'react'

function Layout ({}) {
  const {navigate, location, isActivePath} = useRouter()

  const routes = [
    // {path: '/', icon: 'info circle', introID: HOME_MENU_ELEMENT_ID},
    {path: '/home', icon: 'database', introID: DATA_MENU_ELEMENT_ID},
  ]

  const { keycloak } = useKeycloak()
  const [keycloakToken, setKeycloakToken] = useState(keycloak.token)

  return (
    <>
    
    <Sticky>
      <Menu style={{margin: 0, borderRadius: 0}}>
        <Menu.Menu position='left'>
          <div>
          <a onClick={() => keycloakRefreshToken(keycloak, setKeycloakToken) }><Logo size='small' /></a>
          {/* {process.env.NODE_ENV !== 'production' ? process.env.NODE_ENV : ''} */}
          </div>
        </Menu.Menu>
        
        <Menu.Menu position='right'>
          {routes.map(
            ({path, icon, introID}) => <Menu.Item id={introID} key={path} {...{header: true, icon, active: isActivePath(path), onClick: (e, d) => navigate(path)}} />
          )}
          <LoginModal />
          <PortalNavBarIntro />
        </Menu.Menu>
      </Menu>
      
    </Sticky>
    <Divider horizontal />
    <div style={{padding: '1em'}}>
      <Outlet />
    </div>
    </>
  )
}

export default function Portal () {
  const {navigate, location, isActivePathElement} = useRouter()
  // console.log(location)
  const [meMutationState] = useKeycloakMeMutation()
  let routes = [
    {path: 'studies', icon: 'stethoscope', element: <Studies />},
    {path: 'datasets', icon: 'database', element: <Datasets />},
    // {path: 'explore', icon: 'search', element: <Explore />},
    // {path: 'export', icon: 'download', element: <DataExports />},
    // {path: 'metadata', icon: 'search plus', element: <Metadata />},
    {path: 'annotations', icon: 'certificate', element: <Annotations/>}
  ]

  const const_adminRole = 'role|allowedRoles|admin'
  const const_resource = 'pibu-app'
  const { keycloak } = useKeycloak()
  if (keycloak.hasResourceRole(const_adminRole, const_resource)) {
    routes.push({path: 'adminUsers', icon: 'chain', element: <AdminUsers />})
    routes.push({path: 'adminData', icon: 'dot circle', element: <AdminData />})
  }

  return (
    <>
      <Layout />
      <RenderOnApproved>
        <RenderOnAcceptedTOS>
          <Routes>
              <Route index element={
                <About />
              } />
              <Route key='home' path='home/*' element={
                <>
                  <Segment attached='top'>
                  <Step.Group fluid>
                    {routes.map(
                      ({path, icon}) => (
                        <Step key={path} description={path} icon={icon} active={isActivePathElement(path, 2)} onClick={(e, d) => navigate(`home/${path}`)} />
                      )
                    )}
                  </Step.Group>
                  </Segment>
                  <Segment attached='bottom'>
                    <Outlet /> 
                  </Segment>
                </>
              }>
                <Route key='index' index element={<SegmentPlaceholder text='Select a part of the process' icon='info' />} />
                {routes.map(
                  ({path, icon, element}) => (
                    <Route key={path} path={`${path}/*`} element={element} />
                  )
                )}
              </Route>
              <Route key='notfound' path="*" element={<SegmentPlaceholder text='Not found!' icon='meh outline' />} />
            </Routes>
          </RenderOnAcceptedTOS>
        </RenderOnApproved>
    </>
  )
}