import React, {useEffect, useMemo, useState} from 'react'
import {Button, Header} from "semantic-ui-react"
import {ApolloQueryResult} from "@apollo/client";
import { useDebounce } from "use-debounce";

const DEFAULT_COMMUNITY_SIZE = 4
const IGNORED_KEYS: Set<string> = new Set(['__typename', 'color', 'projectID', 'datasetID', 'variableID', 'size', 'value'])

function matchesSearchTerm(member: any, searchTerm: string): boolean {
  const lower = searchTerm.toLowerCase();
  const filteredMember = Object.keys(member).filter(key => !IGNORED_KEYS.has(key)).reduce((obj, key) => {
    obj[key] = member[key];
    return obj;
  }, {} as any);
  return Object.values(filteredMember).some(value => typeof value === 'string' && value.toLowerCase().includes(lower));
}

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
  const [searchQuery, setSearchQuery] = useState('')
  const [filterMode, setFilterMode] = useState<'community' | 'node'>('community')
  const [debouncedCommunitySize] = useDebounce(minCommunitySize, 1000)
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

  const { toggleGroup, hideAllGroups } = groupOperations

  const communityIdsBySize = useMemo(() => {
    const size = Math.max(Number(debouncedCommunitySize) || 0, DEFAULT_COMMUNITY_SIZE);
    return Array.from(communities.entries())
      .filter(([_communityId, members]) => members.length >= size)
      .map(([communityId]) => communityId)
  }, [debouncedCommunitySize])

  const communityIdsBySearchQuery = useMemo(() => {
    const term = debouncedSearchQuery.trim();
    if (term) {
      const lower = term.toLowerCase();
      return Array.from(communities.entries())
        .filter(([_communityId, members]) =>
          members.some(member => matchesSearchTerm(member, lower))
        )
        .map(([communityId]) => communityId);
    }
    return Array.from(communities.keys());
  }, [debouncedSearchQuery, communities])

  const matchingCommunityIds = useMemo(() => {
    const hasSearchQuery: boolean = debouncedSearchQuery.trim().length > 0;

    if (communityIdsBySize.length === 0) {
      return Array.from(communities.keys())
    }

    if (!hasSearchQuery) {
      return communityIdsBySize;
    }

    return communityIdsBySearchQuery
  }, [debouncedSearchQuery, communityIdsBySearchQuery, communityIdsBySize])

  const hiddenNodesBySearchQuery: string[] = useMemo(() => {
    const substring = debouncedSearchQuery.trim().toLowerCase()
    if (substring.length > 0) {
      return Array.from(communities.values()).flat()
        .filter(member => !matchesSearchTerm(member, substring)
      )
    }
    return [] as string[];
  }, [debouncedSearchQuery])

  useEffect(() => {
    if (filterMode === 'community') {
      hideAllGroups();
      if (matchingCommunityIds.length > 0) {
        matchingCommunityIds.forEach(id => toggleGroup(id));
      }
    }
  }, [matchingCommunityIds]);

  useEffect(() => {
    if (filterMode === 'node') {
      updateHiddenNodes(new Set(hiddenNodesBySearchQuery));
    }
  }, [hiddenNodesBySearchQuery]);

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px', borderRadius: '6px' }}>
      <Header as='h4'>Filters</Header>
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
        <span>Search:</span>
        <input
          type='text'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ marginLeft: '10px', width: '120px' }}
        />
      </div>
      {/*<Button color={"teal"} content={"Update Graph"} onClick={() => refetchGraph({*/}
      {/*  minCommunitySize,*/}
      {/*  cdr3bContains*/}
      {/*})} />*/}
    </div>
  )
}