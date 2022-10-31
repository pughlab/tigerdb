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
                fields {
                    name
                    value
                }
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
                const curatedDatasets: any[] = res.data.curatedDatasets
                const fieldsToObj = (dataVariable: any): any => {
                    return {
                        ... dataVariable,
                        ... R.pipe(
                            dataVariable.fields,
                            R.map((field: any): [string, unknown] => [field.name, field.value]),
                            R.fromPairs)
                    }
                }
                
                const test = R.pipe(
                    curatedDatasets,
                    R.map(({dataVariables, ...rest}) => {
                        return ({
                            ...rest,
                            dataVariables: R.pipe(
                                dataVariables,
                                R.map(fieldsToObj),
                                (dv) => R.sortBy(dv,  [(x) => x.chromosome, 'asc'], (x) => parseInt(x.start))
                            )
                        })
                    }),
                )
                console.log(test)
                return {curatedDatasets: test}
            }
        }
    )
}

export const createQueryMachine = (query, invoker) => {
    

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