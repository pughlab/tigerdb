import { createMachine, assign } from 'xstate'
import { gql } from '@apollo/client'
import apolloClient from '../apolloClient'
import * as R from 'remeda'

import {faker} from '@faker-js/faker'

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
            // searchText, studiesWithDatasets
            searchText: '',
            studiesWithDatasets: {}
        },
        states: {
            [FILTER_STATES.IDLE]: {
                on: {
                    [FILTER_EVENTS.CHANGE_SEARCH_TEXT]: {
                        target: FILTER_STATES.IDLE,
                        actions: assign({
                            searchText: (context: Object, event: any) => event.payload.searchText
                        })
                    },
                    [FILTER_EVENTS.CHANGE_STUDIES_WITH_DATASETS]: {
                        target: FILTER_STATES.IDLE,
                        actions: assign({
                            studiesWithDatasets: (context, event: any) => {
                                return null
                            },
                        })
                    },
                }
            },
        },

    })

    return machine
}