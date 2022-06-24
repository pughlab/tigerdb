import * as React from 'react'
import { useState, useMemo, useCallback, useEffect, useReducer } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { listBasicMinio, minioDeleteQuery, minioUploadQuery } from '../graphql/queries'

import { Accordion, AccordionPanel, AccordionPanelProps, Button, Form, Grid, Icon, Item, Label, List, Menu, Rail, Segment, SemanticShorthandCollection, Table } from 'semantic-ui-react'
import * as R from 'ramda'
import Dropzone, { FileWithPath, useDropzone } from 'react-dropzone'
import MyReactTable from './MyReactTable'
import { Column, useTable } from 'react-table'
import { Category, DataFile, Maybe, Timepoint, Basic } from '../types/types'
import { refetchType } from '../types/ui-types'
import parse from 'csv-parse/lib/sync'
import * as F from 'fp-ts/function'
import * as RA from 'ramda-adjunct'

const styleFloatRight = {
  float: 'right'
} as React.CSSProperties

const styleBlack = {
  color: '#000000'
} as React.CSSProperties

const styleInline = {
  display: 'inline'
} as React.CSSProperties

const UploadComp = ({keyPath, refetch}:{keyPath: string, refetch: refetchType}) => {
  const [
    minioUpload,
    {loading: minioUploadLoading, data: minioUploadData, error: minioUploadErr}
  ] = useMutation(minioUploadQuery, {
    onCompleted: () => refetch()
  })

  const onDrop = useCallback((files: FileWithPath[]) => {
    const fileName = R.prop('path', files[0])
    minioUpload({
      variables: {
        bucketName: 'basic',
        objectName: `${keyPath}/${fileName}`,
        file: R.head(files)
      }
    })
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div style={styleInline} {...getRootProps()}>
      <input {...getInputProps()} />
      <Icon name='upload' />
    </div>
  )
}

const Questionnaires = () => {
  const reducer = (state: object, action: {type: string, payload?: number}) => {
    if (action.payload) {

      const isAllData = R.equals('All Data', action.type)

      const filtered = F.pipe(
        state,
        R.keys,
        isAllData ?  R.identity : R.filter(R.startsWith(action.type)),
        R.map(F.flow(
          isAllData ? R.identity : R.replace(action.type, ''),
          R.split('/'),
          isAllData ? R.nth(0) : R.nth(1),
        )),
        R.uniq,
        RA.compact,
        isAllData ? R.identity : F.flow(R.map(R.concat(`${action.type}/`)), R.append(action.type)),
      )
      
      // console.log(filtered)

      return R.reduce((state: object, type: string) => R.evolve({[type]: R.always(action.payload)}, state), state, filtered)
    } else {
      return R.ifElse(
        R.has(action.type),
        R.evolve({[action.type]: R.multiply(-1)}),
        R.assoc(action.type, -1),
      )(state)
    }
    
    
  }

  const [state, dispatch] = useReducer(reducer, {'All Data': 1})

  const {loading, data, error, refetch} = useQuery(listBasicMinio, {
    onCompleted: data => {
      const { listBasicMinio }: { listBasicMinio: Basic } = data

      listBasicMinio['studies'].map(({name: studyName, timepoints}: {name: string, timepoints: Timepoint[]} ) => {
        timepoints.map(({name: timepointName, categories}: {name: string, categories: Category[]}) => {
          categories.map(({name: categoryName, datafiles}: {name: string, datafiles: DataFile[]}) => {
            datafiles.map(({name: datafileName, etag, presignedUrl}: DataFile) => {
              dispatch({type: `${studyName}/${timepointName}/${categoryName}/${datafileName}`})
            })
            dispatch({type: `${studyName}/${timepointName}/${categoryName}`})
          })
          dispatch({type: `${studyName}/${timepointName}`})
        })
        dispatch({type: `${studyName}`})
      })

    }
  })

  const [
    minioDelete,
    {loading: minioDeleteLoading, data: minioDeleteData, error: minioDeleteErr}
  ] = useMutation(minioDeleteQuery)

  const [tableData, setTableData] = useState([])
  const [tableColumns, setTableColumns] = useState([])

  const getTableData = async (presignedUrl: string) => {
    const response = await fetch(presignedUrl)
    const text = await response.text()
    try {
      const csv = parse(text, { columns: true })
      const columns: any = R.compose(R.map((col: string) => ({Header: col, accessor: col})), R.keys)(csv[0])
      setTableData(csv)
      setTableColumns(columns)
      // console.log(csv)
      // console.log(columns)
    } catch (error) {
      console.log('Cannot display invalid csv')
      console.log(error)
      setTableData([])
      setTableColumns([])
    }
  }

  if (loading) {
    return null
  }

  const minioAccordian = (data: { listBasicMinio: Basic }) => {
    const { listBasicMinio } = data

    const genAccordion = (keyPath: string, label: string, level: string,
                          cnt: JSX.Element[] | JSX.Element) => {
      return ({
        key: keyPath,
        title: {
          children:
            <div>
              <Icon name='dropdown' onClick={() => dispatch({type: keyPath})}/>
              <a style={styleBlack} onClick={() => dispatch({type: keyPath})}>{label}</a>
              <div style={styleFloatRight}>
                {!R.equals(level, 'category') && <Icon name='plus' onClick={() => dispatch({type: keyPath, payload: 1})}></Icon>}
                {!R.equals(level, 'category') && <Icon name='minus' onClick={() => dispatch({type: keyPath, payload: -1})}></Icon>}
                {R.equals(level, 'category') && (<UploadComp keyPath={keyPath} refetch={refetch}/>)}
                {/* <Icon name='trash' onClick={() => dispatch({type: keyPath})}></Icon> */}
              </div>
            </div>
        },
        active: state[keyPath] == 1,
        content: {content: cnt}
      })
    }

    const cnt0 = listBasicMinio['studies'].map(({name: studyName, timepoints}: {name: string, timepoints: Timepoint[]} ) => {
      const cnt1 = timepoints.map(({name: timepointName, categories}: {name: string, categories: Category[]}) => {
        const cnt2 = categories.map(({name: categoryName, datafiles}: {name: string, datafiles: DataFile[]}) => {
          const cnt3 = datafiles.map(({name: datafileName, etag, presignedUrl}: DataFile) => {
            const path = `${studyName}/${timepointName}/${categoryName}/${datafileName}`
            const cnt4 = (
              <div>
                <a href={presignedUrl}>{datafileName}</a>
                <div style={styleFloatRight}>
                  <Icon name='eye' onClick={() => getTableData(presignedUrl)}></Icon>
                  <Icon name='trash' onClick={() => {
                    minioDelete({ variables:{bucketName: 'basic', objectName: path}})
                    refetch()
                  }}></Icon>
                </div>
              </div>
            )
            return cnt4
          })
          return genAccordion(`${studyName}/${timepointName}/${categoryName}`, categoryName, 'category', cnt3)
        })
        return genAccordion(`${studyName}/${timepointName}`, timepointName, 'timepoint',
                            <Accordion.Accordion exclusive={false} panels={cnt2}/>)
      })
      return genAccordion(studyName, studyName, 'study',
                          <Accordion.Accordion exclusive={false} panels={cnt1}/>)
    })
    return [genAccordion('All Data', 'All Data', 'All Data', <Accordion.Accordion exclusive={false} panels={cnt0}/>)]

  }

  return (
    <>
      <Grid columns={2}>
        <Grid.Column>
          {!loading && data &&
              <Accordion exclusive={false} panels={minioAccordian(data)} styled />}
        </Grid.Column>
        <Grid.Column>
          {/* <Grid.Row>
            <pre>
              {JSON.stringify(state, null, 2)}
            </pre>
          </Grid.Row> */}
          <Grid.Row>
            {
              R.none(R.equals([]), [tableColumns, tableData])
              ?
                <QuestionnaireTable
                  columns={tableColumns}
                  data={tableData}
                />
              :
                'No Data'
            }
          </Grid.Row>
        </Grid.Column>
      </Grid>
      
      {/* <pre>
        {JSON.stringify(data, null, 2)}
      </pre> */}

      {/* <pre>
        {JSON.stringify(state, null, 2)}
      </pre> */}
    </>
  )
}

const QuestionnaireTable = ({ columns, data } : { columns: Column<object>[], data: object[] }) => {
  
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <Table {...getTableProps()}>
      <Table.Header>
        {headerGroups.map(headerGroup => (
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Table.HeaderCell {...column.getHeaderProps()}>{column.render('Header')}</Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <Table.Row {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <Table.Cell {...cell.getCellProps()}>{cell.render('Cell')}</Table.Cell>
              })}
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default Questionnaires
