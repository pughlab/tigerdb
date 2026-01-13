import * as React from 'react'
import { Sticky, Menu, Header, Divider, Image, Segment, Step, Icon, Message } from 'semantic-ui-react'
import { Routes, Route, Outlet, Link, Navigate } from 'react-router-dom'

import NotFoundRedirect from './NotFoundRedirect'

import { Logo } from './logos'

import useRouter from '../hooks/useRouter'
// import About from './pages/About'
import Stats from './pages/Stats'
import PublicLoginModal from './authentication/PublicLoginModal'
import Projects from './pages/Projects'

import PortalNavBarIntro, { DATA_MENU_ELEMENT_ID } from './intros/PortalNavBarIntro'

import tigerdb from './logos/tigerdb.png'
import Runs from './pages/Runs'

function Layout({ }) {
  const { navigate, location, isActivePath } = useRouter()

  const routes = [
    // {path: '/', icon: 'info circle', introID: HOME_MENU_ELEMENT_ID},
    { path: '/public', icon: 'home', introID: DATA_MENU_ELEMENT_ID },
    // { path: '/stats', icon: 'chart bar', introID: 'stats-menu-element'},
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
                <Logo size='small' style={{ margin: 5 }} />

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
      {/* <div style={{ padding: '1em' }}> */}
        {/* <Outlet /> */}
      {/* </div> */}
    </>
  )
}

export default function PublicPortal() {
  const { navigate, location, isActivePathElement } = useRouter()
  // console.log(location)
  let routes = [
    // { path: 'search', icon: 'certificate', description: 'global CDR3 search', disabled: false, element: <Annotations />},
    { path: 'data', icon: 'database', description: 'login to upload TCR data', disabled: false, element: <Projects /> },
    { path: 'analysis', icon: 'react', description: 'run GLIPH2 analysis', disabled: false, element: <Runs /> }
  ]

  return (
    <>
      <Layout />
      <Routes>
        {/* <Route index element={
          <About />
        } /> */}
        <Route key='/public' path='public/*' element={
          <div style={{ margin: '2em' }}>
            <Segment basic attached='top'>
              <Step.Group fluid>
                {routes.map(
                  ({ path, description, icon, disabled }) => (
                    <Step key={path} title={path} description={description} icon={icon} disabled={disabled} active={isActivePathElement(path, 2)} onClick={(e, d) => navigate(`public/${path}`)} />
                  )
                )}
              </Step.Group>
            </Segment>
            <Segment attached>
              <Message color='teal'>
                <Icon name='lock open' />
                This website is free and open to all users. Upload and analysis of sensitive human TCR data requires a login. 
              </Message>
            </Segment>
            <Segment attached='bottom'>
              <Outlet />
            </Segment>
          </div>
        }>
          <Route key='index' index element={
            <Navigate to="data" replace />
          } />
          {routes.map(
            ({ path, icon, element }) => (
              <Route key={path} path={`${path}/*`} element={element} />
            )
          )}
        </Route>
        <Route key="stats" path="/stats" element={<Stats />} />
        {/* <Route key='notfound' path="*" element={<SegmentPlaceholder text='404 - Not Found!' icon='exclamation triangle' />} /> */}
        <Route key="notfound" path="*" element={<NotFoundRedirect isLoggedIn={false} />} />
      </Routes>
    </>
  )
}