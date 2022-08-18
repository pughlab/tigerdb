import * as React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

import DatasetsList from './DatasetsList'
import DatasetDetails from './DatasetDetails'

export default function Datasets() {
  return (
    <Routes>
      {/* Default /datasets path goes to raw dataset search */}
      <Route index element={<DatasetsList />} />

      <Route path=':datasetID' element={<DatasetDetails />} />
    </Routes>
  )
}