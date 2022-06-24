import { useState, useReducer, useCallback, useEffect } from 'react'
import * as React from 'react'
import { Button, Divider, Icon, Grid, Modal, Message, Segment, Step, Statistic, List, Label, Form, Input, TextArea, Popup, Header } from 'semantic-ui-react'
import {ParserState} from '../../hooks/useCSVParser'

export default function DropzoneFileLabel ({parserState, parserDispatch} : {parserState: ParserState, parserDispatch: any}) {
    if (!parserState.file) return null
    return (
        <>
            <Button as='div' labelPosition='left'>
                <Label as='a' basic pointing='right'>
                    {parserState.file.path} 
                    <Label.Detail content={`${parserState.file.size} bytes`} />
                </Label>
                <Button color='red' icon='delete' onClick={() => {parserDispatch({type: 'RESET_STATE'})}} />
            </Button>
        </>
    )
}