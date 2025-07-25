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
  Message,
  Divider,
  Grid,
  Card,
  Popup,
  Button,
  Icon,
  Select
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import useRouter from "../../../hooks/useRouter";

import useProjectsQuery from "../../../hooks/useProjectsQuery";
import AddProjectModal from "./AddProjectModal";
import { DatasetReadonlyTag } from "../Datasets/DatasetTag";
import { gql, useQuery } from "@apollo/client";

function ProjectDetailsCard({ project }) {
	const { projectID, name, description, createdBy, datasets, isPublic, createdOn, isReference } = project
  const creationDate = new Date(createdOn).toDateString()
	const { navigate } = useRouter()
  const tags = new Set();
	datasets?.forEach((dataset) => {
		dataset.tags?.forEach((tag) => {
			tags.add(tag);
		});
	});
  const color = isPublic ? 'black' : 'facebook'
	return (
		<Card link color={color} onClick={() => { navigate(projectID) }}>
      <Popup
        size='large' wide='very' position="top center"
        trigger={
          <Button attached='top' size='large' color={isReference ? 'black' : undefined}>
            <Icon name='folder open' size='large' />
          </Button>
        }        
      >
        {/* {project.isPublic ? 'Public' : 'Private'} project */}
        <Message size='mini'>
          <Message.Content>
            <Divider horizontal content='Details' />
            {description}
          </Message.Content>
        </Message>
        <Segment.Group>
          <Segment>
            <Label.Group>
              <Label>
                <Icon name='user' />
                {'Created by'}
                <Label.Detail content={createdBy.name} />
                <Label.Detail content={createdBy.email} />
              </Label>
              <Label >
                <Icon name='calendar alternate outline' />
                {'Created on'}
                <Label.Detail content={creationDate}  />
              </Label>
            </Label.Group>
          </Segment>
        </Segment.Group>
      </Popup>
      <Card.Content extra>
        <Header size='medium'>
          {name}
        </Header>
        <Label.Group>
          <Label color={color} as={Button} content={<Icon style={{margin: 0}} name={isPublic ? 'lock open' : 'lock'} />} detail={isPublic ? 'Public' : 'Private'} />
          <Label content={<Icon style={{margin: 0}} name='user' />} detail={createdBy.name} />
          <Label content={<Icon style={{margin: 0}} name='calendar alternate outline' />} detail={creationDate} />
          {
            (datasets.length > 0) && (
              <>
                <Divider horizontal content="Data" />
                {
                  datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />)
                }
              </>
            )
          }
          { tags.size > 0 && (
            <>
              <Divider horizontal content="Tags"/>
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
            </>
          )}
        </Label.Group>
      </Card.Content>
		</Card>
	)
}

export default function ProjectsList() {
  const { data, loading, refetch } = useProjectsQuery();
  const location = useLocation();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [filteredProjects, setFilteredProjects] = React.useState([])
  const { loading: tagsLoading, data: tags } = useQuery(gql`
    query TagNames {
      tagNames
    }
  `);

  useEffect(() => {
    refetch();
  }, [location.key]);
	const projects = data?.getProjects ?? [];

  useEffect(() => {
  setFilteredProjects(projects); // Initialize with all projects
}, [projects]);

  useEffect(() => {
    if (selectedTags.length > 0) {
      const tempProjects: any[] = []
      projects.forEach((project) => {
        project.datasets.forEach((dataset) => {
          dataset.tags.forEach((tag) => {
            if (selectedTags.includes(tag.name)) {
              tempProjects.push(project)
            }
          })
        })
      })
      setFilteredProjects(tempProjects)
    } else {
      setFilteredProjects(projects)
    }
  }, [selectedTags])

	let content;
	if (loading && tagsLoading) {
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
			<Card.Group itemsPerRow={3}>
        {filteredProjects.map((project) => (
          <ProjectDetailsCard key={project.projectID} {...{ project }} />
        ))}
      </Card.Group>
		)
	}

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
          <Form.Field
            control={Select}
            multiple
            options={tags?.tagNames.map((tag) => ({key: tag, value: tag, text: tag})) ?? []}
            placeholder='Select tags...'
            label="Filter by dataset tag(s)"
            onChange={(_e, { value }) => setSelectedTags(value)}
          />
        </Form>
        <Divider hidden />
        { content }
      </Grid.Column>
    </Grid>
  );
}
