import React, { useEffect, useState } from 'react'
import HierarchicalGraphVisualization from '../../visualizations/graph/hierarchical/HierarchicalGraphVisualization'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import useRouter from '../../../hooks/useRouter'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'

const GET_ALL_TIMELINES = gql`
query {
  timelines {
    id
    name
  	timePoints {
      label
    }
    fromStudy {
        shortName
    }
  }
}
`;


function useTimelinesQuery({ }) {
    const [timelines, setTimelines] = useState()
    const { data, loading, error } = useQuery(GET_ALL_TIMELINES, {fetchPolicy: 'network-only'})
    useEffect(() => {
        console.log(data)
        if (!!data?.timelines) {
            setTimelines(data.timelines)
        }
    }, [data])
    return {data, loading, error, timelines}
}

export default function MetadataTimelinesList({ }) {
    const { navigate } = useRouter()
    const {data, loading, timelines} = useTimelinesQuery({})

    if (loading || R.isNil(timelines)) {
        return 'Loading timelines'
    }

    if (!timelines) {
        return null
    }
    
    return (
        <Segment>
        <Form>
            <Form.Field
                control={Input}
                label='Search timelines'
                placeholder='Enter some terms of interest'
            />
            <Divider />
            <List relaxed='very' selection celled divided size='large'>
            {data.timelines.map((timeline: any) => (
            <List.Item key={timeline.id} onClick={(e, d) => console.log(timeline.id)}>
                <List.Content>
                <List.Header as='a'>{timeline.name}</List.Header>
                <List.Description>
                    <b>{timeline.timePoints.length} concepts</b>
                </List.Description>
                </List.Content>
            </List.Item>
            ))}
        </List>
        </Form>
        </Segment>
    )
}