import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Dropdown } from 'semantic-ui-react';
import { useMachine } from '@xstate/react';
import { Machine, assign } from 'xstate';

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

const ontologyConceptDropdownMachine = Machine({
  id: 'ontologyConceptDropdown',
  initial: 'loading',
  context: {
    ontologyConcepts: [],
    selectedOntologyConcept: null,
  },
  states: {
    loading: {
      invoke: {
        src: 'fetchOntologyConcepts',
        onDone: {
          target: 'success',
          actions: assign({ ontologyConcepts: (_, event) => event.data.ontologyConcepts }),
        },
        onError: 'failure',
      },
    },
    success: {
      on: {
        SELECT: {
          target: 'success',
          actions: assign({ selectedOntologyConcept: (_, event) => event.selectedOntologyConcept }),
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

function OntologyConceptDropdown({dataSelectionSend}) {
  const { loading, error, data } = useQuery(GET_ONTOLOGY_CONCEPTS);

  const [current, send] = useMachine(ontologyConceptDropdownMachine);

  const { ontologyConcepts, selectedOntologyConcept } = current.context;

  useEffect(() => {
    if (data && !loading && !error) {
      send({ type: 'FETCH', data });
    }
  }, [data, loading, error, send]);

  const handleSelect = (event, { value }) => {
    send({ type: 'SELECT', selectedOntologyConcept: value });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: Failed to fetch ontology concepts.</p>
        <Button onClick={() => send('RETRY')}>Retry</Button>
      </div>
    );
  }

  const options = ontologyConcepts.map((concept) => ({
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
      onChange={handleSelect}
      value={selectedOntologyConcept}
    />
  );
}

export default OntologyConceptDropdown;
