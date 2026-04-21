import React from 'react'
import { Header } from "semantic-ui-react"

export default function Legend({ nodes, colorScale, hiddenGroups, toggleGroup }: Readonly<{ nodes: any[], colorScale: any, hiddenGroups: Set<string | null>, toggleGroup: (group: string) => void }>) {
  const groups = Array
    .from(new Set(nodes.filter(n => n.group !== "0").map(n => n.group)))
    .sort((a, b) => a - b)
  return (
    <div style={{ position: 'absolute', top: 50, left: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px' }}>
      <Header as='h4'>Legend</Header>
      {[...groups].map((group) => {
        const color = colorScale(group) || "#ffffff"
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
            onClick={() => toggleGroup(group)}
          >
            <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px', borderRadius: '50%' }}></div>
            <span>Community {group}</span>
          </div>
        )
      })}
    </div>
  )
}