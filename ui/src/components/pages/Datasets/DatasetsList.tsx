import { useEffect, useState } from "react";
import * as React from "react";
import {
  Loader,
  Dimmer,
  Form,
  Header,
  Label,
  Input,
  Segment,
  Icon,
  Message,
  List,
  Divider, Container
} from "semantic-ui-react";
// import useRouter from '../../../hooks/useRouter'
import useDatasetsQuery from "../../../hooks/useDatasetsQuery";
import { tagColors, DatasetTag } from "./DatasetTag";

import AddDatasetModal from "./AddDatasetModal";
import AddTagModal from "./AddTagModal";
import MinioBucket from "../../common/minio";

import { useLocation } from "react-router-dom";


function DatasetListItem({ dataset }) {
  const { datasetID, name, tags: datasetTags } = dataset;
  const [isMinioBucketOpen, setIsMinioBucketOpen] = useState(false); // State to control MinioBucket visibility
  const [tags, setTags] = useState(datasetTags.reduce((acc, tag) => [...acc, { tagID: tag.tagID, name: tag.name, category: tag.category }], []));

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
        <List.Content floated="right" basic></List.Content>
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
            .map((tag) => <DatasetTag key={tag.tagID} tag={tag} datasetID={datasetID} setTags={setTags} canDelete={true} />)
          }
          <AddTagModal datasetID={datasetID} setTags={setTags} categories={Object.keys(tagColors)} />
          {/* <List.Description content={`${description}`} /> */}
        </List.Content>
      </List.Item>
      {/* Conditionally render MinioBucket */}
      {isMinioBucketOpen && <MinioBucket datasetID={`${datasetID}`} />}{" "}
      <Divider horizontal hidden />
    </>
  );
}

export default function DatasetsList({ projectID }) {

  const { data, loading, refetch, searchText, setSearchText } =
    useDatasetsQuery({projectIDs: [projectID]});

  const location = useLocation();
  useEffect(() => {
    refetch();
  }, [location.key]);

  const datasets = data?.datasets ?? [];
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
  } else if (datasets.length === 0) {
    datasetList = (
      <Label>
        No datasets available. Add a dataset above or ask your administrator
        to update your permissions.
      </Label>
    ) 
  } else {
    datasetList = (
      <Container>
        <List selection size="large" key="dataset">
          {datasets.map((dataset) => (
            <DatasetListItem key={dataset.datasetID} {...{ dataset }} />
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
          <AddDatasetModal projectID={projectID} refetch={refetch} />
        </Segment>

        <Form>
          <Form.Field
            control={Input}
            label="Search datasets"
            placeholder="Names and descriptions"
            value={searchText}
            onChange={(e, { value }) => setSearchText(value)}
          />
        </Form>
        <Divider horizontal />

        {datasetList}
      </Message>
    </>
  );
}
