import { useEffect, useState } from 'react'
import * as React from 'react'
import { Button, Form, Header, Label, Input, Container, Segment, Dimmer, Loader, Message, List, Divider, Dropdown, Grid, Card, Icon, Popup, Select, ButtonGroup, ButtonOr, Checkbox } from 'semantic-ui-react'
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
  searchText,
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
  let searchTerms = searchText
    .split("|")
    .map((term) => term.trim())
    .filter((term) => term.length > 0);
  let highlightedCDR3b = cdr3b;

  searchTerms.forEach((term) => {
    // Create a case-insensitive regular expression for each term
    let regex = new RegExp(term, "gi");
    highlightedCDR3b = highlightedCDR3b?.replace(
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

function ProjectsListItem({ project }) {
  const { projectID, name, description, createdBy, datasets, isPublic, createdOn, isReference } = project
  const creationDate = new Date(createdOn).toDateString()
  const { navigate } = useRouter()
  const tags = new Set();
  datasets?.forEach((dataset) => {
    dataset.tags?.forEach((tag) => {
      tags.add(tag);
    });
  });
  const color = isPublic ? 'black' : 'facebook'
  return (
    <List.Item>
      <Card link color={color} fluid onClick={() => { navigate(projectID) }}>
        <Popup
          size='large' wide='very' position="top center"
          trigger={
            <Button attached='top' size='large' color={isReference ? 'black' : undefined}>
              <Icon name='folder open' size='large' />
            </Button>
          }        
        >
          {/* {project.isPublic ? 'Public' : 'Private'} project */}
          <Message size='mini'>
            <Message.Content>
              <Divider horizontal content='Details' />
              {description}
            </Message.Content>
          </Message>
          <Segment.Group>
            <Segment>
              <Label.Group>
                <Label>
                  <Icon name='user' />
                  {'Created by'}
                  <Label.Detail content={createdBy.name} />
                  <Label.Detail content={createdBy.email} />
                </Label>
                <Label >
                  <Icon name='calendar alternate outline' />
                  {'Created on'}
                  <Label.Detail content={creationDate}  />
                </Label>
              </Label.Group>
            </Segment>
          </Segment.Group>
        </Popup>
        <Card.Content extra>
          <Header size='medium'>
            {name}
          </Header>
          <Label.Group>
            <Label color={color} as={Button} content={<Icon style={{margin: 0}} name={isPublic ? 'lock open' : 'lock'} />} detail={isPublic ? 'Public' : 'Private'} />
            <Label content={<Icon style={{margin: 0}} name='user' />} detail={createdBy.name} />
            <Label content={<Icon style={{margin: 0}} name='calendar alternate outline' />} detail={creationDate} />
            {
              (datasets.length > 0) && (
                <>
                  <Divider horizontal content="Data" />
                  {
                    datasets.map(dataset => <Label color='blue' key={dataset.datasetID} content={dataset.name} />)
                  }
                </>
              )
            }
            { tags.size > 0 && (
              <>
                <Divider horizontal content="Tags"/>
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
              </>
            )}
          </Label.Group>
        </Card.Content>
      </Card>
    </List.Item>
  )
}

function SearchForm({
  searchText,
  viewAsCDRs,
  setSearchText,
  setSearchResults,
  setCurrentPage,
  setLoadingResults,
  dropdownFilters,
  setDropdownFilters,
  setViewAsCDRs,
}) {
  const { 
    data: curatedAnnotationFiltersData, 
    loading: filtersLoading
  } = useCuratedAnnotationsFiltersQuery();

  const filters = curatedAnnotationFiltersData?.curatedAnnotationFilters ?? [];
  const [searchByCDRs, setSearchByCDRs] = useState(false)
  const [cdr3bSearch, setCdr3bSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([])
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

  const [findCDR3s, { data: cdr3Data }] = useLazyQuery(gql`
    query FindCDR3s ($input: CDR3SearchInput!) {
      findCDR3s(input: $input) {
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
    }
  `);
  const [findProjects, { data: projectData }] = useLazyQuery(gql`
    query getProjects($query: String) {
      getProjects (query: $query){
        projectID
        name
        description
        datasets {
          datasetID
          name
          tags {
            tagID
            name
            category
          }
          minioUpload {
            objectName
            filename
          }
        }
        createdBy {
          keycloakUserID
          email
          name
        }
        createdOn
        isPublic
        isReference
      }
    }
  `)
  const [debouncedSearchText] = useDebounce(searchText, 1000);
  const doSearch = (searchByCDR3s: boolean, variables: any) => {
    setLoadingResults(true);
    if(searchByCDR3s) {
      findCDR3s({
        variables,
      });
    } else {
      findProjects({
        variables,
      })
    }
  };

  const handleSearch = () => {
    const hasSearchResults = projectData?.getProjects?.length > 0 || cdr3Data?.findCDR3s?.length > 0
    if (hasSearchResults && viewAsCDRs && !searchByCDRs) {
      // get CDR3s for the projects and search by CDR3s
      const projectIDs = new Set(projectData.getProjects.map((project) => project.projectID))
      doSearch(true, {
        input: {
          projectIDs: projectIDs,
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
      })
    } else if (hasSearchResults && searchByCDRs) {
      // get project IDs from the current CDR3s and search by projects
      const projectIDs = new Set(cdr3Data.findCDR3s.map((cdr3) => cdr3.projectID))
      doSearch(false, {
        projectIDs: [...projectIDs],
      })
    } else if (!hasSearchResults && searchByCDRs) {
      // search by CDR3s
      doSearch(true, {
        input: {
          cdr3b: debouncedSearchText,
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
          differenceFactor: 0.2
        },
      })
    } else {
      // search by projects
      doSearch(false, {
        query: debouncedSearchText
      })
    }
  }

  const location = useLocation();

  function toggleCategory(category) {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category))
    }
  }

  function handleCdr3bSearch(value: string) {
    setCdr3bSearch(value)
    if (value.trim() !== "") {
      setNameSearch('')
      setSearchByCDRs(true)
      setSearchText(value)
    }
  }

  function handleNameSearch(value: string) {
    setNameSearch(value)
    if (value.trim() !== "") {
      setCdr3bSearch('')
      setSearchByCDRs(false)
      setSearchText(value)
    }
  }

  useEffect(() => {
    handleSearch();
  }, [location.key, debouncedSearchText]);

  useEffect(() => {
    setViewAsCDRs(searchByCDRs)
  }, [searchByCDRs])

  useEffect(() => {
    setSearchResults(cdr3Data?.findCDR3s ?? []);
    setLoadingResults(false);
    setCurrentPage(1);
  }, [cdr3Data])

  useEffect(() => {
    setSearchResults(projectData?.getProjects ?? []);
    setLoadingResults(false);
    setCurrentPage(1);
  }, [projectData])

  return (
    <Segment>
      <Form onSubmit={handleSearch}>
        <Form.Field label="Search projects or CDR3b sequences" />
        <ButtonGroup fluid>
          <Button compact style={{backgroundColor: 'white'}}>
            <Input 
              fluid
              placeholder='Search CDR3b sequences (CASS | CASSYS | ...)...'
              value={cdr3bSearch}
              onChange={(_e, {value}) => handleCdr3bSearch(value)}
            />
          </Button>
          <ButtonOr />
          <Button compact style={{backgroundColor: 'white'}}>
            <Input
              fluid
              placeholder='Search projects by name, description, tags or tag categories...'
              value={nameSearch}
              onChange={(_e, {value}) => handleNameSearch(value)}
            />
          </Button>
        </ButtonGroup>
        <Form.Field label="Filter CDR3b sequences by tag categories" />
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
          label="Filter CDR3b sequences by tag(s)"
          onChange={(_e, { value }) => setSelectedTags(value)}
        />
        <Checkbox
          label='View results as CDR3s'
          checked={viewAsCDRs}
          toggle
          onChange={() => setViewAsCDRs(!viewAsCDRs)}
        />
        <Segment as={Grid} loading={filtersLoading}>
          {filters.map((filter) => (
            <Grid.Column width={3} key={filter.filterKey}>
              <DropdownOptions {...{ ...filter, setDropdownFilters, dropdownFilters }} />
            </Grid.Column>
          ))}
        </Segment>
        <Button
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
        </Button>
      </Form>
    </Segment>
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
            basic
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

export default function AnnotationsProjectsList() {
  const [viewAsCDRs, setViewAsCDRs] = useState(false)
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
  } else if (searchResults.length === 0) {
    toolsComponents = (
      <SegmentPlaceholder
        basic
        icon="exclamation circle"
        text="No Search Results Found!"
      />
    );
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
      <Divider horizontal content="SEARCH" />
      <SearchForm
        searchText={searchText}
        viewAsCDRs={viewAsCDRs}
        setViewAsCDRs={setViewAsCDRs}
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
        setCurrentPage={setCurrentPage}
        setLoadingResults={setLoadingResults}
        dropdownFilters={dropdownFilters}
        setDropdownFilters={setDropdownFilters}
      />
      
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
                viewAsCDRs ? <AnnotationListItem
                  key={result.variableID}
                  variable={result}
                  searchText={searchText}
                  dropdownFilters={dropdownFilters}
                /> : <ProjectsListItem project={result} />
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