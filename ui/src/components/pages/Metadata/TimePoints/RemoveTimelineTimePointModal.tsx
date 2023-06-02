import React, { useEffect, useState } from 'react'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'


export default function RemoveTimelineTimePointModal (
    ) {
        return (
            <Modal
                size='large'
                trigger={
                    <Button content='Remove a timeline event' />
                }
            >
                <Modal.Content>
                <Message warning>
                    Are you sure you want to remove this time point?
                </Message>
  
                <Form>
                    <Form.Group widths={3}>
                    <Form.Field
                        control={Input}
                        label='Days'
                        placeholder="Current day value"
                        // value={name}
                        // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                    />
                    <Form.Field
                        control={Input}
                        label='Weeks'
                        placeholder="Current week value"
                        // value={name}
                        // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                    />
                    <Form.Field
                        control={Input}
                        label='Years'
                        placeholder="Current year value"
                        // value={name}
                        // onChange={(e, {value}) => dispatch({type: 'SET_NAME', name: value})}
                    />
                    </Form.Group>
                </Form>
    
                </Modal.Content>
                <Modal.Actions>
                    <Button content='Cancel' />
                    <Button content='Remove timeline event' />
                </Modal.Actions>
            </Modal>
        )
    }
