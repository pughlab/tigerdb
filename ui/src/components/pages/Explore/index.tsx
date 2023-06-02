import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'

import * as R from 'remeda'
import SearchDataVariables from './SearchDataVariables'
import DataVariablesList from './DataVariablesList'
// Need to do tables as well
import ExportDataVariables from './ExportDataVariables'
import DataVariableSnapshots from './DataVariableSnapshots'

function useExploreSearchReducer({ }) {
    const initialState = { searchTimePoints: [], searchConcepts: [] };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateTimePoints':
                return {
                    ...state,
                    searchTimePoints: action.payload,
                };
            case 'updateConcepts':
                return {
                    ...state,
                    searchConcepts: action.payload,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
}

function useExploreExportReducer({ }) {
    const initialState = { fieldDefinitions: [], snapshots: [] };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'addFieldDefinitions':
                return {
                    ...state,
                    fieldDefinitions: action.payload,
                };
            case 'removeFieldDefinitions':
                return {
                    ...state,
                    fieldDefinitions: action.payload,
                };
            case 'addSnapshot':
                return {
                    ...state,
                    snapshots: [...state.snapshots, action.payload],
                };
            case 'removeSnapshot':
                return {
                    ...state,
                    snapshots: action.payload,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
}

export default function Explore() {
    const [exploreTab, setExploreTab] = useState('search') // 'export'
    const exploreTabEquals = R.equals(exploreTab)
    const searchReducer = useExploreSearchReducer({})
    const exportReducer = useExploreExportReducer({})


    return (
        <>
            <Divider horizontal>
                <Button.Group>
                    <Button content='Search' onClick={() => setExploreTab('search')}
                        active={exploreTabEquals('search')}
                        basic={!exploreTabEquals('search')}
                    />
                    <Button content='Export' onClick={() => setExploreTab('export')}
                        active={exploreTabEquals('export')}
                        basic={!exploreTabEquals('export')}
                    />
                </Button.Group>
            </Divider>
            <Message>
                Search for data variables, select them, visualize them and export
                <Divider horizontal />
            </Message>
            {
                exploreTabEquals('search') && (
                    <>
                        <Segment attached='top'>
                            <SearchDataVariables {...{ searchReducer }} />
                        </Segment>
                        <Segment attached='bottom'>
                            <DataVariablesList {...{ searchReducer }} />
                        </Segment>
                    </>
                )
            }
            {

                exploreTabEquals('export') && (
                    <>
                        <Segment attached='top'>
                            <ExportDataVariables {...{ exportReducer }} />
                        </Segment>
                        <Segment attached='bottom'>
                            <DataVariableSnapshots {...{ exportReducer }} />
                        </Segment>
                    </>
                )
            }


        </>
    )
}