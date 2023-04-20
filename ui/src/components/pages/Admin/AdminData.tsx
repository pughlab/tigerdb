import { gql, useMutation, useQuery } from '@apollo/client';
import * as React from 'react'
import { useReducer } from 'react';
import { Button, Divider, Form, Grid, GridColumn, Input, Label, Radio } from "semantic-ui-react";
import * as R from 'remeda'
import { Study } from '../../../types/types';

export default function AdminData() {

  type lastClickedType = 'Study' | 'RawDataset' | 'CuratedDataset'

  type stateType = {
    studyID?: String
    rawDatasetID?: String
    curatedDatasetID?: String
    lastClicked?: lastClickedType
    lastID?: String
    studyPermission?: String
    sitePermission?: String
    nestedSwitch?: String
  }

  // State
  const initialState: stateType = { studyID: undefined, rawDatasetID: undefined, curatedDatasetID: undefined, lastClicked: undefined, lastID: undefined, studyPermission: undefined, sitePermission: undefined, nestedSwitch: undefined }
  const [state, dispatch]: [state:stateType, dispatch: any] = useReducer((state, action) => {
      const { type, payload } = action
      const newState = { ...state, ...payload }
      console.log(newState)
      switch (type) {
          case 'setPayload':
              return newState
      }
      return state
  }, initialState)

  const { data: data, loading: loading, error: error, refetch: refetch } = useQuery(gql`
  query studies{ studies(options: {sort: {fullName: ASC}}) {
    studyID
    fullName
    shortName
    description
    allowedStudies
    allowedSites
    rawDatasets(options: {sort: {name: ASC}}) {
      rawDatasetID
      name
      description
      allowedStudies
      allowedSites
      generatedCuratedDatasets(options: {sort: {name: ASC}}) {
        curatedDatasetID
        name
        description
        allowedStudies
        allowedSites
  }}}}
  `,
  { variables: { }, fetchPolicy: 'network-only' })

  let studies: [Study] = data?.studies
  studies = studies ? studies : []
  let study = R.find(studies, ({studyID}) => studyID == state.studyID)
  let rawDatasets = study?.rawDatasets
  rawDatasets = rawDatasets ? rawDatasets : []
  let rawDataset = R.find(rawDatasets, ({rawDatasetID}) => rawDatasetID == state.rawDatasetID)
  let curatedDatasets = rawDataset?.generatedCuratedDatasets
  curatedDatasets = curatedDatasets ? curatedDatasets : []
  let curatedDataset = R.find(curatedDatasets, ({curatedDatasetID}) => curatedDatasetID == state.curatedDatasetID)

  let studyPermissions = []
  let sitePermissions = []
  if (state.lastClicked === 'Study') {
    studyPermissions = study?.allowedStudies
    sitePermissions = study?.allowedSites
  } else if (state.lastClicked === 'RawDataset') {
    studyPermissions = rawDataset?.allowedStudies
    sitePermissions = rawDataset?.allowedSites
  } else if (state.lastClicked === 'CuratedDataset') {
    studyPermissions = curatedDataset?.allowedStudies
    sitePermissions = curatedDataset?.allowedSites
  }


  const [nestedSwitch, { dataNestedSwitch, loadingNestedSwitch, errorNestedSwitch }] = useMutation(gql`
  mutation nestedSwitch(
    $id: ID
    $operation: nestedOperations
    $property: String
    $value: String
    $nestedSwitch: nestedSwitch
  ) {
    nestedSwitch(
      nestedSwitch: $nestedSwitch
      id: $id
      operation: $operation
      property: $property
      value: $value
    )
  }`, {onCompleted: () => { refetch() }})

  return (
  <Grid>
  <Grid.Row>
  <Grid columns={3}>
    <GridColumn>
      <Divider horizontal content='Study' />
      {studies.map(({studyID, fullName, shortName, description, allowedStudies, allowedSites}) => {
                return (<>
                <Form.Field key={`studyID.form.field.${studyID}`}>
                  <Radio
                    key={`studyID.radio.${studyID}`}
                    label={fullName}
                    name={studyID}
                    value={studyID}
                    checked={state.studyID === studyID}
                    onClick={((e, {value}) => {dispatch({type: 'setPayload', payload: {studyID: value, lastClicked: 'Study', lastID: value, nestedSwitch: 'nestedStudyProperty', lastName: fullName}})})}
                  />
                </Form.Field>
                </>)})}
    </GridColumn>
    <GridColumn>
      <Divider horizontal content='RawDataset' />
      {rawDatasets.map(({rawDatasetID, name, description, allowedStudies, allowedSites}) => {
                return (<>
                <Form.Field key={`rawDatasetID.form.field.${rawDatasetID}`}>
                  <Radio
                    key={`rawDatasetID.radio.${rawDatasetID}`}
                    label={name}
                    name={rawDatasetID}
                    value={rawDatasetID}
                    checked={state.rawDatasetID === rawDatasetID}
                    onClick={((e, {value}) => {dispatch({type: 'setPayload', payload: {rawDatasetID: value, lastClicked: 'RawDataset', lastID: value, nestedSwitch: 'nestedRawDatasetProperty', lastName: name}})})}
                  />
                </Form.Field>
                </>)})}
    </GridColumn>
    <GridColumn>
      <Divider horizontal content='CuratedDataset' />
      {curatedDatasets.map(({curatedDatasetID, name, description, allowedStudies, allowedSites}) => {
                return (<>
                <Form.Field key={`curatedDatasetID.form.field.${curatedDatasetID}`}>
                  <Radio
                    key={`curatedDatasetID.radio.${curatedDatasetID}`}
                    label={name}
                    name={curatedDatasetID}
                    value={curatedDatasetID}
                    checked={state.curatedDatasetID === curatedDatasetID}
                    onClick={((e, {value}) => {dispatch({type: 'setPayload', payload: {curatedDatasetID: value, lastClicked: 'CuratedDataset', lastID: value, nestedSwitch: 'nestedCuratedDatasetProperty', lastName: name}})})}
                  />
                </Form.Field>
                </>)})}
    </GridColumn>
  </Grid>
  </Grid.Row>
  <Grid.Row>
    <GridColumn>
      <Divider horizontal content='Permissions' />
      <Label>Currently selected: {state.lastClicked} {state.lastName}</Label>
      <Grid columns={2}>
        <GridColumn>
          <Divider horizontal content='Study' />
          <Input
            value={state.studyPermission}
            onChange={(e, {value}) => {dispatch({type: 'setPayload', payload: {studyPermission: value}})}}
          />
          <Button onClick={() => { nestedSwitch({variables: {id: state.lastID, operation: 'union', property: 'allowedStudies', value: state.studyPermission, nestedSwitch: state.nestedSwitch}}) }}>Add permission</Button>
          <Button onClick={() => { nestedSwitch({variables: {id: state.lastID, operation: 'subtract', property: 'allowedStudies', value: state.studyPermission, nestedSwitch: state.nestedSwitch}}) }}>Remove permission</Button>
          <Form>
          {studyPermissions.map((studyPermission) => {
                    return (<>
                    <Form.Field key={`studyPermission.form.field.${studyPermission}`}>
                      <Radio
                        key={`studyPermission.radio.${studyPermission}`}
                        label={studyPermission}
                        name={studyPermission}
                        value={studyPermission}
                        checked={state.studyPermission === studyPermission}
                        onClick={((e, {value}) => {dispatch({type: 'setPayload', payload: {studyPermission: value}})})}
                      />
                    </Form.Field>
                    </>)})}
          </Form>
        </GridColumn>
        <GridColumn>
          <Divider horizontal content='Sites' />
          <Input
            value={state.sitePermission}
            onChange={(e, {value}) => {dispatch({type: 'setPayload', payload: {sitePermission: value}})}}
          />
          <Button onClick={() => { nestedSwitch({variables: {id: state.lastID, operation: 'union', property: 'allowedSites', value: state.sitePermission, nestedSwitch: state.nestedSwitch}}) }}>Add permission</Button>
          <Button onClick={() => { nestedSwitch({variables: {id: state.lastID, operation: 'subtract', property: 'allowedSites', value: state.sitePermission, nestedSwitch: state.nestedSwitch}}) }}>Remove permission</Button>
          <Form>
          {sitePermissions.map((sitePermission) => {
                    return (<>
                    <Form.Field key={`sitePermission.form.field.${sitePermission}`}>
                      <Radio
                        key={`sitePermission.radio.${sitePermission}`}
                        label={sitePermission}
                        name={sitePermission}
                        value={sitePermission}
                        checked={state.sitePermission === sitePermission}
                        onClick={((e, {value}) => {dispatch({type: 'setPayload', payload: {sitePermission: value}})})}
                      />
                    </Form.Field>
                    </>)})}
          </Form>
        </GridColumn>
      </Grid>
    </GridColumn>
  </Grid.Row>
  </Grid>
  )
}