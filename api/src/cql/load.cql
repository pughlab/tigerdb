// match (n) detach delete n;
// match (n:DataVariableFieldDefinition) detach delete n;
match (n) where NOT (n:CuratedDataset) OR ((n:CuratedDataset) and NOT EXISTS(n.description)) OR ((n:CuratedDataset) and (n.description <> "kasdf")) detach delete n;


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



:param curatedDatasetID => "0c9f5c33-b6ba-42c8-af66-941adb11d462";
:param presignedCodebookURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/codebook_sample_3.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230119T201907Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d16687b42cc2d3e9c3c4efa9e0376a474937f9263793b69835c529a4ff20f84c";
:param presignedDataURL => "http://localhost:9000/raw-dataset-7ec33aac-9209-4948-8804-8cc115bc8b20/rawdata_sample_3.csv.gz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230119T201907Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=38ad469ba838a73041766ee50605687ec88e8ee26249d84b3d05c0df5d074b66";



// Load codebook, dvfd
CALL apoc.load.csv($presignedCodebookURL, {sep: ",", compression: "GZIP", header: false}) YIELD lineNo, list 
MATCH (cd:CuratedDataset {curatedDatasetID: $curatedDatasetID})
MERGE (cd)-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition { xref: list[0], description: list[1], validationSchema: list[2], rank: lineNo, dataVariableFieldDefinitionID: apoc.create.uuid()});


// Create dv
CALL apoc.load.csv($presignedDataURL, {sep: ",", compression: "GZIP", header: true}) YIELD lineNo, list
MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})
MERGE (cd)-[:HAS_DATA_VARIABLE]->(dv: DataVariable {curatedDatasetID: $curatedDatasetID, rank: lineNo, dataVariableID: apoc.create.uuid()});


// Create dvf
CALL apoc.load.csv($presignedDataURL, {sep: ",", compression: "GZIP", header: true}) YIELD lineNo, list
WITH lineNo, list
CALL apoc.periodic.iterate(
'
MATCH (cd: CuratedDataset {curatedDatasetID: $curatedDatasetID})-[:HAS_FIELD_DEFINITION]->(dvfd: DataVariableFieldDefinition)
MATCH (dv: DataVariable {curatedDatasetID: $curatedDatasetID, rank: $lineNo})
RETURN dvfd, cd, dv
',
'
MERGE (dvfd)-[:HAS_FIELD]->(dvf: DataVariableField {xref: dvfd.xref, value: $list[dvfd.rank]})
MERGE (dvf)-[:HAS_DATA_VARIABLE]->(dv)
',
{batchSize:10000, iterateList:true, parallel:true, params:{curatedDatasetID: $curatedDatasetID, presignedDataURL: $presignedDataURL, lineNo: lineNo, list: list, curatedDatasetID: $curatedDatasetID}}
)
YIELD batches, total, operations RETURN batches, total, operations