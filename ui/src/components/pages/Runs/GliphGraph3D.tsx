import React, { useRef, useState, useEffect } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import { Segment, Loader, Dimmer, Header, Message, Icon, Button } from 'semantic-ui-react'
import useGliphGraphQuery from '../../../hooks/useGliphGraphQuery'

// const ForceGraph3D = React.lazy(() => import('react-force-graph-3d'))
export default function GliphGraph3D({ 
  runID,
  presignedURL,
  importGliph,
  importLoading,
}: { 
  runID: string;
  presignedURL: string;
  importGliph: any;
  importLoading: boolean;
}) {
  

  const fgRef = useRef<any>()
  const { data, loading, error, refetch } = useGliphGraphQuery({ runID })
  
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })

  useEffect(() => {
    if (data) {
        // Transform or just use data if format matches
        // Expected format: { nodes: [{ id: 'id' }], links: [{ source: 'id', target: 'id' }] }
        // Our API returns same structure actually.
        setGraphData({
            nodes: data.nodes.map(n => ({ ...n })), // Clone to avoid mutation by ForceGraph if any
            links: data.links.map(l => ({ ...l }))
        })
    }
  }, [data])

  useEffect(() => {
    // Zoom to fit on load
    if (fgRef.current && graphData.nodes.length > 0) {
        fgRef.current.d3Force('charge').strength(-100)
    }
  }, [graphData])

  if (loading) return <Segment placeholder basic style={{ height: '500px' }}><Dimmer active inverted><Loader size='large'>Loading Graph...</Loader></Dimmer></Segment>
  if (error) return <Message error content={`Error loading graph: ${error.message}`} />
  
  if (!data || data.nodes.length === 0) {
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
              }).catch((e: any) => console.error(e));
            }
          }}
        />
      </Segment>
    )
  }

  return (
    <div style={{border: '1px solid #ddd', borderRadius: '6px', overflow: 'hidden' }}>
        {/* <React.Suspense fallback={<Dimmer active inverted><Loader>Loading 3D Engine...</Loader></Dimmer>}> */}

        <ForceGraph3D
          ref={fgRef}
          graphData={graphData}
          nodeLabel={(node: any) => {
              if (node.group === 'pattern') return `Pattern: ${node.pattern} (Score: ${node.score}, Size: ${node.size})`
              return `TCR: ${node.cdr3b} (${node.v_gene}, ${node.j_gene})`
          }}
          nodeAutoColorBy="group"
          linkDirectionalParticles={0} // Dots moving along links
          nodeOpacity={0.8}
          linkOpacity={0.5}
        //   linkDirectionalParticleSpeed={0}
          nodeRelSize={5}
          nodeVal={node => node.group === 'pattern' ? (node.size || 5) : 1}
          linkWidth={1}
        //   backgroundColor="#101020"
          width={globalThis.innerWidth}
          height={globalThis.innerHeight * 0.6}
        />
        {/* </React.Suspense> */}

    </div>
  )
}
