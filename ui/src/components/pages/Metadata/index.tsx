import React, { useEffect, useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container, List, Segment, Input, Grid } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'
import { gql, useQuery } from '@apollo/client'

function useOntologyQuery({ }) {
    const [ontology, setOntology] = useState()
    const { data, loading, error } = useQuery(gql`
        query {
        ontologies {
            name
            classes {
                ontologyClassID
                label
            }
            relations {
                ontologyRelationID
                label
                from {
                    ontologyClassID
                }
                to {
                    ontologyClassID
                }
            }
        }
    }`, {fetchPolicy: 'network-only'})
    useEffect(() => {
        if (!!data?.ontologies) {
            const [ontology] = data.ontologies
            const nodes = ontology.classes.map(({ontologyClassID, label}) => ({id: ontologyClassID, label}))
            const edges = ontology.relations.map(({ontologyRelationID, label, from, to}) => ({
                id: ontologyRelationID,
                label,
                source: from.ontologyClassID,
                target: to.ontologyClassID
            }))
            setOntology({nodes, edges})
        }
    }, [data])
    return {data, loading, error, ontology}
}

function OntologyGraphVisualization ({}) {
    const {ontology} = useOntologyQuery({})
    console.log(ontology)
    if (!ontology) {
        return 'loading'
    }
    return (
        <>
            <HierarchicalGraphVisualization data={ontology} />       
        </>
    )
}

function OntologyDetails({ }) {
    return (
        <Grid>
            <Grid.Column width={16}>
                <Segment>
                    Ontology details
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment>
                    Search and query of ontology (and actions)
                </Segment>
                <Segment>
                    Hierarchical view of ontology (minimap view?)
                </Segment>
            </Grid.Column>
            <Grid.Column width={11}>
                <Segment>
                    <OntologyGraphVisualization />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

export default function Metadata({ }) {
    const { navigate } = useRouter()
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