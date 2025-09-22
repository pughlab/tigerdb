import * as React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import AnnotationsProjectsList from './AnnotationsProjectsList'

// import AnnotationsList from './AnnotationsList'
// import DatasetDetails from './DatasetDetails'

export default function Annotations() {
  return (
    <Routes>
      {/* Default /datasets path goes to raw dataset search */}
      <Route index element={<AnnotationsProjectsList />} />

      {/* <Route path=':datasetID' element={<DatasetDetails />} /> */}
    </Routes>
  )
}