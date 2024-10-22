import React, { useEffect, useState } from 'react';
import { Table, Dropdown, Button, Segment, Header, Message, Checkbox, Divider, Loader, Dimmer } from 'semantic-ui-react';
import useUploadProcessedHeaders from '../../../hooks/useUploadProcessedHeadersMutation' 


// Helper function to parse CSV with a dynamic delimiter
const parseCSV = async (text: string, delimiter: string) => {
  const rows = text.split('\n').map((row) => row.split(delimiter));
  return rows;
};

const FileHeaderSelection = ({ presignedURL, headerOptions, bucketName, objectName, filename, onSubmitHeaders }) => {
  const { handleUploadProcessedHeaders } = useUploadProcessedHeaders(() => {
    console.log('Processed headers uploaded successfully.');
    onSubmitHeaders(headers);
  });

  const [fileContent, setFileContent] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [headers, setHeaders] = useState({});
  const [selectedDelimiter, setSelectedDelimiter] = useState('\t'); // Default is TAB
  const [includesHeader, setIncludesHeader] = useState(false);

  const delimiterOptions = [
    { key: 'tab', text: 'Tab', value: '\t' },
    { key: 'comma', text: 'Comma', value: ',' },
    { key: 'semicolon', text: 'Semicolon', value: ';' },
    { key: 'pipe', text: 'Pipe', value: '|' },
  ];

  const handleHeaderChange = (columnIndex, selectedHeader) => {
    // setSelectedHeaders({ ...selectedHeaders, [columnIndex]: selectedHeader });
    const updatedHeaders = { ...headers };

    if (selectedHeader === 'none') {
      delete updatedHeaders[columnIndex]; // Remove the column from selection if "None" is chosen
    } else {
      updatedHeaders[columnIndex] = selectedHeader; // Add or update the selection
    }
    console.log('Updated selected headers:', updatedHeaders); // Log to see the state change

    setHeaders(updatedHeaders);
  };

  const handleDelimiterChange = (e, { value }) => {
    setSelectedDelimiter(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(presignedURL);
        const text = await response.text();
        const parsedData = await parseCSV(text, selectedDelimiter); // Parse CSV data with selected delimiter
        setFileContent(parsedData);
      } catch (error) {
        console.error('Error fetching file from presigned URL:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [presignedURL, selectedDelimiter]); // Re-fetch data if delimiter changes

  if (loading) {
    return (
      <Segment placeholder textAlign='center'>
      {/* <Icon size='massive' name='react' loading /> */}
        <Dimmer active inverted>
            <Loader size='large'>Loading...</Loader>
        </Dimmer>
      </Segment>
    )
  }

  const requiredHeaderCount = 6; // You can change this to the number of required headers
  const rowsShown = 5; // Show only 5 rows initially
  const totalRows = fileContent.length - (includesHeader ? 1 : 0); // Exclude the header row if it exists
  const extraHeaders = Object.keys(headers).length > requiredHeaderCount;

  // Check if cdr3b and trbv are included in selectedHeaders
  const hasRequiredHeaders = Object.values(headers).includes('cdr3b') && Object.values(headers).includes('trbv');

  // Disable the submit button if less than required headers are selected, too many headers are selected, or cdr3b/trbv are not included
  const isSubmitDisabled = Object.keys(headers).length < 2 || !hasRequiredHeaders;


  // no clue why this doesn't work
  // // This function filters out selected headers from the available options
  // const getAvailableHeaders = () => {
  //   const selectedValues = Object.values(selectedHeaders);
  //   const availableHeaders = headerOptions.filter(option => !selectedValues.includes(option.value));
  //   console.log(selectedHeaders)

  //   console.log("Available headers:", availableHeaders); // Log available headers for debugging
  //   return availableHeaders;
  // };

  const headerOptionsWithNone = [
    { key: 'none', text: 'None', value: 'none' }, // "None" option
    // ...getAvailableHeaders()
    ...headerOptions
  ];

  return (
    <Segment color='blue'>
      <Message>

        <Header>Select File Delimiter:</Header>
        <Dropdown
          placeholder="Select delimiter"
          fluid
          selection
          options={delimiterOptions}
          onChange={handleDelimiterChange}
          value={selectedDelimiter}
        />
        <Checkbox
          label="File includes header"
          checked={includesHeader}
          onChange={(e, { checked }) => setIncludesHeader(checked)}
        />
      </Message>

      {/* Warn the user if more than the required number of columns are selected */}
      {extraHeaders && (
        <Message warning>
          You can only select {requiredHeaderCount} columns. Please remove extra selections.
        </Message>
      )}

      {/* Wrapper with horizontal scroll for the table */}
      <div style={{ overflowX: 'auto' }}>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {fileContent[0]?.map((_, columnIndex) => (
                <Table.HeaderCell key={columnIndex}>
                  <Dropdown
                    placeholder="Select header"
                    fluid
                    selection
                    options={headerOptionsWithNone} // Use the options with "None"
                    //   onChange={(e, { value }) => handleHeaderChange(columnIndex, value)}
                    onChange={(e, { value }) => handleHeaderChange(columnIndex, value)}
                    value={headers[columnIndex] || 'none'} // Default to "None" if no header is selected
                    disabled={Object.keys(headers).length >= requiredHeaderCount && !headers[columnIndex]} // Disable only if max selected


                  />
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {fileContent.slice(includesHeader ? 1 : 0, includesHeader ? 6 : 5).map((row, rowIndex) => (
              <Table.Row key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  // <Table.Cell key={columnIndex}>{cell}</Table.Cell>
                      <Table.Cell key={columnIndex}>
                      <div style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '150px' // You can adjust the width as needed
                      }}>
                        {cell}
                      </div>
                    </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
          {/* Add a footer indicating that more rows exist */}
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan={fileContent[0]?.length || 1}>
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  Showing {Math.min(rowsShown, totalRows)} of {totalRows} rows
                </div>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
      <Divider horizontal />
      <Button color='blue' fluid 
        onClick={() => {handleUploadProcessedHeaders(bucketName, objectName, filename, headers, selectedDelimiter, includesHeader)}}
        disabled={isSubmitDisabled}
        content={isSubmitDisabled ? 'Select at least 2 headers' : 'Submit Headers'} 
      >
        
      </Button>
    </Segment>
  );
};

export default FileHeaderSelection;
