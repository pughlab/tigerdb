import React, { useRef, useState, useEffect } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import ForceGraph2D from 'react-force-graph-2d'
import { Segment, Loader, Dimmer, Header, Message, Icon, Button } from 'semantic-ui-react'
import useGliphGraphQuery from '../../../../hooks/useGliphGraphQuery'
import Legend from './Legend'
import FilterControls from './FilterControls'

function formatNumber(num: number) {
  const str = num.toString().replace(".", "").replace('-', '')

  if (str.length <= 6) {
    return num.toString()
  } else {
    return num.toExponential(6).toString()
  }
}

function GraphMode({ mode, updateMode }: Readonly<{ mode: '2D' | '3D'; updateMode: (mode: '2D' | '3D') => void }>) {
  return (
    <div style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', zIndex: 1, display: 'flex', alignItems: 'center' }}>
      <Header as='h4' inverted style={{ marginRight: '10px' }}>View graph in</Header>
      <Button color={mode === '3D' ? 'teal' : 'grey'} size='medium' icon='eye' content='3D' onClick={() => updateMode('3D')} />
      <Button color={mode === '2D' ? 'teal' : 'grey'} size='medium' icon='eye' content='2D' onClick={() => updateMode('2D')} />
    </div>
  )
}

export default function GliphGraph({ 
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
  const [hiddenSources, setHiddenSources] = useState<Set<string | null>>(new Set())
  const [mode, setMode] = useState<'2D' | '3D'>('3D')

  const toggleSource = (source: string | null) => {
    setHiddenSources(prev => {
      const newSet = new Set(prev)
      if (newSet.has(source)) {
        newSet.delete(source)
      } else {
        newSet.add(source)
      }
      return newSet
    })
  }

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
      <GraphMode mode={mode} updateMode={setMode} />
      <FilterControls data={data} hiddenSources={hiddenSources} updateGraphData={setGraphData} />
      <Legend nodes={data.nodes} hiddenSources={hiddenSources} toggleSource={toggleSource} />
      {mode === '3D' ? (<ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel={(node: any) => {
            return node.group === 'pattern' 
              ? `Pattern: ${node.value} (Score: ${formatNumber(node.score)}, Size: ${node.size})`
              : `TCR: ${node.value} (${node.v_gene}, ${node.j_gene}), Source: ${node.source}`
        }}
        nodeAutoColorBy="group"
        // warmupTicks={100}
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
      />) : (<ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        backgroundColor={'#000011'}
        linkColor={() => '#cccccc'}
        nodeLabel={(node: any) => {
            return node.group === 'pattern' 
              ? `Pattern: ${node.value} (Score: ${formatNumber(node.score)}, Size: ${node.size})`
              : `TCR: ${node.value} (${node.v_gene}, ${node.j_gene}), Source: ${node.source}`
        }}
        nodeAutoColorBy="group"
        // warmupTicks={100}
        linkDirectionalParticles={0} // Dots moving along links
        nodeRelSize={5}
        nodeVal={node => node.group === 'pattern' ? (node.size || 5) : 1}
        cooldownTicks={50}
        linkWidth={1}
        width={globalThis.innerWidth}
        height={globalThis.innerHeight * 0.6}
      />)}
    </div>
  )
}
