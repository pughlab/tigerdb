import * as React from 'react'
import { useEffect, useState } from 'react'
import {   useTable, usePagination, Cell } from 'react-table'
import { Table, Button, Input, Form, Select, Segment, Label, FormField  } from 'semantic-ui-react'

import styled from 'styled-components'
const Styles = styled.div`
  padding: 1rem;
  ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${'' /* These styles are required for a horizontaly scrollable table overflow */}
  overflow: auto;

  .pagination {
    padding: 0.5rem;
  }

  .table {
    border-spacing: 0;
    border: 1px solid black;

    .thead {
      ${'' /* These styles are required for a scrollable body to align with the header properly */}
      overflow-y: auto;
      overflow-x: hidden;
    }

    .tbody {
      ${'' /* These styles are required for a scrollable table body */}
      overflow-y: scroll;
      overflow-x: hidden;
      height: 250px;
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
      border-bottom: 1px solid black;
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`


export default function UploadPreviewTable ({data, columns, header=false, validator} : {data: any, columns: any, header: boolean, validator?: (cell:any) => any}) {
  const controlledPageCount: number = 10
  const {
    getTableProps, getTableBodyProps,
    headerGroups, prepareRow, page,
    canPreviousPage, canNextPage,
    pageOptions, pageCount,
    gotoPage, nextPage,
    previousPage, setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  const hasValidator = !!validator
  const validateCell = (cell:any) => hasValidator ? validator(cell) : false
  return (
    <>
    <div className="pagination">
        <Form>
          <Form.Group inline>
            <Form.Field>
              <Button.Group>
                <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} content='<<' />
                <Button onClick={() => previousPage()} disabled={!canPreviousPage} content='<' />
                <Button onClick={() => nextPage()} disabled={!canNextPage} content='>' />
                <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} content='>>' />
              </Button.Group>
            </Form.Field>
            <Form.Field>
              <Input label={`Page ${pageIndex + 1} of ${pageOptions.length} | Go to page`} placeholder='...'
                type="number"
                min={1}
                max={pageOptions.length }
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
              />
            </Form.Field>

            <Form.Field>
                <select
                  value={pageSize}
                  onChange={e => {
                    setPageSize(Number(e.target.value))
                  }}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      {`Show ${pageSize}`}
                    </option>
                  ))}
                </select>
            </Form.Field>
            <Form.Field>
              <Label content={`${data.length} rows`} />
              <Label content={`${Object.keys(data[0]).length} columns `} />
            </Form.Field>
          </Form.Group>
        </Form>
    </div>
    <Styles>
      
      <div className="tableWrap">
      
      <Table {...getTableProps()}>
        {
          header &&
          <Table.Header>
            {
              headerGroups.map(headerGroup => (
                <Table.Row {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map(column => (
                      <Table.HeaderCell {...column.getHeaderProps()}>
                        {column.render('Header')}
                      </Table.HeaderCell>
                    ))
                  }
                </Table.Row>
              ))
            }
          </Table.Header>
        }
      <tbody {...getTableBodyProps()}>

      </tbody>
      <Table.Body {...getTableBodyProps()}>
        {page.map((row, i) => {
            prepareRow(row)
            return (
              <Table.Row {...row.getRowProps()}>
                {row.cells.map(cell => {
                    const cellValidWarningProp = {warning: !validateCell(cell)}
                    // console.log(cellValidWarningProp)
                    return (
                      <Table.Cell {...cell.getCellProps()} {... cellValidWarningProp}>
                        {cell.render('Cell')}
                      </Table.Cell>
                    )
                })}
              </Table.Row>
            )
        })}
      </Table.Body>
    </Table>
    

        </div>
        
    </Styles>
    </>
  )
}