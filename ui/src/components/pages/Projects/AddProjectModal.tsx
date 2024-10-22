import { gql, useMutation } from "@apollo/client";
import * as React from "react";
import { Button, Form, Input, Modal, TextArea, Icon, Divider } from "semantic-ui-react";

export default function AddProjectModal({refetch}) {
  const [name, setName]= React.useState('')
  const [description, setDescription]= React.useState('')
  const [open, setOpen] = React.useState(false);

  const [createProject, {data, loading, error}] = useMutation(gql`
    mutation CreateProject($name: String!, $description: String!){
      createProject(name: $name, description: $description) {
        projectID
        name
        description
        # createdBy {
        #   keycloakUserID
        # }
        createdOn
        isPublic
      }
    }`, {onCompleted: () => { refetch() }}
  )

  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      open={open}
      onClose={() => setOpen(!open)}
      size="large"
      trigger={
        // <Button fluid icon='plus' color='black' size='large' onClick={() => setOpen(!open)} />
        <Button fluid size='large' color='black' animated='vertical' onClick={() => setOpen(!open)}>
            <Button.Content visible>
                <Icon name='plus'/>
            </Button.Content>
            <Button.Content hidden content="Add a new project"/>
        </Button>
      }
    >
      <Modal.Content>
        <Divider horizontal content='NEW PROJECT'/>
        <Form>
          <Form.Field 
            control={Input}
            label='Name'
            placeholder='Project name'
            value={name}
            onChange={(_e, { value }) => setName(value)}
          />
          <Form.Field 
            control={TextArea}
            label='Description'
            placeholder='Project description'
            value={description}
            onChange={(_e, { value }) => setDescription(value)}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button fluid color='facebook' content='CREATE PROJECT' loading={loading} onClick={async () => {
          await createProject({variables: {name, description} })
          setOpen(!open)
          setDescription('')
          setName('')
        }}/>
      </Modal.Actions>
    </Modal>
  );
}
