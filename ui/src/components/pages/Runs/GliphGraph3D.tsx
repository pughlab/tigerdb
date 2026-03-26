import React, { useRef, useState, useEffect } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import { Segment, Loader, Dimmer, Header, Message, Icon, Button } from 'semantic-ui-react'
import useGliphGraphQuery from '../../../hooks/useGliphGraphQuery'

const DEFAULT_CLUSTER_SIZE = 5

function formatNumber(num: number) {
  const str = num.toString().replace(".", "").replace('-', '')

  if (str.length <= 6) {
    return num.toString()
  } else {
    return num.toExponential(6).toString()
  }
}

// Traverse graph to find connected components (clusters) using DFS.
export function traverse(nodeID: string, adjacencyList: Map<string, string[]>, visited: Set<string>) {
  const clusterIDs: string[] = []
  const stack = [nodeID]

  visited.add(nodeID)

  while (stack.length > 0) {
    const currentID = stack.pop()!
    clusterIDs.push(currentID)

    const neighbors = adjacencyList.get(currentID) || []
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        stack.push(neighbor)
      }
    })
  }

  return clusterIDs
}

// Find clusters of nodes based on links and filter out clusters smaller than minClusterSize.
export function findClusters(nodes: any[], links: any[], minClusterSize: number) {
  const adjacencyList = new Map<string, string[]>()

  nodes.forEach(node => adjacencyList.set(node.id, []))

  links.forEach(link => {
    adjacencyList.get(link.source)?.push(link.target)
    adjacencyList.get(link.target)?.push(link.source)
  })

  const visited = new Set<string>()
  const clusters: string[][] = []

  nodes.forEach(node => {
    if (!visited.has(node.id)) {
      const cluster = traverse(node.id, adjacencyList, visited)
      if (cluster.length >= minClusterSize) {
        clusters.push(cluster)
      }
    }
  })

  const filteredNodes = nodes.filter(n => clusters.some(c => c.includes(n.id)))
  const filteredLinks = links.filter(l => clusters.some(c => c.includes(l.source) && c.includes(l.target)))

  return { nodes: filteredNodes, links: filteredLinks }
}

function GraphFilterControls({ data, updateGraphData }: Readonly<{ data: { nodes: any[], links: any[] }, updateGraphData: (data: { nodes: any[], links: any[] }) => void }>) {
  const [minClusterSize, setMinClusterSize] = useState(DEFAULT_CLUSTER_SIZE)
  const nodes = data.nodes.map((n: any) => ({ ...n }))
  const links = data.links.map((l: any) => ({ ...l }))

  useEffect(() => {
    const filteredData = findClusters(nodes, links, minClusterSize)
    updateGraphData(filteredData)
  }, [minClusterSize])

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
    </div>
  )
}

function Legend({ nodes }: Readonly<{ nodes: any[] }>) {
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
          <div key={source} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px', borderRadius: '50%'}}></div>
            <span>{source ?? 'Pattern'}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function GliphGraph3D({ 
  runID,
  presignedURL,
  hasGliphResults,
  importGliph,
  importLoading,
}: Readonly<{ 
  runID: string;
  presignedURL: string;
  hasGliphResults: boolean;
  importGliph: any;
  importLoading: boolean;
}>) {
  

  const fgRef = useRef<any>()
  const { data, loading, error, refetch } = useGliphGraphQuery({ runID })
  
  const [graphData, setGraphData] = useState<{ nodes: any[], links: any[] }>({ nodes: [], links: [] })
  const [hasData, setHasData] = useState(hasGliphResults)

  useEffect(() => {
    if (data) {
      const nodes = data.nodes.map((n: any) => ({ ...n })) // Clone to avoid mutation by ForceGraph if any
      const links = data.links.map((l: any) => ({ ...l }))
      const filteredData = findClusters(nodes, links, DEFAULT_CLUSTER_SIZE)
      setGraphData(filteredData)
    }
  }, [data])

  useEffect(() => {
    // Zoom to fit on load
    if (fgRef.current && graphData.nodes.length > 0) {
      fgRef.current.d3Force('charge').strength(-100)
    }
  }, [graphData])

  if (loading) return <Segment placeholder basic style={{ height: '500px' }}><Dimmer active inverted><Loader size='large'>Loading Graph...</Loader></Dimmer></Segment>
  if (hasData && error) return <Message error content={`Error loading graph: ${error.message}`} />
  
  if (!hasData) {
    return (
      <Segment placeholder style={{ height: '500px' }}>
        <Header icon>
          <Icon name='connectdevelop' />
          Click below to import GLIPH results for this run.
        </Header>
        <Button 
          size='large' 
          fluid
          color='teal' 
          icon='eye' 
          content='VISUALIZE GRAPH' 
          disabled={!presignedURL}
          loading={importLoading}
          onClick={() => {
            if (importGliph && presignedURL) {
              console.log(`Importing from presignedURL: ${presignedURL}`);
              importGliph({
                variables: {
                  runID,
                  presignedURL,
                },
              }).then(() => {
                refetch();
                setHasData(true);
              }).catch((e: any) => console.error(e));
            }
          }}
        />
      </Segment>
    )
  }

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
      <h2 style={{ position: 'absolute', top: 10, left: 10, color: 'white', zIndex: 1 }}>GLIPH Graph</h2>
      <GraphFilterControls data={data} updateGraphData={setGraphData} />
      <Legend nodes={graphData.nodes} />
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel={(node: any) => {
            return node.group === 'pattern' 
              ? `Pattern: ${node.value} (Score: ${formatNumber(node.score)}, Size: ${node.size})`
              : `TCR: ${node.value} (${node.v_gene}, ${node.j_gene})`
        }}
        nodeAutoColorBy="group"
        // warmupTicks={100}
        warmupTicks={undefined}
        linkDirectionalParticles={0} // Dots moving along links
        nodeOpacity={0.8}
        linkOpacity={0.5}
        nodeRelSize={5}
        nodeVal={node => node.group === 'pattern' ? (node.size || 5) : 1}
        cooldownTicks={50}
        forceEngine='d3'
        linkWidth={1}
        width={globalThis.innerWidth}
        height={globalThis.innerHeight * 0.6}
      />
    </div>
  )
}
