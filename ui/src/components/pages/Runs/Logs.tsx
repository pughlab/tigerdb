import React, { useState, useEffect } from 'react';
import { Divider, Header, Segment, Checkbox, Loader, Dimmer, Message } from 'semantic-ui-react';
import useRunLogsQuery from '../../../hooks/useRunLogsQuery';
import { Route, Routes, useParams } from 'react-router-dom'
import SegmentPlaceholder from '../../common/SegmentPlaceholder';

export default function Logs() {
  const [showVerbose, setShowVerbose] = useState(false);

  // Get the runID from context or props (assuming you're using useCrescentContext)
  const { runID } = useParams()

  // Fetch logs using the custom hook
  const { logs, loading } = useRunLogsQuery({ runID });

  //   // Utility functions to process the logs
  //   const splitByNewLine = (logs) => logs.split('\n').map((line) => line.trim());
  //   const includesNumOfAsterisks = (line, num) => line.includes('*'.repeat(num));
  //   const trimUnicode = (str) => str.substring(str.indexOf('*'));

  //   // Map logs to paragraphs for display
  //   const mapToParagraph = (logs) =>
  //     logs.map((log, index) => <p key={index}>{trimUnicode(log)}</p>);

  //   // Filter logs based on verbosity
  //   const filteredLogs = () => {
  //     if (!logs) return [];
  // const lines = splitByNewLine(logs);
  //     const filtered = lines.filter((line) =>
  //       includesNumOfAsterisks(line, showVerbose ? 3 : 4)
  //     );
  //     return mapToParagraph(filtered);
  //   };


  // Utility functions to process the logs
  const splitByNewLine = (logs) => logs.split('\n').map((line) => line.trim());

  // Process and format logs
  const formatLogs = (logs) => {
    const lines = splitByNewLine(logs);
    return lines.map((line, index) => (
      <p key={index} style={{ margin: '0', padding: '2px 0', fontFamily: 'monospace' }}>
        {line}
      </p>
    ));
  };

  if (loading) {
    return (
      <SegmentPlaceholder basic>
        {/* <Icon size='massive' name='react' loading /> */}
        <Dimmer active inverted>
          <Loader size='large'>Loading...</Loader>
        </Dimmer>
      </SegmentPlaceholder>
    )
  }
  return (
    <>
      <Divider horizontal>
        <Header>
          Logs
          <Header.Subheader>
            <Checkbox
              label="Show full verbose logs"
              // onClick={() => setShowVerbose(!showVerbose)}
              // toggle
              checked
            />
          </Header.Subheader>
        </Header>
      </Divider>
      <Segment
        style={{
          overflowY: 'auto',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: 'black',
          maxHeight : '34vh',
        }}
      >
        {logs ? (
          <pre style={{
            fontFamily: 'monospace',
            fontSize: '0.95em',
            lineHeight: '1.4',
            whiteSpace: 'pre-wrap',
            color: 'black',
          }}>
            {formatLogs(logs)}
          </pre>
        ) : (
          <Message>No Logs Available</Message>
        )}
      </Segment>
    </>
  );
};