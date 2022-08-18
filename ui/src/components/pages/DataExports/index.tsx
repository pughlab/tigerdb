import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { Message, Divider, Container, List, Input, Segment, Form, Button } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'

import SunburstVisualization from '../../visualizations/sunburst/SunburstVisualization'
import TreemapVisualization from '../../visualizations/treemap/TreemapVisualization'
import PieVisualization from '../../visualizations/pie/PieVisualization'
import BarVisualization from '../../visualizations/bar/BarVisualization'

function DataExportDetails () {
    const {exportID} = useParams()
    return (
        <>
        <Message>
            Some details about {exportID}
            <Divider horizontal />
            <Button content='Download data export' />
        </Message>
        <Segment>
            List of data variables here
        </Segment>
        <Divider horizontal />
        <SunburstVisualization />
        <TreemapVisualization />
        <PieVisualization />
        <BarVisualization />
        </>
    )
}

export default function DataExports () {
    const {navigate} = useRouter()
    return (
        <Routes>
            {/* Default /datasets path goes to export search */}
            <Route index element={(
            <>
            <Container>
                    <Message content='Explore variables' >
                    Exports are groups of data variables tagged together

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
                    <List.Item content='data export' onClick={(e, d) => navigate('someDataExportID')}/>
                </List>
            </Container>
            </>
            )} />
    
            <Route path=':exportID' element={<DataExportDetails />} />
        </Routes>
    )
}