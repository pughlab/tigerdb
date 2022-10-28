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

import PortalNavBarIntro, {HOME_MENU_ELEMENT_ID, DATA_MENU_ELEMENT_ID} from './intros/PortalNavBarIntro'

function Layout ({}) {
  const {navigate, location, isActivePath} = useRouter()
  const routes = [
    {path: '/', icon: 'info circle', introID: HOME_MENU_ELEMENT_ID},
    {path: '/home', icon: 'database', introID: DATA_MENU_ELEMENT_ID},
  ]
  return (
    <>
    
    <Sticky>
      <Menu style={{margin: 0, borderRadius: 0}}>
        <Menu.Menu position='left'>
          <Logo size='small' />
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
  console.log(location)
  const [meMutationState] = useKeycloakMeMutation()
  const routes = [
    {path: 'studies', icon: 'stethoscope', element: <Studies />},
    {path: 'datasets', icon: 'database', element: <Datasets />},
    {path: 'explore', icon: 'search', element: <Explore />},
    {path: 'export', icon: 'download', element: <DataExports />},
    {path: 'metadata', icon: 'search plus', element: <Metadata />},
  ]
  return (
    <Routes>
      <Route path="*"  element={<Layout />} >
        <Route index element={<About />} />
        <Route path='home/*' element={
          <>
            <Segment attached='top'>
            <Step.Group fluid>
              {routes.map(
                ({path, icon}) => (
                  <Step description={path} icon={icon} active={isActivePathElement(path, 2)} onClick={(e, d) => navigate(`home/${path}`)} />
                )
              )}
            </Step.Group>
            </Segment>
            <Segment attached='bottom'>
              <Outlet /> 
            </Segment>
          </>
        }>
          <Route index element={<SegmentPlaceholder text='Select a part of the process' icon='info' />} />
          {routes.map(
            ({path, icon, element}) => (
              <Route path={`${path}/*`} element={element} />
            )
          )}
        </Route>
        <Route path="*" element={<SegmentPlaceholder text='Not found!' icon='meh outline' />} />
      </Route>

    </Routes>
  )
}