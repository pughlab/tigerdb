import React, { useEffect, useState } from 'react'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'

export default function NewOntologyModal () {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle form submission here
    };
  
    return (
      <Modal
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        trigger={<Button>New Ontology</Button>}
      >
        <Modal.Header>Create a new ontology</Modal.Header>
        <Modal.Content>
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Select which study this ontology is for</label>
                <Dropdown
                    placeholder="Select study"
                    fluid
                    selection
                    options={[]}
                // onChange={handleDropdownChange}
                // value={selectedOption}
                />
            </Form.Field>
            <Form.Field>
                <label>Ontology Name</label>
                <input
                    type="text"
                    placeholder="Enter Ontology Name"
                    // value={name}
                    // onChange={handleNameChange}
                />
            </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={handleClose}>
            Close
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Save"
            onClick={handleClose}
          />
        </Modal.Actions>
      </Modal>
    );
  };