import React, { useState, useReducer, useMemo } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import DataVariableTable from '../../visualizations/tables/DataVariableTable'
import InteractiveHeatmapVisualization from '../../visualizations/heatmap/plotly/InteractiveHeatmapVisualization';
import { gql, useQuery } from '@apollo/client'
import { CSVLink } from "react-csv";

import {useMachine} from '@xstate/react'
import { createQueryMachine, QUERY_EVENTS } from '../../../machines/queryMachine';
import {createDataVariableFilterMachine as createDVFilterMachine, FILTER_EVENTS} from '../../../machines/dataVariableFilterMachine'
import {createSnapshotMachine, SNAPSHOT_EVENTS} from '../../../machines/snapshotMachine'
import * as R from 'remeda'



function DownloadDataVariables({ data }) {
    console.log(data)
    // Can combine with react-table headers
    const headers = [
        { label: 'chromosome', key: 'chromosome' },
        { label: 'start', key: 'start' },
        { label: 'end', key: 'end' },
        { label: 'datavalue', key: 'datavalue' }
    ]
    return (
        <CSVLink data={data} headers={headers} filename={"pibu_export.csv"}>
            <Button fluid content={`Download ${data.length} variables`} />
        </CSVLink>
    )
}

function useExplorePageMachines () {
    const queryMachine = useMemo(() => createQueryMachine(), [])
    const [currentQuery, sendQuery] = useMachine(queryMachine)
    const filterMachine = useMemo(() => createDVFilterMachine(), [])
    const [currentFilter, sendFilter] = useMachine(filterMachine)
    const snapshotMachine = useMemo(() => createSnapshotMachine(), [])
    const [currentSnapshot, sendSnapshot] = useMachine(snapshotMachine)
    return {
        query: {state: currentQuery, send: sendQuery},
        filter: {state: currentFilter, send: sendFilter},
        snapshot: {state: currentSnapshot, send: sendSnapshot}
    }
}

function ExploreFilterFormGroup ({filterMachine, data}) {
    if (!data) {return null}

    console.log(filterMachine.state.context)
    // const studiesOptions = R.pipe(
    //     data
    // )
    console.log(data)
    const {curatedDatasets} = data
    // const studiesOptions = R.pipe(
    //     curatedDatasets,

    // )
    const {studiesWithDatasets, searchText} = filterMachine.state.context.studiesWithDatasets
    return (
        <Form>
            <Form.Field
                control={Input}
                label='Search data variable descriptions'
                placeholder='Enter some terms of interest'
                value={searchText}
                onChange={(e, { value }) => filterMachine.send({type: FILTER_EVENTS.CHANGE_SEARCH_TEXT, payload: {searchText: value}})}
            />
            <Form.Group>
                <Form.Field control={Dropdown}
                    label='Study'
                    placeholder='Filter datasets by study'
                    multiple
                    value={null}
                    onChange={(e, { value }) => {return}}
                />
                <Form.Field control={Dropdown}
                    label='Dataset'
                    placeholder='Filter data variables by dataset'
                    multiple
                    value={null}
                    onChange={(e, { value }) => {return}}
                />
            </Form.Group>
        </Form>
    )
}

export default function Explore() {
    const {query: queryMachine, filter: filterMachine, snapshot: snapshotMachine} = useExplorePageMachines()
    const {searchText} = filterMachine.state.context
    const {snapshotType} = snapshotMachine.state.context
    const snapshotIs = R.equals(snapshotType)


    // const [start, setStart] = useState(0)
    // const [end, setEnd] = useState(1000)
    // // const { data, loading, error } = useQuery(gql`
    // //     query DataVariablesSearch($searchText: String!, $start: Int!, $end: Int!) {
    // //         dataVariables {
    // //             dataVariableID
    // //         }
    // //     }`,
    // //     { variables: { searchText, start, end } })
    // // console.log(data)
    
    


    if (!queryMachine.state.matches('loaded')) {return}

    const data = queryMachine.state.context.data
    return (
        <>        
            <Message>
                Some text about data variables and searching to create visualizations
                <Divider horizontal />
                <Button.Group>
                    <Button content='Table' onClick={() => 
                        snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'table'}})
                    } />
                    <Button content='Heatmap' onClick={() => 
                        snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'heatmap'}})
                    } />
                </Button.Group>
            </Message>

            <Segment attached='top'>
                <ExploreFilterFormGroup {...{filterMachine, data}} />
            </Segment>

            <Segment attached >
                <Modal
                    trigger={<Button fluid content='Create data export' />}
                    content={
                        <>
                        <Modal.Header>
                        Create a data export from the selected data variables?
                        </Modal.Header>
                        <Modal.Content>
                        <Form>
                            <Form.Field
                                control={Input}
                                type='text'
                                label='Data export name'
                                placeholder='Enter a name'
                            />
                        </Form>
                        </Modal.Content>
                        </>

                    }
                    actions={[
                        <Button content='Cancel' />,
                        <Button content='Submit' />
                    ]}
                />
            </Segment>

            <Segment attached='bottom'
                // loading={loading}
            >
            {
                snapshotIs('table') && <DataVariableTable data={data} />
            }
            {
                snapshotIs('heatmap') && <InteractiveHeatmapVisualization data={data} />
            }

            </Segment>
        </>
    )
}