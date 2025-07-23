import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client'
import React, { useState, useEffect } from "react";
import { Card, Popup, Button, Icon, Header, Label, Divider, Checkbox } from "semantic-ui-react";
import DatasetTagList from "./DatasetTagList";
import ProcessedUploadsList from "./ProcessedUploadsList";

function ProjectCard({
  project,
  updateSelectedUploads,
}) {
  const color = project.isPublic ? "black" : "facebook";
  // const creationDate = new Date(project.createdOn).toDateString();
  const [selected, setSelected] = useState(false);
  const [selectedDatasets, setSelectedDatasets] = React.useState([]);
  const [availableUploads, setAvailableUploads] = React.useState([]);
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
          minioUpload {
            objectName
            filename
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
    if (selected && project.isReference) {
      updateSelectedUploads((prev) => [...prev, ...data?.datasets.map((dataset) => dataset.minioUpload)])
    } else if (!selected) {
      const uploads = data?.datasets.map((dataset) => dataset.minioUpload)
      updateSelectedUploads((prev) => prev.filter((upload) => !uploads.includes(upload) ))
    }
  }, [selected])

  if (!data) {
    return <></>;
  }

  const datasets = data?.datasets;

  return (
    <Card
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
          <>
            <Divider horizontal content="Datasets" />
            { datasets.length > 0 ? datasets.map((dataset) => <Label>{dataset.name}</Label>) : "No datasets available." }
            { datasets.length > 0 && (
              <>
                <Divider horizontal content="Reference uploads" />
                { datasets.map((dataset) => <Label>{dataset.minioUpload.filename}</Label>) }
              </>
            )}
          </>
        ) : (
          <>
            <Divider horizontal content="Select datasets" />
            <DatasetTagList
              datasets={datasets}
              updateSelectedDatasets={setSelectedDatasets}
              updateAvailableUploads={setAvailableUploads}
              setProjectSelected={setSelected}
            />
            <Divider horizontal content="Select processed uploads" />
            <ProcessedUploadsList uploads={availableUploads} updateSelectedUploads={updateSelectedUploads} />
          </>
        )}
      </Card.Content>
    </Card>
  );
}

export default function ProjectCardList({
  projects,
  updateSelectedUploads,
}) {
  const [usingPublicProjects, setUsingPublicProjects] = React.useState(true);
  const [projectsList, setProjectsList] = React.useState(projects);

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
      <Card.Group itemsPerRow={3}>
        {projectsList?.map((project) => (
          <ProjectCard
            key={project.projectID}
            project={project}
            updateSelectedUploads={updateSelectedUploads}
          />
        ))}
      </Card.Group>
      <Divider hidden />
    </>
  );
}
