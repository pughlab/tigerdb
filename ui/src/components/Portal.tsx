import * as React from 'react'
import { Sticky, Menu, Image, Divider, Container } from 'semantic-ui-react'

import useKeycloakMeMutation from '../hooks/useKeycloakMeMutation'
import {Routes, Route, Outlet, useNavigate, useLocation, matchPath, Link} from 'react-router-dom'

import LoginModal from './LoginModal'
import UserSettings from './pages/UserSettings'
import ExploreDatabase from './pages/ExploreDatabase'
import UserHome from './pages/UserHome'
import SegmentPlaceholder from './common/SegmentPlaceholder'

import UploadDatasetMenu from './pages/UploadDataset/UploadDatasetMenu'
import UploadDatasetTables from './pages/UploadDataset/UploadDatasetTables'
import RawDatasetsList from './pages/RawDatasets/RawDatasetsList'
import RawDatasetDetails from './pages/RawDatasets/RawDatasetDetails'

import TimelineOntologies from './pages/Ontologies/Timelines'
import MetadataOntology from './pages/Ontologies/Metadata'
import TaxonomyOntologies from './pages/Ontologies/Taxonomy'
import KeycloakAuthentication from './helpers/KeycloakAuthentication'

// import logo from '../imic_logo.png'
import logo from '../uhnpicture.png'
import ManageStudies from './pages/ManageStudies/ManageStudies'

import keycloak from '../keycloak/keycloak'

function Layout ({}) {
  const navigate = useNavigate()
  const location = useLocation()
  const routes = [
    {path: '/', icon: 'home'},
    // {path: '/database', icon: 'database'}, //removing database icon from top nav bar
    {path: '/upload', icon: 'upload'},
    {path: '/login', icon: 'user'},
    // {path: '/settings', icon: 'settings'}, // removing settings icon from top nav bar
  ]
  // Doesnt work for nested
  const isActive = path => !!matchPath(path, location.pathname)
  return (
    <>
    <Sticky>
      <Menu inverted color='blue' style={{margin: 0, borderRadius: 0}}>
        <Menu.Menu position='left'>
          <Image size='small' src={logo} />
        </Menu.Menu>
        
        <Menu.Menu position='right'>
          {routes.map(
            ({path, icon}) => <Menu.Item key={path} {...{header: true, icon, active: isActive(path), onClick: (e, d) => navigate(path)}} />
          )}
          <LoginModal />


        </Menu.Menu>
      </Menu>
      <Routes>
          <Route path='upload/*' element={<UploadDatasetMenu />} />
      </Routes>
    </Sticky>
    <Divider horizontal />
    <div style={{padding: '1em'}}>
      <Outlet />
    </div>
    </>
  )
}

export default function Portal () {
  const [meMutationState] = useKeycloakMeMutation()

  return (
    <Routes>
      <Route path="*"  element={<Layout />} >
        <Route index element={<UserHome />} />
        <Route path='database/*' element={<Outlet />} >
          <Route index element={
            <Container>
              <SegmentPlaceholder text={<><Link to='ontologies'>Ontologies</Link> or <Link to='raw'>Collected Data</Link></>} icon='compass' />
            </Container>
          } />
          <Route path='ontologies' element={<Outlet />}>
            <Route index element={
              <Container>
                  <SegmentPlaceholder
                    text={
                      <><Link to='timeline'>Timelines</Link> or <Link to='metadata'>Metadata</Link> or <Link to='taxnonomy'>Taxonomies</Link> </>
                    }
                    icon='compass'
                  />
              </Container>
            } />
            <Route path='timeline' element={<TimelineOntologies />} />
            <Route path='metadata' element={<MetadataOntology />} />
            <Route path='taxonomies' element={<TaxonomyOntologies />} />
          </Route>
          {/* <Route path="*" element={<SegmentPlaceholder text='Not found!' icon='meh outline' />} /> */}
        </Route>
        <Route path='upload/*' element={<Outlet />}>
          <Route index element={
            <Container>
                <SegmentPlaceholder text={<><Link to='submit'>Submit a raw dataset</Link> or <Link to='raw'>view existing ones</Link></>} icon='compass' />
            </Container>
          } />
          <Route path='submit' element={<UploadDatasetTables />} />
          <Route path='raw' element={<RawDatasetsList />} />
          <Route path='raw/:rawDatasetID' element={<RawDatasetDetails />} />
          <Route path='studies' element={<ManageStudies />} />          
        </Route>
        <Route path='settings/*' element={<UserSettings />} />
        <Route path='login/*' element={<KeycloakAuthentication />} />

        <Route path="*" element={<SegmentPlaceholder text='Not found!' icon='meh outline' />} />
      </Route>

    </Routes>
  )
}