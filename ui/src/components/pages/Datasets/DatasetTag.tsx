import * as React from "react";
import { Icon, Label, SemanticCOLORS } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";

// Colors for the tags, depending on their category.
// Since we are limited by the options available in Semantic UI React, colors must be picked from the following list:
// [ 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']
export const tagColors: { [key: string]: SemanticCOLORS } = {
  // cancer: "red",
  human: "red",
  "non-cancer": "orange",
  viral: "yellow",
  bacterial: "green",
  other: "black",
};

const REMOVE_TAG_FROM_DATASET = gql`
  mutation RemoveTagFromDataset($tagID: ID!, $datasetID: ID!) {
    removeTagFromDataset(tagID: $tagID, datasetID: $datasetID) {
      tagID
    }
  }
`;

export function DatasetTag({ tag, datasetID, setTags, canDelete = false }) {
  const { tagID, name, category } = tag;
  const color = category ? tagColors[category.toLowerCase()] : tagColors["other"];
  const [removeTag] = useMutation(REMOVE_TAG_FROM_DATASET, {
    variables: {
      tagID: tagID,
      datasetID: datasetID,
    },
    onCompleted: (data) => {
      setTags((prevState) =>
        prevState.filter((tag) => data.removeTagFromDataset.tagID !== tag.tagID)
      );
    },
  });
  return (
    <Label key={tagID} color={color} style={{marginBottom: "5px"}}>
      {name}
      {canDelete ? (<Icon name="delete" onClick={() => removeTag()} />) : null}
    </Label>
  );
}

export function DatasetReadonlyTag({ tag }) {
  const { tagID, name, category } = tag;
  const color = category ? tagColors[category.toLowerCase()] : tagColors["other"];
  return (
    <Label key={tagID} color={color} style={{marginBottom: "5px"}}>
      {name}
    </Label>
  );
}
