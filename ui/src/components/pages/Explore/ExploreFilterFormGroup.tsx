import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'

import {FILTER_EVENTS} from '../../../machines/studiesDatasetsFilterMachine'
import {SNAPSHOT_EVENTS} from '../../../machines/snapshotMachine'
import * as R from 'remeda'

import useStudiesDatasetsQueryMachine from '../../../hooks/pages/useStudiesDatasetsQueryMachine'

export default function ExploreFilterFormGroup ({filterMachine}) {
    const {query: queryMachine} = useStudiesDatasetsQueryMachine()
    const data = queryMachine.state.context.data
    console.log(queryMachine.state)

    useEffect(() => {
        if (!!data) {
            filterMachine.send({type: FILTER_EVENTS.SET_STUDIES_DATA, payload: {data}})
        }
    }, [data])
    if (!data) {return null}

    console.log(filterMachine.state.context)
    // const studiesOptions = R.pipe(
    //     data
    // )
    console.log(data)
    const {studies} = data
    const studiesOptions = R.pipe(
        studies,
        R.map(({studyID, fullName}) => ({value: studyID, text: fullName}))
    )
    const datasetsOptions = R.pipe(
        studies,
        R.map(({shortName: studyName, rawDatasets}) => R.map(rawDatasets,
            rd => ({
                    value: rd.generatedCuratedDataset.curatedDatasetID,
                    text: `${rd.name}`,
                    label: studyName
                })
            )
        ),
        R.flatten()
    )
    console.log(studiesOptions, datasetsOptions)
    const {studiesWithDatasets, searchText} = filterMachine.state.context
    // Select any study that has at least one dataset selected
    const selectedStudies: string[] = R.pipe(
        studiesWithDatasets,
        studies => R.pickBy(studies, (studyDatasets: any[], key) => R.reduce(R.values(studyDatasets), (acc: boolean, x: boolean) => acc || x, false)),
        R.keys
    )
    const selectedDatasets = R.pipe(
        studiesWithDatasets,
        studies => R.pick(studies, selectedStudies),
        R.mapValues(studyDatasets => R.pickBy(studyDatasets, (datasetIsSelected, datasetID) => datasetIsSelected)),
        R.mapValues(R.keys),
        R.values,
        R.flatten
    )
    return (
        <Form>
            <Form.Field
                control={Input}
                label='Search data variable descriptions'
                placeholder='Enter some terms of interest'
                value={searchText}
                onChange={(e, { value }) => filterMachine.send({type: FILTER_EVENTS.CHANGE_SEARCH_TEXT, payload: {searchText: value}})}
            />
            <Form.Group widths={2}>
                <Form.Field control={Dropdown}
                    label='Study'
                    placeholder='Filter datasets by study'
                    fluid
                    multiple selection
                    search
                    value={selectedStudies}
                    options={studiesOptions}
                    onChange={(e, { value }) => {
                        console.log(value)
                        filterMachine.send({type: FILTER_EVENTS.CHANGE_STUDIES, payload: {selectedStudies: value}})
                    }}
                />
                <Form.Field control={Dropdown}
                    label='Dataset'
                    placeholder='Filter data variables by dataset'
                    fluid
                    multiple selection
                    search
                    value={selectedDatasets}
                    options={datasetsOptions}
                    onChange={(e, { value }) => filterMachine.send({type: FILTER_EVENTS.CHANGE_DATASETS, payload: {selectedDatasets: value}})}
                />
            </Form.Group>
        </Form>
    )
}