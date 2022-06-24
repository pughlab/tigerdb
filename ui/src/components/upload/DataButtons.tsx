import { gql, useMutation } from '@apollo/client';
import * as React from 'react';
import { Button } from 'semantic-ui-react';

export const LoadDataButton = () => {

  const loadDataMutation = gql`
  mutation {load load2}
  `;

  const [loadData, { loading, data, error }] = useMutation(loadDataMutation);

  return (
    <Button
      onClick={async () => { console.log('Loading data...'); await loadData(); console.log('Loaded  data'); }}
    >
      <Button.Content>
        Load
      </Button.Content>
    </Button>
  );
}

export const DeleteDataButton = () => {

  const deleteDataMutation = gql`
  mutation {delete}
  `
  const [deleteData, {loading, data, error}] = useMutation(deleteDataMutation)

  return (
    <Button
      onClick={async () => {console.log('Deleting data...'); await deleteData(); console.log('Data deleted')}}
    >
      <Button.Content>
        Delete
      </Button.Content>
    </Button>
  )
}