import React, { useState, useReducer, useMemo } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'

import {FILTER_EVENTS} from '../../../machines/studiesDatasetsFilterMachine'
import {SNAPSHOT_EVENTS} from '../../../machines/snapshotMachine'
import * as R from 'remeda'

export default function ExploreFilterFormGroup ({filterMachine, data}) {
    if (!data) {return null}

    console.log(filterMachine.state.context)
    // const studiesOptions = R.pipe(
    //     data
    // )
    console.log(data)
    const {curatedDatasets} = data
    // const studiesOptions = R.pipe(
    //     curatedDatasets,

    // )
    const {studiesWithDatasets, searchText} = filterMachine.state.context.studiesWithDatasets
    return (
        <Form>
            <Form.Field
                control={Input}
                label='Search data variable descriptions'
                placeholder='Enter some terms of interest'
                value={searchText}
                onChange={(e, { value }) => filterMachine.send({type: FILTER_EVENTS.CHANGE_SEARCH_TEXT, payload: {searchText: value}})}
            />
            <Form.Group>
                <Form.Field control={Dropdown}
                    label='Study'
                    placeholder='Filter datasets by study'
                    multiple
                    value={null}
                    onChange={(e, { value }) => {return}}
                />
                <Form.Field control={Dropdown}
                    label='Dataset'
                    placeholder='Filter data variables by dataset'
                    multiple
                    value={null}
                    onChange={(e, { value }) => {return}}
                />
            </Form.Group>
        </Form>
    )
}