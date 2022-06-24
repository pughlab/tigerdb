import * as React from 'react'
import { useEffect } from 'react'
import { useTable, usePagination } from 'react-table'
import { Table, Button, Input, Select } from 'semantic-ui-react'

// Let's add a fetchData method to our Table component that will be used to fetch
// new data when pagination state changes
// We can also add a loading state to let our table know it's loading new data
const MyReactTable = ({
    columns,
    data,
    fetchData,
    loading,
    pageCount: controlledPageCount,
  } : {
    columns: any,
    data: any,
    fetchData: any,
    loading: any,
    pageCount: any,
  }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      // Get the state from the instance
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 }, // Pass our hoisted table state
        manualPagination: true, // Tell the usePagination
        // hook that we'll handle our own data fetching
        // This means we'll also have to provide our own
        // pageCount.
        pageCount: controlledPageCount,
      },
      usePagination
    )
  
    // Listen for changes in pagination and use the state to fetch our new data
    useEffect(() => {
      fetchData({ pageIndex, pageSize })
    }, [fetchData, pageIndex, pageSize])
  
    // Render the UI for your table
    return (
      <>
        {/* <pre>
          <code>
            {JSON.stringify(
              {
                pageIndex,
                pageSize,
                pageCount,
                canNextPage,
                canPreviousPage,
                controlledPageCount,
              },
              null,
              2
            )}
          </code>
        </pre> */}
        <Table {...getTableProps()}>
          <Table.Header>
            {headerGroups.map((headerGroup: any) => (
              <Table.Row {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any) => (
                  <Table.HeaderCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </Table.HeaderCell>
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body {...getTableBodyProps()}>
            {page.map((row: any, i: any) => {
              prepareRow(row)
              return (
                <Table.Row {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return <Table.Cell {...cell.getCellProps()}>{cell.render('Cell')}</Table.Cell>
                  })}
                </Table.Row>
              )
            })}
            <Table.Row>
              {
              loading ? (
                // Use our custom loading state to show a loading indicator
                <Table.Cell colSpan={10000}>Loading...</Table.Cell>
              ) : (
                <Table.Cell colSpan={10000}>
                  Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                  results
                </Table.Cell>
               )
              }
            </Table.Row>
          </Table.Body>
        </Table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <div className="pagination">
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </Button>{' '}
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </Button>{' '}
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </Button>{' '}
          <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </Button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <Input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    )
  }

export default MyReactTable