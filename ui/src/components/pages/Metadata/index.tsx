import React, { useEffect, useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'
import { gql, useQuery } from '@apollo/client'

import NewOntologyModal from './Ontologies/NewOntologyModal'
import OntologyDetails from './Ontologies/OntologyDetails'
import EditTimelineModal from './TimePoints/EditTimelineModal'
import * as R from 'remeda'

import MetadataOntologiesList from './OntologiesList'
import MetadataTimelinesList from './TimelinesList'


export default function Metadata({ }) {

    const [searchTab, setSearchTab] = useState('ontology') // 'timeline'
    const searchTabEquals = R.equals(searchTab)

    
    return (
        <Routes>
            <Route index element={(
                <>
                    <Container>
                        <Divider horizontal>
                            <Button.Group>
                                <Button content='Ontologies' onClick={() => setSearchTab('ontology')}
                                    active={searchTabEquals('ontology')}
                                    basic={!searchTabEquals('ontology')}
                                 />
                                <Button content='Timelines' onClick={() => setSearchTab('timeline')}
                                    active={searchTabEquals('timeline')}
                                    basic={!searchTabEquals('timeline')}
                                />
                            </Button.Group>
                        </Divider>
                        <Message>
                            <Divider horizontal />
                            {searchTabEquals('ontology') && <NewOntologyModal />}
                            {searchTabEquals('timeline') && <EditTimelineModal />}
                            
                        </Message>
                        <Segment>
                            {searchTabEquals('ontology') && <MetadataOntologiesList />}
                            {searchTabEquals('timeline') && <MetadataTimelinesList />}
                        </Segment>
                    </Container>
                </>
            )} />

            <Route path=':ontologyID' element={<OntologyDetails />} />
        </Routes>
    )
}