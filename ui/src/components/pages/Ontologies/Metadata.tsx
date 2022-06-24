import e from 'express';
import React, { useEffect, useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';
import { Segment, Divider, Form, Message, Modal, Button, Input, Dropdown, Container } from 'semantic-ui-react';
import SegmentPlaceholder from '../../common/SegmentPlaceholder';

function AddTimelineEventModal (

  ) {
      return (
          <Modal
              size='large'
              trigger={
                  <Button content='Add a timeline event' />
              }
          >
              <Modal.Content>
              <Message>
                  Still need some way to specify different time scales for different studies
              </Message>

              <Form>
                  <Form.Field
                      control={Dropdown}
                      selection
                      label='Study'
                      placeholder='The study for the new timeline event'
                      // value={description}
                      // onChange={(e, {value}) => dispatch({type: 'SET_DESCRIPTION', description: value})}
                  />
                  <Form.Group widths={2}>
                  <Form.Field
                      control={Input}
                      label='Year'
                      placeholder="Specify year relative to birth of the new timeline event (0 = birth)"
                      // value={name}
                      // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                  />
                  <Form.Field
                      control={Input}
                      label='Week'
                      placeholder="Specify a week within the year for the new timeline event (between 0 and 51)"
                      // value={name}
                      // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                  />
                  </Form.Group>
              </Form>
  
              </Modal.Content>
              <Modal.Actions>
                  <Button content='Cancel' />
                  <Button content='Add timeline event' />
              </Modal.Actions>
          </Modal>
      )
  }

const timetreeElements = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          Study Timeline
        </>
      ),
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          <b>Year</b>
          <br />
          Value: 0
        </>
      ),
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          <b>Year</b>
          <br />
          Value: 1
        </>
      ),
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    position: { x: 100, y: 200 },
    data: {
      label: (
        <>
          <b>Week</b>
          <br />
          Value: 0
        </>
      )
    },
  },
  {
    id: '5',
    position: { x: 400, y: 200 },
    data: {
      label: (
        <>
          <b>Week</b>
          <br />
          Value: 4
        </>
      )
    },
  },
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e3-4', source: '3', target: '4'},
  { id: 'e2-4', source: '2', target: '4'},
  { id: 'e2-4', source: '3', target: '5'},
];


const timelineElements = [
  {
    id: '1',
    type: 'input',
    data: {
      label: (
        <>
          <b>0 year + 0 weeks</b>
        </>
      ),
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '2',
    data: {
      label: (
        <>
          <b>1 year + 0 weeks</b>
        </>
      ),
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    data: {
      label: (
        <>
          <b>1 year + 4 weeks</b>
        </>
      ),
    },
    position: { x: 800, y: 100 },
  },
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '2', target: '3' },
];


export default function MetadataOntology () {
  const [study, setStudy] = useState(null)
  const [elements, setElements] = useState([]);
  useEffect(
    () => {
      console.log(study)
      if (study==='CHILD') {
        setElements(timetreeElements)
      } else if (study==='ELICIT') {
        setElements(timelineElements)
      }
    }, [study]
  )
  // const onElementsRemove = (elementsToRemove) =>
  //   setElements((els) => removeElements(elementsToRemove, els));
  // const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
      <>
        <Divider horizontal content='Metadata' />
    <Segment attached='top'>
        <Message>
          Every data variable belongs to a data type describing what kind of responses to expect (e.g. text, number, etc).
          <Divider horizontal />
        </Message>


        {/* <Form>
            <Form.Group>
                <Form.Field width={6}>
                    <label>Study</label>
                    <Form.Dropdown selection
                        placeholder='Select a study'
                        value={study}
                        
                        onChange={(e, {value}) => setStudy(value)}
                        options={[{text: 'ELICIT', value: 'ELICIT'}, {text: 'CHILD', value: 'CHILD'}, {text: 'VITAL', value: 'VITAL'}]}
                    />
                </Form.Field>
                <Form.Field width={10}>
                    <label>Time points</label>
                    <Form.Dropdown selection
                      options={[
                        {text: '0 year + 0 weeks', value: '1'},
                        {text: '1 year + 0 weeks', value: '2'},
                        {text: '1 year + 4 weeks', value: '3'},
                      ]}
                    />
                </Form.Field>
            </Form.Group>
        </Form> */}
    </Segment>
    <Segment attached='bottom'>
    <div style={{ height: 500 }}>
        
      <ReactFlow
        elements={elements}
        // onElementsRemove={onElementsRemove}
        // onConnect={onConnect}
        // deleteKeyCode={46} /* 'delete'-key */
      />
      
    </div>
    </Segment>
    </>
  );
}