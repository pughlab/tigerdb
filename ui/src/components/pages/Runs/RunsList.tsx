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
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";

import useRouter from "../../../hooks/useRouter";
import useRunsQuery from "../../../hooks/useRunsQuery";

import AddRunModal from "./AddRunModal";
import SegmentPlaceholder from "../../common/SegmentPlaceholder";
import { DeleteRunModal } from "./DeleteRunModal";

function RunsListItem({ run, refetch }) {
  const {
    runID,
    name,
    description,
    createdBy,
    processedDatasets,
    createdOn,
    submittedOn,
    status,
  } = run;
  const dateCreator = (date) => {
    const newDate = new Date(date).toLocaleString("en-US", {
      weekday: "long", // "Sunday"
      year: "numeric", // "2024"
      month: "short", // "Oct"
      day: "numeric", // "2"
      hour: "numeric", // "4"
      minute: "numeric", // "41"
      hour12: true, // 12-hour format with AM/PM
    });
    return newDate;
  };

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
          <Button floated="left" size='tiny' color={colorStatus} content={`Run`} />
          <DeleteRunModal run={run} refetch={refetch}/>   
        </div>
     
      </Card.Content>
      <Card.Content>
        <Card.Header as={Header}>
          {`${name}`}
        </Card.Header>
        <List.Description content={description} />
        <List.Description>
          <Divider />
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
          <Divider hidden />
        </List.Description>
      </Card.Content>
    </Card>
  );
}

export default function RunsList() {
  const { data, loading, refetch } = useRunsQuery();
  const [activeFilter, setActiveFilter] = useState("all"); // State to track the active filter

  console.log(data);
  const location = useLocation();
  useEffect(() => {
    refetch();
  }, [location.key]);

  const runs = data?.getRuns ?? [];

  console.log(runs);

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
  console.log(pendingCount, submittedCount, completedCount, failedCount);

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
  const filteredRuns =
    activeFilter === "all"
      ? runs
      : runs.filter((run) => run.status === activeFilter);

  let content
  if (loading) {
    content = (
      <Segment placeholder textAlign="center">
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    )
  } else if (filteredRuns.length === 0) {
    content = <SegmentPlaceholder
      icon="exclamation circle"
      text="No Runs Found!"
      textAlign="center"
    />
  } else {
    content = (
      <Segment placeholder>
        <Card.Group itemsPerRow={4} size="large">
          {filteredRuns.map((run) => (
            <RunsListItem key={run.runID} run={run} refetch={refetch} />
          ))}
        </Card.Group>
      </Segment>
    )
  }

  return (
    <Grid>
      <Grid.Column>
        <Divider horizontal content="Runs" />
        <Segment basic>
          <AddRunModal refetch={refetch} />
        </Segment>
        <Form>
          <Form.Field
            control={Input}
            label="Search runs"
            placeholder="Names and descriptions"
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
