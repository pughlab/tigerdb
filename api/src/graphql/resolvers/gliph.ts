import { ApolloError } from 'apollo-server'
import neo4j from "neo4j-driver";

const MINIMUM_DEGREE = 3

type TCRParameters = {
  limit: number;
  theta: number;
  gamma: number;
  minCommunitySize: number,
  cdr3bContains: string,
  maxLevels: number
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

async function projectGraph(session: any, runID: any, graphName: string, minDegree: number) {
  console.log(`Creating graph projection ${graphName} for Run ${runID}`)
  await session.run(
    `MATCH (run:Run { runID: $runID })-[:HAS_RESULT]-(t1:GliphTCR),
      (t1)-[:RELATED_TO]-(t2:GliphTCR),
      (t1)-[:RELATED_TO]-(t3:GliphTCR),
      (t1)-[:RELATED_TO]-(t4:GliphTCR),
      (t2)-[:RELATED_TO]-(t3),
      (t2)-[:RELATED_TO]-(t4),
      (t3)-[:RELATED_TO]-(t4)
      WHERE id(t1) < id(t2) AND id(t2) < id(t3) AND id(t3) < id(t4)
      UNWIND [t1, t2, t3, t4] AS tcrNode
      WITH DISTINCT tcrNode AS tcr
      // WHERE size((tcr)-[:RELATED_TO]-()) >= $minDegree
      WITH collect(tcr) AS cliqueNodes
      UNWIND cliqueNodes AS source
      MATCH (source)-[rel:RELATED_TO]-(target:GliphTCR)
      WHERE target IN cliqueNodes AND id(source) < id(target)
      WITH gds.graph.project(
          $graphName,
          source,
          target,
          {
              sourceNodeLabels: labels(source),
              targetNodeLabels: labels(target),
              relationshipType: type(rel)
          },
          { undirectedRelationshipTypes: ['*'] }
      ) AS g
      RETURN g.graphName, g.nodeCount AS nodes, g.relationshipCount AS edges`,
    { runID, graphName }
  )
}

async function getGraph(session, graphName, parameters: TCRParameters) {
  const defaultParameters = {
    limit: 0,
    theta: 0.01,
    gamma: 1000,
    minCommunitySize: 0,
    cdr3bContains: '',
    maxLevels: 20
  }
  const cleanParameters = Object.fromEntries(Object.entries(parameters).filter(([_, v]) => v !== undefined))
  const { limit, theta, gamma, minCommunitySize, maxLevels, cdr3bContains } = {...defaultParameters, ...cleanParameters }
  const result = await session.run(
    `CALL gds.leiden.stream(
          $graphName, {
                theta: $theta,
                gamma: $gamma,
                ${minCommunitySize > 0 ? `minCommunitySize: $minCommunitySize,` : ''}
                maxLevels: $maxLevels
          }
      )
      YIELD nodeId, communityId
      WITH gds.util.asNode(nodeId) AS tcr, communityId
      WITH DISTINCT(tcr.cdr3b) as sourceCDR, communityId
      MATCH (source:GliphTCR {cdr3b:sourceCDR})-[:RELATED_TO]-(target)
      ${cdr3bContains?.length > 0 
        ? `WHERE toLower(source.cdr3b) CONTAINS "${cdr3bContains.toLowerCase()}" OR toLower(target.cdr3b) CONTAINS "${cdr3bContains.toLowerCase()}"` 
        : ''
      }
      RETURN source, target, communityId`,
      { graphName, limit, theta, gamma, maxLevels: neo4j.int(maxLevels), minCommunitySize: neo4j.int(minCommunitySize) }
  )
  const nodes = new Map()
  const links: { source: number, target: number }[] = []
  result.records.forEach(record => {
    const source = record.get('source')
    const target = record.get('target')
    const communityId = record.get('communityId').toNumber()

    if (!nodes.has(source.properties.id)) {
      nodes.set(source.properties.id, {
        id: source.properties.id,
        group: communityId,
        label: source.properties.cdr3b,
        source: source.properties.source,
        color: colors.tcr[source.properties.source?.toLowerCase()] ?? colors.tcr.default
      })
    }
    if (!nodes.has(target.properties.id)) {
      nodes.set(target.properties.id, {
        id: target.properties.id,
        group: communityId,
        label: target.properties.cdr3b,
        source: target.properties.source,
        color: colors.tcr[target.properties.source?.toLowerCase()] ?? colors.tcr.default
      })
    }
    links.push({
      source: source.properties.id,
      target: target.properties.id,
    })
  })

  const nodesArray = Array.from(nodes.values())
  const linksArray = links

  const degreeMap = new Map()
  linksArray.forEach(link => {
    degreeMap.set(link.source, (degreeMap.get(link.source) || 0) + 1)
    degreeMap.set(link.target, (degreeMap.get(link.target) || 0) + 1)
  })

  const filteredNodes = nodesArray.filter(node => degreeMap.get(node.id) >= MINIMUM_DEGREE)
  const validNodeIds = new Set(filteredNodes.map(n => n.id))

  const filteredLinks = linksArray.filter(link =>
    validNodeIds.has(link.source) && validNodeIds.has(link.target)
  )

  return {
    nodes: filteredNodes,
    links: filteredLinks,
  }
}

export const resolvers = {
  Query: {
    gliphGraph: async (_parent, { input }, { driver }) => {
      const session = driver.session()
      const { runID, minCommunitySize, cdr3bContains, minDegree } = input
      try {
        const graphName = `run-${runID}-graph`
        await dropGraph(session, graphName)
        // await projectGraph(session, runID, graphName, minDegree)
        await projectGraph(session, runID, graphName, MINIMUM_DEGREE)
        return await getGraph(session, graphName, { minCommunitySize, cdr3bContains } as TCRParameters)
      } catch (error) {
        console.error("gliphGraph error:", error)
        throw new ApolloError('Failed to fetch GLIPH graph', 'FETCH_FAILED')
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

             WITH t, clusterId
             MATCH (r:Run {runID: $runID})
             MERGE (r)-[:HAS_RESULT]->(t)
             
             // Temporarily link to a cluster node to build TCR-TCR relationships afterwards
             MERGE (c:TempCluster {id: clusterId})
             MERGE (t)-[:TEMP_IN_CLUSTER]->(c)
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
        
        console.log(`Creating RELATED_TO edges between TCRs for Run ${runID}`);
        
        // Group TCRs by cluster, link them, then clean up temp nodes
        const edgeQueryTCR = `
          MATCH (t1:GliphTCR)-[:TEMP_IN_CLUSTER]->(c:TempCluster)<-[:TEMP_IN_CLUSTER]-(t2:GliphTCR)
          WHERE id(t1) < id(t2)
          WITH t1, t2, collect(DISTINCT c.id) AS clusterIDs
          MERGE (t1)-[rel:RELATED_TO]-(t2)
          SET rel.clusterIDs = clusterIDs
          RETURN count(rel)
        `;
        await session.run(edgeQueryTCR, { runID });

        const cleanupQuery = `MATCH (c:TempCluster) DETACH DELETE c`;
        await session.run(cleanupQuery);

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
