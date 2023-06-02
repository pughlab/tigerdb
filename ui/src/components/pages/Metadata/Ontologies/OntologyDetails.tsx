import React, { useEffect, useState } from 'react'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'

// function OntologyGraphVisualization ({}) {
//     const {ontology} = useOntologyQuery({})
//     console.log(ontology)
//     if (!ontology) {
//         return 'loading'
//     }
//     return (
//         <>
//             <HierarchicalGraphVisualization data={ontology} />       
//         </>
//     )
// }

import { useParams } from 'react-router-dom'

const GET_ONTOLOGY_DETAILS = gql`
query GetOntologyDetails($ontologyID: ID!) {
    ontologies(where: {id: $ontologyID}) {
        id
        name
        studies {
            shortName
        }
        concepts {
        id
        properties {
            varName
            varDescription
        }
    }
  }
}
`

export default function OntologyDetails(props: any) {
    const { ontologyID } = useParams()
    const {data, loading, error} = useQuery(GET_ONTOLOGY_DETAILS, {
        variables: {ontologyID}
    })

    if (!data?.ontologies || loading) {
        return 'Loading'
    }

    const [ontology] = data.ontologies
    const {name, studies, concepts} = ontology

    return (
        <Grid>
            <Grid.Column width={16}>
                <Header>{name}</Header>
                <Segment>
                    This ontology is used by studies: {studies.map((study: any) => `${study.shortName}, `)}
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment>
                {/* TODO make into modals */}
                    <Button.Group vertical fluid>
                        <Button fluid content='Add Concept' />
                        <Button fluid content='Edit Concept' />
                        <Button fluid content='Bulk Upload' />
                    </Button.Group>
                    <Divider horizontal />
                    <Button fluid content='Visualize' />
                </Segment>
            </Grid.Column>
            <Grid.Column width={11}>
                <Segment>
                <List divided relaxed>
                    {concepts.map((concept: any) => (
                        <List.Item key={concept.id}>
                            <List.Content>
                                <List.Header>{concept.properties.varName}</List.Header>
                                <List.Description>{concept.properties.varDescription}</List.Description>
                            </List.Content>
                        </List.Item>
                    ))
                    }
                </List>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}