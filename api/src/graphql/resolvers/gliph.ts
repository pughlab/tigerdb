import { ApolloError } from 'apollo-server'
import neo4j from "neo4j-driver";

const MINIMUM_DEGREE = 4
const MINIMUM_COMMUNITY_SIZE = 4

type TCRParameters = {
  limit: number;
  theta: number;
  gamma: number;
  minCommunitySize: number;
  cdr3bContains: string;
  maxLevels: number;
  minDegree: number;
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

async function setUpGraphData(session, runID) {
  await session.run(`
    MATCH (n:Run {runID: $runID})-[:HAS_RESULT]->(t:GliphTCR)
    SET t:Projectable
  `, { runID })
}

async function projectGraph(session, graphName) {
  await session.run(`
    CALL gds.graph.project(
      $graphName,
      'Projectable',
      { 
          RELATED_TO: { orientation: 'UNDIRECTED' }
      }
    )
  `, { graphName })
}

async function runAlgorithms(session, graphName, parameters = {}) {
  const defaultParameters = {
    theta: 0.01,
    gamma: 10,
    maxLevels: 20
  }
  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([_, v]) => v !== undefined)
  )
  const {
    theta,
    gamma,
    maxLevels,
  } = {...defaultParameters, ...cleanParameters }
  await session.run(`
    CALL gds.leiden.mutate(
      $graphName, {
        theta: $theta,
        gamma: $gamma,
        maxLevels: $maxLevels,
        mutateProperty: 'communityId'
      }
    )
  `, { graphName, theta, gamma, maxLevels: neo4j.int(maxLevels) })
  await session.run(`
    CALL gds.kcore.mutate(
      $graphName,
      { mutateProperty: 'kcoreIndex' }
    )
  `, { graphName })
}

async function getGraph(session, graphName) {
  const results = await session.run(`
    CALL gds.graph.nodeProperties.stream($graphName, ['communityId', 'kcoreIndex'])
    YIELD nodeId, nodeProperty, propertyValue
    WITH nodeId,
      max(CASE WHEN nodeProperty = 'communityId' THEN propertyValue END) AS communityId,
      max(CASE WHEN nodeProperty = 'kcoreIndex' THEN propertyValue END) AS kcore
    WHERE kcore >= $kcoreValue
    MATCH (n) WHERE id(n) = nodeId
    OPTIONAL MATCH (n)-[:RELATED_TO]-(target)
    RETURN 
      n.id AS id,
      n.source AS source,
      n.v_gene AS v_gene,
      n.cdr3b AS label,
      communityId AS group,
      kcore,
      collect(target.id) AS targetIds
  `, { graphName, kcoreValue: neo4j.int(MINIMUM_COMMUNITY_SIZE - 1) })
  return results.records
}

async function tearDownGraphData(session) {
  await session.run(`
    MATCH (n:Projectable)
    REMOVE n:Projectable
  `)
}

export const resolvers = {
  Query: {
    gliphGraph: async (_parent, { input }, { driver }) => {
      const session = driver.session()
      const { runID } = input
      const graphName = `run-${runID}-graph`
      try {
        await setUpGraphData(session, runID)
        await projectGraph(session, graphName)
        await runAlgorithms(session, graphName)
        const records = await getGraph(session, graphName)

        const nodes: any[] = []
        const links: any[] = []
        const validNodeIds = new Set()
        records.forEach(record => {
          const id = record.get("id")
          const source = record.get("source")
          validNodeIds.add(id)

          nodes.push({
            id,
            source,
            v_gene: record.get("v_gene"),
            group: record.get("group").toInt(),
            kcore: record.get("kcore").toInt(),
            label: record.get("label"),
            color: colors.tcr[source?.toLowerCase()] || colors.tcr.default
          })
        })
        records.forEach(record => {
          const sourceId = record.get("id")
          const tcrSource = record.get("source")
          const group = record.get("group").toInt()
          const targetIds = record.get("targetIds")

          targetIds.forEach(id => {
            if (id && validNodeIds.has(id) && sourceId < id) {
              links.push({
                source: sourceId,
                target: id,
                group,
                color: colors.tcr[tcrSource?.toLowerCase()] || colors.tcr.default
              })
            }
          })
        })
        return { nodes, links }
      } catch (error) {
        console.error("gliphGraph error:", error)
        throw new ApolloError('Failed to fetch GLIPH graph', 'FETCH_FAILED')
      } finally {
        await dropGraph(session, graphName)
        await tearDownGraphData(session)
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
