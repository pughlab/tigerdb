import React, { useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container } from 'semantic-ui-react'


export default function Metadata ({}) {
    return (
        <>
        <Container >
        <Message>
            Some text about data variables and searching to create visualizations

        <Divider horizontal />
        </Message>
        <Form>

        </Form>
        <HierarchicalGraphVisualization />
        </Container>
        </>
    )
}