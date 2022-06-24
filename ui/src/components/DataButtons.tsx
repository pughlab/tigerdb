import { useMutation } from '@apollo/client';
import * as R from 'ramda';
import * as React from 'react';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { deleteDataMutation, loadDataMutation } from '../graphql/queries';
import { useDeleteDataMutationMutation, useLoadDataMutation } from '../types/types'

export const LoadDataButton = ({refetch = () => {}}) => {

  const [loadData, { loading, data, error }] = useLoadDataMutation();
  const [isLoading, setLoading] = useState(false)

  return (
    <Button
      onClick={async () => {
        console.log('Loading data...')
        setLoading(true)
        await loadData()
        console.log('Loaded  data')
        setLoading(false)
        refetch()}
      }
    >
      <Button.Content>
        { isLoading ? 'Loading...' : 'Load' }
      </Button.Content>
    </Button>
  );
}

export const DeleteDataButton = ({refetch = () => {}}) => {
  const [deleteData, {loading, data, error}] = useDeleteDataMutationMutation()

  return (
    <Button
      onClick={async () => {console.log('Deleting data...'); await deleteData(); console.log('Data deleted'); refetch()}}
    >
      <Button.Content>
        Delete
      </Button.Content>
    </Button>
  )
}