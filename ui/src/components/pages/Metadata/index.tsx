import React, { useEffect, useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'

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
    const {ontology, loading} = useOntologyQuery({})
    const [focusNode, setFocusNode] = useState()
    return (
        <Grid>
            <Grid.Column width={16}>
                <Segment>
                    This is the main portal data variable ontology describing available data.
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                {
                    !!ontology && <Button fluid content='Edit nodes and/or edges' />
                }
                <Segment loading={loading}>
                    {
                        !!ontology && (
                            <>
                            <Label content='Nodes' detail={ontology.nodes.length} />
                            <Label content='Edges' detail={ontology.edges.length} />
                            </>
                        )
                    }
                    <Divider horizontal />
                    {
                        !!ontology && (
                            <>
                            <Dropdown
                                fluid
                                selection
                                search
                                placeholder='Search over nodes and relations of ontology'
                                options={ontology.nodes.map(({id, label}) => ({value: id, text: label}))}
                                onChange={(e, {value}) => setFocusNode(value)}
                            />
                            <Divider horizontal />
                            <List selection celled divided>
                                {ontology.nodes.map(({id, label}) => {
                                    return (
                                        <List.Item key={id} active={R.equals(focusNode, id)}
                                            onClick={() => setFocusNode(id)}
                                        >
                                            {label}
                                        </List.Item>
                                    )
                                })}
                            </List>
                            </>
                        )
                    }
                </Segment>
                {
                    (() => {
                        if (R.isNil(focusNode)) {
                            return
                        }
                        const filterIfSource = R.filter(({source}) => R.equals(focusNode, source))
                        const filterIfTarget = R.filter(({target}) => R.equals(focusNode, target))
                        return (
                            <Segment>
                            <Header content={focusNode} />
                            <Divider horizontal content='OUT edges' />
                            {
                                R.pipe(
                                    ontology.edges,
                                    filterIfSource,
                                    R.map(edge => (
                                        <List.Item key={edge.id}>
                                            <Label>
                                                {edge.label}
                                                <Label.Detail content={edge.target} />
                                            </Label>
                                        </List.Item>
                                    ))
                                )
                            }
                            <Divider horizontal content='IN edges' />
                            {
                                R.pipe(
                                    ontology.edges,
                                    filterIfTarget,
                                    R.map(edge => (
                                        <List.Item key={edge.id}>
                                            <Label>
                                                <Label.Detail content={edge.source} />
                                                {edge.label}
                                            </Label>
                                        </List.Item>
                                    ))
                                )
                            }
                            </Segment>
                        )
                    })()
                }
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
                            <Modal
                                trigger={<Button content='Add a new metadata ontology' />}
                                content={
                                    <Input fluid type='text' label='Ontology name' />
                                }
                                actions={
                                    <Button content='Create' />
                                }
                            />
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