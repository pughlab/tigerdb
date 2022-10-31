import { createMachine, assign } from 'xstate'

// TODO: match types between initial context and state node configs
interface QueryMachineContext {
    data: any,
    errors: any,
    variables: any
}

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

export const createQueryMachine = ({srcInvoker}: {srcInvoker: any}) => {
    

    const machine = createMachine({
        id: 'gqlQuery',
        initial: QUERY_STATES.LOADING,
        context: {data: null, errors: [], variables: {}} as QueryMachineContext,
        states: {
            [QUERY_STATES.IDLE]: {
                on: {
                    [QUERY_EVENTS.FETCH]: {target: QUERY_STATES.LOADING}
                }
            },
            [QUERY_STATES.LOADING]: {
                invoke: {
                    src: (context: QueryMachineContext, event: any) => srcInvoker(context, event),
                    onDone: {
                        target: QUERY_STATES.LOADED,
                        actions: assign({
                            data: (context: QueryMachineContext, event) => event.data
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