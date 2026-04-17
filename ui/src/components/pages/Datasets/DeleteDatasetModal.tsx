import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Icon, Modal, Popup } from 'semantic-ui-react';
export default function DeleteDatasetModal({ datasetID, datasetName, refetch }) {
  const [open, setOpen] = useState(false);
  const [deleteDataset] = useMutation(gql`
    mutation DeleteDataset($datasetID: ID!) {
      deleteDataset(datasetID: $datasetID)
    }
  `, { onCompleted: () => { refetch() } })
  function toggleOpen(e) {
    e.stopPropagation();
    setOpen(!open)
  }

  function removeDataset(e, datasetID) {
    e.stopPropagation();
    deleteDataset({ variables: { datasetID } })
    setOpen(!open);
  }

  return (
    <Modal
      open={open}
      closeIcon
      onClose={(e) => { toggleOpen(e) }}
      size="small"
      trigger={
        <Popup
          trigger={
            <Button size='tiny' inverted color="red" icon onClick={(e) => { toggleOpen(e) }}>
              <Icon name="trash" />
            </Button>
          }
          content="Delete Dataset"
          position='top center'
          inverted
        >
        </Popup>
      }
    >
      <Modal.Header>Delete Dataset</Modal.Header>
      <Modal.Content>
        Are you sure you want to delete dataset {datasetName}?
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={(e) => { toggleOpen(e) }}>Cancel</Button>
        <Button color="red" onClick={(e) => { removeDataset(e, datasetID) }}>Delete</Button>
      </Modal.Actions>
    </Modal>
  )
}