import React, { useEffect, useState } from 'react'
import { Message, Divider, Form, Container, List, Segment, Input, Grid, Modal, Label, Button, Dropdown, Header } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

import * as R from 'remeda'
import useStudiesQuery from '../../../../hooks/useStudiesQuery'


import AddTimelineTimePointModal from './AddTimelineTimePointModal'
import RemoveTimelineTimePointModal from './RemoveTimelineTimePointModal'
import EditTimelineTimePointModal from './EditTimelineTimePointModal'


export default function EditTimelineModal ({timelineStudyID}) {
    console.log('studyID', timelineStudyID)

    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Handle form submission here
    };

    const studiesQueryState = useStudiesQuery({})
    const { data, loading, error, refetch } = studiesQueryState

    const [selectedStudyID, setSelectedStudyID] = useState(timelineStudyID)
  
    return (
      <Modal
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        trigger={<Button>Edit Timeline</Button>}
      >
        <Modal.Header>Edit a study timeline</Modal.Header>
        <Modal.Content>
        <Form onSubmit={handleSubmit}>
            {
                !!data?.studies && (
                    <Form.Field>
                        <label>Select which study timeline to edit</label>
                        <Dropdown
                            // if timelineStudyID is non null then disable selection
                            disabled={!!timelineStudyID}
                            placeholder="Select study"
                            fluid
                            selection
                            options={data.studies.map((study:any) => ({key: study.studyID, text: study.shortName, value: study.studyID}))}
                            onChange={(e, {value}) => setSelectedStudyID(value)}
                            value={selectedStudyID}
                        />
                    </Form.Field>
                ) 
            }
            {/* TODO: add inner modal for adding a time point, editing a time point and deleting a time point */}
            {
                !!selectedStudyID && (
                    <>
                        <RemoveTimelineTimePointModal />
                        <EditTimelineTimePointModal />
                        <AddTimelineTimePointModal />
                    </>
                )
            }
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