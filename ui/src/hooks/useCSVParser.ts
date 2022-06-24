import { useReducer, useCallback, useEffect, useMemo, Dispatch } from "react"

import {useDropzone} from 'react-dropzone'
import Papa from 'papaparse'

export interface ParserState {
    file?: any;
    data?: [any];
    columns?: any;
    loaded: boolean;
    header: boolean;
}
interface ParserConfig {
    header: boolean;
}

type ParserAction =
 | { type: 'SET_FILE', file: any }
 | { type: 'SET_RESULTS', results: any }
 | { type: 'RESET_STATE'};

const initialState = {
    file: undefined,
    data: undefined,
    columns: undefined,
    loaded: false,
    header: true,
}

const reducer = (state: ParserState, action: ParserAction): ParserState => {
    const getColumns = (results: any) => {
        return (
            Object.keys(results.data[0]).map((columnName: string, index: number) =>  ({Header: columnName, columnId: state.header ? columnName : index, accessor: columnName}))
        )
    }
    switch (action.type) {
        case 'SET_FILE':
          return {...state, file: action.file}
        case 'SET_RESULTS':
          return {...state, loaded: true, data: action.results.data, columns: getColumns(action.results)}
        case 'RESET_STATE':
            return initialState
        default:
          return state
      }
}


export default function useCSVParser(config: ParserConfig = {header: true}): [ParserState, any, any] {
    const initialParserState: ParserState = {... initialState, header: config.header}
    const [state, dispatch] = useReducer(reducer, initialParserState) 
    

    const parseFile = (file: any) => {
        Papa.parse(file, {
            skipEmptyLines: true,
            header: !!config.header ? config.header : false,
            complete: results => {
                dispatch({type: 'SET_RESULTS', results})
            }
        });
    };
      
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length) {
            dispatch({type: 'SET_FILE', file: acceptedFiles[0]})
        }
    }, [])

    const dropzone = useDropzone({onDrop})
    
    useEffect(() => {
        if (state.file && !state.data) {
            parseFile(state.file)
        }
    }, [state])

    return [state, dispatch, dropzone]
    
}
  
  