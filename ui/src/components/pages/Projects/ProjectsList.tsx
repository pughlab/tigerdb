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
  Select,
} from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import useRouter from "../../../hooks/useRouter";

import useProjectsQuery from "../../../hooks/useProjectsQuery";
import AddProjectModal from "./AddProjectModal";
import AnnotationsList from "../Annotations/AnnotationsList";

import { DatasetReadonlyTag, tagColors } from "../Datasets/DatasetTag";
import { gql, useQuery } from "@apollo/client";
import SegmentPlaceholder from "../../common/SegmentPlaceholder";

function ProjectDetailsCard({ project }) {
  const { projectID, name, description, createdBy, datasets, isPublic, createdOn, isReference } = project
  const creationDate = new Date(createdOn).toDateString()
  const { navigate } = useRouter()
  const seenTagnames = new Set();
  let tags: any[] = []
  datasets?.forEach((dataset) => {
    const uniqueTags = dataset.tags?.filter((tag) => {
      if (seenTagnames.has(tag.name)) {
        return false
      }
      seenTagnames.add(tag.name)
      return true
    });
    tags = [...tags, ...uniqueTags];
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
                <Label.Detail content={creationDate} />
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
          <Label color={color} as={Button} content={<Icon style={{ margin: 0 }} name={isPublic ? 'lock open' : 'lock'} />} detail={isPublic ? 'Public' : 'Private'} />
          <Label content={<Icon style={{ margin: 0 }} name='user' />} detail={createdBy.name} />
          <Label content={<Icon style={{ margin: 0 }} name='calendar alternate outline' />} detail={creationDate} />
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
          {tags.length > 0 && (
            <>
              <Divider horizontal content="Tags" />
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

function datasetIncludesTag(dataset, tagList) {
  return tagList?.every((tagName) => dataset.tags?.some((tag) => tag.name === tagName)) ?? false
}

function datasetIncludesCategory(dataset, categoryList) {
  return categoryList?.every((categoryName) => dataset.tags?.some((tag) => tag.category === categoryName)) ?? false
}

export default function ProjectsList() {
  const { data, loading, refetch } = useProjectsQuery();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [cdr3SearchTerm, setCdr3SearchTerm] = React.useState('');
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [filteredProjects, setFilteredProjects] = React.useState([])
  const [activeView, setActiveView] = React.useState('projects') // 'projects' or 'cdr3');

  const { loading: tagsLoading, data: tags } = useQuery(gql`
    query TagNames {
      tagNames
    }
  `);
  const { data: categories } = useQuery(gql`
    query TagCategories {
      tagCategories
    }  
  `)

  const projects = data?.getProjects ?? [];

  function doSearch() {
    let tempProjects = []
    if (searchTerm.trim().length > 0) {
      tempProjects = projects.filter((project) => project.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
    } else {
      tempProjects = [...projects]
    }
    if (selectedCategories.length > 0) {
      tempProjects = tempProjects.filter(
        (project) => project.datasets.reduce((acc, dataset) => acc || datasetIncludesCategory(dataset, selectedCategories), false)
      )
    }
    if (selectedTags.length > 0) {
      tempProjects = tempProjects.filter((project) => project.datasets.reduce(
        (acc, dataset) => acc || datasetIncludesTag(dataset, selectedTags), false)
      )
    }
    // Sort: Private first, then by Date (Newest first)
    tempProjects.sort((a, b) => {
      // Primary sort: isPublic (false/Private before true/Public)
      if (a.isPublic !== b.isPublic) {
        return a.isPublic ? 1 : -1;
      }
      // // Secondary sort: createdOn (Newest first)
      // const dateA = new Date(a.createdOn).getTime();
      // const dateB = new Date(b.createdOn).getTime();
      // return dateB - dateA;
    })
    setFilteredProjects(tempProjects)
  }

  function toggleCategory(category) {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category))
    }
  }

  useEffect(() => {
    refetch();
  }, [location.key]);

  // useEffect(() => {
  //   setFilteredProjects(data?.getProjects ?? [])
  // }, [data])

  useEffect(() => {
    doSearch()
  }, [data, searchTerm, selectedTags, selectedCategories])

  let projectsContent;
	if (loading && tagsLoading) {
		projectsContent = (
			<Segment placeholder textAlign="center">
				<Dimmer active inverted>
					<Loader size="large">Loading...</Loader>
				</Dimmer>
			</Segment>
		)
	} else if (filteredProjects.length === 0) {
		projectsContent = (
			// <Label>
			// 	No projects available. Add a project above or ask your administrator
			// 	to update your permissions.
			// </Label>
      <SegmentPlaceholder text={"No projects found"} />
		)
	} else {
		projectsContent = (
      <>
        <Divider horizontal>
          <Header as="h4">
            Showing {filteredProjects.length} of {projects.length} projects
          </Header>
        </Divider>
        <Card.Group itemsPerRow={3}>
          <AddProjectModal refetch={refetch} />
          {
            filteredProjects.map((project) => (
              <ProjectDetailsCard key={project.projectID} {...{ project }} />
            ))
          }
        </Card.Group>
      </>
		)
	}
  let cdr3Content = (
    <Segment basic>
      <AnnotationsList cdr3SearchTerm={cdr3SearchTerm} selectedTags={selectedTags} selectedCategories={selectedCategories} />
    </Segment>
  )

  const content = activeView === 'projects' ? projectsContent : cdr3Content;

  return (
    <Grid>
      <Grid.Column>
        <Message>
        <Form>
          <Form.Field
            control={Input}
            label="Search CDR3b sequences:"
            placeholder="CASSIRSSYEQYF | CASS..."
            // onChange={(_e, { value }) => {
            //   const isUppercase = /^[A-Za-z]+$/.test(value)
            //   if (isUppercase) {
            //     setCdr3SearchTerm(value);
            //     setActiveView('cdr3');
            //   }
            // }}
            onChange={(_e, { value }) => {
              // Convert to uppercase immediately
              const uppercased = value.toUpperCase();
              
              // Optional: Only update if valid characters (A-Z and separator | etc)
              // Currently checks for letters only, adjust regex if you want to allow dividers like '|'
              const isValid = /^[A-Z|]+$/.test(uppercased) || uppercased === '';
              
              if (isValid) {
                setCdr3SearchTerm(uppercased);
                // Switch view if user is typing
                if (uppercased.length > 0) {
                    setActiveView('cdr3');
                }
              }
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
            size='massive'
            style={{
              // width: "100%",
              height: "6rem",     // taller
              fontSize: "2rem",  // bigger text
              // padding: "1em",       // more inner space
              // margin: "0.5em" // space below
              marginBottom: 0,
              // border: '1px solid green',
              // borderRadius: '50%'
            }}            
            icon='search'
            iconPosition='left'
          />
          <Form.Field/>
          <Divider horizontal />
          <Form.Group inline >
            <label>Tags:</label>
            {
              categories?.tagCategories?.map((category) => 
                <Button
                  key={category}
                  content={category ?? 'other'} 
                  size='medium'
                  basic={!selectedCategories.includes(category)}
                  color={tagColors[category] ?? 'black'}
                  onClick={() => toggleCategory(category)}
                />
              )
            }
            <Form.Dropdown
            width={4}
            control={Select}
            multiple
            options={tags?.tagNames.map((tag) => ({key: tag, value: tag, text: tag})) ?? []}
            placeholder='Select tags...'
            search
            // label="Filter by dataset tag(s)"
            onChange={(_e, { value }) => setSelectedTags(value)}
          />
          <Form.Field
          // move to right side
            fluid
            width={12}
            control={Input}
            label="Search Projects:"
            placeholder="Names and descriptions"
            onChange={(_e, { value }) => {
              setSearchTerm(value)
              setActiveView('projects')
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
          </Form.Group>
        </Form>
        </Message>
        <Divider hidden />
        <Button.Group fluid widths={2} attached='top'>
          <Button
            color='grey'
            onClick={() => setActiveView('projects')}
            basic={activeView !== 'projects'}
          >
            <Header
              inverted={activeView === 'projects'}
              content='Projects'
              subheader='Browse projects, download data'
            />
          </Button>
          <Button
            color='teal'
            onClick={() => setActiveView('cdr3')}
            basic={activeView !== 'cdr3'}
          >
            <Header
              inverted={activeView === 'cdr3'}
              content='CDR3'
              subheader='Explore CDR3 sequences'
            />
          </Button>
        </Button.Group>
        <Segment attached='bottom'>
          {content}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

