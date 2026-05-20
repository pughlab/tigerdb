import React from 'react'
import { Button } from "semantic-ui-react"

export default function Legend({ nodes, communities, mode, colorScale, hiddenGroups, groupOperations }: Readonly<{
  nodes: any[],
  mode: 'source' | 'community',
  communities: Map<string, any[]>,
  colorScale: any,
  hiddenGroups: Set<string | null>,
  groupOperations: {
    toggleGroup: (group: (string | null)) => void
    hideAllGroups: () => void
    showAllGroups: () => void
  }
}>) {
  const { toggleGroup, hideAllGroups, showAllGroups } = groupOperations
  const groups = mode === 'community'
    ? Array.from(communities.keys())
      .sort((a, b) => {
        const aLength = communities.get(a)?.length || 0
        const bLength = communities.get(b)?.length || 0
        return bLength - aLength
      })
    : Array.from(new Set(nodes.map(n => n.color)))
      .sort((a, b) => a - b)
  const sources = new Map(nodes.map(node => [node.color, node.source]))
  const numberOfCommunities = communities.size
  return (
    <div style={{ position: 'absolute', top: 85, left: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px', width: '255px', height: '360px', overflowY: "auto" }}>
      {mode === 'community' &&
        <>
          <h5>{`${numberOfCommunities} ${numberOfCommunities === 1 ? 'community' : 'communities'} (${hiddenGroups.size} hidden)`}</h5>
          <Button.Group size={'mini'} style={{ marginBottom: '10px' }}>
            <Button onClick={() => showAllGroups()}>Show all</Button>
            <Button.Or />
            <Button onClick={() => hideAllGroups()}>Hide all</Button>
          </Button.Group>
        </>
      }
      {[...groups].map((group) => {
        const color = mode === 'source' ? group : colorScale(group) || "#ffffff"
        const communitySize: number = communities.get(group)?.length || 0
        const nodeWord: string = communitySize === 1 ? 'node' : 'nodes'
        return (
          <div
            key={group}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '5px',
              cursor: 'pointer',
              opacity: hiddenGroups.has(group) ? 0.3 : 1
            }}
            role={"button"}
            onClick={() => {
              if (mode === 'community') {
                toggleGroup(group)
              }
            }}
          >
            <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px', borderRadius: '50%' }}></div>
            <span style={{ fontSize: "1rem" }}>{mode === 'source' ? `${sources.get(group)}` : `Community ${group} (${communitySize} ${nodeWord})`}</span>
          </div>
        )
      })}
    </div>
  )
}