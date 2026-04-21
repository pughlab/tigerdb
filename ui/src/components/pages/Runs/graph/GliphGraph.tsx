import React, { useRef, useState, useEffect, useMemo } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import ForceGraph2D from 'react-force-graph-2d'
import { Segment, Loader, Dimmer, Header, Message, Icon, Button, ButtonGroup } from 'semantic-ui-react'
import useGliphGraphQuery from '../../../../hooks/useGliphGraphQuery'
import usePatternTCRQuery from '../../../../hooks/usePatternTCRQuery'
import Legend from './Legend'
import FilterControls from './FilterControls'
import { scaleOrdinal } from 'd3-scale'
import { schemePaired } from 'd3-scale-chromatic'

const colorScale = scaleOrdinal(schemePaired)

function GraphMode({ mode, updateMode }: Readonly<{ mode: '2D' | '3D'; updateMode: (mode: '2D' | '3D') => void }>) {
  return (
    <div style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', zIndex: 1, display: 'flex', alignItems: 'center' }}>
      <Header as='h4' inverted style={{ marginRight: '10px', marginTop: '10px' }}>View graph in</Header>
      <ButtonGroup>
        <Button attached='top' color={mode === '3D' ? 'teal' : 'grey'} size='medium' icon='eye' content='3D' onClick={() => updateMode('3D')} />
        <Button.Or />
        <Button attached='top' color={mode === '2D' ? 'teal' : 'grey'} size='medium' icon='eye' content='2D' onClick={() => updateMode('2D')} />
      </ButtonGroup>
    </div>
  )
}

function getLinkId(l: any) {
  return `${l.source?.id ?? l.source}-${l.target?.id ?? l.target}`;
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
  const { getPatternTCRs } = usePatternTCRQuery()
  
  const [graphData, setGraphData] = useState<{ nodes: any[], links: any[] }>({ nodes: [], links: [] })
  const [hasData, setHasData] = useState(hasGliphResults)
  const [hiddenGroups, setHiddenGroups] = useState<Set<string | null>>(new Set())
  const [mode, setMode] = useState<'2D' | '3D'>('3D')

  const toggleGroup = (group: string | null) => {
    setHiddenGroups(prev => {
      const newSet = new Set(prev)
      if (newSet.has(group)) {
        newSet.delete(group)
      } else {
        newSet.add(group)
      }
      return newSet
    })
  }

  const removePatternLinksAndNodes = (prev: any, newLinkKeys: Set<string>, patternID: string) => {
    const remainingLinks = prev.links.filter((pl: any) => !newLinkKeys.has(getLinkId(pl)));
    const connectedNodeIds = new Set();
    
    remainingLinks.forEach((l: any) => {
      connectedNodeIds.add(l.source?.id ?? l.source);
      connectedNodeIds.add(l.target?.id ?? l.target);
    });

    const baseNodeIds = new Set(data?.nodes?.map((n: any) => n.id) || []);
    return {
      nodes: prev.nodes.filter((n: any) => n.id === patternID || baseNodeIds.has(n.id) || connectedNodeIds.has(n.id)),
      links: remainingLinks
    };
  };

  const addPatternLinksAndNodes = (prev: any, newNodes: any[], newLinks: any[]) => {
    const linkMap = new Map();
    const nodeMap = new Map();
    
    prev.nodes.forEach((n: any) => nodeMap.set(n.id, n));
    newNodes.forEach((n: any) => {
      if (!nodeMap.has(n.id)) nodeMap.set(n.id, { ...n });
    });

    [...prev.links, ...newLinks].forEach((l: any) => {
      const key = getLinkId(l);
      if (!linkMap.has(key)) linkMap.set(key, { ...l });
    });

    return {
      nodes: Array.from(nodeMap.values()),
      links: Array.from(linkMap.values())
    };
  };

  const toggleTCRsForPattern = async (patternID: string) => {
    const result = await getPatternTCRs({ variables: { runID, patternID } });
    const { nodes: newNodes = [], links: newLinks = [] } = result.data?.patternTCRs || {};

    setGraphData(prev => {
      const newLinkKeys = new Set(newLinks.map(getLinkId));
      const prevLinkKeys = new Set(prev.links.map(getLinkId));
      const hasAllLinks = newLinks.length > 0 && newLinks.every((l: any) => prevLinkKeys.has(getLinkId(l)));

      return hasAllLinks 
        ? removePatternLinksAndNodes(prev, newLinkKeys, patternID)
        : addPatternLinksAndNodes(prev, newNodes, newLinks);
    });
  }

  useEffect(() => {
    // Zoom to fit on load
    if (fgRef.current && graphData.nodes.length > 0) {
      fgRef.current.d3Force('charge').strength(-100)
    }
  }, [graphData])

  const totalNodes = useMemo(() => {
    const nodes = new Map([...data?.nodes || [], ...graphData.nodes].map((n: any) => [n.id, n]))
    return Array.from(nodes.values())
  }, [data, graphData])

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
      <FilterControls data={data} hiddenGroups={hiddenGroups} updateGraphData={setGraphData} />
      <Legend nodes={totalNodes} colorScale={colorScale} hiddenGroups={hiddenGroups} toggleGroup={toggleGroup} />
      {mode === '3D' ? (<ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        // nodeLabel={(node: any) => {
        //     return node.group === 'pattern' 
        //       ? `Pattern: ${node.value} (Score: ${formatNumber(node.score)}, Size: ${node.size})`
        //       : `TCR: ${node.value} (${node.v_gene}, ${node.j_gene}), Source: ${node.source}`
        // }}
        nodeLabel={node => node.label}
        nodeColor={node => node.color ?? (colorScale(node.group) || "#ffffff")}
        //nodeAutoColorBy="group"
        // warmupTicks={100}
        linkDirectionalParticles={0} // Dots moving along links
        nodeOpacity={0.8}
        linkOpacity={0.5}
        nodeRelSize={5}
        // nodeVal={node => node.group === 'pattern' ? (node.size || 5) : 1}
        //nodeVal={node => node.value}
        cooldownTicks={50}
        forceEngine='d3'
        linkWidth={1}
        width={globalThis.innerWidth}
        height={globalThis.innerHeight * 0.6}
        onNodeClick={node => toggleTCRsForPattern(node.value)}
      />) : (<ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        backgroundColor={'#000011'}
        linkColor={() => '#cccccc'}
        nodeLabel={node => node.label}
        nodeColor={node => node.color ?? (colorScale(node.group) || "#ffffff")}
        //nodeAutoColorBy="group"
        // warmupTicks={100}
        linkDirectionalParticles={0} // Dots moving along links
        nodeRelSize={5}
        //nodeVal={node => node.value}
        cooldownTicks={50}
        linkWidth={1}
        width={globalThis.innerWidth}
        height={globalThis.innerHeight * 0.6}
        onNodeClick={node => toggleTCRsForPattern(node.value)}
      />)}
    </div>
  )
}
