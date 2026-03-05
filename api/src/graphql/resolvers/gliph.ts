import { ApolloError } from 'apollo-server'
import { int } from 'neo4j-driver'

const toNumber = (num) => {
  if (num && num.toNumber) {
    return num.toNumber()
  }
  return num
}

export const resolvers = {
  Query: {
    gliphGraph: async (_parent, { runID }, { driver }) => {
      const session = driver.session()
      try {
        const query = `
          MATCH (r:Run {runID: $runID})-[:HAS_RESULT]->(p:GliphPattern)
          OPTIONAL MATCH (t:GliphTCR)-[:HAS_PATTERN]->(p)
          RETURN p { .*, group: 'pattern' } as pattern, collect(t { .*, group: 'tcr' }) as tcrs
        `
        const result = await session.run(query, { runID })
        
        const nodesMap = new Map()
        const links: any[] = []

        result.records.forEach(record => {
          const pattern = record.get('pattern')
          const patternId = pattern.id
          
          if (!nodesMap.has(patternId)) {
            nodesMap.set(patternId, {
              id: patternId,
              group: 'pattern',
              pattern: pattern.pattern,
              score: toNumber(pattern.score),
              size: toNumber(pattern.size)
            })
          }

          const tcrs = record.get('tcrs')
          if (tcrs && Array.isArray(tcrs)) {
            tcrs.forEach(tcr => {
              if (!tcr) return; // Should not happen with collect unless empty
              const tcrId = tcr.id
              
              if (!nodesMap.has(tcrId)) {
                nodesMap.set(tcrId, {
                   id: tcrId,
                   group: 'tcr',
                   sample: tcr.sample,
                   cdr3b: tcr.cdr3b,
                   v_gene: tcr.v_gene,
                   j_gene: tcr.j_gene
                })
              }
              // Link pattern <-> tcr
              links.push({ source: patternId, target: tcrId })
            })
          }
        })

        // Unique links. Since we iterate (pattern, collect(tcr)), each link (pattern, tcr) is unique unless tcr connects to same pattern multiple times (impossible in this model usually)
        // But a TCR can connect to multiple patterns.
        // We will process each pattern result. If T1 connects to P1 and P2, we get two rows: (P1, [T1...]), (P2, [T1...]).
        // We add T1 to nodesMap twice (second time ignored).
        // We add link P1-T1. We add link P2-T1.
        // So links array should be unique by definition of query iteration.

        return {
          nodes: Array.from(nodesMap.values()),
          links: links
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
