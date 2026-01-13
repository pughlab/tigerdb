import { gql, useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { Card, Popup, Button, Icon, Header, Label, Divider, Checkbox, Select, Form } from "semantic-ui-react";
import DatasetNameList from "./DatasetNameList";
import ProcessedUploadsList from "./ProcessedUploadsList";
import { DatasetReadonlyTag, tagColors } from "../Datasets/DatasetTag";
import { useKeycloak } from "@react-keycloak/web";

function datasetIncludesTag(dataset, tagList) {
  return dataset.tags?.some((tag) => tagList.includes(tag.name))
}

function datasetIncludesCategory(dataset, categoryList) {
  return dataset.tags?.some((tag) => categoryList?.includes(tag.category)) ?? false
}

function ProjectCard({
  project,
  updateSelectedUploads,
  selectedProjectIDs,
  toggleProjectID,
  selectedAll
}) {
  const color = project.isPublic ? "black" : "facebook";
  // const creationDate = new Date(project.createdOn).toDateString();
  const selected = selectedProjectIDs.includes(project.projectID);
  const [selectedDatasets, setSelectedDatasets] = React.useState([]);
  const [availableUploads, setAvailableUploads] = React.useState([]);
  const allUploads: any[] = []
  const allTags = new Set()

  React.useEffect(() => {
    const newUploads: any[] = []
    selectedDatasets.forEach((dataset: any) => {
      dataset.minioUpload?.forEach((upload: any) => {
        if (upload.processedDataset) {
          newUploads.push(upload.processedDataset)
        }
      })
    })
    setAvailableUploads(newUploads)
  }, [selectedDatasets])

  React.useEffect(() => {
    if (selected) {
      updateSelectedUploads((prev) => [...prev, ...allUploads])
    } else {
      updateSelectedUploads((prev) => prev.filter((upload) => !allUploads.includes(upload)))
    }
  }, [selected])

  const datasets = project.datasets;
  datasets.forEach((dataset) => {
    const uniqueTags = dataset.tags?.filter((tag) => {
      if (seenTagnames.has(tag.name)) {
        return false
      }
      seenTagnames.add(tag.name)
      return true
    })
    allTags = [...allTags, ...uniqueTags]
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
        toggleProjectID(project.projectID)
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
            { allTags.length > 0 && <Divider horizontal content="Dataset tags" /> }
            { allTags.length > 0 && allTags.map((tag) => <DatasetReadonlyTag key={tag.tagID} tag={tag} />) }
            { datasets.length > 0 && <Divider horizontal content="Reference uploads" /> }
            { datasets.length > 0 && datasets.map((dataset) => dataset.minioUpload.map((upload) => <Label key={`reference-upload-${upload.objectName}`}>{upload.filename}</Label>)) }
          </React.Fragment>
        ) : (
          <React.Fragment key="query-data">
            { allTags.length > 0 && <Divider horizontal content="Tags" /> }
            { allTags.length > 0 && allTags.map((tag) => <DatasetReadonlyTag key={tag.tagID} tag={tag} />) }
            <Divider horizontal content="Select datasets" />
            <DatasetNameList
              datasets={datasets}
              updateSelectedDatasets={setSelectedDatasets}
              updateAvailableUploads={setAvailableUploads}
              // setProjectSelected={setSelected}
              projectSelected={selected}
            />
            <Divider horizontal content="Select processed uploads" />
            <ProcessedUploadsList uploads={project.isReference ? allUploads : availableUploads} updateSelectedUploads={updateSelectedUploads} projectSelected={selected} />
          </React.Fragment>
        )}
      </Card.Content>
    </Card>
  );
}

function datasetIncludesTag(dataset, tagList) {
  return dataset.tags.some((tag) => tagList.includes(tag.name))
}

function datasetIncludesCategory(dataset, categoryList) {
  return dataset.tags?.some((tag) => categoryList?.includes(tag.category)) ?? false
}

export default function ProjectCardList({
  projects,
  updateSelectedUploads,
  selectedProjectIDs,
  toggleProjectID,
  canSelectAll
}) {
  const [usingPublicProjects, setUsingPublicProjects] = React.useState(true);
  const [projectsList, setProjectsList] = React.useState(projects);
  const [selectedAll, setSelectedAll] = React.useState(false)
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [selectedTags, setSelectedTags] = React.useState([]);
  const { data: tagNames } = useQuery(gql`
    query TagNames {
      tagNames
    }
  `);
  const { data: categories } = useQuery(gql`
    query TagCategories {
      tagCategories
    }  
  `)
  const { keycloak } = useKeycloak();
  const isAuthenticated = !!keycloak?.authenticated;

  function doFilter() {
    let tempProjects = usingPublicProjects ? [...projects] : projects?.filter((p) => !p.isPublic)
    if (selectedCategories.length > 0) {
      tempProjects = tempProjects.filter(
        (project) => project.datasets.reduce((acc, dataset) => acc || datasetIncludesCategory(dataset, selectedCategories), false)
      )
    }
    if (selectedTags.length > 0) {
      tempProjects = tempProjects.filter((p) => p.datasets?.reduce(
        (acc, dataset) => acc || datasetIncludesTag(dataset, selectedTags),
        false
      ))
    }
    setProjectsList(tempProjects)
  }

  function toggleCategory(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category))
    } else {
      setSelectedCategories((prev) => [...prev, category])
    }
  }

  useEffect(() => {
    doFilter()
  }, [usingPublicProjects, selectedTags, selectedCategories]);

  return (
    <>
      <Checkbox
        label="Include public projects"
        checked={usingPublicProjects}
        disabled={!isAuthenticated}
        onChange={() => setUsingPublicProjects(!usingPublicProjects)}
      />
      <Divider hidden />
      <Form.Field label="Filter by tag categories" />
      <Form.Group inline>
        {
          categories?.tagCategories?.map((category) => 
            <Button
              key={category}
              content={category ?? 'other'} 
              size='tiny'
              basic={!selectedCategories.includes(category)}
              color={tagColors[category] ?? 'black'}
              onClick={() => toggleCategory(category)}
            />
          )
        }
      </Form.Group>
      <Form.Dropdown
        control={Select}
        multiple
        options={Array.from(new Set(tagNames?.tagNames)).map((tag) => ({key: tag, value: tag, text: tag})) ?? []}
        placeholder='Select tags...'
        label="Filter by dataset tag(s)"
        onChange={(_e, { value }) => setSelectedTags(value)}
        search
      />
      <Divider hidden />
      { canSelectAll && (
        <>
          <Button fluid onClick={() => setSelectedAll(!selectedAll)}>{selectedAll ? 'Deselect' : 'Select'} all</Button>
          <Divider hidden />
        </>
      )}
      <Card.Group itemsPerRow={3} style={{overflowY: "auto", minHeight: "460px", maxHeight: "500px"}}>
        {projectsList?.map((project) => (
          <ProjectCard
            key={project.projectID}
            project={project}
            updateSelectedUploads={updateSelectedUploads}
            selectedProjectIDs={selectedProjectIDs}
            toggleProjectID={toggleProjectID}
            selectedAll={selectedAll}
          />
        ))}
      </Card.Group>
      <Divider hidden />
    </>
  );
}
