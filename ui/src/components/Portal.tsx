import * as React from 'react'
import { Sticky, Menu, Image, Divider, Container, Segment, Step } from 'semantic-ui-react'

import useKeycloakMeMutation from '../hooks/useKeycloakMeMutation'
import {Routes, Route, Outlet, useNavigate, useLocation, matchPath, Link} from 'react-router-dom'


import SegmentPlaceholder from './common/SegmentPlaceholder'

import UploadDatasetMenu from './pages/UploadDataset/UploadDatasetMenu'
import UploadDatasetTables from './pages/UploadDataset/UploadDatasetTables'
import RawDatasetsList from './pages/Datasets/RawDatasetsList'
import RawDatasetDetails from './pages/Datasets/RawDatasetDetails'

import TimelineOntologies from './pages/Ontologies/Timelines'
import MetadataOntology from './pages/Ontologies/Metadata'
import TaxonomyOntologies from './pages/Ontologies/Taxonomy'

// import logo from '../imic_logo.png'
import logo from '../UHN-removebg.png'


import useRouter from '../hooks/useRouter'
import About from './pages/About'
import LoginModal from './LoginModal'
import Studies from './pages/Studies'
import Datasets from './pages/Datasets'
import Explore from './pages/Explore'
import DataExports from './pages/DataExports'

function Layout ({}) {
  const {navigate, location, isActivePath} = useRouter()
  const routes = [
    {path: '/', icon: 'info circle'},
    {path: '/home', icon: 'database'},
  ]
  return (
    <>
    <Sticky>
      <Menu inverted color='blue' style={{margin: 0, borderRadius: 0}}>
        <Menu.Menu position='left'>
          <Image size='medium' src={logo} />
        </Menu.Menu>
        
        <Menu.Menu position='right'>
          {routes.map(
            ({path, icon}) => <Menu.Item key={path} {...{header: true, icon, active: isActivePath(path), onClick: (e, d) => navigate(path)}} />
          )}
          <LoginModal />
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
    {path: 'metadata', icon: 'search plus', element: <>search</>},
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
          <Route index element={<SegmentPlaceholder text='Select a part of the process' />} />
          {routes.map(
            ({path, icon, element}) => (
              <Route path={`${path}/*`} element={element} />
            )
          )}
        </Route>

        {/* Put home page nav bar in outlet  */}
        {/* <Route path='about' element={<About />} /> */}
        {/* <Route path='database/*' element={<Outlet />} > */}
          {/* <Route index element={
            <Container>
              <SegmentPlaceholder text={<><Link to='ontologies'>Ontologies</Link> or <Link to='raw'>Collected Data</Link></>} icon='compass' />
            </Container>
          } /> */}
          {/* <Route path='ontologies' element={<Outlet />}>
            <Route index element={
              <Container>
                  <SegmentPlaceholder
                    text={
                      <><Link to='timeline'>Timelines</Link> or <Link to='metadata'>Metadata</Link> or <Link to='taxnonomy'>Taxonomies</Link> </>
                    }
                    icon='compass'
                  />
              </Container>
            } /> */}
            {/* <Route path='timeline' element={<TimelineOntologies />} />
            <Route path='metadata' element={<MetadataOntology />} />
            <Route path='taxonomies' element={<TaxonomyOntologies />} /> */}
          {/* </Route> */}
          {/* <Route path="*" element={<SegmentPlaceholder text='Not found!' icon='meh outline' />} /> */}
        {/* </Route> */}
        {/* <Route path='upload/*' element={<Outlet />}>
          <Route index element={
            <Container>
                <SegmentPlaceholder text={<><Link to='submit'>Submit a raw dataset</Link> or <Link to='raw'>view existing ones</Link></>} icon='compass' />
            </Container>
          } />
          <Route path='submit' element={<UploadDatasetTables />} />
          <Route path='raw' element={<RawDatasetsList />} />
          <Route path='raw/:rawDatasetID' element={<RawDatasetDetails />} />
          <Route path='studies' element={<ManageStudies />} />          
        </Route> */}
        {/* <Route path='settings/*' element={<UserSettings />} /> */}

        {/* Don't need this for now since we have login in landing, may need later for public data access
            <Route path='login/*' element={<KeycloakAuthentication />} />
        */}

        <Route path="*" element={<SegmentPlaceholder text='Not found!' icon='meh outline' />} />
      </Route>

    </Routes>
  )
}