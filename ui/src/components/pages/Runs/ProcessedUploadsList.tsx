import React from "react";
import { Label, Button, Icon } from "semantic-ui-react";

function ProcessedUpload({ upload, updateSelectedUploads }) {
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    updateSelectedUploads((prev) => selected ? [...prev, upload] : prev.filter(({objectName}) => objectName !== upload.objectName))
  }, [selected]);

  return (
    <Label
      as={Button}
      color={selected ? "green" : undefined}
      basic={!selected}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <Icon name={selected ? "file" : "file outline"} />
      {`${upload.filename}`}
    </Label>
  );
}

export default function ProcessedUploadsList({ uploads, updateSelectedUploads }) {
  const uploadIDs = new Set();
  const distinctUploads = uploads.filter((upload) => {
    if (!uploadIDs.has(upload.objectName)) {
      uploadIDs.add(upload.objectName);
      return true;
    }
    return false;
  });
  return (
    <Label.Group>
      {distinctUploads.length > 0 ? (
        distinctUploads.map((upload) => (
          <ProcessedUpload
            key={upload.objectName}
            upload={upload}
            updateSelectedUploads={updateSelectedUploads}
          />
        ))
      ) : (
        <>No uploads available.</>
      )}
    </Label.Group>
  );
}
