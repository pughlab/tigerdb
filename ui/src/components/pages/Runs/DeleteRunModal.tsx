import { gql, useMutation } from '@apollo/client';
import * as React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

export function DeleteRunModal({ run, refetch }) {
  const [open, setOpen] = React.useState(false);
  const [deleteRun] = useMutation(gql`
    mutation DeleteRun($runID: ID!) {
      deleteRun(runID: $runID)
    }
  `, {onCompleted: () => { refetch() }})
  function toggleOpen(e) {
    e.stopPropagation();
    setOpen(!open)
  }

  function removeRun(e, run) {
    e.stopPropagation();
    deleteRun({ variables: { runID: run?.runID }})
    setOpen(!open);
  }

  return (
    <Modal
      open={open}
      closeIcon
      onClose={(e) => {toggleOpen(e)}}
      size="small"
      trigger={
        <Button color="red" icon onClick={(e) => {toggleOpen(e)}} fluid>
          <Icon name="trash" style={{marginRight: '10px'}} />
          Delete run
        </Button>
      }
    >
    <Modal.Header>Delete Run</Modal.Header>
    <Modal.Content>
      Are you sure you want to delete run {run.name}?
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={(e) => {toggleOpen(e)}}>Cancel</Button>
      <Button color="red" onClick={(e) => {removeRun(e, run)}}>Delete</Button>
    </Modal.Actions>
  </Modal>
  )
}