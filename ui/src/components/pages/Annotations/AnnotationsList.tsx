import { useEffect, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Container, Segment, Dimmer, Loader, Message, List, Divider, Dropdown, Grid, Card, Icon, Popup, Select } from 'semantic-ui-react'
import useRouter from '../../../hooks/useRouter'
import { useDebounce } from 'use-debounce'
import { CSVLink } from 'react-csv';
import { v4 as uuidv4 } from 'uuid';
// import { ANNOTATION_FILTERS } from './filters'
import useCuratedAnnotationsFiltersQuery from '../../../hooks/useCuratedAnnotationsFiltersQuery'
import SegmentPlaceholder from '../../common/SegmentPlaceholder'
import { tagColors } from '../Datasets/DatasetTag'

import { useLocation } from 'react-router-dom'

import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { DatasetReadonlyTag } from '../Datasets/DatasetTag'

const ITEMS_PER_PAGE = 20; // Adjust as needed

function DropdownOptions({
  filterKey,
  placeholder,
  text,
  setDropdownFilters,
}) {
  return (
    <Segment padded>
      <Label attached="top">{placeholder}</Label>
      <Dropdown
        fluid
        labeled
        selection
        multiple
        search
        placeholder={placeholder}
        options={text.map((k) => ({ key: k, text: k, value: k }))}
        onChange={(_e, { value }) =>
          setDropdownFilters((previous) => ({
            ...previous,
            [filterKey]: value,
          }))
        }
      />
    </Segment>
  );
}

function AnnotationListItemLabels({ dropdownFilters, values }) {
  const { highlightedCDR3b, trbv, trbj, trav, traj, mhc, mhcClass, epitopeAAseq, epitopeGene, epitopeSpecies, mutation, recognizesWTEpitope, uniProt, reference } = values
  return (
    <Grid textAlign="center">
      <Grid.Row>
        <Grid.Column>
          <List.Header as={Header} color="blue">
            <div
              dangerouslySetInnerHTML={{ __html: highlightedCDR3b }}
            />
          </List.Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={5} divided textAlign="center">
        <Grid.Column>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["trbv"].includes(trbv)}
              content="TRBV"
              detail={`${trbv}`}
              color={
                dropdownFilters["trbv"].includes(trbv) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["trbj"].includes(trbj)}
              content="TRBJ"
              detail={`${trbj}`}
              color={
                dropdownFilters["trbj"].includes(trbj) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["trav"].includes(trav)}
              content="TRAV"
              detail={`${trav}`}
              color={
                dropdownFilters["trav"].includes(trav) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["traj"].includes(traj)}
              content="TRAJ"
              detail={`${traj}`}
              color={
                dropdownFilters["traj"].includes(traj) ? "blue" : "grey"
              }
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["mhc"].includes(mhc)}
              content="MHC"
              detail={`${mhc}`}
              color={
                dropdownFilters["mhc"].includes(mhc) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["mhcClass"].includes(mhcClass)}
              content="MHC Class"
              detail={`${mhcClass}`}
              color={
                dropdownFilters["mhcClass"].includes(mhcClass) ? "blue" : "grey"
              }
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["epitopeAAseq"].includes(epitopeAAseq)}
              content="Epitope Amino Acid Sequence"
              detail={`${epitopeAAseq}`}
              color={
                dropdownFilters["epitopeAAseq"].includes(epitopeAAseq) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["epitopeGene"].includes(epitopeGene)}
              content="Epitope Gene"
              detail={`${epitopeGene}`}
              color={
                dropdownFilters["epitopeGene"].includes(epitopeGene) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["epitopeSpecies"].includes(epitopeSpecies)}
              content="Epitope Species"
              detail={`${epitopeSpecies}`}
              color={
                dropdownFilters["epitopeSpecies"].includes(
                  epitopeSpecies
                ) ? "blue" : "grey"
              }
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["mutation"].includes(mutation)}
              content="Mutation"
              detail={`${mutation}`}
              color={
                dropdownFilters["mutation"].includes(mutation) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["recognizesWTEpitope"].includes(recognizesWTEpitope)}
              content="Recognizes Wild Type Epitope"
              detail={`${recognizesWTEpitope}`}
              color={
                dropdownFilters["recognizesWTEpitope"].includes(recognizesWTEpitope) ? "blue" : "grey"
              }
            />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["reference"].includes(reference)}
              content="Reference"
              detail={`${reference}`}
              color={
                dropdownFilters["reference"].includes(reference) ? "blue" : "grey"
              }
            />
          </Grid.Row>
          <Grid.Row>
            <Label
              basic={!dropdownFilters["uniProt"].includes(uniProt)}
              content="UniProt"
              detail={`${uniProt}`}
              color={
                dropdownFilters["uniProt"].includes(uniProt) ? "blue" : "grey"
              }
            />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

function AnnotationListItem({
  variable,
  cdr3SearchTerm,
  dropdownFilters,
}) {
  const {
    cdr3b,
    trbv,
    trbj,
    trav,
    traj,
    mhc,
    mhcClass,
    epitopeAAseq,
    epitopeGene,
    epitopeSpecies,
    reference,
    datasetName,
    projectID,
    projectName,
    score,
    tags
  } = variable;
  const { navigate } = useRouter();

  // In the AnnotationListItem component
  let searchTerms = cdr3SearchTerm
    .split("|")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);
  let highlightedCDR3b = cdr3b;

  searchTerms.forEach((term) => {
    // Create a case-insensitive regular expression for each term
    let regex = new RegExp(term, "gi");
    highlightedCDR3b = highlightedCDR3b.replace(
      regex,
      (match) => `<span style="color: red">${match}</span>`
    );
  });

  let referenceButton

  if (reference) {
    referenceButton = (
      <Button fluid color="black">
        <Icon name="book" style={{ color: "white" }} />
        {reference}
      </Button>
    )
  } else if (datasetName) {
    referenceButton = (
      <Button fluid color="blue">
        <Icon name="database" style={{ color: "white" }} />
        {datasetName} - {projectName}
      </Button>
    )
  } else {
    referenceButton = <></>
  }

  const openDocument = (reference, projectID) => {
    if (reference?.startsWith("https")) {
      window.open(reference, "_blank");
    } else if (reference?.startsWith("PMID")) {
      const PMID = reference.split(":")[1].trim(); // Split by colon and get the number part
      window.open(
        `https://pubmed.ncbi.nlm.nih.gov/${PMID}/`,
        "_blank"
      );
    } else {
      navigate(`/home/data/${projectID}`);
    }
  }

  return (
    <>
      <Popup
        inverted
        content={
          reference
            ? `Click here to go to publication (${reference})`
            : `Click here to go to Project (${projectName})`
        }
        position="top center"
        icon={reference ? "book" : "database"}
        trigger={
          <List.Item
            as={Card}
            fluid
            style={{ cursor: "pointer", backgroundColor: "white" }}
            onClick={() => openDocument(reference, projectID)}
          >
            <Popup
              inverted
              content="Fuzziness match (string similarity score) based on bitap algorithm"
              trigger={
                <Label
                  as="a"
                  color="red"
                  ribbon
                  content="SCORE"
                  detail={`${score?.toFixed(2)}%`}
                />
              }
            />
            {/* hard coded to check locus: */}
            <Label
              attached="top right"
              color={reference ? "black" : "white"}
              content={reference ? "Annotated" : "Unlabelled"}
            />
            <AnnotationListItemLabels 
              dropdownFilters={dropdownFilters}
              values={{highlightedCDR3b, trbv, trbj, mhc, mhcClass, epitopeAAseq, epitopeGene, epitopeSpecies}} 
            />
            <Divider horizontal />
            <Label.Group>
              {
                [...tags]
                .sort((tag1, tag2) => {
                  if (tag1.name.toLowerCase() === tag2.name.toLowerCase()) {
                    return 0
                  }
                  return tag1.name.toLowerCase() > tag2.name.toLowerCase() ? 1 : -1
                })
                .map((tag) => <DatasetReadonlyTag key={tag.tagID} tag={tag} />)
              }
            </Label.Group>
            {referenceButton}
          </List.Item>
        }
      />
      <Divider horizontal hidden />
    </>
  );
}

function SearchForm({
  cdr3SearchTerm,
  setSearchText,
  setSearchResults,
  setCurrentPage,
  setLoadingResults,
  dropdownFilters,
  setDropdownFilters,
  selectedTags = [],
  selectedCategories = []
}) {
  const { 
    data: curatedAnnotationFiltersData, 
    loading: filtersLoading
  } = useCuratedAnnotationsFiltersQuery();

  const filters = curatedAnnotationFiltersData?.curatedAnnotationFilters ?? [];
  // const [selectedTags, setSelectedTags] = useState([]);
  // const [selectedCategories, setSelectedCategories] = useState([])
  const { data: tags } = useQuery(gql`
    query TagNames {
      tagNames
    }
  `);
  const { data: categories } = useQuery(gql`
    query TagCategories {
      tagCategories
    }  
  `)

  const [findCDR3s, { data, loading }] = useLazyQuery(gql`
    query FindCDR3s ($input: CDR3SearchInput!, $skip: Int!, $limit: Int!) {
      findCDR3sPaged(input: $input, skip: $skip, limit: $limit) {
        items {
        variableID
        projectID
        datasetName
        projectName
        cdr3b
        reference
        trbv
        trbj
        cdr3a
        mhc
        mhcClass
        epitopeAAseq
        epitopeGene
        epitopeSpecies
        mutation
        recognizesWTEpitope
        uniProt
        score
        tags {
          tagID
          name
          category
        }
      }
      totalCount
    }
    }
  `);

  if (loading) {
    setLoadingResults(true);
  } else {
    setLoadingResults(false);
  }
  const [debouncedSearchText] = useDebounce(cdr3SearchTerm, 1000);
  const handleSearch = () => {
    // if (debouncedSearchText) {
      setLoadingResults(true);
      findCDR3s({
        variables: {
          input: {
            cdr3b: debouncedSearchText || '',
            tags: selectedTags,
            categories: selectedCategories,
            filters: Object.entries(dropdownFilters).reduce(
              (acc, [key, value]) => {
                if (Array.isArray(value) && value.length  > 0) {
                  acc[key] = value;
                }
                return acc;
              }, {}
            ),
            // The difference factor determines the fuzziness of the search.
            // It must be a value between 0 and 1.
            // Higher factor values result in more fuzziness.
            differenceFactor: 0.2
          },
          skip: 0,
          limit:5000,
        },
      });
    // }
  };

  const location = useLocation();

  // function toggleCategory(category) {
  //   if (!selectedCategories.includes(category)) {
  //     setSelectedCategories((prev) => [...prev, category])
  //   } else {
  //     setSelectedCategories((prev) => prev.filter((cat) => cat !== category))
  //   }
  // }

  useEffect(() => {
    handleSearch();
  }, [location.key, debouncedSearchText, dropdownFilters, selectedTags, selectedCategories]);

  useEffect(() => {
    setSearchResults(data?.findCDR3sPaged?.items ?? []);
    // setLoadingResults(false);
    setCurrentPage(1);

  }, [data])

  return (
      <Form onSubmit={handleSearch}>
        {/* <Form.Field
          control={Input}
          label="Search by CDR3b sequence(s)"
          placeholder="CASS | CASSYS | ..."
          value={searchText}
          onChange={(_e, { value }) => setSearchText(value)}
          size="huge"
        /> */}
        {/* <Form.Field label="Filter by tag categories" />
        <Form.Group inline>
          {
            categories?.tagCategories?.map((category) => 
              <Button
                key={category}
                content={category ?? 'other'} 
                size='tiny'
                basic={!selectedCategories.includes(category)}
                color={tagColors[category] ?? 'black'}
                onClick={() => toggleCategory(category)}
              />
            )
          }
        </Form.Group>
        <Form.Field
          control={Select}
          multiple
          options={tags?.tagNames.map((tag) => ({key: tag, value: tag, text: tag})) ?? []}
          placeholder='Select tags...'
          label="Filter by tag(s)"
          onChange={(_e, { value }) => setSelectedTags(value)}
        /> */}
        {/* <Segment as={Grid} loading={filtersLoading}>
          {filters.map((filter) => (
            <Grid.Column width={3} key={filter.filterKey}>
              <DropdownOptions {...{ ...filter, setDropdownFilters, dropdownFilters }} />
            </Grid.Column>
          ))}
        </Segment> */}
        {/* <Button
          fluid
          size="large"
          color="teal"
          animated="vertical"
          type="submit"
        >
          <Button.Content visible>
            <Icon name="search" />
          </Button.Content>
          <Button.Content hidden content="Search TIGERdb" />
        </Button> */}
      </Form>
  );
}

function CSVDownloadButton({ searchResults }) {
  return (
    <CSVLink
      filename={`${uuidv4()}_tigerdb_query_export.csv`}
      data={searchResults.map((result) => {
        const { __typename, ...item } = result;
        return item;
      })}
    >
      <Popup
        flowing
        on="hover"
        inverted
        position="top center"
        trigger={
          <Button
            // basic
            inverted
            color="green"
            fluid
            icon="file excel"
            content={`Export all results as a CSV`}
          />
        }
        content="Click to download"
      ></Popup>
    </CSVLink>
  );
}

function ResultsPager({
  currentPage,
  totalPages,
  start,
  end,
  totalResults,
  setCurrentPage,
}) {
  return (
    <Divider horizontal>
      <Header as="h4">
        <Button.Group size="massive">
          <Button
            icon
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            <Icon name="chevron left" />
          </Button>
        </Button.Group>
        <span>
          Showing {start} to {end} of {totalResults} results{" "}
        </span>
        <Button.Group size="massive">
          <Button
            icon
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <Icon name="chevron right" />
          </Button>
        </Button.Group>
      </Header>
    </Divider>
  );
}

export default function AnnotationsList({ cdr3SearchTerm, selectedTags, selectedCategories }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const startResultNumber = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endResultNumber = Math.min(
    currentPage * ITEMS_PER_PAGE,
    searchResults.length
  );
  const [dropdownFilters, setDropdownFilters] = useState({
    // locus: ["TRB"],
    trbv: [],
    trbj: [],
    trav: [],
    traj: [],
    mhc: [],
    mhcClass: [],
    epitopeGene: [],
    epitopeAAseq: [],
    epitopeSpecies: [],
    mutation: [],
    recognizesWTEpitope: [],
    reference: [],
    uniProt: []
  });

  let toolsComponents;

  if (loadingResults) {
    toolsComponents = (
      <Segment placeholder textAlign="center">
        <Dimmer active inverted>
          <Loader size="large">Loading...</Loader>
        </Dimmer>
      </Segment>
    );
  // } else if (searchResults.length === 0) {
  //   toolsComponents = (
  //     <SegmentPlaceholder
  //       basic
  //       icon="exclamation circle"
  //       text="No Search Results Found!"
  //     />
  //   );
  } else {
    toolsComponents = (
      <>
        <CSVDownloadButton searchResults={searchResults} />
        <ResultsPager
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          start={startResultNumber}
          end={endResultNumber}
          totalPages={totalPages}
          totalResults={searchResults.length}
        />
      </>
    );
  }

  return (
    <>
      {/* <Divider horizontal content="SEARCH" /> */}
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        setCurrentPage={setCurrentPage}
        setLoadingResults={setLoadingResults}
        dropdownFilters={dropdownFilters}
        setDropdownFilters={setDropdownFilters}
        cdr3SearchTerm={cdr3SearchTerm}
        selectedTags={selectedTags}
        selectedCategories={selectedCategories}
      />
      {/* <Divider horizontal content="RESULTS" /> */}
      <Message>
        {toolsComponents}
        <Container>
          <List selection size="massive" key="annotationVariable">
            {searchResults
              .slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
              )
              .map((result) => (
                <AnnotationListItem
                  key={result.variableID}
                  variable={result}
                  // searchText={cdr3SearchTerm}
                  cdr3SearchTerm={cdr3SearchTerm ?? searchText}
                  dropdownFilters={dropdownFilters}
                />
              ))}
          </List>
        </Container>
        {searchResults.length > 0 && (
          <ResultsPager
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            start={startResultNumber}
            end={endResultNumber}
            totalPages={totalPages}
            totalResults={searchResults.length}
          />
        )}
      </Message>
    </>
  );
}