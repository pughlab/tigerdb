import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Dropdown, Button } from 'semantic-ui-react';
import { useMachine } from '@xstate/react';
import { Machine, assign } from 'xstate';

const GET_TIME_POINTS = gql`
  query GetTimePoints {
    timePoints {
      id
      label
    }
  }
`;

const timePointDropdownMachine = Machine({
  id: 'timePointDropdown',
  initial: 'loading',
  context: {
    timePoints: [],
    selectedTimePoint: null,
  },
  states: {
    loading: {
      invoke: {
        src: 'fetchTimePoints',
        onDone: {
          target: 'success',
          actions: assign({ timePoints: (_, event) => event.data.timePoints }),
        },
        onError: 'failure',
      },
    },
    success: {
      on: {
        SELECT: {
          target: 'success',
          actions: assign({ selectedTimePoint: (_, event) => event.selectedTimePoint }),
        },
      },
    },
    failure: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});

function TimePointDropdown({dataSelectionSend}) {
  const { loading, error, data } = useQuery(GET_TIME_POINTS);

  const [current, send] = useMachine(timePointDropdownMachine);

  const { timePoints, selectedTimePoint } = current.context;

  useEffect(() => {
    if (data && !loading && !error) {
      send({ type: 'FETCH', data });
    }
  }, [data, loading, error, send]);

  const handleSelect = (event, { value }) => {
    send({ type: 'SELECT', selectedTimePoint: value });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: Failed to fetch time points.</p>
        <Button onClick={() => send('RETRY')}>Retry</Button>
      </div>
    );
  }

  const options = timePoints.map((timePoint) => ({
    key: timePoint.id,
    value: timePoint.id,
    text: timePoint.label,
  }));

  return (
    <Dropdown
      placeholder="Select Time Point"
      fluid
      selection
      options={options}
      onChange={handleSelect}
      value={selectedTimePoint}
    />
  );
}

export default TimePointDropdown;
