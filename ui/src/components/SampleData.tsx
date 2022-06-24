import * as React from 'react'
import { useState, useMemo, useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import MyReactTable from './MyReactTable'
import { Menu } from 'semantic-ui-react'
import { SampleGroupAccordian } from './SampleGroupAccordion'
import { DeleteDataButton, LoadDataButton } from './DataButtons'
import { sampleDataQuery, subjectCountQuery } from '../graphql/queries'
import { Sample, Subject } from '../types/types'

const DatabaseMenuLeft = () => {
  return (
    <Menu.Menu position='left'>
      <Menu.Item>IMiC Sample Data</Menu.Item>
    </Menu.Menu>
  )
}

const DatabaseMenuRight = () => {
  return (
    <Menu.Menu position='right'>
      <Menu.Item icon='search' />
      <Menu.Item icon='download' />
      <Menu.Item icon='print' />
      <Menu.Item icon='list' />
      <Menu.Item icon='filter' />
    </Menu.Menu>
  )
}

const DatabaseMenuTop = () => {
  return (
    <Menu>
      <DatabaseMenuLeft />
      <DatabaseMenuRight />
    </Menu>
  )
}

const SampleData = () => {
  const [d2, setd2] = useState([])
  const [pageCount, setPageCount] = React.useState(0)
  const [pageSize, setPageSize] = useState(1)
  const [offset, setOffset] = useState(0)
  const fetchIdRef = React.useRef(0)
  
  const columns = useMemo(
    () => [
      {Header: "Subject Data",
      columns: [
          {
            Header: "Subject ID",
            accessor: "subjectId"
          },
      ]
      },
      {
        Header: "Hormones",
        columns: [
          {
            Header: "Milk Leptin",
            accessor: "milk_leptin"
          },
          {
            Header: "Milk Adiponectin",
            accessor: "milk_adiponectin"
          },
          {
            Header: "Milk Insulin",
            accessor: "milk_insulin"
          },
        ]
      },
    ],
    []
  );

  const {loading, data, error, refetch} = useQuery(sampleDataQuery, {
    variables: {
      first: pageSize,
      offset: offset,
    },
    onCompleted: data => {
      // console.log(data['Subject'].map(x => x['subjectId']))
      setd2(data.Subject.map(dsubject).flat())
      !!data2 && setPageCount(Math.ceil(data2.subjectCount / pageSize))
    },
    notifyOnNetworkStatusChange: true,
  })

  const { loading: loading2, data: data2, error: error2, refetch: refetch2 } = useQuery(subjectCountQuery, {
    onCompleted: data => {
      setPageCount(Math.ceil(data.subjectCount / pageSize))
    },
    notifyOnNetworkStatusChange: true
  })

  const refetchAll = () => {
    refetch()
    refetch2()
  }

  const dsubject = (subject: Subject) => {
    const {subjectId, sample} = subject
    const red = (acc: object, curr: object) => ({...acc, ...curr})
    const s2 = sample.map(dsample)
    const ret = {subjectId, ...s2.reduce(red, {})}
    return ret
  }
  const dsample = (sample: Sample) => {
    const {sampleDatum: {sampleDatumName}, sampleValue} = sample
    return {[sampleDatumName]: sampleValue}
  }

  const fetchData = useCallback(({ pageSize, pageIndex }: {pageSize: number, pageIndex: number}) => {
    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current

    if (fetchId === fetchIdRef.current) {
      setOffset(pageIndex * pageSize)
      setPageSize(pageSize)
    }
  }, [])

  return (
    <>
      <div>
        <DeleteDataButton refetch={refetchAll}/>
        <LoadDataButton refetch={refetchAll}/>
      </div>
      <DatabaseMenuTop />
      <SampleGroupAccordian />
      <MyReactTable
        columns={columns}
        data={d2}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      />
    </>
  )
}

export default SampleData
