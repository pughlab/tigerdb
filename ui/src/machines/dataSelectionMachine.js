import { createMachine, assign, send } from 'xstate';

const dataSelectionMachine = createMachine(
  {
    id: 'dataSelection',
    initial: 'idle',
    context: {
      selectedTimePoints: [],
      selectedOntologyConcepts: [],
      fetchedData: null,
    },
    states: {
      idle: {
        on: {
          SELECT_TIME_POINT: {
            actions: 'addSelectedTimePoint',
          },
          SELECT_ONTOLOGY_CONCEPT: {
            actions: 'addSelectedOntologyConcept',
          },
          REMOVE_TIME_POINT: {
            actions: 'removeSelectedTimePoint',
          },
          REMOVE_ONTOLOGY_CONCEPT: {
            actions: 'removeSelectedOntologyConcept',
          },
          REMOVE_ALL: {
            actions: 'removeAllSelected',
          },
          FETCH_DATA: 'fetching',
        },
      },
      fetching: {
        entry: 'fetchData',
        on: {
          DATA_FETCHED: {
            actions: 'storeFetchedData',
          },
          CANCEL_FETCH: 'idle',
        },
      },
    },
  },
  {
    actions: {
      addSelectedTimePoint: assign((context, event) => {
        return {
          selectedTimePoints: [...context.selectedTimePoints, event.timePoint],
        };
      }),
      addSelectedOntologyConcept: assign((context, event) => {
        return {
          selectedOntologyConcepts: [...context.selectedOntologyConcepts, event.ontologyConcept],
        };
      }),
      removeSelectedTimePoint: assign((context, event) => {
        return {
          selectedTimePoints: context.selectedTimePoints.filter((tp) => tp !== event.timePoint),
        };
      }),
      removeSelectedOntologyConcept: assign((context, event) => {
        return {
          selectedOntologyConcepts: context.selectedOntologyConcepts.filter(
            (oc) => oc !== event.ontologyConcept
          ),
        };
      }),
      removeAllSelected: assign({
        selectedTimePoints: [],
        selectedOntologyConcepts: [],
      }),
      fetchData: send((context) => ({ type: 'FETCH_DATA', data: context })),
      storeFetchedData: assign((context, event) => {
        return {
          fetchedData: event.data,
        };
      }),
    },
  }
);

export default dataSelectionMachine;
