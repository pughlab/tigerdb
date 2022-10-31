import React, { useState, useReducer, useMemo } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import DataVariableTable from '../../visualizations/tables/DataVariableTable'
import InteractiveHeatmapVisualization from '../../visualizations/heatmap/plotly/InteractiveHeatmapVisualization';
import { CSVLink } from "react-csv";

import {useMachine} from '@xstate/react'
import {useStudiesDatasetsFilterMachine, FILTER_EVENTS} from '../../../machines/studiesDatasetsFilterMachine'
import {useSnapshotMachine, SNAPSHOT_EVENTS} from '../../../machines/snapshotMachine'

import useCuratedDatasetsQueryMachine from '../../../hooks/pages/useCuratedDatasetsQueryMachine';
import * as R from 'remeda'

import ExploreFilterFormGroup from './ExploreFilterFormGroup';

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

    const {curatedDatasets} = queryMachine.state.context.data
    const {studiesWithDatasets} = filterMachine.state.context
    // Should move these as accessors for machine
    const selectedDatasets = R.pipe(
        R.mapValues(studiesWithDatasets, (datasets, studyID) => R.pickBy(datasets, (datasetSelected, datasetID) => datasetSelected)),
        R.values,
        R.map(R.keys),
        R.flatten()
    )
    console.log(selectedDatasets)
    const data = {curatedDatasets: R.filter(curatedDatasets, ({curatedDatasetID}) => selectedDatasets.includes(curatedDatasetID))}
    return (
        <>        
            <Message>
                Some text about data variables and searching to create visualizations
                <Divider horizontal />
                <Button.Group>
                    {/* <Button content='List' onClick={() => snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'list'}})} /> */}
                    <Button content='Table' onClick={() => snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'table'}})} />
                    <Button content='Heatmap' onClick={() => snapshotMachine.send({type: SNAPSHOT_EVENTS.CHANGE_TYPE, payload: {snapshotType: 'heatmap'}})} />
                </Button.Group>
            </Message>

            <Segment attached='top'>
                <ExploreFilterFormGroup {...{filterMachine}} />
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
            {/* {snapshotIs('list') && <></>} */}
            {snapshotIs('table') && <DataVariableTable data={data} />}
            {snapshotIs('heatmap') && <InteractiveHeatmapVisualization data={data} />}

            </Segment>
        </>
    )
}