import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Dropdown, Button } from 'semantic-ui-react';

const GET_TIME_POINTS = gql`
  query GetTimePoints {
    timePoints {
      id
      label
    }
  }
`;


function TimePointDropdown({handleOnChange, selectedValue}) {
  const { loading, error, data } = useQuery(GET_TIME_POINTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: Failed to fetch time points.</p>
      </div>
    );
  }

  if (!data?.timePoints) {
    return
  }

  const options = data.timePoints.map((timePoint: any) => ({
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
      onChange={handleOnChange}
      value={selectedValue}
    />
  );
}

export default TimePointDropdown;
