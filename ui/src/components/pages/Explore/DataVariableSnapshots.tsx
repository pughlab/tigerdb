import React, { useState, useReducer, useMemo, useEffect } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button, Dropdown, Modal } from 'semantic-ui-react'

import * as R from 'remeda'

import SegmentPlaceholder from '../../common/SegmentPlaceholder'
import DataVariablePieVisualization from '../../visualizations/pie/DataVariablePieVisualization'

function SnapshotVisualization({snapshot}) {
    console.log('snapshot vis', snapshot)
    const {snapshotType, selectedDataVariables} = snapshot
    return (
        <DataVariablePieVisualization />
    )
}

export default function DataVariableSnapshots({ exportReducer }) {
    const { state, dispatch } = exportReducer
    console.log(state)
    const snapshotOptions = exportReducer.state.snapshots.map((snapshot: any) => ({
        key: snapshot.key, value: snapshot, text: snapshot.key 
    }))
    const [selectedSnapshot, setSelectedSnapshot] = useState()
    
    return (
        <>
            <Segment attached='top'>
                <Dropdown fluid selection
                    placeholder='Saved snapshots'
                    options={snapshotOptions}
                    onChange={(e, {value}) => setSelectedSnapshot(value)}
                />

            </Segment>
            <Segment attached='bottom'>
            {!selectedSnapshot ? <SegmentPlaceholder text={'Select a saved snapshot'} /> : <SnapshotVisualization snapshot={selectedSnapshot} /> }
            </Segment>
        </>
    )
}