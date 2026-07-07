import React from "react";
import { Label, Button, Icon } from "semantic-ui-react";

function ProcessedUpload({ upload, updateSelectedUploads, projectSelected }) {
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    updateSelectedUploads((prev) => selected ? [...prev, upload] : prev.filter(({objectName}) => objectName !== upload.objectName))
  }, [selected]);

  React.useEffect(() => {
    setSelected(projectSelected)
  }, [projectSelected])

  return (
    <Label
      as={Button}
      color={selected ? "green" : undefined}
      basic={!selected}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(!selected);
      }}
    >
      <Icon name={selected ? "file" : "file outline"} />
      {`${upload.filename}`}
    </Label>
  );
}

export default function ProcessedUploadsList({ uploads, updateSelectedUploads, projectSelected }) {
  const uploadIDs = new Set();
  const distinctUploads = uploads.filter((upload) => {
    if (uploadIDs.has(upload.objectName)) {
      return false;
    }
    uploadIDs.add(upload.objectName);
    return true;
  });
  return (
    <Label.Group>
      {distinctUploads.length > 0 ? (
        distinctUploads.map((upload) => (
          <ProcessedUpload
            key={upload.objectName}
            upload={upload}
            updateSelectedUploads={updateSelectedUploads}
            projectSelected={projectSelected}
          />
        ))
      ) : (
        <>No uploads available.</>
      )}
    </Label.Group>
  );
}
