import * as React from 'react'
import { Sticky, Menu, Image } from 'semantic-ui-react'

import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import {Routes, Route, Outlet, useNavigate, useLocation, matchPath, NavLink} from 'react-router-dom'


export default function UploadDatasetMenu ({}) {
  const navigate = useNavigate()
  const location = useLocation()
  const routes = [
    {path: 'submit', icon: 'upload', label: 'Submit raw dataset'},
    {path: 'raw', icon: 'list', label: 'View raw datasets'},
    // {path: 'studies', icon: 'map', label: 'Manage studies'}, //commenting out manage studies portion on upload dataset 
  ]
  // console.log(location.pathname, matchPath(, location.pathname))
  // console.log(location.pathname)
  const isActive = path => !!matchPath(`/upload/${path}`, location.pathname)
  return (
    <>
            <Menu inverted color='teal' style={{margin: 0, borderRadius: 0}}>
              <Menu.Menu position='right'>
                {routes.map(
                  ({path, icon, label}) => (
                    <Menu.Item key={path} {...{header: true, content:label, icon, active: isActive(path), onClick: (e, d) => navigate(`${path}`)}} />
                  )
                )}
              </Menu.Menu>
            </Menu>
    </>
  )
}
