// match (n) detach delete n;
// match (n:DataVariableFieldDefinition) detach delete n;
// match (n) where NOT (n:CuratedDataset) OR ((n:CuratedDataset) and NOT EXISTS(n.description)) OR ((n:CuratedDataset) and (n.description <> "kasdf")) detach delete n;



:param limit => 5000


// CALL apoc.periodic.iterate('
// match (n)
// RETURN n
// '
// ,
// '
// detach delete n
// ;
// ',
// {batchSize:10000, iterateList:true, parallel:true}
// )
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;


// https://neo4j.com/developer/kb/large-delete-transaction-best-practices-in-neo4j/

// MATCH (n:DataVariable)
// CALL { WITH n
// DETACH DELETE n
// } IN TRANSACTIONS OF 10000 ROWS;

// MATCH (n:DataVariableFieldDefinition)
// CALL { WITH n
// DETACH DELETE n
// } IN TRANSACTIONS OF 10000 ROWS;

// MATCH (n:CuratedDataset)
// CALL { WITH n
// DETACH DELETE n
// } IN TRANSACTIONS OF 10000 ROWS;

return 'Delete DataVariables';
CALL apoc.periodic.iterate('MATCH (n:DataVariable) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
YIELD batches, total, timeTaken, operations, updateStatistics
RETURN batches, total, timeTaken, operations, updateStatistics;

return 'Delete DataVariableFieldDefinitions';
CALL apoc.periodic.iterate('MATCH (n:DataVariableFieldDefinition) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
YIELD batches, total, timeTaken, operations, updateStatistics
RETURN batches, total, timeTaken, operations, updateStatistics;

// CALL apoc.periodic.iterate('MATCH (n:DataVariableValue) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

// CALL apoc.periodic.iterate('MATCH (n:DataVariableField) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

// CALL apoc.periodic.iterate('MATCH (n:GeographyCity) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

// CALL apoc.periodic.iterate('MATCH (n:MinioBucket) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

// CALL apoc.periodic.iterate('MATCH (n:RawDataset) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

// CALL apoc.periodic.iterate('MATCH (n:Study) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

return 'Delete CuratedDataset';
CALL apoc.periodic.iterate('MATCH (n:CuratedDataset) RETURN n', 'detach delete n;', {batchSize:10000, iterateList:true, parallel:true})
YIELD batches, total, timeTaken, operations, updateStatistics
RETURN batches, total, timeTaken, operations, updateStatistics;


CREATE (n:CuratedDataset {curatedDatasetID: "3a79fa0d-b444-42f4-927e-fdc0aaeed3f1"});

// :param this0_name => "test";
// :param this0_description => "testgen";
// :param this0_generatedByRawDataset_connect0_node_param0 => "7ec33aac-9209-4948-8804-8cc115bc8b20";
// :param resolvedCallbacks => {};

// CALL {
// CREATE (this0:CuratedDataset)
// SET this0.curatedDatasetID = randomUUID()
// SET this0.name = $this0_name
// SET this0.description = $this0_description
// WITH this0
// CALL {
//         WITH this0
//         OPTIONAL MATCH (this0_generatedByRawDataset_connect0_node:RawDataset)
//         WHERE this0_generatedByRawDataset_connect0_node.rawDatasetID = $this0_generatedByRawDataset_connect0_node_param0
//         CALL {
//                 WITH *
//                 WITH collect(this0_generatedByRawDataset_connect0_node) as connectedNodes, collect(this0) as parentNodes
//                 CALL {
//                         WITH connectedNodes, parentNodes
//                         UNWIND parentNodes as this0
//                         UNWIND connectedNodes as this0_generatedByRawDataset_connect0_node
//                         MERGE (this0)<-[:GENERATED_CURATED_DATASET]-(this0_generatedByRawDataset_connect0_node)
//                         RETURN count(*) AS _
//                 }
//                 RETURN count(*) AS _
//         }
// WITH this0, this0_generatedByRawDataset_connect0_node
//         RETURN count(*) AS connect_this0_generatedByRawDataset_connect_RawDataset
// }
// WITH this0
// CALL {
//         WITH this0
//         MATCH (this0)<-[this0_generatedByRawDataset_RawDataset_unique:GENERATED_CURATED_DATASET]-(:RawDataset)
//         WITH count(this0_generatedByRawDataset_RawDataset_unique) as c
//         CALL apoc.util.validate(NOT (c <= 1), '@neo4j/graphql/RELATIONSHIP-REQUIREDCuratedDataset.generatedByRawDataset must be less than or equal to one', [0])
//         RETURN c AS this0_generatedByRawDataset_RawDataset_unique_ignored
// }
// RETURN this0
// }


// RETURN [
// this0 { .curatedDatasetID, .allowedStudies, .allowedSites, .name, .description }] AS data;



:param curatedDatasetID => "3a79fa0d-b444-42f4-927e-fdc0aaeed3f1";

// // sample
// :param presignedCodebookURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/codebook_sample_3.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230119T201907Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d16687b42cc2d3e9c3c4efa9e0376a474937f9263793b69835c529a4ff20f84c";
// :param presignedDataURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/rawdata_sample_3.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230119T201907Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=38ad469ba838a73041766ee50605687ec88e8ee26249d84b3d05c0df5d074b66";


// // bedgraphsmall
// :param presignedCodebookURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/codebook_bedgraph.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230120T162017Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a1f2a620328876d9d6b6d454e20db898d91fee6a62d15662251993286d4e5b7f";
// :param presignedDataURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/testsmall.bedgraph.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230120T162017Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c5ae2cde46d30288ee84d2fd0b5853ca92ecb24f9dc351f8e845b4eeb3f2c3ae";


// // bedgraph3m
// :param presignedCodebookURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/codebook_bedgraph.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230123T154606Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=27e7ec899fb13fde2d7265ee86f2d9e2e13a28d0ab716ebf2f9ec1bfde66f7a8";
// :param presignedDataURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/test3m.bedgraph.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230123T154606Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a523bc6e0e1c0056c403c302c0ec14f43dc0fa5890b8ccaee0a26e2615cf72d1";


// // test1000
// :param presignedCodebookURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/codebook_bedgraph.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230120T164009Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=3853b524382a3b12d4dca33c1afa00f7b9e30986d981a89f4b0934206be90708";
// :param presignedDataURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/mytest1000.bedgraph.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230120%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230120T164058Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1d455b7fde9813a2eb50e232a7e8edc363e76c1a87b94f544c5afb6b4841326b";


// imic
:param presignedCodebookURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/Code%20Book-Table%201.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230123T204431Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4ca5703befcb965960fb73064a0c3da8f42c895623837006142608b565555559";
// :param presignedDataURL => "Data-Table 1.csv";
:param presignedDataURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/Data-Table%201.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230127%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230127T155849Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dc59e7706ad2279174543540f6e3186e3bb67341c27b531d455d4ca937ddac17";

// // Load codebook, dvfd
// CALL apoc.load.csv($presignedCodebookURL, {sep: ",", compression: "GZIP", header: false}) YIELD lineNo, list, map
// MATCH (cd:CuratedDataset {curatedDatasetID: $curatedDatasetID})
// MERGE (cd)-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition { xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo, dataVariableFieldDefinitionID: apoc.create.uuid()});

// return 'Load DataVariables test';
// CALL apoc.load.csv($presignedDataURL, {sep: ",", compression: "NONE", header: true, limit: $limit}) YIELD map
// RETURN count(map);

// Create dv
// Use apoc.periodic.iterate to batch load large files
// Remove lineNo and list
// Remove inner match for cd
// Change from inner merge to create
return 'Load DataVariables';
CALL apoc.periodic.iterate('
CALL apoc.load.csv($presignedDataURL, {sep: ",", compression: "GZIP", header: true, limit: $limit}) YIELD map
RETURN map
'
,
'
MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})
CREATE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: $curatedDatasetID, dataVariableID: apoc.create.uuid()})
SET dv += map
;
',
{batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL, limit: $limit}}
)
YIELD batches, total, timeTaken, operations, updateStatistics
RETURN batches, total, timeTaken, operations, updateStatistics;

// // Link all dv to cd
// // MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})
// // MATCH (dv: DataVariable {curatedDatasetID: $curatedDatasetID})
// // MERGE (cd)-[:HAS_DATA_VARIABLE]->(dv);

// // Link all dv to cd
// // Batch
// return 'Merge DataVariables to CuratedDataset';
// PROFILE
// CALL apoc.periodic.iterate('
// MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})
// MATCH (dv: DataVariable {curatedDatasetID: $curatedDatasetID})
// RETURN cd, dv
// ',
// '
// MERGE (cd)-[:HAS_DATA_VARIABLE]->(dv)
// ',{batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL, limit: $limit}}
// )
// YIELD batches, total, timeTaken, operations, updateStatistics
// RETURN batches, total, timeTaken, operations, updateStatistics;

// // Create dvf
// CALL apoc.load.csv($presignedDataURL, {sep: " ", compression: "GZIP", header: false, limit: $limit}) YIELD lineNo, list
// WITH lineNo, list
// CALL apoc.periodic.iterate(
// '
// MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition)
// MATCH (dv: DataVariable {curatedDatasetID: $curatedDatasetID, rank: $lineNo})
// RETURN dvfd, cd, dv
// ',
// '
// MERGE (dvfd)-[:HAS_FIELD]->(dvf: DataVariableField {xref: dvfd.xref, value: $list[dvfd.rank]})-[:HAS_DATA_VARIABLE]->(dv)
// ',
// {batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL, lineNo: lineNo, list: list, curatedDatasetID: $curatedDatasetID}}
// )
// YIELD batches, total, operations RETURN batches, total, operations