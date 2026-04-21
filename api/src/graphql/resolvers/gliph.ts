import { ApolloError } from 'apollo-server'

const toNumber = (num) => {
  if (num?.toNumber) {
    return num.toNumber()
  }
  return num
}

const colors = {
  pattern: '#ffffff',
  tcr: {
    default: '#1f77b4',
    'human': '#ff0000',
    'chlamydiatrachomatis': '#32a852',
    'enterobacteriaceaebacterium': '#265c34',
    'm.tuberculosis': '#199139',
    's-pneumoniae': '#06c739',
    'salmonellatyphimurium': '#033611',
    'cef': '#FFF9C4',
    'cmv': '#FFF176',
    'ebv': '#FFEB3B',
    'influenza': '#FDD835',
    'denv': '#FBC02D',
    'hbv': '#FDD835',
    'hcv': '#FFD600',
    'hpv': '#FBC02D',
    'hsv': '#FFC107',
    'htlv1': '#FFB300',
    'mcpyv': '#EAB308',
    'yfv': '#CA8A04'
  }
}

async function dropGraph(session, graphName) {
  await session.run(
    `CALL gds.graph.exists($graphName) YIELD exists
    WITH exists WHERE exists
    CALL gds.graph.drop($graphName) YIELD graphName
    RETURN graphName`,
    { graphName }
  )
}

async function projectGraph(graphName: string, runID: any, session: any, patternContains: string, patternLength: number, numberOfConnections: number) {
  console.log(`Creating graph projection ${graphName} for Run ${runID}`)
  await session.run(
    `MATCH (run:Run { runID: $runID })-[:HAS_RESULT]->(source:GliphPattern)
    MATCH (source)-[r:RELATED_TO]-(target:GliphPattern)
    WHERE size(source.pattern) >= $patternLength AND size(target.pattern) >= $patternLength
    ${patternContains.length > 0 ? 'AND (source.pattern CONTAINS $patternContains OR target.pattern CONTAINS $patternContains)' : ''}
    OPTIONAL MATCH (source)-[:HAS_PATTERN]-(tcr:GliphTCR)
    WHERE size((source)-[]-(tcr)) >= $numberOfConnections AND size((target)-[]-(tcr)) >= $numberOfConnections
    // extra filtering clauses for TCRs go here
    WITH gds.graph.project(
      $graphName,
      source,
      target,
      {
        sourceNodeLabels: labels(source),
        targetNodeLabels: labels(target),
        relationshipType: type(r),
        relationshipProperties: {
          weight: r.weight
        }
      },
      { undirectedRelationshipTypes: ['*'] }
    ) AS g
    RETURN g.graphName, g.nodeCount AS nodes, g.relationshipCount AS edges`,
    { runID, graphName, patternLength, numberOfConnections, patternContains }
  )
}

async function getRelatedPatterns(session, graphName, patternID = '', limit = 0) {
  const result = await session.run(
    `CALL gds.leiden.stream(
      $graphName,
      {
        relationshipWeightProperty: 'weight'
      }
    )
    YIELD nodeId, communityId
    WITH gds.util.asNode(nodeId) AS pattern, communityId
    MATCH (pattern)-[r:RELATED_TO]-(p2)
    ${patternID ? 'WHERE pattern.id = $patternID' : ''}
    RETURN 
      id(pattern) AS sourceID, 
      id(p2) AS targetID, 
      toInteger(r.weight) AS weight,
      communityId,
      pattern.id AS sourceType, 
      p2.id AS targetType,
      pattern.size AS sourceSize,
      p2.size AS targetSize,
      pattern.pattern AS sourcePattern,
      p2.pattern AS targetPattern,
      pattern.score AS sourceScore,
      p2.score AS targetScore
      // add more properties for both source and target as needed
    ${limit > 0 ? 'LIMIT toInteger($limit)' : ''}
    `, { graphName, patternID, limit }
  )
  const nodes = new Map()
  const links: { source: number, target: number, weight: number }[] = []
  result.records.forEach(record => {
    const sourceID = record.get('sourceID').toNumber()
    const targetID = record.get('targetID').toNumber()
    const weight = record.get('weight')
    const communityId = record.get('communityId').toNumber()
    const sourceType = record.get('sourceType')
    const targetType = record.get('targetType')
    const sourcePattern = record.get('sourcePattern')
    const targetPattern = record.get('targetPattern')
    const sourceScore = record.get('sourceScore')
    const targetScore = record.get('targetScore')
    const sourceSize = record.get('sourceSize')?.toNumber() ?? 1
    const targetSize = record.get('targetSize')?.toNumber() ?? 1

    if (!nodes.has(sourceID)) {
      nodes.set(sourceID, {
        id: sourceID,
        type: 'pattern',
        value: sourceType,
        group: communityId,
        label: `Pattern: ${sourcePattern} (Score: ${sourceScore}, Size: ${sourceSize}, Community: ${communityId})`,
        size: sourceSize
      })
    }
    if (!nodes.has(targetID)) {
      nodes.set(targetID, {
        id: targetID,
        type: 'pattern',
        value: targetType,
        group: communityId,
        label: `Pattern: ${targetPattern} (Score: ${targetScore}, Size: ${targetSize}, Community: ${communityId})`,
        size: targetSize
      })
    }
    links.push({
      source: sourceID,
      target: targetID,
      weight
    })
  })

  return {
    nodes: Array.from(nodes.values()),
    links
  }
}

async function getTCRs(session: any, patternID: any) {
  const nodes = new Map()
  const links: { source: number; target: number} [] = []
  const result = await session.run(
    `MATCH (p:GliphPattern {id: $patternID})-[:HAS_PATTERN]-(t:GliphTCR) return p, t`,
    { patternID }
  )

  console.log(`Fetched ${result.records.length} TCRs for pattern ${patternID}`)
  result.records.forEach(record => {
    const pattern = record.get('p')
    const tcr = record.get('t')

    if (!nodes.has(tcr.identity.toNumber())) {
      nodes.set(tcr.identity.toNumber(), {
        id: tcr.identity.toNumber(),
        value: tcr.properties.cdr3b,
        label: `TCR: ${tcr.properties.cdr3b} (${tcr.properties.v_gene}, ${tcr.properties.j_gene}), Source: ${tcr.properties.source}`,
        group: 0,
        color: colors.tcr[tcr.properties.source?.toLowerCase()] || colors.tcr.default,
        size: 1,
        type: 'tcr'
      })
    }
    links.push({
      source: pattern.identity.toNumber(),
      target: tcr.identity.toNumber()
    })
  })
  console.log(`Fetched ${nodes.size} TCR nodes and ${links.length} edges for pattern ${patternID}`)
  return {
    nodes: Array.from(nodes.values()),
    links
  }
}

export const resolvers = {
  Query: {
    gliphGraph: async (_parent, { runID, patternLength = 5, numberOfConnections = 4, patternContains = '' }, { driver }) => {
      const session = driver.session()
      try {
        const graphName = `run-${runID}-graph`
        await dropGraph(session, graphName)
        await projectGraph(graphName, runID, session, patternContains, patternLength, numberOfConnections)
        return await getRelatedPatterns(session, graphName, '', 1000)
      } catch (error) {
        console.error("gliphGraph error:", error)
        throw new ApolloError('Failed to fetch GLIPH graph', 'FETCH_FAILED')
      } finally {
        session.close()
      }
    },
    patternTCRs: async (_parent, { patternID, runID }, { driver }) => {
      const session = driver.session()
      try {
        const graphName = `run-${runID}-graph`
        const patternData = await getRelatedPatterns(session, graphName, patternID)
        // const patternData = { nodes: [], links: [] }
        const tcrData = await getTCRs(session, patternID)

        // Combine pattern and TCR data, ensuring no duplicates
        const nodesMap = new Map()
        patternData.nodes.forEach(node => nodesMap.set(node.id, node))
        tcrData.nodes.forEach(node => nodesMap.set(node.id, node))
        //console.log(`Pattern 0 is ${JSON.stringify(patternData.nodes[0])}, TCR 0 is ${JSON.stringify(tcrData.nodes[0])}`)
        const combinedNodes = Array.from(nodesMap.values())
        const combinedLinks = [...(patternData?.links || []), ...tcrData.links]
        return {
          nodes: combinedNodes,
          links: combinedLinks
        }
      } catch (error) {
        console.error("patternTCRs error:", error)
        throw new ApolloError('Failed to fetch TCRs for pattern', 'FETCH_FAILED')
      } finally {
        session.close()
      }
    },
  },
  Mutation: {
    importGliphResults: async (_parent, { runID, presignedURL }, { driver }) => {
      const session = driver.session()
      try {
        console.log(`Starting GLIPH import for Run ${runID} from ${presignedURL}`)
        
        // indices based on TIGERdb_cluster.csv structure:
        // index,pattern,Fisher_score,number_subject, number_unique_cdr3,final_score...
        // 0:index, 1:pattern, 4:unique_cdr3(size), 5:final_score, 11:type(clusterId), 12:TcRb, 13:V, 14:J, 16:Sample
        
        const query = `
          CALL apoc.periodic.iterate(
            'CALL apoc.load.csv($presignedURL, {sep: ",", header: true, failOnError: false}) YIELD list WHERE list IS NOT NULL AND size(list) > 0 RETURN list',
            '
             WITH list 
             WHERE size(list) >= 17 // Ensure enough columns

             WITH list,
                  list[11] as clusterId,
                  list[1] as patternSeq,
                  list[5] as score,
                  list[4] as size,
                  list[12] as cdr3,
                  list[13] as vGene,
                  list[14] as jGene,
                  list[16] as sample

             WHERE clusterId IS NOT NULL AND cdr3 IS NOT NULL AND sample IS NOT NULL

             // Create/Merge TCR Node
             MERGE (t:GliphTCR {id: sample + "_" + cdr3})
             ON CREATE SET 
                t.cdr3b = cdr3,
                t.v_gene = vGene,
                t.j_gene = jGene,
                t.sample = sample,
                t.source = split(sample, ":")[0]

             // Create/Merge Pattern Node
             MERGE (p:GliphPattern {id: clusterId})
             ON CREATE SET
                p.pattern = patternSeq,
                p.score = toFloat(score),
                p.size = toInteger(size)

             // Link Run to Pattern
             WITH t, p
             MATCH (r:Run {runID: $runID})
             MERGE (r)-[:HAS_RESULT]->(p)
             
             // Link TCR to Pattern
             MERGE (t)-[:HAS_PATTERN]->(p)
            ',
            { 
              batchSize: 5000, 
              iterateList: true, 
              parallel: true, 
              retries: 3, 
              params: { presignedURL: $presignedURL, runID: $runID } 
            }
          )
        `;

        const result = await session.run(query, { presignedURL, runID });
        
        console.log(`Creating RELATED_TO edges between patterns for Run ${runID}`);
        
        // 1. Shared TCRs (Weight: 2n)
        const edgeQueryTCR = `
          MATCH (r:Run {runID: $runID})-[:HAS_RESULT]->(p1:GliphPattern)<-[:HAS_PATTERN]-(t:GliphTCR)-[:HAS_PATTERN]->(p2:GliphPattern)<-[:HAS_RESULT]-(r)
          WHERE id(p1) < id(p2)
          WITH p1, p2, count(t) AS n
          MERGE (p1)-[rel:RELATED_TO]-(p2)
          SET rel.weight = 2 * n
        `;
        await session.run(edgeQueryTCR, { runID });

        // // 2. Shared Motif (Substring, minimum length 4. Weight: 1 if no shared TCRs)
        // const edgeQueryMotif = `
        //   MATCH (r:Run {runID: $runID})-[:HAS_RESULT]->(p1:GliphPattern)
        //   MATCH (r:Run {runID: $runID})-[:HAS_RESULT]->(p2:GliphPattern)
        //   WHERE id(p1) < id(p2)
        //     AND p1.pattern IS NOT NULL AND p2.pattern IS NOT NULL
        //     AND size(p1.pattern) >= 4 AND size(p2.pattern) >= 4
        //     AND (p1.pattern CONTAINS p2.pattern OR p2.pattern CONTAINS p1.pattern)
        //   MERGE (p1)-[rel:RELATED_TO]-(p2)
        //   ON CREATE SET rel.weight = 1
        // `;
        // await session.run(edgeQueryMotif, { runID });

        // Check result summary if needed
        const summary = result.records[0].get(0);
        console.log("Import summary:", summary);

        return "Import completed successfully";
      } catch (error) {
        console.error("importGliphResults error:", error);
        // console.log(error)
        throw new ApolloError('Failed to import GLIPH results', 'IMPORT_FAILED');
      } finally {
        session.close();
      }
    }
  }
}
