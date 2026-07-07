import React from 'react'
import { Button } from "semantic-ui-react"
import { getHlaLabel } from './GliphGraph'

export default function Legend({ nodes, communities, mode, colorScale, hiddenGroups, groupOperations, hiddenSources, sourceOperations, hiddenHlas, hlaOperations, hlaLocus }: Readonly<{
  nodes: any[],
  mode: 'source' | 'community' | 'hla',
  communities: Map<string, any[]>,
  colorScale: any,
  hiddenGroups: Set<string | null>,
  groupOperations: {
    toggleGroup: (group: (string | null)) => void
    hideAllGroups: () => void
    showAllGroups: () => void
  },
  hiddenSources?: Set<string | null>,
  sourceOperations?: {
    toggleSource: (source: (string | null)) => void
    hideAllSources: () => void
    showAllSources: () => void
  },
  hiddenHlas?: Set<string | null>,
  hlaOperations?: {
    toggleHla: (hla: (string | null)) => void
    hideAllHlas: () => void
    showAllHlas: () => void
  },
  hlaLocus?: string
}>) {
  const { toggleGroup, hideAllGroups, showAllGroups } = groupOperations
  const { toggleSource, hideAllSources, showAllSources } = sourceOperations || {}
  const { toggleHla, hideAllHlas, showAllHlas } = hlaOperations || {}

  
  const sourcesNodesMap = new Map<string, any[]>();
  const hlaNodesMap = new Map<string, any[]>();
  nodes.forEach(n => {
    if (!sourcesNodesMap.has(n.color)) {
      sourcesNodesMap.set(n.color, []);
    }
    sourcesNodesMap.get(n.color)?.push(n);

    const hla = getHlaLabel(n, hlaLocus);
    if (!hlaNodesMap.has(hla)) {
      hlaNodesMap.set(hla, []);
    }
    hlaNodesMap.get(hla)?.push(n);
  });

  let groups;
  if (mode === 'community') {
    groups = Array.from(communities.keys()).sort((a, b) => (communities.get(b)?.length || 0) - (communities.get(a)?.length || 0));
  } else if (mode === 'hla') {
    groups = Array.from(hlaNodesMap.keys()).sort((a, b) => (hlaNodesMap.get(b)?.length || 0) - (hlaNodesMap.get(a)?.length || 0));
  } else {
    groups = Array.from(new Set(nodes.map(n => n.color))).sort((a, b) => (sourcesNodesMap.get(b)?.length || 0) - (sourcesNodesMap.get(a)?.length || 0));
  }

  const sources = new Map(nodes.map(node => [node.color, node.source]))
  const numberOfCommunities = communities.size
  const numberOfSources = sourcesNodesMap.size
  const numberOfHlas = hlaNodesMap.size
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
      {mode === 'source' &&
        <>
          <h5>{`${numberOfSources} ${numberOfSources === 1 ? 'source' : 'sources'} (${hiddenSources?.size || 0} hidden)`}</h5>
          <Button.Group size={'mini'} style={{ marginBottom: '10px' }}>
            <Button onClick={() => showAllSources?.()}>Show all</Button>
            <Button.Or />
            <Button onClick={() => hideAllSources?.()}>Hide all</Button>
          </Button.Group>
        </>
      }
      {mode === 'hla' &&
        <>
          <h5>{`${numberOfHlas} ${numberOfHlas === 1 ? 'HLA' : 'HLAs'} (${hiddenHlas?.size || 0} hidden)`}</h5>
          <Button.Group size={'mini'} style={{ marginBottom: '10px' }}>
            <Button onClick={() => showAllHlas?.()}>Show all</Button>
            <Button.Or />
            <Button onClick={() => hideAllHlas?.()}>Hide all</Button>
          </Button.Group>
        </>
      }
      {[...groups].map((group) => {
        const color = mode === 'source' ? group : (mode === 'hla' && group === 'Unknown' ? '#ffffff' : (colorScale(group) || "#ffffff"))
        const communitySize: number = mode === 'source'
          ? (sourcesNodesMap.get(group)?.length || 0)
          : (mode === 'hla' ? (hlaNodesMap.get(group)?.length || 0) : (communities.get(group)?.length || 0))
        const nodeWord: string = communitySize === 1 ? 'node' : 'nodes'
        return (
          <div
            key={group}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '5px',
              cursor: 'pointer',
              opacity: (mode === 'community' ? hiddenGroups.has(group) : (mode === 'hla' ? hiddenHlas?.has(group) : hiddenSources?.has(group))) ? 0.3 : 1
            }}
            role={"button"}
            onClick={() => {
              if (mode === 'community') {
                toggleGroup(group)
              } else if (mode === 'source' && toggleSource) {
                toggleSource(group)
              } else if (mode === 'hla' && toggleHla) {
                toggleHla(group)
              }
            }}
          >
            <div style={{ width: '20px', height: '20px', backgroundColor: color, marginRight: '10px', borderRadius: '50%' }}></div>
            <span style={{ fontSize: "1rem" }}>{mode === 'source' ? `${sources.get(group)} (${communitySize} ${nodeWord})` : (mode === 'hla' ? `${group} (${communitySize} ${nodeWord})` : `Community ${group} (${communitySize} ${nodeWord})`)}</span>
          </div>
        )
      })}
    </div>
  )
}