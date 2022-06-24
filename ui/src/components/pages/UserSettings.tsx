import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'
import * as React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import { LoadDataButton, DeleteDataButton } from '../upload/DataButtons'
import SampleData from '../tables/example/SampleData'

import ExploreDatabase from './ExploreDatabase'
import {useDropzone} from 'react-dropzone'

export default function UserSettings () {
  return (
    <Container as={Segment}>
      Settings
    </Container>
  ) 
}