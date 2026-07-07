import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import ProjectsList from './ProjectsList'
import ProjectDetails from './ProjectDetails'

export default function StudiesRoutes() {
	return (
		<Routes>
			{/* Default /datasets path goes to export search */}
			<Route index element={<ProjectsList />} />

			<Route path=':projectID' element={<ProjectDetails />} />
		</Routes>
	)
}