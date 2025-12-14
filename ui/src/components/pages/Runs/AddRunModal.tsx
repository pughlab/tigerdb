import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Button, Form, Input, Modal, TextArea, Icon, Divider, Tab, Segment, Card } from "semantic-ui-react";
import useProjectsQuery from '../../../hooks/useProjectsQuery'
import ProjectCardList from "./ProjectCardList";

export default function AddRunModal({refetch}) {
  const [name, setName]= React.useState('')
  const [description, setDescription]= React.useState('')
  const [selectedQueryUploads, setSelectedQueryUploads] = React.useState([]);
  const [selectedReferenceUploads, setSelectedReferenceUploads] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  const { data: projectsData } = useProjectsQuery();

  const [createRunWithMinioBucket, { loading }] = useMutation(gql`
    mutation CreateRunWithMinioBucket($name: String!, $description: String!, $processedDatasets: [ID!]!, $referenceDatasets: [ID!]!){
      createRunWithMinioBucket(name: $name, description: $description, processedDatasets: $processedDatasets, referenceDatasets: $referenceDatasets) {
        runID
        name
        description
        createdOn
        status
      }
    }`, {onCompleted: () => { 
      refetch() 
      setOpen(!open)
      setDescription('')
      setName('')
      setSelectedQueryUploads([]);
      setSelectedReferenceUploads([]);
    }
  })

  const projects = projectsData?.getProjects
  const queryProjects: any[] = []
  const referenceProjects: any[] = []
  projects?.forEach((project) => {
    if (project.isReference) {
      referenceProjects.push(project)
    } else {
      queryProjects.push(project)
    }
  })
  const panes = [
    {
      menuItem: 'Query',
      render: () => ( 
        <Tab.Pane key="Query">
          <Form>
            <Segment color='violet'>
              <Divider horizontal content="Select projects" />
              <ProjectCardList projects={queryProjects} updateSelectedUploads={setSelectedQueryUploads} canSelectAll={false} />
            </Segment>
          </Form>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Reference',
      render: () => ( 
        <Tab.Pane key="Reference">
          <Form>
            <Segment color='violet'>
              <Divider horizontal content='SELECT REFERENCE PROJECTS'/>
              <ProjectCardList projects={referenceProjects} updateSelectedUploads={setSelectedReferenceUploads} canSelectAll={true} />
            </Segment>
          </Form>
        </Tab.Pane>
      )
    },
  ]

  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      open={open}
      onClose={() => setOpen(!open)}
      size="large"
      trigger={
        // <Button fluid size='large' color='black' animated='vertical' onClick={() => setOpen(!open)}>
        //   <Button.Content visible>
        //     <Icon name='plus'/>
        //   </Button.Content>
        //   <Button.Content hidden content="Add a new run"/>
        // </Button>
        <Card color="black" onClick={() => setOpen(!open)} style={{minHeight: "250px"}}>
          <Card.Header>
            <Button fluid attached='top' size='large'>
              <Icon name='plus' size="large" />
            </Button>
          </Card.Header>
          <Card.Content>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: hovered ? "underline" : "none"
              }}
            >
              <p style={{
                fontWeight: "bold",
                fontSize: "2rem",
                textAlign: "center",
                color: "black"
              }}>Add new run</p>
            </div>
          </Card.Content>
        </Card>
      }
    >
      <Modal.Content>
        <Divider horizontal content='NEW RUN'/>
        <Form>
          <Form.Field 
            control={Input}
            label='Name'
            placeholder='Run name'
            value={name}
            required={true}
            onChange={(_e, { value }) => setName(value)}
          />
          <Form.Field 
            control={TextArea}
            label='Description'
            placeholder='Run description'
            value={description}
            required={true}
            onChange={(_e, { value }) => setDescription(value)}
          />
        </Form>
        <Divider hidden />
        <Tab renderActiveOnly={true} panes={panes} />
      </Modal.Content>
      <Modal.Actions>
        <Button fluid color='violet' content='CREATE RUN' loading={loading} 
          disabled={!name || !description || selectedQueryUploads.length === 0 || selectedReferenceUploads.length === 0}
          onClick={async () => {
            const queryNames = Array.from(new Set(selectedQueryUploads.map(upload => upload.objectName)))
            const referenceNames = Array.from(new Set(selectedReferenceUploads.map(upload => upload.objectName)))
            await createRunWithMinioBucket({
              variables: {
                name,
                description,
                processedDatasets: queryNames,
                referenceDatasets: referenceNames,
              }
            })
          }}
        />
      </Modal.Actions>
    </Modal>
  );
}
