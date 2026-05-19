import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import { Loader, Dimmer, Form, Header, Label, Input, Segment, Icon, Message, List, Divider, Modal, Container, Dropdown, Button, Popup } from 'semantic-ui-react'
// import useRouter from '../../../hooks/useRouter'
import useDatasetsQuery from "../../../hooks/useDatasetsQuery";
import { tagColors, DatasetTag } from "./DatasetTag";

import AddDatasetModal from "./AddDatasetModal";
import AddTagModal from "./AddTagModal";
import MinioBucket from "../../common/minio";
import useDeleteDatasetMutation from "../../../hooks/useDeleteDatasetMutation";

import { useLocation } from "react-router-dom";
import useIsAdmin from '../../../hooks/useIsAdmin';
import useIsCurator from '../../../hooks/useIsCurator';


function DatasetListItem({ dataset, isPublicProject, isOwner, refetch }) {
  const { datasetID, name, tags: datasetTags, project } = dataset;
  const [isMinioBucketOpen, setIsMinioBucketOpen] = useState(false); // State to control MinioBucket visibility
  const [tags, setTags] = useState(datasetTags.reduce((acc, tag) => [...acc, { tagID: tag.tagID, name: tag.name, category: tag.category }], []));
  const { isAdmin } = useIsAdmin()
  const { isCurator } = useIsCurator()
  const { deleteDataset, loading: isDeleting } = useDeleteDatasetMutation(refetch);

  // const navigate = useNavigate()
  // const { navigate } = useRouter()
  return (
    <>
      <List.Item
        as={Segment}
        // onClick={() => navigate(`dataset/${datasetID}`)}
        onClick={() => setIsMinioBucketOpen(!isMinioBucketOpen)}
      >
        <List.Content floated="right" basic>
          <Icon
            size="large"
            name={isMinioBucketOpen ? "chevron up" : "chevron down"}
          />
        </List.Content>
        <List.Content floated="right" basic>
          {(isAdmin || isCurator ) && (
            <Popup
              inverted
              position="top center"
              content="Delete Dataset"
              trigger={
                <Button
                  color="red"
                  // circular
                  icon="trash"
                  loading={isDeleting}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm("Are you sure you want to delete this dataset?")) {
                      deleteDataset({ variables: { datasetID } });
                    }
                  }}
                />
              }
            />
          )}
        </List.Content>
        <List.Content>
          <List.Header as={Header}>
            {`${name}`}

            {/* <List.Header as={Header} content={`${name}`} /> */}
            <Label content="Dataset" color="blue" />
          </List.Header>
          <Divider />
          { 
            tags
            .sort((tag1, tag2) => {
              if (tag1.name.toLowerCase() === tag2.name.toLowerCase()) {
                return 0
              }
              return tag1.name.toLowerCase() > tag2.name.toLowerCase() ? 1 : -1
            })
            .map((tag) => <DatasetTag key={tag.tagID} tag={tag} datasetID={datasetID} setTags={setTags} canDelete={!isPublicProject && (isAdmin || isCurator)} />)
          }
          {(isAdmin || isCurator) && <AddTagModal datasetID={datasetID} setTags={setTags} categories={Object.keys(tagColors)} />}
          {/* <List.Description content={`${description}`} /> */}
        </List.Content>
      </List.Item>
      {isMinioBucketOpen && <MinioBucket datasetID={`${datasetID}`} isReference={project.isReference} isPublic={project.isPublic} isOwner={isOwner} />} {/* Conditionally render MinioBucket */}
      <Divider horizontal hidden />
    </>
  );
}

export default function DatasetsList({ project, isPublicProject, isOwner }) {

  const { projectID } = project

  const { isAdmin } = useIsAdmin();
  const { isCurator } = useIsCurator();

  const { data, loading, refetch } = useDatasetsQuery({projectIDs: [projectID]});

  const location = useLocation();
  
  const [searchText, setSearchText] = useState('')
  const [filteredDatasets, setFilteredDatasets] = useState([])
  useEffect(() => {
    refetch();
  }, [location.key]);

  useEffect(() => {
    setFilteredDatasets(data?.datasets ?? [])
  }, [data])
  
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredDatasets(data?.datasets ?? [])
    } else {
      setFilteredDatasets((prev) => prev.filter((dataset) => dataset.name.toLowerCase().includes(searchText.toLowerCase())))
    }
  }, [searchText]) 
  
  let datasetList
  if (loading) {
    datasetList = (
      <Segment placeholder textAlign="center">
        {/* <Icon size='massive' name='react' loading /> */}
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    );
  } else if (filteredDatasets.length === 0) {
    datasetList = (
      (isAdmin || isCurator || isOwner) ? <AddDatasetModal projectID={projectID} refetch={refetch} /> : <Message info>No datasets found.</Message>
    ) 
  } else {
    datasetList = (
      <Container>
        <List selection size="large" key="dataset">
          {(isAdmin || isCurator || isOwner) && (
            <>
              <AddDatasetModal projectID={projectID} refetch={refetch} />
              <Divider horizontal />
            </>
          )}
          {filteredDatasets.map((dataset) => (
            <DatasetListItem key={dataset.datasetID} isPublicProject={isPublicProject} isOwner={isOwner} refetch={refetch} {...{ dataset }} />
          ))}
        </List>
      </Container>
    )
  }

  return (
    <>
      {/* <Message> */}

      <Divider horizontal />
      {/* </Message> */}
      <Message>
        <Divider horizontal content="Datasets" />
        <Segment basic>
          
        </Segment>

        <Form>
          <Form.Field
            control={Input}
            label="Search datasets"
            placeholder="Names and descriptions"
            value={searchText}
            onChange={(_e, { value }) => setSearchText(value)}
          />
        </Form>
        <Divider horizontal />

        {datasetList}
      </Message>
    </>
  );
}
