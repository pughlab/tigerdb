import React, {useState, useReducer} from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Message, Divider, Label, Container, Header, List, Dropdown, Input, Segment, Form, Button, Grid, Checkbox, Menu } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'

import * as R from 'remeda'

import DataExportDetails from './DataExportDetails'
import { gql, useQuery } from '@apollo/client'
const GET_ALL_DATA_EXPORTS = gql`
    query {
        dataExports {
            id
            name
            description
        }
    }
`
export default function DataExports () {
    const {navigate} = useRouter()
    const {data, loading, error} = useQuery(GET_ALL_DATA_EXPORTS, {fetchPolicy: 'network-only'})
    if (loading) {
        return 'Loading'
    }
    if (!data?.dataExports) {
        return 'Error loading data exports'
    }
    return (
        <Routes>
            {/* Default /datasets path goes to export search */}
            <Route index element={(
            <>
            <Container>
                    <Message>
                    Exports are groups of data variables selected to be analyzed together
                    <Divider horizontal />
                </Message>
                
                    <Form as={Segment}>
                        <Form.Field
                            control={Input}
                            label='Search data variable definition description'
                            placeholder='Enter some terms of interest'
                        />
                    </Form>

                <List relaxed='very' selection size='large'>
                    {data.dataExports.map((dataExport: any) => (
                        <List.Item content={dataExport.name} onClick={(e, d) => navigate(dataExport.id)}/>
                    ))}
                    
                </List>
            </Container>
            </>
            )} />
    
            <Route path=':dataExportID' element={<DataExportDetails />} />
        </Routes>
    )
}