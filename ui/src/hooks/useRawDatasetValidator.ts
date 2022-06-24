import { useReducer, useCallback, useEffect, useMemo } from "react"

import {useDropzone} from 'react-dropzone'
import Papa from 'papaparse'
import { Cell } from "react-table";


export interface ValidatorState {
    data?: [any];
    codebook?: any[];
    ready: boolean;
    summary: any;
}


type ValidatorAction =
 | { type: 'SET_READY', ready: boolean }
 | { type: 'SET_DATA', data: any }
 | { type: 'SET_SUMMARY', summary: any }
 | { type: 'SET_CODEBOOK', codebook: any };

const reducer = (state: ValidatorState, action: ValidatorAction): ValidatorState => {
    switch (action.type) {
        case 'SET_READY':
          return {...state, ready: action.ready}
        case 'SET_DATA':
          return {...state, data: action.data, ready: !!state.codebook}
        case 'SET_SUMMARY':
            return {...state, summary: action.summary}
        case 'SET_CODEBOOK':
          return {...state, codebook: action.codebook, ready: !!state.data}
        default:
          return state
      }
}
const initialState = {
    data: undefined,
    codebook: undefined,
    ready: false,
    summary: undefined
}

export default function useRawDatasetValidator(data:any, codebook:any): [ValidatorState, any, any] {
    const [state, dispatch] = useReducer(reducer, {...initialState, ready: !!data && !!codebook})
    useEffect(() => {
        if (!state.data) {dispatch({type: 'SET_DATA', data})}
    }, [data])
    useEffect(() => {
        if (!state.codebook) {dispatch({type: 'SET_CODEBOOK', codebook})}
    }, [codebook])
    useEffect(() => {
        dispatch({type: 'SET_READY', ready: !!state.codebook && !!state.data})
    }, [state.data, state.codebook])

    const validator: (cell:any) => boolean = useCallback(   
        (cell) => {
            const {data, codebook, ready} = state        
            // console.log('validator', ready, !!data, !!codebook)
            if (!ready) {
                // console.log('validator not ready', ready)
                return false
            } else if (!!data && !!codebook) {
                // console.log('validating cell value')
                const codebookObj = codebook.reduce((codebookObj, code) => ({... codebookObj, [code[0]]: code[2]}), {})
                // console.log(codebookObj)
                const codebookValidator = (cell: any): boolean => {
                    const validationRule = codebookObj[cell.column.columnId]
                    // console.log(validationRule, typeof cell.value, cell.value)
                    switch (validationRule) {
                        case 'Number':
                            return !isNaN(Number(cell.value))
                        case 'Text':
                            return (typeof cell.value==="string") && (!!cell.value)
                        default:
                            return false
                    }
                }
                const isValid = codebookValidator(cell)
                // console.log(isValid)
                return isValid
            } else {
                return false
            }
        }, [state.data, state.codebook, state.ready])

    useEffect(() => {
        if (!state.ready) {
            dispatch({type: 'SET_SUMMARY', summary: undefined})
        } else {
            const {codebook = [], data = []} = state
            const codebookUniqueRules = [... new Set(codebook.map((row:any) => row[2]))]

            const rawVariableIDs = new Set(!data.length ? [] : Object.keys(data[0]))
            const codebookVariableIDs = new Set(!codebook.length ? [] : codebook?.map(([variableID]: [any]) => variableID))
            const unionVariableIDs = [... new Set([... rawVariableIDs, ...codebookVariableIDs])]
            const intersectionVariableIDs = [... new Set([... rawVariableIDs].filter(rawVariableID => codebookVariableIDs.has(rawVariableID)))]
            const missingRawVariables = [... new Set([...codebookVariableIDs].filter(codebookVariableID => !rawVariableIDs.has(codebookVariableID)))]
            const missingCodebookVariables = [... new Set([...rawVariableIDs].filter(rawVariableID => !codebookVariableIDs.has(rawVariableID)))]

            // console.log(rawVariableIDs)
            // console.log(codebookVariableIDs)
            const invalidCells = 10

            const summary = {
                uniqueRules: codebookUniqueRules,
                variables: {
                    unique: unionVariableIDs,
                    matched: intersectionVariableIDs,
                    missingCodes: missingCodebookVariables,
                    missingVars: missingRawVariables
                },
                invalidCells: 0
            }
            console.log(summary)
            dispatch({type: 'SET_SUMMARY', summary})
        }
    }, [state.ready])

    return [state, dispatch, validator]
    
}
  
  