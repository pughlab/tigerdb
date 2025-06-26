import { gql, useLazyQuery, useMutation } from "@apollo/client";
import * as React from "react";
import { Button, Form, Input, Modal, TextArea, Message, Dropdown, Icon, Divider, Card, Popup, Header, Label, Checkbox } from "semantic-ui-react";
import useProjectsQuery from '../../../hooks/useProjectsQuery'

function ProjectCard({
  project,
  toggleProject,
  updateAvailableDatasets
}) {
  const color = project.isPublic ? 'black' : 'grey'
  const [selected, setSelected] = React.useState(false)
  const [getDatasets] = useLazyQuery(gql`
    query Datasets($projectID: ID!) {
      datasets (
        where: {project: {projectID: $projectID}}
      ) {
        datasetID
        name
        project {
          projectID
          name
        }
      }
    }
  `, { 
    variables: { projectID: '' },
    fetchPolicy: 'network-only',
    onCompleted(data) {
      if (selected) {
        updateAvailableDatasets((prev) => [...prev, ...data.datasets])
      } else {
        updateAvailableDatasets((prev) => prev.filter((item) => !data.datasets.some((dataset) => dataset.datasetID === item.datasetID)))
      }
    }
  })

  React.useEffect(() => {
    getDatasets({ variables: { projectID:  project.projectID }})
  }, [selected]);

  return (
    <Card link color={color} onClick={() => {
      toggleProject(project.projectID)
      setSelected(!selected)
    }}>
      <Popup
        size='large' wide='very'
        trigger={
          <Button attached='top' color={color} basic={!selected}>
            <Icon name={selected ? 'folder open' : 'folder outline'} size='large' />
          </Button>
        }        
      >
        stuff here
      </Popup>
      <Card.Content extra>
        <Header size='small'>
          <Header.Content>
            {project.name}
          </Header.Content>
        </Header>
      </Card.Content>
      <Card.Content>
        <Label.Group>
          <Label content={<Icon style={{margin: 0}} name='user' />} detail={project.createdBy.name} />
        </Label.Group>
      </Card.Content>
    </Card>
  )
}

function ProjectCardList({
  projects,
  toggleProject,
  updateAvailableDatasets
}) {
  const [usingPublicProjects, setUsingPublicProjects] = React.useState(true)
  const [projectsList, setProjectsList] = React.useState(projects)

  React.useEffect(() => {
    if (usingPublicProjects) {
      setProjectsList(projects)
    } else {
      setProjectsList(projects?.filter((p) => !p.isPublic))
    }
  }, [usingPublicProjects])

  return (
    <>
      <Checkbox 
        toggle
        label='Include public projects'
        checked={usingPublicProjects}
        onChange={() => setUsingPublicProjects(!usingPublicProjects)}
      />
      <Divider hidden/>
      <Card.Group itemsPerRow={3}>
        {projectsList?.map((project) => <ProjectCard 
          key={project.projectID}
          project={project}
          toggleProject={toggleProject}
          updateAvailableDatasets={updateAvailableDatasets}
        />)}
      </Card.Group>
      <Divider hidden/>
    </>
  )
}

function DatasetTag({dataset, updateSelectedDatasets, updateAvailableUploads}) {
  const [selected, setSelected] = React.useState(false)
  const [getProcessedUploads] = useLazyQuery(gql`
    query processedDatasets($datasetID: ID!) {
        processedDatasets(
          where: {
            minioUpload: {
              dataset: {
                datasetID: $datasetID
              }
            }
          }
        ) {
          objectName
          bucketName
          filename
          minioUpload {
            dataset {
              datasetID
              name
            }
          }
        }
      }
    `, {
      variables: { datasetID: dataset.datasetID },
      fetchPolicy: 'network-only',
      onCompleted(data) {
        if (selected) {
          updateAvailableUploads((prev) => [...prev, ...data.processedDatasets])
        } else {
          updateAvailableUploads((prev) => prev.filter((item) => !data.processedDatasets.some((dataset) => dataset.minioUpload.dataset.datasetID === item.datasetID)))
        }
      }
    })

  React.useEffect(() => {
    if (selected) {
      updateSelectedDatasets((prev) => [...prev, dataset])
      getProcessedUploads()
    }
  }, [selected])

  return (
    <Label
      as={Button}
      color={selected ? 'grey' : undefined}
      basic={!selected}
      onClick={() => {setSelected(!selected)}}
    ><Icon name={selected ? 'folder open' : 'folder outline'} />{`${dataset.name}`}</Label>
  )
}

function DatasetTagList({datasets,  updateSelectedDatasets, updateAvailableUploads}) {
  const datasetIDs = new Set()
  const distinctDatasets = datasets.filter((dataset) => {
    if (!datasetIDs.has(dataset.datasetID)) {
      datasetIDs.add(dataset.datasetID)
      return true
    }
    return false
  })
  return (
    <Label.Group>
      {distinctDatasets.map((dataset) => <DatasetTag
        key={dataset.datasetID}
        dataset={dataset}
        updateSelectedDatasets={updateSelectedDatasets}
        updateAvailableUploads={updateAvailableUploads} />
      )}
    </Label.Group>
  )
}

function ProcessedUpload({upload, updateSelectedUploads}) {
  const [selected, setSelected] = React.useState(false)

  React.useEffect(() => {
    if (selected) {
      updateSelectedUploads((prev) => [...prev, upload])
    } else {
      updateSelectedUploads((prev)  => prev.filter(({objectName}) => objectName!== upload.objectName))
    }
  }, [selected])
  return (
    <Label
      as={Button}
      color={selected ? 'grey' : undefined}
      basic={!selected}
      onClick={() => {setSelected(!selected)}}
    ><Icon name={selected ? 'file' : 'file outline'} />{`${upload.filename}`}</Label>
  )
}

function ProcessedUploadsList({uploads, updateSelectedUploads}) {
  const uploadIDs = new Set()
  const distinctUploads = uploads.filter((upload) => {
    if (!uploadIDs.has(upload.objectName)) {
      uploadIDs.add(upload.objectName)
      return true
    }
    return false
  })
  return (
    <Label.Group>
      {distinctUploads.map((upload) => <ProcessedUpload
          key={upload.objectName}
          upload={upload}
          updateSelectedUploads={updateSelectedUploads}
        />
      )}
    </Label.Group>
  )
}

export default function AddRunModal({refetch}) {
  const [name, setName]= React.useState('')
  const [description, setDescription]= React.useState('')
  const [projectIDs, setProjectIDs] = React.useState([]);
  const [selectedDatasets, setSelectedDatasets] = React.useState([]);
  const [availableDatasets, setAvailableDatasets] = React.useState([]);
  const [availableUploads, setAvailableUploads] = React.useState([]);
  const [selectedUploads, setSelectedUploads] = React.useState([]);
  // const [minioUploads, setMinioUploads] = React.useState([]);
  const [processedDatasets, setProcessedDatasets] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  // const [datasets, {data, loading, error}] = useQuery(gql`
  // let projectID = '2f6d441e-fbbe-40ff-87da-35c469bb9e9b'
  const { data: projectsData, loading: projectsLoading, error: projectsError } = useProjectsQuery();
  // const { data: datasetsData, loading: datasetsLoading, error: datasetsError } = useDatasetsQuery({ projectIDs });
  // const { data: minioUploadsData, loading: minioUploadsLoading, error: minioUploadsError } = useMinioUploadsQuery({ datasetIDs });
  // const { data: processedDatasetsData, loading: processedDatasetsLoading, error: processedDatasetsError } = useProcessedDatasetsQuery({ datasetIDs: selectedDatasets });
  
  function toggleProject(projectID: string){
    if (projectIDs.includes(projectID)) {
      setProjectIDs(projectIDs.filter((id) => id !== projectID))
    } else {
      setProjectIDs([...projectIDs, projectID])
    }
  }

  //console.log(processedDatasetsData)
  const [createRunWithMinioBucket, {data, loading, error}] = useMutation(gql`
    mutation CreateRunWithMinioBucket($name: String!, $description: String!, $processedDatasets: [ID!]!){
      createRunWithMinioBucket(name: $name, description: $description, processedDatasets: $processedDatasets) {
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
      setProjectIDs([]);
      setSelectedDatasets([]);
      // setMinioUploads([]);
      setProcessedDatasets([]);
      setDescription('')
      setName('')
    }
  })

  const projects = projectsData?.getProjects

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
          <Button.Content hidden content="Add a new run"/>
      </Button>
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
            onChange={(_e, { value }) => setName(value)}
          />
          <Form.Field 
            control={TextArea}
            label='Description'
            placeholder='Run description'
            value={description}
            onChange={(_e, { value }) => setDescription(value)}
          />
          <Divider horizontal content="Select projects" />
          <ProjectCardList projects={projects} toggleProject={toggleProject} updateAvailableDatasets={setAvailableDatasets} />
          <Divider horizontal content="Select datasets" />
          <DatasetTagList datasets={availableDatasets} updateSelectedDatasets={setSelectedDatasets} updateAvailableUploads={setAvailableUploads} />
          <Divider horizontal content="Select processed uploads" />
          <ProcessedUploadsList uploads={availableUploads} updateSelectedUploads={setSelectedUploads} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button fluid color='violet' content='CREATE RUN' loading={loading} 
        disabled={!name || !description || selectedDatasets.length === 0 || processedDatasets.length === 0}
        onClick={async () => {
          await createRunWithMinioBucket({variables: {name, description, processedDatasets} })
          // setOpen(!open)
          // setDescription('')
          // setName('')
        }}/>
        
      </Modal.Actions>
    </Modal>
  );
}
