import { createMachine, assign } from 'xstate'
import { gql } from '@apollo/client'
import apolloClient from '../apolloClient'
import * as R from 'remeda'

interface FilterMachineContext {
    searchText: string,
    studiesWithDatasets: object
}

export const FILTER_STATES = {
    IDLE: 'idle',
    // UPDATING: 'updating'
}

export const FILTER_EVENTS = {
    CHANGE_SEARCH_TEXT: 'change_search_text',
    CHANGE_STUDIES_WITH_DATASETS: 'change_studies_with_datasets',
    RESET: 'reset'
}

export const createDataVariableFilterMachine = () => {
    const machine = createMachine({
        id: 'snapshot',
        initial: FILTER_STATES.IDLE,
        context: {
            searchText: '',
            studiesWithDatasets: {}
        } as FilterMachineContext,
        states: {
            [FILTER_STATES.IDLE]: {
                on: {
                    [FILTER_EVENTS.CHANGE_SEARCH_TEXT]: {
                        target: FILTER_STATES.IDLE,
                        actions: assign({
                            searchText: (context: FilterMachineContext, event: any) => event.payload.searchText
                        })
                    },
                    [FILTER_EVENTS.CHANGE_STUDIES_WITH_DATASETS]: {
                        target: FILTER_STATES.IDLE,
                        actions: assign({
                            studiesWithDatasets: (context: FilterMachineContext, event: any) => {
                                return {}
                            },
                        })
                    },
                }
            },
        },

    })

    return machine
}