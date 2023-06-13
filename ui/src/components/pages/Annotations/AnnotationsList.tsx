import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Modal, Grid, Card, Icon } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import useAnnotationVariablesQuery from '../../../hooks/pages/useAnnotationVariablesQuery'

// import AddDatasetModal from './AddDatasetModal'
import { useLocation } from 'react-router-dom'

function AnnotationListItem({ annotationVariable, searchText }) {
    const { annotationVariableID, cdr3b, locus, trbv, trbj, mhc, mhcClass, epitope, epitopeGene, epitopeSpecies, reference } = annotationVariable
    // const navigate = useNavigate()
    const { navigate } = useRouter()

    let highlightedCDR3B = cdr3b.replaceAll(searchText, `<span style="color: red">${searchText}</span>`);


    return (
        <>
            <List.Item as={Card} fluid
                // onClick={() => navigate(annotationVariableID)}
                onClick={() => {
                    console.log(annotationVariableID)
                    if (reference.startsWith('https')) {
                        window.open(reference, '_blank');
                    } else if (reference.startsWith('PMID')) {
                        let PMID = reference.split(':')[1].trim(); // Split by colon and get the number part
                        window.open(`https://pubmed.ncbi.nlm.nih.gov/${PMID}/`, '_blank');
                    }
                }}
            >
                <List.Content floated='right' as={Segment} basic>
                </List.Content>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <List.Header as={Header} color='blue'>
                                    <div dangerouslySetInnerHTML={{__html: highlightedCDR3B}} />
                                </List.Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Label content='Locus' detail={`${locus}`} />
                            <Label content='TRBV' detail={`${trbv}`} />
                            <Label content='TRBJ' detail={`${trbj}`} />
                        </Grid.Column>
                        <Grid.Column>
                            <Label content='MHC' detail={`${mhc}`} />
                            <Label content='MHC Class' detail={`${mhcClass}`} />
                        </Grid.Column>
                        <Grid.Column>
                            <Label content='Epitope' detail={`${epitope}`} />
                            <Label content='Epitope Gene' detail={`${epitopeGene}`} />
                            <Label content='Epitope Species' detail={`${epitopeSpecies}`} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Button fluid color='black'>
                            <Icon name='book' style={{ color: 'white' }} />
                            {reference}
                        </Button>
                    </Grid.Row>
                </Grid>
            </List.Item>
            <Divider horizontal hidden />
        </>
    )
}

export default function AnnotationsList({ }) {
    const { data, loading, error, runQuery, searchText, setSearchText } = useAnnotationVariablesQuery({})

    const location = useLocation()
    useEffect(() => {
        if (searchText) {
            runQuery({ variables: { searchText } })
        }
    }, [location.key])

    const handleSearch = () => {
        if (searchText) {
            runQuery({ variables: { searchText } })
        }
    }

    console.log("SEARCH SEQUENCE DATA HERE:")
    console.log(data);

    return (
        <>
            <Container>
                <Message>


                    <Divider horizontal />
                    {/* <AddDatasetModal refetch={refetch} /> */}
                    <Button disabled fluid size='large' color='black' animated='vertical' onClick={() => console.log("clicked")}>
                        <Button.Content visible><Icon name='add' /></Button.Content>
                        <Button.Content hidden content="Add Annotation" />
                    </Button>
                </Message>
                <Segment>
                    <Form onSubmit={handleSearch}>
                        <Form.Field control={Input}
                            label='Search CDR3b Sequence'
                            placeholder='CASSYS...'
                            value={searchText}
                            onChange={(e, { value }) => setSearchText(value)}
                        />
                        <Button fluid color='blue' type="submit">SEARCH</Button>

                    </Form>
                </Segment>
                <Segment loading={loading}>
                    {
                        data &&
                        <Divider horizontal>
                            <Header as="h4">
                                {/* <Icon name="id card" /> */}
                                RESULTS
                            </Header>
                        </Divider>
                    }
                    <List selection size='massive' key='annotationVariable'>
                        {!!data?.curatedAnnotations &&
                            data.curatedAnnotations.map(curatedAnnotation =>
                                curatedAnnotation.annotationVariables.map(annotationVariable => {
                                    console.log(annotationVariable); // Console log the annotationVariable
                                    return (
                                        <AnnotationListItem
                                            key={annotationVariable.annotationVariableID}
                                            annotationVariable={annotationVariable}
                                            searchText={searchText}
                                        />
                                    )
                                })
                            )
                        }
                    </List>
                </Segment>
            </Container>
        </>
    )
}