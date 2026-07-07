import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import RunsList from './RunsList'
import RunDetails from './RunDetails'

export default function StudiesRoutes() {
	return (
		<Routes>
			{/* Default /datasets path goes to export search */}
			<Route index element={<RunsList />} />

			<Route path=':runID' element={<RunDetails />} />
		</Routes>
	)
}