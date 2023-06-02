import * as React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'
import { Button, Form, Header, Label, Input, Segment, Dropdown, Message, List, Divider, Modal, Grid } from 'semantic-ui-react'


import { useParams } from 'react-router-dom'


const GET_DATA_EXPORT_DETAILS = gql`
    query GetDataExportDetails($dataExportID: ID!) {
        dataExports(where: {id: $dataExportID}) {
            id
            name
            description
        }
    }
`


export default function DataExportDetails() {
    const { dataExportID } = useParams()
    const { data, loading, error } = useQuery(GET_DATA_EXPORT_DETAILS, { variables: { dataExportID } })

    if (loading) {
        return 'Loading'
    }
    if (!data?.dataExports) {
        return null
    }

    const [dataExport] = data.dataExports
    return (
        <Grid columns={2}>
            <Grid.Column width={16}>
                <Message>
                    <Divider horizontal content='Dataset Details' />
                    <Header content={dataExport.name} subheader={dataExport.description} />
                    <Divider horizontal />
                </Message>
            </Grid.Column>
        </Grid>
    )
}