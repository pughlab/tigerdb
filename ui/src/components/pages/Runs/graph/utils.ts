// Traverse graph to find connected components (clusters) using DFS.
function traverse(nodeID: string, adjacencyList: Map<string, string[]>, visited: Set<string>) {
  const clusterIDs: string[] = []
  const stack: string[] = [nodeID]

  visited.add(nodeID)

  while (stack.length > 0) {
    const currentID: string = stack.pop()!
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

export function findByPatternLength(nodes: any[], links: any[], patternLength: number) {
  const matchingPatternNodes = nodes.filter(
    n => n.group === 'pattern' && n.value.length >= patternLength
  )

  const matchingPatternIds = new Set(matchingPatternNodes.map(n => n.id))

  const filteredLinks = links.filter(
    l => matchingPatternIds.has(l.source) || matchingPatternIds.has(l.target)
  )

  const connectedNodeIds = new Set<string>()
  filteredLinks.forEach(l => {
    connectedNodeIds.add(l.source)
    connectedNodeIds.add(l.target)
  })

  const filteredNodes = nodes.filter(n => connectedNodeIds.has(n.id))

  return { nodes: filteredNodes, links: filteredLinks }
}

export function findByNumberOfConnections(nodes: any[], links: any[], numberOfConnections: number) {
  const connectionCounts: { [key: string]: number } = {}

  links.forEach(link => {
    connectionCounts[link.source] = (connectionCounts[link.source] || 0) + 1
    connectionCounts[link.target] = (connectionCounts[link.target] || 0) + 1
  })

  const coreNodes = nodes.filter(n => (connectionCounts[n.id] || 0) >= numberOfConnections)
  const coreNodeIds = new Set(coreNodes.map(n => n.id))

  const filteredLinks = links.filter(
    l => coreNodeIds.has(l.source) || coreNodeIds.has(l.target)
  )

  const connectedNodeIds = new Set<string>()
  filteredLinks.forEach(l => {
    connectedNodeIds.add(l.source)
    connectedNodeIds.add(l.target)
  })

  const filteredNodes = nodes.filter(n => connectedNodeIds.has(n.id))

  return { nodes: filteredNodes, links: filteredLinks }
}