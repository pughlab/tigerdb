import React, { useState } from 'react'
import {Button, Header} from "semantic-ui-react"
import {ApolloQueryResult} from "@apollo/client";

const DEFAULT_COMMUNITY_SIZE = 4

export default function FilterControls({ refetchGraph }: Readonly<{
    refetchGraph: (variables?: (Partial<{
        minCommunitySize?: number,
        cdr3bContains?: string
    }> | undefined)) => Promise<ApolloQueryResult<any>>
}>) {
  const [minCommunitySize, setMinCommunitySize] = useState(DEFAULT_COMMUNITY_SIZE)
  const [cdr3bContains, setCdr3bContains] = useState('')

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px' }}>
      <Header as='h4'>Filter Clusters</Header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Minimum Community Size:</span>
        <input
          type='number'
          value={minCommunitySize}
          onChange={e => setMinCommunitySize(Number(e.target.value))}
          style={{ marginLeft: '10px', width: '60px' }}
          min={DEFAULT_COMMUNITY_SIZE}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>TCR CDR3b contains:</span>
        <input
          type='text'
          value={cdr3bContains}
          onChange={e => setCdr3bContains(e.target.value)}
          style={{ marginLeft: '10px', width: '120px' }}
        />
      </div>
      <Button color={"teal"} content={"Update Graph"} onClick={() => refetchGraph({
        minCommunitySize,
        cdr3bContains
      })} />
    </div>
  )
}