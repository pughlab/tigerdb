import * as React from 'react'
import { Sticky, Menu, Header, Divider, Image, Segment, Step } from 'semantic-ui-react'
import useKeycloakMeMutation from '../hooks/useKeycloakMeMutation'
import { Routes, Route, Outlet, useNavigate, useLocation, matchPath, Link } from 'react-router-dom'

import SegmentPlaceholder from './common/SegmentPlaceholder'
import NotFoundRedirect from './NotFoundRedirect'

import { Logo } from './logos'

import useRouter from '../hooks/useRouter'
import About from './pages/About'
import PublicLoginModal from './authentication/PublicLoginModal'
import Studies from './pages/Studies'
import Datasets from './pages/Datasets'
import Explore from './pages/Explore'
import DataExports from './pages/DataExports'
import Metadata from './pages/Metadata'
import AdminUsers from './pages/Admin/AdminUsers'
import Annotations from './pages/Annotations'

import PortalNavBarIntro, { HOME_MENU_ELEMENT_ID, DATA_MENU_ELEMENT_ID } from './intros/PortalNavBarIntro'
import { useKeycloak } from '@react-keycloak/web'
import AdminData from './pages/Admin/AdminData'
import RenderOnApproved from './authentication/RenderOnApproved'
import RenderOnAcceptedTOS from './authentication/RenderOnAcceptedTOS'
import { keycloakRefreshToken } from '../common'
import { useState } from 'react'

import tigerdb from './logos/tigerdb.png'

function Layout({ }) {
  const { navigate, location, isActivePath } = useRouter()

  const routes = [
    // {path: '/', icon: 'info circle', introID: HOME_MENU_ELEMENT_ID},
    { path: '/public', icon: 'database', introID: DATA_MENU_ELEMENT_ID },
  ]

  // const { keycloak } = useKeycloak()
  // const [keycloakToken, setKeycloakToken] = useState(keycloak.token)

  return (
    <>

      <Sticky>
        <Menu size='huge'>
          <Menu.Menu position='left' >
            <div>
              <Link to="/">
                <Logo size='small' />

              </Link>
              {/* {process.env.NODE_ENV !== 'production' ? process.env.NODE_ENV : ''} */}
            </div>
          </Menu.Menu>
          <Menu.Menu position='right'>

            <Link to="/public" style={{ display: 'flex', alignItems: 'center', margin: 5 }}>


              <Image size='mini' src={tigerdb} />

              <Header as='h1' style={{ margin: 5 }}>

                TIGERdb
              </Header>
            </Link>
          </Menu.Menu>


          <Menu.Menu position='right'>
            {routes.map(
              ({ path, icon, introID }) => <Menu.Item id={introID} key={path} {...{ header: true, icon, active: isActivePath(path), onClick: (e, d) => navigate(path) }} />
            )}
            <PublicLoginModal />
            <PortalNavBarIntro />
          </Menu.Menu>
        </Menu>

      </Sticky>
      <Divider horizontal />
      <div style={{ padding: '1em' }}>
        <Outlet />
      </div>
    </>
  )
}

export default function PublicPortal() {
  const { navigate, location, isActivePathElement } = useRouter()
  // console.log(location)
  let routes = [
    { path: 'data', icon: 'database', description: 'login to upload TCR data', disabled: true },
    { path: 'analysis', icon: 'react', description: 'login to run GLIPH2 analysis', disabled: true},
    { path: 'search', icon: 'certificate', description: 'global CDR3 search', disabled: false, element: <Annotations /> }
  ]

  return (
    <>
      <Layout />
      <Routes>
        <Route index element={
          <About />
        } />
        <Route key='/public' path='public/*' element={
          <>
            <Segment attached='top'>
              <Step.Group fluid>
                {routes.map(
                  ({ path, description, icon, disabled }) => (
                    <Step key={path} description={description} icon={icon} disabled={disabled} active={isActivePathElement(path, 2)} onClick={(e, d) => navigate(`public/${path}`)} />
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
            ({ path, icon, element }) => (
              <Route key={path} path={`${path}/*`} element={element} />
            )
          )}
        </Route>
        {/* <Route key='notfound' path="*" element={<SegmentPlaceholder text='404 - Not Found!' icon='exclamation triangle' />} /> */}
        <Route key="notfound" path="*" element={<NotFoundRedirect />} />
      </Routes>
    </>
  )
}