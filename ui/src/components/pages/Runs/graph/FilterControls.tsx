import React, { useState, useEffect } from 'react'
import { Header } from "semantic-ui-react"
import { findByNumberOfConnections, findByPatternContains, findByPatternLength, findClusters } from './utils'

const DEFAULT_CLUSTER_SIZE = 5
const DEFAULT_PATTERN_LENGTH = 5
const DEFAULT_NUMBER_OF_CONNECTIONS = 4

export default function FilterControls({ data, hiddenGroups, updateGraphData }: Readonly<{ data: { nodes: any[], links: any[] }, hiddenGroups: Set<string | null>, updateGraphData: (data: { nodes: any[], links: any[] }) => void }>) {
  const [minClusterSize, setMinClusterSize] = useState(DEFAULT_CLUSTER_SIZE)
  const [patternLength, setPatternLength] = useState(DEFAULT_PATTERN_LENGTH)
  const [numberOfConnections, setNumberOfConnections] = useState(DEFAULT_NUMBER_OF_CONNECTIONS)
  const [patternContains, setPatternContains] = useState('')

  useEffect(() => {
    let filteredNodes = data.nodes.filter(n => !hiddenGroups.has(n.group || null))
    const validNodeIds = new Set(filteredNodes.map(n => n.id))
    let filteredLinks = data.links.filter(l => {
      const sourceId = typeof l.source === 'object' ? l.source.id : l.source
      const targetId = typeof l.target === 'object' ? l.target.id : l.target
      return validNodeIds.has(sourceId) && validNodeIds.has(targetId)
    })

    filteredNodes = filteredNodes.map((n: any) => ({ ...n }))
    filteredLinks = filteredLinks.map((l: any) => ({ ...l }))

    const clusters = findClusters(filteredNodes, filteredLinks, minClusterSize)
    const dataWithPatterns = findByPatternLength(clusters.nodes, clusters.links, patternLength)
    const dataWithConnections = findByNumberOfConnections(
      dataWithPatterns.nodes,
      dataWithPatterns.links,
      numberOfConnections
    )
    const dataWithPatternContains = findByPatternContains(
      dataWithConnections.nodes,
      dataWithConnections.links,
      patternContains
    )
    updateGraphData(dataWithPatternContains)
  }, [minClusterSize, patternLength, numberOfConnections, patternContains, data, hiddenGroups])

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px' }}>
      <Header as='h4'>Filter Clusters</Header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Minimum Cluster Size:</span>
        <input
          type='number'
          value={minClusterSize}
          onChange={e => setMinClusterSize(Number(e.target.value))}
          style={{ marginLeft: '10px', width: '60px' }}
          min={1}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Pattern length:</span>
        <input
          type='number'
          value={patternLength}
          onChange={e => setPatternLength(Number(e.target.value))}
          style={{ marginLeft: '10px', width: '60px' }}
          min={1}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Pattern contains:</span>
        <input
          type='text'
          value={patternContains}
          onChange={e => setPatternContains(e.target.value)}
          style={{ marginLeft: '10px', width: '120px' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>Number of Connections:</span>
        <input
          type='number'
          value={numberOfConnections}
          onChange={e => setNumberOfConnections(Number(e.target.value))}
          style={{ marginLeft: '10px', width: '60px' }}
          min={1}
        />
      </div>
    </div>
  )
}