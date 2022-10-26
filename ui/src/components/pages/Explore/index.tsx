import React, { useState } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'
import DataVariableTable from '../../tables/DataVariableTable'

import { gql, useQuery } from '@apollo/client'
import { CSVLink } from "react-csv";

import SunburstVisualization from '../../visualizations/sunburst/SunburstVisualization';
import TreemapVisualization from '../../visualizations/treemap/TreemapVisualization'



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
    const [searchText, setSearchText] = useState('')
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

    const harddata = [
        {}
    ]

    return (
        <>
            <Message>
                Some text about data variables and searching to create visualizations

                <Divider horizontal />
            </Message>

            <Form as={Segment} attached='top'>
                <Form.Field
                        control={Input}
                        label='Search data variable descriptions'
                        placeholder='Enter some terms of interest'
                        value={searchText}
                        onChange={(e, { value }) => setSearchText(value)}
                />
                <Form.Group widths={3}>
                    <Form.Field
                        control={Dropdown}
                        selection
                        label='Data variable type'
                        placeholder='Select all data variable types of interest'
                        value={null}
                        options={[{key: 'raw', text: 'Raw/collected'}, {key: 'derived', text: 'Derived'}, {key: 'ref', text: 'Reference'}]}
                        onChange={(e, { value }) => setSearchText(value)}
                    />
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
            <Segment>
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
                <DataVariableTable data={[]} />
            </Segment>
        </>
    )
}