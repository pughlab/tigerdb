import React, { useState, useReducer, useMemo } from 'react'
import { gql, useQuery } from '@apollo/client'

import {useMachine} from '@xstate/react'
import { createQueryMachine, QUERY_EVENTS } from '../../machines/queryMachine';
import {createDataVariableFilterMachine as createDVFilterMachine, FILTER_EVENTS} from '../../machines/dataVariableFilterMachine'

import * as R from 'remeda'
import apolloClient from '../../apolloClient';

export default function useStudiesDatasetsFilterMachine () {
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
    const srcInvoker = async (context: any, event: any) => {
        console.log('event', event)
        try {
            const res = await apolloClient.query({query: GET_DATA_VARIABLES, variables: context.variables})
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
        } catch (e) {
            throw e
        }
    }
    const queryMachine = useMemo(() => createQueryMachine({srcInvoker}), [])
    const [currentQuery, sendQuery] = useMachine(queryMachine)
    const filterMachine = useMemo(() => createDVFilterMachine(), [])
    const [currentFilter, sendFilter] = useMachine(filterMachine)
    return {
        query: {state: currentQuery, send: sendQuery},
        filter: {state: currentFilter, send: sendFilter},
    }


}