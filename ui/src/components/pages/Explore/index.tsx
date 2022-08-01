import React from 'react'
import { Message, Divider, List, Container, Input, Segment, Form } from 'semantic-ui-react'
import DataVariableTable from '../../tables/DataVariableTable'

export default function Explore () {
    return (
        <>
            <Message content='Explore variables' >
            Some text about data variables and searching to create visualizations

            <Divider horizontal />
          </Message>
              
            <Form as={Segment} attached='top'>
           
                <Form.Field
                    control={Input}
                    label='Search data variable definition description      Search by ontology'
                    placeholder='Enter some terms of interest'
                />
            </Form>
          <Segment attached='bottom'>
              <DataVariableTable />
          </Segment>
        </>
    )
}