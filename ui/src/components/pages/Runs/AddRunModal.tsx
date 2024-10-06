import { gql, useMutation } from "@apollo/client";
import * as React from "react";
import { Button, Form, Input, Modal, TextArea, Message, Dropdown } from "semantic-ui-react";
import useDatasetsQuery from '../../../hooks/useDatasetsQuery'
import useProjectsQuery from '../../../hooks/useProjectsQuery'

export default function AddRunModal({refetch}) {
  const [name, setName]= React.useState('')
  const [description, setDescription]= React.useState('')
  const [projectID, setProjectID] = React.useState('');
  const [datasetIDs, setDatasetIDs] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  // const [datasets, {data, loading, error}] = useQuery(gql`
  // let projectID = '2f6d441e-fbbe-40ff-87da-35c469bb9e9b'
  const { data: projectsData, loading: projectsLoading, error: projectsError } = useProjectsQuery();
  const { data: datasetsData, loading: datasetsLoading, error: datasetsError } = useDatasetsQuery({ projectID });

  const [createRunWithMinioBucket, {data, loading, error}] = useMutation(gql`
    mutation CreateRunWithMinioBucket($name: String!, $description: String!, $datasetIDs: [ID!]!){
      createRunWithMinioBucket(name: $name, description: $description, datasetIDs: $datasetIDs) {
        runID
        name
        description
        # createdBy {
        #   keycloakUserID
        # }
        createdOn
        status
        # datasets {
        #   datasetID
        # }
      }
    }`, {onCompleted: () => { 
      refetch() 
      setOpen(!open)
      setProjectID('');
      setDatasetIDs([]);
      setDescription('')
      setName('')
    }
  })

  const projectOptions = projectsData?.getProjects.map(project => ({
    key: project.projectID,
    text: project.name,
    value: project.projectID,
  })) || [];

  const datasetOptions = datasetsData?.datasets.map(dataset => ({
    key: dataset.datasetID,
    text: dataset.name,
    value: dataset.datasetID,
  })) || [];

  return (
    <Modal
      open={open}
      onClose={() => setOpen(!open)}
      size="large"
      trigger={
        <Button fluid icon='plus' color='black' size='large' onClick={() => setOpen(!open)} />
      }
    >
      <Modal.Content>
        <Form>
          <Form.Field 
            control={Input}
            label='Name'
            placeholder='Run name'
            value={name}
            onChange={(_e, { value }) => setName(value)}
          />
          <Form.Field 
            control={TextArea}
            label='Description'
            placeholder='Run description'
            value={description}
            onChange={(_e, { value }) => setDescription(value)}
          />
          {/* <Form.Field
            control={Dropdown}
            label='Datasets'
            placeholder='Select Datasets'
            fluid
            multiple
            search
            selection
            options={datasetOptions}
            loading={datasetsLoading}
            onChange={(_e, { value }) => setDatasetIDs(value)}
            value={datasetIDs}
          />
          {datasetsError && <Message error content="Error loading datasets" />} */}
          <Form.Field
            control={Dropdown}
            label='Project'
            placeholder='Select Project'
            fluid
            search
            selection
            options={projectOptions}
            loading={projectsLoading}
            onChange={(_e, { value }) => {
              setProjectID(value) 
              setDatasetIDs([])
            }}
            value={projectID}
          />
          {projectsError && <Message error content="Error loading projects" />}
          <Form.Field
            control={Dropdown}
            label='Datasets'
            placeholder='Select Datasets'
            fluid
            multiple
            search
            selection
            options={datasetOptions}
            loading={datasetsLoading}
            onChange={(_e, { value }) => setDatasetIDs(value)}
            value={datasetIDs}
            disabled={!projectID} // Disable until a project is selected
          />
          {datasetsError && <Message error content="Error loading datasets" />}
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button content='Add run' loading={loading} 
        disabled={!name || !description || datasetIDs.length === 0}
        onClick={async () => {
          await createRunWithMinioBucket({variables: {name, description, datasetIDs} })
          // setOpen(!open)
          // setDescription('')
          // setName('')
        }}/>
      </Modal.Actions>
    </Modal>
  );
}
