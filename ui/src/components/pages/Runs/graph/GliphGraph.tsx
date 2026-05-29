import React, { useRef, useState, useEffect, useMemo } from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import ForceGraph2D from 'react-force-graph-2d'
import { Segment, Loader, Dimmer, Header, Message, Icon, Button, ButtonGroup, Dropdown } from 'semantic-ui-react'
import useGliphGraphQuery from '../../../../hooks/useGliphGraphQuery'
import Legend from './Legend'
import FilterControls from './FilterControls'
import { scaleOrdinal } from 'd3-scale'
import { schemePaired } from 'd3-scale-chromatic'

function GraphMode({ mode, updateMode }: Readonly<{ mode: '2D' | '3D'; updateMode: (mode: '2D' | '3D') => void }>) {
  return (
    <div style={{ position: 'absolute', bottom: 10, left: 10, color: 'white', zIndex: 1, display: 'flex', alignItems: 'center' }}>
      <Header as='h4' inverted style={{ marginRight: '10px', marginTop: '10px' }}>View graph in</Header>
      <ButtonGroup>
        <Button attached='top' color={mode === '2D' ? 'teal' : 'grey'} size='medium' icon='eye' content='2D' onClick={() => updateMode('2D')} />
        <Button.Or />
        <Button attached='top' color={mode === '3D' ? 'teal' : 'grey'} size='medium' icon='eye' content='3D' onClick={() => updateMode('3D')} />
      </ButtonGroup>
    </div>
  )
}

const HLA_LOCI = [
  { key: 'hla_a', value: 'hla_a', text: 'HLA-A' },
  { key: 'hla_b', value: 'hla_b', text: 'HLA-B' },
  { key: 'hla_c', value: 'hla_c', text: 'HLA-C' },
  { key: 'hla_dpa1', value: 'hla_dpa1', text: 'HLA-DPA1' },
  { key: 'hla_dpb1', value: 'hla_dpb1', text: 'HLA-DPB1' },
  { key: 'hla_dqa1', value: 'hla_dqa1', text: 'HLA-DQA1' },
  { key: 'hla_dqb1', value: 'hla_dqb1', text: 'HLA-DQB1' },
  { key: 'hla_drb1', value: 'hla_drb1', text: 'HLA-DRB1' },
  { key: 'hla_drb3', value: 'hla_drb3', text: 'HLA-DRB3' },
  { key: 'hla_drb4', value: 'hla_drb4', text: 'HLA-DRB4' },
  { key: 'hla_drb5', value: 'hla_drb5', text: 'HLA-DRB5' }
];

function ColorSettings({ colorMode, updateColorMode, hlaLocus, updateHlaLocus }: any) {
  return (
    <div style={{ position: 'absolute', top: 40, left: 10, color: 'white', zIndex: 1, display: 'flex', alignItems: 'center' }}>
      <Header as='h4' inverted style={{ marginRight: '10px', marginTop: '10px' }}>Colour by</Header>
      <ButtonGroup size={"small"}>
        <Button attached='top' color={colorMode === 'source' ? 'teal' : 'grey'} size='medium' content='Source' onClick={() => updateColorMode('source')} />
        <Button.Or />
        <Button attached='top' color={colorMode === 'community' ? 'teal' : 'grey'} size='medium' content='Community' onClick={() => updateColorMode('community')} />
        <Button.Or />
        <Button attached='top' color={colorMode === 'hla' ? 'teal' : 'grey'} size='medium' content='HLA' onClick={() => updateColorMode('hla')} />
      </ButtonGroup>
      {colorMode === 'hla' && (
        <Dropdown
          style={{ marginLeft: '10px' }}
          placeholder='Select HLA Locus'
          selection
          options={HLA_LOCI}
          value={hlaLocus}
          onChange={(e, { value }) => updateHlaLocus(value)}
        />
      )}
    </div>
  )
}

export const getHlaLabel = (node: any, locus?: string) => {
  if (locus) {
    const val = node[locus];
    return (val && val !== 'NA' && val.trim() !== '') ? val : 'Unknown';
  }
  const hlaFields = [
    'hla_a', 'hla_b', 'hla_c',
    'hla_dpa1', 'hla_dpb1', 'hla_dqa1', 'hla_dqb1',
    'hla_drb1', 'hla_drb3', 'hla_drb4', 'hla_drb5'
  ];
  const hlas = hlaFields.map(field => node[field]).filter(val => val && val !== 'NA' && val.trim() !== '');
  return hlas.length > 0 ? hlas.join(', ') : 'Unknown';
}

export default function GliphGraph({ 
  runID,
  presignedURL,
  hasGliphResults,
  importGliph,
  importLoading,
  updateSelectedNode
}: Readonly<{ 
  runID: string;
  presignedURL: string;
  hasGliphResults: boolean;
  importGliph: any;
  importLoading: boolean;
  updateSelectedNode: React.Dispatch<React.SetStateAction<any>>;
}>) {
  

  const fgRef = useRef<any>()
  const { data, loading, error, refetch } = useGliphGraphQuery({ input: { runID } })
  const [graphData, setGraphData] = useState<{ nodes: any[], links: any[] }>({ nodes: [], links: [] })
  const [hasData, setHasData] = useState(hasGliphResults)
  const [hiddenGroups, setHiddenGroups] = useState<Set<string | null>>(new Set())
  const [hiddenSources, setHiddenSources] = useState<Set<string | null>>(new Set())
  const [hiddenHlas, setHiddenHlas] = useState<Set<string | null>>(new Set())
  const [hiddenNodes, setHiddenNodes] = useState<Set<any>>(new Set())
  const [mode, setMode] = useState<'2D' | '3D'>('3D')
  const [colorMode, setColorMode] = useState<'source' | 'community' | 'hla'>('community')
  const [hlaLocus, setHlaLocus] = useState<string>('hla_a')

  const colorScale = useMemo(() => scaleOrdinal(schemePaired), [colorMode, hlaLocus])

  useEffect(() => {
    return () => {
      if (fgRef.current) {
        fgRef.current.pauseAnimation();
      }
    }
  }, []);

  useEffect(() => {
    if (data?.nodes && data?.links) {
      setGraphData({
        nodes: data.nodes.map((n: any) => ({ ...n })),
        links: data.links.map((l: any) => ({ ...l })),
      })
    }
  }, [data]);

  useEffect(() => {
    const { nodes, links } = data || { nodes: [], links: [] };
    const filteredNodes = nodes.filter((n: any) => 
      !hiddenGroups.has(n.group) && 
      !hiddenSources.has(n.color) && 
      !hiddenHlas.has(getHlaLabel(n, hlaLocus)) &&
      !hiddenNodes.has(n)
    );
    const filteredNodeIDs = new Set(filteredNodes.map((n: any) => n.id));
    const filteredLinks = links.filter((l: any) => filteredNodeIDs.has(l.source) && filteredNodeIDs.has(l.target));
    setGraphData({
      nodes: filteredNodes.map((n: any) => ({ ...n })),
      links: filteredLinks.map((l: any) => ({ ...l }))
    });
  }, [hiddenGroups, hiddenSources, hiddenHlas, hiddenNodes, data, hlaLocus]);

  useEffect(() => {
    // Zoom to fit on load
    if (fgRef.current && graphData.nodes.length > 0) {
      fgRef.current.d3Force('charge').strength(-100)
    }
  }, [graphData])

  useEffect(() => {
    // When switching to 3D, nodes that were simulated in 2D might have flattened perfectly to a 2D plane (z = undefined or z = 0).
    // D3's 3D force physics won't push them into the Z axis if they are all starting perfectly flat on z=0.
    // So we apply a tiny Z perturbation to allow expanding spherically in 3D.
    if (mode === '3D') {
      let needsReheat = false;
      graphData.nodes.forEach(n => {
        if (!n.z) {
          n.z = (Math.random() - 0.5) * 20;
          needsReheat = true;
        }
      });
      if (needsReheat && fgRef.current) {
        fgRef.current.d3ReheatSimulation();
      }
    }
  }, [mode, graphData.nodes]);

  const communities = useMemo(() => {
    if (data?.nodes?.length > 0) {
      const communitiesMap = new Map<string, any[]>();
      const communityIds = new Set(data.nodes.map((n: any) => n.group));
      communityIds.forEach(communityId => {
        const communityNodes = data.nodes.filter(n => n.group === communityId);
        communitiesMap.set(communityId, communityNodes);
      })
      return communitiesMap;
    }
    return new Map<string, any[]>()
  }, [data])

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

  const hideAllGroups = () => {
    setHiddenGroups(new Set(communities.keys()))
  }

  const showAllGroups = () => {
    setHiddenGroups(new Set())
  }

  const groupOperations = useMemo(() => {
    return {
      toggleGroup,
      hideAllGroups,
      showAllGroups,
    }
  }, [toggleGroup, hideAllGroups, showAllGroups]);

  const sourceOperations = useMemo(() => {
    const uniqueSources = new Set(data?.nodes?.map((n: any) => n.color) || []);
    return {
      toggleSource: (source: string | null) => {
        setHiddenSources(prev => {
          const newSet = new Set(prev)
          if (newSet.has(source)) newSet.delete(source)
          else newSet.add(source)
          return newSet
        })
      },
      hideAllSources: () => setHiddenSources(new Set(uniqueSources)),
      showAllSources: () => setHiddenSources(new Set()),
    }
  }, [data]);

  const hlaOperations = useMemo(() => {
    const uniqueHlas = new Set(data?.nodes?.map((n: any) => getHlaLabel(n, hlaLocus)) || []);
    return {
      toggleHla: (hla: string | null) => {
        setHiddenHlas(prev => {
          const newSet = new Set(prev)
          if (newSet.has(hla)) newSet.delete(hla)
          else newSet.add(hla)
          return newSet
        })
      },
      hideAllHlas: () => setHiddenHlas(new Set(uniqueHlas)),
      showAllHlas: () => setHiddenHlas(new Set()),
    }
  }, [data, hlaLocus]);

  const totalNodes = useMemo(() => {
    const baseNodes = data?.nodes || [];
    const nodes = new Map([...baseNodes, ...graphData.nodes].map((n: any) => [String(n.id), n]))
    return Array.from(nodes.values())
  }, [data, graphData])

  const getLinkColor = (link: any) => {
    if (colorMode === 'community') return colorScale(link.group);
    if (colorMode === 'source') return link.color || "#ffffff";
    if (colorMode === 'hla') {
      const sourceNode = typeof link.source === 'object' ? link.source : totalNodes.find(n => n.id === link.source);
      if (sourceNode) {
        const label = getHlaLabel(sourceNode, hlaLocus);
        return label === 'Unknown' ? '#ffffff' : colorScale(label);
      }
    }
    return "#ffffff";
  };

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
      <ColorSettings colorMode={colorMode} updateColorMode={setColorMode} hlaLocus={hlaLocus} updateHlaLocus={setHlaLocus} />
      <FilterControls
        communities={communities}
        groupOperations={groupOperations}
        updateHiddenNodes={setHiddenNodes}
        refetchGraph={(filters) => refetch({
          input: {
            runID,
            ...filters
          }
        })}
      />
      <Legend 
        mode={colorMode} 
        nodes={totalNodes} 
        communities={communities} 
        colorScale={colorScale} 
        hiddenGroups={hiddenGroups} 
        groupOperations={groupOperations}
        hiddenSources={hiddenSources}
        sourceOperations={sourceOperations}
        hiddenHlas={hiddenHlas}
        hlaOperations={hlaOperations}
        hlaLocus={hlaLocus}
      />
      {mode === '3D' ? (<ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeLabel={(node: any) => `ID: ${node.id}<br />CDR3b: ${node.label}<br />TRBV: ${node.v_gene}<br />Community: ${node.group}<br />Source: ${node.source}<br />HLA: ${getHlaLabel(node, hlaLocus)}`}
        // linkLabel={(link: any) => `Community: ${link.group}`}
        nodeColor={(node: any) => colorMode === 'source' ? node.color : (colorMode === 'hla' ? (getHlaLabel(node, hlaLocus) === 'Unknown' ? '#ffffff' : colorScale(getHlaLabel(node, hlaLocus))) : (colorScale(node.group) || "#ffffff"))}
        onNodeClick={(node:  any) => updateSelectedNode(node)}
        linkDirectionalParticles={0}
        linkColor={getLinkColor}
        nodeOpacity={0.8}
        linkOpacity={0.5}
        nodeRelSize={5}
        warmupTicks={50}
        cooldownTicks={50}
        linkWidth={1}
        width={globalThis.innerWidth}
        height={globalThis.innerHeight * 0.6}
      />) : (<ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        backgroundColor={'#000011'}
        // linkLabel={(link: any) => `Community: ${link.group}`}
        linkColor={getLinkColor}
        nodeLabel={(node: any) => `ID: ${node.id}<br />CDR3b: ${node.label}<br />TRBV: ${node.v_gene}<br/>Community: ${node.group}<br />Source: ${node.source}<br />HLA: ${getHlaLabel(node, hlaLocus)}`}
        nodeColor={(node: any) => colorMode === 'source' ? node.color : (colorMode === 'hla' ? (getHlaLabel(node, hlaLocus) === 'Unknown' ? '#ffffff' : colorScale(getHlaLabel(node, hlaLocus))) : (colorScale(node.group) || "#ffffff"))}
        onNodeClick={(node:  any) => updateSelectedNode(node)}
        linkDirectionalParticles={0}
        nodeRelSize={5}
        cooldownTicks={50}
        linkWidth={1}
        width={globalThis.innerWidth}
        height={globalThis.innerHeight * 0.6}
      />)}
    </div>
  )
}
