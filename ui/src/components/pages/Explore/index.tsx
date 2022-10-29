import React, { useState, useReducer, useMemo } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import DataVariableTable from '../../visualizations/tables/DataVariableTable'

import { gql, useQuery } from '@apollo/client'
import { CSVLink } from "react-csv";

import {useMachine} from '@xstate/react'
import { createQueryMachine } from '../../../machines/queryMachine';
import * as R from 'remeda'

import InteractiveHeatmapVisualization from '../../visualizations/heatmap/plotly/InteractiveHeatmapVisualization';

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

function useSnapshotQueryVariables() {
    // const [formState, formDispatch] = useReducer((state: any, action: any) => {
    //     const {type, payload} = action
    //     switch (type) {
    //         case 'setSearchText':
    //             const {searchText} = payload
    //             return {... state, searchText}
    //         case 'setStudyIDs':
    //             const {studyIDs} = payload
    //             return {... state, studyIDs}
    //         case 'setStudyIDs':
    //             const {} = payload
    //             return {... state, studyIDs}
    //         default:
    //             return state
    //     }
    // }, {
    //     searchText: '',
    //     studyIDs: [],
    //     datasetIDs: [],
    //     fieldSearches: []
    // })
    const [state, dispatch] = useReducer((state: any, action: any) => {
        const {type, payload} = action
        switch (type) {
            case 'setSnapshotType':
                const {snapshotType} = payload
                return {... state, snapshotType}
            default:
                return state
        }
    }, {
        snapshotType: 'table',
        dataVariableIDs: []
    })
    return {state, dispatch}
}



export default function Explore() {
    const {state, dispatch} = useSnapshotQueryVariables()
    const queryMachine = useMemo(() => createQueryMachine(), [])
    const [current, send] = useMachine(queryMachine)


    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(1000)
    // const { data, loading, error } = useQuery(gql`
    //     query DataVariablesSearch($searchText: String!, $start: Int!, $end: Int!) {
    //         dataVariables {
    //             dataVariableID
    //         }
    //     }`,
    //     { variables: { searchText, start, end } })
    // console.log(data)
    const {searchText, snapshotType} = state
    const snapshotIs = R.equals(snapshotType)

    console.log(current.context)

    if (!current.matches('loaded')) {return}

    const data = current.context.data
    return (
        <>        
            <Message>
                Some text about data variables and searching to create visualizations
                <Divider horizontal />
                <Button.Group>
                    <Button content='Table' onClick={() => dispatch({type: 'setSnapshotType', payload: {snapshotType: 'table'}})} />
                    <Button content='Heatmap' onClick={() => dispatch({type: 'setSnapshotType', payload: {snapshotType: 'heatmap'}})} />
                </Button.Group>
            </Message>

            <Form as={Segment} attached='top'>
                <Form.Field
                        control={Input}
                        label='Search data variable descriptions'
                        placeholder='Enter some terms of interest'
                        value={searchText}
                        onChange={(e, { value }) => dispatch({type: 'setSearchText', payload: {searchText: value}})}
                />
                <Form.Group widths={3}>
                    {/* <Form.Field
                        control={Input}
                        type='number'
                        defaultValue={0}
                        label='Start'
                        placeholder='Integer'
                        value={start}
                        onChange={(e, { value }) => setStart(Math.max(0, parseInt(value)))}
                    />
                    <Form.Field
                        control={Input}
                        type='number'
                        defaultValue={1000}
                        label='End'
                        placeholder='Enter some terms of interest'
                        value={end}
                        onChange={(e, { value }) => setEnd(Math.max(0, parseInt(value)))}
                    /> */}
                </Form.Group>
            </Form>

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