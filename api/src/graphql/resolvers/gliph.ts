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

export const resolvers = {
  Query: {
    gliphGraph: async (_parent, { runID, patternLength = 5, numberOfConnections = 10, patternContains = '' }, { driver }) => {
      const session = driver.session()
      try {
        const graphName = `run-${runID}-graph`
        await session.run(
          `CALL gds.graph.exists($graphName) YIELD exists
          WITH exists WHERE exists
          CALL gds.graph.drop($graphName) YIELD graphName
          RETURN graphName`,
          { graphName }
        )

        console.log(`Creating graph projection ${graphName} for Run ${runID}`)
        await session.run(
          `match (:Run { runID: $runID })-[:HAS_RESULT]->(target:GliphPattern)
          WHERE size(target.pattern) >= $patternLength
          AND size((target)-[:HAS_PATTERN]-()) >= $numberOfConnections
          ${patternContains.length > 0 &&patternContains.length <= patternLength ? 'AND toLower(target.pattern) CONTAINS toLower($patternContains)' : ''}
          WITH target, size((target)-[:HAS_PATTERN]-()) AS totalConnections
          ORDER BY totalConnections DESC
          // LIMIT $maximum // hard limit to avoid getting too many nodes
          optional match (target)<-[r:HAS_PATTERN]-(source:GliphTCR)
          with gds.graph.project(
            $graphName,
            source,
            target,
            {
              sourceNodeProperties: {
                nodeID: id(source)
              },
              targetNodeProperties: {
                nodeID: id(target)
              },
              sourceNodeLabels: labels(source),
              targetNodeLabels: labels(target)
            }) as graph
            return graph
          `, { runID, graphName, patternLength, numberOfConnections, patternContains }
        )
        const result = await session.run(
          `CALL gds.graph.nodeProperties.stream($graphName, 'nodeID')
          YIELD nodeId
          MATCH (n) WHERE id(n) = nodeId
          WITH collect({
            id: nodeId, // maybe we can use n.id instead
            value: CASE WHEN labels(n)[0] = 'GliphTCR' THEN n.cdr3b ELSE n.pattern END,
            group: CASE WHEN labels(n)[0] = 'GliphTCR' THEN 'tcr' ELSE 'pattern' END,
            size: CASE WHEN labels(n)[0] = 'GliphPattern' THEN n.size ELSE 0 END,
            score: CASE WHEN labels(n)[0] = 'GliphPattern' THEN n.score ELSE null END,
            source: CASE WHEN labels(n)[0] = 'GliphTCR' THEN n.source ELSE null END,
            v_gene: CASE WHEN labels(n)[0] = 'GliphTCR' THEN n.v_gene ELSE null END,
            j_gene: CASE WHEN labels(n)[0] = 'GliphTCR' THEN n.j_gene ELSE null END
            // add more properties as needed
          }) AS nodes
          CALL gds.graph.relationships.stream($graphName)
          YIELD sourceNodeId, targetNodeId, relationshipType
          WITH nodes, collect({
            source: sourceNodeId, 
            target: targetNodeId, 
            type: "HAS_PATTERN"
          }) AS links
          RETURN {nodes: nodes, links: links} AS graphData
          `, { graphName }
        )

        const { nodes, links } = result.records[0].get('graphData')
        const coloredNodes = nodes.map(node => ({
          ...node,
          color: node.group === 'pattern' ? colors.pattern : colors.tcr[node.source?.toLowerCase()] || colors.tcr.default,
        }))

        return {
          nodes: coloredNodes,
          links
        }
      } catch (error) {
        console.error("gliphGraph error:", error)
        throw new ApolloError('Failed to fetch GLIPH graph', 'FETCH_FAILED')
      } finally {
        session.close()
      }
    }
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
