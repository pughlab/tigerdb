import React from 'react'
import {GraphCanvas} from 'reagraph'
import {ParentSize} from '@visx/responsive'

// const data = {
//   nodes: [
//     {
//       id: "n-1",
//       label: "1"
//     },
//     {
//       id: "n-2",
//       label: "2"
//     },
//     {
//       id: "n-3",
//       label: "3"
//     },
//     {
//       id: "n-4",
//       label: "4"
//     }
//   ],
//   edges: [
//     {
//       id: "1->2",
//       source: "n-1",
//       target: "n-2",
//       label: "Edge 1-2"
//     },
//     {
//       id: "1->3",
//       source: "n-1",
//       target: "n-3",
//       label: "Edge 1-3"
//     },
//     {
//       id: "1->4",
//       source: "n-1",
//       target: "n-4",
//       label: "Edge 1-4"
//     }
//   ],
// }

function HierarchicalTopDown({width, height, data}) {
  return (
    <div style={{width: width, height: height}}>
      <GraphCanvas
        
        layoutType='hierarchicalTd'
        nodes={data.nodes}
        edges={data.edges}
      />
    </div>
  )
}

export default function HierarchicalGraphVisualization ({data}) {
  return (
    <ParentSize>
      {(size) => <HierarchicalTopDown width={600} height={800} data={data} />}
    </ParentSize>
  )
}