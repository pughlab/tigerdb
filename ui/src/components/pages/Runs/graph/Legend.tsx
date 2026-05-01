import React from 'react'
import { Header } from "semantic-ui-react"

export default function Legend({ nodes, mode, colorScale, hiddenGroups, toggleGroup }: Readonly<{ nodes: any[], mode: 'source' | 'community' ,colorScale: any, hiddenGroups: Set<string | null>, toggleGroup: (group: string) => void }>) {
  const groups = Array
    .from(new Set(nodes.map(n => mode === 'source' ? n.color : n.group)))
    .sort((a, b) => a - b)
  const sources = new Map(nodes.map(node => [node.color, node.source]))
  return (
    <div style={{ position: 'absolute', top: 85, left: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px', width: '255px', height: '360px', overflowY: "auto" }}>
      <Header as='h4'>Legend</Header>
      {[...groups].map((group) => {
        const color = mode === 'source' ? group : colorScale(group) || "#ffffff"
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
            onClick={() => {
              if (mode === 'community') {
                toggleGroup(group)
              }
            }}
          >
            <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px', borderRadius: '50%' }}></div>
            <span style={{ fontSize: "1rem" }}>{mode === 'source' ? `${sources.get(group)}` : `Community ${group}`}</span>
          </div>
        )
      })}
    </div>
  )
}