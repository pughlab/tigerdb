import { ApolloError } from "apollo-server";
import neo4j from "neo4j-driver";

const MINIMUM_COMMUNITY_SIZE = 4;

const colors = {
  pattern: "#ffffff",
  tcr: {
    default: "#1f77b4",
    human: "#ff0000",
    chlamydiatrachomatis: "#32a852",
    enterobacteriaceaebacterium: "#265c34",
    "m.tuberculosis": "#199139",
    "s-pneumoniae": "#06c739",
    salmonellatyphimurium: "#033611",
    cef: "#FFF9C4",
    cmv: "#FFF176",
    ebv: "#FFEB3B",
    influenza: "#FDD835",
    denv: "#FBC02D",
    hbv: "#FDD835",
    hcv: "#FFD600",
    hpv: "#FBC02D",
    hsv: "#FFC107",
    htlv1: "#FFB300",
    mcpyv: "#EAB308",
    yfv: "#CA8A04",
  },
};

async function createTCRNodes(session, runID, presignedURL) {
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
          list[16] as sample,
          list[18] as hlaA,
          list[19] as hlaB,
          list[20] as hlaC,
          list[21] as hlaDPA1,
          list[22] as hlaDPB1,
          list[23] as hlaDQA1,
          list[24] as hlaDQB1,
          list[25] as hlaDRB1,
          list[26] as hlaDRB3,
          list[27] as hlaDRB4,
          list[28] as hlaDRB5
      WHERE clusterId IS NOT NULL AND cdr3 IS NOT NULL AND sample IS NOT NULL
      MERGE (t:GliphTCR {id: sample + "_" + cdr3})
      ON CREATE SET 
          t.cdr3b = cdr3,
          t.v_gene = vGene,
          t.j_gene = jGene,
          t.sample = sample,
          t.source = split(sample, ":")[0],
          t.hla_a = hlaA,
          t.hla_b = hlaB,
          t.hla_c = hlaC,
          t.hla_dpa1 = hlaDPA1,
          t.hla_dpb1 = hlaDPB1,
          t.hla_dqa1 = hlaDQA1,
          t.hla_dqb1 = hlaDQB1,
          t.hla_drb1 = hlaDRB1,
          t.hla_drb3 = hlaDRB3,
          t.hla_drb4 = hlaDRB4,
          t.hla_drb5 = hlaDRB5
      WITH t, clusterId
      MATCH (r:Run {runID: $runID})
      MERGE (r)-[:HAS_RESULT]->(t)
       // Temporarily link to a cluster node to build TCR-TCR relationships afterwards
      MERGE (c:TempCluster {id: clusterId})
      MERGE (t)-[:TEMP_IN_CLUSTER {runID: $runID}]->(c)
      ',
      { 
        batchSize: 10000, 
        iterateList: true, 
        parallel: false, 
        retries: 3, 
        params: { presignedURL: $presignedURL, runID: $runID } 
      }
    )
  `;
  await session.run(query, { runID, presignedURL })
  console.log('Enriching the TCR nodes with project, dataset, and annotation variable information...');
  const enrichmentQuery = `
    CALL apoc.periodic.iterate(
    "MATCH (:Run {runID: $runID})-[:HAS_RESULT]->(t:GliphTCR)
      WHERE t.cdr3b IS NOT NULL
      RETURN t.cdr3b AS cdr3b, collect(t) AS tcrs",
  
    "CALL {
      WITH cdr3b
      MATCH (v:AnnotationVariable {cdr3b: cdr3b})
      WITH v LIMIT 1
      MATCH (v)<-[:HAS_ANNOTATION_VARIABLE]-(:CuratedAnnotation)<-[:HAS_CURATED_ANNOTATION]-(d:Dataset)<-[:HAS_DATASET]-(p:Project)
      RETURN p, d, v
    }
    UNWIND tcrs AS t
    SET t.projectID = p.projectID,
        t.projectName = p.name,
        t.datasetID = d.datasetID,
        t.datasetName = d.name,
        t.variableID = v.annotationVariableID,
        t.trav = v.trav,
        t.traj = v.traj,
        t.mhc = v.mhc,
        t.mhcClass = v.mhcClass,
        t.epitopeGene = v.epitopeGene,
        t.epitopeAAseq = v.epitopeAAseq,
        t.epitopeSpecies = v.epitopeSpecies,
        t.mutation = v.mutation,
        t.recognizesWTEpitope = v.recognizesWTEpitope,
        t.uniProt = v.uniProt,
        t.reference = v.reference",
    { batchSize: 2000, parallel: false, params: { runID: $runID } }
  )
  `;
  await session.run(enrichmentQuery, { runID });
}

async function createTCREdges(session, runID) {
  const query = `
    CALL apoc.periodic.iterate(
      "
      MATCH (c:TempCluster)
      WHERE (c)<-[:TEMP_IN_CLUSTER {runID: $runID}]-()
      RETURN c
      ",
      "
      MATCH (c)<-[:TEMP_IN_CLUSTER {runID: $runID}]-(t:GliphTCR)
      WITH c, collect(t) AS tcrs
      WHERE size(tcrs) > 1
      UNWIND apoc.coll.combinations(tcrs, 2) AS pair
      WITH c,
          (CASE WHEN id(pair[0]) < id(pair[1]) THEN pair[0] ELSE pair[1] END) AS t1,
          (CASE WHEN id(pair[0]) < id(pair[1]) THEN pair[1] ELSE pair[0] END) AS t2
      MERGE (t1)-[rel:RELATED_TO]->(t2)
      ON CREATE SET rel.clusterIDs = [c.id]
      ON MATCH SET rel.clusterIDs = CASE
          WHEN c.id IN rel.clusterIDs THEN rel.clusterIDs
          ELSE rel.clusterIDs + c.id
      END
      ",
      {
          batchSize: 1000,
          parallel: false,
          params: { runID: $runID }
      }
  )
  `;
  await session.run(query, { runID });
}

async function cleanupClusterNodes(session, runID: string) {
  const query = `
    CALL apoc.periodic.iterate(
        "MATCH (c:TempCluster)<-[r:TEMP_IN_CLUSTER {runID: $runID}]-() RETURN r, c",
        "DELETE r 
            WITH c WHERE NOT (c)<--()
            DELETE c
        ",
        { batchSize: 10000, parallel: false, params: { runID: $runID } }
    )
  `;
  await session.run(query, { runID });
}

async function getNodeDetails(session, cdr3b: string) {
  const results = await session.run(
    `
    MATCH (p:Project)-->(d:Dataset)-->(:CuratedAnnotation)-->(v:AnnotationVariable {cdr3b: $cdr3b})
    RETURN p, d, v
  `,
    { cdr3b }
  );
  return results.records[0];
}

async function checkIfGraphExists(session, graphName) {
  const result = await session.run(
    `CALL gds.graph.exists($graphName) YIELD exists RETURN exists`,
    { graphName }
  );
  return result.records[0].get("exists");
}

async function dropGraph(session, graphName) {
  const graphExists = await checkIfGraphExists(session, graphName);
  if (graphExists) {
    await session.run(
      `CALL gds.graph.drop($graphName) YIELD graphName
      RETURN graphName`,
      { graphName }
    );
  }
}

async function setUpGraphData(session, runID) {
  await session.run(
    `
    CALL apoc.periodic.iterate(
      'MATCH (n:Run {runID: $runID})-[:HAS_RESULT]->(t:GliphTCR) RETURN t',
      'SET t:Projectable',
      {
        batchSize: 10000,
        parallel: false,
        params: { runID: $runID } 
      }
    )
  `,
    { runID }
  );
}

async function projectGraph(session, graphName) {
  await session.run(
    `
    CALL gds.graph.project(
      $graphName,
      'Projectable',
      {
        RELATED_TO: { 
          type: 'RELATED_TO',
          orientation: 'UNDIRECTED',
          aggregation: 'SINGLE'
        }
      }
    )
  `,
    { graphName }
  );
}

async function runAlgorithms(session, graphName, parameters = {}) {
  const defaultParameters = {
    theta: 0.01,
    gamma: 10,
    maxLevels: 20,
  };
  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([_, v]) => v !== undefined)
  );
  const { theta, gamma, maxLevels } = {
    ...defaultParameters,
    ...cleanParameters,
  };
  await session.run(
    `
    CALL gds.leiden.mutate(
      $graphName, {
        theta: $theta,
        gamma: $gamma,
        maxLevels: $maxLevels,
        mutateProperty: 'communityId'
      }
    )
  `,
    { graphName, theta, gamma, maxLevels: neo4j.int(maxLevels) }
  );
  await session.run(
    `
    CALL gds.kcore.mutate(
      $graphName,
      { mutateProperty: 'kcoreIndex' }
    )
  `,
    { graphName }
  );
}

async function getFilteredNodes(
  session: any,
  graphName: string,
  minCommunitySize = MINIMUM_COMMUNITY_SIZE,
  cdr3bContains?: string,
  limitNodes = 0
) {
  const query = `
    CALL gds.graph.nodeProperties.stream($graphName, ['communityId', 'kcoreIndex'])
      YIELD nodeId, nodeProperty, propertyValue
      WITH nodeId,
          max(CASE WHEN nodeProperty = 'communityId' THEN propertyValue END) AS communityId,
          max(CASE WHEN nodeProperty = 'kcoreIndex' THEN propertyValue END) AS kcore
      WITH communityId, collect({nodeId: nodeId, kcore: kcore}) AS members
      WHERE size(members) >= $minCommunitySize
      UNWIND members AS member
      MATCH (n:GliphTCR) WHERE id(n) = member.nodeId
      AND ($cdr3bContains IS NULL OR $cdr3bContains = '' OR toLower(n.cdr3b) CONTAINS toLower($cdr3bContains))
      RETURN 
          id(n) AS id,
          n.source AS source,
          n.v_gene AS v_gene,
          n.j_gene AS j_gene,
          n.cdr3b AS label,
          n.hla_a AS hla_a,
          n.hla_b AS hla_b,
          n.hla_c AS hla_c,
          n.hla_dpa1 AS hla_dpa1,
          n.hla_dpb1 AS hla_dpb1,
          n.hla_dqa1 AS hla_dqa1,
          n.hla_dqb1 AS hla_dqb1,
          n.hla_drb1 AS hla_drb1,
          n.hla_drb3 AS hla_drb3,
          n.hla_drb4 AS hla_drb4,
          n.hla_drb5 AS hla_drb5,
          n.projectID AS projectID,
          n.projectName AS projectName,
          n.datasetID AS datasetID,
          n.datasetName AS datasetName,
          n.variableID AS variableID,
          n.trav AS trav,
          n.traj AS traj,
          n.mhc AS mhc,
          n.mhcClass AS mhcClass,
          n.epitopeGene AS epitopeGene,
          n.epitopeAAseq AS epitopeAAseq,
          n.epitopeSpecies AS epitopeSpecies,
          n.mutation AS mutation,
          n.recognizesWTEpitope AS recognizesWTEpitope,
          n.uniProt AS uniProt,
          n.reference AS reference,
          communityId AS group,
          member.kcore AS kcore
      ${limitNodes === 0 ? '' : 'LIMIT $limitNodes'}
  `
  const result = await session.run(query, {
      graphName,
      minCommunitySize: neo4j.int(minCommunitySize),
      cdr3bContains: cdr3bContains || null,
      limitNodes: neo4j.int(limitNodes),
    }
  );
  return result.records;
}

async function getFilteredLinks(session: any, activeNodeIds: string[]) {
  if (activeNodeIds.length === 0) return [];

  const result = await session.run(
    `
      UNWIND $activeNodeIds AS sourceId
      MATCH (n1:GliphTCR WHERE id(n1) = sourceId)-[:RELATED_TO]->(n2:GliphTCR)
      WHERE id(n2) IN $activeNodeIds
      RETURN DISTINCT id(n1) AS source, id(n2) AS target
    `,
    { activeNodeIds }
  );
  return result.records;
}

async function tearDownGraph(session, graphName) {
  const graphExists = await checkIfGraphExists(session, graphName);
  if (graphExists) {
    await dropGraph(session, graphName);
  }
  await session.run(`
    CALL apoc.periodic.iterate(
      'MATCH (n:Projectable) RETURN n',
      'REMOVE n:Projectable',
      {
        batchSize: 10000,
        parallel: false,
        iterateList: true
      }
    )
  `);
}

export const resolvers = {
  Query: {
    gliphGraph: async (_parent, { input }, { driver }) => {
      const session = driver.session();
      const {
        runID,
        minCommunitySize = MINIMUM_COMMUNITY_SIZE,
        cdr3bContains,
      } = input;
      const graphName = `run-${runID}-graph`;
      try {
        await setUpGraphData(session, runID);
        await projectGraph(session, graphName);
        await runAlgorithms(session, graphName);

        const nodeRecords = await getFilteredNodes(
          session,
          graphName,
          minCommunitySize,
          cdr3bContains,
          5000
        );

        const nodes = nodeRecords.map((record) => {
          const source = record.get("source");
          return {
            id: record.get("id"),
            source,
            v_gene: record.get("v_gene"),
            j_gene: record.get("j_gene"),
            group: record.get("group").toInt(),
            kcore: record.get("kcore").toInt(),
            label: record.get("label"),
            hla_a: record.get("hla_a"),
            hla_b: record.get("hla_b"),
            hla_c: record.get("hla_c"),
            hla_dpa1: record.get("hla_dpa1"),
            hla_dpb1: record.get("hla_dpb1"),
            hla_dqa1: record.get("hla_dqa1"),
            hla_dqb1: record.get("hla_dqb1"),
            hla_drb1: record.get("hla_drb1"),
            hla_drb3: record.get("hla_drb3"),
            hla_drb4: record.get("hla_drb4"),
            hla_drb5: record.get("hla_drb5"),
            projectID: record.get("projectID"),
            projectName: record.get("projectName"),
            datasetID: record.get("datasetID"),
            datasetName: record.get("datasetName"),
            variableID: record.get("variableID"),
            trav: record.get("trav"),
            traj: record.get("traj"),
            mhc: record.get("mhc"),
            mhcClass: record.get("mhcClass"),
            epitopeGene: record.get("epitopeGene"),
            epitopeAAseq: record.get("epitopeAAseq"),
            epitopeSpecies: record.get("epitopeSpecies"),
            mutation: record.get("mutation"),
            recognizesWTEpitope: record.get("recognizesWTEpitope"),
            uniProt: record.get("uniProt"),
            reference: record.get("reference"),
            color: colors.tcr[source?.toLowerCase()] || colors.tcr.default,
          };
        });

        const activeNodeIds = nodes.map((n) => n.id);
        const linkRecords = await getFilteredLinks(session, activeNodeIds);
        const links = linkRecords.map((record) => {
          const sourceNode = nodes.find(node => node.id.toNumber() === record.get("source").toNumber());
          return {
            source: record.get("source"),
            target: record.get("target"),
            group: sourceNode.group,
            color: sourceNode.color
          }
        });
        return { nodes, links };
      } catch (error) {
        console.error("gliphGraph error:", error);
        throw new ApolloError("Failed to fetch GLIPH graph", "FETCH_FAILED");
      } finally {
        await tearDownGraph(session, graphName);
        session.close();
      }
    },
    nodeDetailsByCDR3b: async (_parent, { cdr3b }, { driver }) => {
      const session = driver.session();
      try {
        const record = await getNodeDetails(session, cdr3b);
        if (!record) {
          return {
            projectID: "",
            projectName: "",
            datasetID: "",
            datasetName: "",
            variableID: "",
            cdr3b: cdr3b,
            v_gene: "",
            j_gene: "",
            trav: "",
            traj: "",
            mhc: null,
            mhcClass: null,
            epitopeGene: null,
            epitopeAAseq: null,
            epitopeSpecies: null,
            mutation: null,
            recognizesWTEpitope: null,
            uniProt: null,
            reference: null,
          };
        }
        const project = record.get("p").properties;
        const dataset = record.get("d").properties;
        const variable = record.get("v").properties;
        return {
          projectID: project.projectID,
          projectName: project.name,
          datasetID: dataset.datasetID,
          datasetName: dataset.name,
          variableID: variable.annotationVariableID,
          cdr3b: variable.cdr3b,
          v_gene: variable.trbv,
          j_gene: variable.trbj,
          trav: variable.trav,
          traj: variable.traj,
          mhc: variable.mhc,
          mhcClass: variable.mhcClass,
          epitopeGene: variable.epitopeGene,
          epitopeAAseq: variable.epitopeAAseq,
          epitopeSpecies: variable.epitopeSpecies,
          mutation: variable.mutation,
          recognizesWTEpitope: variable.recognizesWTEpitope,
          uniProt: variable.uniProt,
          reference: variable.reference,
        };
      } finally {
        session.close();
      }
    },
  },
  Mutation: {
    importGliphResults: async (
      _parent,
      { runID, presignedURL },
      { driver }
    ) => {
      const session = driver.session();
      try {
        await session.run(`CREATE CONSTRAINT IF NOT EXISTS FOR (t:GliphTCR) REQUIRE t.id IS UNIQUE`);
        await session.run(`CREATE CONSTRAINT IF NOT EXISTS FOR (c:TempCluster) REQUIRE c.id IS UNIQUE`);
        await session.run(`CREATE INDEX annotationvariable_cdr3b IF NOT EXISTS FOR (v:AnnotationVariable) ON (v.cdr3b)`);

        console.log(`Starting GLIPH import for Run ${runID} from ${presignedURL}`);
        await createTCRNodes(session, runID, presignedURL);

        console.log(`Creating RELATED_TO edges between TCRs for Run ${runID}`);
        await createTCREdges(session, runID);

        console.log(`Cleaning up temporary cluster nodes`);
        await cleanupClusterNodes(session, runID);

        return "Import completed successfully";
      } catch (error) {
        console.error("importGliphResults error:", error);
        throw new ApolloError(
          "Failed to import GLIPH results",
          "IMPORT_FAILED"
        );
      } finally {
        session.close();
      }
    },
  },
};
