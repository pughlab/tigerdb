import { gql, useMutation } from "@apollo/client";
import * as React from "react";
import { Button, Form, Input, Modal, TextArea, Icon, Divider, Checkbox, Segment } from "semantic-ui-react";
import useIsCurator from '../../../hooks/useIsCurator'
import { useKeycloak } from '@react-keycloak/web';

export default function AddProjectModal({refetch}) {
  const { keycloak } = useKeycloak();
  const isAuthenticated = !!keycloak?.authenticated;

  if (!isAuthenticated) return null;

  const [name, setName]= React.useState('')
  const [description, setDescription]= React.useState('')
  const [open, setOpen] = React.useState(false);
  const [isReference, setIsReference] = React.useState(false)

  const [createProject, {data, loading, error}] = useMutation(gql`
    mutation CreateProject($name: String!, $description: String!, $isReference: Boolean){
      createProject(name: $name, description: $description, isReference: $isReference) {
        projectID
        name
        description
        # createdBy {
        #   keycloakUserID
        # }
        createdOn
        isPublic
        isReference
      }
    }`, {onCompleted: () => { refetch() }}
  )

  const { isCurator } = useIsCurator()

  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      open={open}
      onClose={() => setOpen(!open)}
      size="large"
      trigger={
        <Segment basic>
        <Button disabled={!isAuthenticated} fluid size='large' color='black' animated='vertical' onClick={() => setOpen(!open)}>
            <Button.Content visible>
                <Icon name={isAuthenticated ? 'plus' : 'lock'}/>
            </Button.Content>
            <Button.Content hidden content="Add a new project"/>
        </Button>
        </Segment>
      }
    >
      <Modal.Content>
        <Divider horizontal content='NEW PROJECT'/>
        <Form>
          {
            isCurator && 
            <>
              <Checkbox 
                label='This is a reference project'
                checked={isReference}
                onChange={() => setIsReference(!isReference)}
              />
              <Divider horizontal />
            </>
          }
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
          await createProject({variables: {name, description, isReference} })
          setOpen(!open)
          setDescription('')
          setName('')
        }}/>
      </Modal.Actions>
    </Modal>
  );
}
