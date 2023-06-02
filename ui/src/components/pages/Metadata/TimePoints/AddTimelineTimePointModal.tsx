import React, { useEffect, useState } from 'react'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'


export default function AddTimelineTimePointModal (
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
                    (0,0,0) is birth, negative values is before birth
                </Message>
  
                <Form>
                    <Form.Group widths={3}>
                    <Form.Field
                        control={Input}
                        label='Days'
                        placeholder="Specify how many days after birth"
                        // value={name}
                        // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                    />
                    <Form.Field
                        control={Input}
                        label='Weeks'
                        placeholder="Specify how many weeks after birth"
                        // value={name}
                        // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                    />
                    <Form.Field
                        control={Input}
                        label='Years'
                        placeholder="Specify how many years after birth"
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
