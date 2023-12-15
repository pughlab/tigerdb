import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Segment, Container, Message, List, Divider, Dropdown, Grid, Card, Icon } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import useAnnotationVariablesQuery from '../../../hooks/pages/useAnnotationVariablesQuery'
import { useDebounce } from 'use-debounce'

// import AddDatasetModal from './AddDatasetModal'
import { useLocation } from 'react-router-dom'

import Fuse from 'fuse.js';




function DropdownOptions({ filterKey, placeholder, text, value, disabled, loading, setDropdownFilters, dropdownFilters }) {


    return (

<>
<Segment padded>

<Label attached='top'>
{placeholder}
</Label>
        <Dropdown fluid
            labeled
            selection
            multiple
            search
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            options={text.map(k => ({ key: k, text: k, value: k }))}

            onChange={(e, { value }) => setDropdownFilters({ ...dropdownFilters, [filterKey]: value })}
        />
        </Segment>
        </>
    )

}

function AnnotationListItem({ annotationVariable, searchText, score, dropdownFilters }) {
    const { annotationVariableID, cdr3b, locus, trbv, trbj, mhc, mhcClass, epitope, epitopeGene, epitopeSpecies, reference } = annotationVariable
    // const navigate = useNavigate()
    const { navigate } = useRouter()

    let trimmedSearch = searchText.trim().split("|")
    let highlightedCDR3B = cdr3b.replaceAll(searchText, `<span style="color: red">${searchText}</span>`);


    // console.log("yes?")
    // console.log(dropdownFilters["trbv"].includes(trbv))
    return (
        <>

            <List.Item as={Card} fluid
                // attached='top'
                // onClick={() => navigate(annotationVariableID)}
                onClick={() => {
                    // console.log(annotationVariableID)
                    if (reference.startsWith('https')) {
                        window.open(reference, '_blank');
                    } else if (reference.startsWith('PMID')) {
                        let PMID = reference.split(':')[1].trim(); // Split by colon and get the number part
                        window.open(`https://pubmed.ncbi.nlm.nih.gov/${PMID}/`, '_blank');
                    }
                }}
            >
                <Label as='a' color='red' ribbon content='SCORE' detail={`${((1 - score) * 100).toFixed(2)}%`} />


                <List.Content floated='right' as={Segment} basic>

                </List.Content>
                <Grid textAlign='center'>
                    <Grid.Row>
                        <Grid.Column>
                            <List.Header as={Header} color='blue'>
                                <div dangerouslySetInnerHTML={{ __html: highlightedCDR3B }} />
                            </List.Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3} divided textAlign='center'>
                        <Grid.Column>
                            <Grid.Row>
                                <Label
                                basic={!dropdownFilters['locus'].includes(locus)}
                                content='Locus' detail={`${locus}`} 
                                color={dropdownFilters['locus'].includes(locus) ? "blue" : "grey"} />
                            </Grid.Row>
                            <Grid.Row>

                                <Label
                                    basic={!dropdownFilters['trbv'].includes(trbv)}
                                    content='TRBV'
                                    detail={`${trbv}`}
                                    color={dropdownFilters['trbv'].includes(trbv) ? "blue" : "grey"} 
                                />                            
                            </Grid.Row>
                            <Grid.Row>

                                <Label basic={!dropdownFilters['trbj'].includes(trbj)} content='TRBJ' detail={`${trbj}`}                                     
                                color={dropdownFilters['trbj'].includes(trbj) ? "blue" : "grey"} 

                                 />
                            </Grid.Row>

                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Label basic={!dropdownFilters['mhc'].includes(mhc)}  content='MHC' detail={`${mhc}`}                                     
                                color={dropdownFilters['mhc'].includes(mhc) ? "blue" : "grey"} 

                                />

                            </Grid.Row>

                            <Grid.Row>
                                <Label basic={!dropdownFilters['mhcClass'].includes(mhcClass)} content='MHC Class' detail={`${mhcClass}`} 
                                color={dropdownFilters['mhcClass'].includes(mhcClass) ? "blue" : "grey"} 

                                />

                            </Grid.Row>

                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Label basic={!dropdownFilters['epitope'].includes(epitope)} content='Epitope' detail={`${epitope}`} 
                                color={dropdownFilters['epitope'].includes(epitope) ? "blue" : "grey"} 

                                />

                            </Grid.Row>

                            <Grid.Row>
                                <Label basic={!dropdownFilters['epitopeGene'].includes(epitopeGene)} content='Epitope Gene' detail={`${epitopeGene}`} 
                                color={dropdownFilters['epitopeGene'].includes(epitopeGene) ? "blue" : "grey"} 

                                />

                            </Grid.Row>

                            <Grid.Row>
                                <Label basic={!dropdownFilters['epitopeSpecies'].includes(epitopeSpecies)} content='Epitope Species' detail={`${epitopeSpecies}`} 
                                color={dropdownFilters['epitopeSpecies'].includes(epitopeSpecies) ? "blue" : "grey"} 

                                />

                            </Grid.Row>

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
                <Divider horizontal />

                <Button fluid color='black'>
                    <Icon name='book' style={{ color: 'white' }} />
                    {reference}
                </Button>
            </List.Item>

            <Divider horizontal hidden />
        </>
    )
}

const ANNOTATION_FILTERS = [
    { filterKey: "locus", placeholder: "Locus", text: ["TRB"], disabled: true, value: ["TRB"] },
    {
        filterKey: "trbv", placeholder: "TRBV", text: [
            "TRBV1", "TRBV2", "TRBV3-1", "TRBV3-2", "TRBV4-1", "TRBV4-2", "TRBV4-3",
            "TRBV5-1", "TRBV5-2", "TRBV5-3", "TRBV5-4", "TRBV5-5", "TRBV5-6", "TRBV5-7",
            "TRBV5-8", "TRBV6-1", "TRBV6-2", "TRBV6-3", "TRBV6-4", "TRBV6-5", "TRBV6-6",
            "TRBV6-7", "TRBV6-8", "TRBV6-9", "TRBV7-1", "TRBV7-2", "TRBV7-3", "TRBV7-4",
            "TRBV7-5", "TRBV7-6", "TRBV7-7", "TRBV7-8", "TRBV7-9", "TRBV9", "TRBV10-1",
            "TRBV10-2", "TRBV10-3", "TRBV11-1", "TRBV11-2", "TRBV11-3", "TRBV12-1",
            "TRBV12-2", "TRBV12-3", "TRBV12-4", "TRBV12-5", "TRBV13", "TRBV14", "TRBV15",
            "TRBV16", "TRBV17", "TRBV18", "TRBV19", "TRBV20-1", "TRBV21-1", "TRBV22-1",
            "TRBV23-1", "TRBV24-1", "TRBV25-1", "TRBV26", "TRBV27", "TRBV28", "TRBV29-1",
            "TRBV30"
        ]
    },
    { filterKey: "trbj", placeholder: "TRBJ", text: ["TRBJ2-1"] },
    { filterKey: "mhc", placeholder: "MHC", text: ["1"] },
    { filterKey: "mhcClass", placeholder: "MHC Class", text: ["1"] },
    { filterKey: "epitope", placeholder: "Epitope", text: ["1"] },
    { filterKey: "epitopeGene", placeholder: "Epitope Gene", text: ["1"] },
    { filterKey: "epitopeSpecies", placeholder: "Epitope Species", text: ["EBV"] },
]

export default function AnnotationsList({ }) {
    const [dropdownFilters, setDropdownFilters] = useState({
        locus: ["TRB"],
        trbv: [],
        trbj: [],
        mhc: [],
        mhcClass: [],
        epitope: [],
        epitopeGene: [],
        epitopeSpecies: []
    })

    const { data, loading, error, runQuery, searchText, setSearchText } = useAnnotationVariablesQuery(dropdownFilters)
    const [searchResults, setSearchResults] = useState([])
    const [debouncedSearchText] = useDebounce(searchText, 1000);

    const [loadingResults, setLoadingResults] = useState(false)

    console.log("SEARCH SEQUENCE DATA HERE:")
    console.log(searchResults);

    const ITEMS_PER_PAGE = 10; // Adjust as needed
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
    const pageOptions = Array.from({ length: totalPages }, (_, i) => ({ key: i, text: i + 1, value: i + 1 }));
    const startResultNumber = (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endResultNumber = Math.min(currentPage * ITEMS_PER_PAGE, searchResults.length);

    console.log(dropdownFilters)

    const location = useLocation()
    useEffect(() => {
        if (debouncedSearchText) {
            // runQuery({ variables: { searchText } })
            runQuery()

        }
    }, [location.key])

    useEffect(() => {
        if (debouncedSearchText) {
            // runQuery({ variables: { searchText } })
            const fuseOptions = {
                keys: ['cdr3b'],
                includeScore: true,
                threshold: 0.2, // Adjust this for more or less fuzziness
                minMatchCharLength: 3,
                useExtendedSearch: true
            };

            // Assuming data is the array of annotation variables:
            const fuse = new Fuse(!!data?.curatedAnnotations && data.curatedAnnotations.flatMap(ca => ca.annotationVariables), fuseOptions);

            const fuseResults = fuse.search(debouncedSearchText)
            setSearchResults(fuseResults)
            setLoadingResults(false)
            setCurrentPage(1)

        }
    }, [data, debouncedSearchText])

    const handleSearch = () => {
        if (debouncedSearchText) {
            // const fuse = new Fuse(!!data?.curatedAnnotations && data.curatedAnnotations.flatMap(ca => ca.annotationVariables), 
            // {
            //     keys: ['cdr3b'],
            //     includeScore: true,
            //     threshold: 0.2, // Adjust this for more or less fuzziness
            // }
            // );

            // runQuery({ variables: { searchText } })
            setLoadingResults(true)
            runQuery()
            setCurrentPage(1)


        }
    }







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
                        <Segment as={Grid} loading={loading}>
                            {/* <Grid.Row > */}


                            {


                                ANNOTATION_FILTERS.map(filter => (
                                    <Grid.Column width={4}>
                                        <DropdownOptions {...{ ...filter, loading, setDropdownFilters, dropdownFilters }} />
                                    </Grid.Column>
                                ))


                            }
                            {/* </Grid.Row> */}

                        </Segment>
                        <Button fluid color='blue' type="submit">SEARCH</Button>

                    </Form>
                </Segment>
                <Segment loading={loadingResults}>
                    {
                        data &&
                        <Divider horizontal>
                            <Header as="h4">
                                <Button.Group size='massive'>

                                    <Button
                                        icon
                                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <Icon name='chevron left' />
                                    </Button>
                                </Button.Group>

                                {/* <Dropdown
                                inline
                                options={pageOptions}
                                value={currentPage}
                                onChange={(_, { value }) => setCurrentPage(value)}
                            /> */}

                                <span>Showing {startResultNumber} to {endResultNumber} of {searchResults.length} results </span>
                                <Button.Group size='massive'>

                                    <Button
                                        icon
                                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <Icon name='chevron right' />
                                    </Button>
                                </Button.Group>


                            </Header>
                        </Divider>
                    }
                    {/* <List selection size='massive' key='annotationVariable'>
                        {!!data?.curatedAnnotations &&
                            data.curatedAnnotations.map(curatedAnnotation =>
                                curatedAnnotation.annotationVariables.map(annotationVariable => {
                                    // console.log(annotationVariable); // Console log the annotationVariable
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
                    </List> */}
                    {

                        <List selection size='massive' key='annotationVariable'>
                            {searchResults
                                .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                                .map(result => (
                                    <AnnotationListItem
                                        key={result.item.annotationVariableID}
                                        annotationVariable={result.item}
                                        searchText={debouncedSearchText}
                                        score={result.score}
                                        dropdownFilters={dropdownFilters}
                                    />
                                ))}
                        </List>
                    }
                </Segment>
            </Container>
        </>
    )
}