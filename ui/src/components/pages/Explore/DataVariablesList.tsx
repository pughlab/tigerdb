import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'

import * as R from 'remeda'
import { gql, useQuery } from '@apollo/client'
const GET_ALL_DATA_VARIABLES = gql`
query {
  dataVariableFieldDefinitions {
    xref
    description
  }
}
`


export default function DataVariablesList() {
    const {data, loading, error} = useQuery(GET_ALL_DATA_VARIABLES)
    if (!data?.dataVariableFieldDefinitions || loading) {
        return "Loading"
    }
    return (
        <>        
            <Segment>
            <List celled selection>
            {
                data.dataVariableFieldDefinitions.map((dvfd: any) => {
                    return (
                        <List.Item key={dvfd.xref} content={dvfd.description} />
                    )
                })
            }
            </List>
            </Segment>
        </>
    )
}