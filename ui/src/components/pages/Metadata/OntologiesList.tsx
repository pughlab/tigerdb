import React, { useEffect, useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'

const GET_ALL_ONTOLOGIES = gql`
  query {
    ontologies {
      id
      name
      concepts {
        id
        type
        properties {
            varName
            varDescription
        }
      }
      studies {
        studyID
        shortName
      }
    }
  }
`;


function useOntologiesQuery({ }) {
    const [ontologies, setOntologies] = useState()
    const { data, loading, error } = useQuery(GET_ALL_ONTOLOGIES, {fetchPolicy: 'network-only'})
    useEffect(() => {
        console.log(data)
        if (!!data?.ontologies) {
            setOntologies(data.ontologies)
        }
    }, [data])
    return {data, loading, error, ontologies}
}

export default function MetadataOntologiesList({ }) {
    const { navigate } = useRouter()
    const {data, loading, ontologies} = useOntologiesQuery({})

    if (loading || R.isNil(ontologies)) {
        return 'Loading ontologies'
    }

    if (!ontologies) {
        return
    }
    console.log(ontologies)
    return (
        <Segment>
        <Form>
            <Form.Field
                control={Input}
                label='Search ontologies'
                placeholder='Enter some terms of interest'
            />
            <Divider />
            <List relaxed='very' selection celled divided size='large'>
            {ontologies.map((ontology: any) => (
            <List.Item key={ontology.id} onClick={(e, d) => navigate(ontology.id)}>
                <List.Content>
                <List.Header as='a'>{ontology.name}</List.Header>
                <List.Description>
                    <b>{ontology.concepts.length} concepts</b>
                </List.Description>
                </List.Content>
            </List.Item>
            ))}
        </List>
        </Form>
        </Segment>
    )
}