import React, { useState, useEffect } from 'react';
import { Segment, Table, Message, Header, Icon, Dimmer, Loader } from 'semantic-ui-react';

const DisplayTableFromPresignedURL = ({ presignedURL, delimiter = ',', rowsToShow = 1000 }) => {
  const [fileContent, setFileContent] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // Fetch data from the presigned URL
  useEffect(() => {
    if (presignedURL) {
      setLoading(true);
      fetch(presignedURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch file content');
          }
          return response.text(); // Assuming text data
        })
        .then((data) => {
          const parsedData = data.split('\n').map((row) => row.split(delimiter)); // Parse data using the provided delimiter
          setFileContent(parsedData);
          setTotalRows(parsedData.length - 1); // Exclude the header row
          setFetchError(false);
        })
        .catch((error) => {
          console.error('Error fetching file content:', error);
          setFetchError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [presignedURL, delimiter, rowsToShow]);

  if (loading) {
    return (
      <Segment placeholder textAlign="center">
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    );
  }

  if (fetchError) {
    return (
      <Message negative>
        <Message.Header>Failed to Load Data</Message.Header>
        <p>Please check the presigned URL or try again later.</p>
      </Message>
    );
  }

  if (fileContent.length === 0) {
    return (
      <Message info>
        <Message.Header>No Data Available</Message.Header>
        <p>Please ensure the presigned URL is correct and contains valid data.</p>
      </Message>
    );
  }

  return (
    <Segment placeholder>
      <Segment basic color="violet">
        <div style={{ overflowX: 'auto', overflowY: 'scroll', maxHeight: '400px' }}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                {fileContent[0]?.map((header, columnIndex) => (
                  <Table.HeaderCell
                    key={columnIndex}
                    style={{
                      position: 'sticky',
                      top: 0,
                      background: '#F9FAFB',
                      zIndex: 2,
                      textAlign: 'center',
                    }}
                  >
                    {header || `Column ${columnIndex + 1}`}
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fileContent.slice(1, rowsToShow + 1).map((row, rowIndex) => (
                <Table.Row key={rowIndex}>
                  {row.map((cell, columnIndex) => (
                    <Table.Cell key={columnIndex}>
                      <div
                        style={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '150px',
                        }}
                      >
                        {cell}
                      </div>
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell
                  colSpan={fileContent[0]?.length || 1}
                  style={{
                    position: 'sticky',
                    bottom: 0,
                    background: '#F9FAFB',
                    zIndex: 1,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontWeight: 'bold' }}>
                    Showing {Math.min(rowsToShow, totalRows)} of {totalRows} rows. Please download to see more.
                  </div>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </Segment>
    </Segment>
  );
};

export default DisplayTableFromPresignedURL;
