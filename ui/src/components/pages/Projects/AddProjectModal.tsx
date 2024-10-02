import { gql, useMutation } from "@apollo/client";
import * as React from "react";
import { Button, Form, Input, Modal, TextArea } from "semantic-ui-react";

export default function AddProjectModal() {
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
    }
  `)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(!open)}
      size="large"
      trigger={
        <Button content="Add a project" onClick={() => setOpen(!open)} />
      }
    >
      <Modal.Content>
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
        <Button content='Add project' loading={loading} onClick={async () => {
          await createProject({variables: {name, description} })
          setOpen(!open)
        }}/>
      </Modal.Actions>
    </Modal>
  );
}
