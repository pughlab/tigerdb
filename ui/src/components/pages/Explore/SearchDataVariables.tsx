import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal, Grid } from 'semantic-ui-react'

import * as R from 'remeda'

import OntologyConceptDropdown from '../../search/OntologyConceptDropdown'
import TimePointDropdown from '../../search/TimePointDropdown'

export default function SearchDataVariables({state, dispatch}) {
    return (
        <>        
            <Segment>
                <Grid columns={2}>
                    <Grid.Column>
                        <Divider horizontal content='Select Time Points to Filter Datasets' />
                        <TimePointDropdown />
                    </Grid.Column>
                    <Grid.Column>
                        <Divider horizontal content='Select Ontology Concepts to Filter Data Variables' />
                        <OntologyConceptDropdown />
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    )
}