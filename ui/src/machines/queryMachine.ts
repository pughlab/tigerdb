import { createMachine, assign } from 'xstate'
import { gql } from '@apollo/client'
import apolloClient from '../apolloClient'
import * as R from 'remeda'

import {faker} from '@faker-js/faker'

interface QueryMachineContext {
    data: any,
    errors: any,
    variables: any
}

const GET_DATA_VARIABLES = gql`
    query DataVariables {
        curatedDatasets {
            curatedDatasetID
            name
            # dataVariables(options: {sort: [ {chromosome: ASC},{ start: ASC } ]}) {
            dataVariables {
                dataVariableID
            }  
        }
    }
`

export const QUERY_STATES = {
    IDLE: 'idle',
    LOADING: 'loading',
    LOADED: 'loaded',
    ERROR: 'error'
}

export const QUERY_EVENTS = {
    REFRESH: 'refresh',
    RETRY: 'retry',
    FETCH: 'fetch',
    DATA_CHANGED: 'data_changed',
}

function getDataVariables(context: any, event: any) {
    console.log('event', event)
    return apolloClient.query({query: GET_DATA_VARIABLES, variables: context.variables}).then(
        res => {
            if (res.errors) {
                throw res.errors
            } else {
                console.log(res.data)
                const fakeData = () => {
                    let curatedDatasets = []
                    for (const i of R.range(0, 3)) {
                        curatedDatasets[i] = {
                            curatedDatasetID: faker.datatype.uuid(),
                            name: faker.datatype.uuid(),
                            dataVariables: R.pipe(
                                R.range(0, 10),
                                R.map(i => ({dataVariableID: faker.datatype.uuid(), chromosome: i, start: i*20, end: 20+i*20, datavalue: faker.datatype.number(100)}))
                            )
                        }
                    }
                    return {curatedDatasets}
                }
                // return res.data
                return fakeData()
            }
        }
    )
}

export const createQueryMachine = () => {
    

    const machine = createMachine({
        id: 'gqlQuery',
        initial: QUERY_STATES.LOADING,
        context: {},
        states: {
            [QUERY_STATES.IDLE]: {
                on: {
                    [QUERY_EVENTS.FETCH]: {target: QUERY_STATES.LOADING}
                }
            },
            [QUERY_STATES.LOADING]: {
                invoke: {
                    src: (context: any, event) => getDataVariables(context, event),
                    onDone: {
                        target: QUERY_STATES.LOADED,
                        actions: assign({
                            data: (context, event) => event.data
                        })
                    },
                    onError: {
                        target: QUERY_STATES.ERROR
                    }
                }
            },
            [QUERY_STATES.LOADED]: {
                on: {
                    [QUERY_EVENTS.REFRESH]: QUERY_STATES.LOADING
                }
            },
            [QUERY_STATES.ERROR]: {
                on: {
                    [QUERY_EVENTS.RETRY]: QUERY_STATES.LOADING
                }
            }
        },

    })

    return machine
}