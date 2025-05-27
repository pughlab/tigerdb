import * as React from "react";
import { useEffect } from "react";
import {
  Loader,
  Dimmer,
  Form,
  Header,
  Label,
  Input,
  Segment,
  List,
  Divider,
  Grid,
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import useRouter from "../../../hooks/useRouter";

import useProjectsQuery from "../../../hooks/useProjectsQuery";
import AddProjectModal from "./AddProjectModal";
import { DatasetReadonlyTag } from "../Datasets/DatasetTag";

function ProjectsListItem({ project }) {
  const { projectID, name, description, createdBy, datasets } = project;
  const { navigate } = useRouter();
  const tags = new Set();
	datasets?.forEach((dataset) => {
		dataset.tags?.forEach((tag) => {
			tags.add(tag);
		});
	});

  return (
    <>
      <List.Item
        as={Segment}
        onClick={() => {
          navigate(projectID);
        }}
      >
        <List.Content>
          <List.Header as={Header}>
            {`${name}`}
            <Label
              content="Project"
              style={{ backgroundColor: "#3B5998", color: "white" }}
            />
            <Header.Subheader content={createdBy.email} />
          </List.Header>

          <List.Description content={description} />
          <List.Description>
            <Divider />
            {
							datasets.length > 0
							? datasets.map((dataset) => (
                  <Label
                    color="blue"
                    key={dataset.datasetID}
                    content={dataset.name}
                  />
                ))
              : null
						}
						<br /><br />
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
          </List.Description>
        </List.Content>
      </List.Item>
      <Divider horizontal hidden />
    </>
  );
}

export default function ProjectsList() {
  const { data, loading, refetch } = useProjectsQuery();

  const location = useLocation();
  useEffect(() => {
    refetch();
  }, [location.key]);
	const projects = data?.getProjects ?? [];

	let content;
	if (loading) {
		content = (
			<Segment placeholder textAlign="center">
				<Dimmer active inverted>
					<Loader size="large">Loading...</Loader>
				</Dimmer>
			</Segment>
		)
	} else if (projects.length === 0) {
		content = (
			<Label>
				No projects available. Add a project above or ask your administrator
				to update your permissions.
			</Label>
		)
	} else {
		content = (
			<Segment placeholder>
				<List relaxed="very" selection size="large">
					{projects.map((project) => (
						<ProjectsListItem key={project.projectID} {...{ project }} />
					))}
				</List>
			</Segment>
		)
	}

  // const allStudySites = studies.map(study => study.studySites).flat()
  return (
    <Grid>
      <Grid.Column>
        <Divider horizontal content="Projects" />
        <Segment basic>
          <AddProjectModal refetch={refetch} />
        </Segment>
        <Form>
          <Form.Field
            control={Input}
            label="Search projects"
            placeholder="Names and descriptions"
          />
        </Form>
        { content }
      </Grid.Column>
    </Grid>
  );
}
