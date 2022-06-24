import { useState, useMemo } from 'react'
import * as React from 'react'
import { Button, Divider, Icon, Grid, Modal, Message, Segment, Step, Statistic, List } from 'semantic-ui-react'

export default function UploadDatasetSummary ({validatorState}) {
    // console.log(validatorState)
    if (!validatorState.ready) {
        return null 
    }
    return (
        <Segment>
            {validatorState.ready && validatorState.summary &&(() => {
                const {uniqueRules, variables, invalidCells} = validatorState.summary
                return (
                    <Segment basic textAlign='center'>
                            <Modal size='large'
                                trigger={
                                    <Button basic fluid>
                                        <Statistic value={variables.unique.length} label={'Variables detected'} />
                                    </Button>
                                }
                            >
                                <Modal.Header>
                                    Variables                                    
                                </Modal.Header>
                                <Modal.Content>
                                    <Message content={`Variables in the left column are missing codes. Variables in the right column are missing data. Variables in the center column have both data and codes.`} />
                                    <Grid columns={3}>
                                        <Grid.Column>
                                            <Message color='red'>
                                                <Divider horizontal content={'From raw dataset CSV'} />
                                                These variables were found in your uploaded dataset but not in the codebook
                                            </Message>
                                            <List divided items={variables.missingCodes} />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Message color='yellow'>
                                                <Divider horizontal content={'Matched'} />
                                                These variables were found in both uploaded dataset and codebook
                                            </Message>
                                            <List divided items={variables.matched} />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Message color='red'>
                                                <Divider horizontal content={'From codebook'} />
                                                These variables were found in your codebook but not in the raw dataset
                                            </Message>
                                            <List divided items={variables.missingVars} />
                                        </Grid.Column>
                                    </Grid>
                                </Modal.Content>
                            </Modal>

                            <Divider horizontal content='with'/>

                            <Modal
                                trigger={
                                    <Button basic fluid>
                                        <Statistic value={uniqueRules.length} label={'Unique rules'} />
                                    </Button>
                                }
                            >
                                <Modal.Header>
                                    {`There are ${uniqueRules.length} code rules for ${variables.unique.length} variables`}
                                </Modal.Header>
                                <Modal.Content>
                                    <List divided items={uniqueRules} />
                                </Modal.Content>
                            </Modal>
                    </Segment>
                )
            })()}
        </Segment>
    )
}
