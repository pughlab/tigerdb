import { useState, useMemo } from 'react'
import * as React from 'react'
import { Button, Divider, Icon, Grid, Modal, Message, Segment, Step, Statistic, List } from 'semantic-ui-react'
import useCSVParser, { ParserState } from '../../../hooks/useCSVParser'

import UploadPreviewTable from '../../tables/uploadPreview'
import SegmentPlaceholder from '../../common/SegmentPlaceholder'

export default function CodebookDisplay ({codebookParserState}: {codebookParserState: ParserState}) {
    // console.log(codebookParserState)
    const [open, setOpen] = useState(false)
    return (
        <Segment>
            <Modal size='large'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button fluid>View codebook</Button>}
            >
                <Modal.Header>Codebook</Modal.Header>
                <Modal.Content>
                    <UploadPreviewTable {...{data: codebookParserState.data, columns: codebookParserState.columns, header: false}} />
                </Modal.Content>
            </Modal>
        </Segment>
    )
}
