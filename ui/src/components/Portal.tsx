import * as React from 'react'
import { Sticky, Menu, Header, Divider, Image, Segment, Step } from 'semantic-ui-react'
import useKeycloakMeMutation from '../hooks/useKeycloakMeMutation'
import { Routes, Route, Outlet, useNavigate, useLocation, matchPath, Link } from 'react-router-dom'

import SegmentPlaceholder from './common/SegmentPlaceholder'
import NotFoundRedirect from './NotFoundRedirect'
import { Logo } from './logos'
import tigerdb from './logos/tigerdb.png'

import useRouter from '../hooks/useRouter'
import About from './pages/About'
import LoginModal from './authentication/LoginModal'
import Projects from './pages/Projects'
import Datasets from './pages/Datasets'
import Runs from './pages/Runs'
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

function Layout({ }) {
  const { navigate, location, isActivePath } = useRouter()

  const routes = [
    // {path: '/', icon: 'info circle', introID: HOME_MENU_ELEMENT_ID},
    { path: '/home', icon: 'database', introID: DATA_MENU_ELEMENT_ID },
  ]

  const { keycloak } = useKeycloak()
  const [keycloakToken, setKeycloakToken] = useState(keycloak.token)

  return (
    <>

      <Sticky>
        <Menu size='huge'>
          {/* <Menu.Menu position='left' >
          <div>
          <a onClick={() => keycloakRefreshToken(keycloak, setKeycloakToken) }><Logo size='small' /></a>
          </div>
        </Menu.Menu>
        <Menu.Menu position='right'>
        <Header style={{margin: 10}}>
          TCR-DB
        </Header>
        </Menu.Menu> */}
          <Menu.Menu position='left' >
            <div>
              <Link to="/">
                <Logo size='small' style={{ margin: 5 }} />

              </Link>
              {/* {process.env.NODE_ENV !== 'production' ? process.env.NODE_ENV : ''} */}
            </div>
          </Menu.Menu>
          {/* <Menu.Menu position='right'>
        <Header style={{margin: 10}}>
          TIGERdb
        </Header>
        </Menu.Menu> */}
          <Menu.Menu position='right'>

              <Link to="/home" style={{ display: 'flex', alignItems: 'center', margin: 5 }}>


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
            <LoginModal />
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

export default function Portal() {
  const { navigate, location, isActivePathElement } = useRouter()
  // console.log(location)
  const [meMutationState] = useKeycloakMeMutation()
  let routes = [
    { path: 'data', icon: 'database', description: 'upload TCR data', element: <Projects /> },
    { path: 'analysis', icon: 'react', description: 'run GLIPH2 analysis', element: <Runs /> },
    // {path: 'datasets', icon: 'database', element: <Datasets />},
    // {path: 'explore', icon: 'search', element: <Explore />},
    // {path: 'export', icon: 'download', element: <DataExports />},
    // {path: 'metadata', icon: 'search plus', element: <Metadata />},
    { path: 'search', icon: 'certificate', description: 'global CDR3 search', element: <Annotations /> }
  ]

  const const_adminRole = 'role|allowedRoles|admin'
  const const_resource = 'pibu-app'
  const { keycloak } = useKeycloak()
  if (keycloak.hasResourceRole(const_adminRole, const_resource)) {
    routes.push({ path: 'adminUsers', icon: 'chain', description: 'update user controls', element: <AdminUsers /> })
    routes.push({ path: 'adminData', icon: 'dot circle', description: 'update data controls', element: <AdminData /> })
  }

  return (
    <>
      <Layout />
      {/* <RenderOnApproved>
        <RenderOnAcceptedTOS> */}
      <Routes>
        <Route index element={
          <About />
        } />
        <Route key='home' path='home/*' element={
          <>
            <Segment attached='top'>
              <Step.Group size='large' fluid>
                {routes.map(
                  ({ path, icon, description }) => (
                    <Step key={path} title={path} description={description} icon={icon} active={isActivePathElement(path, 2)} onClick={(e, d) => navigate(`home/${path}`)} />
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
      {/* </RenderOnAcceptedTOS>
        </RenderOnApproved> */}
    </>
  )
}