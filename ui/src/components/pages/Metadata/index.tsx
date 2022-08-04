import React, { useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container, List, Segment, Input } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'

function OntologyDetails ({}) {
    return (
        <HierarchicalGraphVisualization />
    )
}

export default function Metadata({ }) {
    const {navigate} = useRouter()
    return (
        <Routes>
            <Route index element={(
                <>
                    <Container>
                        <Message>
                            Ontologies and metadata
                            <Divider horizontal />
                        </Message>

                        <Form as={Segment}>
                            <Form.Field
                                control={Input}
                                label='Search ontologies'
                                placeholder='Enter some terms of interest'
                            />
                        </Form>

                        <List relaxed='very' selection size='large'>
                            <List.Item content='ontology' onClick={(e, d) => navigate('someOntologyID')} />
                        </List>
                    </Container>
                </>
            )} />

            <Route path=':ontologyID' element={<OntologyDetails />} />
        </Routes>
    )
}