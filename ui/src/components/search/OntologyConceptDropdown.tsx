import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Dropdown } from 'semantic-ui-react';

const GET_ONTOLOGY_CONCEPTS = gql`
  query GetOntologyConcepts {
    ontologyConcepts {
      id
      properties {
        varName
        varLabel
      }
    }
  }
`;


function OntologyConceptDropdown({handleOnChange, selectedValue}) {
  const { loading, error, data } = useQuery(GET_ONTOLOGY_CONCEPTS);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: Failed to fetch ontology concepts.</p>
      </div>
    );
  }

  if (!data?.ontologyConcepts) {
    return null
  }

  const options = data.ontologyConcepts.map((concept: any) => ({
    key: concept.id,
    value: concept.id,
    text: concept.properties.varLabel,
  }));

  return (
    <Dropdown
      placeholder="Select Ontology Concept"
      fluid
      selection
      options={options}
      onChange={handleOnChange}
      value={selectedValue}
    />
  );
}

export default OntologyConceptDropdown;
