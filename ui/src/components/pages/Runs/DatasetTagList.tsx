import { useLazyQuery } from "@apollo/client";
import { gql } from '@apollo/client'
import * as React from "react";
import { Label, Button, Icon } from "semantic-ui-react";

function DatasetTag({
  dataset,
  updateSelectedDatasets,
  updateAvailableUploads,
  setProjectSelected,
}) {
  const [selected, setSelected] = React.useState(false);
  const [getProcessedUploads] = useLazyQuery(
    gql`
      query processedDatasets($datasetID: ID!) {
        processedDatasets(
          where: { minioUpload: { dataset: { datasetID: $datasetID } } }
        ) {
          objectName
          bucketName
          filename
          minioUpload {
            dataset {
              datasetID
              name
            }
          }
        }
      }
    `,
    {
      variables: { datasetID: dataset.datasetID },
      fetchPolicy: "network-only",
      onCompleted(data) {
        if (selected) {
          updateAvailableUploads((prev) => [
            ...prev,
            ...data.processedDatasets,
          ]);
        }
      },
    }
  );

  React.useEffect(() => {
    if (selected) {
      updateSelectedDatasets((prev) => [...prev, dataset]);
      getProcessedUploads();
    } else {
      updateSelectedDatasets((prev) =>
        prev.filter((item) => item.datasetID !== dataset.datasetID)
      );
      updateAvailableUploads((prev) =>
        prev.filter(
          (item) => item.minioUpload.dataset.datasetID !== dataset.datasetID
        )
      );
    }
  }, [selected]);

  return (
    <Label
      as={Button}
      color={selected ? "blue" : undefined}
      basic={!selected}
      onClick={(e) => {
        e.stopPropagation();
        setProjectSelected(true);
        setSelected(!selected);
      }}
    >
      <Icon name={selected ? "folder open" : "folder outline"} />
      {`${dataset.name}`}
    </Label>
  );
}

export default function DatasetTagList({
  datasets,
  updateSelectedDatasets,
  updateAvailableUploads,
  setProjectSelected,
}) {
  const datasetIDs = new Set();
  const distinctDatasets = datasets.filter((dataset) => {
    if (!datasetIDs.has(dataset.datasetID)) {
      datasetIDs.add(dataset.datasetID);
      return true;
    }
    return false;
  });
  return (
    <Label.Group>
      {distinctDatasets.length > 0 ? (
        distinctDatasets.map((dataset) => (
          <DatasetTag
            key={dataset.datasetID}
            dataset={dataset}
            updateSelectedDatasets={updateSelectedDatasets}
            updateAvailableUploads={updateAvailableUploads}
            setProjectSelected={setProjectSelected}
          />
        ))
      ) : (
        <>No datasets available.</>
      )}
    </Label.Group>
  );
}
