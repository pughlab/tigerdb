import { gql, useMutation, useQuery, useApolloClient } from "@apollo/client";
import * as React from "react";
import { Button, Grid, Header, Icon, Input, Modal, Select, Tab, TabPane } from "semantic-ui-react";

const ADD_TAG_TO_DATASET = gql`
  mutation AddTagToDataset($datasetID: ID!, $tagID: ID!) {
    addTagToDataset(
      datasetID: $datasetID, 
      tagID: $tagID 
    ) {
      tagID
      name
      category
    }
  }
`

export default function AddTagModal({ datasetID, setTags, categories = [] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      closeOnDimmerClick={false}
      size="large"
      open={open}
      onClose={() => { setOpen(!open) }}
      trigger={
        <Button fluid onClick={() => setOpen(!open)} animated='vertical'>
          <Button.Content visible>
            <Icon name="plus" />
          </Button.Content>
          <Button.Content hidden>
            Add tag
          </Button.Content>
        </Button>
      }
    >
      <Modal.Header>Tag dataset</Modal.Header>
      <Modal.Content>
        <Tab panes={
          [
            { 
              menuItem: 'Use existing tag', 
              render: () => <ExistingTagPane datasetID={datasetID} setTags={setTags} open={open} setOpen={setOpen}/>
            },
            {
              menuItem: 'Create new tag',
              render: () => <NewTagPane datasetID={datasetID} setTags={setTags} setOpen={setOpen} categories={categories} />
            }
          ]
        } />
      </Modal.Content>
    </Modal>
  )
}

function NewTagPane({ 
    datasetID, 
    setOpen, 
    setTags, 
    categories = [] 
  }: Readonly<{
    datasetID: string,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setTags: React.Dispatch<React.SetStateAction<any[]>>,
    categories: string[]
  }>) {
  const [tagName, setTagName] = React.useState("")
  const [category, setCategory] = React.useState("")
  const gqlClient = useApolloClient();

  async function createAndAddTag() {
    const tagMutation = await gqlClient.mutate({
      mutation: gql`
        mutation CreateTag($name: String!, $category: String = "default") {
          findOrCreateTag(name: $name, category: $category) {
            tagID
          }
        }`,
      variables: { name: tagName, category },
    });
    if (tagMutation.data?.findOrCreateTag) {
      const addTagToDatasetMutation = await gqlClient.mutate({
        mutation: ADD_TAG_TO_DATASET,
        variables: { datasetID, tagID: tagMutation.data?.findOrCreateTag.tagID },
      });
      if (addTagToDatasetMutation.data?.addTagToDataset) {
        const tag = addTagToDatasetMutation.data?.addTagToDataset
        setTags(prevState => [
          ...prevState,
          { tag: tag.tagID, name: tag.name, category: tag.category }
        ])
      }
    }
  }

  function getCategoryText(category: string) {
    const cat = category.trim().replaceAll('-', ' ')
    const words = cat.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return words.join(' ')
  }

  const categoryOptions: { key: string, value: string, text: string }[] = []
  categories.forEach((category) => categoryOptions.push({
      key: category,
      value: category,
      text: getCategoryText(category)
    }
  ))

  return (
    <TabPane>
      <Header>New Tag</Header>
      <p>Type the tag's name and select its category</p>
      <Grid>
        <Grid.Column width={8}>
          <Input fluid onChange={e => setTagName(e.target.value)} placeholder="Tag name" />
        </Grid.Column>
        <Grid.Column width={8}>
          <Select
            fluid
            placeholder="Select a category" 
            options={categoryOptions}
            onChange={
              (_e, { value }) => setCategory(value)
            }
          />
        </Grid.Column>
      </Grid>
      <br />
      <Button fluid color="teal" onClick={() => {
        createAndAddTag();
        setOpen(prevState => !prevState);
      }}>
        Create tag
      </Button>
    </TabPane>
  )
}

function ExistingTagPane({ datasetID, open, setOpen, setTags }) {
  const [selectedTag, setSelectedTag] = React.useState("");
  const [addTagToDataset] = useMutation(
    ADD_TAG_TO_DATASET, {
      variables: {
        datasetID, 
        tagID: selectedTag
      },
      onCompleted: (data) => {
        setTags(prevState => [
          ...prevState,
          { 
            tag: data.addTagToDataset.tagID,
            name: data.addTagToDataset.name,
            category: data.addTagToDataset.category
          }
        ])
      }
    }
  );
  const { loading, data, error, refetch } = useQuery(
    gql`
      query FindAvailableTags($datasetID: ID!) {
        findAvailableTags(datasetID: $datasetID) {
          tagID
          name
          category
        }
      }
    `,
    {
      variables: {
        datasetID,
      },
    }
  );

  React.useEffect(() => {
    if (open) {
      refetch()
    }
  }, [open])

  let content
  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error! ${error.cause}`;
  } else if (data?.findAvailableTags.length === 0 ) {
    content = 'No available tags. You can create a new tag by using the "Create new tag" tab.';
  } else {
    const tagOptions = data?.findAvailableTags.reduce(
      (acc, tag) => [...acc, {
        key: tag.tagID,
        value: tag.tagID,
        text: tag.name
      }], []
    )
    .sort((tag1, tag2) => {
      if (tag1.text.toLowerCase() === tag2.text.toLowerCase()) {
        return 0
      }
      return tag1.text.toLowerCase() > tag2.text.toLowerCase() ? 1 : -1
    });
    content = (
      <>
        <Header>Available Tags</Header>
        <Select
          fluid
          options={tagOptions}
          placeholder="Select a tag"
          onChange={
            (_e, { value }) => setSelectedTag(value)
          }
        />
        <br /><br />
        <Button fluid color="teal" onClick={() => {
          addTagToDataset();
          setOpen(prevState => !prevState);
        }}>
          Add tag
        </Button>
      </>
    )
  }

  return (
    <TabPane>
      {content}
    </TabPane>
  )
}


