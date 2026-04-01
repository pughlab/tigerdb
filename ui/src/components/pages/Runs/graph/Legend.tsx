import React from 'react'
import { Header } from "semantic-ui-react"

export default function Legend({ nodes, hiddenSources, toggleSource }: Readonly<{ nodes: any[], hiddenSources: Set<string | null>, toggleSource: (source: string | null) => void }>) {
  const colors: { [key: string]: string } = {
    'Pattern': '#ffffff',
    default: '#1f77b4',
    'Human': '#ff0000',
    'S-pneumoniae': '#06c739',
    'ChlamydiaTrachomatis': '#32a852',
    'M.tuberculosis': '#199139',
    'EnterobacteriaceaeBacterium': '#265c34',
    'SalmonellaTyphimurium': '#033611',
    'CEF': '#FFF9C4',
    'CMV': '#FFF176',
    'EBV': '#FFEB3B',
    'Influenza': '#FDD835',
    'DENV': '#FBC02D',
    'HBV': '#FDD835',
    'HCV': '#FFD600',
    'HPV': '#FBC02D',
    'HSV': '#FFC107',
    'HTLV1': '#FFB300',
    'MCPyV': '#EAB308',
    'YFV': '#CA8A04'
  }
  const predefinedOrder = Object.keys(colors)
  const sources = Array
    .from(new Set(nodes.map(n => n.source)
      .filter(Boolean)))
    .sort((a, b) => predefinedOrder.indexOf(a) - predefinedOrder.indexOf(b))
  return (
    <div style={{ position: 'absolute', top: 50, left: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px' }}>
      <Header as='h4'>Legend</Header>
      {[null, ...sources].map((source) => {
        const color = source ? (colors[source] || colors['default']) : colors['Pattern']
        return (
          <div
            key={source ?? 'pattern'}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '5px',
              cursor: 'pointer',
              opacity: hiddenSources.has(source) ? 0.3 : 1
            }}
            onClick={() => toggleSource(source)}
          >
            <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px', borderRadius: '50%' }}></div>
            <span>{source ?? 'Pattern'}</span>
          </div>
        )
      })}
    </div>
  )
}