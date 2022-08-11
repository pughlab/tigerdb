import React, { useState } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button } from 'semantic-ui-react'
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
    const { data, loading, error } = useQuery(gql`
        query DataVariablesSearch($searchText: String!, $start: Int!, $end: Int!) {
            dataVariables(where: {
                chromosome_CONTAINS: $searchText
                start_GTE: $start
                end_LTE: $end 
            }, options: {
                sort: [
                    {
                        start: ASC
                    }
                ]
            }) {
                dataVariableID
                chromosome
                start
                end
                datavalue
            }
        }`,
        { variables: { searchText, start, end } })
    console.log(data)

    return (
        <>
            <Message>
                Some text about data variables and searching to create visualizations

                <Divider horizontal />
            </Message>

            <Form as={Segment} attached='top'>
                <Form.Group widths={3}>
                    <Form.Field
                        control={Input}
                        label='Chromosome'
                        placeholder='Enter chromosome of interest'
                        value={searchText}
                        onChange={(e, { value }) => setSearchText(value)}
                    />
                    <Form.Field
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
                    />
                </Form.Group>
            </Form>
            <Segment attached='bottom' loading={loading}>
                {
                    !!data?.dataVariables && (
                        <>
                            <DownloadDataVariables data={data.dataVariables} />
                            <DataVariableTable data={data.dataVariables} />
                        </>
                    )

                }
            </Segment>
        </>
    )
}