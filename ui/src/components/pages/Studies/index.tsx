import * as React from 'react'
import { Route, Routes } from 'react-router-dom'

import StudiesList from './StudiesList'
import StudyDetails from './StudyDetails'

export default function StudiesRoutes() {
	return (
		<Routes>
			{/* Default /datasets path goes to export search */}
			<Route index element={<StudiesList />} />

			<Route path=':studyID' element={<StudyDetails />} />
		</Routes>
	)
}