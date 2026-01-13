import * as React from "react";
import { useEffect, useState } from "react";
import {
  Loader,
  Dimmer,
  Card,
  Form,
  Header,
  Label,
  Input,
  Segment,
  Step,
  Icon,
  List,
  Divider,
  Grid,
	SemanticCOLORS,
  Button,
  Select,
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";

import useRouter from "../../../hooks/useRouter";
import useRunsQuery from "../../../hooks/useRunsQuery";

import AddRunModal from "./AddRunModal";
import { DeleteRunModal } from "./DeleteRunModal";
import { gql, useQuery } from "@apollo/client";
import { DatasetReadonlyTag, tagColors } from "../Datasets/DatasetTag";

function RunsListItem({ run, refetch }) {
  const {
    runID,
    name,
    description,
    processedDatasets,
    createdOn,
    status,
  } = run;
  const creationDate = new Date(createdOn).toDateString()
  const seenTagnames = new Set()
  let tags: any[] = []

  processedDatasets?.forEach((processedUpload) => {
    const uniqueTags = processedUpload.minioUpload?.dataset?.tags?.filter((tag) => {
      if (seenTagnames.has(tag.name)) {
        return false
      }
      seenTagnames.add(tag.name)
      return true
    }) || []
    tags = [...tags, ...uniqueTags]
  })

  let colorStatus: SemanticCOLORS = 'black';
	switch (status) {
    case "pending":
      colorStatus = "orange";
      break;
    case "submitted":
      colorStatus = "yellow";
      break;
    case "completed":
      colorStatus = "green";
      break;
    case "failed":
      colorStatus = "red";
      break;
  }

  const { navigate } = useRouter();
  return (
    <Card
      color={colorStatus}
      onClick={() => {
        navigate(runID);
      }}
    >
      <Card.Content floated="right" as={Segment} basic>
        <div>
          <Button inverted floated="left" size='tiny' color={colorStatus} content={run.status.charAt(0).toUpperCase() + run.status.slice(1)} />
          <DeleteRunModal run={run} refetch={refetch}/>   
        </div>
      </Card.Content>
      <Card.Content>
        <Card.Header as={Header}>
          {`${name}`} <Label content={<Icon style={{ margin: 0 }} name='calendar alternate outline' />} detail={creationDate} />
        </Card.Header>
        <List.Description content={description} />
        <List.Description>
          { processedDatasets.length > 0 && <Divider horizontal content="Data" />}
          <Label.Group>
            {
              processedDatasets.length > 0
                ? processedDatasets.map((processedDataset) => (
                    <Label
                      basic
                      color="green"
                      key={processedDataset.objectName}
                      content={processedDataset.filename}
                    />
                  ))
                : null
            }
          </Label.Group>
          <Header sub size="huge" style={{textAlign: 'center', margin: '10px 0'}}>
            {`${run.referenceDatasetsAggregate.count} ${run.referenceDatasetsAggregate.count === 1 ? "reference" : "references"}`}
          </Header>
          { tags.length > 0 && <Divider horizontal content="Tags" />}
          <Label.Group>
            {
              [...tags]
              .sort((tag1, tag2) => {
                if (tag1.name.toLowerCase() === tag2.name.toLowerCase()) {
                  return 0
                }
                return tag1.name.toLowerCase() > tag2.name.toLowerCase() ? 1 : -1
              })
              .map((tag) => <DatasetReadonlyTag key={tag.tagID} tag={tag} />)
            }
          </Label.Group>
        </List.Description>
      </Card.Content>
    </Card>
  );
}

function uploadIncludesTag(upload, tagList) {
  return upload.minioUpload.dataset.tags?.some((tag) => tagList.includes(tag.name)) ?? false
}

function uploadIncludesCategory(upload, categoryList) {
  return upload.minioUpload.dataset.tags?.some((tag) => categoryList?.includes(tag.category)) ?? false
}

export default function RunsList() {
  const { data, loading, refetch } = useRunsQuery();
  const [activeFilter, setActiveFilter] = useState("all"); // State to track the active filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [filteredRuns, setFilteredRuns] = React.useState([])
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

  const location = useLocation();
  const runs = data?.getRuns ?? [];

  function doSearch() {
    let tempRuns = activeFilter === "all" 
      ? runs 
      : runs.filter((run) => run.status === activeFilter)
    if (searchTerm.trim().length > 0) {
        tempRuns = tempRuns.filter((run) => 
          run.name?.toLowerCase()?.includes(searchTerm.toLowerCase()) 
        || run.description?.toLowerCase()?.includes(searchTerm.toLowerCase())
      )
    }
    let results: any[] = [...tempRuns]
    if (selectedCategories.length > 0) {
      results = results.filter(
        (run) => run.processedDatasets?.reduce((acc, upload) => acc || uploadIncludesCategory(upload, selectedCategories), false)
      )
    }
    if (selectedTags.length > 0) {
      results = results.filter((run) => run.processedDatasets?.reduce((acc, upload) => acc || uploadIncludesTag(upload, selectedTags), false))
    }
    setFilteredRuns(results)
  }

  function toggleCategory(category) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category))
    } else {
      setSelectedCategories((prev) => [...prev, category])
    }
  }

  useEffect(() => {
    refetch();
  }, [location.key]);

  useEffect(() => {
    setFilteredRuns(data?.getRuns ?? [])
  }, [data])

  useEffect(() => {
    doSearch()
  }, [activeFilter, searchTerm, selectedTags, selectedCategories])

  // Initialize the counts object
  const counts = {
    pendingCount: 0,
    submittedCount: 0,
    completedCount: 0,
    failedCount: 0,
  };

  // Reduce projectRuns to count the statuses
  const { pendingCount, submittedCount, completedCount, failedCount } =
    runs.reduce((runCountsByStatus, { status }) => {
      switch (status) {
        case "pending":
          runCountsByStatus.pendingCount++;
          break;
        case "submitted":
          runCountsByStatus.submittedCount++;
          break;
        case "completed":
          runCountsByStatus.completedCount++;
          break;
        case "failed":
          runCountsByStatus.failedCount++;
          break;
      }
      return runCountsByStatus; // Return the updated counts object
    }, counts);

  // Calculate the total count of project runs
  const totalCount = runs.length;

  const runStatuses = [
    {
      key: "all",
      icon: "file",
      color: "black",
      title: `${totalCount} Total`,
    },
    {
      key: "pending",
      icon: "circle outline",
      color: "orange",
      title: `${pendingCount} Pending`,
      description: "To Submit",
    },
    {
      key: "submitted",
      icon: "circle notch",
      color: "yellow",
      title: `${submittedCount} Submitted`,
      description: "Computing",
    },
    {
      key: "completed",
      icon: "circle check",
      color: "green",
      title: `${completedCount} Completed`,
      description: "Successfully",
    },
    {
      key: "failed",
      icon: "times circle",
      color: "red",
      title: `${failedCount} Failed`,
      description: "Errored",
    },
  ];

  let content
  if (loading) {
    content = (
      <Segment placeholder textAlign="center">
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    )
  } else {
    content = (
      <Card.Group itemsPerRow={4} size="large">
        <AddRunModal refetch={refetch} />
        {filteredRuns.map((run) => (
          <RunsListItem key={run.runID} run={run} refetch={refetch} />
        ))}
      </Card.Group>
    )
  }

  return (
    <Grid>
      <Grid.Column>
        <Divider horizontal content="Runs" />
        <Form>
          <Form.Field
            control={Input}
            label="Search runs"
            placeholder="Names and descriptions"
            onChange={(_e, { value }) => setSearchTerm(value)}
          />
          <Divider horizontal />
          <Form.Field label="Filter by tag categories" />
          <Form.Group inline>
            {
              categories?.tagCategories?.map((category) => 
                <Button
                  key={category}
                  content={category} 
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
        </Form>
        <Step.Group fluid widths={5}>
          {runStatuses.map(({ key, icon, color, title, description }) => (
            <Step
              key={key}
              active={key === activeFilter} // Set active based on current filter
              onClick={() => setActiveFilter(key)} // Set the active filter
            >
              <Icon
                name={icon}
                color={color}
                loading={key === "submitted" && submittedCount !== 0}
              />
              <Step.Content title={title} description={description} />
            </Step>
          ))}
        </Step.Group>
        {content}
      </Grid.Column>
    </Grid>
  );
}
