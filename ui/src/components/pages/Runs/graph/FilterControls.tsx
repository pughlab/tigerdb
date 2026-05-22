import React, {useEffect, useMemo, useState} from 'react'
import {Button, Header} from "semantic-ui-react"
import {ApolloQueryResult} from "@apollo/client";
import { useDebounce } from "use-debounce";

const DEFAULT_COMMUNITY_SIZE = 4

export default function FilterControls({ communities, groupOperations, updateHiddenNodes, refetchGraph }: Readonly<{
    communities: Map<string, any[]>,
    groupOperations: {
      toggleGroup: (group: (string | null)) => void
      hideAllGroups: () => void
      showAllGroups: () => void
    },
    updateHiddenNodes: React.Dispatch<React.SetStateAction<Set<string | null>>>,
    refetchGraph: (variables?: (Partial<{
        minCommunitySize?: number,
        cdr3bContains?: string
    }> | undefined)) => Promise<ApolloQueryResult<any>>
}>) {
  const [minCommunitySize, setMinCommunitySize] = useState<number | ''>(DEFAULT_COMMUNITY_SIZE)
  const [cdr3bContains, setCdr3bContains] = useState('')
  const [trbvContains, setTrbvContains] = useState('')
  const [filterMode, setFilterMode] = useState<'community' | 'node'>('community')
  const [debouncedCommunitySize] = useDebounce(minCommunitySize, 1000)
  const [debouncedCdr3b] = useDebounce(cdr3bContains, 1000);
  const [debouncedTRBV] = useDebounce(trbvContains, 1000);

  const { toggleGroup, hideAllGroups, showAllGroups } = groupOperations

  const communityIdsBySize = useMemo(() => {
    const size = Math.max(Number(debouncedCommunitySize) || 0, DEFAULT_COMMUNITY_SIZE);
    return Array.from(communities.entries())
      .filter(([_communityId, members]) => members.length >= size)
      .map(([communityId]) => communityId)
  }, [debouncedCommunitySize])

  const communityIdsByCDR3b = useMemo(() => {
    const term = debouncedCdr3b.trim();
    if (term) {
      const lower = term.toLowerCase();
      return Array.from(communities.entries())
        .filter(([_communityId, members]) => members.some(member => member.label.toLowerCase().includes(lower)))
        .map(([communityId]) => communityId);
    }
    return [] as string[];
  }, [debouncedCdr3b])

  const communityIdsByTRBV = useMemo(() => {
    const term = debouncedTRBV.trim();
    if (term) {
      const lower = term.toLowerCase();
      return Array.from(communities.entries())
        .filter(([_communityId, members]) => members.some(member => member.v_gene.toLowerCase().includes(lower)))
        .map(([communityId]) => communityId);
    }
    return [] as string[];
  }, [debouncedTRBV])

  const matchingCommunityIds = useMemo(() => {
    const hasCdr = debouncedCdr3b.trim().length > 0;
    const hasTrbv = debouncedTRBV.trim().length > 0;

    if (communityIdsBySize.length === 0) {
      return Array.from(communities.keys())
    }

    if (!hasCdr && !hasTrbv) {
      return communityIdsBySize;
    }
    if (hasCdr && !hasTrbv) {
      return communityIdsByCDR3b.filter(id => communityIdsBySize.includes(id));
    }
    if (hasTrbv && !hasCdr) {
      return communityIdsByTRBV.filter(id => communityIdsBySize.includes(id));
    }

    const trbvSet: Set<string> = new Set(communityIdsByTRBV)
    return communityIdsByCDR3b.filter(id => trbvSet.has(id)).filter(id => communityIdsBySize.includes(id));
  }, [debouncedCdr3b, debouncedTRBV, debouncedCommunitySize, communityIdsByTRBV, communityIdsByCDR3b, communityIdsBySize])

  const nodesByCDR3b: string[] = useMemo(() => {
    const substring = debouncedCdr3b.trim()
    if (substring.length > 0) {
      return Array.from(communities.values()).flat()
        .filter(member => !member.label.toLowerCase().includes(substring.toLowerCase()))
    }
    return [] as string[];
  }, [debouncedCdr3b])

  const nodesByTRBV: string[] = useMemo(() => {
    const substring = debouncedTRBV.trim()
    if (substring.length > 0) {
      return Array.from(communities.values()).flat()
        .filter(member => !member.v_gene.toLowerCase().includes(substring.toLowerCase()))
    }
    return [] as string[];
  }, [debouncedTRBV])

  useEffect(() => {
    if (filterMode === 'community') {
      if (communityIdsBySize.length === 0) {
        hideAllGroups();
      } else if (matchingCommunityIds.length === 0) {
        showAllGroups();
      } else {
        hideAllGroups();
        matchingCommunityIds.forEach(id => toggleGroup(id));
      }
    }
  }, [matchingCommunityIds]);

  useEffect(() => {
    if (filterMode === 'node') {
      const hiddenNodes = [...nodesByCDR3b, ...nodesByTRBV];
      updateHiddenNodes(new Set(hiddenNodes));
    }
  }, [nodesByCDR3b, nodesByTRBV]);

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px' }}>
      <Header as='h4'>Filter</Header>
      <Button.Group size={'mini'} style={{ marginBottom: '10px' }}>
        <Button color={ filterMode === 'community' ? 'teal' : 'grey' } onClick={() => setFilterMode('community')} active={filterMode === 'community'}>Community</Button>
        <Button.Or />
        <Button color={ filterMode === 'node' ? 'teal' : 'grey' } onClick={() => setFilterMode('node')} active={filterMode === 'node'}>Node</Button>
      </Button.Group>
      {filterMode === 'community' && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Minimum Size:</span>
          <input
            type='number'
            value={minCommunitySize}
            onChange={e => setMinCommunitySize(Number(e.target.value))}
            style={{ marginLeft: '10px', width: '60px' }}
            min={DEFAULT_COMMUNITY_SIZE}
            max={communities.size}
          />
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>CDR3b contains:</span>
        <input
          type='text'
          value={cdr3bContains}
          onChange={e => setCdr3bContains(e.target.value)}
          style={{ marginLeft: '10px', width: '120px' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>TRBV contains:</span>
        <input
          type="text"
          value={trbvContains}
          onChange={e => setTrbvContains(e.target.value)}
          style={{ marginLeft: '10px', width: '130px' }}
        />
      </div>
      {/*<Button color={"teal"} content={"Update Graph"} onClick={() => refetchGraph({*/}
      {/*  minCommunitySize,*/}
      {/*  cdr3bContains*/}
      {/*})} />*/}
    </div>
  )
}