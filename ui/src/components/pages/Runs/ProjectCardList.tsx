import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Card, Popup, Button, Icon, Header, Label, Divider, Checkbox } from "semantic-ui-react";
import DatasetNameList from "./DatasetNameList";
import ProcessedUploadsList from "./ProcessedUploadsList";
import { DatasetReadonlyTag } from "../Datasets/DatasetTag";

function ProjectCard({
  project,
  updateSelectedUploads,
  selectedAll
}) {
  const color = project.isPublic ? "black" : "facebook";
  // const creationDate = new Date(project.createdOn).toDateString();
  const [selected, setSelected] = useState(false);
  const [selectedDatasets, setSelectedDatasets] = React.useState([]);
  const [availableUploads, setAvailableUploads] = React.useState([]);
  const allUploads: any[] = []
  const allTags = new Set()
  const { data } = useQuery(
    gql`
      query Datasets($projectID: ID!) {
        datasets(where: { project: { projectID: $projectID } }) {
          datasetID
          name
          project {
            projectID
            name
          }
          tags {
            tagID
            name
            category
          }
          minioUpload {
            objectName
            filename
            processedDataset {
              objectName
              filename
            }
          }
        }
      }
    `,
    {
      variables: { projectID: project.projectID },
      fetchPolicy: "network-only",
    }
  );

  React.useEffect(() => {
    if (selectedDatasets.length === 0) {
      setAvailableUploads([])
    }
  }, [selectedDatasets])

  React.useEffect(() => {
    setSelected(selectedAll)
  }, [selectedAll])

  React.useEffect(() => {
    if (selected) {
      updateSelectedUploads((prev) => [...prev, ...allUploads])
    } else {
      updateSelectedUploads((prev) => prev.filter((upload) => !allUploads.includes(upload)))
    }
  }, [selected])

  if (!data) {
    return <></>;
  }

  const datasets = data?.datasets;
  datasets.forEach((dataset) => {
    dataset.tags?.forEach((tag) => {
      allTags.add(tag)
    })
    dataset.minioUpload?.forEach((upload) => {
      if (project.isReference) {
        allUploads.push(upload)
      } else if (upload.processedDataset) {
        allUploads.push(upload.processedDataset)
      }
    })
  })

  return (
    <Card
      key={`card-${project.projectID}`}
      link
      color={color}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <Popup
        size="large"
        wide="very"
        inverted
        position="top center"
        trigger={
          <Button attached="top" color={color} basic={!selected}>
            <Icon
              name={selected ? "folder open" : "folder outline"}
              size="large"
            />
          </Button>
        }
      >
        {project.isPublic ? "Public" : "Private"} project
      </Popup>
      <Card.Content extra>
        <Header size="small">
          <Header.Content>{project.name}</Header.Content>
        </Header>
      </Card.Content>
      <Card.Content>
        <Label.Group>
          <Label
            as={Button}
            color={color}
            content={
              <Icon
                style={{ margin: 0 }}
                name={project.isPublic ? "lock open" : "lock"}
              />
            }
            detail={project.isPublic ? "Public" : "Private"}
          />
          <Label
            content={<Icon style={{ margin: 0 }} name="user" />}
            detail={project.createdBy.name}
          />
          {/* <Label content={<Icon style={{margin: 0}} name='calendar alternate outline' />} detail={creationDate} /> */}
        </Label.Group>
        {project.isReference ? (
          <React.Fragment key="reference-data">
            <Divider horizontal content="Datasets" />
            { datasets.length > 0 ? datasets.map((dataset) => <Label key={`reference-dataset-${dataset.datasetID}`}>{dataset.name}</Label>) : "No datasets available." }
            { datasets.length > 0 && <Divider horizontal content="Reference uploads" /> }
            { datasets.length > 0 && datasets.map((dataset) => dataset.minioUpload.map((upload) => <Label key={`reference-upload-${upload.objectName}`}>{upload.filename}</Label>)) }
          </React.Fragment>
        ) : (
          <React.Fragment key="query-data">
            <Divider horizontal content="Select datasets" />
            <DatasetNameList
              datasets={datasets}
              updateSelectedDatasets={setSelectedDatasets}
              updateAvailableUploads={setAvailableUploads}
              // setProjectSelected={setSelected}
              projectSelected={selected}
            />
            { allTags.size > 0 && <Divider horizontal content="Dataset tags" /> }
            { allTags.size > 0 && Array.from(allTags).map((tag) => <DatasetReadonlyTag key={tag.tagID} tag={tag} />) }
            <Divider horizontal content="Select processed uploads" />
            <ProcessedUploadsList uploads={!project.isReference ? availableUploads : allUploads} updateSelectedUploads={updateSelectedUploads} projectSelected={selected} />
          </React.Fragment>
        )}
      </Card.Content>
    </Card>
  );
}

export default function ProjectCardList({
  projects,
  updateSelectedUploads,
  canSelectAll
}) {
  const [usingPublicProjects, setUsingPublicProjects] = React.useState(true);
  const [projectsList, setProjectsList] = React.useState(projects);
  const [selectedAll, setSelectedAll] = React.useState(false)

  useEffect(() => {
    if (usingPublicProjects) {
      setProjectsList(projects);
    } else {
      setProjectsList(projects?.filter((p) => !p.isPublic));
    }
  }, [usingPublicProjects]);



  return (
    <>
      <Checkbox
        label="Include public projects"
        checked={usingPublicProjects}
        onChange={() => setUsingPublicProjects(!usingPublicProjects)}
      />
      <Divider hidden />
      { canSelectAll && (
        <>
          <Button fluid onClick={() => setSelectedAll(!selectedAll)}>Select {selectedAll ? 'none' : 'all'}</Button>
          <Divider hidden />
        </>
      )}
      <Card.Group itemsPerRow={3}>
        {projectsList?.map((project) => (
          <ProjectCard
            key={project.projectID}
            project={project}
            updateSelectedUploads={updateSelectedUploads}
            selectedAll={selectedAll}
          />
        ))}
      </Card.Group>
      <Divider hidden />
    </>
  );
}
