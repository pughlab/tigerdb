import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import DataVariableTable from '../../visualizations/tables/DataVariableTable'
import InteractiveHeatmapVisualization from '../../visualizations/heatmap/plotly/InteractiveHeatmapVisualization';
import { CSVLink } from "react-csv";

import {useMachine} from '@xstate/react'
import {useStudiesDatasetsFilterMachine, FILTER_EVENTS, FILTER_STATES} from '../../../machines/studiesDatasetsFilterMachine'
import {useSnapshotMachine, SNAPSHOT_EVENTS} from '../../../machines/snapshotMachine'

import useCuratedDatasetsQueryMachine from '../../../hooks/pages/useCuratedDatasetsQueryMachine';
import * as R from 'remeda'

import ExploreFilterFormGroup from './ExploreFilterFormGroup';
import { QUERY_EVENTS } from '../../../machines/queryMachine';

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

export default function Explore() {

    const {query: queryMachine} = useCuratedDatasetsQueryMachine()
    const {snapshot: snapshotMachine} = useSnapshotMachine()
    const {filter: filterMachine} = useStudiesDatasetsFilterMachine()

    const {snapshotType} = snapshotMachine.state.context
    const snapshotIs = R.equals(snapshotType)

    // Should move these as accessors for machine
    const selectedDatasets = useMemo(() => R.pipe(
        R.mapValues(filterMachine.state.context.studiesWithDatasets, (datasets, studyID) => R.pickBy(datasets, (datasetSelected, datasetID) => datasetSelected)),
        R.values,
        R.map(R.keys),
        R.flatten()
    ), [filterMachine.state.context])
    useEffect(() => {
        console.log('changing selected curated datasets', selectedDatasets)
        queryMachine.send({type: QUERY_EVENTS.UPDATE_VARIABLES, variables: {curatedDatasetIDs: selectedDatasets}})
    }, [selectedDatasets])


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
    
    console.log(queryMachine)
    


    // if (!queryMachine.state.matches('loaded')) {return}

    return (
        <>        
            <Message>
                Some text about data variables and searching to create visualizations
                <Divider horizontal />
                <Button.Group>
                    <Button content='List' onClick={() => snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'list'}})} />
                    <Button content='Table' onClick={() => snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'table'}})} />
                    <Button content='Heatmap' onClick={() => snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'heatmap'}})} />
                </Button.Group>
            </Message>

            <Segment attached='top'>
                <ExploreFilterFormGroup {...{filterMachine}} />
                {
                    (() => {
                        if (!filterMachine.state.matches(FILTER_STATES.READY)) {return }
                        return (
                            <Button fluid content='Search' onClick={() => queryMachine.send({type: QUERY_EVENTS.REFRESH})}/>
                        )
                    })()
                }
                {JSON.stringify(filterMachine.state.context)}
                {JSON.stringify(queryMachine.state.context.variables)}
                
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
                    (() => {
                        if (!queryMachine.state.matches('loaded')) {return}
                        const {curatedDatasets} = queryMachine.state.context.data
                        console.log(selectedDatasets, curatedDatasets)
                        const data = {curatedDatasets: R.filter(curatedDatasets, ({curatedDatasetID}) => selectedDatasets.includes(curatedDatasetID))}
                        return (
                            <>
                            {snapshotIs('list') && <></>}
                            {snapshotIs('table') && <DataVariableTable data={data} />}
                            {snapshotIs('heatmap') && <InteractiveHeatmapVisualization data={data} />}
                            </>
                        )
                    })()
                }
            </Segment>
        </>
    )
}