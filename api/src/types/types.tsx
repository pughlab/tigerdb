import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContextType } from './models';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Email: any;
  JSON: any;
  Upload: any;
};

export type CalendarHeatmapDatum = {
  __typename?: 'CalendarHeatmapDatum';
  count: Scalars['Int'];
  date: Scalars['Date'];
};

export type Client = {
  __typename?: 'Client';
  clientId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type ClientAggregateSelection = {
  __typename?: 'ClientAggregateSelection';
  clientId: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  id: IdAggregateSelectionNullable;
};

export type ClientCreateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ClientEdge = {
  __typename?: 'ClientEdge';
  cursor: Scalars['String'];
  node: Client;
};

export type ClientOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClientSort objects to sort Clients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ClientSort>>;
};

export type ClientRole = {
  __typename?: 'ClientRole';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ClientRoleAggregateSelection = {
  __typename?: 'ClientRoleAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
};

export type ClientRoleCreateInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ClientRoleEdge = {
  __typename?: 'ClientRoleEdge';
  cursor: Scalars['String'];
  node: ClientRole;
};

export type ClientRoleOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClientRoleSort objects to sort ClientRoles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ClientRoleSort>>;
};

/** Fields to sort ClientRoles by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientRoleSort object. */
export type ClientRoleSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ClientRoleUpdateInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ClientRoleWhere = {
  AND?: InputMaybe<Array<ClientRoleWhere>>;
  OR?: InputMaybe<Array<ClientRoleWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type ClientRolesConnection = {
  __typename?: 'ClientRolesConnection';
  edges: Array<ClientRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Fields to sort Clients by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientSort object. */
export type ClientSort = {
  clientId?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type ClientUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ClientUser = {
  __typename?: 'ClientUser';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type ClientUserAggregateSelection = {
  __typename?: 'ClientUserAggregateSelection';
  count: Scalars['Int'];
  email: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  username: StringAggregateSelectionNullable;
};

export type ClientUserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ClientUserEdge = {
  __typename?: 'ClientUserEdge';
  cursor: Scalars['String'];
  node: ClientUser;
};

export type ClientUserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClientUserSort objects to sort ClientUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ClientUserSort>>;
};

/** Fields to sort ClientUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientUserSort object. */
export type ClientUserSort = {
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type ClientUserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ClientUserWhere = {
  AND?: InputMaybe<Array<ClientUserWhere>>;
  OR?: InputMaybe<Array<ClientUserWhere>>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT?: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  username_CONTAINS?: InputMaybe<Scalars['String']>;
  username_ENDS_WITH?: InputMaybe<Scalars['String']>;
  username_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_NOT?: InputMaybe<Scalars['String']>;
  username_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  username_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  username_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  username_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type ClientUsersConnection = {
  __typename?: 'ClientUsersConnection';
  edges: Array<ClientUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientWhere = {
  AND?: InputMaybe<Array<ClientWhere>>;
  OR?: InputMaybe<Array<ClientWhere>>;
  clientId?: InputMaybe<Scalars['String']>;
  clientId_CONTAINS?: InputMaybe<Scalars['String']>;
  clientId_ENDS_WITH?: InputMaybe<Scalars['String']>;
  clientId_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId_NOT?: InputMaybe<Scalars['String']>;
  clientId_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  clientId_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  clientId_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  clientId_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type ClientsConnection = {
  __typename?: 'ClientsConnection';
  edges: Array<ClientEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CreateClientRolesMutationResponse = {
  __typename?: 'CreateClientRolesMutationResponse';
  clientRoles: Array<ClientRole>;
  info: CreateInfo;
};

export type CreateClientUsersMutationResponse = {
  __typename?: 'CreateClientUsersMutationResponse';
  clientUsers: Array<ClientUser>;
  info: CreateInfo;
};

export type CreateClientsMutationResponse = {
  __typename?: 'CreateClientsMutationResponse';
  clients: Array<Client>;
  info: CreateInfo;
};

export type CreateCuratedDatasetsMutationResponse = {
  __typename?: 'CreateCuratedDatasetsMutationResponse';
  curatedDatasets: Array<CuratedDataset>;
  info: CreateInfo;
};

export type CreateDataVariableFieldDefinitionsMutationResponse = {
  __typename?: 'CreateDataVariableFieldDefinitionsMutationResponse';
  dataVariableFieldDefinitions: Array<DataVariableFieldDefinition>;
  info: CreateInfo;
};

export type CreateDataVariableFieldsMutationResponse = {
  __typename?: 'CreateDataVariableFieldsMutationResponse';
  dataVariableFields: Array<DataVariableField>;
  info: CreateInfo;
};

export type CreateDataVariableValuesMutationResponse = {
  __typename?: 'CreateDataVariableValuesMutationResponse';
  dataVariableValues: Array<DataVariableValue>;
  info: CreateInfo;
};

export type CreateDataVariablesMutationResponse = {
  __typename?: 'CreateDataVariablesMutationResponse';
  dataVariables: Array<DataVariable>;
  info: CreateInfo;
};

export type CreateFileValidationsMutationResponse = {
  __typename?: 'CreateFileValidationsMutationResponse';
  fileValidations: Array<FileValidation>;
  info: CreateInfo;
};

export type CreateGeographyCitiesMutationResponse = {
  __typename?: 'CreateGeographyCitiesMutationResponse';
  geographyCities: Array<GeographyCity>;
  info: CreateInfo;
};

export type CreateHarmonizedDatasetsMutationResponse = {
  __typename?: 'CreateHarmonizedDatasetsMutationResponse';
  harmonizedDatasets: Array<HarmonizedDataset>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateKeycloakUsersMutationResponse = {
  __typename?: 'CreateKeycloakUsersMutationResponse';
  info: CreateInfo;
  keycloakUsers: Array<KeycloakUser>;
};

export type CreateMinioBucketsMutationResponse = {
  __typename?: 'CreateMinioBucketsMutationResponse';
  info: CreateInfo;
  minioBuckets: Array<MinioBucket>;
};

export type CreateMinioUploadsMutationResponse = {
  __typename?: 'CreateMinioUploadsMutationResponse';
  info: CreateInfo;
  minioUploads: Array<MinioUpload>;
};

export type CreateMismatchesMutationResponse = {
  __typename?: 'CreateMismatchesMutationResponse';
  info: CreateInfo;
  mismatches: Array<Mismatch>;
};

export type CreateNeo4JUpdateStatsMutationResponse = {
  __typename?: 'CreateNeo4JUpdateStatsMutationResponse';
  info: CreateInfo;
  neo4JUpdateStats: Array<Neo4jUpdateStats>;
};

export type CreateOntologiesMutationResponse = {
  __typename?: 'CreateOntologiesMutationResponse';
  info: CreateInfo;
  ontologies: Array<Ontology>;
};

export type CreateOntologyClassesMutationResponse = {
  __typename?: 'CreateOntologyClassesMutationResponse';
  info: CreateInfo;
  ontologyClasses: Array<OntologyClass>;
};

export type CreateOntologyRelationsMutationResponse = {
  __typename?: 'CreateOntologyRelationsMutationResponse';
  info: CreateInfo;
  ontologyRelations: Array<OntologyRelation>;
};

export type CreateRawDatasetsMutationResponse = {
  __typename?: 'CreateRawDatasetsMutationResponse';
  info: CreateInfo;
  rawDatasets: Array<RawDataset>;
};

export type CreateStudiesMutationResponse = {
  __typename?: 'CreateStudiesMutationResponse';
  info: CreateInfo;
  studies: Array<Study>;
};

export type CreateTasksMutationResponse = {
  __typename?: 'CreateTasksMutationResponse';
  info: CreateInfo;
  tasks: Array<Task>;
};

export type CuratedDataset = {
  __typename?: 'CuratedDataset';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  curatedDatasetID: Scalars['ID'];
  dataVariables: Array<DataVariable>;
  dataVariablesAggregate?: Maybe<CuratedDatasetDataVariableDataVariablesAggregationSelection>;
  dataVariablesConnection: CuratedDatasetDataVariablesConnection;
  description: Scalars['String'];
  exportTask: Array<Task>;
  exportTaskAggregate?: Maybe<CuratedDatasetTaskExportTaskAggregationSelection>;
  exportTaskConnection: CuratedDatasetExportTaskConnection;
  fieldDefinitions: Array<DataVariableFieldDefinition>;
  fieldDefinitionsAggregate?: Maybe<CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection>;
  fieldDefinitionsConnection: CuratedDatasetFieldDefinitionsConnection;
  funnelTask?: Maybe<Task>;
  funnelTaskAggregate?: Maybe<CuratedDatasetTaskFunnelTaskAggregationSelection>;
  funnelTaskConnection: CuratedDatasetFunnelTaskConnection;
  generatedByRawDataset?: Maybe<RawDataset>;
  generatedByRawDatasetAggregate?: Maybe<CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection>;
  generatedByRawDatasetConnection: CuratedDatasetGeneratedByRawDatasetConnection;
  name: Scalars['String'];
};


export type CuratedDatasetDataVariablesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DataVariableOptions>;
  where?: InputMaybe<DataVariableWhere>;
};


export type CuratedDatasetDataVariablesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DataVariableWhere>;
};


export type CuratedDatasetDataVariablesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CuratedDatasetDataVariablesConnectionSort>>;
  where?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};


export type CuratedDatasetExportTaskArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type CuratedDatasetExportTaskAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskWhere>;
};


export type CuratedDatasetExportTaskConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CuratedDatasetExportTaskConnectionSort>>;
  where?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
};


export type CuratedDatasetFieldDefinitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DataVariableFieldDefinitionOptions>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type CuratedDatasetFieldDefinitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type CuratedDatasetFieldDefinitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectionSort>>;
  where?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};


export type CuratedDatasetFunnelTaskArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type CuratedDatasetFunnelTaskAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskWhere>;
};


export type CuratedDatasetFunnelTaskConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CuratedDatasetFunnelTaskConnectionSort>>;
  where?: InputMaybe<CuratedDatasetFunnelTaskConnectionWhere>;
};


export type CuratedDatasetGeneratedByRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type CuratedDatasetGeneratedByRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type CuratedDatasetGeneratedByRawDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetConnectionSort>>;
  where?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetAggregateSelection = {
  __typename?: 'CuratedDatasetAggregateSelection';
  count: Scalars['Int'];
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CuratedDatasetConnectInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesConnectFieldInput>>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskConnectFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskConnectFieldInput>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectFieldInput>;
};

export type CuratedDatasetConnectOrCreateInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput>;
};

export type CuratedDatasetConnectOrCreateWhere = {
  node: CuratedDatasetUniqueWhere;
};

export type CuratedDatasetConnectWhere = {
  node: CuratedDatasetWhere;
};

export type CuratedDatasetCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataVariables?: InputMaybe<CuratedDatasetDataVariablesFieldInput>;
  description: Scalars['String'];
  exportTask?: InputMaybe<CuratedDatasetExportTaskFieldInput>;
  fieldDefinitions?: InputMaybe<CuratedDatasetFieldDefinitionsFieldInput>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskFieldInput>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetFieldInput>;
  name: Scalars['String'];
};

export type CuratedDatasetDataVariableDataVariablesAggregationSelection = {
  __typename?: 'CuratedDatasetDataVariableDataVariablesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CuratedDatasetDataVariableDataVariablesNodeAggregateSelection>;
};

export type CuratedDatasetDataVariableDataVariablesNodeAggregateSelection = {
  __typename?: 'CuratedDatasetDataVariableDataVariablesNodeAggregateSelection';
  dataVariableID: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection = {
  __typename?: 'CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection>;
};

export type CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection = {
  __typename?: 'CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection';
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetDataVariablesAggregateInput = {
  AND?: InputMaybe<Array<CuratedDatasetDataVariablesAggregateInput>>;
  OR?: InputMaybe<Array<CuratedDatasetDataVariablesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CuratedDatasetDataVariablesNodeAggregationWhereInput>;
};

export type CuratedDatasetDataVariablesConnectFieldInput = {
  connect?: InputMaybe<Array<DataVariableConnectInput>>;
  where?: InputMaybe<DataVariableConnectWhere>;
};

export type CuratedDatasetDataVariablesConnectOrCreateFieldInput = {
  onCreate: CuratedDatasetDataVariablesConnectOrCreateFieldInputOnCreate;
  where: DataVariableConnectOrCreateWhere;
};

export type CuratedDatasetDataVariablesConnectOrCreateFieldInputOnCreate = {
  node: DataVariableOnCreateInput;
};

export type CuratedDatasetDataVariablesConnection = {
  __typename?: 'CuratedDatasetDataVariablesConnection';
  edges: Array<CuratedDatasetDataVariablesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CuratedDatasetDataVariablesConnectionSort = {
  node?: InputMaybe<DataVariableSort>;
};

export type CuratedDatasetDataVariablesConnectionWhere = {
  AND?: InputMaybe<Array<CuratedDatasetDataVariablesConnectionWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetDataVariablesConnectionWhere>>;
  node?: InputMaybe<DataVariableWhere>;
  node_NOT?: InputMaybe<DataVariableWhere>;
};

export type CuratedDatasetDataVariablesCreateFieldInput = {
  node: DataVariableCreateInput;
};

export type CuratedDatasetDataVariablesDeleteFieldInput = {
  delete?: InputMaybe<DataVariableDeleteInput>;
  where?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};

export type CuratedDatasetDataVariablesDisconnectFieldInput = {
  disconnect?: InputMaybe<DataVariableDisconnectInput>;
  where?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};

export type CuratedDatasetDataVariablesFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetDataVariablesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
};

export type CuratedDatasetDataVariablesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CuratedDatasetDataVariablesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CuratedDatasetDataVariablesNodeAggregationWhereInput>>;
  dataVariableID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetDataVariablesRelationship = {
  __typename?: 'CuratedDatasetDataVariablesRelationship';
  cursor: Scalars['String'];
  node: DataVariable;
};

export type CuratedDatasetDataVariablesUpdateConnectionInput = {
  node?: InputMaybe<DataVariableUpdateInput>;
};

export type CuratedDatasetDataVariablesUpdateFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetDataVariablesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
  delete?: InputMaybe<Array<CuratedDatasetDataVariablesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CuratedDatasetDataVariablesDisconnectFieldInput>>;
  update?: InputMaybe<CuratedDatasetDataVariablesUpdateConnectionInput>;
  where?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};

export type CuratedDatasetDeleteInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesDeleteFieldInput>>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskDeleteFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsDeleteFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskDeleteFieldInput>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetDeleteFieldInput>;
};

export type CuratedDatasetDisconnectInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesDisconnectFieldInput>>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskDisconnectFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsDisconnectFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskDisconnectFieldInput>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput>;
};

export type CuratedDatasetEdge = {
  __typename?: 'CuratedDatasetEdge';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type CuratedDatasetExportTaskAggregateInput = {
  AND?: InputMaybe<Array<CuratedDatasetExportTaskAggregateInput>>;
  OR?: InputMaybe<Array<CuratedDatasetExportTaskAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CuratedDatasetExportTaskNodeAggregationWhereInput>;
};

export type CuratedDatasetExportTaskConnectFieldInput = {
  connect?: InputMaybe<Array<TaskConnectInput>>;
  where?: InputMaybe<TaskConnectWhere>;
};

export type CuratedDatasetExportTaskConnection = {
  __typename?: 'CuratedDatasetExportTaskConnection';
  edges: Array<CuratedDatasetExportTaskRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CuratedDatasetExportTaskConnectionSort = {
  node?: InputMaybe<TaskSort>;
};

export type CuratedDatasetExportTaskConnectionWhere = {
  AND?: InputMaybe<Array<CuratedDatasetExportTaskConnectionWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetExportTaskConnectionWhere>>;
  node?: InputMaybe<TaskWhere>;
  node_NOT?: InputMaybe<TaskWhere>;
};

export type CuratedDatasetExportTaskCreateFieldInput = {
  node: TaskCreateInput;
};

export type CuratedDatasetExportTaskDeleteFieldInput = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
};

export type CuratedDatasetExportTaskDisconnectFieldInput = {
  disconnect?: InputMaybe<TaskDisconnectInput>;
  where?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
};

export type CuratedDatasetExportTaskFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetExportTaskConnectFieldInput>>;
  create?: InputMaybe<Array<CuratedDatasetExportTaskCreateFieldInput>>;
};

export type CuratedDatasetExportTaskNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CuratedDatasetExportTaskNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CuratedDatasetExportTaskNodeAggregationWhereInput>>;
  creationTime_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creationTime_EQUAL?: InputMaybe<Scalars['String']>;
  creationTime_GT?: InputMaybe<Scalars['Int']>;
  creationTime_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  id_EQUAL?: InputMaybe<Scalars['String']>;
  id_GT?: InputMaybe<Scalars['Int']>;
  id_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  id_LT?: InputMaybe<Scalars['Int']>;
  id_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  taskID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetExportTaskRelationship = {
  __typename?: 'CuratedDatasetExportTaskRelationship';
  cursor: Scalars['String'];
  node: Task;
};

export type CuratedDatasetExportTaskUpdateConnectionInput = {
  node?: InputMaybe<TaskUpdateInput>;
};

export type CuratedDatasetExportTaskUpdateFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetExportTaskConnectFieldInput>>;
  create?: InputMaybe<Array<CuratedDatasetExportTaskCreateFieldInput>>;
  delete?: InputMaybe<Array<CuratedDatasetExportTaskDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CuratedDatasetExportTaskDisconnectFieldInput>>;
  update?: InputMaybe<CuratedDatasetExportTaskUpdateConnectionInput>;
  where?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
};

export type CuratedDatasetFieldDefinitionsAggregateInput = {
  AND?: InputMaybe<Array<CuratedDatasetFieldDefinitionsAggregateInput>>;
  OR?: InputMaybe<Array<CuratedDatasetFieldDefinitionsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CuratedDatasetFieldDefinitionsNodeAggregationWhereInput>;
};

export type CuratedDatasetFieldDefinitionsConnectFieldInput = {
  connect?: InputMaybe<Array<DataVariableFieldDefinitionConnectInput>>;
  where?: InputMaybe<DataVariableFieldDefinitionConnectWhere>;
};

export type CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput = {
  onCreate: CuratedDatasetFieldDefinitionsConnectOrCreateFieldInputOnCreate;
  where: DataVariableFieldDefinitionConnectOrCreateWhere;
};

export type CuratedDatasetFieldDefinitionsConnectOrCreateFieldInputOnCreate = {
  node: DataVariableFieldDefinitionOnCreateInput;
};

export type CuratedDatasetFieldDefinitionsConnection = {
  __typename?: 'CuratedDatasetFieldDefinitionsConnection';
  edges: Array<CuratedDatasetFieldDefinitionsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CuratedDatasetFieldDefinitionsConnectionSort = {
  node?: InputMaybe<DataVariableFieldDefinitionSort>;
};

export type CuratedDatasetFieldDefinitionsConnectionWhere = {
  AND?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectionWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectionWhere>>;
  node?: InputMaybe<DataVariableFieldDefinitionWhere>;
  node_NOT?: InputMaybe<DataVariableFieldDefinitionWhere>;
};

export type CuratedDatasetFieldDefinitionsCreateFieldInput = {
  node: DataVariableFieldDefinitionCreateInput;
};

export type CuratedDatasetFieldDefinitionsDeleteFieldInput = {
  delete?: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};

export type CuratedDatasetFieldDefinitionsDisconnectFieldInput = {
  disconnect?: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  where?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};

export type CuratedDatasetFieldDefinitionsFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
};

export type CuratedDatasetFieldDefinitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CuratedDatasetFieldDefinitionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CuratedDatasetFieldDefinitionsNodeAggregationWhereInput>>;
  dataVariableFieldDefinitionID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  xref_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetFieldDefinitionsRelationship = {
  __typename?: 'CuratedDatasetFieldDefinitionsRelationship';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type CuratedDatasetFieldDefinitionsUpdateConnectionInput = {
  node?: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
};

export type CuratedDatasetFieldDefinitionsUpdateFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
  delete?: InputMaybe<Array<CuratedDatasetFieldDefinitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CuratedDatasetFieldDefinitionsDisconnectFieldInput>>;
  update?: InputMaybe<CuratedDatasetFieldDefinitionsUpdateConnectionInput>;
  where?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};

export type CuratedDatasetFunnelTaskAggregateInput = {
  AND?: InputMaybe<Array<CuratedDatasetFunnelTaskAggregateInput>>;
  OR?: InputMaybe<Array<CuratedDatasetFunnelTaskAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CuratedDatasetFunnelTaskNodeAggregationWhereInput>;
};

export type CuratedDatasetFunnelTaskConnectFieldInput = {
  connect?: InputMaybe<TaskConnectInput>;
  where?: InputMaybe<TaskConnectWhere>;
};

export type CuratedDatasetFunnelTaskConnection = {
  __typename?: 'CuratedDatasetFunnelTaskConnection';
  edges: Array<CuratedDatasetFunnelTaskRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CuratedDatasetFunnelTaskConnectionSort = {
  node?: InputMaybe<TaskSort>;
};

export type CuratedDatasetFunnelTaskConnectionWhere = {
  AND?: InputMaybe<Array<CuratedDatasetFunnelTaskConnectionWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetFunnelTaskConnectionWhere>>;
  node?: InputMaybe<TaskWhere>;
  node_NOT?: InputMaybe<TaskWhere>;
};

export type CuratedDatasetFunnelTaskCreateFieldInput = {
  node: TaskCreateInput;
};

export type CuratedDatasetFunnelTaskDeleteFieldInput = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<CuratedDatasetFunnelTaskConnectionWhere>;
};

export type CuratedDatasetFunnelTaskDisconnectFieldInput = {
  disconnect?: InputMaybe<TaskDisconnectInput>;
  where?: InputMaybe<CuratedDatasetFunnelTaskConnectionWhere>;
};

export type CuratedDatasetFunnelTaskFieldInput = {
  connect?: InputMaybe<CuratedDatasetFunnelTaskConnectFieldInput>;
  create?: InputMaybe<CuratedDatasetFunnelTaskCreateFieldInput>;
};

export type CuratedDatasetFunnelTaskNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CuratedDatasetFunnelTaskNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CuratedDatasetFunnelTaskNodeAggregationWhereInput>>;
  creationTime_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creationTime_EQUAL?: InputMaybe<Scalars['String']>;
  creationTime_GT?: InputMaybe<Scalars['Int']>;
  creationTime_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  id_EQUAL?: InputMaybe<Scalars['String']>;
  id_GT?: InputMaybe<Scalars['Int']>;
  id_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  id_LT?: InputMaybe<Scalars['Int']>;
  id_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  taskID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetFunnelTaskRelationship = {
  __typename?: 'CuratedDatasetFunnelTaskRelationship';
  cursor: Scalars['String'];
  node: Task;
};

export type CuratedDatasetFunnelTaskUpdateConnectionInput = {
  node?: InputMaybe<TaskUpdateInput>;
};

export type CuratedDatasetFunnelTaskUpdateFieldInput = {
  connect?: InputMaybe<CuratedDatasetFunnelTaskConnectFieldInput>;
  create?: InputMaybe<CuratedDatasetFunnelTaskCreateFieldInput>;
  delete?: InputMaybe<CuratedDatasetFunnelTaskDeleteFieldInput>;
  disconnect?: InputMaybe<CuratedDatasetFunnelTaskDisconnectFieldInput>;
  update?: InputMaybe<CuratedDatasetFunnelTaskUpdateConnectionInput>;
  where?: InputMaybe<CuratedDatasetFunnelTaskConnectionWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetAggregateInput = {
  AND?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetAggregateInput>>;
  OR?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput>;
};

export type CuratedDatasetGeneratedByRawDatasetConnectFieldInput = {
  connect?: InputMaybe<RawDatasetConnectInput>;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput = {
  onCreate: CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInputOnCreate = {
  node: RawDatasetOnCreateInput;
};

export type CuratedDatasetGeneratedByRawDatasetConnection = {
  __typename?: 'CuratedDatasetGeneratedByRawDatasetConnection';
  edges: Array<CuratedDatasetGeneratedByRawDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CuratedDatasetGeneratedByRawDatasetConnectionSort = {
  node?: InputMaybe<RawDatasetSort>;
};

export type CuratedDatasetGeneratedByRawDatasetConnectionWhere = {
  AND?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetConnectionWhere>>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type CuratedDatasetGeneratedByRawDatasetDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetFieldInput = {
  connect?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<CuratedDatasetGeneratedByRawDatasetCreateFieldInput>;
};

export type CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetGeneratedByRawDatasetRelationship = {
  __typename?: 'CuratedDatasetGeneratedByRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput = {
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type CuratedDatasetGeneratedByRawDatasetUpdateFieldInput = {
  connect?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<CuratedDatasetGeneratedByRawDatasetCreateFieldInput>;
  delete?: InputMaybe<CuratedDatasetGeneratedByRawDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput>;
  update?: InputMaybe<CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput>;
  where?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CuratedDatasetOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more CuratedDatasetSort objects to sort CuratedDatasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CuratedDatasetSort>>;
};

export type CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection = {
  __typename?: 'CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection>;
};

export type CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection = {
  __typename?: 'CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetRelationInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskCreateFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskCreateFieldInput>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetCreateFieldInput>;
};

/** Fields to sort CuratedDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one CuratedDatasetSort object. */
export type CuratedDatasetSort = {
  curatedDatasetID?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CuratedDatasetTaskExportTaskAggregationSelection = {
  __typename?: 'CuratedDatasetTaskExportTaskAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CuratedDatasetTaskExportTaskNodeAggregateSelection>;
};

export type CuratedDatasetTaskExportTaskNodeAggregateSelection = {
  __typename?: 'CuratedDatasetTaskExportTaskNodeAggregateSelection';
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type CuratedDatasetTaskFunnelTaskAggregationSelection = {
  __typename?: 'CuratedDatasetTaskFunnelTaskAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CuratedDatasetTaskFunnelTaskNodeAggregateSelection>;
};

export type CuratedDatasetTaskFunnelTaskNodeAggregateSelection = {
  __typename?: 'CuratedDatasetTaskFunnelTaskNodeAggregateSelection';
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type CuratedDatasetUniqueWhere = {
  curatedDatasetID?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesUpdateFieldInput>>;
  description?: InputMaybe<Scalars['String']>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskUpdateFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsUpdateFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskUpdateFieldInput>;
  generatedByRawDataset?: InputMaybe<CuratedDatasetGeneratedByRawDatasetUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type CuratedDatasetWhere = {
  AND?: InputMaybe<Array<CuratedDatasetWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  curatedDatasetID?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_CONTAINS?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_IN?: InputMaybe<Array<Scalars['ID']>>;
  curatedDatasetID_NOT?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  curatedDatasetID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  curatedDatasetID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariables?: InputMaybe<DataVariableWhere>;
  dataVariablesAggregate?: InputMaybe<CuratedDatasetDataVariablesAggregateInput>;
  dataVariablesConnection?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_ALL?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_NONE?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_NOT?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_SINGLE?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_SOME?: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  /** Return CuratedDatasets where all of the related DataVariables match this filter */
  dataVariables_ALL?: InputMaybe<DataVariableWhere>;
  /** Return CuratedDatasets where none of the related DataVariables match this filter */
  dataVariables_NONE?: InputMaybe<DataVariableWhere>;
  dataVariables_NOT?: InputMaybe<DataVariableWhere>;
  /** Return CuratedDatasets where one of the related DataVariables match this filter */
  dataVariables_SINGLE?: InputMaybe<DataVariableWhere>;
  /** Return CuratedDatasets where some of the related DataVariables match this filter */
  dataVariables_SOME?: InputMaybe<DataVariableWhere>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  exportTask?: InputMaybe<TaskWhere>;
  exportTaskAggregate?: InputMaybe<CuratedDatasetExportTaskAggregateInput>;
  exportTaskConnection?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
  exportTaskConnection_ALL?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
  exportTaskConnection_NONE?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
  exportTaskConnection_NOT?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
  exportTaskConnection_SINGLE?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
  exportTaskConnection_SOME?: InputMaybe<CuratedDatasetExportTaskConnectionWhere>;
  /** Return CuratedDatasets where all of the related Tasks match this filter */
  exportTask_ALL?: InputMaybe<TaskWhere>;
  /** Return CuratedDatasets where none of the related Tasks match this filter */
  exportTask_NONE?: InputMaybe<TaskWhere>;
  exportTask_NOT?: InputMaybe<TaskWhere>;
  /** Return CuratedDatasets where one of the related Tasks match this filter */
  exportTask_SINGLE?: InputMaybe<TaskWhere>;
  /** Return CuratedDatasets where some of the related Tasks match this filter */
  exportTask_SOME?: InputMaybe<TaskWhere>;
  fieldDefinitions?: InputMaybe<DataVariableFieldDefinitionWhere>;
  fieldDefinitionsAggregate?: InputMaybe<CuratedDatasetFieldDefinitionsAggregateInput>;
  fieldDefinitionsConnection?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_ALL?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_NONE?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_NOT?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_SINGLE?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_SOME?: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  /** Return CuratedDatasets where all of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_ALL?: InputMaybe<DataVariableFieldDefinitionWhere>;
  /** Return CuratedDatasets where none of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_NONE?: InputMaybe<DataVariableFieldDefinitionWhere>;
  fieldDefinitions_NOT?: InputMaybe<DataVariableFieldDefinitionWhere>;
  /** Return CuratedDatasets where one of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_SINGLE?: InputMaybe<DataVariableFieldDefinitionWhere>;
  /** Return CuratedDatasets where some of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_SOME?: InputMaybe<DataVariableFieldDefinitionWhere>;
  funnelTask?: InputMaybe<TaskWhere>;
  funnelTaskAggregate?: InputMaybe<CuratedDatasetFunnelTaskAggregateInput>;
  funnelTaskConnection?: InputMaybe<CuratedDatasetFunnelTaskConnectionWhere>;
  funnelTaskConnection_NOT?: InputMaybe<CuratedDatasetFunnelTaskConnectionWhere>;
  funnelTask_NOT?: InputMaybe<TaskWhere>;
  generatedByRawDataset?: InputMaybe<RawDatasetWhere>;
  generatedByRawDatasetAggregate?: InputMaybe<CuratedDatasetGeneratedByRawDatasetAggregateInput>;
  generatedByRawDatasetConnection?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
  generatedByRawDatasetConnection_NOT?: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
  generatedByRawDataset_NOT?: InputMaybe<RawDatasetWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type CuratedDatasetsConnection = {
  __typename?: 'CuratedDatasetsConnection';
  edges: Array<CuratedDatasetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariable = {
  __typename?: 'DataVariable';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  curatedDataset: Array<CuratedDataset>;
  curatedDatasetAggregate?: Maybe<DataVariableCuratedDatasetCuratedDatasetAggregationSelection>;
  curatedDatasetConnection: DataVariableCuratedDatasetConnection;
  dataVariableID: Scalars['ID'];
  fields: Array<DataVariableField>;
  fieldsAggregate?: Maybe<DataVariableDataVariableFieldFieldsAggregationSelection>;
  fieldsConnection: DataVariableFieldsConnection;
};


export type DataVariableCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CuratedDatasetOptions>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableCuratedDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DataVariableCuratedDatasetConnectionSort>>;
  where?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};


export type DataVariableFieldsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DataVariableFieldOptions>;
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type DataVariableFieldsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type DataVariableFieldsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DataVariableFieldsConnectionSort>>;
  where?: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableAggregateSelection = {
  __typename?: 'DataVariableAggregateSelection';
  count: Scalars['Int'];
  dataVariableID: IdAggregateSelectionNonNullable;
};

export type DataVariableConnectInput = {
  curatedDataset?: InputMaybe<Array<DataVariableCuratedDatasetConnectFieldInput>>;
  fields?: InputMaybe<Array<DataVariableFieldsConnectFieldInput>>;
};

export type DataVariableConnectOrCreateInput = {
  curatedDataset?: InputMaybe<Array<DataVariableCuratedDatasetConnectOrCreateFieldInput>>;
  fields?: InputMaybe<Array<DataVariableFieldsConnectOrCreateFieldInput>>;
};

export type DataVariableConnectOrCreateWhere = {
  node: DataVariableUniqueWhere;
};

export type DataVariableConnectWhere = {
  node: DataVariableWhere;
};

export type DataVariableCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  curatedDataset?: InputMaybe<DataVariableCuratedDatasetFieldInput>;
  fields?: InputMaybe<DataVariableFieldsFieldInput>;
};

export type DataVariableCuratedDatasetAggregateInput = {
  AND?: InputMaybe<Array<DataVariableCuratedDatasetAggregateInput>>;
  OR?: InputMaybe<Array<DataVariableCuratedDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DataVariableCuratedDatasetNodeAggregationWhereInput>;
};

export type DataVariableCuratedDatasetConnectFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetConnectInput>>;
  where?: InputMaybe<CuratedDatasetConnectWhere>;
};

export type DataVariableCuratedDatasetConnectOrCreateFieldInput = {
  onCreate: DataVariableCuratedDatasetConnectOrCreateFieldInputOnCreate;
  where: CuratedDatasetConnectOrCreateWhere;
};

export type DataVariableCuratedDatasetConnectOrCreateFieldInputOnCreate = {
  node: CuratedDatasetOnCreateInput;
};

export type DataVariableCuratedDatasetConnection = {
  __typename?: 'DataVariableCuratedDatasetConnection';
  edges: Array<DataVariableCuratedDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableCuratedDatasetConnectionSort = {
  node?: InputMaybe<CuratedDatasetSort>;
};

export type DataVariableCuratedDatasetConnectionWhere = {
  AND?: InputMaybe<Array<DataVariableCuratedDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<DataVariableCuratedDatasetConnectionWhere>>;
  node?: InputMaybe<CuratedDatasetWhere>;
  node_NOT?: InputMaybe<CuratedDatasetWhere>;
};

export type DataVariableCuratedDatasetCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type DataVariableCuratedDatasetCuratedDatasetAggregationSelection = {
  __typename?: 'DataVariableCuratedDatasetCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection>;
};

export type DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection = {
  __typename?: 'DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DataVariableCuratedDatasetDeleteFieldInput = {
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  where?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};

export type DataVariableCuratedDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<CuratedDatasetDisconnectInput>;
  where?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};

export type DataVariableCuratedDatasetFieldInput = {
  connect?: InputMaybe<Array<DataVariableCuratedDatasetConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataVariableCuratedDatasetConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataVariableCuratedDatasetCreateFieldInput>>;
};

export type DataVariableCuratedDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataVariableCuratedDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataVariableCuratedDatasetNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type DataVariableCuratedDatasetRelationship = {
  __typename?: 'DataVariableCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type DataVariableCuratedDatasetUpdateConnectionInput = {
  node?: InputMaybe<CuratedDatasetUpdateInput>;
};

export type DataVariableCuratedDatasetUpdateFieldInput = {
  connect?: InputMaybe<Array<DataVariableCuratedDatasetConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataVariableCuratedDatasetConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataVariableCuratedDatasetCreateFieldInput>>;
  delete?: InputMaybe<Array<DataVariableCuratedDatasetDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataVariableCuratedDatasetDisconnectFieldInput>>;
  update?: InputMaybe<DataVariableCuratedDatasetUpdateConnectionInput>;
  where?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};

export type DataVariableDataVariableFieldFieldsAggregationSelection = {
  __typename?: 'DataVariableDataVariableFieldFieldsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DataVariableDataVariableFieldFieldsNodeAggregateSelection>;
};

export type DataVariableDataVariableFieldFieldsNodeAggregateSelection = {
  __typename?: 'DataVariableDataVariableFieldFieldsNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  dataVariableFieldID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
};

export type DataVariableDeleteInput = {
  curatedDataset?: InputMaybe<Array<DataVariableCuratedDatasetDeleteFieldInput>>;
  fields?: InputMaybe<Array<DataVariableFieldsDeleteFieldInput>>;
};

export type DataVariableDisconnectInput = {
  curatedDataset?: InputMaybe<Array<DataVariableCuratedDatasetDisconnectFieldInput>>;
  fields?: InputMaybe<Array<DataVariableFieldsDisconnectFieldInput>>;
};

export type DataVariableEdge = {
  __typename?: 'DataVariableEdge';
  cursor: Scalars['String'];
  node: DataVariable;
};

export type DataVariableField = {
  __typename?: 'DataVariableField';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  code: Scalars['String'];
  dataVariableFieldID: Scalars['ID'];
  description: Scalars['String'];
  hasFieldDefinition: DataVariableFieldDefinition;
  hasFieldDefinitionAggregate?: Maybe<DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection>;
  hasFieldDefinitionConnection: DataVariableFieldHasFieldDefinitionConnection;
  jsonSchema: Scalars['JSON'];
};


export type DataVariableFieldHasFieldDefinitionArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DataVariableFieldDefinitionOptions>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableFieldHasFieldDefinitionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableFieldHasFieldDefinitionConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionConnectionSort>>;
  where?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldAggregateSelection = {
  __typename?: 'DataVariableFieldAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  count: Scalars['Int'];
  dataVariableFieldID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
};

export type DataVariableFieldConnectInput = {
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectFieldInput>;
};

export type DataVariableFieldConnectOrCreateInput = {
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput>;
};

export type DataVariableFieldConnectOrCreateWhere = {
  node: DataVariableFieldUniqueWhere;
};

export type DataVariableFieldConnectWhere = {
  node: DataVariableFieldWhere;
};

export type DataVariableFieldCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code: Scalars['String'];
  description: Scalars['String'];
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionFieldInput>;
  jsonSchema: Scalars['JSON'];
};

export type DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection = {
  __typename?: 'DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection>;
};

export type DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection = {
  __typename?: 'DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection';
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinition = {
  __typename?: 'DataVariableFieldDefinition';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataVariableFieldDefinitionID: Scalars['ID'];
  description: Scalars['String'];
  hasCuratedDataset: CuratedDataset;
  hasCuratedDatasetAggregate?: Maybe<DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection>;
  hasCuratedDatasetConnection: DataVariableFieldDefinitionHasCuratedDatasetConnection;
  hasFieldValues: Array<DataVariableValue>;
  hasFieldValuesAggregate?: Maybe<DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection>;
  hasFieldValuesConnection: DataVariableFieldDefinitionHasFieldValuesConnection;
  validationSchema?: Maybe<Scalars['JSON']>;
  xref: Scalars['ID'];
};


export type DataVariableFieldDefinitionHasCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CuratedDatasetOptions>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableFieldDefinitionHasCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableFieldDefinitionHasCuratedDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetConnectionSort>>;
  where?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};


export type DataVariableFieldDefinitionHasFieldValuesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DataVariableValueOptions>;
  where?: InputMaybe<DataVariableValueWhere>;
};


export type DataVariableFieldDefinitionHasFieldValuesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DataVariableValueWhere>;
};


export type DataVariableFieldDefinitionHasFieldValuesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectionSort>>;
  where?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionAggregateSelection = {
  __typename?: 'DataVariableFieldDefinitionAggregateSelection';
  count: Scalars['Int'];
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinitionConnectInput = {
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput>;
  hasFieldValues?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectFieldInput>>;
};

export type DataVariableFieldDefinitionConnectOrCreateInput = {
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput>;
  hasFieldValues?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput>>;
};

export type DataVariableFieldDefinitionConnectOrCreateWhere = {
  node: DataVariableFieldDefinitionUniqueWhere;
};

export type DataVariableFieldDefinitionConnectWhere = {
  node: DataVariableFieldDefinitionWhere;
};

export type DataVariableFieldDefinitionCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetFieldInput>;
  hasFieldValues?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesFieldInput>;
  validationSchema?: InputMaybe<Scalars['JSON']>;
  xref: Scalars['ID'];
};

export type DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection = {
  __typename?: 'DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection>;
};

export type DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection = {
  __typename?: 'DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection = {
  __typename?: 'DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection>;
};

export type DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection = {
  __typename?: 'DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection';
  dataVariableValueID: IdAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinitionDeleteInput = {
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput>;
  hasFieldValues?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput>>;
};

export type DataVariableFieldDefinitionDisconnectInput = {
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput>;
  hasFieldValues?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput>>;
};

export type DataVariableFieldDefinitionEdge = {
  __typename?: 'DataVariableFieldDefinitionEdge';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type DataVariableFieldDefinitionHasCuratedDatasetAggregateInput = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetAggregateInput>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput = {
  connect?: InputMaybe<CuratedDatasetConnectInput>;
  where?: InputMaybe<CuratedDatasetConnectWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput = {
  onCreate: DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInputOnCreate;
  where: CuratedDatasetConnectOrCreateWhere;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInputOnCreate = {
  node: CuratedDatasetOnCreateInput;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnection = {
  __typename?: 'DataVariableFieldDefinitionHasCuratedDatasetConnection';
  edges: Array<DataVariableFieldDefinitionHasCuratedDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectionSort = {
  node?: InputMaybe<CuratedDatasetSort>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>>;
  node?: InputMaybe<CuratedDatasetWhere>;
  node_NOT?: InputMaybe<CuratedDatasetWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput = {
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  where?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<CuratedDatasetDisconnectInput>;
  where?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetFieldInput = {
  connect?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetRelationship = {
  __typename?: 'DataVariableFieldDefinitionHasCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput = {
  node?: InputMaybe<CuratedDatasetUpdateInput>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput = {
  connect?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput>;
  delete?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput>;
  update?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput>;
  where?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesAggregateInput = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesAggregateInput>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput>;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectFieldInput = {
  connect?: InputMaybe<Array<DataVariableValueConnectInput>>;
  where?: InputMaybe<DataVariableValueConnectWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput = {
  onCreate: DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInputOnCreate;
  where: DataVariableValueConnectOrCreateWhere;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInputOnCreate = {
  node: DataVariableValueOnCreateInput;
};

export type DataVariableFieldDefinitionHasFieldValuesConnection = {
  __typename?: 'DataVariableFieldDefinitionHasFieldValuesConnection';
  edges: Array<DataVariableFieldDefinitionHasFieldValuesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableFieldDefinitionHasFieldValuesConnectionSort = {
  node?: InputMaybe<DataVariableValueSort>;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectionWhere = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>>;
  node?: InputMaybe<DataVariableValueWhere>;
  node_NOT?: InputMaybe<DataVariableValueWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesCreateFieldInput = {
  node: DataVariableValueCreateInput;
};

export type DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput = {
  delete?: InputMaybe<DataVariableValueDeleteInput>;
  where?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput = {
  disconnect?: InputMaybe<DataVariableValueDisconnectInput>;
  where?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesFieldInput = {
  connect?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesCreateFieldInput>>;
};

export type DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput>>;
  dataVariableValueID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionHasFieldValuesRelationship = {
  __typename?: 'DataVariableFieldDefinitionHasFieldValuesRelationship';
  cursor: Scalars['String'];
  node: DataVariableValue;
};

export type DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput = {
  node?: InputMaybe<DataVariableValueUpdateInput>;
};

export type DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput = {
  connect?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesCreateFieldInput>>;
  delete?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput>>;
  update?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput>;
  where?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  validationSchema?: InputMaybe<Scalars['JSON']>;
  xref: Scalars['ID'];
};

export type DataVariableFieldDefinitionOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableFieldDefinitionSort objects to sort DataVariableFieldDefinitions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataVariableFieldDefinitionSort>>;
};

export type DataVariableFieldDefinitionRelationInput = {
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput>;
  hasFieldValues?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesCreateFieldInput>>;
};

/** Fields to sort DataVariableFieldDefinitions by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableFieldDefinitionSort object. */
export type DataVariableFieldDefinitionSort = {
  dataVariableFieldDefinitionID?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  validationSchema?: InputMaybe<SortDirection>;
  xref?: InputMaybe<SortDirection>;
};

export type DataVariableFieldDefinitionUniqueWhere = {
  dataVariableFieldDefinitionID?: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  hasCuratedDataset?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput>;
  hasFieldValues?: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput>>;
  validationSchema?: InputMaybe<Scalars['JSON']>;
  xref?: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionWhere = {
  AND?: InputMaybe<Array<DataVariableFieldDefinitionWhere>>;
  OR?: InputMaybe<Array<DataVariableFieldDefinitionWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  dataVariableFieldDefinitionID?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldDefinitionID_NOT?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldDefinitionID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  hasCuratedDataset?: InputMaybe<CuratedDatasetWhere>;
  hasCuratedDatasetAggregate?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetAggregateInput>;
  hasCuratedDatasetConnection?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
  hasCuratedDatasetConnection_NOT?: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
  hasCuratedDataset_NOT?: InputMaybe<CuratedDatasetWhere>;
  hasFieldValues?: InputMaybe<DataVariableValueWhere>;
  hasFieldValuesAggregate?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesAggregateInput>;
  hasFieldValuesConnection?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_ALL?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_NONE?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_NOT?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_SINGLE?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_SOME?: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  /** Return DataVariableFieldDefinitions where all of the related DataVariableValues match this filter */
  hasFieldValues_ALL?: InputMaybe<DataVariableValueWhere>;
  /** Return DataVariableFieldDefinitions where none of the related DataVariableValues match this filter */
  hasFieldValues_NONE?: InputMaybe<DataVariableValueWhere>;
  hasFieldValues_NOT?: InputMaybe<DataVariableValueWhere>;
  /** Return DataVariableFieldDefinitions where one of the related DataVariableValues match this filter */
  hasFieldValues_SINGLE?: InputMaybe<DataVariableValueWhere>;
  /** Return DataVariableFieldDefinitions where some of the related DataVariableValues match this filter */
  hasFieldValues_SOME?: InputMaybe<DataVariableValueWhere>;
  validationSchema?: InputMaybe<Scalars['JSON']>;
  validationSchema_IN?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  validationSchema_NOT?: InputMaybe<Scalars['JSON']>;
  validationSchema_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  xref?: InputMaybe<Scalars['ID']>;
  xref_CONTAINS?: InputMaybe<Scalars['ID']>;
  xref_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  xref_IN?: InputMaybe<Array<Scalars['ID']>>;
  xref_NOT?: InputMaybe<Scalars['ID']>;
  xref_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  xref_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  xref_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  xref_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  xref_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionsConnection = {
  __typename?: 'DataVariableFieldDefinitionsConnection';
  edges: Array<DataVariableFieldDefinitionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableFieldDeleteInput = {
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionDeleteFieldInput>;
};

export type DataVariableFieldDisconnectInput = {
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionDisconnectFieldInput>;
};

export type DataVariableFieldEdge = {
  __typename?: 'DataVariableFieldEdge';
  cursor: Scalars['String'];
  node: DataVariableField;
};

export type DataVariableFieldHasFieldDefinitionAggregateInput = {
  AND?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionAggregateInput>>;
  OR?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput>;
};

export type DataVariableFieldHasFieldDefinitionConnectFieldInput = {
  connect?: InputMaybe<DataVariableFieldDefinitionConnectInput>;
  where?: InputMaybe<DataVariableFieldDefinitionConnectWhere>;
};

export type DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput = {
  onCreate: DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInputOnCreate;
  where: DataVariableFieldDefinitionConnectOrCreateWhere;
};

export type DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInputOnCreate = {
  node: DataVariableFieldDefinitionOnCreateInput;
};

export type DataVariableFieldHasFieldDefinitionConnection = {
  __typename?: 'DataVariableFieldHasFieldDefinitionConnection';
  edges: Array<DataVariableFieldHasFieldDefinitionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableFieldHasFieldDefinitionConnectionSort = {
  node?: InputMaybe<DataVariableFieldDefinitionSort>;
};

export type DataVariableFieldHasFieldDefinitionConnectionWhere = {
  AND?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionConnectionWhere>>;
  OR?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionConnectionWhere>>;
  node?: InputMaybe<DataVariableFieldDefinitionWhere>;
  node_NOT?: InputMaybe<DataVariableFieldDefinitionWhere>;
};

export type DataVariableFieldHasFieldDefinitionCreateFieldInput = {
  node: DataVariableFieldDefinitionCreateInput;
};

export type DataVariableFieldHasFieldDefinitionDeleteFieldInput = {
  delete?: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldHasFieldDefinitionDisconnectFieldInput = {
  disconnect?: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  where?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldHasFieldDefinitionFieldInput = {
  connect?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput>;
  create?: InputMaybe<DataVariableFieldHasFieldDefinitionCreateFieldInput>;
};

export type DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput>>;
  dataVariableFieldDefinitionID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  xref_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldHasFieldDefinitionRelationship = {
  __typename?: 'DataVariableFieldHasFieldDefinitionRelationship';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type DataVariableFieldHasFieldDefinitionUpdateConnectionInput = {
  node?: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
};

export type DataVariableFieldHasFieldDefinitionUpdateFieldInput = {
  connect?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput>;
  create?: InputMaybe<DataVariableFieldHasFieldDefinitionCreateFieldInput>;
  delete?: InputMaybe<DataVariableFieldHasFieldDefinitionDeleteFieldInput>;
  disconnect?: InputMaybe<DataVariableFieldHasFieldDefinitionDisconnectFieldInput>;
  update?: InputMaybe<DataVariableFieldHasFieldDefinitionUpdateConnectionInput>;
  where?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code: Scalars['String'];
  description: Scalars['String'];
  jsonSchema: Scalars['JSON'];
};

export type DataVariableFieldOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableFieldSort objects to sort DataVariableFields by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataVariableFieldSort>>;
};

export type DataVariableFieldRelationInput = {
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionCreateFieldInput>;
};

/** Fields to sort DataVariableFields by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableFieldSort object. */
export type DataVariableFieldSort = {
  code?: InputMaybe<SortDirection>;
  dataVariableFieldID?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  jsonSchema?: InputMaybe<SortDirection>;
};

export type DataVariableFieldUniqueWhere = {
  dataVariableFieldID?: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasFieldDefinition?: InputMaybe<DataVariableFieldHasFieldDefinitionUpdateFieldInput>;
  jsonSchema?: InputMaybe<Scalars['JSON']>;
};

export type DataVariableFieldWhere = {
  AND?: InputMaybe<Array<DataVariableFieldWhere>>;
  OR?: InputMaybe<Array<DataVariableFieldWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  code_CONTAINS?: InputMaybe<Scalars['String']>;
  code_ENDS_WITH?: InputMaybe<Scalars['String']>;
  code_IN?: InputMaybe<Array<Scalars['String']>>;
  code_NOT?: InputMaybe<Scalars['String']>;
  code_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  code_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  code_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  code_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  code_STARTS_WITH?: InputMaybe<Scalars['String']>;
  dataVariableFieldID?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldID_NOT?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  hasFieldDefinition?: InputMaybe<DataVariableFieldDefinitionWhere>;
  hasFieldDefinitionAggregate?: InputMaybe<DataVariableFieldHasFieldDefinitionAggregateInput>;
  hasFieldDefinitionConnection?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
  hasFieldDefinitionConnection_NOT?: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
  hasFieldDefinition_NOT?: InputMaybe<DataVariableFieldDefinitionWhere>;
  jsonSchema?: InputMaybe<Scalars['JSON']>;
  jsonSchema_IN?: InputMaybe<Array<Scalars['JSON']>>;
  jsonSchema_NOT?: InputMaybe<Scalars['JSON']>;
  jsonSchema_NOT_IN?: InputMaybe<Array<Scalars['JSON']>>;
};

export type DataVariableFieldsAggregateInput = {
  AND?: InputMaybe<Array<DataVariableFieldsAggregateInput>>;
  OR?: InputMaybe<Array<DataVariableFieldsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DataVariableFieldsNodeAggregationWhereInput>;
};

export type DataVariableFieldsConnectFieldInput = {
  connect?: InputMaybe<Array<DataVariableFieldConnectInput>>;
  where?: InputMaybe<DataVariableFieldConnectWhere>;
};

export type DataVariableFieldsConnectOrCreateFieldInput = {
  onCreate: DataVariableFieldsConnectOrCreateFieldInputOnCreate;
  where: DataVariableFieldConnectOrCreateWhere;
};

export type DataVariableFieldsConnectOrCreateFieldInputOnCreate = {
  node: DataVariableFieldOnCreateInput;
};

export type DataVariableFieldsConnection = {
  __typename?: 'DataVariableFieldsConnection';
  edges: Array<DataVariableFieldsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableFieldsConnectionSort = {
  node?: InputMaybe<DataVariableFieldSort>;
};

export type DataVariableFieldsConnectionWhere = {
  AND?: InputMaybe<Array<DataVariableFieldsConnectionWhere>>;
  OR?: InputMaybe<Array<DataVariableFieldsConnectionWhere>>;
  node?: InputMaybe<DataVariableFieldWhere>;
  node_NOT?: InputMaybe<DataVariableFieldWhere>;
};

export type DataVariableFieldsCreateFieldInput = {
  node: DataVariableFieldCreateInput;
};

export type DataVariableFieldsDeleteFieldInput = {
  delete?: InputMaybe<DataVariableFieldDeleteInput>;
  where?: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableFieldsDisconnectFieldInput = {
  disconnect?: InputMaybe<DataVariableFieldDisconnectInput>;
  where?: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableFieldsFieldInput = {
  connect?: InputMaybe<Array<DataVariableFieldsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataVariableFieldsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataVariableFieldsCreateFieldInput>>;
};

export type DataVariableFieldsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataVariableFieldsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataVariableFieldsNodeAggregationWhereInput>>;
  code_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  code_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  code_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  code_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  code_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  code_EQUAL?: InputMaybe<Scalars['String']>;
  code_GT?: InputMaybe<Scalars['Int']>;
  code_GTE?: InputMaybe<Scalars['Int']>;
  code_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  code_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  code_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  code_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  code_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  code_LT?: InputMaybe<Scalars['Int']>;
  code_LTE?: InputMaybe<Scalars['Int']>;
  code_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  code_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  code_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  code_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  code_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  dataVariableFieldID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type DataVariableFieldsRelationship = {
  __typename?: 'DataVariableFieldsRelationship';
  cursor: Scalars['String'];
  node: DataVariableField;
};

export type DataVariableFieldsUpdateConnectionInput = {
  node?: InputMaybe<DataVariableFieldUpdateInput>;
};

export type DataVariableFieldsUpdateFieldInput = {
  connect?: InputMaybe<Array<DataVariableFieldsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DataVariableFieldsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DataVariableFieldsCreateFieldInput>>;
  delete?: InputMaybe<Array<DataVariableFieldsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataVariableFieldsDisconnectFieldInput>>;
  update?: InputMaybe<DataVariableFieldsUpdateConnectionInput>;
  where?: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DataVariableOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableSort objects to sort DataVariables by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataVariableSort>>;
};

export type DataVariableRelationInput = {
  curatedDataset?: InputMaybe<Array<DataVariableCuratedDatasetCreateFieldInput>>;
  fields?: InputMaybe<Array<DataVariableFieldsCreateFieldInput>>;
};

/** Fields to sort DataVariables by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableSort object. */
export type DataVariableSort = {
  dataVariableID?: InputMaybe<SortDirection>;
};

export type DataVariableUniqueWhere = {
  dataVariableID?: InputMaybe<Scalars['ID']>;
};

export type DataVariableUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  curatedDataset?: InputMaybe<Array<DataVariableCuratedDatasetUpdateFieldInput>>;
  fields?: InputMaybe<Array<DataVariableFieldsUpdateFieldInput>>;
};

export type DataVariableValue = {
  __typename?: 'DataVariableValue';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  dataVariableValueID: Scalars['ID'];
  fromFieldDefinition: DataVariableFieldDefinition;
  fromFieldDefinitionAggregate?: Maybe<DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection>;
  fromFieldDefinitionConnection: DataVariableValueFromFieldDefinitionConnection;
  value: Scalars['JSON'];
};


export type DataVariableValueFromFieldDefinitionArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DataVariableFieldDefinitionOptions>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableValueFromFieldDefinitionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableValueFromFieldDefinitionConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DataVariableValueFromFieldDefinitionConnectionSort>>;
  where?: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueAggregateSelection = {
  __typename?: 'DataVariableValueAggregateSelection';
  count: Scalars['Int'];
  dataVariableValueID: IdAggregateSelectionNonNullable;
};

export type DataVariableValueConnectInput = {
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionConnectFieldInput>;
};

export type DataVariableValueConnectOrCreateInput = {
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput>;
};

export type DataVariableValueConnectOrCreateWhere = {
  node: DataVariableValueUniqueWhere;
};

export type DataVariableValueConnectWhere = {
  node: DataVariableValueWhere;
};

export type DataVariableValueCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionFieldInput>;
  value: Scalars['JSON'];
};

export type DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection = {
  __typename?: 'DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection>;
};

export type DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection = {
  __typename?: 'DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection';
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type DataVariableValueDeleteInput = {
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionDeleteFieldInput>;
};

export type DataVariableValueDisconnectInput = {
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionDisconnectFieldInput>;
};

export type DataVariableValueEdge = {
  __typename?: 'DataVariableValueEdge';
  cursor: Scalars['String'];
  node: DataVariableValue;
};

export type DataVariableValueFromFieldDefinitionAggregateInput = {
  AND?: InputMaybe<Array<DataVariableValueFromFieldDefinitionAggregateInput>>;
  OR?: InputMaybe<Array<DataVariableValueFromFieldDefinitionAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DataVariableValueFromFieldDefinitionNodeAggregationWhereInput>;
};

export type DataVariableValueFromFieldDefinitionConnectFieldInput = {
  connect?: InputMaybe<DataVariableFieldDefinitionConnectInput>;
  where?: InputMaybe<DataVariableFieldDefinitionConnectWhere>;
};

export type DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput = {
  onCreate: DataVariableValueFromFieldDefinitionConnectOrCreateFieldInputOnCreate;
  where: DataVariableFieldDefinitionConnectOrCreateWhere;
};

export type DataVariableValueFromFieldDefinitionConnectOrCreateFieldInputOnCreate = {
  node: DataVariableFieldDefinitionOnCreateInput;
};

export type DataVariableValueFromFieldDefinitionConnection = {
  __typename?: 'DataVariableValueFromFieldDefinitionConnection';
  edges: Array<DataVariableValueFromFieldDefinitionRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableValueFromFieldDefinitionConnectionSort = {
  node?: InputMaybe<DataVariableFieldDefinitionSort>;
};

export type DataVariableValueFromFieldDefinitionConnectionWhere = {
  AND?: InputMaybe<Array<DataVariableValueFromFieldDefinitionConnectionWhere>>;
  OR?: InputMaybe<Array<DataVariableValueFromFieldDefinitionConnectionWhere>>;
  node?: InputMaybe<DataVariableFieldDefinitionWhere>;
  node_NOT?: InputMaybe<DataVariableFieldDefinitionWhere>;
};

export type DataVariableValueFromFieldDefinitionCreateFieldInput = {
  node: DataVariableFieldDefinitionCreateInput;
};

export type DataVariableValueFromFieldDefinitionDeleteFieldInput = {
  delete?: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where?: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueFromFieldDefinitionDisconnectFieldInput = {
  disconnect?: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  where?: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueFromFieldDefinitionFieldInput = {
  connect?: InputMaybe<DataVariableValueFromFieldDefinitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput>;
  create?: InputMaybe<DataVariableValueFromFieldDefinitionCreateFieldInput>;
};

export type DataVariableValueFromFieldDefinitionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataVariableValueFromFieldDefinitionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataVariableValueFromFieldDefinitionNodeAggregationWhereInput>>;
  dataVariableFieldDefinitionID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  xref_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type DataVariableValueFromFieldDefinitionRelationship = {
  __typename?: 'DataVariableValueFromFieldDefinitionRelationship';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type DataVariableValueFromFieldDefinitionUpdateConnectionInput = {
  node?: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
};

export type DataVariableValueFromFieldDefinitionUpdateFieldInput = {
  connect?: InputMaybe<DataVariableValueFromFieldDefinitionConnectFieldInput>;
  connectOrCreate?: InputMaybe<DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput>;
  create?: InputMaybe<DataVariableValueFromFieldDefinitionCreateFieldInput>;
  delete?: InputMaybe<DataVariableValueFromFieldDefinitionDeleteFieldInput>;
  disconnect?: InputMaybe<DataVariableValueFromFieldDefinitionDisconnectFieldInput>;
  update?: InputMaybe<DataVariableValueFromFieldDefinitionUpdateConnectionInput>;
  where?: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value: Scalars['JSON'];
};

export type DataVariableValueOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableValueSort objects to sort DataVariableValues by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataVariableValueSort>>;
};

export type DataVariableValueRelationInput = {
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionCreateFieldInput>;
};

/** Fields to sort DataVariableValues by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableValueSort object. */
export type DataVariableValueSort = {
  dataVariableValueID?: InputMaybe<SortDirection>;
  value?: InputMaybe<SortDirection>;
};

export type DataVariableValueUniqueWhere = {
  dataVariableValueID?: InputMaybe<Scalars['ID']>;
};

export type DataVariableValueUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromFieldDefinition?: InputMaybe<DataVariableValueFromFieldDefinitionUpdateFieldInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type DataVariableValueWhere = {
  AND?: InputMaybe<Array<DataVariableValueWhere>>;
  OR?: InputMaybe<Array<DataVariableValueWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  dataVariableValueID?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableValueID_NOT?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableValueID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableValueID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  fromFieldDefinition?: InputMaybe<DataVariableFieldDefinitionWhere>;
  fromFieldDefinitionAggregate?: InputMaybe<DataVariableValueFromFieldDefinitionAggregateInput>;
  fromFieldDefinitionConnection?: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
  fromFieldDefinitionConnection_NOT?: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
  fromFieldDefinition_NOT?: InputMaybe<DataVariableFieldDefinitionWhere>;
  value?: InputMaybe<Scalars['JSON']>;
  value_IN?: InputMaybe<Array<Scalars['JSON']>>;
  value_NOT?: InputMaybe<Scalars['JSON']>;
  value_NOT_IN?: InputMaybe<Array<Scalars['JSON']>>;
};

export type DataVariableValuesConnection = {
  __typename?: 'DataVariableValuesConnection';
  edges: Array<DataVariableValueEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableWhere = {
  AND?: InputMaybe<Array<DataVariableWhere>>;
  OR?: InputMaybe<Array<DataVariableWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  curatedDataset?: InputMaybe<CuratedDatasetWhere>;
  curatedDatasetAggregate?: InputMaybe<DataVariableCuratedDatasetAggregateInput>;
  curatedDatasetConnection?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_ALL?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_NONE?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_NOT?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_SINGLE?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_SOME?: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  /** Return DataVariables where all of the related CuratedDatasets match this filter */
  curatedDataset_ALL?: InputMaybe<CuratedDatasetWhere>;
  /** Return DataVariables where none of the related CuratedDatasets match this filter */
  curatedDataset_NONE?: InputMaybe<CuratedDatasetWhere>;
  curatedDataset_NOT?: InputMaybe<CuratedDatasetWhere>;
  /** Return DataVariables where one of the related CuratedDatasets match this filter */
  curatedDataset_SINGLE?: InputMaybe<CuratedDatasetWhere>;
  /** Return DataVariables where some of the related CuratedDatasets match this filter */
  curatedDataset_SOME?: InputMaybe<CuratedDatasetWhere>;
  dataVariableID?: InputMaybe<Scalars['ID']>;
  dataVariableID_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableID_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableID_NOT?: InputMaybe<Scalars['ID']>;
  dataVariableID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  dataVariableID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  dataVariableID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  dataVariableID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  fields?: InputMaybe<DataVariableFieldWhere>;
  fieldsAggregate?: InputMaybe<DataVariableFieldsAggregateInput>;
  fieldsConnection?: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_ALL?: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_NONE?: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_NOT?: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_SINGLE?: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_SOME?: InputMaybe<DataVariableFieldsConnectionWhere>;
  /** Return DataVariables where all of the related DataVariableFields match this filter */
  fields_ALL?: InputMaybe<DataVariableFieldWhere>;
  /** Return DataVariables where none of the related DataVariableFields match this filter */
  fields_NONE?: InputMaybe<DataVariableFieldWhere>;
  fields_NOT?: InputMaybe<DataVariableFieldWhere>;
  /** Return DataVariables where one of the related DataVariableFields match this filter */
  fields_SINGLE?: InputMaybe<DataVariableFieldWhere>;
  /** Return DataVariables where some of the related DataVariableFields match this filter */
  fields_SOME?: InputMaybe<DataVariableFieldWhere>;
};

export type DataVariablesConnection = {
  __typename?: 'DataVariablesConnection';
  edges: Array<DataVariableEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: 'DateTimeAggregateSelectionNonNullable';
  max: Scalars['DateTime'];
  min: Scalars['DateTime'];
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type FileValidation = {
  __typename?: 'FileValidation';
  isValid: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  mismatches?: Maybe<Array<Maybe<Mismatch>>>;
};

export type FileValidationAggregateSelection = {
  __typename?: 'FileValidationAggregateSelection';
  count: Scalars['Int'];
  message: StringAggregateSelectionNullable;
};

export type FileValidationCreateInput = {
  isValid: Scalars['Boolean'];
  message?: InputMaybe<Scalars['String']>;
};

export type FileValidationEdge = {
  __typename?: 'FileValidationEdge';
  cursor: Scalars['String'];
  node: FileValidation;
};

export type FileValidationOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more FileValidationSort objects to sort FileValidations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FileValidationSort>>;
};

/** Fields to sort FileValidations by. The order in which sorts are applied is not guaranteed when specifying many fields in one FileValidationSort object. */
export type FileValidationSort = {
  isValid?: InputMaybe<SortDirection>;
  message?: InputMaybe<SortDirection>;
};

export type FileValidationUpdateInput = {
  isValid?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
};

export type FileValidationWhere = {
  AND?: InputMaybe<Array<FileValidationWhere>>;
  OR?: InputMaybe<Array<FileValidationWhere>>;
  isValid?: InputMaybe<Scalars['Boolean']>;
  isValid_NOT?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  message_CONTAINS?: InputMaybe<Scalars['String']>;
  message_ENDS_WITH?: InputMaybe<Scalars['String']>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_NOT?: InputMaybe<Scalars['String']>;
  message_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  message_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  message_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  message_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type FileValidationsConnection = {
  __typename?: 'FileValidationsConnection';
  edges: Array<FileValidationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FloatAggregateSelectionNonNullable = {
  __typename?: 'FloatAggregateSelectionNonNullable';
  average: Scalars['Float'];
  max: Scalars['Float'];
  min: Scalars['Float'];
  sum: Scalars['Float'];
};

export enum FunnelState {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  Completing = 'COMPLETING',
  Configuring = 'CONFIGURING',
  Initializing = 'INITIALIZING',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Resizing = 'RESIZING',
  Running = 'RUNNING',
  Suspended = 'SUSPENDED'
}

export type GeographyCitiesConnection = {
  __typename?: 'GeographyCitiesConnection';
  edges: Array<GeographyCityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GeographyCity = {
  __typename?: 'GeographyCity';
  city: Scalars['String'];
  cityID: Scalars['ID'];
  country: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeographyCityAggregateSelection = {
  __typename?: 'GeographyCityAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  cityID: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  country: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
};

export type GeographyCityConnectOrCreateWhere = {
  node: GeographyCityUniqueWhere;
};

export type GeographyCityConnectWhere = {
  node: GeographyCityWhere;
};

export type GeographyCityCreateInput = {
  city: Scalars['String'];
  cityID: Scalars['ID'];
  country: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeographyCityEdge = {
  __typename?: 'GeographyCityEdge';
  cursor: Scalars['String'];
  node: GeographyCity;
};

export type GeographyCityOnCreateInput = {
  city: Scalars['String'];
  cityID: Scalars['ID'];
  country: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GeographyCityOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more GeographyCitySort objects to sort GeographyCities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GeographyCitySort>>;
};

/** Fields to sort GeographyCities by. The order in which sorts are applied is not guaranteed when specifying many fields in one GeographyCitySort object. */
export type GeographyCitySort = {
  city?: InputMaybe<SortDirection>;
  cityID?: InputMaybe<SortDirection>;
  country?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  latitude?: InputMaybe<SortDirection>;
  longitude?: InputMaybe<SortDirection>;
};

export type GeographyCityUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GeographyCityUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  cityID?: InputMaybe<Scalars['ID']>;
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  latitude_ADD?: InputMaybe<Scalars['Float']>;
  latitude_DIVIDE?: InputMaybe<Scalars['Float']>;
  latitude_MULTIPLY?: InputMaybe<Scalars['Float']>;
  latitude_SUBTRACT?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  longitude_ADD?: InputMaybe<Scalars['Float']>;
  longitude_DIVIDE?: InputMaybe<Scalars['Float']>;
  longitude_MULTIPLY?: InputMaybe<Scalars['Float']>;
  longitude_SUBTRACT?: InputMaybe<Scalars['Float']>;
};

export type GeographyCityWhere = {
  AND?: InputMaybe<Array<GeographyCityWhere>>;
  OR?: InputMaybe<Array<GeographyCityWhere>>;
  city?: InputMaybe<Scalars['String']>;
  cityID?: InputMaybe<Scalars['ID']>;
  cityID_CONTAINS?: InputMaybe<Scalars['ID']>;
  cityID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  cityID_IN?: InputMaybe<Array<Scalars['ID']>>;
  cityID_NOT?: InputMaybe<Scalars['ID']>;
  cityID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  cityID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  cityID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  cityID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  cityID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  city_CONTAINS?: InputMaybe<Scalars['String']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']>;
  city_IN?: InputMaybe<Array<Scalars['String']>>;
  city_NOT?: InputMaybe<Scalars['String']>;
  city_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  city_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  city_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  city_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  country_CONTAINS?: InputMaybe<Scalars['String']>;
  country_ENDS_WITH?: InputMaybe<Scalars['String']>;
  country_IN?: InputMaybe<Array<Scalars['String']>>;
  country_NOT?: InputMaybe<Scalars['String']>;
  country_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  country_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  country_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  country_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  country_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  latitude?: InputMaybe<Scalars['Float']>;
  latitude_GT?: InputMaybe<Scalars['Float']>;
  latitude_GTE?: InputMaybe<Scalars['Float']>;
  latitude_IN?: InputMaybe<Array<Scalars['Float']>>;
  latitude_LT?: InputMaybe<Scalars['Float']>;
  latitude_LTE?: InputMaybe<Scalars['Float']>;
  latitude_NOT?: InputMaybe<Scalars['Float']>;
  latitude_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
  longitude?: InputMaybe<Scalars['Float']>;
  longitude_GT?: InputMaybe<Scalars['Float']>;
  longitude_GTE?: InputMaybe<Scalars['Float']>;
  longitude_IN?: InputMaybe<Array<Scalars['Float']>>;
  longitude_LT?: InputMaybe<Scalars['Float']>;
  longitude_LTE?: InputMaybe<Scalars['Float']>;
  longitude_NOT?: InputMaybe<Scalars['Float']>;
  longitude_NOT_IN?: InputMaybe<Array<Scalars['Float']>>;
};

export type HarmonizedDataset = {
  __typename?: 'HarmonizedDataset';
  harmonizedDatasetID: Scalars['ID'];
  name: Scalars['String'];
  rawDatasets: Array<RawDataset>;
  rawDatasetsAggregate?: Maybe<HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection>;
  rawDatasetsConnection: HarmonizedDatasetRawDatasetsConnection;
};


export type HarmonizedDatasetRawDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type HarmonizedDatasetRawDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type HarmonizedDatasetRawDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectionSort>>;
  where?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetAggregateSelection = {
  __typename?: 'HarmonizedDatasetAggregateSelection';
  count: Scalars['Int'];
  harmonizedDatasetID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type HarmonizedDatasetConnectInput = {
  rawDatasets?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectFieldInput>>;
};

export type HarmonizedDatasetConnectOrCreateInput = {
  rawDatasets?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput>>;
};

export type HarmonizedDatasetCreateInput = {
  name: Scalars['String'];
  rawDatasets?: InputMaybe<HarmonizedDatasetRawDatasetsFieldInput>;
};

export type HarmonizedDatasetDeleteInput = {
  rawDatasets?: InputMaybe<Array<HarmonizedDatasetRawDatasetsDeleteFieldInput>>;
};

export type HarmonizedDatasetDisconnectInput = {
  rawDatasets?: InputMaybe<Array<HarmonizedDatasetRawDatasetsDisconnectFieldInput>>;
};

export type HarmonizedDatasetEdge = {
  __typename?: 'HarmonizedDatasetEdge';
  cursor: Scalars['String'];
  node: HarmonizedDataset;
};

export type HarmonizedDatasetOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more HarmonizedDatasetSort objects to sort HarmonizedDatasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<HarmonizedDatasetSort>>;
};

export type HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection = {
  __typename?: 'HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection>;
};

export type HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection = {
  __typename?: 'HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type HarmonizedDatasetRawDatasetsAggregateInput = {
  AND?: InputMaybe<Array<HarmonizedDatasetRawDatasetsAggregateInput>>;
  OR?: InputMaybe<Array<HarmonizedDatasetRawDatasetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<HarmonizedDatasetRawDatasetsNodeAggregationWhereInput>;
};

export type HarmonizedDatasetRawDatasetsConnectFieldInput = {
  connect?: InputMaybe<Array<RawDatasetConnectInput>>;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput = {
  onCreate: HarmonizedDatasetRawDatasetsConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type HarmonizedDatasetRawDatasetsConnectOrCreateFieldInputOnCreate = {
  node: RawDatasetOnCreateInput;
};

export type HarmonizedDatasetRawDatasetsConnection = {
  __typename?: 'HarmonizedDatasetRawDatasetsConnection';
  edges: Array<HarmonizedDatasetRawDatasetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HarmonizedDatasetRawDatasetsConnectionSort = {
  node?: InputMaybe<RawDatasetSort>;
};

export type HarmonizedDatasetRawDatasetsConnectionWhere = {
  AND?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectionWhere>>;
  OR?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectionWhere>>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type HarmonizedDatasetRawDatasetsCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type HarmonizedDatasetRawDatasetsDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRawDatasetsDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRawDatasetsFieldInput = {
  connect?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HarmonizedDatasetRawDatasetsCreateFieldInput>>;
};

export type HarmonizedDatasetRawDatasetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HarmonizedDatasetRawDatasetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HarmonizedDatasetRawDatasetsNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type HarmonizedDatasetRawDatasetsRelationship = {
  __typename?: 'HarmonizedDatasetRawDatasetsRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type HarmonizedDatasetRawDatasetsUpdateConnectionInput = {
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type HarmonizedDatasetRawDatasetsUpdateFieldInput = {
  connect?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HarmonizedDatasetRawDatasetsCreateFieldInput>>;
  delete?: InputMaybe<Array<HarmonizedDatasetRawDatasetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HarmonizedDatasetRawDatasetsDisconnectFieldInput>>;
  update?: InputMaybe<HarmonizedDatasetRawDatasetsUpdateConnectionInput>;
  where?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRelationInput = {
  rawDatasets?: InputMaybe<Array<HarmonizedDatasetRawDatasetsCreateFieldInput>>;
};

/** Fields to sort HarmonizedDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one HarmonizedDatasetSort object. */
export type HarmonizedDatasetSort = {
  harmonizedDatasetID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type HarmonizedDatasetUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  rawDatasets?: InputMaybe<Array<HarmonizedDatasetRawDatasetsUpdateFieldInput>>;
};

export type HarmonizedDatasetWhere = {
  AND?: InputMaybe<Array<HarmonizedDatasetWhere>>;
  OR?: InputMaybe<Array<HarmonizedDatasetWhere>>;
  harmonizedDatasetID?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_CONTAINS?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_IN?: InputMaybe<Array<Scalars['ID']>>;
  harmonizedDatasetID_NOT?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  harmonizedDatasetID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  rawDatasets?: InputMaybe<RawDatasetWhere>;
  rawDatasetsAggregate?: InputMaybe<HarmonizedDatasetRawDatasetsAggregateInput>;
  rawDatasetsConnection?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_ALL?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NONE?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NOT?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SINGLE?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SOME?: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  /** Return HarmonizedDatasets where all of the related RawDatasets match this filter */
  rawDatasets_ALL?: InputMaybe<RawDatasetWhere>;
  /** Return HarmonizedDatasets where none of the related RawDatasets match this filter */
  rawDatasets_NONE?: InputMaybe<RawDatasetWhere>;
  rawDatasets_NOT?: InputMaybe<RawDatasetWhere>;
  /** Return HarmonizedDatasets where one of the related RawDatasets match this filter */
  rawDatasets_SINGLE?: InputMaybe<RawDatasetWhere>;
  /** Return HarmonizedDatasets where some of the related RawDatasets match this filter */
  rawDatasets_SOME?: InputMaybe<RawDatasetWhere>;
};

export type HarmonizedDatasetsConnection = {
  __typename?: 'HarmonizedDatasetsConnection';
  edges: Array<HarmonizedDatasetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HasCodebook = {
  validated: Scalars['Boolean'];
};

export type HasCodebookCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasCodebookSort = {
  validated?: InputMaybe<SortDirection>;
};

export type HasCodebookUpdateInput = {
  validated?: InputMaybe<Scalars['Boolean']>;
};

export type HasCodebookWhere = {
  AND?: InputMaybe<Array<HasCodebookWhere>>;
  OR?: InputMaybe<Array<HasCodebookWhere>>;
  validated?: InputMaybe<Scalars['Boolean']>;
  validated_NOT?: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedCodebook = {
  validated: Scalars['Boolean'];
};

export type HasPairedCodebookCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasPairedCodebookSort = {
  validated?: InputMaybe<SortDirection>;
};

export type HasPairedCodebookUpdateInput = {
  validated?: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedCodebookWhere = {
  AND?: InputMaybe<Array<HasPairedCodebookWhere>>;
  OR?: InputMaybe<Array<HasPairedCodebookWhere>>;
  validated?: InputMaybe<Scalars['Boolean']>;
  validated_NOT?: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedRawdatafile = {
  validated: Scalars['Boolean'];
};

export type HasPairedRawdatafileCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasPairedRawdatafileSort = {
  validated?: InputMaybe<SortDirection>;
};

export type HasPairedRawdatafileUpdateInput = {
  validated?: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedRawdatafileWhere = {
  AND?: InputMaybe<Array<HasPairedRawdatafileWhere>>;
  OR?: InputMaybe<Array<HasPairedRawdatafileWhere>>;
  validated?: InputMaybe<Scalars['Boolean']>;
  validated_NOT?: InputMaybe<Scalars['Boolean']>;
};

export type HasRawdatafile = {
  validated: Scalars['Boolean'];
};

export type HasRawdatafileCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasRawdatafileSort = {
  validated?: InputMaybe<SortDirection>;
};

export type HasRawdatafileUpdateInput = {
  validated?: InputMaybe<Scalars['Boolean']>;
};

export type HasRawdatafileWhere = {
  AND?: InputMaybe<Array<HasRawdatafileWhere>>;
  OR?: InputMaybe<Array<HasRawdatafileWhere>>;
  validated?: InputMaybe<Scalars['Boolean']>;
  validated_NOT?: InputMaybe<Scalars['Boolean']>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IdAggregateSelectionNullable = {
  __typename?: 'IDAggregateSelectionNullable';
  longest?: Maybe<Scalars['ID']>;
  shortest?: Maybe<Scalars['ID']>;
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};

export enum KeycloakSyncOperation {
  Add = 'add',
  Delete = 'delete'
}

export enum KeycloakSyncSet {
  Keycloak = 'keycloak',
  Neo4j = 'neo4j'
}

export type KeycloakUser = {
  __typename?: 'KeycloakUser';
  email: Scalars['Email'];
  keycloakUserID: Scalars['ID'];
  name: Scalars['String'];
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type KeycloakUserAggregateSelection = {
  __typename?: 'KeycloakUserAggregateSelection';
  count: Scalars['Int'];
  keycloakUserID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type KeycloakUserCreateInput = {
  email: Scalars['Email'];
  keycloakUserID: Scalars['ID'];
  name: Scalars['String'];
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type KeycloakUserEdge = {
  __typename?: 'KeycloakUserEdge';
  cursor: Scalars['String'];
  node: KeycloakUser;
};

export type KeycloakUserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more KeycloakUserSort objects to sort KeycloakUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<KeycloakUserSort>>;
};

/** Fields to sort KeycloakUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one KeycloakUserSort object. */
export type KeycloakUserSort = {
  email?: InputMaybe<SortDirection>;
  keycloakUserID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type KeycloakUserUpdateInput = {
  email?: InputMaybe<Scalars['Email']>;
  keycloakUserID?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roles_POP?: InputMaybe<Scalars['Int']>;
  roles_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type KeycloakUserWhere = {
  AND?: InputMaybe<Array<KeycloakUserWhere>>;
  OR?: InputMaybe<Array<KeycloakUserWhere>>;
  email?: InputMaybe<Scalars['Email']>;
  email_IN?: InputMaybe<Array<Scalars['Email']>>;
  email_NOT?: InputMaybe<Scalars['Email']>;
  email_NOT_IN?: InputMaybe<Array<Scalars['Email']>>;
  keycloakUserID?: InputMaybe<Scalars['ID']>;
  keycloakUserID_CONTAINS?: InputMaybe<Scalars['ID']>;
  keycloakUserID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  keycloakUserID_IN?: InputMaybe<Array<Scalars['ID']>>;
  keycloakUserID_NOT?: InputMaybe<Scalars['ID']>;
  keycloakUserID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  keycloakUserID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  keycloakUserID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  keycloakUserID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  keycloakUserID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roles_INCLUDES?: InputMaybe<Scalars['String']>;
  roles_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  roles_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
};

export type KeycloakUsersConnection = {
  __typename?: 'KeycloakUsersConnection';
  edges: Array<KeycloakUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioBucket = {
  __typename?: 'MinioBucket';
  bucketName: Scalars['ID'];
  minioObjects: Array<MinioUpload>;
  minioObjectsAggregate?: Maybe<MinioBucketMinioUploadMinioObjectsAggregationSelection>;
  minioObjectsConnection: MinioBucketMinioObjectsConnection;
};


export type MinioBucketMinioObjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MinioBucketMinioObjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MinioBucketMinioObjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioBucketMinioObjectsConnectionSort>>;
  where?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketAggregateSelection = {
  __typename?: 'MinioBucketAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
};

export type MinioBucketConnectInput = {
  minioObjects?: InputMaybe<Array<MinioBucketMinioObjectsConnectFieldInput>>;
};

export type MinioBucketConnectOrCreateInput = {
  minioObjects?: InputMaybe<Array<MinioBucketMinioObjectsConnectOrCreateFieldInput>>;
};

export type MinioBucketConnectWhere = {
  node: MinioBucketWhere;
};

export type MinioBucketCreateInput = {
  bucketName: Scalars['ID'];
  minioObjects?: InputMaybe<MinioBucketMinioObjectsFieldInput>;
};

export type MinioBucketDeleteInput = {
  minioObjects?: InputMaybe<Array<MinioBucketMinioObjectsDeleteFieldInput>>;
};

export type MinioBucketDisconnectInput = {
  minioObjects?: InputMaybe<Array<MinioBucketMinioObjectsDisconnectFieldInput>>;
};

export type MinioBucketEdge = {
  __typename?: 'MinioBucketEdge';
  cursor: Scalars['String'];
  node: MinioBucket;
};

export type MinioBucketMinioObjectsAggregateInput = {
  AND?: InputMaybe<Array<MinioBucketMinioObjectsAggregateInput>>;
  OR?: InputMaybe<Array<MinioBucketMinioObjectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioBucketMinioObjectsNodeAggregationWhereInput>;
};

export type MinioBucketMinioObjectsConnectFieldInput = {
  connect?: InputMaybe<Array<MinioUploadConnectInput>>;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type MinioBucketMinioObjectsConnectOrCreateFieldInput = {
  onCreate: MinioBucketMinioObjectsConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type MinioBucketMinioObjectsConnectOrCreateFieldInputOnCreate = {
  node: MinioUploadOnCreateInput;
};

export type MinioBucketMinioObjectsConnection = {
  __typename?: 'MinioBucketMinioObjectsConnection';
  edges: Array<MinioBucketMinioObjectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioBucketMinioObjectsConnectionSort = {
  node?: InputMaybe<MinioUploadSort>;
};

export type MinioBucketMinioObjectsConnectionWhere = {
  AND?: InputMaybe<Array<MinioBucketMinioObjectsConnectionWhere>>;
  OR?: InputMaybe<Array<MinioBucketMinioObjectsConnectionWhere>>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type MinioBucketMinioObjectsCreateFieldInput = {
  node: MinioUploadCreateInput;
};

export type MinioBucketMinioObjectsDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketMinioObjectsDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketMinioObjectsFieldInput = {
  connect?: InputMaybe<Array<MinioBucketMinioObjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MinioBucketMinioObjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MinioBucketMinioObjectsCreateFieldInput>>;
};

export type MinioBucketMinioObjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioBucketMinioObjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioBucketMinioObjectsNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioBucketMinioObjectsRelationship = {
  __typename?: 'MinioBucketMinioObjectsRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type MinioBucketMinioObjectsUpdateConnectionInput = {
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type MinioBucketMinioObjectsUpdateFieldInput = {
  connect?: InputMaybe<Array<MinioBucketMinioObjectsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MinioBucketMinioObjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MinioBucketMinioObjectsCreateFieldInput>>;
  delete?: InputMaybe<Array<MinioBucketMinioObjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MinioBucketMinioObjectsDisconnectFieldInput>>;
  update?: InputMaybe<MinioBucketMinioObjectsUpdateConnectionInput>;
  where?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketMinioUploadMinioObjectsAggregationSelection = {
  __typename?: 'MinioBucketMinioUploadMinioObjectsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioBucketMinioUploadMinioObjectsNodeAggregateSelection>;
};

export type MinioBucketMinioUploadMinioObjectsNodeAggregateSelection = {
  __typename?: 'MinioBucketMinioUploadMinioObjectsNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioBucketOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MinioBucketSort objects to sort MinioBuckets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MinioBucketSort>>;
};

export type MinioBucketRelationInput = {
  minioObjects?: InputMaybe<Array<MinioBucketMinioObjectsCreateFieldInput>>;
};

/** Fields to sort MinioBuckets by. The order in which sorts are applied is not guaranteed when specifying many fields in one MinioBucketSort object. */
export type MinioBucketSort = {
  bucketName?: InputMaybe<SortDirection>;
};

export type MinioBucketUpdateInput = {
  bucketName?: InputMaybe<Scalars['ID']>;
  minioObjects?: InputMaybe<Array<MinioBucketMinioObjectsUpdateFieldInput>>;
};

export type MinioBucketWhere = {
  AND?: InputMaybe<Array<MinioBucketWhere>>;
  OR?: InputMaybe<Array<MinioBucketWhere>>;
  bucketName?: InputMaybe<Scalars['ID']>;
  bucketName_CONTAINS?: InputMaybe<Scalars['ID']>;
  bucketName_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  bucketName_IN?: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT?: InputMaybe<Scalars['ID']>;
  bucketName_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  bucketName_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  bucketName_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  bucketName_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  minioObjects?: InputMaybe<MinioUploadWhere>;
  minioObjectsAggregate?: InputMaybe<MinioBucketMinioObjectsAggregateInput>;
  minioObjectsConnection?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_ALL?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_NONE?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_NOT?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_SINGLE?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_SOME?: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  /** Return MinioBuckets where all of the related MinioUploads match this filter */
  minioObjects_ALL?: InputMaybe<MinioUploadWhere>;
  /** Return MinioBuckets where none of the related MinioUploads match this filter */
  minioObjects_NONE?: InputMaybe<MinioUploadWhere>;
  minioObjects_NOT?: InputMaybe<MinioUploadWhere>;
  /** Return MinioBuckets where one of the related MinioUploads match this filter */
  minioObjects_SINGLE?: InputMaybe<MinioUploadWhere>;
  /** Return MinioBuckets where some of the related MinioUploads match this filter */
  minioObjects_SOME?: InputMaybe<MinioUploadWhere>;
};

export type MinioBucketsConnection = {
  __typename?: 'MinioBucketsConnection';
  edges: Array<MinioBucketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUpload = {
  __typename?: 'MinioUpload';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  bucketName: Scalars['ID'];
  codeBookRawDataset?: Maybe<RawDataset>;
  codeBookRawDatasetAggregate?: Maybe<MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection>;
  codeBookRawDatasetConnection: MinioUploadCodeBookRawDatasetConnection;
  filename: Scalars['String'];
  fromExportTask?: Maybe<Task>;
  fromExportTaskAggregate?: Maybe<MinioUploadTaskFromExportTaskAggregationSelection>;
  fromExportTaskConnection: MinioUploadFromExportTaskConnection;
  objectName: Scalars['ID'];
  pairedCodebook?: Maybe<MinioUpload>;
  pairedCodebookAggregate?: Maybe<MinioUploadMinioUploadPairedCodebookAggregationSelection>;
  pairedCodebookConnection: MinioUploadPairedCodebookConnection;
  pairedRawdataFile?: Maybe<MinioUpload>;
  pairedRawdataFileAggregate?: Maybe<MinioUploadMinioUploadPairedRawdataFileAggregationSelection>;
  pairedRawdataFileConnection: MinioUploadPairedRawdataFileConnection;
  presignedURL?: Maybe<Scalars['String']>;
  rawDataset?: Maybe<RawDataset>;
  rawDatasetAggregate?: Maybe<MinioUploadRawDatasetRawDatasetAggregationSelection>;
  rawDatasetConnection: MinioUploadRawDatasetConnection;
  rawdataFileRawDataset?: Maybe<RawDataset>;
  rawdataFileRawDatasetAggregate?: Maybe<MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection>;
  rawdataFileRawDatasetConnection: MinioUploadRawdataFileRawDatasetConnection;
};


export type MinioUploadCodeBookRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadCodeBookRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadCodeBookRawDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadCodeBookRawDatasetConnectionSort>>;
  where?: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};


export type MinioUploadFromExportTaskArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type MinioUploadFromExportTaskAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskWhere>;
};


export type MinioUploadFromExportTaskConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadFromExportTaskConnectionSort>>;
  where?: InputMaybe<MinioUploadFromExportTaskConnectionWhere>;
};


export type MinioUploadPairedCodebookArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedCodebookAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedCodebookConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadPairedCodebookConnectionSort>>;
  where?: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};


export type MinioUploadPairedRawdataFileArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedRawdataFileAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedRawdataFileConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadPairedRawdataFileConnectionSort>>;
  where?: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};


export type MinioUploadRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadRawDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadRawDatasetConnectionSort>>;
  where?: InputMaybe<MinioUploadRawDatasetConnectionWhere>;
};


export type MinioUploadRawdataFileRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadRawdataFileRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadRawdataFileRawDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetConnectionSort>>;
  where?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadAggregateSelection = {
  __typename?: 'MinioUploadAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioUploadCodeBookRawDatasetAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadCodeBookRawDatasetAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadCodeBookRawDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadCodeBookRawDatasetNodeAggregationWhereInput>;
};

export type MinioUploadCodeBookRawDatasetConnectFieldInput = {
  connect?: InputMaybe<RawDatasetConnectInput>;
  edge: HasCodebookCreateInput;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput = {
  onCreate: MinioUploadCodeBookRawDatasetConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type MinioUploadCodeBookRawDatasetConnectOrCreateFieldInputOnCreate = {
  edge: HasCodebookCreateInput;
  node: RawDatasetOnCreateInput;
};

export type MinioUploadCodeBookRawDatasetConnection = {
  __typename?: 'MinioUploadCodeBookRawDatasetConnection';
  edges: Array<MinioUploadCodeBookRawDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadCodeBookRawDatasetConnectionSort = {
  edge?: InputMaybe<HasCodebookSort>;
  node?: InputMaybe<RawDatasetSort>;
};

export type MinioUploadCodeBookRawDatasetConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadCodeBookRawDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadCodeBookRawDatasetConnectionWhere>>;
  edge?: InputMaybe<HasCodebookWhere>;
  edge_NOT?: InputMaybe<HasCodebookWhere>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadCodeBookRawDatasetCreateFieldInput = {
  edge: HasCodebookCreateInput;
  node: RawDatasetCreateInput;
};

export type MinioUploadCodeBookRawDatasetDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};

export type MinioUploadCodeBookRawDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};

export type MinioUploadCodeBookRawDatasetFieldInput = {
  connect?: InputMaybe<MinioUploadCodeBookRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadCodeBookRawDatasetCreateFieldInput>;
};

export type MinioUploadCodeBookRawDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadCodeBookRawDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadCodeBookRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadCodeBookRawDatasetRelationship = HasCodebook & {
  __typename?: 'MinioUploadCodeBookRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
  validated: Scalars['Boolean'];
};

export type MinioUploadCodeBookRawDatasetUpdateConnectionInput = {
  edge?: InputMaybe<HasCodebookUpdateInput>;
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type MinioUploadCodeBookRawDatasetUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadCodeBookRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadCodeBookRawDatasetCreateFieldInput>;
  delete?: InputMaybe<MinioUploadCodeBookRawDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadCodeBookRawDatasetDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadCodeBookRawDatasetUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};

export type MinioUploadConnectInput = {
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetConnectFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskConnectFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetConnectFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectFieldInput>;
};

export type MinioUploadConnectOrCreateInput = {
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetConnectOrCreateFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput>;
};

export type MinioUploadConnectOrCreateWhere = {
  node: MinioUploadUniqueWhere;
};

export type MinioUploadConnectWhere = {
  node: MinioUploadWhere;
};

export type MinioUploadCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bucketName: Scalars['ID'];
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetFieldInput>;
  filename: Scalars['String'];
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetFieldInput>;
};

export type MinioUploadDeleteInput = {
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetDeleteFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskDeleteFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookDeleteFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileDeleteFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetDeleteFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetDeleteFieldInput>;
};

export type MinioUploadDisconnectInput = {
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetDisconnectFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskDisconnectFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookDisconnectFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileDisconnectFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetDisconnectFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetDisconnectFieldInput>;
};

export type MinioUploadEdge = {
  __typename?: 'MinioUploadEdge';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type MinioUploadFromExportTaskAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadFromExportTaskAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadFromExportTaskAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadFromExportTaskNodeAggregationWhereInput>;
};

export type MinioUploadFromExportTaskConnectFieldInput = {
  connect?: InputMaybe<TaskConnectInput>;
  where?: InputMaybe<TaskConnectWhere>;
};

export type MinioUploadFromExportTaskConnection = {
  __typename?: 'MinioUploadFromExportTaskConnection';
  edges: Array<MinioUploadFromExportTaskRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadFromExportTaskConnectionSort = {
  node?: InputMaybe<TaskSort>;
};

export type MinioUploadFromExportTaskConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadFromExportTaskConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadFromExportTaskConnectionWhere>>;
  node?: InputMaybe<TaskWhere>;
  node_NOT?: InputMaybe<TaskWhere>;
};

export type MinioUploadFromExportTaskCreateFieldInput = {
  node: TaskCreateInput;
};

export type MinioUploadFromExportTaskDeleteFieldInput = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<MinioUploadFromExportTaskConnectionWhere>;
};

export type MinioUploadFromExportTaskDisconnectFieldInput = {
  disconnect?: InputMaybe<TaskDisconnectInput>;
  where?: InputMaybe<MinioUploadFromExportTaskConnectionWhere>;
};

export type MinioUploadFromExportTaskFieldInput = {
  connect?: InputMaybe<MinioUploadFromExportTaskConnectFieldInput>;
  create?: InputMaybe<MinioUploadFromExportTaskCreateFieldInput>;
};

export type MinioUploadFromExportTaskNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadFromExportTaskNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadFromExportTaskNodeAggregationWhereInput>>;
  creationTime_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creationTime_EQUAL?: InputMaybe<Scalars['String']>;
  creationTime_GT?: InputMaybe<Scalars['Int']>;
  creationTime_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  id_EQUAL?: InputMaybe<Scalars['String']>;
  id_GT?: InputMaybe<Scalars['Int']>;
  id_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  id_LT?: InputMaybe<Scalars['Int']>;
  id_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  taskID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadFromExportTaskRelationship = {
  __typename?: 'MinioUploadFromExportTaskRelationship';
  cursor: Scalars['String'];
  node: Task;
};

export type MinioUploadFromExportTaskUpdateConnectionInput = {
  node?: InputMaybe<TaskUpdateInput>;
};

export type MinioUploadFromExportTaskUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadFromExportTaskConnectFieldInput>;
  create?: InputMaybe<MinioUploadFromExportTaskCreateFieldInput>;
  delete?: InputMaybe<MinioUploadFromExportTaskDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadFromExportTaskDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadFromExportTaskUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadFromExportTaskConnectionWhere>;
};

export type MinioUploadMinioUploadPairedCodebookAggregationSelection = {
  __typename?: 'MinioUploadMinioUploadPairedCodebookAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadMinioUploadPairedCodebookNodeAggregateSelection>;
};

export type MinioUploadMinioUploadPairedCodebookNodeAggregateSelection = {
  __typename?: 'MinioUploadMinioUploadPairedCodebookNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioUploadMinioUploadPairedRawdataFileAggregationSelection = {
  __typename?: 'MinioUploadMinioUploadPairedRawdataFileAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection>;
};

export type MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection = {
  __typename?: 'MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioUploadOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bucketName: Scalars['ID'];
  filename: Scalars['String'];
};

export type MinioUploadOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MinioUploadSort objects to sort MinioUploads by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MinioUploadSort>>;
};

export type MinioUploadPairedCodebookAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadPairedCodebookAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadPairedCodebookAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadPairedCodebookNodeAggregationWhereInput>;
};

export type MinioUploadPairedCodebookConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  edge: HasPairedRawdatafileCreateInput;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type MinioUploadPairedCodebookConnectOrCreateFieldInput = {
  onCreate: MinioUploadPairedCodebookConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type MinioUploadPairedCodebookConnectOrCreateFieldInputOnCreate = {
  edge: HasPairedRawdatafileCreateInput;
  node: MinioUploadOnCreateInput;
};

export type MinioUploadPairedCodebookConnection = {
  __typename?: 'MinioUploadPairedCodebookConnection';
  edges: Array<MinioUploadPairedCodebookRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadPairedCodebookConnectionSort = {
  edge?: InputMaybe<HasPairedRawdatafileSort>;
  node?: InputMaybe<MinioUploadSort>;
};

export type MinioUploadPairedCodebookConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadPairedCodebookConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadPairedCodebookConnectionWhere>>;
  edge?: InputMaybe<HasPairedRawdatafileWhere>;
  edge_NOT?: InputMaybe<HasPairedRawdatafileWhere>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type MinioUploadPairedCodebookCreateFieldInput = {
  edge: HasPairedRawdatafileCreateInput;
  node: MinioUploadCreateInput;
};

export type MinioUploadPairedCodebookDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};

export type MinioUploadPairedCodebookDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};

export type MinioUploadPairedCodebookFieldInput = {
  connect?: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
};

export type MinioUploadPairedCodebookNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadPairedCodebookNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadPairedCodebookNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadPairedCodebookRelationship = HasPairedRawdatafile & {
  __typename?: 'MinioUploadPairedCodebookRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type MinioUploadPairedCodebookUpdateConnectionInput = {
  edge?: InputMaybe<HasPairedRawdatafileUpdateInput>;
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type MinioUploadPairedCodebookUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
  delete?: InputMaybe<MinioUploadPairedCodebookDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadPairedCodebookDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadPairedCodebookUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};

export type MinioUploadPairedRawdataFileAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadPairedRawdataFileAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadPairedRawdataFileAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadPairedRawdataFileNodeAggregationWhereInput>;
};

export type MinioUploadPairedRawdataFileConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  edge: HasPairedCodebookCreateInput;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type MinioUploadPairedRawdataFileConnectOrCreateFieldInput = {
  onCreate: MinioUploadPairedRawdataFileConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type MinioUploadPairedRawdataFileConnectOrCreateFieldInputOnCreate = {
  edge: HasPairedCodebookCreateInput;
  node: MinioUploadOnCreateInput;
};

export type MinioUploadPairedRawdataFileConnection = {
  __typename?: 'MinioUploadPairedRawdataFileConnection';
  edges: Array<MinioUploadPairedRawdataFileRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadPairedRawdataFileConnectionSort = {
  edge?: InputMaybe<HasPairedCodebookSort>;
  node?: InputMaybe<MinioUploadSort>;
};

export type MinioUploadPairedRawdataFileConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadPairedRawdataFileConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadPairedRawdataFileConnectionWhere>>;
  edge?: InputMaybe<HasPairedCodebookWhere>;
  edge_NOT?: InputMaybe<HasPairedCodebookWhere>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type MinioUploadPairedRawdataFileCreateFieldInput = {
  edge: HasPairedCodebookCreateInput;
  node: MinioUploadCreateInput;
};

export type MinioUploadPairedRawdataFileDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};

export type MinioUploadPairedRawdataFileDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};

export type MinioUploadPairedRawdataFileFieldInput = {
  connect?: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
};

export type MinioUploadPairedRawdataFileNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadPairedRawdataFileNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadPairedRawdataFileNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadPairedRawdataFileRelationship = HasPairedCodebook & {
  __typename?: 'MinioUploadPairedRawdataFileRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type MinioUploadPairedRawdataFileUpdateConnectionInput = {
  edge?: InputMaybe<HasPairedCodebookUpdateInput>;
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type MinioUploadPairedRawdataFileUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
  delete?: InputMaybe<MinioUploadPairedRawdataFileDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadPairedRawdataFileDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadPairedRawdataFileUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};

export type MinioUploadRawDatasetAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadRawDatasetAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadRawDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadRawDatasetNodeAggregationWhereInput>;
};

export type MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection = {
  __typename?: 'MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection>;
};

export type MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadRawDatasetConnectFieldInput = {
  connect?: InputMaybe<RawDatasetConnectInput>;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type MinioUploadRawDatasetConnectOrCreateFieldInput = {
  onCreate: MinioUploadRawDatasetConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type MinioUploadRawDatasetConnectOrCreateFieldInputOnCreate = {
  node: RawDatasetOnCreateInput;
};

export type MinioUploadRawDatasetConnection = {
  __typename?: 'MinioUploadRawDatasetConnection';
  edges: Array<MinioUploadRawDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadRawDatasetConnectionSort = {
  node?: InputMaybe<RawDatasetSort>;
};

export type MinioUploadRawDatasetConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadRawDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadRawDatasetConnectionWhere>>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadRawDatasetCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type MinioUploadRawDatasetDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<MinioUploadRawDatasetConnectionWhere>;
};

export type MinioUploadRawDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<MinioUploadRawDatasetConnectionWhere>;
};

export type MinioUploadRawDatasetFieldInput = {
  connect?: InputMaybe<MinioUploadRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadRawDatasetCreateFieldInput>;
};

export type MinioUploadRawDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadRawDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadRawDatasetRawDatasetAggregationSelection = {
  __typename?: 'MinioUploadRawDatasetRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadRawDatasetRawDatasetNodeAggregateSelection>;
};

export type MinioUploadRawDatasetRawDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadRawDatasetRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection = {
  __typename?: 'MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection>;
};

export type MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadRawDatasetRelationship = {
  __typename?: 'MinioUploadRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type MinioUploadRawDatasetUpdateConnectionInput = {
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type MinioUploadRawDatasetUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadRawDatasetCreateFieldInput>;
  delete?: InputMaybe<MinioUploadRawDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadRawDatasetDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadRawDatasetUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadRawDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileRawDatasetAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput>;
};

export type MinioUploadRawdataFileRawDatasetConnectFieldInput = {
  connect?: InputMaybe<RawDatasetConnectInput>;
  edge: HasRawdatafileCreateInput;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput = {
  onCreate: MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInputOnCreate = {
  edge: HasRawdatafileCreateInput;
  node: RawDatasetOnCreateInput;
};

export type MinioUploadRawdataFileRawDatasetConnection = {
  __typename?: 'MinioUploadRawdataFileRawDatasetConnection';
  edges: Array<MinioUploadRawdataFileRawDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadRawdataFileRawDatasetConnectionSort = {
  edge?: InputMaybe<HasRawdatafileSort>;
  node?: InputMaybe<RawDatasetSort>;
};

export type MinioUploadRawdataFileRawDatasetConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetConnectionWhere>>;
  edge?: InputMaybe<HasRawdatafileWhere>;
  edge_NOT?: InputMaybe<HasRawdatafileWhere>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadRawdataFileRawDatasetCreateFieldInput = {
  edge: HasRawdatafileCreateInput;
  node: RawDatasetCreateInput;
};

export type MinioUploadRawdataFileRawDatasetDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileRawDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileRawDatasetFieldInput = {
  connect?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadRawdataFileRawDatasetCreateFieldInput>;
};

export type MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadRawdataFileRawDatasetRelationship = HasRawdatafile & {
  __typename?: 'MinioUploadRawdataFileRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
  validated: Scalars['Boolean'];
};

export type MinioUploadRawdataFileRawDatasetUpdateConnectionInput = {
  edge?: InputMaybe<HasRawdatafileUpdateInput>;
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type MinioUploadRawdataFileRawDatasetUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadRawdataFileRawDatasetCreateFieldInput>;
  delete?: InputMaybe<MinioUploadRawdataFileRawDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadRawdataFileRawDatasetDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadRawdataFileRawDatasetUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadRelationInput = {
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetCreateFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskCreateFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetCreateFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetCreateFieldInput>;
};

/** Fields to sort MinioUploads by. The order in which sorts are applied is not guaranteed when specifying many fields in one MinioUploadSort object. */
export type MinioUploadSort = {
  bucketName?: InputMaybe<SortDirection>;
  filename?: InputMaybe<SortDirection>;
  objectName?: InputMaybe<SortDirection>;
};

export type MinioUploadTaskFromExportTaskAggregationSelection = {
  __typename?: 'MinioUploadTaskFromExportTaskAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadTaskFromExportTaskNodeAggregateSelection>;
};

export type MinioUploadTaskFromExportTaskNodeAggregateSelection = {
  __typename?: 'MinioUploadTaskFromExportTaskNodeAggregateSelection';
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type MinioUploadUniqueWhere = {
  objectName?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bucketName?: InputMaybe<Scalars['ID']>;
  codeBookRawDataset?: InputMaybe<MinioUploadCodeBookRawDatasetUpdateFieldInput>;
  filename?: InputMaybe<Scalars['String']>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskUpdateFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookUpdateFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileUpdateFieldInput>;
  rawDataset?: InputMaybe<MinioUploadRawDatasetUpdateFieldInput>;
  rawdataFileRawDataset?: InputMaybe<MinioUploadRawdataFileRawDatasetUpdateFieldInput>;
};

export type MinioUploadWhere = {
  AND?: InputMaybe<Array<MinioUploadWhere>>;
  OR?: InputMaybe<Array<MinioUploadWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  bucketName?: InputMaybe<Scalars['ID']>;
  bucketName_CONTAINS?: InputMaybe<Scalars['ID']>;
  bucketName_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  bucketName_IN?: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT?: InputMaybe<Scalars['ID']>;
  bucketName_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  bucketName_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  bucketName_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  bucketName_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  codeBookRawDataset?: InputMaybe<RawDatasetWhere>;
  codeBookRawDatasetAggregate?: InputMaybe<MinioUploadCodeBookRawDatasetAggregateInput>;
  codeBookRawDatasetConnection?: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
  codeBookRawDatasetConnection_NOT?: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
  codeBookRawDataset_NOT?: InputMaybe<RawDatasetWhere>;
  filename?: InputMaybe<Scalars['String']>;
  filename_CONTAINS?: InputMaybe<Scalars['String']>;
  filename_ENDS_WITH?: InputMaybe<Scalars['String']>;
  filename_IN?: InputMaybe<Array<Scalars['String']>>;
  filename_NOT?: InputMaybe<Scalars['String']>;
  filename_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  filename_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  filename_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  filename_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  filename_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fromExportTask?: InputMaybe<TaskWhere>;
  fromExportTaskAggregate?: InputMaybe<MinioUploadFromExportTaskAggregateInput>;
  fromExportTaskConnection?: InputMaybe<MinioUploadFromExportTaskConnectionWhere>;
  fromExportTaskConnection_NOT?: InputMaybe<MinioUploadFromExportTaskConnectionWhere>;
  fromExportTask_NOT?: InputMaybe<TaskWhere>;
  objectName?: InputMaybe<Scalars['ID']>;
  objectName_CONTAINS?: InputMaybe<Scalars['ID']>;
  objectName_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  objectName_IN?: InputMaybe<Array<Scalars['ID']>>;
  objectName_NOT?: InputMaybe<Scalars['ID']>;
  objectName_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  objectName_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  objectName_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  objectName_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  objectName_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  pairedCodebook?: InputMaybe<MinioUploadWhere>;
  pairedCodebookAggregate?: InputMaybe<MinioUploadPairedCodebookAggregateInput>;
  pairedCodebookConnection?: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
  pairedCodebookConnection_NOT?: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
  pairedCodebook_NOT?: InputMaybe<MinioUploadWhere>;
  pairedRawdataFile?: InputMaybe<MinioUploadWhere>;
  pairedRawdataFileAggregate?: InputMaybe<MinioUploadPairedRawdataFileAggregateInput>;
  pairedRawdataFileConnection?: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
  pairedRawdataFileConnection_NOT?: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
  pairedRawdataFile_NOT?: InputMaybe<MinioUploadWhere>;
  rawDataset?: InputMaybe<RawDatasetWhere>;
  rawDatasetAggregate?: InputMaybe<MinioUploadRawDatasetAggregateInput>;
  rawDatasetConnection?: InputMaybe<MinioUploadRawDatasetConnectionWhere>;
  rawDatasetConnection_NOT?: InputMaybe<MinioUploadRawDatasetConnectionWhere>;
  rawDataset_NOT?: InputMaybe<RawDatasetWhere>;
  rawdataFileRawDataset?: InputMaybe<RawDatasetWhere>;
  rawdataFileRawDatasetAggregate?: InputMaybe<MinioUploadRawdataFileRawDatasetAggregateInput>;
  rawdataFileRawDatasetConnection?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
  rawdataFileRawDatasetConnection_NOT?: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
  rawdataFileRawDataset_NOT?: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadsConnection = {
  __typename?: 'MinioUploadsConnection';
  edges: Array<MinioUploadEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mismatch = {
  __typename?: 'Mismatch';
  fileA?: Maybe<Scalars['String']>;
  fileB?: Maybe<Scalars['String']>;
  lineNumber?: Maybe<Scalars['Int']>;
};

export type MismatchAggregateSelection = {
  __typename?: 'MismatchAggregateSelection';
  count: Scalars['Int'];
  fileA: StringAggregateSelectionNullable;
  fileB: StringAggregateSelectionNullable;
  lineNumber: IntAggregateSelectionNullable;
};

export type MismatchCreateInput = {
  fileA?: InputMaybe<Scalars['String']>;
  fileB?: InputMaybe<Scalars['String']>;
  lineNumber?: InputMaybe<Scalars['Int']>;
};

export type MismatchEdge = {
  __typename?: 'MismatchEdge';
  cursor: Scalars['String'];
  node: Mismatch;
};

export type MismatchOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more MismatchSort objects to sort Mismatches by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MismatchSort>>;
};

/** Fields to sort Mismatches by. The order in which sorts are applied is not guaranteed when specifying many fields in one MismatchSort object. */
export type MismatchSort = {
  fileA?: InputMaybe<SortDirection>;
  fileB?: InputMaybe<SortDirection>;
  lineNumber?: InputMaybe<SortDirection>;
};

export type MismatchUpdateInput = {
  fileA?: InputMaybe<Scalars['String']>;
  fileB?: InputMaybe<Scalars['String']>;
  lineNumber?: InputMaybe<Scalars['Int']>;
  lineNumber_DECREMENT?: InputMaybe<Scalars['Int']>;
  lineNumber_INCREMENT?: InputMaybe<Scalars['Int']>;
};

export type MismatchWhere = {
  AND?: InputMaybe<Array<MismatchWhere>>;
  OR?: InputMaybe<Array<MismatchWhere>>;
  fileA?: InputMaybe<Scalars['String']>;
  fileA_CONTAINS?: InputMaybe<Scalars['String']>;
  fileA_ENDS_WITH?: InputMaybe<Scalars['String']>;
  fileA_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileA_NOT?: InputMaybe<Scalars['String']>;
  fileA_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  fileA_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  fileA_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileA_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fileA_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fileB?: InputMaybe<Scalars['String']>;
  fileB_CONTAINS?: InputMaybe<Scalars['String']>;
  fileB_ENDS_WITH?: InputMaybe<Scalars['String']>;
  fileB_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileB_NOT?: InputMaybe<Scalars['String']>;
  fileB_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  fileB_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  fileB_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileB_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fileB_STARTS_WITH?: InputMaybe<Scalars['String']>;
  lineNumber?: InputMaybe<Scalars['Int']>;
  lineNumber_GT?: InputMaybe<Scalars['Int']>;
  lineNumber_GTE?: InputMaybe<Scalars['Int']>;
  lineNumber_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lineNumber_LT?: InputMaybe<Scalars['Int']>;
  lineNumber_LTE?: InputMaybe<Scalars['Int']>;
  lineNumber_NOT?: InputMaybe<Scalars['Int']>;
  lineNumber_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type MismatchesConnection = {
  __typename?: 'MismatchesConnection';
  edges: Array<MismatchEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelTask?: Maybe<Task>;
  createClientRoles: CreateClientRolesMutationResponse;
  createClientUsers: CreateClientUsersMutationResponse;
  createClients: CreateClientsMutationResponse;
  createCuratedDatasetFromCSVCodebook: Scalars['Boolean'];
  createCuratedDatasetFromRawDataset: CuratedDataset;
  createCuratedDatasetFromRawDatasetNew?: Maybe<CuratedDataset>;
  createCuratedDatasets: CreateCuratedDatasetsMutationResponse;
  createDataVariableFieldDefinitions: CreateDataVariableFieldDefinitionsMutationResponse;
  createDataVariableFields: CreateDataVariableFieldsMutationResponse;
  createDataVariableValues: CreateDataVariableValuesMutationResponse;
  createDataVariables: CreateDataVariablesMutationResponse;
  createFileValidations: CreateFileValidationsMutationResponse;
  createGeographyCities: CreateGeographyCitiesMutationResponse;
  createHarmonizedDatasets: CreateHarmonizedDatasetsMutationResponse;
  createKeycloakUsers: CreateKeycloakUsersMutationResponse;
  createMinioBuckets: CreateMinioBucketsMutationResponse;
  createMinioUploads: CreateMinioUploadsMutationResponse;
  createMismatches: CreateMismatchesMutationResponse;
  createNeo4JUpdateStats: CreateNeo4JUpdateStatsMutationResponse;
  createOntologies: CreateOntologiesMutationResponse;
  createOntologyClasses: CreateOntologyClassesMutationResponse;
  createOntologyRelations: CreateOntologyRelationsMutationResponse;
  createRawDatasetWithMinioBucket: RawDataset;
  createRawDatasets: CreateRawDatasetsMutationResponse;
  createStudies: CreateStudiesMutationResponse;
  createTasks: CreateTasksMutationResponse;
  deleteClientRoles: DeleteInfo;
  deleteClientUsers: DeleteInfo;
  deleteClients: DeleteInfo;
  deleteCuratedDatasets: DeleteInfo;
  deleteDataVariableFieldDefinitions: DeleteInfo;
  deleteDataVariableFields: DeleteInfo;
  deleteDataVariableValues: DeleteInfo;
  deleteDataVariables: DeleteInfo;
  deleteFileValidations: DeleteInfo;
  deleteGeographyCities: DeleteInfo;
  deleteHarmonizedDatasets: DeleteInfo;
  deleteKeycloakUsers: DeleteInfo;
  deleteMinioBuckets: DeleteInfo;
  deleteMinioUploads: DeleteInfo;
  deleteMismatches: DeleteInfo;
  deleteNeo4JUpdateStats: DeleteInfo;
  deleteOntologies: DeleteInfo;
  deleteOntologyClasses: DeleteInfo;
  deleteOntologyRelations: DeleteInfo;
  deleteRawDatasets: DeleteInfo;
  deleteStudies: DeleteInfo;
  deleteTasks: DeleteInfo;
  funnelTaskExportCuratedDataset?: Maybe<Task>;
  funnelTaskExportDataVariableFieldDefinitions?: Maybe<Task>;
  keycloakSyncUsers?: Maybe<Scalars['Boolean']>;
  keycloak_clients_createRole?: Maybe<Scalars['Boolean']>;
  keycloak_clients_delRole?: Maybe<Scalars['Boolean']>;
  keycloak_users_addClientRoleMappings?: Maybe<Scalars['Boolean']>;
  keycloak_users_create?: Maybe<ClientUser>;
  keycloak_users_delClientRoleMappings?: Maybe<Scalars['Boolean']>;
  keycloak_users_delete?: Maybe<Scalars['Boolean']>;
  me?: Maybe<KeycloakUser>;
  minioDelete?: Maybe<Scalars['Boolean']>;
  minioUploadFile: MinioUpload;
  nestedCuratedDatasetDelete?: Maybe<Neo4jUpdateStats>;
  nestedCuratedDatasetProperty?: Maybe<Neo4jUpdateStats>;
  nestedRawDatasetDelete?: Maybe<Neo4jUpdateStats>;
  nestedRawDatasetProperty?: Maybe<Neo4jUpdateStats>;
  nestedStudyDelete?: Maybe<Neo4jUpdateStats>;
  nestedStudyProperty?: Maybe<Neo4jUpdateStats>;
  nestedSwitch?: Maybe<Neo4jUpdateStats>;
  nestedSwitchDelete?: Maybe<Neo4jUpdateStats>;
  submitTask?: Maybe<Task>;
  updateClientRoles: UpdateClientRolesMutationResponse;
  updateClientUsers: UpdateClientUsersMutationResponse;
  updateClients: UpdateClientsMutationResponse;
  updateCuratedDatasets: UpdateCuratedDatasetsMutationResponse;
  updateDataVariableFieldDefinitions: UpdateDataVariableFieldDefinitionsMutationResponse;
  updateDataVariableFields: UpdateDataVariableFieldsMutationResponse;
  updateDataVariableValues: UpdateDataVariableValuesMutationResponse;
  updateDataVariables: UpdateDataVariablesMutationResponse;
  updateFileValidations: UpdateFileValidationsMutationResponse;
  updateGeographyCities: UpdateGeographyCitiesMutationResponse;
  updateGeographyCityToStudy: GeographyCity;
  updateHarmonizedDatasets: UpdateHarmonizedDatasetsMutationResponse;
  updateKeycloakUsers: UpdateKeycloakUsersMutationResponse;
  updateMinioBuckets: UpdateMinioBucketsMutationResponse;
  updateMinioUploads: UpdateMinioUploadsMutationResponse;
  updateMismatches: UpdateMismatchesMutationResponse;
  updateNeo4JUpdateStats: UpdateNeo4JUpdateStatsMutationResponse;
  updateOntologies: UpdateOntologiesMutationResponse;
  updateOntologyClasses: UpdateOntologyClassesMutationResponse;
  updateOntologyRelations: UpdateOntologyRelationsMutationResponse;
  updateRawDatasets: UpdateRawDatasetsMutationResponse;
  updateStudies: UpdateStudiesMutationResponse;
  updateTasks: UpdateTasksMutationResponse;
  validateCodebook?: Maybe<FileValidation>;
  validateRawdatafile?: Maybe<FileValidation>;
  validateRawfileCodebookPair?: Maybe<FileValidation>;
};


export type MutationCancelTaskArgs = {
  taskId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateClientRolesArgs = {
  input: Array<ClientRoleCreateInput>;
};


export type MutationCreateClientUsersArgs = {
  input: Array<ClientUserCreateInput>;
};


export type MutationCreateClientsArgs = {
  input: Array<ClientCreateInput>;
};


export type MutationCreateCuratedDatasetFromCsvCodebookArgs = {
  allowedSite: Scalars['String'];
  allowedStudy: Scalars['String'];
  name: Scalars['String'];
  rawDatasetID: Scalars['ID'];
};


export type MutationCreateCuratedDatasetFromRawDatasetArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  rawDatasetID: Scalars['ID'];
};


export type MutationCreateCuratedDatasetFromRawDatasetNewArgs = {
  codebookObjectName: Scalars['String'];
  rawDatasetID: Scalars['ID'];
  rawObjectName: Scalars['String'];
};


export type MutationCreateCuratedDatasetsArgs = {
  input: Array<CuratedDatasetCreateInput>;
};


export type MutationCreateDataVariableFieldDefinitionsArgs = {
  input: Array<DataVariableFieldDefinitionCreateInput>;
};


export type MutationCreateDataVariableFieldsArgs = {
  input: Array<DataVariableFieldCreateInput>;
};


export type MutationCreateDataVariableValuesArgs = {
  input: Array<DataVariableValueCreateInput>;
};


export type MutationCreateDataVariablesArgs = {
  input: Array<DataVariableCreateInput>;
};


export type MutationCreateFileValidationsArgs = {
  input: Array<FileValidationCreateInput>;
};


export type MutationCreateGeographyCitiesArgs = {
  input: Array<GeographyCityCreateInput>;
};


export type MutationCreateHarmonizedDatasetsArgs = {
  input: Array<HarmonizedDatasetCreateInput>;
};


export type MutationCreateKeycloakUsersArgs = {
  input: Array<KeycloakUserCreateInput>;
};


export type MutationCreateMinioBucketsArgs = {
  input: Array<MinioBucketCreateInput>;
};


export type MutationCreateMinioUploadsArgs = {
  input: Array<MinioUploadCreateInput>;
};


export type MutationCreateMismatchesArgs = {
  input: Array<MismatchCreateInput>;
};


export type MutationCreateNeo4JUpdateStatsArgs = {
  input: Array<Neo4jUpdateStatsCreateInput>;
};


export type MutationCreateOntologiesArgs = {
  input: Array<OntologyCreateInput>;
};


export type MutationCreateOntologyClassesArgs = {
  input: Array<OntologyClassCreateInput>;
};


export type MutationCreateOntologyRelationsArgs = {
  input: Array<OntologyRelationCreateInput>;
};


export type MutationCreateRawDatasetWithMinioBucketArgs = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
  studyID: Scalars['ID'];
  studySiteID: Scalars['ID'];
};


export type MutationCreateRawDatasetsArgs = {
  input: Array<RawDatasetCreateInput>;
};


export type MutationCreateStudiesArgs = {
  input: Array<StudyCreateInput>;
};


export type MutationCreateTasksArgs = {
  input: Array<TaskCreateInput>;
};


export type MutationDeleteClientRolesArgs = {
  where?: InputMaybe<ClientRoleWhere>;
};


export type MutationDeleteClientUsersArgs = {
  where?: InputMaybe<ClientUserWhere>;
};


export type MutationDeleteClientsArgs = {
  where?: InputMaybe<ClientWhere>;
};


export type MutationDeleteCuratedDatasetsArgs = {
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type MutationDeleteDataVariableFieldDefinitionsArgs = {
  delete?: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type MutationDeleteDataVariableFieldsArgs = {
  delete?: InputMaybe<DataVariableFieldDeleteInput>;
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type MutationDeleteDataVariableValuesArgs = {
  delete?: InputMaybe<DataVariableValueDeleteInput>;
  where?: InputMaybe<DataVariableValueWhere>;
};


export type MutationDeleteDataVariablesArgs = {
  delete?: InputMaybe<DataVariableDeleteInput>;
  where?: InputMaybe<DataVariableWhere>;
};


export type MutationDeleteFileValidationsArgs = {
  where?: InputMaybe<FileValidationWhere>;
};


export type MutationDeleteGeographyCitiesArgs = {
  where?: InputMaybe<GeographyCityWhere>;
};


export type MutationDeleteHarmonizedDatasetsArgs = {
  delete?: InputMaybe<HarmonizedDatasetDeleteInput>;
  where?: InputMaybe<HarmonizedDatasetWhere>;
};


export type MutationDeleteKeycloakUsersArgs = {
  where?: InputMaybe<KeycloakUserWhere>;
};


export type MutationDeleteMinioBucketsArgs = {
  delete?: InputMaybe<MinioBucketDeleteInput>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type MutationDeleteMinioUploadsArgs = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MutationDeleteMismatchesArgs = {
  where?: InputMaybe<MismatchWhere>;
};


export type MutationDeleteNeo4JUpdateStatsArgs = {
  where?: InputMaybe<Neo4jUpdateStatsWhere>;
};


export type MutationDeleteOntologiesArgs = {
  delete?: InputMaybe<OntologyDeleteInput>;
  where?: InputMaybe<OntologyWhere>;
};


export type MutationDeleteOntologyClassesArgs = {
  where?: InputMaybe<OntologyClassWhere>;
};


export type MutationDeleteOntologyRelationsArgs = {
  delete?: InputMaybe<OntologyRelationDeleteInput>;
  where?: InputMaybe<OntologyRelationWhere>;
};


export type MutationDeleteRawDatasetsArgs = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MutationDeleteStudiesArgs = {
  delete?: InputMaybe<StudyDeleteInput>;
  where?: InputMaybe<StudyWhere>;
};


export type MutationDeleteTasksArgs = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<TaskWhere>;
};


export type MutationFunnelTaskExportCuratedDatasetArgs = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  curatedDatasetID: Scalars['ID'];
  taskID: Scalars['ID'];
};


export type MutationFunnelTaskExportDataVariableFieldDefinitionsArgs = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataVariableFieldDefinitionIDs: Array<Scalars['ID']>;
  taskID: Scalars['ID'];
};


export type MutationKeycloakSyncUsersArgs = {
  missingIn?: InputMaybe<KeycloakSyncSet>;
  operation?: InputMaybe<KeycloakSyncOperation>;
};


export type MutationKeycloak_Clients_CreateRoleArgs = {
  clientID: Scalars['ID'];
  roleName: Scalars['String'];
};


export type MutationKeycloak_Clients_DelRoleArgs = {
  clientID: Scalars['ID'];
  roleName: Scalars['String'];
};


export type MutationKeycloak_Users_AddClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  roleID: Scalars['ID'];
  roleName: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationKeycloak_Users_CreateArgs = {
  email: Scalars['String'];
};


export type MutationKeycloak_Users_DelClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  roleID: Scalars['ID'];
  roleName: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationKeycloak_Users_DeleteArgs = {
  userID: Scalars['ID'];
};


export type MutationMinioDeleteArgs = {
  bucketName: Scalars['String'];
  objectName: Scalars['String'];
};


export type MutationMinioUploadFileArgs = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bucketName: Scalars['String'];
  file: Scalars['Upload'];
  rawDatasetID: Scalars['ID'];
};


export type MutationNestedCuratedDatasetDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationNestedCuratedDatasetPropertyArgs = {
  id: Scalars['ID'];
  operation: NestedOperations;
  property: Scalars['String'];
  value: Scalars['String'];
};


export type MutationNestedRawDatasetDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationNestedRawDatasetPropertyArgs = {
  id: Scalars['ID'];
  operation: NestedOperations;
  property: Scalars['String'];
  value: Scalars['String'];
};


export type MutationNestedStudyDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationNestedStudyPropertyArgs = {
  id: Scalars['ID'];
  operation: NestedOperations;
  property: Scalars['String'];
  value: Scalars['String'];
};


export type MutationNestedSwitchArgs = {
  id: Scalars['ID'];
  nestedSwitch: NestedSwitch;
  operation: NestedOperations;
  property: Scalars['String'];
  value: Scalars['String'];
};


export type MutationNestedSwitchDeleteArgs = {
  id: Scalars['ID'];
  nestedSwitchDelete?: InputMaybe<NestedSwitchDelete>;
};


export type MutationSubmitTaskArgs = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  command?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  taskID?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateClientRolesArgs = {
  update?: InputMaybe<ClientRoleUpdateInput>;
  where?: InputMaybe<ClientRoleWhere>;
};


export type MutationUpdateClientUsersArgs = {
  update?: InputMaybe<ClientUserUpdateInput>;
  where?: InputMaybe<ClientUserWhere>;
};


export type MutationUpdateClientsArgs = {
  update?: InputMaybe<ClientUpdateInput>;
  where?: InputMaybe<ClientWhere>;
};


export type MutationUpdateCuratedDatasetsArgs = {
  connect?: InputMaybe<CuratedDatasetConnectInput>;
  connectOrCreate?: InputMaybe<CuratedDatasetConnectOrCreateInput>;
  create?: InputMaybe<CuratedDatasetRelationInput>;
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  disconnect?: InputMaybe<CuratedDatasetDisconnectInput>;
  update?: InputMaybe<CuratedDatasetUpdateInput>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type MutationUpdateDataVariableFieldDefinitionsArgs = {
  connect?: InputMaybe<DataVariableFieldDefinitionConnectInput>;
  connectOrCreate?: InputMaybe<DataVariableFieldDefinitionConnectOrCreateInput>;
  create?: InputMaybe<DataVariableFieldDefinitionRelationInput>;
  delete?: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  disconnect?: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  update?: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type MutationUpdateDataVariableFieldsArgs = {
  connect?: InputMaybe<DataVariableFieldConnectInput>;
  connectOrCreate?: InputMaybe<DataVariableFieldConnectOrCreateInput>;
  create?: InputMaybe<DataVariableFieldRelationInput>;
  delete?: InputMaybe<DataVariableFieldDeleteInput>;
  disconnect?: InputMaybe<DataVariableFieldDisconnectInput>;
  update?: InputMaybe<DataVariableFieldUpdateInput>;
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type MutationUpdateDataVariableValuesArgs = {
  connect?: InputMaybe<DataVariableValueConnectInput>;
  connectOrCreate?: InputMaybe<DataVariableValueConnectOrCreateInput>;
  create?: InputMaybe<DataVariableValueRelationInput>;
  delete?: InputMaybe<DataVariableValueDeleteInput>;
  disconnect?: InputMaybe<DataVariableValueDisconnectInput>;
  update?: InputMaybe<DataVariableValueUpdateInput>;
  where?: InputMaybe<DataVariableValueWhere>;
};


export type MutationUpdateDataVariablesArgs = {
  connect?: InputMaybe<DataVariableConnectInput>;
  connectOrCreate?: InputMaybe<DataVariableConnectOrCreateInput>;
  create?: InputMaybe<DataVariableRelationInput>;
  delete?: InputMaybe<DataVariableDeleteInput>;
  disconnect?: InputMaybe<DataVariableDisconnectInput>;
  update?: InputMaybe<DataVariableUpdateInput>;
  where?: InputMaybe<DataVariableWhere>;
};


export type MutationUpdateFileValidationsArgs = {
  update?: InputMaybe<FileValidationUpdateInput>;
  where?: InputMaybe<FileValidationWhere>;
};


export type MutationUpdateGeographyCitiesArgs = {
  update?: InputMaybe<GeographyCityUpdateInput>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type MutationUpdateGeographyCityToStudyArgs = {
  cityID: Scalars['ID'];
  studyID: Scalars['ID'];
};


export type MutationUpdateHarmonizedDatasetsArgs = {
  connect?: InputMaybe<HarmonizedDatasetConnectInput>;
  connectOrCreate?: InputMaybe<HarmonizedDatasetConnectOrCreateInput>;
  create?: InputMaybe<HarmonizedDatasetRelationInput>;
  delete?: InputMaybe<HarmonizedDatasetDeleteInput>;
  disconnect?: InputMaybe<HarmonizedDatasetDisconnectInput>;
  update?: InputMaybe<HarmonizedDatasetUpdateInput>;
  where?: InputMaybe<HarmonizedDatasetWhere>;
};


export type MutationUpdateKeycloakUsersArgs = {
  update?: InputMaybe<KeycloakUserUpdateInput>;
  where?: InputMaybe<KeycloakUserWhere>;
};


export type MutationUpdateMinioBucketsArgs = {
  connect?: InputMaybe<MinioBucketConnectInput>;
  connectOrCreate?: InputMaybe<MinioBucketConnectOrCreateInput>;
  create?: InputMaybe<MinioBucketRelationInput>;
  delete?: InputMaybe<MinioBucketDeleteInput>;
  disconnect?: InputMaybe<MinioBucketDisconnectInput>;
  update?: InputMaybe<MinioBucketUpdateInput>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type MutationUpdateMinioUploadsArgs = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  connectOrCreate?: InputMaybe<MinioUploadConnectOrCreateInput>;
  create?: InputMaybe<MinioUploadRelationInput>;
  delete?: InputMaybe<MinioUploadDeleteInput>;
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  update?: InputMaybe<MinioUploadUpdateInput>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type MutationUpdateMismatchesArgs = {
  update?: InputMaybe<MismatchUpdateInput>;
  where?: InputMaybe<MismatchWhere>;
};


export type MutationUpdateNeo4JUpdateStatsArgs = {
  update?: InputMaybe<Neo4jUpdateStatsUpdateInput>;
  where?: InputMaybe<Neo4jUpdateStatsWhere>;
};


export type MutationUpdateOntologiesArgs = {
  connect?: InputMaybe<OntologyConnectInput>;
  connectOrCreate?: InputMaybe<OntologyConnectOrCreateInput>;
  create?: InputMaybe<OntologyRelationInput>;
  delete?: InputMaybe<OntologyDeleteInput>;
  disconnect?: InputMaybe<OntologyDisconnectInput>;
  update?: InputMaybe<OntologyUpdateInput>;
  where?: InputMaybe<OntologyWhere>;
};


export type MutationUpdateOntologyClassesArgs = {
  update?: InputMaybe<OntologyClassUpdateInput>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type MutationUpdateOntologyRelationsArgs = {
  connect?: InputMaybe<OntologyRelationConnectInput>;
  connectOrCreate?: InputMaybe<OntologyRelationConnectOrCreateInput>;
  create?: InputMaybe<OntologyRelationRelationInput>;
  delete?: InputMaybe<OntologyRelationDeleteInput>;
  disconnect?: InputMaybe<OntologyRelationDisconnectInput>;
  update?: InputMaybe<OntologyRelationUpdateInput>;
  where?: InputMaybe<OntologyRelationWhere>;
};


export type MutationUpdateRawDatasetsArgs = {
  connect?: InputMaybe<RawDatasetConnectInput>;
  connectOrCreate?: InputMaybe<RawDatasetConnectOrCreateInput>;
  create?: InputMaybe<RawDatasetRelationInput>;
  delete?: InputMaybe<RawDatasetDeleteInput>;
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  update?: InputMaybe<RawDatasetUpdateInput>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type MutationUpdateStudiesArgs = {
  connect?: InputMaybe<StudyConnectInput>;
  connectOrCreate?: InputMaybe<StudyConnectOrCreateInput>;
  create?: InputMaybe<StudyRelationInput>;
  delete?: InputMaybe<StudyDeleteInput>;
  disconnect?: InputMaybe<StudyDisconnectInput>;
  update?: InputMaybe<StudyUpdateInput>;
  where?: InputMaybe<StudyWhere>;
};


export type MutationUpdateTasksArgs = {
  connect?: InputMaybe<TaskConnectInput>;
  connectOrCreate?: InputMaybe<TaskConnectOrCreateInput>;
  create?: InputMaybe<TaskRelationInput>;
  delete?: InputMaybe<TaskDeleteInput>;
  disconnect?: InputMaybe<TaskDisconnectInput>;
  update?: InputMaybe<TaskUpdateInput>;
  where?: InputMaybe<TaskWhere>;
};


export type MutationValidateCodebookArgs = {
  objectName: Scalars['ID'];
  rawDatasetID: Scalars['ID'];
};


export type MutationValidateRawdatafileArgs = {
  objectName: Scalars['ID'];
  rawDatasetID: Scalars['ID'];
};


export type MutationValidateRawfileCodebookPairArgs = {
  objectNameCB: Scalars['ID'];
  objectNameRF: Scalars['ID'];
  rawDatasetIDCB: Scalars['ID'];
  rawDatasetIDRF: Scalars['ID'];
};

export type Neo4JUpdateStatsConnection = {
  __typename?: 'Neo4JUpdateStatsConnection';
  edges: Array<Neo4jUpdateStatsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Neo4jUpdateStats = {
  __typename?: 'Neo4jUpdateStats';
  constraintsAdded?: Maybe<Scalars['Int']>;
  constraintsRemoved?: Maybe<Scalars['Int']>;
  indexesAdded?: Maybe<Scalars['Int']>;
  indexesRemoved?: Maybe<Scalars['Int']>;
  labelsAdded?: Maybe<Scalars['Int']>;
  labelsRemoved?: Maybe<Scalars['Int']>;
  nodesCreated?: Maybe<Scalars['Int']>;
  nodesDeleted?: Maybe<Scalars['Int']>;
  propertiesSet?: Maybe<Scalars['Int']>;
  relationshipsCreated?: Maybe<Scalars['Int']>;
  relationshipsDeleted?: Maybe<Scalars['Int']>;
};

export type Neo4jUpdateStatsAggregateSelection = {
  __typename?: 'Neo4jUpdateStatsAggregateSelection';
  constraintsAdded: IntAggregateSelectionNullable;
  constraintsRemoved: IntAggregateSelectionNullable;
  count: Scalars['Int'];
  indexesAdded: IntAggregateSelectionNullable;
  indexesRemoved: IntAggregateSelectionNullable;
  labelsAdded: IntAggregateSelectionNullable;
  labelsRemoved: IntAggregateSelectionNullable;
  nodesCreated: IntAggregateSelectionNullable;
  nodesDeleted: IntAggregateSelectionNullable;
  propertiesSet: IntAggregateSelectionNullable;
  relationshipsCreated: IntAggregateSelectionNullable;
  relationshipsDeleted: IntAggregateSelectionNullable;
};

export type Neo4jUpdateStatsCreateInput = {
  constraintsAdded?: InputMaybe<Scalars['Int']>;
  constraintsRemoved?: InputMaybe<Scalars['Int']>;
  indexesAdded?: InputMaybe<Scalars['Int']>;
  indexesRemoved?: InputMaybe<Scalars['Int']>;
  labelsAdded?: InputMaybe<Scalars['Int']>;
  labelsRemoved?: InputMaybe<Scalars['Int']>;
  nodesCreated?: InputMaybe<Scalars['Int']>;
  nodesDeleted?: InputMaybe<Scalars['Int']>;
  propertiesSet?: InputMaybe<Scalars['Int']>;
  relationshipsCreated?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted?: InputMaybe<Scalars['Int']>;
};

export type Neo4jUpdateStatsEdge = {
  __typename?: 'Neo4jUpdateStatsEdge';
  cursor: Scalars['String'];
  node: Neo4jUpdateStats;
};

export type Neo4jUpdateStatsOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more Neo4jUpdateStatsSort objects to sort Neo4JUpdateStats by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<Neo4jUpdateStatsSort>>;
};

/** Fields to sort Neo4JUpdateStats by. The order in which sorts are applied is not guaranteed when specifying many fields in one Neo4jUpdateStatsSort object. */
export type Neo4jUpdateStatsSort = {
  constraintsAdded?: InputMaybe<SortDirection>;
  constraintsRemoved?: InputMaybe<SortDirection>;
  indexesAdded?: InputMaybe<SortDirection>;
  indexesRemoved?: InputMaybe<SortDirection>;
  labelsAdded?: InputMaybe<SortDirection>;
  labelsRemoved?: InputMaybe<SortDirection>;
  nodesCreated?: InputMaybe<SortDirection>;
  nodesDeleted?: InputMaybe<SortDirection>;
  propertiesSet?: InputMaybe<SortDirection>;
  relationshipsCreated?: InputMaybe<SortDirection>;
  relationshipsDeleted?: InputMaybe<SortDirection>;
};

export type Neo4jUpdateStatsUpdateInput = {
  constraintsAdded?: InputMaybe<Scalars['Int']>;
  constraintsAdded_DECREMENT?: InputMaybe<Scalars['Int']>;
  constraintsAdded_INCREMENT?: InputMaybe<Scalars['Int']>;
  constraintsRemoved?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_DECREMENT?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_INCREMENT?: InputMaybe<Scalars['Int']>;
  indexesAdded?: InputMaybe<Scalars['Int']>;
  indexesAdded_DECREMENT?: InputMaybe<Scalars['Int']>;
  indexesAdded_INCREMENT?: InputMaybe<Scalars['Int']>;
  indexesRemoved?: InputMaybe<Scalars['Int']>;
  indexesRemoved_DECREMENT?: InputMaybe<Scalars['Int']>;
  indexesRemoved_INCREMENT?: InputMaybe<Scalars['Int']>;
  labelsAdded?: InputMaybe<Scalars['Int']>;
  labelsAdded_DECREMENT?: InputMaybe<Scalars['Int']>;
  labelsAdded_INCREMENT?: InputMaybe<Scalars['Int']>;
  labelsRemoved?: InputMaybe<Scalars['Int']>;
  labelsRemoved_DECREMENT?: InputMaybe<Scalars['Int']>;
  labelsRemoved_INCREMENT?: InputMaybe<Scalars['Int']>;
  nodesCreated?: InputMaybe<Scalars['Int']>;
  nodesCreated_DECREMENT?: InputMaybe<Scalars['Int']>;
  nodesCreated_INCREMENT?: InputMaybe<Scalars['Int']>;
  nodesDeleted?: InputMaybe<Scalars['Int']>;
  nodesDeleted_DECREMENT?: InputMaybe<Scalars['Int']>;
  nodesDeleted_INCREMENT?: InputMaybe<Scalars['Int']>;
  propertiesSet?: InputMaybe<Scalars['Int']>;
  propertiesSet_DECREMENT?: InputMaybe<Scalars['Int']>;
  propertiesSet_INCREMENT?: InputMaybe<Scalars['Int']>;
  relationshipsCreated?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_DECREMENT?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_INCREMENT?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_DECREMENT?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_INCREMENT?: InputMaybe<Scalars['Int']>;
};

export type Neo4jUpdateStatsWhere = {
  AND?: InputMaybe<Array<Neo4jUpdateStatsWhere>>;
  OR?: InputMaybe<Array<Neo4jUpdateStatsWhere>>;
  constraintsAdded?: InputMaybe<Scalars['Int']>;
  constraintsAdded_GT?: InputMaybe<Scalars['Int']>;
  constraintsAdded_GTE?: InputMaybe<Scalars['Int']>;
  constraintsAdded_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  constraintsAdded_LT?: InputMaybe<Scalars['Int']>;
  constraintsAdded_LTE?: InputMaybe<Scalars['Int']>;
  constraintsAdded_NOT?: InputMaybe<Scalars['Int']>;
  constraintsAdded_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  constraintsRemoved?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_GT?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_GTE?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  constraintsRemoved_LT?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_LTE?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_NOT?: InputMaybe<Scalars['Int']>;
  constraintsRemoved_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  indexesAdded?: InputMaybe<Scalars['Int']>;
  indexesAdded_GT?: InputMaybe<Scalars['Int']>;
  indexesAdded_GTE?: InputMaybe<Scalars['Int']>;
  indexesAdded_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  indexesAdded_LT?: InputMaybe<Scalars['Int']>;
  indexesAdded_LTE?: InputMaybe<Scalars['Int']>;
  indexesAdded_NOT?: InputMaybe<Scalars['Int']>;
  indexesAdded_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  indexesRemoved?: InputMaybe<Scalars['Int']>;
  indexesRemoved_GT?: InputMaybe<Scalars['Int']>;
  indexesRemoved_GTE?: InputMaybe<Scalars['Int']>;
  indexesRemoved_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  indexesRemoved_LT?: InputMaybe<Scalars['Int']>;
  indexesRemoved_LTE?: InputMaybe<Scalars['Int']>;
  indexesRemoved_NOT?: InputMaybe<Scalars['Int']>;
  indexesRemoved_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  labelsAdded?: InputMaybe<Scalars['Int']>;
  labelsAdded_GT?: InputMaybe<Scalars['Int']>;
  labelsAdded_GTE?: InputMaybe<Scalars['Int']>;
  labelsAdded_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  labelsAdded_LT?: InputMaybe<Scalars['Int']>;
  labelsAdded_LTE?: InputMaybe<Scalars['Int']>;
  labelsAdded_NOT?: InputMaybe<Scalars['Int']>;
  labelsAdded_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  labelsRemoved?: InputMaybe<Scalars['Int']>;
  labelsRemoved_GT?: InputMaybe<Scalars['Int']>;
  labelsRemoved_GTE?: InputMaybe<Scalars['Int']>;
  labelsRemoved_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  labelsRemoved_LT?: InputMaybe<Scalars['Int']>;
  labelsRemoved_LTE?: InputMaybe<Scalars['Int']>;
  labelsRemoved_NOT?: InputMaybe<Scalars['Int']>;
  labelsRemoved_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nodesCreated?: InputMaybe<Scalars['Int']>;
  nodesCreated_GT?: InputMaybe<Scalars['Int']>;
  nodesCreated_GTE?: InputMaybe<Scalars['Int']>;
  nodesCreated_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nodesCreated_LT?: InputMaybe<Scalars['Int']>;
  nodesCreated_LTE?: InputMaybe<Scalars['Int']>;
  nodesCreated_NOT?: InputMaybe<Scalars['Int']>;
  nodesCreated_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nodesDeleted?: InputMaybe<Scalars['Int']>;
  nodesDeleted_GT?: InputMaybe<Scalars['Int']>;
  nodesDeleted_GTE?: InputMaybe<Scalars['Int']>;
  nodesDeleted_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nodesDeleted_LT?: InputMaybe<Scalars['Int']>;
  nodesDeleted_LTE?: InputMaybe<Scalars['Int']>;
  nodesDeleted_NOT?: InputMaybe<Scalars['Int']>;
  nodesDeleted_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  propertiesSet?: InputMaybe<Scalars['Int']>;
  propertiesSet_GT?: InputMaybe<Scalars['Int']>;
  propertiesSet_GTE?: InputMaybe<Scalars['Int']>;
  propertiesSet_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  propertiesSet_LT?: InputMaybe<Scalars['Int']>;
  propertiesSet_LTE?: InputMaybe<Scalars['Int']>;
  propertiesSet_NOT?: InputMaybe<Scalars['Int']>;
  propertiesSet_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  relationshipsCreated?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_GT?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_GTE?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  relationshipsCreated_LT?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_LTE?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_NOT?: InputMaybe<Scalars['Int']>;
  relationshipsCreated_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  relationshipsDeleted?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_GT?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_GTE?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  relationshipsDeleted_LT?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_LTE?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_NOT?: InputMaybe<Scalars['Int']>;
  relationshipsDeleted_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum NestedOperations {
  Subtract = 'subtract',
  Union = 'union'
}

export enum NestedSwitch {
  NestedCuratedDatasetProperty = 'nestedCuratedDatasetProperty',
  NestedRawDatasetProperty = 'nestedRawDatasetProperty',
  NestedStudyProperty = 'nestedStudyProperty'
}

export enum NestedSwitchDelete {
  NestedCuratedDatasetDelete = 'nestedCuratedDatasetDelete',
  NestedRawDatasetDelete = 'nestedRawDatasetDelete',
  NestedStudyDelete = 'nestedStudyDelete'
}

export type OntologiesConnection = {
  __typename?: 'OntologiesConnection';
  edges: Array<OntologyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Ontology = {
  __typename?: 'Ontology';
  classes: Array<OntologyClass>;
  classesAggregate?: Maybe<OntologyOntologyClassClassesAggregationSelection>;
  classesConnection: OntologyClassesConnection;
  externalID: Scalars['ID'];
  name: Scalars['String'];
  ontologyID: Scalars['ID'];
  relations: Array<OntologyRelation>;
  relationsAggregate?: Maybe<OntologyOntologyRelationRelationsAggregationSelection>;
  relationsConnection: OntologyRelationsConnection;
};


export type OntologyClassesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OntologyClassOptions>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type OntologyClassesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type OntologyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OntologyClassesConnectionSort>>;
  where?: InputMaybe<OntologyClassesConnectionWhere>;
};


export type OntologyRelationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OntologyRelationOptions>;
  where?: InputMaybe<OntologyRelationWhere>;
};


export type OntologyRelationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OntologyRelationWhere>;
};


export type OntologyRelationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OntologyRelationsConnectionSort>>;
  where?: InputMaybe<OntologyRelationsConnectionWhere>;
};

export type OntologyAggregateSelection = {
  __typename?: 'OntologyAggregateSelection';
  count: Scalars['Int'];
  externalID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  ontologyID: IdAggregateSelectionNonNullable;
};

export type OntologyClass = {
  __typename?: 'OntologyClass';
  externalID: Scalars['ID'];
  label: Scalars['String'];
  ontologyClassID: Scalars['ID'];
};

export type OntologyClassAggregateSelection = {
  __typename?: 'OntologyClassAggregateSelection';
  count: Scalars['Int'];
  externalID: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNonNullable;
  ontologyClassID: IdAggregateSelectionNonNullable;
};

export type OntologyClassConnectOrCreateWhere = {
  node: OntologyClassUniqueWhere;
};

export type OntologyClassConnectWhere = {
  node: OntologyClassWhere;
};

export type OntologyClassCreateInput = {
  externalID: Scalars['ID'];
  label: Scalars['String'];
};

export type OntologyClassEdge = {
  __typename?: 'OntologyClassEdge';
  cursor: Scalars['String'];
  node: OntologyClass;
};

export type OntologyClassOnCreateInput = {
  externalID: Scalars['ID'];
  label: Scalars['String'];
};

export type OntologyClassOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more OntologyClassSort objects to sort OntologyClasses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OntologyClassSort>>;
};

/** Fields to sort OntologyClasses by. The order in which sorts are applied is not guaranteed when specifying many fields in one OntologyClassSort object. */
export type OntologyClassSort = {
  externalID?: InputMaybe<SortDirection>;
  label?: InputMaybe<SortDirection>;
  ontologyClassID?: InputMaybe<SortDirection>;
};

export type OntologyClassUniqueWhere = {
  ontologyClassID?: InputMaybe<Scalars['ID']>;
};

export type OntologyClassUpdateInput = {
  externalID?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
};

export type OntologyClassWhere = {
  AND?: InputMaybe<Array<OntologyClassWhere>>;
  OR?: InputMaybe<Array<OntologyClassWhere>>;
  externalID?: InputMaybe<Scalars['ID']>;
  externalID_CONTAINS?: InputMaybe<Scalars['ID']>;
  externalID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  externalID_IN?: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT?: InputMaybe<Scalars['ID']>;
  externalID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  externalID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  externalID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  externalID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  label_CONTAINS?: InputMaybe<Scalars['String']>;
  label_ENDS_WITH?: InputMaybe<Scalars['String']>;
  label_IN?: InputMaybe<Array<Scalars['String']>>;
  label_NOT?: InputMaybe<Scalars['String']>;
  label_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  label_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  label_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  label_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  label_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ontologyClassID?: InputMaybe<Scalars['ID']>;
  ontologyClassID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ontologyClassID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyClassID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ontologyClassID_NOT?: InputMaybe<Scalars['ID']>;
  ontologyClassID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ontologyClassID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyClassID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ontologyClassID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyClassID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type OntologyClassesAggregateInput = {
  AND?: InputMaybe<Array<OntologyClassesAggregateInput>>;
  OR?: InputMaybe<Array<OntologyClassesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OntologyClassesNodeAggregationWhereInput>;
};

export type OntologyClassesConnectFieldInput = {
  where?: InputMaybe<OntologyClassConnectWhere>;
};

export type OntologyClassesConnectOrCreateFieldInput = {
  onCreate: OntologyClassesConnectOrCreateFieldInputOnCreate;
  where: OntologyClassConnectOrCreateWhere;
};

export type OntologyClassesConnectOrCreateFieldInputOnCreate = {
  node: OntologyClassOnCreateInput;
};

export type OntologyClassesConnection = {
  __typename?: 'OntologyClassesConnection';
  edges: Array<OntologyClassEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OntologyClassesConnectionSort = {
  node?: InputMaybe<OntologyClassSort>;
};

export type OntologyClassesConnectionWhere = {
  AND?: InputMaybe<Array<OntologyClassesConnectionWhere>>;
  OR?: InputMaybe<Array<OntologyClassesConnectionWhere>>;
  node?: InputMaybe<OntologyClassWhere>;
  node_NOT?: InputMaybe<OntologyClassWhere>;
};

export type OntologyClassesCreateFieldInput = {
  node: OntologyClassCreateInput;
};

export type OntologyClassesDeleteFieldInput = {
  where?: InputMaybe<OntologyClassesConnectionWhere>;
};

export type OntologyClassesDisconnectFieldInput = {
  where?: InputMaybe<OntologyClassesConnectionWhere>;
};

export type OntologyClassesFieldInput = {
  connect?: InputMaybe<Array<OntologyClassesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OntologyClassesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OntologyClassesCreateFieldInput>>;
};

export type OntologyClassesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OntologyClassesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OntologyClassesNodeAggregationWhereInput>>;
  externalID_EQUAL?: InputMaybe<Scalars['ID']>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  label_EQUAL?: InputMaybe<Scalars['String']>;
  label_GT?: InputMaybe<Scalars['Int']>;
  label_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  label_LT?: InputMaybe<Scalars['Int']>;
  label_LTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ontologyClassID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OntologyClassesUpdateConnectionInput = {
  node?: InputMaybe<OntologyClassUpdateInput>;
};

export type OntologyClassesUpdateFieldInput = {
  connect?: InputMaybe<Array<OntologyClassesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OntologyClassesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OntologyClassesCreateFieldInput>>;
  delete?: InputMaybe<Array<OntologyClassesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OntologyClassesDisconnectFieldInput>>;
  update?: InputMaybe<OntologyClassesUpdateConnectionInput>;
  where?: InputMaybe<OntologyClassesConnectionWhere>;
};

export type OntologyConnectInput = {
  classes?: InputMaybe<Array<OntologyClassesConnectFieldInput>>;
  relations?: InputMaybe<Array<OntologyRelationsConnectFieldInput>>;
};

export type OntologyConnectOrCreateInput = {
  classes?: InputMaybe<Array<OntologyClassesConnectOrCreateFieldInput>>;
  relations?: InputMaybe<Array<OntologyRelationsConnectOrCreateFieldInput>>;
};

export type OntologyCreateInput = {
  classes?: InputMaybe<OntologyClassesFieldInput>;
  externalID: Scalars['ID'];
  name: Scalars['String'];
  relations?: InputMaybe<OntologyRelationsFieldInput>;
};

export type OntologyDeleteInput = {
  classes?: InputMaybe<Array<OntologyClassesDeleteFieldInput>>;
  relations?: InputMaybe<Array<OntologyRelationsDeleteFieldInput>>;
};

export type OntologyDisconnectInput = {
  classes?: InputMaybe<Array<OntologyClassesDisconnectFieldInput>>;
  relations?: InputMaybe<Array<OntologyRelationsDisconnectFieldInput>>;
};

export type OntologyEdge = {
  __typename?: 'OntologyEdge';
  cursor: Scalars['String'];
  node: Ontology;
};

export type OntologyOntologyClassClassesAggregationSelection = {
  __typename?: 'OntologyOntologyClassClassesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OntologyOntologyClassClassesNodeAggregateSelection>;
};

export type OntologyOntologyClassClassesNodeAggregateSelection = {
  __typename?: 'OntologyOntologyClassClassesNodeAggregateSelection';
  externalID: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNonNullable;
  ontologyClassID: IdAggregateSelectionNonNullable;
};

export type OntologyOntologyRelationRelationsAggregationSelection = {
  __typename?: 'OntologyOntologyRelationRelationsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OntologyOntologyRelationRelationsNodeAggregateSelection>;
};

export type OntologyOntologyRelationRelationsNodeAggregateSelection = {
  __typename?: 'OntologyOntologyRelationRelationsNodeAggregateSelection';
  label: StringAggregateSelectionNonNullable;
  ontologyRelationID: IdAggregateSelectionNonNullable;
};

export type OntologyOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more OntologySort objects to sort Ontologies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OntologySort>>;
};

export type OntologyRelation = {
  __typename?: 'OntologyRelation';
  from: OntologyClass;
  fromAggregate?: Maybe<OntologyRelationOntologyClassFromAggregationSelection>;
  fromConnection: OntologyRelationFromConnection;
  label: Scalars['String'];
  ontologyRelationID: Scalars['ID'];
  to: OntologyClass;
  toAggregate?: Maybe<OntologyRelationOntologyClassToAggregationSelection>;
  toConnection: OntologyRelationToConnection;
};


export type OntologyRelationFromArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OntologyClassOptions>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationFromAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationFromConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OntologyRelationFromConnectionSort>>;
  where?: InputMaybe<OntologyRelationFromConnectionWhere>;
};


export type OntologyRelationToArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<OntologyClassOptions>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationToAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationToConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<OntologyRelationToConnectionSort>>;
  where?: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationAggregateSelection = {
  __typename?: 'OntologyRelationAggregateSelection';
  count: Scalars['Int'];
  label: StringAggregateSelectionNonNullable;
  ontologyRelationID: IdAggregateSelectionNonNullable;
};

export type OntologyRelationConnectInput = {
  from?: InputMaybe<OntologyRelationFromConnectFieldInput>;
  to?: InputMaybe<OntologyRelationToConnectFieldInput>;
};

export type OntologyRelationConnectOrCreateInput = {
  from?: InputMaybe<OntologyRelationFromConnectOrCreateFieldInput>;
  to?: InputMaybe<OntologyRelationToConnectOrCreateFieldInput>;
};

export type OntologyRelationConnectOrCreateWhere = {
  node: OntologyRelationUniqueWhere;
};

export type OntologyRelationConnectWhere = {
  node: OntologyRelationWhere;
};

export type OntologyRelationCreateInput = {
  from?: InputMaybe<OntologyRelationFromFieldInput>;
  label: Scalars['String'];
  to?: InputMaybe<OntologyRelationToFieldInput>;
};

export type OntologyRelationDeleteInput = {
  from?: InputMaybe<OntologyRelationFromDeleteFieldInput>;
  to?: InputMaybe<OntologyRelationToDeleteFieldInput>;
};

export type OntologyRelationDisconnectInput = {
  from?: InputMaybe<OntologyRelationFromDisconnectFieldInput>;
  to?: InputMaybe<OntologyRelationToDisconnectFieldInput>;
};

export type OntologyRelationEdge = {
  __typename?: 'OntologyRelationEdge';
  cursor: Scalars['String'];
  node: OntologyRelation;
};

export type OntologyRelationFromAggregateInput = {
  AND?: InputMaybe<Array<OntologyRelationFromAggregateInput>>;
  OR?: InputMaybe<Array<OntologyRelationFromAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OntologyRelationFromNodeAggregationWhereInput>;
};

export type OntologyRelationFromConnectFieldInput = {
  where?: InputMaybe<OntologyClassConnectWhere>;
};

export type OntologyRelationFromConnectOrCreateFieldInput = {
  onCreate: OntologyRelationFromConnectOrCreateFieldInputOnCreate;
  where: OntologyClassConnectOrCreateWhere;
};

export type OntologyRelationFromConnectOrCreateFieldInputOnCreate = {
  node: OntologyClassOnCreateInput;
};

export type OntologyRelationFromConnection = {
  __typename?: 'OntologyRelationFromConnection';
  edges: Array<OntologyRelationFromRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OntologyRelationFromConnectionSort = {
  node?: InputMaybe<OntologyClassSort>;
};

export type OntologyRelationFromConnectionWhere = {
  AND?: InputMaybe<Array<OntologyRelationFromConnectionWhere>>;
  OR?: InputMaybe<Array<OntologyRelationFromConnectionWhere>>;
  node?: InputMaybe<OntologyClassWhere>;
  node_NOT?: InputMaybe<OntologyClassWhere>;
};

export type OntologyRelationFromCreateFieldInput = {
  node: OntologyClassCreateInput;
};

export type OntologyRelationFromDeleteFieldInput = {
  where?: InputMaybe<OntologyRelationFromConnectionWhere>;
};

export type OntologyRelationFromDisconnectFieldInput = {
  where?: InputMaybe<OntologyRelationFromConnectionWhere>;
};

export type OntologyRelationFromFieldInput = {
  connect?: InputMaybe<OntologyRelationFromConnectFieldInput>;
  connectOrCreate?: InputMaybe<OntologyRelationFromConnectOrCreateFieldInput>;
  create?: InputMaybe<OntologyRelationFromCreateFieldInput>;
};

export type OntologyRelationFromNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OntologyRelationFromNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OntologyRelationFromNodeAggregationWhereInput>>;
  externalID_EQUAL?: InputMaybe<Scalars['ID']>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  label_EQUAL?: InputMaybe<Scalars['String']>;
  label_GT?: InputMaybe<Scalars['Int']>;
  label_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  label_LT?: InputMaybe<Scalars['Int']>;
  label_LTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ontologyClassID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationFromRelationship = {
  __typename?: 'OntologyRelationFromRelationship';
  cursor: Scalars['String'];
  node: OntologyClass;
};

export type OntologyRelationFromUpdateConnectionInput = {
  node?: InputMaybe<OntologyClassUpdateInput>;
};

export type OntologyRelationFromUpdateFieldInput = {
  connect?: InputMaybe<OntologyRelationFromConnectFieldInput>;
  connectOrCreate?: InputMaybe<OntologyRelationFromConnectOrCreateFieldInput>;
  create?: InputMaybe<OntologyRelationFromCreateFieldInput>;
  delete?: InputMaybe<OntologyRelationFromDeleteFieldInput>;
  disconnect?: InputMaybe<OntologyRelationFromDisconnectFieldInput>;
  update?: InputMaybe<OntologyRelationFromUpdateConnectionInput>;
  where?: InputMaybe<OntologyRelationFromConnectionWhere>;
};

export type OntologyRelationInput = {
  classes?: InputMaybe<Array<OntologyClassesCreateFieldInput>>;
  relations?: InputMaybe<Array<OntologyRelationsCreateFieldInput>>;
};

export type OntologyRelationOnCreateInput = {
  label: Scalars['String'];
};

export type OntologyRelationOntologyClassFromAggregationSelection = {
  __typename?: 'OntologyRelationOntologyClassFromAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OntologyRelationOntologyClassFromNodeAggregateSelection>;
};

export type OntologyRelationOntologyClassFromNodeAggregateSelection = {
  __typename?: 'OntologyRelationOntologyClassFromNodeAggregateSelection';
  externalID: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNonNullable;
  ontologyClassID: IdAggregateSelectionNonNullable;
};

export type OntologyRelationOntologyClassToAggregationSelection = {
  __typename?: 'OntologyRelationOntologyClassToAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<OntologyRelationOntologyClassToNodeAggregateSelection>;
};

export type OntologyRelationOntologyClassToNodeAggregateSelection = {
  __typename?: 'OntologyRelationOntologyClassToNodeAggregateSelection';
  externalID: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNonNullable;
  ontologyClassID: IdAggregateSelectionNonNullable;
};

export type OntologyRelationOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more OntologyRelationSort objects to sort OntologyRelations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OntologyRelationSort>>;
};

export type OntologyRelationRelationInput = {
  from?: InputMaybe<OntologyRelationFromCreateFieldInput>;
  to?: InputMaybe<OntologyRelationToCreateFieldInput>;
};

/** Fields to sort OntologyRelations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OntologyRelationSort object. */
export type OntologyRelationSort = {
  label?: InputMaybe<SortDirection>;
  ontologyRelationID?: InputMaybe<SortDirection>;
};

export type OntologyRelationToAggregateInput = {
  AND?: InputMaybe<Array<OntologyRelationToAggregateInput>>;
  OR?: InputMaybe<Array<OntologyRelationToAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OntologyRelationToNodeAggregationWhereInput>;
};

export type OntologyRelationToConnectFieldInput = {
  where?: InputMaybe<OntologyClassConnectWhere>;
};

export type OntologyRelationToConnectOrCreateFieldInput = {
  onCreate: OntologyRelationToConnectOrCreateFieldInputOnCreate;
  where: OntologyClassConnectOrCreateWhere;
};

export type OntologyRelationToConnectOrCreateFieldInputOnCreate = {
  node: OntologyClassOnCreateInput;
};

export type OntologyRelationToConnection = {
  __typename?: 'OntologyRelationToConnection';
  edges: Array<OntologyRelationToRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OntologyRelationToConnectionSort = {
  node?: InputMaybe<OntologyClassSort>;
};

export type OntologyRelationToConnectionWhere = {
  AND?: InputMaybe<Array<OntologyRelationToConnectionWhere>>;
  OR?: InputMaybe<Array<OntologyRelationToConnectionWhere>>;
  node?: InputMaybe<OntologyClassWhere>;
  node_NOT?: InputMaybe<OntologyClassWhere>;
};

export type OntologyRelationToCreateFieldInput = {
  node: OntologyClassCreateInput;
};

export type OntologyRelationToDeleteFieldInput = {
  where?: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationToDisconnectFieldInput = {
  where?: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationToFieldInput = {
  connect?: InputMaybe<OntologyRelationToConnectFieldInput>;
  connectOrCreate?: InputMaybe<OntologyRelationToConnectOrCreateFieldInput>;
  create?: InputMaybe<OntologyRelationToCreateFieldInput>;
};

export type OntologyRelationToNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OntologyRelationToNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OntologyRelationToNodeAggregationWhereInput>>;
  externalID_EQUAL?: InputMaybe<Scalars['ID']>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  label_EQUAL?: InputMaybe<Scalars['String']>;
  label_GT?: InputMaybe<Scalars['Int']>;
  label_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  label_LT?: InputMaybe<Scalars['Int']>;
  label_LTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ontologyClassID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationToRelationship = {
  __typename?: 'OntologyRelationToRelationship';
  cursor: Scalars['String'];
  node: OntologyClass;
};

export type OntologyRelationToUpdateConnectionInput = {
  node?: InputMaybe<OntologyClassUpdateInput>;
};

export type OntologyRelationToUpdateFieldInput = {
  connect?: InputMaybe<OntologyRelationToConnectFieldInput>;
  connectOrCreate?: InputMaybe<OntologyRelationToConnectOrCreateFieldInput>;
  create?: InputMaybe<OntologyRelationToCreateFieldInput>;
  delete?: InputMaybe<OntologyRelationToDeleteFieldInput>;
  disconnect?: InputMaybe<OntologyRelationToDisconnectFieldInput>;
  update?: InputMaybe<OntologyRelationToUpdateConnectionInput>;
  where?: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationUniqueWhere = {
  ontologyRelationID?: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationUpdateInput = {
  from?: InputMaybe<OntologyRelationFromUpdateFieldInput>;
  label?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<OntologyRelationToUpdateFieldInput>;
};

export type OntologyRelationWhere = {
  AND?: InputMaybe<Array<OntologyRelationWhere>>;
  OR?: InputMaybe<Array<OntologyRelationWhere>>;
  from?: InputMaybe<OntologyClassWhere>;
  fromAggregate?: InputMaybe<OntologyRelationFromAggregateInput>;
  fromConnection?: InputMaybe<OntologyRelationFromConnectionWhere>;
  fromConnection_NOT?: InputMaybe<OntologyRelationFromConnectionWhere>;
  from_NOT?: InputMaybe<OntologyClassWhere>;
  label?: InputMaybe<Scalars['String']>;
  label_CONTAINS?: InputMaybe<Scalars['String']>;
  label_ENDS_WITH?: InputMaybe<Scalars['String']>;
  label_IN?: InputMaybe<Array<Scalars['String']>>;
  label_NOT?: InputMaybe<Scalars['String']>;
  label_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  label_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  label_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  label_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  label_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ontologyRelationID?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ontologyRelationID_NOT?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ontologyRelationID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyRelationID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  to?: InputMaybe<OntologyClassWhere>;
  toAggregate?: InputMaybe<OntologyRelationToAggregateInput>;
  toConnection?: InputMaybe<OntologyRelationToConnectionWhere>;
  toConnection_NOT?: InputMaybe<OntologyRelationToConnectionWhere>;
  to_NOT?: InputMaybe<OntologyClassWhere>;
};

export type OntologyRelationsAggregateInput = {
  AND?: InputMaybe<Array<OntologyRelationsAggregateInput>>;
  OR?: InputMaybe<Array<OntologyRelationsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<OntologyRelationsNodeAggregationWhereInput>;
};

export type OntologyRelationsConnectFieldInput = {
  connect?: InputMaybe<Array<OntologyRelationConnectInput>>;
  where?: InputMaybe<OntologyRelationConnectWhere>;
};

export type OntologyRelationsConnectOrCreateFieldInput = {
  onCreate: OntologyRelationsConnectOrCreateFieldInputOnCreate;
  where: OntologyRelationConnectOrCreateWhere;
};

export type OntologyRelationsConnectOrCreateFieldInputOnCreate = {
  node: OntologyRelationOnCreateInput;
};

export type OntologyRelationsConnection = {
  __typename?: 'OntologyRelationsConnection';
  edges: Array<OntologyRelationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OntologyRelationsConnectionSort = {
  node?: InputMaybe<OntologyRelationSort>;
};

export type OntologyRelationsConnectionWhere = {
  AND?: InputMaybe<Array<OntologyRelationsConnectionWhere>>;
  OR?: InputMaybe<Array<OntologyRelationsConnectionWhere>>;
  node?: InputMaybe<OntologyRelationWhere>;
  node_NOT?: InputMaybe<OntologyRelationWhere>;
};

export type OntologyRelationsCreateFieldInput = {
  node: OntologyRelationCreateInput;
};

export type OntologyRelationsDeleteFieldInput = {
  delete?: InputMaybe<OntologyRelationDeleteInput>;
  where?: InputMaybe<OntologyRelationsConnectionWhere>;
};

export type OntologyRelationsDisconnectFieldInput = {
  disconnect?: InputMaybe<OntologyRelationDisconnectInput>;
  where?: InputMaybe<OntologyRelationsConnectionWhere>;
};

export type OntologyRelationsFieldInput = {
  connect?: InputMaybe<Array<OntologyRelationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OntologyRelationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OntologyRelationsCreateFieldInput>>;
};

export type OntologyRelationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OntologyRelationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<OntologyRelationsNodeAggregationWhereInput>>;
  label_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  label_EQUAL?: InputMaybe<Scalars['String']>;
  label_GT?: InputMaybe<Scalars['Int']>;
  label_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  label_LT?: InputMaybe<Scalars['Int']>;
  label_LTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  ontologyRelationID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationsUpdateConnectionInput = {
  node?: InputMaybe<OntologyRelationUpdateInput>;
};

export type OntologyRelationsUpdateFieldInput = {
  connect?: InputMaybe<Array<OntologyRelationsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OntologyRelationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OntologyRelationsCreateFieldInput>>;
  delete?: InputMaybe<Array<OntologyRelationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OntologyRelationsDisconnectFieldInput>>;
  update?: InputMaybe<OntologyRelationsUpdateConnectionInput>;
  where?: InputMaybe<OntologyRelationsConnectionWhere>;
};

/** Fields to sort Ontologies by. The order in which sorts are applied is not guaranteed when specifying many fields in one OntologySort object. */
export type OntologySort = {
  externalID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  ontologyID?: InputMaybe<SortDirection>;
};

export type OntologyUpdateInput = {
  classes?: InputMaybe<Array<OntologyClassesUpdateFieldInput>>;
  externalID?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  relations?: InputMaybe<Array<OntologyRelationsUpdateFieldInput>>;
};

export type OntologyWhere = {
  AND?: InputMaybe<Array<OntologyWhere>>;
  OR?: InputMaybe<Array<OntologyWhere>>;
  classes?: InputMaybe<OntologyClassWhere>;
  classesAggregate?: InputMaybe<OntologyClassesAggregateInput>;
  classesConnection?: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_ALL?: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_NONE?: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_NOT?: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_SINGLE?: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_SOME?: InputMaybe<OntologyClassesConnectionWhere>;
  /** Return Ontologies where all of the related OntologyClasses match this filter */
  classes_ALL?: InputMaybe<OntologyClassWhere>;
  /** Return Ontologies where none of the related OntologyClasses match this filter */
  classes_NONE?: InputMaybe<OntologyClassWhere>;
  classes_NOT?: InputMaybe<OntologyClassWhere>;
  /** Return Ontologies where one of the related OntologyClasses match this filter */
  classes_SINGLE?: InputMaybe<OntologyClassWhere>;
  /** Return Ontologies where some of the related OntologyClasses match this filter */
  classes_SOME?: InputMaybe<OntologyClassWhere>;
  externalID?: InputMaybe<Scalars['ID']>;
  externalID_CONTAINS?: InputMaybe<Scalars['ID']>;
  externalID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  externalID_IN?: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT?: InputMaybe<Scalars['ID']>;
  externalID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  externalID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  externalID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  externalID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  ontologyID?: InputMaybe<Scalars['ID']>;
  ontologyID_CONTAINS?: InputMaybe<Scalars['ID']>;
  ontologyID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyID_IN?: InputMaybe<Array<Scalars['ID']>>;
  ontologyID_NOT?: InputMaybe<Scalars['ID']>;
  ontologyID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  ontologyID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  ontologyID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  ontologyID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  relations?: InputMaybe<OntologyRelationWhere>;
  relationsAggregate?: InputMaybe<OntologyRelationsAggregateInput>;
  relationsConnection?: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_ALL?: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_NONE?: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_NOT?: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_SINGLE?: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_SOME?: InputMaybe<OntologyRelationsConnectionWhere>;
  /** Return Ontologies where all of the related OntologyRelations match this filter */
  relations_ALL?: InputMaybe<OntologyRelationWhere>;
  /** Return Ontologies where none of the related OntologyRelations match this filter */
  relations_NONE?: InputMaybe<OntologyRelationWhere>;
  relations_NOT?: InputMaybe<OntologyRelationWhere>;
  /** Return Ontologies where one of the related OntologyRelations match this filter */
  relations_SINGLE?: InputMaybe<OntologyRelationWhere>;
  /** Return Ontologies where some of the related OntologyRelations match this filter */
  relations_SOME?: InputMaybe<OntologyRelationWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  clientRoles: Array<ClientRole>;
  clientRolesAggregate: ClientRoleAggregateSelection;
  clientRolesConnection: ClientRolesConnection;
  clientUsers: Array<ClientUser>;
  clientUsersAggregate: ClientUserAggregateSelection;
  clientUsersConnection: ClientUsersConnection;
  clients: Array<Client>;
  clientsAggregate: ClientAggregateSelection;
  clientsConnection: ClientsConnection;
  curatedDatasets: Array<CuratedDataset>;
  curatedDatasetsAggregate: CuratedDatasetAggregateSelection;
  curatedDatasetsConnection: CuratedDatasetsConnection;
  dataVariableFieldDefinitions: Array<DataVariableFieldDefinition>;
  dataVariableFieldDefinitionsAggregate: DataVariableFieldDefinitionAggregateSelection;
  dataVariableFieldDefinitionsConnection: DataVariableFieldDefinitionsConnection;
  dataVariableFields: Array<DataVariableField>;
  dataVariableFieldsAggregate: DataVariableFieldAggregateSelection;
  dataVariableFieldsConnection: DataVariableFieldsConnection;
  dataVariableValues: Array<DataVariableValue>;
  dataVariableValuesAggregate: DataVariableValueAggregateSelection;
  dataVariableValuesConnection: DataVariableValuesConnection;
  dataVariables: Array<DataVariable>;
  dataVariablesAggregate: DataVariableAggregateSelection;
  dataVariablesConnection: DataVariablesConnection;
  fileValidations: Array<FileValidation>;
  fileValidationsAggregate: FileValidationAggregateSelection;
  fileValidationsConnection: FileValidationsConnection;
  funnelTask?: Maybe<Task>;
  funnelTasks?: Maybe<Array<Maybe<Task>>>;
  geographyCities: Array<GeographyCity>;
  geographyCitiesAggregate: GeographyCityAggregateSelection;
  geographyCitiesConnection: GeographyCitiesConnection;
  harmonizedDatasets: Array<HarmonizedDataset>;
  harmonizedDatasetsAggregate: HarmonizedDatasetAggregateSelection;
  harmonizedDatasetsConnection: HarmonizedDatasetsConnection;
  keycloakUsers: Array<KeycloakUser>;
  keycloakUsersAggregate: KeycloakUserAggregateSelection;
  keycloakUsersConnection: KeycloakUsersConnection;
  keycloak_clients_find?: Maybe<Array<Maybe<Client>>>;
  keycloak_clients_findRole?: Maybe<ClientRole>;
  keycloak_users_find?: Maybe<Array<Maybe<ClientUser>>>;
  keycloak_users_listAvailableClientRoleMappings?: Maybe<Array<Maybe<ClientRole>>>;
  keycloak_users_listClientRoleMappings?: Maybe<Array<Maybe<ClientRole>>>;
  minioBuckets: Array<MinioBucket>;
  minioBucketsAggregate: MinioBucketAggregateSelection;
  minioBucketsConnection: MinioBucketsConnection;
  minioUploads: Array<MinioUpload>;
  minioUploadsAggregate: MinioUploadAggregateSelection;
  minioUploadsConnection: MinioUploadsConnection;
  mismatches: Array<Mismatch>;
  mismatchesAggregate: MismatchAggregateSelection;
  mismatchesConnection: MismatchesConnection;
  neo4JUpdateStats: Array<Neo4jUpdateStats>;
  neo4JUpdateStatsAggregate: Neo4jUpdateStatsAggregateSelection;
  neo4JUpdateStatsConnection: Neo4JUpdateStatsConnection;
  ontologies: Array<Ontology>;
  ontologiesAggregate: OntologyAggregateSelection;
  ontologiesConnection: OntologiesConnection;
  ontologyClasses: Array<OntologyClass>;
  ontologyClassesAggregate: OntologyClassAggregateSelection;
  ontologyClassesConnection: OntologyClassesConnection;
  ontologyRelations: Array<OntologyRelation>;
  ontologyRelationsAggregate: OntologyRelationAggregateSelection;
  ontologyRelationsConnection: OntologyRelationsConnection;
  rawDatasetCalendarHeatmap: Array<CalendarHeatmapDatum>;
  rawDatasets: Array<RawDataset>;
  rawDatasetsAggregate: RawDatasetAggregateSelection;
  rawDatasetsConnection: RawDatasetsConnection;
  searchGeographyCities: Array<GeographyCity>;
  studies: Array<Study>;
  studiesAggregate: StudyAggregateSelection;
  studiesConnection: StudiesConnection;
  tasks: Array<Task>;
  tasksAggregate: TaskAggregateSelection;
  tasksConnection: TasksConnection;
};


export type QueryClientRolesArgs = {
  options?: InputMaybe<ClientRoleOptions>;
  where?: InputMaybe<ClientRoleWhere>;
};


export type QueryClientRolesAggregateArgs = {
  where?: InputMaybe<ClientRoleWhere>;
};


export type QueryClientRolesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ClientRoleSort>>>;
  where?: InputMaybe<ClientRoleWhere>;
};


export type QueryClientUsersArgs = {
  options?: InputMaybe<ClientUserOptions>;
  where?: InputMaybe<ClientUserWhere>;
};


export type QueryClientUsersAggregateArgs = {
  where?: InputMaybe<ClientUserWhere>;
};


export type QueryClientUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ClientUserSort>>>;
  where?: InputMaybe<ClientUserWhere>;
};


export type QueryClientsArgs = {
  options?: InputMaybe<ClientOptions>;
  where?: InputMaybe<ClientWhere>;
};


export type QueryClientsAggregateArgs = {
  where?: InputMaybe<ClientWhere>;
};


export type QueryClientsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<ClientSort>>>;
  where?: InputMaybe<ClientWhere>;
};


export type QueryCuratedDatasetsArgs = {
  options?: InputMaybe<CuratedDatasetOptions>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type QueryCuratedDatasetsAggregateArgs = {
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type QueryCuratedDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<CuratedDatasetSort>>>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type QueryDataVariableFieldDefinitionsArgs = {
  options?: InputMaybe<DataVariableFieldDefinitionOptions>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type QueryDataVariableFieldDefinitionsAggregateArgs = {
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type QueryDataVariableFieldDefinitionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DataVariableFieldDefinitionSort>>>;
  where?: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type QueryDataVariableFieldsArgs = {
  options?: InputMaybe<DataVariableFieldOptions>;
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type QueryDataVariableFieldsAggregateArgs = {
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type QueryDataVariableFieldsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DataVariableFieldSort>>>;
  where?: InputMaybe<DataVariableFieldWhere>;
};


export type QueryDataVariableValuesArgs = {
  options?: InputMaybe<DataVariableValueOptions>;
  where?: InputMaybe<DataVariableValueWhere>;
};


export type QueryDataVariableValuesAggregateArgs = {
  where?: InputMaybe<DataVariableValueWhere>;
};


export type QueryDataVariableValuesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DataVariableValueSort>>>;
  where?: InputMaybe<DataVariableValueWhere>;
};


export type QueryDataVariablesArgs = {
  options?: InputMaybe<DataVariableOptions>;
  where?: InputMaybe<DataVariableWhere>;
};


export type QueryDataVariablesAggregateArgs = {
  where?: InputMaybe<DataVariableWhere>;
};


export type QueryDataVariablesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DataVariableSort>>>;
  where?: InputMaybe<DataVariableWhere>;
};


export type QueryFileValidationsArgs = {
  options?: InputMaybe<FileValidationOptions>;
  where?: InputMaybe<FileValidationWhere>;
};


export type QueryFileValidationsAggregateArgs = {
  where?: InputMaybe<FileValidationWhere>;
};


export type QueryFileValidationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<FileValidationSort>>>;
  where?: InputMaybe<FileValidationWhere>;
};


export type QueryFunnelTaskArgs = {
  taskId?: InputMaybe<Scalars['ID']>;
};


export type QueryGeographyCitiesArgs = {
  options?: InputMaybe<GeographyCityOptions>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type QueryGeographyCitiesAggregateArgs = {
  where?: InputMaybe<GeographyCityWhere>;
};


export type QueryGeographyCitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<GeographyCitySort>>>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type QueryHarmonizedDatasetsArgs = {
  options?: InputMaybe<HarmonizedDatasetOptions>;
  where?: InputMaybe<HarmonizedDatasetWhere>;
};


export type QueryHarmonizedDatasetsAggregateArgs = {
  where?: InputMaybe<HarmonizedDatasetWhere>;
};


export type QueryHarmonizedDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<HarmonizedDatasetSort>>>;
  where?: InputMaybe<HarmonizedDatasetWhere>;
};


export type QueryKeycloakUsersArgs = {
  options?: InputMaybe<KeycloakUserOptions>;
  where?: InputMaybe<KeycloakUserWhere>;
};


export type QueryKeycloakUsersAggregateArgs = {
  where?: InputMaybe<KeycloakUserWhere>;
};


export type QueryKeycloakUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<KeycloakUserSort>>>;
  where?: InputMaybe<KeycloakUserWhere>;
};


export type QueryKeycloak_Clients_FindRoleArgs = {
  clientID: Scalars['ID'];
  roleName: Scalars['String'];
};


export type QueryKeycloak_Users_ListAvailableClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  userID?: InputMaybe<Scalars['ID']>;
};


export type QueryKeycloak_Users_ListClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  userID?: InputMaybe<Scalars['ID']>;
};


export type QueryMinioBucketsArgs = {
  options?: InputMaybe<MinioBucketOptions>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type QueryMinioBucketsAggregateArgs = {
  where?: InputMaybe<MinioBucketWhere>;
};


export type QueryMinioBucketsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MinioBucketSort>>>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type QueryMinioUploadsArgs = {
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type QueryMinioUploadsAggregateArgs = {
  where?: InputMaybe<MinioUploadWhere>;
};


export type QueryMinioUploadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MinioUploadSort>>>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type QueryMismatchesArgs = {
  options?: InputMaybe<MismatchOptions>;
  where?: InputMaybe<MismatchWhere>;
};


export type QueryMismatchesAggregateArgs = {
  where?: InputMaybe<MismatchWhere>;
};


export type QueryMismatchesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<MismatchSort>>>;
  where?: InputMaybe<MismatchWhere>;
};


export type QueryNeo4JUpdateStatsArgs = {
  options?: InputMaybe<Neo4jUpdateStatsOptions>;
  where?: InputMaybe<Neo4jUpdateStatsWhere>;
};


export type QueryNeo4JUpdateStatsAggregateArgs = {
  where?: InputMaybe<Neo4jUpdateStatsWhere>;
};


export type QueryNeo4JUpdateStatsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<Neo4jUpdateStatsSort>>>;
  where?: InputMaybe<Neo4jUpdateStatsWhere>;
};


export type QueryOntologiesArgs = {
  options?: InputMaybe<OntologyOptions>;
  where?: InputMaybe<OntologyWhere>;
};


export type QueryOntologiesAggregateArgs = {
  where?: InputMaybe<OntologyWhere>;
};


export type QueryOntologiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<OntologySort>>>;
  where?: InputMaybe<OntologyWhere>;
};


export type QueryOntologyClassesArgs = {
  options?: InputMaybe<OntologyClassOptions>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type QueryOntologyClassesAggregateArgs = {
  where?: InputMaybe<OntologyClassWhere>;
};


export type QueryOntologyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<OntologyClassSort>>>;
  where?: InputMaybe<OntologyClassWhere>;
};


export type QueryOntologyRelationsArgs = {
  options?: InputMaybe<OntologyRelationOptions>;
  where?: InputMaybe<OntologyRelationWhere>;
};


export type QueryOntologyRelationsAggregateArgs = {
  where?: InputMaybe<OntologyRelationWhere>;
};


export type QueryOntologyRelationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<OntologyRelationSort>>>;
  where?: InputMaybe<OntologyRelationWhere>;
};


export type QueryRawDatasetCalendarHeatmapArgs = {
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};


export type QueryRawDatasetsArgs = {
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type QueryRawDatasetsAggregateArgs = {
  where?: InputMaybe<RawDatasetWhere>;
};


export type QueryRawDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<RawDatasetSort>>>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type QuerySearchGeographyCitiesArgs = {
  name: Scalars['String'];
};


export type QueryStudiesArgs = {
  options?: InputMaybe<StudyOptions>;
  where?: InputMaybe<StudyWhere>;
};


export type QueryStudiesAggregateArgs = {
  where?: InputMaybe<StudyWhere>;
};


export type QueryStudiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<StudySort>>>;
  where?: InputMaybe<StudyWhere>;
};


export type QueryTasksArgs = {
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type QueryTasksAggregateArgs = {
  where?: InputMaybe<TaskWhere>;
};


export type QueryTasksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TaskSort>>>;
  where?: InputMaybe<TaskWhere>;
};

export type RawDataset = {
  __typename?: 'RawDataset';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeBook?: Maybe<MinioUpload>;
  codeBookAggregate?: Maybe<RawDatasetMinioUploadCodeBookAggregationSelection>;
  codeBookConnection: RawDatasetCodeBookConnection;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  files: Array<MinioUpload>;
  filesAggregate?: Maybe<RawDatasetMinioUploadFilesAggregationSelection>;
  filesConnection: RawDatasetFilesConnection;
  fromStudy?: Maybe<Study>;
  fromStudyAggregate?: Maybe<RawDatasetStudyFromStudyAggregationSelection>;
  fromStudyConnection: RawDatasetFromStudyConnection;
  funnelTasks: Array<Task>;
  funnelTasksAggregate?: Maybe<RawDatasetTaskFunnelTasksAggregationSelection>;
  funnelTasksConnection: RawDatasetFunnelTasksConnection;
  generatedCuratedDatasets: Array<CuratedDataset>;
  generatedCuratedDatasetsAggregate?: Maybe<RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection>;
  generatedCuratedDatasetsConnection: RawDatasetGeneratedCuratedDatasetsConnection;
  minioBucket?: Maybe<MinioBucket>;
  minioBucketAggregate?: Maybe<RawDatasetMinioBucketMinioBucketAggregationSelection>;
  minioBucketConnection: RawDatasetMinioBucketConnection;
  name: Scalars['String'];
  rawDatasetID: Scalars['ID'];
  rawdataFile?: Maybe<MinioUpload>;
  rawdataFileAggregate?: Maybe<RawDatasetMinioUploadRawdataFileAggregationSelection>;
  rawdataFileConnection: RawDatasetRawdataFileConnection;
  studySite?: Maybe<GeographyCity>;
  studySiteAggregate?: Maybe<RawDatasetGeographyCityStudySiteAggregationSelection>;
  studySiteConnection: RawDatasetStudySiteConnection;
};


export type RawDatasetCodeBookArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetCodeBookAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetCodeBookConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetCodeBookConnectionSort>>;
  where?: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};


export type RawDatasetFilesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetFilesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetFilesConnectionSort>>;
  where?: InputMaybe<RawDatasetFilesConnectionWhere>;
};


export type RawDatasetFromStudyArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<StudyOptions>;
  where?: InputMaybe<StudyWhere>;
};


export type RawDatasetFromStudyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StudyWhere>;
};


export type RawDatasetFromStudyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetFromStudyConnectionSort>>;
  where?: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};


export type RawDatasetFunnelTasksArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type RawDatasetFunnelTasksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskWhere>;
};


export type RawDatasetFunnelTasksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetFunnelTasksConnectionSort>>;
  where?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
};


export type RawDatasetGeneratedCuratedDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CuratedDatasetOptions>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type RawDatasetGeneratedCuratedDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type RawDatasetGeneratedCuratedDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectionSort>>;
  where?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
};


export type RawDatasetMinioBucketArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioBucketOptions>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type RawDatasetMinioBucketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type RawDatasetMinioBucketConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetMinioBucketConnectionSort>>;
  where?: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};


export type RawDatasetRawdataFileArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetRawdataFileAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetRawdataFileConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetRawdataFileConnectionSort>>;
  where?: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};


export type RawDatasetStudySiteArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<GeographyCityOptions>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type RawDatasetStudySiteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type RawDatasetStudySiteConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<RawDatasetStudySiteConnectionSort>>;
  where?: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetAggregateSelection = {
  __typename?: 'RawDatasetAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type RawDatasetCodeBookAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetCodeBookAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetCodeBookAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetCodeBookNodeAggregationWhereInput>;
};

export type RawDatasetCodeBookConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  edge: HasCodebookCreateInput;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type RawDatasetCodeBookConnectOrCreateFieldInput = {
  onCreate: RawDatasetCodeBookConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type RawDatasetCodeBookConnectOrCreateFieldInputOnCreate = {
  edge: HasCodebookCreateInput;
  node: MinioUploadOnCreateInput;
};

export type RawDatasetCodeBookConnection = {
  __typename?: 'RawDatasetCodeBookConnection';
  edges: Array<RawDatasetCodeBookRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetCodeBookConnectionSort = {
  edge?: InputMaybe<HasCodebookSort>;
  node?: InputMaybe<MinioUploadSort>;
};

export type RawDatasetCodeBookConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetCodeBookConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetCodeBookConnectionWhere>>;
  edge?: InputMaybe<HasCodebookWhere>;
  edge_NOT?: InputMaybe<HasCodebookWhere>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type RawDatasetCodeBookCreateFieldInput = {
  edge: HasCodebookCreateInput;
  node: MinioUploadCreateInput;
};

export type RawDatasetCodeBookDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};

export type RawDatasetCodeBookDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};

export type RawDatasetCodeBookFieldInput = {
  connect?: InputMaybe<RawDatasetCodeBookConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetCodeBookConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetCodeBookCreateFieldInput>;
};

export type RawDatasetCodeBookNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetCodeBookNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetCodeBookNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetCodeBookRelationship = HasCodebook & {
  __typename?: 'RawDatasetCodeBookRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type RawDatasetCodeBookUpdateConnectionInput = {
  edge?: InputMaybe<HasCodebookUpdateInput>;
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type RawDatasetCodeBookUpdateFieldInput = {
  connect?: InputMaybe<RawDatasetCodeBookConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetCodeBookConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetCodeBookCreateFieldInput>;
  delete?: InputMaybe<RawDatasetCodeBookDeleteFieldInput>;
  disconnect?: InputMaybe<RawDatasetCodeBookDisconnectFieldInput>;
  update?: InputMaybe<RawDatasetCodeBookUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};

export type RawDatasetConnectInput = {
  codeBook?: InputMaybe<RawDatasetCodeBookConnectFieldInput>;
  files?: InputMaybe<Array<RawDatasetFilesConnectFieldInput>>;
  fromStudy?: InputMaybe<RawDatasetFromStudyConnectFieldInput>;
  funnelTasks?: InputMaybe<Array<RawDatasetFunnelTasksConnectFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectFieldInput>>;
  minioBucket?: InputMaybe<RawDatasetMinioBucketConnectFieldInput>;
  rawdataFile?: InputMaybe<RawDatasetRawdataFileConnectFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteConnectFieldInput>;
};

export type RawDatasetConnectOrCreateInput = {
  codeBook?: InputMaybe<RawDatasetCodeBookConnectOrCreateFieldInput>;
  files?: InputMaybe<Array<RawDatasetFilesConnectOrCreateFieldInput>>;
  fromStudy?: InputMaybe<RawDatasetFromStudyConnectOrCreateFieldInput>;
  generatedCuratedDatasets?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput>>;
  rawdataFile?: InputMaybe<RawDatasetRawdataFileConnectOrCreateFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteConnectOrCreateFieldInput>;
};

export type RawDatasetConnectOrCreateWhere = {
  node: RawDatasetUniqueWhere;
};

export type RawDatasetConnectWhere = {
  node: RawDatasetWhere;
};

export type RawDatasetCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  codeBook?: InputMaybe<RawDatasetCodeBookFieldInput>;
  description: Scalars['String'];
  files?: InputMaybe<RawDatasetFilesFieldInput>;
  fromStudy?: InputMaybe<RawDatasetFromStudyFieldInput>;
  funnelTasks?: InputMaybe<RawDatasetFunnelTasksFieldInput>;
  generatedCuratedDatasets?: InputMaybe<RawDatasetGeneratedCuratedDatasetsFieldInput>;
  minioBucket?: InputMaybe<RawDatasetMinioBucketFieldInput>;
  name: Scalars['String'];
  rawdataFile?: InputMaybe<RawDatasetRawdataFileFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteFieldInput>;
};

export type RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection = {
  __typename?: 'RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection>;
};

export type RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection = {
  __typename?: 'RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RawDatasetDeleteInput = {
  codeBook?: InputMaybe<RawDatasetCodeBookDeleteFieldInput>;
  files?: InputMaybe<Array<RawDatasetFilesDeleteFieldInput>>;
  fromStudy?: InputMaybe<RawDatasetFromStudyDeleteFieldInput>;
  funnelTasks?: InputMaybe<Array<RawDatasetFunnelTasksDeleteFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsDeleteFieldInput>>;
  minioBucket?: InputMaybe<RawDatasetMinioBucketDeleteFieldInput>;
  rawdataFile?: InputMaybe<RawDatasetRawdataFileDeleteFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteDeleteFieldInput>;
};

export type RawDatasetDisconnectInput = {
  codeBook?: InputMaybe<RawDatasetCodeBookDisconnectFieldInput>;
  files?: InputMaybe<Array<RawDatasetFilesDisconnectFieldInput>>;
  fromStudy?: InputMaybe<RawDatasetFromStudyDisconnectFieldInput>;
  funnelTasks?: InputMaybe<Array<RawDatasetFunnelTasksDisconnectFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput>>;
  minioBucket?: InputMaybe<RawDatasetMinioBucketDisconnectFieldInput>;
  rawdataFile?: InputMaybe<RawDatasetRawdataFileDisconnectFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteDisconnectFieldInput>;
};

export type RawDatasetEdge = {
  __typename?: 'RawDatasetEdge';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type RawDatasetFilesAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetFilesAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetFilesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetFilesNodeAggregationWhereInput>;
};

export type RawDatasetFilesConnectFieldInput = {
  connect?: InputMaybe<Array<MinioUploadConnectInput>>;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type RawDatasetFilesConnectOrCreateFieldInput = {
  onCreate: RawDatasetFilesConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type RawDatasetFilesConnectOrCreateFieldInputOnCreate = {
  node: MinioUploadOnCreateInput;
};

export type RawDatasetFilesConnection = {
  __typename?: 'RawDatasetFilesConnection';
  edges: Array<RawDatasetFilesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetFilesConnectionSort = {
  node?: InputMaybe<MinioUploadSort>;
};

export type RawDatasetFilesConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetFilesConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetFilesConnectionWhere>>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type RawDatasetFilesCreateFieldInput = {
  node: MinioUploadCreateInput;
};

export type RawDatasetFilesDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<RawDatasetFilesConnectionWhere>;
};

export type RawDatasetFilesDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<RawDatasetFilesConnectionWhere>;
};

export type RawDatasetFilesFieldInput = {
  connect?: InputMaybe<Array<RawDatasetFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RawDatasetFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RawDatasetFilesCreateFieldInput>>;
};

export type RawDatasetFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetFilesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetFilesNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetFilesRelationship = {
  __typename?: 'RawDatasetFilesRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type RawDatasetFilesUpdateConnectionInput = {
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type RawDatasetFilesUpdateFieldInput = {
  connect?: InputMaybe<Array<RawDatasetFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RawDatasetFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RawDatasetFilesCreateFieldInput>>;
  delete?: InputMaybe<Array<RawDatasetFilesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RawDatasetFilesDisconnectFieldInput>>;
  update?: InputMaybe<RawDatasetFilesUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetFilesConnectionWhere>;
};

export type RawDatasetFromStudyAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetFromStudyAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetFromStudyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetFromStudyNodeAggregationWhereInput>;
};

export type RawDatasetFromStudyConnectFieldInput = {
  connect?: InputMaybe<StudyConnectInput>;
  where?: InputMaybe<StudyConnectWhere>;
};

export type RawDatasetFromStudyConnectOrCreateFieldInput = {
  onCreate: RawDatasetFromStudyConnectOrCreateFieldInputOnCreate;
  where: StudyConnectOrCreateWhere;
};

export type RawDatasetFromStudyConnectOrCreateFieldInputOnCreate = {
  node: StudyOnCreateInput;
};

export type RawDatasetFromStudyConnection = {
  __typename?: 'RawDatasetFromStudyConnection';
  edges: Array<RawDatasetFromStudyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetFromStudyConnectionSort = {
  node?: InputMaybe<StudySort>;
};

export type RawDatasetFromStudyConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetFromStudyConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetFromStudyConnectionWhere>>;
  node?: InputMaybe<StudyWhere>;
  node_NOT?: InputMaybe<StudyWhere>;
};

export type RawDatasetFromStudyCreateFieldInput = {
  node: StudyCreateInput;
};

export type RawDatasetFromStudyDeleteFieldInput = {
  delete?: InputMaybe<StudyDeleteInput>;
  where?: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};

export type RawDatasetFromStudyDisconnectFieldInput = {
  disconnect?: InputMaybe<StudyDisconnectInput>;
  where?: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};

export type RawDatasetFromStudyFieldInput = {
  connect?: InputMaybe<RawDatasetFromStudyConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetFromStudyConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetFromStudyCreateFieldInput>;
};

export type RawDatasetFromStudyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetFromStudyNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetFromStudyNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  fullName_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  fullName_EQUAL?: InputMaybe<Scalars['String']>;
  fullName_GT?: InputMaybe<Scalars['Int']>;
  fullName_GTE?: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  fullName_LT?: InputMaybe<Scalars['Int']>;
  fullName_LTE?: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  shortName_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  shortName_EQUAL?: InputMaybe<Scalars['String']>;
  shortName_GT?: InputMaybe<Scalars['Int']>;
  shortName_GTE?: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  shortName_LT?: InputMaybe<Scalars['Int']>;
  shortName_LTE?: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  studyID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetFromStudyRelationship = {
  __typename?: 'RawDatasetFromStudyRelationship';
  cursor: Scalars['String'];
  node: Study;
};

export type RawDatasetFromStudyUpdateConnectionInput = {
  node?: InputMaybe<StudyUpdateInput>;
};

export type RawDatasetFromStudyUpdateFieldInput = {
  connect?: InputMaybe<RawDatasetFromStudyConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetFromStudyConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetFromStudyCreateFieldInput>;
  delete?: InputMaybe<RawDatasetFromStudyDeleteFieldInput>;
  disconnect?: InputMaybe<RawDatasetFromStudyDisconnectFieldInput>;
  update?: InputMaybe<RawDatasetFromStudyUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};

export type RawDatasetFunnelTasksAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetFunnelTasksAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetFunnelTasksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetFunnelTasksNodeAggregationWhereInput>;
};

export type RawDatasetFunnelTasksConnectFieldInput = {
  connect?: InputMaybe<Array<TaskConnectInput>>;
  where?: InputMaybe<TaskConnectWhere>;
};

export type RawDatasetFunnelTasksConnection = {
  __typename?: 'RawDatasetFunnelTasksConnection';
  edges: Array<RawDatasetFunnelTasksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetFunnelTasksConnectionSort = {
  node?: InputMaybe<TaskSort>;
};

export type RawDatasetFunnelTasksConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetFunnelTasksConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetFunnelTasksConnectionWhere>>;
  node?: InputMaybe<TaskWhere>;
  node_NOT?: InputMaybe<TaskWhere>;
};

export type RawDatasetFunnelTasksCreateFieldInput = {
  node: TaskCreateInput;
};

export type RawDatasetFunnelTasksDeleteFieldInput = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
};

export type RawDatasetFunnelTasksDisconnectFieldInput = {
  disconnect?: InputMaybe<TaskDisconnectInput>;
  where?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
};

export type RawDatasetFunnelTasksFieldInput = {
  connect?: InputMaybe<Array<RawDatasetFunnelTasksConnectFieldInput>>;
  create?: InputMaybe<Array<RawDatasetFunnelTasksCreateFieldInput>>;
};

export type RawDatasetFunnelTasksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetFunnelTasksNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetFunnelTasksNodeAggregationWhereInput>>;
  creationTime_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creationTime_EQUAL?: InputMaybe<Scalars['String']>;
  creationTime_GT?: InputMaybe<Scalars['Int']>;
  creationTime_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  id_EQUAL?: InputMaybe<Scalars['String']>;
  id_GT?: InputMaybe<Scalars['Int']>;
  id_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  id_LT?: InputMaybe<Scalars['Int']>;
  id_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  taskID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetFunnelTasksRelationship = {
  __typename?: 'RawDatasetFunnelTasksRelationship';
  cursor: Scalars['String'];
  node: Task;
};

export type RawDatasetFunnelTasksUpdateConnectionInput = {
  node?: InputMaybe<TaskUpdateInput>;
};

export type RawDatasetFunnelTasksUpdateFieldInput = {
  connect?: InputMaybe<Array<RawDatasetFunnelTasksConnectFieldInput>>;
  create?: InputMaybe<Array<RawDatasetFunnelTasksCreateFieldInput>>;
  delete?: InputMaybe<Array<RawDatasetFunnelTasksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RawDatasetFunnelTasksDisconnectFieldInput>>;
  update?: InputMaybe<RawDatasetFunnelTasksUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
};

export type RawDatasetGeneratedCuratedDatasetsAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput>;
};

export type RawDatasetGeneratedCuratedDatasetsConnectFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetConnectInput>>;
  where?: InputMaybe<CuratedDatasetConnectWhere>;
};

export type RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput = {
  onCreate: RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate;
  where: CuratedDatasetConnectOrCreateWhere;
};

export type RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate = {
  node: CuratedDatasetOnCreateInput;
};

export type RawDatasetGeneratedCuratedDatasetsConnection = {
  __typename?: 'RawDatasetGeneratedCuratedDatasetsConnection';
  edges: Array<RawDatasetGeneratedCuratedDatasetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetGeneratedCuratedDatasetsConnectionSort = {
  node?: InputMaybe<CuratedDatasetSort>;
};

export type RawDatasetGeneratedCuratedDatasetsConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectionWhere>>;
  node?: InputMaybe<CuratedDatasetWhere>;
  node_NOT?: InputMaybe<CuratedDatasetWhere>;
};

export type RawDatasetGeneratedCuratedDatasetsCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type RawDatasetGeneratedCuratedDatasetsDeleteFieldInput = {
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  where?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
};

export type RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput = {
  disconnect?: InputMaybe<CuratedDatasetDisconnectInput>;
  where?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
};

export type RawDatasetGeneratedCuratedDatasetsFieldInput = {
  connect?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsCreateFieldInput>>;
};

export type RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type RawDatasetGeneratedCuratedDatasetsRelationship = {
  __typename?: 'RawDatasetGeneratedCuratedDatasetsRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type RawDatasetGeneratedCuratedDatasetsUpdateConnectionInput = {
  node?: InputMaybe<CuratedDatasetUpdateInput>;
};

export type RawDatasetGeneratedCuratedDatasetsUpdateFieldInput = {
  connect?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsCreateFieldInput>>;
  delete?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput>>;
  update?: InputMaybe<RawDatasetGeneratedCuratedDatasetsUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
};

export type RawDatasetGeographyCityStudySiteAggregationSelection = {
  __typename?: 'RawDatasetGeographyCityStudySiteAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetGeographyCityStudySiteNodeAggregateSelection>;
};

export type RawDatasetGeographyCityStudySiteNodeAggregateSelection = {
  __typename?: 'RawDatasetGeographyCityStudySiteNodeAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  cityID: IdAggregateSelectionNonNullable;
  country: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
};

export type RawDatasetMinioBucketAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetMinioBucketAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetMinioBucketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetMinioBucketNodeAggregationWhereInput>;
};

export type RawDatasetMinioBucketConnectFieldInput = {
  connect?: InputMaybe<MinioBucketConnectInput>;
  where?: InputMaybe<MinioBucketConnectWhere>;
};

export type RawDatasetMinioBucketConnection = {
  __typename?: 'RawDatasetMinioBucketConnection';
  edges: Array<RawDatasetMinioBucketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetMinioBucketConnectionSort = {
  node?: InputMaybe<MinioBucketSort>;
};

export type RawDatasetMinioBucketConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetMinioBucketConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetMinioBucketConnectionWhere>>;
  node?: InputMaybe<MinioBucketWhere>;
  node_NOT?: InputMaybe<MinioBucketWhere>;
};

export type RawDatasetMinioBucketCreateFieldInput = {
  node: MinioBucketCreateInput;
};

export type RawDatasetMinioBucketDeleteFieldInput = {
  delete?: InputMaybe<MinioBucketDeleteInput>;
  where?: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};

export type RawDatasetMinioBucketDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioBucketDisconnectInput>;
  where?: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};

export type RawDatasetMinioBucketFieldInput = {
  connect?: InputMaybe<RawDatasetMinioBucketConnectFieldInput>;
  create?: InputMaybe<RawDatasetMinioBucketCreateFieldInput>;
};

export type RawDatasetMinioBucketMinioBucketAggregationSelection = {
  __typename?: 'RawDatasetMinioBucketMinioBucketAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetMinioBucketMinioBucketNodeAggregateSelection>;
};

export type RawDatasetMinioBucketMinioBucketNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioBucketMinioBucketNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
};

export type RawDatasetMinioBucketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetMinioBucketNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetMinioBucketNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetMinioBucketRelationship = {
  __typename?: 'RawDatasetMinioBucketRelationship';
  cursor: Scalars['String'];
  node: MinioBucket;
};

export type RawDatasetMinioBucketUpdateConnectionInput = {
  node?: InputMaybe<MinioBucketUpdateInput>;
};

export type RawDatasetMinioBucketUpdateFieldInput = {
  connect?: InputMaybe<RawDatasetMinioBucketConnectFieldInput>;
  create?: InputMaybe<RawDatasetMinioBucketCreateFieldInput>;
  delete?: InputMaybe<RawDatasetMinioBucketDeleteFieldInput>;
  disconnect?: InputMaybe<RawDatasetMinioBucketDisconnectFieldInput>;
  update?: InputMaybe<RawDatasetMinioBucketUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};

export type RawDatasetMinioUploadCodeBookAggregationSelection = {
  __typename?: 'RawDatasetMinioUploadCodeBookAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetMinioUploadCodeBookNodeAggregateSelection>;
};

export type RawDatasetMinioUploadCodeBookNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioUploadCodeBookNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type RawDatasetMinioUploadFilesAggregationSelection = {
  __typename?: 'RawDatasetMinioUploadFilesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetMinioUploadFilesNodeAggregateSelection>;
};

export type RawDatasetMinioUploadFilesNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioUploadFilesNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type RawDatasetMinioUploadRawdataFileAggregationSelection = {
  __typename?: 'RawDatasetMinioUploadRawdataFileAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetMinioUploadRawdataFileNodeAggregateSelection>;
};

export type RawDatasetMinioUploadRawdataFileNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioUploadRawdataFileNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type RawDatasetOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RawDatasetOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more RawDatasetSort objects to sort RawDatasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<RawDatasetSort>>;
};

export type RawDatasetRawdataFileAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetRawdataFileAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetRawdataFileAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetRawdataFileNodeAggregationWhereInput>;
};

export type RawDatasetRawdataFileConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  edge: HasRawdatafileCreateInput;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type RawDatasetRawdataFileConnectOrCreateFieldInput = {
  onCreate: RawDatasetRawdataFileConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type RawDatasetRawdataFileConnectOrCreateFieldInputOnCreate = {
  edge: HasRawdatafileCreateInput;
  node: MinioUploadOnCreateInput;
};

export type RawDatasetRawdataFileConnection = {
  __typename?: 'RawDatasetRawdataFileConnection';
  edges: Array<RawDatasetRawdataFileRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetRawdataFileConnectionSort = {
  edge?: InputMaybe<HasRawdatafileSort>;
  node?: InputMaybe<MinioUploadSort>;
};

export type RawDatasetRawdataFileConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetRawdataFileConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetRawdataFileConnectionWhere>>;
  edge?: InputMaybe<HasRawdatafileWhere>;
  edge_NOT?: InputMaybe<HasRawdatafileWhere>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type RawDatasetRawdataFileCreateFieldInput = {
  edge: HasRawdatafileCreateInput;
  node: MinioUploadCreateInput;
};

export type RawDatasetRawdataFileDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};

export type RawDatasetRawdataFileDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};

export type RawDatasetRawdataFileFieldInput = {
  connect?: InputMaybe<RawDatasetRawdataFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetRawdataFileConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetRawdataFileCreateFieldInput>;
};

export type RawDatasetRawdataFileNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetRawdataFileNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetRawdataFileNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetRawdataFileRelationship = HasRawdatafile & {
  __typename?: 'RawDatasetRawdataFileRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type RawDatasetRawdataFileUpdateConnectionInput = {
  edge?: InputMaybe<HasRawdatafileUpdateInput>;
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type RawDatasetRawdataFileUpdateFieldInput = {
  connect?: InputMaybe<RawDatasetRawdataFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetRawdataFileConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetRawdataFileCreateFieldInput>;
  delete?: InputMaybe<RawDatasetRawdataFileDeleteFieldInput>;
  disconnect?: InputMaybe<RawDatasetRawdataFileDisconnectFieldInput>;
  update?: InputMaybe<RawDatasetRawdataFileUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};

export type RawDatasetRelationInput = {
  codeBook?: InputMaybe<RawDatasetCodeBookCreateFieldInput>;
  files?: InputMaybe<Array<RawDatasetFilesCreateFieldInput>>;
  fromStudy?: InputMaybe<RawDatasetFromStudyCreateFieldInput>;
  funnelTasks?: InputMaybe<Array<RawDatasetFunnelTasksCreateFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsCreateFieldInput>>;
  minioBucket?: InputMaybe<RawDatasetMinioBucketCreateFieldInput>;
  rawdataFile?: InputMaybe<RawDatasetRawdataFileCreateFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteCreateFieldInput>;
};

/** Fields to sort RawDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one RawDatasetSort object. */
export type RawDatasetSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  rawDatasetID?: InputMaybe<SortDirection>;
};

export type RawDatasetStudyFromStudyAggregationSelection = {
  __typename?: 'RawDatasetStudyFromStudyAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetStudyFromStudyNodeAggregateSelection>;
};

export type RawDatasetStudyFromStudyNodeAggregateSelection = {
  __typename?: 'RawDatasetStudyFromStudyNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  fullName: StringAggregateSelectionNonNullable;
  shortName: StringAggregateSelectionNonNullable;
  studyID: IdAggregateSelectionNonNullable;
};

export type RawDatasetStudySiteAggregateInput = {
  AND?: InputMaybe<Array<RawDatasetStudySiteAggregateInput>>;
  OR?: InputMaybe<Array<RawDatasetStudySiteAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<RawDatasetStudySiteNodeAggregationWhereInput>;
};

export type RawDatasetStudySiteConnectFieldInput = {
  where?: InputMaybe<GeographyCityConnectWhere>;
};

export type RawDatasetStudySiteConnectOrCreateFieldInput = {
  onCreate: RawDatasetStudySiteConnectOrCreateFieldInputOnCreate;
  where: GeographyCityConnectOrCreateWhere;
};

export type RawDatasetStudySiteConnectOrCreateFieldInputOnCreate = {
  node: GeographyCityOnCreateInput;
};

export type RawDatasetStudySiteConnection = {
  __typename?: 'RawDatasetStudySiteConnection';
  edges: Array<RawDatasetStudySiteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetStudySiteConnectionSort = {
  node?: InputMaybe<GeographyCitySort>;
};

export type RawDatasetStudySiteConnectionWhere = {
  AND?: InputMaybe<Array<RawDatasetStudySiteConnectionWhere>>;
  OR?: InputMaybe<Array<RawDatasetStudySiteConnectionWhere>>;
  node?: InputMaybe<GeographyCityWhere>;
  node_NOT?: InputMaybe<GeographyCityWhere>;
};

export type RawDatasetStudySiteCreateFieldInput = {
  node: GeographyCityCreateInput;
};

export type RawDatasetStudySiteDeleteFieldInput = {
  where?: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetStudySiteDisconnectFieldInput = {
  where?: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetStudySiteFieldInput = {
  connect?: InputMaybe<RawDatasetStudySiteConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetStudySiteConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetStudySiteCreateFieldInput>;
};

export type RawDatasetStudySiteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<RawDatasetStudySiteNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<RawDatasetStudySiteNodeAggregationWhereInput>>;
  cityID_EQUAL?: InputMaybe<Scalars['ID']>;
  city_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  city_EQUAL?: InputMaybe<Scalars['String']>;
  city_GT?: InputMaybe<Scalars['Int']>;
  city_GTE?: InputMaybe<Scalars['Int']>;
  city_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  city_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  city_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  city_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  city_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  city_LT?: InputMaybe<Scalars['Int']>;
  city_LTE?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  country_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  country_EQUAL?: InputMaybe<Scalars['String']>;
  country_GT?: InputMaybe<Scalars['Int']>;
  country_GTE?: InputMaybe<Scalars['Int']>;
  country_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  country_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  country_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  country_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  country_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  country_LT?: InputMaybe<Scalars['Int']>;
  country_LTE?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  latitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  latitude_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_GT?: InputMaybe<Scalars['Float']>;
  latitude_GTE?: InputMaybe<Scalars['Float']>;
  latitude_LT?: InputMaybe<Scalars['Float']>;
  latitude_LTE?: InputMaybe<Scalars['Float']>;
  latitude_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_MAX_GT?: InputMaybe<Scalars['Float']>;
  latitude_MAX_GTE?: InputMaybe<Scalars['Float']>;
  latitude_MAX_LT?: InputMaybe<Scalars['Float']>;
  latitude_MAX_LTE?: InputMaybe<Scalars['Float']>;
  latitude_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_MIN_GT?: InputMaybe<Scalars['Float']>;
  latitude_MIN_GTE?: InputMaybe<Scalars['Float']>;
  latitude_MIN_LT?: InputMaybe<Scalars['Float']>;
  latitude_MIN_LTE?: InputMaybe<Scalars['Float']>;
  latitude_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_SUM_GT?: InputMaybe<Scalars['Float']>;
  latitude_SUM_GTE?: InputMaybe<Scalars['Float']>;
  latitude_SUM_LT?: InputMaybe<Scalars['Float']>;
  latitude_SUM_LTE?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  longitude_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_GT?: InputMaybe<Scalars['Float']>;
  longitude_GTE?: InputMaybe<Scalars['Float']>;
  longitude_LT?: InputMaybe<Scalars['Float']>;
  longitude_LTE?: InputMaybe<Scalars['Float']>;
  longitude_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_MAX_GT?: InputMaybe<Scalars['Float']>;
  longitude_MAX_GTE?: InputMaybe<Scalars['Float']>;
  longitude_MAX_LT?: InputMaybe<Scalars['Float']>;
  longitude_MAX_LTE?: InputMaybe<Scalars['Float']>;
  longitude_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_MIN_GT?: InputMaybe<Scalars['Float']>;
  longitude_MIN_GTE?: InputMaybe<Scalars['Float']>;
  longitude_MIN_LT?: InputMaybe<Scalars['Float']>;
  longitude_MIN_LTE?: InputMaybe<Scalars['Float']>;
  longitude_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_SUM_GT?: InputMaybe<Scalars['Float']>;
  longitude_SUM_GTE?: InputMaybe<Scalars['Float']>;
  longitude_SUM_LT?: InputMaybe<Scalars['Float']>;
  longitude_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type RawDatasetStudySiteRelationship = {
  __typename?: 'RawDatasetStudySiteRelationship';
  cursor: Scalars['String'];
  node: GeographyCity;
};

export type RawDatasetStudySiteUpdateConnectionInput = {
  node?: InputMaybe<GeographyCityUpdateInput>;
};

export type RawDatasetStudySiteUpdateFieldInput = {
  connect?: InputMaybe<RawDatasetStudySiteConnectFieldInput>;
  connectOrCreate?: InputMaybe<RawDatasetStudySiteConnectOrCreateFieldInput>;
  create?: InputMaybe<RawDatasetStudySiteCreateFieldInput>;
  delete?: InputMaybe<RawDatasetStudySiteDeleteFieldInput>;
  disconnect?: InputMaybe<RawDatasetStudySiteDisconnectFieldInput>;
  update?: InputMaybe<RawDatasetStudySiteUpdateConnectionInput>;
  where?: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetTaskFunnelTasksAggregationSelection = {
  __typename?: 'RawDatasetTaskFunnelTasksAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<RawDatasetTaskFunnelTasksNodeAggregateSelection>;
};

export type RawDatasetTaskFunnelTasksNodeAggregateSelection = {
  __typename?: 'RawDatasetTaskFunnelTasksNodeAggregateSelection';
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type RawDatasetUniqueWhere = {
  rawDatasetID?: InputMaybe<Scalars['ID']>;
};

export type RawDatasetUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  codeBook?: InputMaybe<RawDatasetCodeBookUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<RawDatasetFilesUpdateFieldInput>>;
  fromStudy?: InputMaybe<RawDatasetFromStudyUpdateFieldInput>;
  funnelTasks?: InputMaybe<Array<RawDatasetFunnelTasksUpdateFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetsUpdateFieldInput>>;
  minioBucket?: InputMaybe<RawDatasetMinioBucketUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  rawdataFile?: InputMaybe<RawDatasetRawdataFileUpdateFieldInput>;
  studySite?: InputMaybe<RawDatasetStudySiteUpdateFieldInput>;
};

export type RawDatasetWhere = {
  AND?: InputMaybe<Array<RawDatasetWhere>>;
  OR?: InputMaybe<Array<RawDatasetWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  codeBook?: InputMaybe<MinioUploadWhere>;
  codeBookAggregate?: InputMaybe<RawDatasetCodeBookAggregateInput>;
  codeBookConnection?: InputMaybe<RawDatasetCodeBookConnectionWhere>;
  codeBookConnection_NOT?: InputMaybe<RawDatasetCodeBookConnectionWhere>;
  codeBook_NOT?: InputMaybe<MinioUploadWhere>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<Scalars['DateTime']>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<MinioUploadWhere>;
  filesAggregate?: InputMaybe<RawDatasetFilesAggregateInput>;
  filesConnection?: InputMaybe<RawDatasetFilesConnectionWhere>;
  filesConnection_ALL?: InputMaybe<RawDatasetFilesConnectionWhere>;
  filesConnection_NONE?: InputMaybe<RawDatasetFilesConnectionWhere>;
  filesConnection_NOT?: InputMaybe<RawDatasetFilesConnectionWhere>;
  filesConnection_SINGLE?: InputMaybe<RawDatasetFilesConnectionWhere>;
  filesConnection_SOME?: InputMaybe<RawDatasetFilesConnectionWhere>;
  /** Return RawDatasets where all of the related MinioUploads match this filter */
  files_ALL?: InputMaybe<MinioUploadWhere>;
  /** Return RawDatasets where none of the related MinioUploads match this filter */
  files_NONE?: InputMaybe<MinioUploadWhere>;
  files_NOT?: InputMaybe<MinioUploadWhere>;
  /** Return RawDatasets where one of the related MinioUploads match this filter */
  files_SINGLE?: InputMaybe<MinioUploadWhere>;
  /** Return RawDatasets where some of the related MinioUploads match this filter */
  files_SOME?: InputMaybe<MinioUploadWhere>;
  fromStudy?: InputMaybe<StudyWhere>;
  fromStudyAggregate?: InputMaybe<RawDatasetFromStudyAggregateInput>;
  fromStudyConnection?: InputMaybe<RawDatasetFromStudyConnectionWhere>;
  fromStudyConnection_NOT?: InputMaybe<RawDatasetFromStudyConnectionWhere>;
  fromStudy_NOT?: InputMaybe<StudyWhere>;
  funnelTasks?: InputMaybe<TaskWhere>;
  funnelTasksAggregate?: InputMaybe<RawDatasetFunnelTasksAggregateInput>;
  funnelTasksConnection?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_ALL?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_NONE?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_NOT?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_SINGLE?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_SOME?: InputMaybe<RawDatasetFunnelTasksConnectionWhere>;
  /** Return RawDatasets where all of the related Tasks match this filter */
  funnelTasks_ALL?: InputMaybe<TaskWhere>;
  /** Return RawDatasets where none of the related Tasks match this filter */
  funnelTasks_NONE?: InputMaybe<TaskWhere>;
  funnelTasks_NOT?: InputMaybe<TaskWhere>;
  /** Return RawDatasets where one of the related Tasks match this filter */
  funnelTasks_SINGLE?: InputMaybe<TaskWhere>;
  /** Return RawDatasets where some of the related Tasks match this filter */
  funnelTasks_SOME?: InputMaybe<TaskWhere>;
  generatedCuratedDatasets?: InputMaybe<CuratedDatasetWhere>;
  generatedCuratedDatasetsAggregate?: InputMaybe<RawDatasetGeneratedCuratedDatasetsAggregateInput>;
  generatedCuratedDatasetsConnection?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_ALL?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_NONE?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_NOT?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_SINGLE?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_SOME?: InputMaybe<RawDatasetGeneratedCuratedDatasetsConnectionWhere>;
  /** Return RawDatasets where all of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_ALL?: InputMaybe<CuratedDatasetWhere>;
  /** Return RawDatasets where none of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_NONE?: InputMaybe<CuratedDatasetWhere>;
  generatedCuratedDatasets_NOT?: InputMaybe<CuratedDatasetWhere>;
  /** Return RawDatasets where one of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_SINGLE?: InputMaybe<CuratedDatasetWhere>;
  /** Return RawDatasets where some of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_SOME?: InputMaybe<CuratedDatasetWhere>;
  minioBucket?: InputMaybe<MinioBucketWhere>;
  minioBucketAggregate?: InputMaybe<RawDatasetMinioBucketAggregateInput>;
  minioBucketConnection?: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
  minioBucketConnection_NOT?: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
  minioBucket_NOT?: InputMaybe<MinioBucketWhere>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  rawDatasetID?: InputMaybe<Scalars['ID']>;
  rawDatasetID_CONTAINS?: InputMaybe<Scalars['ID']>;
  rawDatasetID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  rawDatasetID_IN?: InputMaybe<Array<Scalars['ID']>>;
  rawDatasetID_NOT?: InputMaybe<Scalars['ID']>;
  rawDatasetID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  rawDatasetID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  rawDatasetID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  rawDatasetID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  rawDatasetID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  rawdataFile?: InputMaybe<MinioUploadWhere>;
  rawdataFileAggregate?: InputMaybe<RawDatasetRawdataFileAggregateInput>;
  rawdataFileConnection?: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
  rawdataFileConnection_NOT?: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
  rawdataFile_NOT?: InputMaybe<MinioUploadWhere>;
  studySite?: InputMaybe<GeographyCityWhere>;
  studySiteAggregate?: InputMaybe<RawDatasetStudySiteAggregateInput>;
  studySiteConnection?: InputMaybe<RawDatasetStudySiteConnectionWhere>;
  studySiteConnection_NOT?: InputMaybe<RawDatasetStudySiteConnectionWhere>;
  studySite_NOT?: InputMaybe<GeographyCityWhere>;
};

export type RawDatasetsConnection = {
  __typename?: 'RawDatasetsConnection';
  edges: Array<RawDatasetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type StringAggregateSelectionNullable = {
  __typename?: 'StringAggregateSelectionNullable';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type StudiesConnection = {
  __typename?: 'StudiesConnection';
  edges: Array<StudyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Study = {
  __typename?: 'Study';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  rawDatasets: Array<RawDataset>;
  rawDatasetsAggregate?: Maybe<StudyRawDatasetRawDatasetsAggregationSelection>;
  rawDatasetsConnection: StudyRawDatasetsConnection;
  shortName: Scalars['String'];
  studyID: Scalars['ID'];
  studySites: Array<GeographyCity>;
  studySitesAggregate?: Maybe<StudyGeographyCityStudySitesAggregationSelection>;
  studySitesConnection: StudyStudySitesConnection;
};


export type StudyRawDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type StudyRawDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type StudyRawDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<StudyRawDatasetsConnectionSort>>;
  where?: InputMaybe<StudyRawDatasetsConnectionWhere>;
};


export type StudyStudySitesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<GeographyCityOptions>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type StudyStudySitesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type StudyStudySitesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<StudyStudySitesConnectionSort>>;
  where?: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyAggregateSelection = {
  __typename?: 'StudyAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelectionNonNullable;
  fullName: StringAggregateSelectionNonNullable;
  shortName: StringAggregateSelectionNonNullable;
  studyID: IdAggregateSelectionNonNullable;
};

export type StudyConnectInput = {
  rawDatasets?: InputMaybe<Array<StudyRawDatasetsConnectFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
};

export type StudyConnectOrCreateInput = {
  rawDatasets?: InputMaybe<Array<StudyRawDatasetsConnectOrCreateFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesConnectOrCreateFieldInput>>;
};

export type StudyConnectOrCreateWhere = {
  node: StudyUniqueWhere;
};

export type StudyConnectWhere = {
  node: StudyWhere;
};

export type StudyCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  rawDatasets?: InputMaybe<StudyRawDatasetsFieldInput>;
  shortName: Scalars['String'];
  studySites?: InputMaybe<StudyStudySitesFieldInput>;
};

export type StudyDeleteInput = {
  rawDatasets?: InputMaybe<Array<StudyRawDatasetsDeleteFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesDeleteFieldInput>>;
};

export type StudyDisconnectInput = {
  rawDatasets?: InputMaybe<Array<StudyRawDatasetsDisconnectFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesDisconnectFieldInput>>;
};

export type StudyEdge = {
  __typename?: 'StudyEdge';
  cursor: Scalars['String'];
  node: Study;
};

export type StudyGeographyCityStudySitesAggregationSelection = {
  __typename?: 'StudyGeographyCityStudySitesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<StudyGeographyCityStudySitesNodeAggregateSelection>;
};

export type StudyGeographyCityStudySitesNodeAggregateSelection = {
  __typename?: 'StudyGeographyCityStudySitesNodeAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  cityID: IdAggregateSelectionNonNullable;
  country: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
};

export type StudyOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  shortName: Scalars['String'];
};

export type StudyOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more StudySort objects to sort Studies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StudySort>>;
};

export type StudyRawDatasetRawDatasetsAggregationSelection = {
  __typename?: 'StudyRawDatasetRawDatasetsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<StudyRawDatasetRawDatasetsNodeAggregateSelection>;
};

export type StudyRawDatasetRawDatasetsNodeAggregateSelection = {
  __typename?: 'StudyRawDatasetRawDatasetsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type StudyRawDatasetsAggregateInput = {
  AND?: InputMaybe<Array<StudyRawDatasetsAggregateInput>>;
  OR?: InputMaybe<Array<StudyRawDatasetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<StudyRawDatasetsNodeAggregationWhereInput>;
};

export type StudyRawDatasetsConnectFieldInput = {
  connect?: InputMaybe<Array<RawDatasetConnectInput>>;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type StudyRawDatasetsConnectOrCreateFieldInput = {
  onCreate: StudyRawDatasetsConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type StudyRawDatasetsConnectOrCreateFieldInputOnCreate = {
  node: RawDatasetOnCreateInput;
};

export type StudyRawDatasetsConnection = {
  __typename?: 'StudyRawDatasetsConnection';
  edges: Array<StudyRawDatasetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StudyRawDatasetsConnectionSort = {
  node?: InputMaybe<RawDatasetSort>;
};

export type StudyRawDatasetsConnectionWhere = {
  AND?: InputMaybe<Array<StudyRawDatasetsConnectionWhere>>;
  OR?: InputMaybe<Array<StudyRawDatasetsConnectionWhere>>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type StudyRawDatasetsCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type StudyRawDatasetsDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<StudyRawDatasetsConnectionWhere>;
};

export type StudyRawDatasetsDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<StudyRawDatasetsConnectionWhere>;
};

export type StudyRawDatasetsFieldInput = {
  connect?: InputMaybe<Array<StudyRawDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StudyRawDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StudyRawDatasetsCreateFieldInput>>;
};

export type StudyRawDatasetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StudyRawDatasetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<StudyRawDatasetsNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type StudyRawDatasetsRelationship = {
  __typename?: 'StudyRawDatasetsRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type StudyRawDatasetsUpdateConnectionInput = {
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type StudyRawDatasetsUpdateFieldInput = {
  connect?: InputMaybe<Array<StudyRawDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StudyRawDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StudyRawDatasetsCreateFieldInput>>;
  delete?: InputMaybe<Array<StudyRawDatasetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StudyRawDatasetsDisconnectFieldInput>>;
  update?: InputMaybe<StudyRawDatasetsUpdateConnectionInput>;
  where?: InputMaybe<StudyRawDatasetsConnectionWhere>;
};

export type StudyRelationInput = {
  rawDatasets?: InputMaybe<Array<StudyRawDatasetsCreateFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesCreateFieldInput>>;
};

/** Fields to sort Studies by. The order in which sorts are applied is not guaranteed when specifying many fields in one StudySort object. */
export type StudySort = {
  description?: InputMaybe<SortDirection>;
  fullName?: InputMaybe<SortDirection>;
  shortName?: InputMaybe<SortDirection>;
  studyID?: InputMaybe<SortDirection>;
};

export type StudyStudySitesAggregateInput = {
  AND?: InputMaybe<Array<StudyStudySitesAggregateInput>>;
  OR?: InputMaybe<Array<StudyStudySitesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<StudyStudySitesNodeAggregationWhereInput>;
};

export type StudyStudySitesConnectFieldInput = {
  where?: InputMaybe<GeographyCityConnectWhere>;
};

export type StudyStudySitesConnectOrCreateFieldInput = {
  onCreate: StudyStudySitesConnectOrCreateFieldInputOnCreate;
  where: GeographyCityConnectOrCreateWhere;
};

export type StudyStudySitesConnectOrCreateFieldInputOnCreate = {
  node: GeographyCityOnCreateInput;
};

export type StudyStudySitesConnection = {
  __typename?: 'StudyStudySitesConnection';
  edges: Array<StudyStudySitesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StudyStudySitesConnectionSort = {
  node?: InputMaybe<GeographyCitySort>;
};

export type StudyStudySitesConnectionWhere = {
  AND?: InputMaybe<Array<StudyStudySitesConnectionWhere>>;
  OR?: InputMaybe<Array<StudyStudySitesConnectionWhere>>;
  node?: InputMaybe<GeographyCityWhere>;
  node_NOT?: InputMaybe<GeographyCityWhere>;
};

export type StudyStudySitesCreateFieldInput = {
  node: GeographyCityCreateInput;
};

export type StudyStudySitesDeleteFieldInput = {
  where?: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyStudySitesDisconnectFieldInput = {
  where?: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyStudySitesFieldInput = {
  connect?: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StudyStudySitesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StudyStudySitesCreateFieldInput>>;
};

export type StudyStudySitesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StudyStudySitesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<StudyStudySitesNodeAggregationWhereInput>>;
  cityID_EQUAL?: InputMaybe<Scalars['ID']>;
  city_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  city_EQUAL?: InputMaybe<Scalars['String']>;
  city_GT?: InputMaybe<Scalars['Int']>;
  city_GTE?: InputMaybe<Scalars['Int']>;
  city_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  city_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  city_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  city_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  city_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  city_LT?: InputMaybe<Scalars['Int']>;
  city_LTE?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  country_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  country_EQUAL?: InputMaybe<Scalars['String']>;
  country_GT?: InputMaybe<Scalars['Int']>;
  country_GTE?: InputMaybe<Scalars['Int']>;
  country_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  country_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  country_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  country_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  country_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  country_LT?: InputMaybe<Scalars['Int']>;
  country_LTE?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  latitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  latitude_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_GT?: InputMaybe<Scalars['Float']>;
  latitude_GTE?: InputMaybe<Scalars['Float']>;
  latitude_LT?: InputMaybe<Scalars['Float']>;
  latitude_LTE?: InputMaybe<Scalars['Float']>;
  latitude_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_MAX_GT?: InputMaybe<Scalars['Float']>;
  latitude_MAX_GTE?: InputMaybe<Scalars['Float']>;
  latitude_MAX_LT?: InputMaybe<Scalars['Float']>;
  latitude_MAX_LTE?: InputMaybe<Scalars['Float']>;
  latitude_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_MIN_GT?: InputMaybe<Scalars['Float']>;
  latitude_MIN_GTE?: InputMaybe<Scalars['Float']>;
  latitude_MIN_LT?: InputMaybe<Scalars['Float']>;
  latitude_MIN_LTE?: InputMaybe<Scalars['Float']>;
  latitude_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  latitude_SUM_GT?: InputMaybe<Scalars['Float']>;
  latitude_SUM_GTE?: InputMaybe<Scalars['Float']>;
  latitude_SUM_LT?: InputMaybe<Scalars['Float']>;
  latitude_SUM_LTE?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  longitude_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_GT?: InputMaybe<Scalars['Float']>;
  longitude_GTE?: InputMaybe<Scalars['Float']>;
  longitude_LT?: InputMaybe<Scalars['Float']>;
  longitude_LTE?: InputMaybe<Scalars['Float']>;
  longitude_MAX_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_MAX_GT?: InputMaybe<Scalars['Float']>;
  longitude_MAX_GTE?: InputMaybe<Scalars['Float']>;
  longitude_MAX_LT?: InputMaybe<Scalars['Float']>;
  longitude_MAX_LTE?: InputMaybe<Scalars['Float']>;
  longitude_MIN_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_MIN_GT?: InputMaybe<Scalars['Float']>;
  longitude_MIN_GTE?: InputMaybe<Scalars['Float']>;
  longitude_MIN_LT?: InputMaybe<Scalars['Float']>;
  longitude_MIN_LTE?: InputMaybe<Scalars['Float']>;
  longitude_SUM_EQUAL?: InputMaybe<Scalars['Float']>;
  longitude_SUM_GT?: InputMaybe<Scalars['Float']>;
  longitude_SUM_GTE?: InputMaybe<Scalars['Float']>;
  longitude_SUM_LT?: InputMaybe<Scalars['Float']>;
  longitude_SUM_LTE?: InputMaybe<Scalars['Float']>;
};

export type StudyStudySitesRelationship = {
  __typename?: 'StudyStudySitesRelationship';
  cursor: Scalars['String'];
  node: GeographyCity;
};

export type StudyStudySitesUpdateConnectionInput = {
  node?: InputMaybe<GeographyCityUpdateInput>;
};

export type StudyStudySitesUpdateFieldInput = {
  connect?: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StudyStudySitesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StudyStudySitesCreateFieldInput>>;
  delete?: InputMaybe<Array<StudyStudySitesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StudyStudySitesDisconnectFieldInput>>;
  update?: InputMaybe<StudyStudySitesUpdateConnectionInput>;
  where?: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyUniqueWhere = {
  studyID?: InputMaybe<Scalars['ID']>;
};

export type StudyUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  rawDatasets?: InputMaybe<Array<StudyRawDatasetsUpdateFieldInput>>;
  shortName?: InputMaybe<Scalars['String']>;
  studySites?: InputMaybe<Array<StudyStudySitesUpdateFieldInput>>;
};

export type StudyWhere = {
  AND?: InputMaybe<Array<StudyWhere>>;
  OR?: InputMaybe<Array<StudyWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  fullName_CONTAINS?: InputMaybe<Scalars['String']>;
  fullName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  fullName_IN?: InputMaybe<Array<Scalars['String']>>;
  fullName_NOT?: InputMaybe<Scalars['String']>;
  fullName_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  fullName_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  fullName_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  fullName_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fullName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  rawDatasets?: InputMaybe<RawDatasetWhere>;
  rawDatasetsAggregate?: InputMaybe<StudyRawDatasetsAggregateInput>;
  rawDatasetsConnection?: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_ALL?: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NONE?: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NOT?: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SINGLE?: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SOME?: InputMaybe<StudyRawDatasetsConnectionWhere>;
  /** Return Studies where all of the related RawDatasets match this filter */
  rawDatasets_ALL?: InputMaybe<RawDatasetWhere>;
  /** Return Studies where none of the related RawDatasets match this filter */
  rawDatasets_NONE?: InputMaybe<RawDatasetWhere>;
  rawDatasets_NOT?: InputMaybe<RawDatasetWhere>;
  /** Return Studies where one of the related RawDatasets match this filter */
  rawDatasets_SINGLE?: InputMaybe<RawDatasetWhere>;
  /** Return Studies where some of the related RawDatasets match this filter */
  rawDatasets_SOME?: InputMaybe<RawDatasetWhere>;
  shortName?: InputMaybe<Scalars['String']>;
  shortName_CONTAINS?: InputMaybe<Scalars['String']>;
  shortName_ENDS_WITH?: InputMaybe<Scalars['String']>;
  shortName_IN?: InputMaybe<Array<Scalars['String']>>;
  shortName_NOT?: InputMaybe<Scalars['String']>;
  shortName_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  shortName_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  shortName_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  shortName_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  shortName_STARTS_WITH?: InputMaybe<Scalars['String']>;
  studyID?: InputMaybe<Scalars['ID']>;
  studyID_CONTAINS?: InputMaybe<Scalars['ID']>;
  studyID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  studyID_IN?: InputMaybe<Array<Scalars['ID']>>;
  studyID_NOT?: InputMaybe<Scalars['ID']>;
  studyID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  studyID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  studyID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  studyID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  studyID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  studySites?: InputMaybe<GeographyCityWhere>;
  studySitesAggregate?: InputMaybe<StudyStudySitesAggregateInput>;
  studySitesConnection?: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_ALL?: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_NONE?: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_NOT?: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_SINGLE?: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_SOME?: InputMaybe<StudyStudySitesConnectionWhere>;
  /** Return Studies where all of the related GeographyCities match this filter */
  studySites_ALL?: InputMaybe<GeographyCityWhere>;
  /** Return Studies where none of the related GeographyCities match this filter */
  studySites_NONE?: InputMaybe<GeographyCityWhere>;
  studySites_NOT?: InputMaybe<GeographyCityWhere>;
  /** Return Studies where one of the related GeographyCities match this filter */
  studySites_SINGLE?: InputMaybe<GeographyCityWhere>;
  /** Return Studies where some of the related GeographyCities match this filter */
  studySites_SOME?: InputMaybe<GeographyCityWhere>;
};

export type Task = {
  __typename?: 'Task';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  creationTime?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fromCuratedDataset?: Maybe<Task>;
  fromCuratedDatasetAggregate?: Maybe<TaskTaskFromCuratedDatasetAggregationSelection>;
  fromCuratedDatasetConnection: TaskFromCuratedDatasetConnection;
  fromRawDataset?: Maybe<RawDataset>;
  fromRawDatasetAggregate?: Maybe<TaskRawDatasetFromRawDatasetAggregationSelection>;
  fromRawDatasetConnection: TaskFromRawDatasetConnection;
  generatedCuratedDataset?: Maybe<CuratedDataset>;
  generatedCuratedDatasetAggregate?: Maybe<TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection>;
  generatedCuratedDatasetConnection: TaskGeneratedCuratedDatasetConnection;
  generatedExport?: Maybe<MinioUpload>;
  generatedExportAggregate?: Maybe<TaskMinioUploadGeneratedExportAggregationSelection>;
  generatedExportConnection: TaskGeneratedExportConnection;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<FunnelState>;
  taskID?: Maybe<Scalars['ID']>;
};


export type TaskFromCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type TaskFromCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskWhere>;
};


export type TaskFromCuratedDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TaskFromCuratedDatasetConnectionSort>>;
  where?: InputMaybe<TaskFromCuratedDatasetConnectionWhere>;
};


export type TaskFromRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<RawDatasetOptions>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type TaskFromRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RawDatasetWhere>;
};


export type TaskFromRawDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TaskFromRawDatasetConnectionSort>>;
  where?: InputMaybe<TaskFromRawDatasetConnectionWhere>;
};


export type TaskGeneratedCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CuratedDatasetOptions>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type TaskGeneratedCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type TaskGeneratedCuratedDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TaskGeneratedCuratedDatasetConnectionSort>>;
  where?: InputMaybe<TaskGeneratedCuratedDatasetConnectionWhere>;
};


export type TaskGeneratedExportArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type TaskGeneratedExportAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type TaskGeneratedExportConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TaskGeneratedExportConnectionSort>>;
  where?: InputMaybe<TaskGeneratedExportConnectionWhere>;
};

export type TaskAggregateSelection = {
  __typename?: 'TaskAggregateSelection';
  count: Scalars['Int'];
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type TaskConnectInput = {
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetConnectFieldInput>;
  fromRawDataset?: InputMaybe<TaskFromRawDatasetConnectFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetConnectFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportConnectFieldInput>;
};

export type TaskConnectOrCreateInput = {
  fromRawDataset?: InputMaybe<TaskFromRawDatasetConnectOrCreateFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetConnectOrCreateFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportConnectOrCreateFieldInput>;
};

export type TaskConnectWhere = {
  node: TaskWhere;
};

export type TaskCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetFieldInput>;
  fromRawDataset?: InputMaybe<TaskFromRawDatasetFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportFieldInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<FunnelState>;
  taskID?: InputMaybe<Scalars['ID']>;
};

export type TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection = {
  __typename?: 'TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection>;
};

export type TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection = {
  __typename?: 'TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type TaskDeleteInput = {
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetDeleteFieldInput>;
  fromRawDataset?: InputMaybe<TaskFromRawDatasetDeleteFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetDeleteFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportDeleteFieldInput>;
};

export type TaskDisconnectInput = {
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetDisconnectFieldInput>;
  fromRawDataset?: InputMaybe<TaskFromRawDatasetDisconnectFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetDisconnectFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportDisconnectFieldInput>;
};

export type TaskEdge = {
  __typename?: 'TaskEdge';
  cursor: Scalars['String'];
  node: Task;
};

export type TaskFromCuratedDatasetAggregateInput = {
  AND?: InputMaybe<Array<TaskFromCuratedDatasetAggregateInput>>;
  OR?: InputMaybe<Array<TaskFromCuratedDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TaskFromCuratedDatasetNodeAggregationWhereInput>;
};

export type TaskFromCuratedDatasetConnectFieldInput = {
  connect?: InputMaybe<TaskConnectInput>;
  where?: InputMaybe<TaskConnectWhere>;
};

export type TaskFromCuratedDatasetConnection = {
  __typename?: 'TaskFromCuratedDatasetConnection';
  edges: Array<TaskFromCuratedDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaskFromCuratedDatasetConnectionSort = {
  node?: InputMaybe<TaskSort>;
};

export type TaskFromCuratedDatasetConnectionWhere = {
  AND?: InputMaybe<Array<TaskFromCuratedDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<TaskFromCuratedDatasetConnectionWhere>>;
  node?: InputMaybe<TaskWhere>;
  node_NOT?: InputMaybe<TaskWhere>;
};

export type TaskFromCuratedDatasetCreateFieldInput = {
  node: TaskCreateInput;
};

export type TaskFromCuratedDatasetDeleteFieldInput = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<TaskFromCuratedDatasetConnectionWhere>;
};

export type TaskFromCuratedDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<TaskDisconnectInput>;
  where?: InputMaybe<TaskFromCuratedDatasetConnectionWhere>;
};

export type TaskFromCuratedDatasetFieldInput = {
  connect?: InputMaybe<TaskFromCuratedDatasetConnectFieldInput>;
  create?: InputMaybe<TaskFromCuratedDatasetCreateFieldInput>;
};

export type TaskFromCuratedDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TaskFromCuratedDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TaskFromCuratedDatasetNodeAggregationWhereInput>>;
  creationTime_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  creationTime_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  creationTime_EQUAL?: InputMaybe<Scalars['String']>;
  creationTime_GT?: InputMaybe<Scalars['Int']>;
  creationTime_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_LT?: InputMaybe<Scalars['Int']>;
  creationTime_LTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  creationTime_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  id_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  id_EQUAL?: InputMaybe<Scalars['String']>;
  id_GT?: InputMaybe<Scalars['Int']>;
  id_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  id_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  id_LT?: InputMaybe<Scalars['Int']>;
  id_LTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  id_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  taskID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TaskFromCuratedDatasetRelationship = {
  __typename?: 'TaskFromCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: Task;
};

export type TaskFromCuratedDatasetUpdateConnectionInput = {
  node?: InputMaybe<TaskUpdateInput>;
};

export type TaskFromCuratedDatasetUpdateFieldInput = {
  connect?: InputMaybe<TaskFromCuratedDatasetConnectFieldInput>;
  create?: InputMaybe<TaskFromCuratedDatasetCreateFieldInput>;
  delete?: InputMaybe<TaskFromCuratedDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<TaskFromCuratedDatasetDisconnectFieldInput>;
  update?: InputMaybe<TaskFromCuratedDatasetUpdateConnectionInput>;
  where?: InputMaybe<TaskFromCuratedDatasetConnectionWhere>;
};

export type TaskFromRawDatasetAggregateInput = {
  AND?: InputMaybe<Array<TaskFromRawDatasetAggregateInput>>;
  OR?: InputMaybe<Array<TaskFromRawDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TaskFromRawDatasetNodeAggregationWhereInput>;
};

export type TaskFromRawDatasetConnectFieldInput = {
  connect?: InputMaybe<RawDatasetConnectInput>;
  where?: InputMaybe<RawDatasetConnectWhere>;
};

export type TaskFromRawDatasetConnectOrCreateFieldInput = {
  onCreate: TaskFromRawDatasetConnectOrCreateFieldInputOnCreate;
  where: RawDatasetConnectOrCreateWhere;
};

export type TaskFromRawDatasetConnectOrCreateFieldInputOnCreate = {
  node: RawDatasetOnCreateInput;
};

export type TaskFromRawDatasetConnection = {
  __typename?: 'TaskFromRawDatasetConnection';
  edges: Array<TaskFromRawDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaskFromRawDatasetConnectionSort = {
  node?: InputMaybe<RawDatasetSort>;
};

export type TaskFromRawDatasetConnectionWhere = {
  AND?: InputMaybe<Array<TaskFromRawDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<TaskFromRawDatasetConnectionWhere>>;
  node?: InputMaybe<RawDatasetWhere>;
  node_NOT?: InputMaybe<RawDatasetWhere>;
};

export type TaskFromRawDatasetCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type TaskFromRawDatasetDeleteFieldInput = {
  delete?: InputMaybe<RawDatasetDeleteInput>;
  where?: InputMaybe<TaskFromRawDatasetConnectionWhere>;
};

export type TaskFromRawDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<RawDatasetDisconnectInput>;
  where?: InputMaybe<TaskFromRawDatasetConnectionWhere>;
};

export type TaskFromRawDatasetFieldInput = {
  connect?: InputMaybe<TaskFromRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskFromRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskFromRawDatasetCreateFieldInput>;
};

export type TaskFromRawDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TaskFromRawDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TaskFromRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TaskFromRawDatasetRelationship = {
  __typename?: 'TaskFromRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type TaskFromRawDatasetUpdateConnectionInput = {
  node?: InputMaybe<RawDatasetUpdateInput>;
};

export type TaskFromRawDatasetUpdateFieldInput = {
  connect?: InputMaybe<TaskFromRawDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskFromRawDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskFromRawDatasetCreateFieldInput>;
  delete?: InputMaybe<TaskFromRawDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<TaskFromRawDatasetDisconnectFieldInput>;
  update?: InputMaybe<TaskFromRawDatasetUpdateConnectionInput>;
  where?: InputMaybe<TaskFromRawDatasetConnectionWhere>;
};

export type TaskGeneratedCuratedDatasetAggregateInput = {
  AND?: InputMaybe<Array<TaskGeneratedCuratedDatasetAggregateInput>>;
  OR?: InputMaybe<Array<TaskGeneratedCuratedDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TaskGeneratedCuratedDatasetNodeAggregationWhereInput>;
};

export type TaskGeneratedCuratedDatasetConnectFieldInput = {
  connect?: InputMaybe<CuratedDatasetConnectInput>;
  where?: InputMaybe<CuratedDatasetConnectWhere>;
};

export type TaskGeneratedCuratedDatasetConnectOrCreateFieldInput = {
  onCreate: TaskGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate;
  where: CuratedDatasetConnectOrCreateWhere;
};

export type TaskGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate = {
  node: CuratedDatasetOnCreateInput;
};

export type TaskGeneratedCuratedDatasetConnection = {
  __typename?: 'TaskGeneratedCuratedDatasetConnection';
  edges: Array<TaskGeneratedCuratedDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaskGeneratedCuratedDatasetConnectionSort = {
  node?: InputMaybe<CuratedDatasetSort>;
};

export type TaskGeneratedCuratedDatasetConnectionWhere = {
  AND?: InputMaybe<Array<TaskGeneratedCuratedDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<TaskGeneratedCuratedDatasetConnectionWhere>>;
  node?: InputMaybe<CuratedDatasetWhere>;
  node_NOT?: InputMaybe<CuratedDatasetWhere>;
};

export type TaskGeneratedCuratedDatasetCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type TaskGeneratedCuratedDatasetDeleteFieldInput = {
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  where?: InputMaybe<TaskGeneratedCuratedDatasetConnectionWhere>;
};

export type TaskGeneratedCuratedDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<CuratedDatasetDisconnectInput>;
  where?: InputMaybe<TaskGeneratedCuratedDatasetConnectionWhere>;
};

export type TaskGeneratedCuratedDatasetFieldInput = {
  connect?: InputMaybe<TaskGeneratedCuratedDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskGeneratedCuratedDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskGeneratedCuratedDatasetCreateFieldInput>;
};

export type TaskGeneratedCuratedDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TaskGeneratedCuratedDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TaskGeneratedCuratedDatasetNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TaskGeneratedCuratedDatasetRelationship = {
  __typename?: 'TaskGeneratedCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type TaskGeneratedCuratedDatasetUpdateConnectionInput = {
  node?: InputMaybe<CuratedDatasetUpdateInput>;
};

export type TaskGeneratedCuratedDatasetUpdateFieldInput = {
  connect?: InputMaybe<TaskGeneratedCuratedDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskGeneratedCuratedDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskGeneratedCuratedDatasetCreateFieldInput>;
  delete?: InputMaybe<TaskGeneratedCuratedDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<TaskGeneratedCuratedDatasetDisconnectFieldInput>;
  update?: InputMaybe<TaskGeneratedCuratedDatasetUpdateConnectionInput>;
  where?: InputMaybe<TaskGeneratedCuratedDatasetConnectionWhere>;
};

export type TaskGeneratedExportAggregateInput = {
  AND?: InputMaybe<Array<TaskGeneratedExportAggregateInput>>;
  OR?: InputMaybe<Array<TaskGeneratedExportAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TaskGeneratedExportNodeAggregationWhereInput>;
};

export type TaskGeneratedExportConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type TaskGeneratedExportConnectOrCreateFieldInput = {
  onCreate: TaskGeneratedExportConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type TaskGeneratedExportConnectOrCreateFieldInputOnCreate = {
  node: MinioUploadOnCreateInput;
};

export type TaskGeneratedExportConnection = {
  __typename?: 'TaskGeneratedExportConnection';
  edges: Array<TaskGeneratedExportRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaskGeneratedExportConnectionSort = {
  node?: InputMaybe<MinioUploadSort>;
};

export type TaskGeneratedExportConnectionWhere = {
  AND?: InputMaybe<Array<TaskGeneratedExportConnectionWhere>>;
  OR?: InputMaybe<Array<TaskGeneratedExportConnectionWhere>>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type TaskGeneratedExportCreateFieldInput = {
  node: MinioUploadCreateInput;
};

export type TaskGeneratedExportDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<TaskGeneratedExportConnectionWhere>;
};

export type TaskGeneratedExportDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<TaskGeneratedExportConnectionWhere>;
};

export type TaskGeneratedExportFieldInput = {
  connect?: InputMaybe<TaskGeneratedExportConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskGeneratedExportConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskGeneratedExportCreateFieldInput>;
};

export type TaskGeneratedExportNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TaskGeneratedExportNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TaskGeneratedExportNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  filename_EQUAL?: InputMaybe<Scalars['String']>;
  filename_GT?: InputMaybe<Scalars['Int']>;
  filename_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  filename_LT?: InputMaybe<Scalars['Int']>;
  filename_LTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  objectName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TaskGeneratedExportRelationship = {
  __typename?: 'TaskGeneratedExportRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type TaskGeneratedExportUpdateConnectionInput = {
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type TaskGeneratedExportUpdateFieldInput = {
  connect?: InputMaybe<TaskGeneratedExportConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskGeneratedExportConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskGeneratedExportCreateFieldInput>;
  delete?: InputMaybe<TaskGeneratedExportDeleteFieldInput>;
  disconnect?: InputMaybe<TaskGeneratedExportDisconnectFieldInput>;
  update?: InputMaybe<TaskGeneratedExportUpdateConnectionInput>;
  where?: InputMaybe<TaskGeneratedExportConnectionWhere>;
};

export type TaskMinioUploadGeneratedExportAggregationSelection = {
  __typename?: 'TaskMinioUploadGeneratedExportAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TaskMinioUploadGeneratedExportNodeAggregateSelection>;
};

export type TaskMinioUploadGeneratedExportNodeAggregateSelection = {
  __typename?: 'TaskMinioUploadGeneratedExportNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type TaskOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TaskSort objects to sort Tasks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TaskSort>>;
};

export type TaskRawDatasetFromRawDatasetAggregationSelection = {
  __typename?: 'TaskRawDatasetFromRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TaskRawDatasetFromRawDatasetNodeAggregateSelection>;
};

export type TaskRawDatasetFromRawDatasetNodeAggregateSelection = {
  __typename?: 'TaskRawDatasetFromRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type TaskRelationInput = {
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetCreateFieldInput>;
  fromRawDataset?: InputMaybe<TaskFromRawDatasetCreateFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetCreateFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportCreateFieldInput>;
};

/** Fields to sort Tasks by. The order in which sorts are applied is not guaranteed when specifying many fields in one TaskSort object. */
export type TaskSort = {
  creationTime?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  taskID?: InputMaybe<SortDirection>;
};

export type TaskTaskFromCuratedDatasetAggregationSelection = {
  __typename?: 'TaskTaskFromCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TaskTaskFromCuratedDatasetNodeAggregateSelection>;
};

export type TaskTaskFromCuratedDatasetNodeAggregateSelection = {
  __typename?: 'TaskTaskFromCuratedDatasetNodeAggregateSelection';
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type TaskUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationTime?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetUpdateFieldInput>;
  fromRawDataset?: InputMaybe<TaskFromRawDatasetUpdateFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetUpdateFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportUpdateFieldInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<FunnelState>;
  taskID?: InputMaybe<Scalars['ID']>;
};

export type TaskWhere = {
  AND?: InputMaybe<Array<TaskWhere>>;
  OR?: InputMaybe<Array<TaskWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  creationTime?: InputMaybe<Scalars['String']>;
  creationTime_CONTAINS?: InputMaybe<Scalars['String']>;
  creationTime_ENDS_WITH?: InputMaybe<Scalars['String']>;
  creationTime_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationTime_NOT?: InputMaybe<Scalars['String']>;
  creationTime_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  creationTime_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  creationTime_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationTime_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  creationTime_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  fromCuratedDataset?: InputMaybe<TaskWhere>;
  fromCuratedDatasetAggregate?: InputMaybe<TaskFromCuratedDatasetAggregateInput>;
  fromCuratedDatasetConnection?: InputMaybe<TaskFromCuratedDatasetConnectionWhere>;
  fromCuratedDatasetConnection_NOT?: InputMaybe<TaskFromCuratedDatasetConnectionWhere>;
  fromCuratedDataset_NOT?: InputMaybe<TaskWhere>;
  fromRawDataset?: InputMaybe<RawDatasetWhere>;
  fromRawDatasetAggregate?: InputMaybe<TaskFromRawDatasetAggregateInput>;
  fromRawDatasetConnection?: InputMaybe<TaskFromRawDatasetConnectionWhere>;
  fromRawDatasetConnection_NOT?: InputMaybe<TaskFromRawDatasetConnectionWhere>;
  fromRawDataset_NOT?: InputMaybe<RawDatasetWhere>;
  generatedCuratedDataset?: InputMaybe<CuratedDatasetWhere>;
  generatedCuratedDatasetAggregate?: InputMaybe<TaskGeneratedCuratedDatasetAggregateInput>;
  generatedCuratedDatasetConnection?: InputMaybe<TaskGeneratedCuratedDatasetConnectionWhere>;
  generatedCuratedDatasetConnection_NOT?: InputMaybe<TaskGeneratedCuratedDatasetConnectionWhere>;
  generatedCuratedDataset_NOT?: InputMaybe<CuratedDatasetWhere>;
  generatedExport?: InputMaybe<MinioUploadWhere>;
  generatedExportAggregate?: InputMaybe<TaskGeneratedExportAggregateInput>;
  generatedExportConnection?: InputMaybe<TaskGeneratedExportConnectionWhere>;
  generatedExportConnection_NOT?: InputMaybe<TaskGeneratedExportConnectionWhere>;
  generatedExport_NOT?: InputMaybe<MinioUploadWhere>;
  id?: InputMaybe<Scalars['String']>;
  id_CONTAINS?: InputMaybe<Scalars['String']>;
  id_ENDS_WITH?: InputMaybe<Scalars['String']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_NOT?: InputMaybe<Scalars['String']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<FunnelState>;
  state_IN?: InputMaybe<Array<InputMaybe<FunnelState>>>;
  state_NOT?: InputMaybe<FunnelState>;
  state_NOT_IN?: InputMaybe<Array<InputMaybe<FunnelState>>>;
  taskID?: InputMaybe<Scalars['ID']>;
  taskID_CONTAINS?: InputMaybe<Scalars['ID']>;
  taskID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  taskID_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  taskID_NOT?: InputMaybe<Scalars['ID']>;
  taskID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  taskID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  taskID_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  taskID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  taskID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
};

export type TasksConnection = {
  __typename?: 'TasksConnection';
  edges: Array<TaskEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UpdateClientRolesMutationResponse = {
  __typename?: 'UpdateClientRolesMutationResponse';
  clientRoles: Array<ClientRole>;
  info: UpdateInfo;
};

export type UpdateClientUsersMutationResponse = {
  __typename?: 'UpdateClientUsersMutationResponse';
  clientUsers: Array<ClientUser>;
  info: UpdateInfo;
};

export type UpdateClientsMutationResponse = {
  __typename?: 'UpdateClientsMutationResponse';
  clients: Array<Client>;
  info: UpdateInfo;
};

export type UpdateCuratedDatasetsMutationResponse = {
  __typename?: 'UpdateCuratedDatasetsMutationResponse';
  curatedDatasets: Array<CuratedDataset>;
  info: UpdateInfo;
};

export type UpdateDataVariableFieldDefinitionsMutationResponse = {
  __typename?: 'UpdateDataVariableFieldDefinitionsMutationResponse';
  dataVariableFieldDefinitions: Array<DataVariableFieldDefinition>;
  info: UpdateInfo;
};

export type UpdateDataVariableFieldsMutationResponse = {
  __typename?: 'UpdateDataVariableFieldsMutationResponse';
  dataVariableFields: Array<DataVariableField>;
  info: UpdateInfo;
};

export type UpdateDataVariableValuesMutationResponse = {
  __typename?: 'UpdateDataVariableValuesMutationResponse';
  dataVariableValues: Array<DataVariableValue>;
  info: UpdateInfo;
};

export type UpdateDataVariablesMutationResponse = {
  __typename?: 'UpdateDataVariablesMutationResponse';
  dataVariables: Array<DataVariable>;
  info: UpdateInfo;
};

export type UpdateFileValidationsMutationResponse = {
  __typename?: 'UpdateFileValidationsMutationResponse';
  fileValidations: Array<FileValidation>;
  info: UpdateInfo;
};

export type UpdateGeographyCitiesMutationResponse = {
  __typename?: 'UpdateGeographyCitiesMutationResponse';
  geographyCities: Array<GeographyCity>;
  info: UpdateInfo;
};

export type UpdateHarmonizedDatasetsMutationResponse = {
  __typename?: 'UpdateHarmonizedDatasetsMutationResponse';
  harmonizedDatasets: Array<HarmonizedDataset>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateKeycloakUsersMutationResponse = {
  __typename?: 'UpdateKeycloakUsersMutationResponse';
  info: UpdateInfo;
  keycloakUsers: Array<KeycloakUser>;
};

export type UpdateMinioBucketsMutationResponse = {
  __typename?: 'UpdateMinioBucketsMutationResponse';
  info: UpdateInfo;
  minioBuckets: Array<MinioBucket>;
};

export type UpdateMinioUploadsMutationResponse = {
  __typename?: 'UpdateMinioUploadsMutationResponse';
  info: UpdateInfo;
  minioUploads: Array<MinioUpload>;
};

export type UpdateMismatchesMutationResponse = {
  __typename?: 'UpdateMismatchesMutationResponse';
  info: UpdateInfo;
  mismatches: Array<Mismatch>;
};

export type UpdateNeo4JUpdateStatsMutationResponse = {
  __typename?: 'UpdateNeo4JUpdateStatsMutationResponse';
  info: UpdateInfo;
  neo4JUpdateStats: Array<Neo4jUpdateStats>;
};

export type UpdateOntologiesMutationResponse = {
  __typename?: 'UpdateOntologiesMutationResponse';
  info: UpdateInfo;
  ontologies: Array<Ontology>;
};

export type UpdateOntologyClassesMutationResponse = {
  __typename?: 'UpdateOntologyClassesMutationResponse';
  info: UpdateInfo;
  ontologyClasses: Array<OntologyClass>;
};

export type UpdateOntologyRelationsMutationResponse = {
  __typename?: 'UpdateOntologyRelationsMutationResponse';
  info: UpdateInfo;
  ontologyRelations: Array<OntologyRelation>;
};

export type UpdateRawDatasetsMutationResponse = {
  __typename?: 'UpdateRawDatasetsMutationResponse';
  info: UpdateInfo;
  rawDatasets: Array<RawDataset>;
};

export type UpdateStudiesMutationResponse = {
  __typename?: 'UpdateStudiesMutationResponse';
  info: UpdateInfo;
  studies: Array<Study>;
};

export type UpdateTasksMutationResponse = {
  __typename?: 'UpdateTasksMutationResponse';
  info: UpdateInfo;
  tasks: Array<Task>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CalendarHeatmapDatum: ResolverTypeWrapper<CalendarHeatmapDatum>;
  Client: ResolverTypeWrapper<Client>;
  ClientAggregateSelection: ResolverTypeWrapper<ClientAggregateSelection>;
  ClientCreateInput: ClientCreateInput;
  ClientEdge: ResolverTypeWrapper<ClientEdge>;
  ClientOptions: ClientOptions;
  ClientRole: ResolverTypeWrapper<ClientRole>;
  ClientRoleAggregateSelection: ResolverTypeWrapper<ClientRoleAggregateSelection>;
  ClientRoleCreateInput: ClientRoleCreateInput;
  ClientRoleEdge: ResolverTypeWrapper<ClientRoleEdge>;
  ClientRoleOptions: ClientRoleOptions;
  ClientRoleSort: ClientRoleSort;
  ClientRoleUpdateInput: ClientRoleUpdateInput;
  ClientRoleWhere: ClientRoleWhere;
  ClientRolesConnection: ResolverTypeWrapper<ClientRolesConnection>;
  ClientSort: ClientSort;
  ClientUpdateInput: ClientUpdateInput;
  ClientUser: ResolverTypeWrapper<ClientUser>;
  ClientUserAggregateSelection: ResolverTypeWrapper<ClientUserAggregateSelection>;
  ClientUserCreateInput: ClientUserCreateInput;
  ClientUserEdge: ResolverTypeWrapper<ClientUserEdge>;
  ClientUserOptions: ClientUserOptions;
  ClientUserSort: ClientUserSort;
  ClientUserUpdateInput: ClientUserUpdateInput;
  ClientUserWhere: ClientUserWhere;
  ClientUsersConnection: ResolverTypeWrapper<ClientUsersConnection>;
  ClientWhere: ClientWhere;
  ClientsConnection: ResolverTypeWrapper<ClientsConnection>;
  CreateClientRolesMutationResponse: ResolverTypeWrapper<CreateClientRolesMutationResponse>;
  CreateClientUsersMutationResponse: ResolverTypeWrapper<CreateClientUsersMutationResponse>;
  CreateClientsMutationResponse: ResolverTypeWrapper<CreateClientsMutationResponse>;
  CreateCuratedDatasetsMutationResponse: ResolverTypeWrapper<CreateCuratedDatasetsMutationResponse>;
  CreateDataVariableFieldDefinitionsMutationResponse: ResolverTypeWrapper<CreateDataVariableFieldDefinitionsMutationResponse>;
  CreateDataVariableFieldsMutationResponse: ResolverTypeWrapper<CreateDataVariableFieldsMutationResponse>;
  CreateDataVariableValuesMutationResponse: ResolverTypeWrapper<CreateDataVariableValuesMutationResponse>;
  CreateDataVariablesMutationResponse: ResolverTypeWrapper<CreateDataVariablesMutationResponse>;
  CreateFileValidationsMutationResponse: ResolverTypeWrapper<CreateFileValidationsMutationResponse>;
  CreateGeographyCitiesMutationResponse: ResolverTypeWrapper<CreateGeographyCitiesMutationResponse>;
  CreateHarmonizedDatasetsMutationResponse: ResolverTypeWrapper<CreateHarmonizedDatasetsMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateKeycloakUsersMutationResponse: ResolverTypeWrapper<CreateKeycloakUsersMutationResponse>;
  CreateMinioBucketsMutationResponse: ResolverTypeWrapper<CreateMinioBucketsMutationResponse>;
  CreateMinioUploadsMutationResponse: ResolverTypeWrapper<CreateMinioUploadsMutationResponse>;
  CreateMismatchesMutationResponse: ResolverTypeWrapper<CreateMismatchesMutationResponse>;
  CreateNeo4JUpdateStatsMutationResponse: ResolverTypeWrapper<CreateNeo4JUpdateStatsMutationResponse>;
  CreateOntologiesMutationResponse: ResolverTypeWrapper<CreateOntologiesMutationResponse>;
  CreateOntologyClassesMutationResponse: ResolverTypeWrapper<CreateOntologyClassesMutationResponse>;
  CreateOntologyRelationsMutationResponse: ResolverTypeWrapper<CreateOntologyRelationsMutationResponse>;
  CreateRawDatasetsMutationResponse: ResolverTypeWrapper<CreateRawDatasetsMutationResponse>;
  CreateStudiesMutationResponse: ResolverTypeWrapper<CreateStudiesMutationResponse>;
  CreateTasksMutationResponse: ResolverTypeWrapper<CreateTasksMutationResponse>;
  CuratedDataset: ResolverTypeWrapper<CuratedDataset>;
  CuratedDatasetAggregateSelection: ResolverTypeWrapper<CuratedDatasetAggregateSelection>;
  CuratedDatasetConnectInput: CuratedDatasetConnectInput;
  CuratedDatasetConnectOrCreateInput: CuratedDatasetConnectOrCreateInput;
  CuratedDatasetConnectOrCreateWhere: CuratedDatasetConnectOrCreateWhere;
  CuratedDatasetConnectWhere: CuratedDatasetConnectWhere;
  CuratedDatasetCreateInput: CuratedDatasetCreateInput;
  CuratedDatasetDataVariableDataVariablesAggregationSelection: ResolverTypeWrapper<CuratedDatasetDataVariableDataVariablesAggregationSelection>;
  CuratedDatasetDataVariableDataVariablesNodeAggregateSelection: ResolverTypeWrapper<CuratedDatasetDataVariableDataVariablesNodeAggregateSelection>;
  CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection: ResolverTypeWrapper<CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection>;
  CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection: ResolverTypeWrapper<CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection>;
  CuratedDatasetDataVariablesAggregateInput: CuratedDatasetDataVariablesAggregateInput;
  CuratedDatasetDataVariablesConnectFieldInput: CuratedDatasetDataVariablesConnectFieldInput;
  CuratedDatasetDataVariablesConnectOrCreateFieldInput: CuratedDatasetDataVariablesConnectOrCreateFieldInput;
  CuratedDatasetDataVariablesConnectOrCreateFieldInputOnCreate: CuratedDatasetDataVariablesConnectOrCreateFieldInputOnCreate;
  CuratedDatasetDataVariablesConnection: ResolverTypeWrapper<CuratedDatasetDataVariablesConnection>;
  CuratedDatasetDataVariablesConnectionSort: CuratedDatasetDataVariablesConnectionSort;
  CuratedDatasetDataVariablesConnectionWhere: CuratedDatasetDataVariablesConnectionWhere;
  CuratedDatasetDataVariablesCreateFieldInput: CuratedDatasetDataVariablesCreateFieldInput;
  CuratedDatasetDataVariablesDeleteFieldInput: CuratedDatasetDataVariablesDeleteFieldInput;
  CuratedDatasetDataVariablesDisconnectFieldInput: CuratedDatasetDataVariablesDisconnectFieldInput;
  CuratedDatasetDataVariablesFieldInput: CuratedDatasetDataVariablesFieldInput;
  CuratedDatasetDataVariablesNodeAggregationWhereInput: CuratedDatasetDataVariablesNodeAggregationWhereInput;
  CuratedDatasetDataVariablesRelationship: ResolverTypeWrapper<CuratedDatasetDataVariablesRelationship>;
  CuratedDatasetDataVariablesUpdateConnectionInput: CuratedDatasetDataVariablesUpdateConnectionInput;
  CuratedDatasetDataVariablesUpdateFieldInput: CuratedDatasetDataVariablesUpdateFieldInput;
  CuratedDatasetDeleteInput: CuratedDatasetDeleteInput;
  CuratedDatasetDisconnectInput: CuratedDatasetDisconnectInput;
  CuratedDatasetEdge: ResolverTypeWrapper<CuratedDatasetEdge>;
  CuratedDatasetExportTaskAggregateInput: CuratedDatasetExportTaskAggregateInput;
  CuratedDatasetExportTaskConnectFieldInput: CuratedDatasetExportTaskConnectFieldInput;
  CuratedDatasetExportTaskConnection: ResolverTypeWrapper<CuratedDatasetExportTaskConnection>;
  CuratedDatasetExportTaskConnectionSort: CuratedDatasetExportTaskConnectionSort;
  CuratedDatasetExportTaskConnectionWhere: CuratedDatasetExportTaskConnectionWhere;
  CuratedDatasetExportTaskCreateFieldInput: CuratedDatasetExportTaskCreateFieldInput;
  CuratedDatasetExportTaskDeleteFieldInput: CuratedDatasetExportTaskDeleteFieldInput;
  CuratedDatasetExportTaskDisconnectFieldInput: CuratedDatasetExportTaskDisconnectFieldInput;
  CuratedDatasetExportTaskFieldInput: CuratedDatasetExportTaskFieldInput;
  CuratedDatasetExportTaskNodeAggregationWhereInput: CuratedDatasetExportTaskNodeAggregationWhereInput;
  CuratedDatasetExportTaskRelationship: ResolverTypeWrapper<CuratedDatasetExportTaskRelationship>;
  CuratedDatasetExportTaskUpdateConnectionInput: CuratedDatasetExportTaskUpdateConnectionInput;
  CuratedDatasetExportTaskUpdateFieldInput: CuratedDatasetExportTaskUpdateFieldInput;
  CuratedDatasetFieldDefinitionsAggregateInput: CuratedDatasetFieldDefinitionsAggregateInput;
  CuratedDatasetFieldDefinitionsConnectFieldInput: CuratedDatasetFieldDefinitionsConnectFieldInput;
  CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput: CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput;
  CuratedDatasetFieldDefinitionsConnectOrCreateFieldInputOnCreate: CuratedDatasetFieldDefinitionsConnectOrCreateFieldInputOnCreate;
  CuratedDatasetFieldDefinitionsConnection: ResolverTypeWrapper<CuratedDatasetFieldDefinitionsConnection>;
  CuratedDatasetFieldDefinitionsConnectionSort: CuratedDatasetFieldDefinitionsConnectionSort;
  CuratedDatasetFieldDefinitionsConnectionWhere: CuratedDatasetFieldDefinitionsConnectionWhere;
  CuratedDatasetFieldDefinitionsCreateFieldInput: CuratedDatasetFieldDefinitionsCreateFieldInput;
  CuratedDatasetFieldDefinitionsDeleteFieldInput: CuratedDatasetFieldDefinitionsDeleteFieldInput;
  CuratedDatasetFieldDefinitionsDisconnectFieldInput: CuratedDatasetFieldDefinitionsDisconnectFieldInput;
  CuratedDatasetFieldDefinitionsFieldInput: CuratedDatasetFieldDefinitionsFieldInput;
  CuratedDatasetFieldDefinitionsNodeAggregationWhereInput: CuratedDatasetFieldDefinitionsNodeAggregationWhereInput;
  CuratedDatasetFieldDefinitionsRelationship: ResolverTypeWrapper<CuratedDatasetFieldDefinitionsRelationship>;
  CuratedDatasetFieldDefinitionsUpdateConnectionInput: CuratedDatasetFieldDefinitionsUpdateConnectionInput;
  CuratedDatasetFieldDefinitionsUpdateFieldInput: CuratedDatasetFieldDefinitionsUpdateFieldInput;
  CuratedDatasetFunnelTaskAggregateInput: CuratedDatasetFunnelTaskAggregateInput;
  CuratedDatasetFunnelTaskConnectFieldInput: CuratedDatasetFunnelTaskConnectFieldInput;
  CuratedDatasetFunnelTaskConnection: ResolverTypeWrapper<CuratedDatasetFunnelTaskConnection>;
  CuratedDatasetFunnelTaskConnectionSort: CuratedDatasetFunnelTaskConnectionSort;
  CuratedDatasetFunnelTaskConnectionWhere: CuratedDatasetFunnelTaskConnectionWhere;
  CuratedDatasetFunnelTaskCreateFieldInput: CuratedDatasetFunnelTaskCreateFieldInput;
  CuratedDatasetFunnelTaskDeleteFieldInput: CuratedDatasetFunnelTaskDeleteFieldInput;
  CuratedDatasetFunnelTaskDisconnectFieldInput: CuratedDatasetFunnelTaskDisconnectFieldInput;
  CuratedDatasetFunnelTaskFieldInput: CuratedDatasetFunnelTaskFieldInput;
  CuratedDatasetFunnelTaskNodeAggregationWhereInput: CuratedDatasetFunnelTaskNodeAggregationWhereInput;
  CuratedDatasetFunnelTaskRelationship: ResolverTypeWrapper<CuratedDatasetFunnelTaskRelationship>;
  CuratedDatasetFunnelTaskUpdateConnectionInput: CuratedDatasetFunnelTaskUpdateConnectionInput;
  CuratedDatasetFunnelTaskUpdateFieldInput: CuratedDatasetFunnelTaskUpdateFieldInput;
  CuratedDatasetGeneratedByRawDatasetAggregateInput: CuratedDatasetGeneratedByRawDatasetAggregateInput;
  CuratedDatasetGeneratedByRawDatasetConnectFieldInput: CuratedDatasetGeneratedByRawDatasetConnectFieldInput;
  CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput: CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput;
  CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInputOnCreate: CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInputOnCreate;
  CuratedDatasetGeneratedByRawDatasetConnection: ResolverTypeWrapper<CuratedDatasetGeneratedByRawDatasetConnection>;
  CuratedDatasetGeneratedByRawDatasetConnectionSort: CuratedDatasetGeneratedByRawDatasetConnectionSort;
  CuratedDatasetGeneratedByRawDatasetConnectionWhere: CuratedDatasetGeneratedByRawDatasetConnectionWhere;
  CuratedDatasetGeneratedByRawDatasetCreateFieldInput: CuratedDatasetGeneratedByRawDatasetCreateFieldInput;
  CuratedDatasetGeneratedByRawDatasetDeleteFieldInput: CuratedDatasetGeneratedByRawDatasetDeleteFieldInput;
  CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput: CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput;
  CuratedDatasetGeneratedByRawDatasetFieldInput: CuratedDatasetGeneratedByRawDatasetFieldInput;
  CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput: CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput;
  CuratedDatasetGeneratedByRawDatasetRelationship: ResolverTypeWrapper<CuratedDatasetGeneratedByRawDatasetRelationship>;
  CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput: CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput;
  CuratedDatasetGeneratedByRawDatasetUpdateFieldInput: CuratedDatasetGeneratedByRawDatasetUpdateFieldInput;
  CuratedDatasetOnCreateInput: CuratedDatasetOnCreateInput;
  CuratedDatasetOptions: CuratedDatasetOptions;
  CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection: ResolverTypeWrapper<CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection>;
  CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection: ResolverTypeWrapper<CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection>;
  CuratedDatasetRelationInput: CuratedDatasetRelationInput;
  CuratedDatasetSort: CuratedDatasetSort;
  CuratedDatasetTaskExportTaskAggregationSelection: ResolverTypeWrapper<CuratedDatasetTaskExportTaskAggregationSelection>;
  CuratedDatasetTaskExportTaskNodeAggregateSelection: ResolverTypeWrapper<CuratedDatasetTaskExportTaskNodeAggregateSelection>;
  CuratedDatasetTaskFunnelTaskAggregationSelection: ResolverTypeWrapper<CuratedDatasetTaskFunnelTaskAggregationSelection>;
  CuratedDatasetTaskFunnelTaskNodeAggregateSelection: ResolverTypeWrapper<CuratedDatasetTaskFunnelTaskNodeAggregateSelection>;
  CuratedDatasetUniqueWhere: CuratedDatasetUniqueWhere;
  CuratedDatasetUpdateInput: CuratedDatasetUpdateInput;
  CuratedDatasetWhere: CuratedDatasetWhere;
  CuratedDatasetsConnection: ResolverTypeWrapper<CuratedDatasetsConnection>;
  DataVariable: ResolverTypeWrapper<DataVariable>;
  DataVariableAggregateSelection: ResolverTypeWrapper<DataVariableAggregateSelection>;
  DataVariableConnectInput: DataVariableConnectInput;
  DataVariableConnectOrCreateInput: DataVariableConnectOrCreateInput;
  DataVariableConnectOrCreateWhere: DataVariableConnectOrCreateWhere;
  DataVariableConnectWhere: DataVariableConnectWhere;
  DataVariableCreateInput: DataVariableCreateInput;
  DataVariableCuratedDatasetAggregateInput: DataVariableCuratedDatasetAggregateInput;
  DataVariableCuratedDatasetConnectFieldInput: DataVariableCuratedDatasetConnectFieldInput;
  DataVariableCuratedDatasetConnectOrCreateFieldInput: DataVariableCuratedDatasetConnectOrCreateFieldInput;
  DataVariableCuratedDatasetConnectOrCreateFieldInputOnCreate: DataVariableCuratedDatasetConnectOrCreateFieldInputOnCreate;
  DataVariableCuratedDatasetConnection: ResolverTypeWrapper<DataVariableCuratedDatasetConnection>;
  DataVariableCuratedDatasetConnectionSort: DataVariableCuratedDatasetConnectionSort;
  DataVariableCuratedDatasetConnectionWhere: DataVariableCuratedDatasetConnectionWhere;
  DataVariableCuratedDatasetCreateFieldInput: DataVariableCuratedDatasetCreateFieldInput;
  DataVariableCuratedDatasetCuratedDatasetAggregationSelection: ResolverTypeWrapper<DataVariableCuratedDatasetCuratedDatasetAggregationSelection>;
  DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection: ResolverTypeWrapper<DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection>;
  DataVariableCuratedDatasetDeleteFieldInput: DataVariableCuratedDatasetDeleteFieldInput;
  DataVariableCuratedDatasetDisconnectFieldInput: DataVariableCuratedDatasetDisconnectFieldInput;
  DataVariableCuratedDatasetFieldInput: DataVariableCuratedDatasetFieldInput;
  DataVariableCuratedDatasetNodeAggregationWhereInput: DataVariableCuratedDatasetNodeAggregationWhereInput;
  DataVariableCuratedDatasetRelationship: ResolverTypeWrapper<DataVariableCuratedDatasetRelationship>;
  DataVariableCuratedDatasetUpdateConnectionInput: DataVariableCuratedDatasetUpdateConnectionInput;
  DataVariableCuratedDatasetUpdateFieldInput: DataVariableCuratedDatasetUpdateFieldInput;
  DataVariableDataVariableFieldFieldsAggregationSelection: ResolverTypeWrapper<DataVariableDataVariableFieldFieldsAggregationSelection>;
  DataVariableDataVariableFieldFieldsNodeAggregateSelection: ResolverTypeWrapper<DataVariableDataVariableFieldFieldsNodeAggregateSelection>;
  DataVariableDeleteInput: DataVariableDeleteInput;
  DataVariableDisconnectInput: DataVariableDisconnectInput;
  DataVariableEdge: ResolverTypeWrapper<DataVariableEdge>;
  DataVariableField: ResolverTypeWrapper<DataVariableField>;
  DataVariableFieldAggregateSelection: ResolverTypeWrapper<DataVariableFieldAggregateSelection>;
  DataVariableFieldConnectInput: DataVariableFieldConnectInput;
  DataVariableFieldConnectOrCreateInput: DataVariableFieldConnectOrCreateInput;
  DataVariableFieldConnectOrCreateWhere: DataVariableFieldConnectOrCreateWhere;
  DataVariableFieldConnectWhere: DataVariableFieldConnectWhere;
  DataVariableFieldCreateInput: DataVariableFieldCreateInput;
  DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection: ResolverTypeWrapper<DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection>;
  DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection: ResolverTypeWrapper<DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection>;
  DataVariableFieldDefinition: ResolverTypeWrapper<DataVariableFieldDefinition>;
  DataVariableFieldDefinitionAggregateSelection: ResolverTypeWrapper<DataVariableFieldDefinitionAggregateSelection>;
  DataVariableFieldDefinitionConnectInput: DataVariableFieldDefinitionConnectInput;
  DataVariableFieldDefinitionConnectOrCreateInput: DataVariableFieldDefinitionConnectOrCreateInput;
  DataVariableFieldDefinitionConnectOrCreateWhere: DataVariableFieldDefinitionConnectOrCreateWhere;
  DataVariableFieldDefinitionConnectWhere: DataVariableFieldDefinitionConnectWhere;
  DataVariableFieldDefinitionCreateInput: DataVariableFieldDefinitionCreateInput;
  DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection: ResolverTypeWrapper<DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection>;
  DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection: ResolverTypeWrapper<DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection>;
  DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection: ResolverTypeWrapper<DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection>;
  DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection: ResolverTypeWrapper<DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection>;
  DataVariableFieldDefinitionDeleteInput: DataVariableFieldDefinitionDeleteInput;
  DataVariableFieldDefinitionDisconnectInput: DataVariableFieldDefinitionDisconnectInput;
  DataVariableFieldDefinitionEdge: ResolverTypeWrapper<DataVariableFieldDefinitionEdge>;
  DataVariableFieldDefinitionHasCuratedDatasetAggregateInput: DataVariableFieldDefinitionHasCuratedDatasetAggregateInput;
  DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput: DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput: DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInputOnCreate: DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInputOnCreate;
  DataVariableFieldDefinitionHasCuratedDatasetConnection: ResolverTypeWrapper<DataVariableFieldDefinitionHasCuratedDatasetConnection>;
  DataVariableFieldDefinitionHasCuratedDatasetConnectionSort: DataVariableFieldDefinitionHasCuratedDatasetConnectionSort;
  DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere: DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere;
  DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput: DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput: DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput: DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetFieldInput: DataVariableFieldDefinitionHasCuratedDatasetFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput: DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput;
  DataVariableFieldDefinitionHasCuratedDatasetRelationship: ResolverTypeWrapper<DataVariableFieldDefinitionHasCuratedDatasetRelationship>;
  DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput: DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput;
  DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput: DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput;
  DataVariableFieldDefinitionHasFieldValuesAggregateInput: DataVariableFieldDefinitionHasFieldValuesAggregateInput;
  DataVariableFieldDefinitionHasFieldValuesConnectFieldInput: DataVariableFieldDefinitionHasFieldValuesConnectFieldInput;
  DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput: DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput;
  DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInputOnCreate: DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInputOnCreate;
  DataVariableFieldDefinitionHasFieldValuesConnection: ResolverTypeWrapper<DataVariableFieldDefinitionHasFieldValuesConnection>;
  DataVariableFieldDefinitionHasFieldValuesConnectionSort: DataVariableFieldDefinitionHasFieldValuesConnectionSort;
  DataVariableFieldDefinitionHasFieldValuesConnectionWhere: DataVariableFieldDefinitionHasFieldValuesConnectionWhere;
  DataVariableFieldDefinitionHasFieldValuesCreateFieldInput: DataVariableFieldDefinitionHasFieldValuesCreateFieldInput;
  DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput: DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput;
  DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput: DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput;
  DataVariableFieldDefinitionHasFieldValuesFieldInput: DataVariableFieldDefinitionHasFieldValuesFieldInput;
  DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput: DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput;
  DataVariableFieldDefinitionHasFieldValuesRelationship: ResolverTypeWrapper<DataVariableFieldDefinitionHasFieldValuesRelationship>;
  DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput: DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput;
  DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput: DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput;
  DataVariableFieldDefinitionOnCreateInput: DataVariableFieldDefinitionOnCreateInput;
  DataVariableFieldDefinitionOptions: DataVariableFieldDefinitionOptions;
  DataVariableFieldDefinitionRelationInput: DataVariableFieldDefinitionRelationInput;
  DataVariableFieldDefinitionSort: DataVariableFieldDefinitionSort;
  DataVariableFieldDefinitionUniqueWhere: DataVariableFieldDefinitionUniqueWhere;
  DataVariableFieldDefinitionUpdateInput: DataVariableFieldDefinitionUpdateInput;
  DataVariableFieldDefinitionWhere: DataVariableFieldDefinitionWhere;
  DataVariableFieldDefinitionsConnection: ResolverTypeWrapper<DataVariableFieldDefinitionsConnection>;
  DataVariableFieldDeleteInput: DataVariableFieldDeleteInput;
  DataVariableFieldDisconnectInput: DataVariableFieldDisconnectInput;
  DataVariableFieldEdge: ResolverTypeWrapper<DataVariableFieldEdge>;
  DataVariableFieldHasFieldDefinitionAggregateInput: DataVariableFieldHasFieldDefinitionAggregateInput;
  DataVariableFieldHasFieldDefinitionConnectFieldInput: DataVariableFieldHasFieldDefinitionConnectFieldInput;
  DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput: DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput;
  DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInputOnCreate: DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInputOnCreate;
  DataVariableFieldHasFieldDefinitionConnection: ResolverTypeWrapper<DataVariableFieldHasFieldDefinitionConnection>;
  DataVariableFieldHasFieldDefinitionConnectionSort: DataVariableFieldHasFieldDefinitionConnectionSort;
  DataVariableFieldHasFieldDefinitionConnectionWhere: DataVariableFieldHasFieldDefinitionConnectionWhere;
  DataVariableFieldHasFieldDefinitionCreateFieldInput: DataVariableFieldHasFieldDefinitionCreateFieldInput;
  DataVariableFieldHasFieldDefinitionDeleteFieldInput: DataVariableFieldHasFieldDefinitionDeleteFieldInput;
  DataVariableFieldHasFieldDefinitionDisconnectFieldInput: DataVariableFieldHasFieldDefinitionDisconnectFieldInput;
  DataVariableFieldHasFieldDefinitionFieldInput: DataVariableFieldHasFieldDefinitionFieldInput;
  DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput: DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput;
  DataVariableFieldHasFieldDefinitionRelationship: ResolverTypeWrapper<DataVariableFieldHasFieldDefinitionRelationship>;
  DataVariableFieldHasFieldDefinitionUpdateConnectionInput: DataVariableFieldHasFieldDefinitionUpdateConnectionInput;
  DataVariableFieldHasFieldDefinitionUpdateFieldInput: DataVariableFieldHasFieldDefinitionUpdateFieldInput;
  DataVariableFieldOnCreateInput: DataVariableFieldOnCreateInput;
  DataVariableFieldOptions: DataVariableFieldOptions;
  DataVariableFieldRelationInput: DataVariableFieldRelationInput;
  DataVariableFieldSort: DataVariableFieldSort;
  DataVariableFieldUniqueWhere: DataVariableFieldUniqueWhere;
  DataVariableFieldUpdateInput: DataVariableFieldUpdateInput;
  DataVariableFieldWhere: DataVariableFieldWhere;
  DataVariableFieldsAggregateInput: DataVariableFieldsAggregateInput;
  DataVariableFieldsConnectFieldInput: DataVariableFieldsConnectFieldInput;
  DataVariableFieldsConnectOrCreateFieldInput: DataVariableFieldsConnectOrCreateFieldInput;
  DataVariableFieldsConnectOrCreateFieldInputOnCreate: DataVariableFieldsConnectOrCreateFieldInputOnCreate;
  DataVariableFieldsConnection: ResolverTypeWrapper<DataVariableFieldsConnection>;
  DataVariableFieldsConnectionSort: DataVariableFieldsConnectionSort;
  DataVariableFieldsConnectionWhere: DataVariableFieldsConnectionWhere;
  DataVariableFieldsCreateFieldInput: DataVariableFieldsCreateFieldInput;
  DataVariableFieldsDeleteFieldInput: DataVariableFieldsDeleteFieldInput;
  DataVariableFieldsDisconnectFieldInput: DataVariableFieldsDisconnectFieldInput;
  DataVariableFieldsFieldInput: DataVariableFieldsFieldInput;
  DataVariableFieldsNodeAggregationWhereInput: DataVariableFieldsNodeAggregationWhereInput;
  DataVariableFieldsRelationship: ResolverTypeWrapper<DataVariableFieldsRelationship>;
  DataVariableFieldsUpdateConnectionInput: DataVariableFieldsUpdateConnectionInput;
  DataVariableFieldsUpdateFieldInput: DataVariableFieldsUpdateFieldInput;
  DataVariableOnCreateInput: DataVariableOnCreateInput;
  DataVariableOptions: DataVariableOptions;
  DataVariableRelationInput: DataVariableRelationInput;
  DataVariableSort: DataVariableSort;
  DataVariableUniqueWhere: DataVariableUniqueWhere;
  DataVariableUpdateInput: DataVariableUpdateInput;
  DataVariableValue: ResolverTypeWrapper<DataVariableValue>;
  DataVariableValueAggregateSelection: ResolverTypeWrapper<DataVariableValueAggregateSelection>;
  DataVariableValueConnectInput: DataVariableValueConnectInput;
  DataVariableValueConnectOrCreateInput: DataVariableValueConnectOrCreateInput;
  DataVariableValueConnectOrCreateWhere: DataVariableValueConnectOrCreateWhere;
  DataVariableValueConnectWhere: DataVariableValueConnectWhere;
  DataVariableValueCreateInput: DataVariableValueCreateInput;
  DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection: ResolverTypeWrapper<DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection>;
  DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection: ResolverTypeWrapper<DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection>;
  DataVariableValueDeleteInput: DataVariableValueDeleteInput;
  DataVariableValueDisconnectInput: DataVariableValueDisconnectInput;
  DataVariableValueEdge: ResolverTypeWrapper<DataVariableValueEdge>;
  DataVariableValueFromFieldDefinitionAggregateInput: DataVariableValueFromFieldDefinitionAggregateInput;
  DataVariableValueFromFieldDefinitionConnectFieldInput: DataVariableValueFromFieldDefinitionConnectFieldInput;
  DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput: DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput;
  DataVariableValueFromFieldDefinitionConnectOrCreateFieldInputOnCreate: DataVariableValueFromFieldDefinitionConnectOrCreateFieldInputOnCreate;
  DataVariableValueFromFieldDefinitionConnection: ResolverTypeWrapper<DataVariableValueFromFieldDefinitionConnection>;
  DataVariableValueFromFieldDefinitionConnectionSort: DataVariableValueFromFieldDefinitionConnectionSort;
  DataVariableValueFromFieldDefinitionConnectionWhere: DataVariableValueFromFieldDefinitionConnectionWhere;
  DataVariableValueFromFieldDefinitionCreateFieldInput: DataVariableValueFromFieldDefinitionCreateFieldInput;
  DataVariableValueFromFieldDefinitionDeleteFieldInput: DataVariableValueFromFieldDefinitionDeleteFieldInput;
  DataVariableValueFromFieldDefinitionDisconnectFieldInput: DataVariableValueFromFieldDefinitionDisconnectFieldInput;
  DataVariableValueFromFieldDefinitionFieldInput: DataVariableValueFromFieldDefinitionFieldInput;
  DataVariableValueFromFieldDefinitionNodeAggregationWhereInput: DataVariableValueFromFieldDefinitionNodeAggregationWhereInput;
  DataVariableValueFromFieldDefinitionRelationship: ResolverTypeWrapper<DataVariableValueFromFieldDefinitionRelationship>;
  DataVariableValueFromFieldDefinitionUpdateConnectionInput: DataVariableValueFromFieldDefinitionUpdateConnectionInput;
  DataVariableValueFromFieldDefinitionUpdateFieldInput: DataVariableValueFromFieldDefinitionUpdateFieldInput;
  DataVariableValueOnCreateInput: DataVariableValueOnCreateInput;
  DataVariableValueOptions: DataVariableValueOptions;
  DataVariableValueRelationInput: DataVariableValueRelationInput;
  DataVariableValueSort: DataVariableValueSort;
  DataVariableValueUniqueWhere: DataVariableValueUniqueWhere;
  DataVariableValueUpdateInput: DataVariableValueUpdateInput;
  DataVariableValueWhere: DataVariableValueWhere;
  DataVariableValuesConnection: ResolverTypeWrapper<DataVariableValuesConnection>;
  DataVariableWhere: DataVariableWhere;
  DataVariablesConnection: ResolverTypeWrapper<DataVariablesConnection>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeAggregateSelectionNonNullable: ResolverTypeWrapper<DateTimeAggregateSelectionNonNullable>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  Email: ResolverTypeWrapper<Scalars['Email']>;
  FileValidation: ResolverTypeWrapper<FileValidation>;
  FileValidationAggregateSelection: ResolverTypeWrapper<FileValidationAggregateSelection>;
  FileValidationCreateInput: FileValidationCreateInput;
  FileValidationEdge: ResolverTypeWrapper<FileValidationEdge>;
  FileValidationOptions: FileValidationOptions;
  FileValidationSort: FileValidationSort;
  FileValidationUpdateInput: FileValidationUpdateInput;
  FileValidationWhere: FileValidationWhere;
  FileValidationsConnection: ResolverTypeWrapper<FileValidationsConnection>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FloatAggregateSelectionNonNullable: ResolverTypeWrapper<FloatAggregateSelectionNonNullable>;
  FunnelState: FunnelState;
  GeographyCitiesConnection: ResolverTypeWrapper<GeographyCitiesConnection>;
  GeographyCity: ResolverTypeWrapper<GeographyCity>;
  GeographyCityAggregateSelection: ResolverTypeWrapper<GeographyCityAggregateSelection>;
  GeographyCityConnectOrCreateWhere: GeographyCityConnectOrCreateWhere;
  GeographyCityConnectWhere: GeographyCityConnectWhere;
  GeographyCityCreateInput: GeographyCityCreateInput;
  GeographyCityEdge: ResolverTypeWrapper<GeographyCityEdge>;
  GeographyCityOnCreateInput: GeographyCityOnCreateInput;
  GeographyCityOptions: GeographyCityOptions;
  GeographyCitySort: GeographyCitySort;
  GeographyCityUniqueWhere: GeographyCityUniqueWhere;
  GeographyCityUpdateInput: GeographyCityUpdateInput;
  GeographyCityWhere: GeographyCityWhere;
  HarmonizedDataset: ResolverTypeWrapper<HarmonizedDataset>;
  HarmonizedDatasetAggregateSelection: ResolverTypeWrapper<HarmonizedDatasetAggregateSelection>;
  HarmonizedDatasetConnectInput: HarmonizedDatasetConnectInput;
  HarmonizedDatasetConnectOrCreateInput: HarmonizedDatasetConnectOrCreateInput;
  HarmonizedDatasetCreateInput: HarmonizedDatasetCreateInput;
  HarmonizedDatasetDeleteInput: HarmonizedDatasetDeleteInput;
  HarmonizedDatasetDisconnectInput: HarmonizedDatasetDisconnectInput;
  HarmonizedDatasetEdge: ResolverTypeWrapper<HarmonizedDatasetEdge>;
  HarmonizedDatasetOptions: HarmonizedDatasetOptions;
  HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection: ResolverTypeWrapper<HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection>;
  HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection: ResolverTypeWrapper<HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection>;
  HarmonizedDatasetRawDatasetsAggregateInput: HarmonizedDatasetRawDatasetsAggregateInput;
  HarmonizedDatasetRawDatasetsConnectFieldInput: HarmonizedDatasetRawDatasetsConnectFieldInput;
  HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput: HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput;
  HarmonizedDatasetRawDatasetsConnectOrCreateFieldInputOnCreate: HarmonizedDatasetRawDatasetsConnectOrCreateFieldInputOnCreate;
  HarmonizedDatasetRawDatasetsConnection: ResolverTypeWrapper<HarmonizedDatasetRawDatasetsConnection>;
  HarmonizedDatasetRawDatasetsConnectionSort: HarmonizedDatasetRawDatasetsConnectionSort;
  HarmonizedDatasetRawDatasetsConnectionWhere: HarmonizedDatasetRawDatasetsConnectionWhere;
  HarmonizedDatasetRawDatasetsCreateFieldInput: HarmonizedDatasetRawDatasetsCreateFieldInput;
  HarmonizedDatasetRawDatasetsDeleteFieldInput: HarmonizedDatasetRawDatasetsDeleteFieldInput;
  HarmonizedDatasetRawDatasetsDisconnectFieldInput: HarmonizedDatasetRawDatasetsDisconnectFieldInput;
  HarmonizedDatasetRawDatasetsFieldInput: HarmonizedDatasetRawDatasetsFieldInput;
  HarmonizedDatasetRawDatasetsNodeAggregationWhereInput: HarmonizedDatasetRawDatasetsNodeAggregationWhereInput;
  HarmonizedDatasetRawDatasetsRelationship: ResolverTypeWrapper<HarmonizedDatasetRawDatasetsRelationship>;
  HarmonizedDatasetRawDatasetsUpdateConnectionInput: HarmonizedDatasetRawDatasetsUpdateConnectionInput;
  HarmonizedDatasetRawDatasetsUpdateFieldInput: HarmonizedDatasetRawDatasetsUpdateFieldInput;
  HarmonizedDatasetRelationInput: HarmonizedDatasetRelationInput;
  HarmonizedDatasetSort: HarmonizedDatasetSort;
  HarmonizedDatasetUpdateInput: HarmonizedDatasetUpdateInput;
  HarmonizedDatasetWhere: HarmonizedDatasetWhere;
  HarmonizedDatasetsConnection: ResolverTypeWrapper<HarmonizedDatasetsConnection>;
  HasCodebook: ResolversTypes['MinioUploadCodeBookRawDatasetRelationship'] | ResolversTypes['RawDatasetCodeBookRelationship'];
  HasCodebookCreateInput: HasCodebookCreateInput;
  HasCodebookSort: HasCodebookSort;
  HasCodebookUpdateInput: HasCodebookUpdateInput;
  HasCodebookWhere: HasCodebookWhere;
  HasPairedCodebook: ResolversTypes['MinioUploadPairedRawdataFileRelationship'];
  HasPairedCodebookCreateInput: HasPairedCodebookCreateInput;
  HasPairedCodebookSort: HasPairedCodebookSort;
  HasPairedCodebookUpdateInput: HasPairedCodebookUpdateInput;
  HasPairedCodebookWhere: HasPairedCodebookWhere;
  HasPairedRawdatafile: ResolversTypes['MinioUploadPairedCodebookRelationship'];
  HasPairedRawdatafileCreateInput: HasPairedRawdatafileCreateInput;
  HasPairedRawdatafileSort: HasPairedRawdatafileSort;
  HasPairedRawdatafileUpdateInput: HasPairedRawdatafileUpdateInput;
  HasPairedRawdatafileWhere: HasPairedRawdatafileWhere;
  HasRawdatafile: ResolversTypes['MinioUploadRawdataFileRawDatasetRelationship'] | ResolversTypes['RawDatasetRawdataFileRelationship'];
  HasRawdatafileCreateInput: HasRawdatafileCreateInput;
  HasRawdatafileSort: HasRawdatafileSort;
  HasRawdatafileUpdateInput: HasRawdatafileUpdateInput;
  HasRawdatafileWhere: HasRawdatafileWhere;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IDAggregateSelectionNonNullable: ResolverTypeWrapper<IdAggregateSelectionNonNullable>;
  IDAggregateSelectionNullable: ResolverTypeWrapper<IdAggregateSelectionNullable>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntAggregateSelectionNullable: ResolverTypeWrapper<IntAggregateSelectionNullable>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  KeycloakSyncOperation: KeycloakSyncOperation;
  KeycloakSyncSet: KeycloakSyncSet;
  KeycloakUser: ResolverTypeWrapper<KeycloakUser>;
  KeycloakUserAggregateSelection: ResolverTypeWrapper<KeycloakUserAggregateSelection>;
  KeycloakUserCreateInput: KeycloakUserCreateInput;
  KeycloakUserEdge: ResolverTypeWrapper<KeycloakUserEdge>;
  KeycloakUserOptions: KeycloakUserOptions;
  KeycloakUserSort: KeycloakUserSort;
  KeycloakUserUpdateInput: KeycloakUserUpdateInput;
  KeycloakUserWhere: KeycloakUserWhere;
  KeycloakUsersConnection: ResolverTypeWrapper<KeycloakUsersConnection>;
  MinioBucket: ResolverTypeWrapper<MinioBucket>;
  MinioBucketAggregateSelection: ResolverTypeWrapper<MinioBucketAggregateSelection>;
  MinioBucketConnectInput: MinioBucketConnectInput;
  MinioBucketConnectOrCreateInput: MinioBucketConnectOrCreateInput;
  MinioBucketConnectWhere: MinioBucketConnectWhere;
  MinioBucketCreateInput: MinioBucketCreateInput;
  MinioBucketDeleteInput: MinioBucketDeleteInput;
  MinioBucketDisconnectInput: MinioBucketDisconnectInput;
  MinioBucketEdge: ResolverTypeWrapper<MinioBucketEdge>;
  MinioBucketMinioObjectsAggregateInput: MinioBucketMinioObjectsAggregateInput;
  MinioBucketMinioObjectsConnectFieldInput: MinioBucketMinioObjectsConnectFieldInput;
  MinioBucketMinioObjectsConnectOrCreateFieldInput: MinioBucketMinioObjectsConnectOrCreateFieldInput;
  MinioBucketMinioObjectsConnectOrCreateFieldInputOnCreate: MinioBucketMinioObjectsConnectOrCreateFieldInputOnCreate;
  MinioBucketMinioObjectsConnection: ResolverTypeWrapper<MinioBucketMinioObjectsConnection>;
  MinioBucketMinioObjectsConnectionSort: MinioBucketMinioObjectsConnectionSort;
  MinioBucketMinioObjectsConnectionWhere: MinioBucketMinioObjectsConnectionWhere;
  MinioBucketMinioObjectsCreateFieldInput: MinioBucketMinioObjectsCreateFieldInput;
  MinioBucketMinioObjectsDeleteFieldInput: MinioBucketMinioObjectsDeleteFieldInput;
  MinioBucketMinioObjectsDisconnectFieldInput: MinioBucketMinioObjectsDisconnectFieldInput;
  MinioBucketMinioObjectsFieldInput: MinioBucketMinioObjectsFieldInput;
  MinioBucketMinioObjectsNodeAggregationWhereInput: MinioBucketMinioObjectsNodeAggregationWhereInput;
  MinioBucketMinioObjectsRelationship: ResolverTypeWrapper<MinioBucketMinioObjectsRelationship>;
  MinioBucketMinioObjectsUpdateConnectionInput: MinioBucketMinioObjectsUpdateConnectionInput;
  MinioBucketMinioObjectsUpdateFieldInput: MinioBucketMinioObjectsUpdateFieldInput;
  MinioBucketMinioUploadMinioObjectsAggregationSelection: ResolverTypeWrapper<MinioBucketMinioUploadMinioObjectsAggregationSelection>;
  MinioBucketMinioUploadMinioObjectsNodeAggregateSelection: ResolverTypeWrapper<MinioBucketMinioUploadMinioObjectsNodeAggregateSelection>;
  MinioBucketOptions: MinioBucketOptions;
  MinioBucketRelationInput: MinioBucketRelationInput;
  MinioBucketSort: MinioBucketSort;
  MinioBucketUpdateInput: MinioBucketUpdateInput;
  MinioBucketWhere: MinioBucketWhere;
  MinioBucketsConnection: ResolverTypeWrapper<MinioBucketsConnection>;
  MinioUpload: ResolverTypeWrapper<MinioUpload>;
  MinioUploadAggregateSelection: ResolverTypeWrapper<MinioUploadAggregateSelection>;
  MinioUploadCodeBookRawDatasetAggregateInput: MinioUploadCodeBookRawDatasetAggregateInput;
  MinioUploadCodeBookRawDatasetConnectFieldInput: MinioUploadCodeBookRawDatasetConnectFieldInput;
  MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput: MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput;
  MinioUploadCodeBookRawDatasetConnectOrCreateFieldInputOnCreate: MinioUploadCodeBookRawDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadCodeBookRawDatasetConnection: ResolverTypeWrapper<MinioUploadCodeBookRawDatasetConnection>;
  MinioUploadCodeBookRawDatasetConnectionSort: MinioUploadCodeBookRawDatasetConnectionSort;
  MinioUploadCodeBookRawDatasetConnectionWhere: MinioUploadCodeBookRawDatasetConnectionWhere;
  MinioUploadCodeBookRawDatasetCreateFieldInput: MinioUploadCodeBookRawDatasetCreateFieldInput;
  MinioUploadCodeBookRawDatasetDeleteFieldInput: MinioUploadCodeBookRawDatasetDeleteFieldInput;
  MinioUploadCodeBookRawDatasetDisconnectFieldInput: MinioUploadCodeBookRawDatasetDisconnectFieldInput;
  MinioUploadCodeBookRawDatasetFieldInput: MinioUploadCodeBookRawDatasetFieldInput;
  MinioUploadCodeBookRawDatasetNodeAggregationWhereInput: MinioUploadCodeBookRawDatasetNodeAggregationWhereInput;
  MinioUploadCodeBookRawDatasetRelationship: ResolverTypeWrapper<MinioUploadCodeBookRawDatasetRelationship>;
  MinioUploadCodeBookRawDatasetUpdateConnectionInput: MinioUploadCodeBookRawDatasetUpdateConnectionInput;
  MinioUploadCodeBookRawDatasetUpdateFieldInput: MinioUploadCodeBookRawDatasetUpdateFieldInput;
  MinioUploadConnectInput: MinioUploadConnectInput;
  MinioUploadConnectOrCreateInput: MinioUploadConnectOrCreateInput;
  MinioUploadConnectOrCreateWhere: MinioUploadConnectOrCreateWhere;
  MinioUploadConnectWhere: MinioUploadConnectWhere;
  MinioUploadCreateInput: MinioUploadCreateInput;
  MinioUploadDeleteInput: MinioUploadDeleteInput;
  MinioUploadDisconnectInput: MinioUploadDisconnectInput;
  MinioUploadEdge: ResolverTypeWrapper<MinioUploadEdge>;
  MinioUploadFromExportTaskAggregateInput: MinioUploadFromExportTaskAggregateInput;
  MinioUploadFromExportTaskConnectFieldInput: MinioUploadFromExportTaskConnectFieldInput;
  MinioUploadFromExportTaskConnection: ResolverTypeWrapper<MinioUploadFromExportTaskConnection>;
  MinioUploadFromExportTaskConnectionSort: MinioUploadFromExportTaskConnectionSort;
  MinioUploadFromExportTaskConnectionWhere: MinioUploadFromExportTaskConnectionWhere;
  MinioUploadFromExportTaskCreateFieldInput: MinioUploadFromExportTaskCreateFieldInput;
  MinioUploadFromExportTaskDeleteFieldInput: MinioUploadFromExportTaskDeleteFieldInput;
  MinioUploadFromExportTaskDisconnectFieldInput: MinioUploadFromExportTaskDisconnectFieldInput;
  MinioUploadFromExportTaskFieldInput: MinioUploadFromExportTaskFieldInput;
  MinioUploadFromExportTaskNodeAggregationWhereInput: MinioUploadFromExportTaskNodeAggregationWhereInput;
  MinioUploadFromExportTaskRelationship: ResolverTypeWrapper<MinioUploadFromExportTaskRelationship>;
  MinioUploadFromExportTaskUpdateConnectionInput: MinioUploadFromExportTaskUpdateConnectionInput;
  MinioUploadFromExportTaskUpdateFieldInput: MinioUploadFromExportTaskUpdateFieldInput;
  MinioUploadMinioUploadPairedCodebookAggregationSelection: ResolverTypeWrapper<MinioUploadMinioUploadPairedCodebookAggregationSelection>;
  MinioUploadMinioUploadPairedCodebookNodeAggregateSelection: ResolverTypeWrapper<MinioUploadMinioUploadPairedCodebookNodeAggregateSelection>;
  MinioUploadMinioUploadPairedRawdataFileAggregationSelection: ResolverTypeWrapper<MinioUploadMinioUploadPairedRawdataFileAggregationSelection>;
  MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection: ResolverTypeWrapper<MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection>;
  MinioUploadOnCreateInput: MinioUploadOnCreateInput;
  MinioUploadOptions: MinioUploadOptions;
  MinioUploadPairedCodebookAggregateInput: MinioUploadPairedCodebookAggregateInput;
  MinioUploadPairedCodebookConnectFieldInput: MinioUploadPairedCodebookConnectFieldInput;
  MinioUploadPairedCodebookConnectOrCreateFieldInput: MinioUploadPairedCodebookConnectOrCreateFieldInput;
  MinioUploadPairedCodebookConnectOrCreateFieldInputOnCreate: MinioUploadPairedCodebookConnectOrCreateFieldInputOnCreate;
  MinioUploadPairedCodebookConnection: ResolverTypeWrapper<MinioUploadPairedCodebookConnection>;
  MinioUploadPairedCodebookConnectionSort: MinioUploadPairedCodebookConnectionSort;
  MinioUploadPairedCodebookConnectionWhere: MinioUploadPairedCodebookConnectionWhere;
  MinioUploadPairedCodebookCreateFieldInput: MinioUploadPairedCodebookCreateFieldInput;
  MinioUploadPairedCodebookDeleteFieldInput: MinioUploadPairedCodebookDeleteFieldInput;
  MinioUploadPairedCodebookDisconnectFieldInput: MinioUploadPairedCodebookDisconnectFieldInput;
  MinioUploadPairedCodebookFieldInput: MinioUploadPairedCodebookFieldInput;
  MinioUploadPairedCodebookNodeAggregationWhereInput: MinioUploadPairedCodebookNodeAggregationWhereInput;
  MinioUploadPairedCodebookRelationship: ResolverTypeWrapper<MinioUploadPairedCodebookRelationship>;
  MinioUploadPairedCodebookUpdateConnectionInput: MinioUploadPairedCodebookUpdateConnectionInput;
  MinioUploadPairedCodebookUpdateFieldInput: MinioUploadPairedCodebookUpdateFieldInput;
  MinioUploadPairedRawdataFileAggregateInput: MinioUploadPairedRawdataFileAggregateInput;
  MinioUploadPairedRawdataFileConnectFieldInput: MinioUploadPairedRawdataFileConnectFieldInput;
  MinioUploadPairedRawdataFileConnectOrCreateFieldInput: MinioUploadPairedRawdataFileConnectOrCreateFieldInput;
  MinioUploadPairedRawdataFileConnectOrCreateFieldInputOnCreate: MinioUploadPairedRawdataFileConnectOrCreateFieldInputOnCreate;
  MinioUploadPairedRawdataFileConnection: ResolverTypeWrapper<MinioUploadPairedRawdataFileConnection>;
  MinioUploadPairedRawdataFileConnectionSort: MinioUploadPairedRawdataFileConnectionSort;
  MinioUploadPairedRawdataFileConnectionWhere: MinioUploadPairedRawdataFileConnectionWhere;
  MinioUploadPairedRawdataFileCreateFieldInput: MinioUploadPairedRawdataFileCreateFieldInput;
  MinioUploadPairedRawdataFileDeleteFieldInput: MinioUploadPairedRawdataFileDeleteFieldInput;
  MinioUploadPairedRawdataFileDisconnectFieldInput: MinioUploadPairedRawdataFileDisconnectFieldInput;
  MinioUploadPairedRawdataFileFieldInput: MinioUploadPairedRawdataFileFieldInput;
  MinioUploadPairedRawdataFileNodeAggregationWhereInput: MinioUploadPairedRawdataFileNodeAggregationWhereInput;
  MinioUploadPairedRawdataFileRelationship: ResolverTypeWrapper<MinioUploadPairedRawdataFileRelationship>;
  MinioUploadPairedRawdataFileUpdateConnectionInput: MinioUploadPairedRawdataFileUpdateConnectionInput;
  MinioUploadPairedRawdataFileUpdateFieldInput: MinioUploadPairedRawdataFileUpdateFieldInput;
  MinioUploadRawDatasetAggregateInput: MinioUploadRawDatasetAggregateInput;
  MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection: ResolverTypeWrapper<MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection>;
  MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection: ResolverTypeWrapper<MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection>;
  MinioUploadRawDatasetConnectFieldInput: MinioUploadRawDatasetConnectFieldInput;
  MinioUploadRawDatasetConnectOrCreateFieldInput: MinioUploadRawDatasetConnectOrCreateFieldInput;
  MinioUploadRawDatasetConnectOrCreateFieldInputOnCreate: MinioUploadRawDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadRawDatasetConnection: ResolverTypeWrapper<MinioUploadRawDatasetConnection>;
  MinioUploadRawDatasetConnectionSort: MinioUploadRawDatasetConnectionSort;
  MinioUploadRawDatasetConnectionWhere: MinioUploadRawDatasetConnectionWhere;
  MinioUploadRawDatasetCreateFieldInput: MinioUploadRawDatasetCreateFieldInput;
  MinioUploadRawDatasetDeleteFieldInput: MinioUploadRawDatasetDeleteFieldInput;
  MinioUploadRawDatasetDisconnectFieldInput: MinioUploadRawDatasetDisconnectFieldInput;
  MinioUploadRawDatasetFieldInput: MinioUploadRawDatasetFieldInput;
  MinioUploadRawDatasetNodeAggregationWhereInput: MinioUploadRawDatasetNodeAggregationWhereInput;
  MinioUploadRawDatasetRawDatasetAggregationSelection: ResolverTypeWrapper<MinioUploadRawDatasetRawDatasetAggregationSelection>;
  MinioUploadRawDatasetRawDatasetNodeAggregateSelection: ResolverTypeWrapper<MinioUploadRawDatasetRawDatasetNodeAggregateSelection>;
  MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection: ResolverTypeWrapper<MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection>;
  MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection: ResolverTypeWrapper<MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection>;
  MinioUploadRawDatasetRelationship: ResolverTypeWrapper<MinioUploadRawDatasetRelationship>;
  MinioUploadRawDatasetUpdateConnectionInput: MinioUploadRawDatasetUpdateConnectionInput;
  MinioUploadRawDatasetUpdateFieldInput: MinioUploadRawDatasetUpdateFieldInput;
  MinioUploadRawdataFileRawDatasetAggregateInput: MinioUploadRawdataFileRawDatasetAggregateInput;
  MinioUploadRawdataFileRawDatasetConnectFieldInput: MinioUploadRawdataFileRawDatasetConnectFieldInput;
  MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput: MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput;
  MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInputOnCreate: MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadRawdataFileRawDatasetConnection: ResolverTypeWrapper<MinioUploadRawdataFileRawDatasetConnection>;
  MinioUploadRawdataFileRawDatasetConnectionSort: MinioUploadRawdataFileRawDatasetConnectionSort;
  MinioUploadRawdataFileRawDatasetConnectionWhere: MinioUploadRawdataFileRawDatasetConnectionWhere;
  MinioUploadRawdataFileRawDatasetCreateFieldInput: MinioUploadRawdataFileRawDatasetCreateFieldInput;
  MinioUploadRawdataFileRawDatasetDeleteFieldInput: MinioUploadRawdataFileRawDatasetDeleteFieldInput;
  MinioUploadRawdataFileRawDatasetDisconnectFieldInput: MinioUploadRawdataFileRawDatasetDisconnectFieldInput;
  MinioUploadRawdataFileRawDatasetFieldInput: MinioUploadRawdataFileRawDatasetFieldInput;
  MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput: MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput;
  MinioUploadRawdataFileRawDatasetRelationship: ResolverTypeWrapper<MinioUploadRawdataFileRawDatasetRelationship>;
  MinioUploadRawdataFileRawDatasetUpdateConnectionInput: MinioUploadRawdataFileRawDatasetUpdateConnectionInput;
  MinioUploadRawdataFileRawDatasetUpdateFieldInput: MinioUploadRawdataFileRawDatasetUpdateFieldInput;
  MinioUploadRelationInput: MinioUploadRelationInput;
  MinioUploadSort: MinioUploadSort;
  MinioUploadTaskFromExportTaskAggregationSelection: ResolverTypeWrapper<MinioUploadTaskFromExportTaskAggregationSelection>;
  MinioUploadTaskFromExportTaskNodeAggregateSelection: ResolverTypeWrapper<MinioUploadTaskFromExportTaskNodeAggregateSelection>;
  MinioUploadUniqueWhere: MinioUploadUniqueWhere;
  MinioUploadUpdateInput: MinioUploadUpdateInput;
  MinioUploadWhere: MinioUploadWhere;
  MinioUploadsConnection: ResolverTypeWrapper<MinioUploadsConnection>;
  Mismatch: ResolverTypeWrapper<Mismatch>;
  MismatchAggregateSelection: ResolverTypeWrapper<MismatchAggregateSelection>;
  MismatchCreateInput: MismatchCreateInput;
  MismatchEdge: ResolverTypeWrapper<MismatchEdge>;
  MismatchOptions: MismatchOptions;
  MismatchSort: MismatchSort;
  MismatchUpdateInput: MismatchUpdateInput;
  MismatchWhere: MismatchWhere;
  MismatchesConnection: ResolverTypeWrapper<MismatchesConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  Neo4JUpdateStatsConnection: ResolverTypeWrapper<Neo4JUpdateStatsConnection>;
  Neo4jUpdateStats: ResolverTypeWrapper<Neo4jUpdateStats>;
  Neo4jUpdateStatsAggregateSelection: ResolverTypeWrapper<Neo4jUpdateStatsAggregateSelection>;
  Neo4jUpdateStatsCreateInput: Neo4jUpdateStatsCreateInput;
  Neo4jUpdateStatsEdge: ResolverTypeWrapper<Neo4jUpdateStatsEdge>;
  Neo4jUpdateStatsOptions: Neo4jUpdateStatsOptions;
  Neo4jUpdateStatsSort: Neo4jUpdateStatsSort;
  Neo4jUpdateStatsUpdateInput: Neo4jUpdateStatsUpdateInput;
  Neo4jUpdateStatsWhere: Neo4jUpdateStatsWhere;
  NestedOperations: NestedOperations;
  NestedSwitch: NestedSwitch;
  NestedSwitchDelete: NestedSwitchDelete;
  OntologiesConnection: ResolverTypeWrapper<OntologiesConnection>;
  Ontology: ResolverTypeWrapper<Ontology>;
  OntologyAggregateSelection: ResolverTypeWrapper<OntologyAggregateSelection>;
  OntologyClass: ResolverTypeWrapper<OntologyClass>;
  OntologyClassAggregateSelection: ResolverTypeWrapper<OntologyClassAggregateSelection>;
  OntologyClassConnectOrCreateWhere: OntologyClassConnectOrCreateWhere;
  OntologyClassConnectWhere: OntologyClassConnectWhere;
  OntologyClassCreateInput: OntologyClassCreateInput;
  OntologyClassEdge: ResolverTypeWrapper<OntologyClassEdge>;
  OntologyClassOnCreateInput: OntologyClassOnCreateInput;
  OntologyClassOptions: OntologyClassOptions;
  OntologyClassSort: OntologyClassSort;
  OntologyClassUniqueWhere: OntologyClassUniqueWhere;
  OntologyClassUpdateInput: OntologyClassUpdateInput;
  OntologyClassWhere: OntologyClassWhere;
  OntologyClassesAggregateInput: OntologyClassesAggregateInput;
  OntologyClassesConnectFieldInput: OntologyClassesConnectFieldInput;
  OntologyClassesConnectOrCreateFieldInput: OntologyClassesConnectOrCreateFieldInput;
  OntologyClassesConnectOrCreateFieldInputOnCreate: OntologyClassesConnectOrCreateFieldInputOnCreate;
  OntologyClassesConnection: ResolverTypeWrapper<OntologyClassesConnection>;
  OntologyClassesConnectionSort: OntologyClassesConnectionSort;
  OntologyClassesConnectionWhere: OntologyClassesConnectionWhere;
  OntologyClassesCreateFieldInput: OntologyClassesCreateFieldInput;
  OntologyClassesDeleteFieldInput: OntologyClassesDeleteFieldInput;
  OntologyClassesDisconnectFieldInput: OntologyClassesDisconnectFieldInput;
  OntologyClassesFieldInput: OntologyClassesFieldInput;
  OntologyClassesNodeAggregationWhereInput: OntologyClassesNodeAggregationWhereInput;
  OntologyClassesUpdateConnectionInput: OntologyClassesUpdateConnectionInput;
  OntologyClassesUpdateFieldInput: OntologyClassesUpdateFieldInput;
  OntologyConnectInput: OntologyConnectInput;
  OntologyConnectOrCreateInput: OntologyConnectOrCreateInput;
  OntologyCreateInput: OntologyCreateInput;
  OntologyDeleteInput: OntologyDeleteInput;
  OntologyDisconnectInput: OntologyDisconnectInput;
  OntologyEdge: ResolverTypeWrapper<OntologyEdge>;
  OntologyOntologyClassClassesAggregationSelection: ResolverTypeWrapper<OntologyOntologyClassClassesAggregationSelection>;
  OntologyOntologyClassClassesNodeAggregateSelection: ResolverTypeWrapper<OntologyOntologyClassClassesNodeAggregateSelection>;
  OntologyOntologyRelationRelationsAggregationSelection: ResolverTypeWrapper<OntologyOntologyRelationRelationsAggregationSelection>;
  OntologyOntologyRelationRelationsNodeAggregateSelection: ResolverTypeWrapper<OntologyOntologyRelationRelationsNodeAggregateSelection>;
  OntologyOptions: OntologyOptions;
  OntologyRelation: ResolverTypeWrapper<OntologyRelation>;
  OntologyRelationAggregateSelection: ResolverTypeWrapper<OntologyRelationAggregateSelection>;
  OntologyRelationConnectInput: OntologyRelationConnectInput;
  OntologyRelationConnectOrCreateInput: OntologyRelationConnectOrCreateInput;
  OntologyRelationConnectOrCreateWhere: OntologyRelationConnectOrCreateWhere;
  OntologyRelationConnectWhere: OntologyRelationConnectWhere;
  OntologyRelationCreateInput: OntologyRelationCreateInput;
  OntologyRelationDeleteInput: OntologyRelationDeleteInput;
  OntologyRelationDisconnectInput: OntologyRelationDisconnectInput;
  OntologyRelationEdge: ResolverTypeWrapper<OntologyRelationEdge>;
  OntologyRelationFromAggregateInput: OntologyRelationFromAggregateInput;
  OntologyRelationFromConnectFieldInput: OntologyRelationFromConnectFieldInput;
  OntologyRelationFromConnectOrCreateFieldInput: OntologyRelationFromConnectOrCreateFieldInput;
  OntologyRelationFromConnectOrCreateFieldInputOnCreate: OntologyRelationFromConnectOrCreateFieldInputOnCreate;
  OntologyRelationFromConnection: ResolverTypeWrapper<OntologyRelationFromConnection>;
  OntologyRelationFromConnectionSort: OntologyRelationFromConnectionSort;
  OntologyRelationFromConnectionWhere: OntologyRelationFromConnectionWhere;
  OntologyRelationFromCreateFieldInput: OntologyRelationFromCreateFieldInput;
  OntologyRelationFromDeleteFieldInput: OntologyRelationFromDeleteFieldInput;
  OntologyRelationFromDisconnectFieldInput: OntologyRelationFromDisconnectFieldInput;
  OntologyRelationFromFieldInput: OntologyRelationFromFieldInput;
  OntologyRelationFromNodeAggregationWhereInput: OntologyRelationFromNodeAggregationWhereInput;
  OntologyRelationFromRelationship: ResolverTypeWrapper<OntologyRelationFromRelationship>;
  OntologyRelationFromUpdateConnectionInput: OntologyRelationFromUpdateConnectionInput;
  OntologyRelationFromUpdateFieldInput: OntologyRelationFromUpdateFieldInput;
  OntologyRelationInput: OntologyRelationInput;
  OntologyRelationOnCreateInput: OntologyRelationOnCreateInput;
  OntologyRelationOntologyClassFromAggregationSelection: ResolverTypeWrapper<OntologyRelationOntologyClassFromAggregationSelection>;
  OntologyRelationOntologyClassFromNodeAggregateSelection: ResolverTypeWrapper<OntologyRelationOntologyClassFromNodeAggregateSelection>;
  OntologyRelationOntologyClassToAggregationSelection: ResolverTypeWrapper<OntologyRelationOntologyClassToAggregationSelection>;
  OntologyRelationOntologyClassToNodeAggregateSelection: ResolverTypeWrapper<OntologyRelationOntologyClassToNodeAggregateSelection>;
  OntologyRelationOptions: OntologyRelationOptions;
  OntologyRelationRelationInput: OntologyRelationRelationInput;
  OntologyRelationSort: OntologyRelationSort;
  OntologyRelationToAggregateInput: OntologyRelationToAggregateInput;
  OntologyRelationToConnectFieldInput: OntologyRelationToConnectFieldInput;
  OntologyRelationToConnectOrCreateFieldInput: OntologyRelationToConnectOrCreateFieldInput;
  OntologyRelationToConnectOrCreateFieldInputOnCreate: OntologyRelationToConnectOrCreateFieldInputOnCreate;
  OntologyRelationToConnection: ResolverTypeWrapper<OntologyRelationToConnection>;
  OntologyRelationToConnectionSort: OntologyRelationToConnectionSort;
  OntologyRelationToConnectionWhere: OntologyRelationToConnectionWhere;
  OntologyRelationToCreateFieldInput: OntologyRelationToCreateFieldInput;
  OntologyRelationToDeleteFieldInput: OntologyRelationToDeleteFieldInput;
  OntologyRelationToDisconnectFieldInput: OntologyRelationToDisconnectFieldInput;
  OntologyRelationToFieldInput: OntologyRelationToFieldInput;
  OntologyRelationToNodeAggregationWhereInput: OntologyRelationToNodeAggregationWhereInput;
  OntologyRelationToRelationship: ResolverTypeWrapper<OntologyRelationToRelationship>;
  OntologyRelationToUpdateConnectionInput: OntologyRelationToUpdateConnectionInput;
  OntologyRelationToUpdateFieldInput: OntologyRelationToUpdateFieldInput;
  OntologyRelationUniqueWhere: OntologyRelationUniqueWhere;
  OntologyRelationUpdateInput: OntologyRelationUpdateInput;
  OntologyRelationWhere: OntologyRelationWhere;
  OntologyRelationsAggregateInput: OntologyRelationsAggregateInput;
  OntologyRelationsConnectFieldInput: OntologyRelationsConnectFieldInput;
  OntologyRelationsConnectOrCreateFieldInput: OntologyRelationsConnectOrCreateFieldInput;
  OntologyRelationsConnectOrCreateFieldInputOnCreate: OntologyRelationsConnectOrCreateFieldInputOnCreate;
  OntologyRelationsConnection: ResolverTypeWrapper<OntologyRelationsConnection>;
  OntologyRelationsConnectionSort: OntologyRelationsConnectionSort;
  OntologyRelationsConnectionWhere: OntologyRelationsConnectionWhere;
  OntologyRelationsCreateFieldInput: OntologyRelationsCreateFieldInput;
  OntologyRelationsDeleteFieldInput: OntologyRelationsDeleteFieldInput;
  OntologyRelationsDisconnectFieldInput: OntologyRelationsDisconnectFieldInput;
  OntologyRelationsFieldInput: OntologyRelationsFieldInput;
  OntologyRelationsNodeAggregationWhereInput: OntologyRelationsNodeAggregationWhereInput;
  OntologyRelationsUpdateConnectionInput: OntologyRelationsUpdateConnectionInput;
  OntologyRelationsUpdateFieldInput: OntologyRelationsUpdateFieldInput;
  OntologySort: OntologySort;
  OntologyUpdateInput: OntologyUpdateInput;
  OntologyWhere: OntologyWhere;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  RawDataset: ResolverTypeWrapper<RawDataset>;
  RawDatasetAggregateSelection: ResolverTypeWrapper<RawDatasetAggregateSelection>;
  RawDatasetCodeBookAggregateInput: RawDatasetCodeBookAggregateInput;
  RawDatasetCodeBookConnectFieldInput: RawDatasetCodeBookConnectFieldInput;
  RawDatasetCodeBookConnectOrCreateFieldInput: RawDatasetCodeBookConnectOrCreateFieldInput;
  RawDatasetCodeBookConnectOrCreateFieldInputOnCreate: RawDatasetCodeBookConnectOrCreateFieldInputOnCreate;
  RawDatasetCodeBookConnection: ResolverTypeWrapper<RawDatasetCodeBookConnection>;
  RawDatasetCodeBookConnectionSort: RawDatasetCodeBookConnectionSort;
  RawDatasetCodeBookConnectionWhere: RawDatasetCodeBookConnectionWhere;
  RawDatasetCodeBookCreateFieldInput: RawDatasetCodeBookCreateFieldInput;
  RawDatasetCodeBookDeleteFieldInput: RawDatasetCodeBookDeleteFieldInput;
  RawDatasetCodeBookDisconnectFieldInput: RawDatasetCodeBookDisconnectFieldInput;
  RawDatasetCodeBookFieldInput: RawDatasetCodeBookFieldInput;
  RawDatasetCodeBookNodeAggregationWhereInput: RawDatasetCodeBookNodeAggregationWhereInput;
  RawDatasetCodeBookRelationship: ResolverTypeWrapper<RawDatasetCodeBookRelationship>;
  RawDatasetCodeBookUpdateConnectionInput: RawDatasetCodeBookUpdateConnectionInput;
  RawDatasetCodeBookUpdateFieldInput: RawDatasetCodeBookUpdateFieldInput;
  RawDatasetConnectInput: RawDatasetConnectInput;
  RawDatasetConnectOrCreateInput: RawDatasetConnectOrCreateInput;
  RawDatasetConnectOrCreateWhere: RawDatasetConnectOrCreateWhere;
  RawDatasetConnectWhere: RawDatasetConnectWhere;
  RawDatasetCreateInput: RawDatasetCreateInput;
  RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection: ResolverTypeWrapper<RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection>;
  RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection: ResolverTypeWrapper<RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection>;
  RawDatasetDeleteInput: RawDatasetDeleteInput;
  RawDatasetDisconnectInput: RawDatasetDisconnectInput;
  RawDatasetEdge: ResolverTypeWrapper<RawDatasetEdge>;
  RawDatasetFilesAggregateInput: RawDatasetFilesAggregateInput;
  RawDatasetFilesConnectFieldInput: RawDatasetFilesConnectFieldInput;
  RawDatasetFilesConnectOrCreateFieldInput: RawDatasetFilesConnectOrCreateFieldInput;
  RawDatasetFilesConnectOrCreateFieldInputOnCreate: RawDatasetFilesConnectOrCreateFieldInputOnCreate;
  RawDatasetFilesConnection: ResolverTypeWrapper<RawDatasetFilesConnection>;
  RawDatasetFilesConnectionSort: RawDatasetFilesConnectionSort;
  RawDatasetFilesConnectionWhere: RawDatasetFilesConnectionWhere;
  RawDatasetFilesCreateFieldInput: RawDatasetFilesCreateFieldInput;
  RawDatasetFilesDeleteFieldInput: RawDatasetFilesDeleteFieldInput;
  RawDatasetFilesDisconnectFieldInput: RawDatasetFilesDisconnectFieldInput;
  RawDatasetFilesFieldInput: RawDatasetFilesFieldInput;
  RawDatasetFilesNodeAggregationWhereInput: RawDatasetFilesNodeAggregationWhereInput;
  RawDatasetFilesRelationship: ResolverTypeWrapper<RawDatasetFilesRelationship>;
  RawDatasetFilesUpdateConnectionInput: RawDatasetFilesUpdateConnectionInput;
  RawDatasetFilesUpdateFieldInput: RawDatasetFilesUpdateFieldInput;
  RawDatasetFromStudyAggregateInput: RawDatasetFromStudyAggregateInput;
  RawDatasetFromStudyConnectFieldInput: RawDatasetFromStudyConnectFieldInput;
  RawDatasetFromStudyConnectOrCreateFieldInput: RawDatasetFromStudyConnectOrCreateFieldInput;
  RawDatasetFromStudyConnectOrCreateFieldInputOnCreate: RawDatasetFromStudyConnectOrCreateFieldInputOnCreate;
  RawDatasetFromStudyConnection: ResolverTypeWrapper<RawDatasetFromStudyConnection>;
  RawDatasetFromStudyConnectionSort: RawDatasetFromStudyConnectionSort;
  RawDatasetFromStudyConnectionWhere: RawDatasetFromStudyConnectionWhere;
  RawDatasetFromStudyCreateFieldInput: RawDatasetFromStudyCreateFieldInput;
  RawDatasetFromStudyDeleteFieldInput: RawDatasetFromStudyDeleteFieldInput;
  RawDatasetFromStudyDisconnectFieldInput: RawDatasetFromStudyDisconnectFieldInput;
  RawDatasetFromStudyFieldInput: RawDatasetFromStudyFieldInput;
  RawDatasetFromStudyNodeAggregationWhereInput: RawDatasetFromStudyNodeAggregationWhereInput;
  RawDatasetFromStudyRelationship: ResolverTypeWrapper<RawDatasetFromStudyRelationship>;
  RawDatasetFromStudyUpdateConnectionInput: RawDatasetFromStudyUpdateConnectionInput;
  RawDatasetFromStudyUpdateFieldInput: RawDatasetFromStudyUpdateFieldInput;
  RawDatasetFunnelTasksAggregateInput: RawDatasetFunnelTasksAggregateInput;
  RawDatasetFunnelTasksConnectFieldInput: RawDatasetFunnelTasksConnectFieldInput;
  RawDatasetFunnelTasksConnection: ResolverTypeWrapper<RawDatasetFunnelTasksConnection>;
  RawDatasetFunnelTasksConnectionSort: RawDatasetFunnelTasksConnectionSort;
  RawDatasetFunnelTasksConnectionWhere: RawDatasetFunnelTasksConnectionWhere;
  RawDatasetFunnelTasksCreateFieldInput: RawDatasetFunnelTasksCreateFieldInput;
  RawDatasetFunnelTasksDeleteFieldInput: RawDatasetFunnelTasksDeleteFieldInput;
  RawDatasetFunnelTasksDisconnectFieldInput: RawDatasetFunnelTasksDisconnectFieldInput;
  RawDatasetFunnelTasksFieldInput: RawDatasetFunnelTasksFieldInput;
  RawDatasetFunnelTasksNodeAggregationWhereInput: RawDatasetFunnelTasksNodeAggregationWhereInput;
  RawDatasetFunnelTasksRelationship: ResolverTypeWrapper<RawDatasetFunnelTasksRelationship>;
  RawDatasetFunnelTasksUpdateConnectionInput: RawDatasetFunnelTasksUpdateConnectionInput;
  RawDatasetFunnelTasksUpdateFieldInput: RawDatasetFunnelTasksUpdateFieldInput;
  RawDatasetGeneratedCuratedDatasetsAggregateInput: RawDatasetGeneratedCuratedDatasetsAggregateInput;
  RawDatasetGeneratedCuratedDatasetsConnectFieldInput: RawDatasetGeneratedCuratedDatasetsConnectFieldInput;
  RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput: RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput;
  RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate: RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate;
  RawDatasetGeneratedCuratedDatasetsConnection: ResolverTypeWrapper<RawDatasetGeneratedCuratedDatasetsConnection>;
  RawDatasetGeneratedCuratedDatasetsConnectionSort: RawDatasetGeneratedCuratedDatasetsConnectionSort;
  RawDatasetGeneratedCuratedDatasetsConnectionWhere: RawDatasetGeneratedCuratedDatasetsConnectionWhere;
  RawDatasetGeneratedCuratedDatasetsCreateFieldInput: RawDatasetGeneratedCuratedDatasetsCreateFieldInput;
  RawDatasetGeneratedCuratedDatasetsDeleteFieldInput: RawDatasetGeneratedCuratedDatasetsDeleteFieldInput;
  RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput: RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput;
  RawDatasetGeneratedCuratedDatasetsFieldInput: RawDatasetGeneratedCuratedDatasetsFieldInput;
  RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput: RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput;
  RawDatasetGeneratedCuratedDatasetsRelationship: ResolverTypeWrapper<RawDatasetGeneratedCuratedDatasetsRelationship>;
  RawDatasetGeneratedCuratedDatasetsUpdateConnectionInput: RawDatasetGeneratedCuratedDatasetsUpdateConnectionInput;
  RawDatasetGeneratedCuratedDatasetsUpdateFieldInput: RawDatasetGeneratedCuratedDatasetsUpdateFieldInput;
  RawDatasetGeographyCityStudySiteAggregationSelection: ResolverTypeWrapper<RawDatasetGeographyCityStudySiteAggregationSelection>;
  RawDatasetGeographyCityStudySiteNodeAggregateSelection: ResolverTypeWrapper<RawDatasetGeographyCityStudySiteNodeAggregateSelection>;
  RawDatasetMinioBucketAggregateInput: RawDatasetMinioBucketAggregateInput;
  RawDatasetMinioBucketConnectFieldInput: RawDatasetMinioBucketConnectFieldInput;
  RawDatasetMinioBucketConnection: ResolverTypeWrapper<RawDatasetMinioBucketConnection>;
  RawDatasetMinioBucketConnectionSort: RawDatasetMinioBucketConnectionSort;
  RawDatasetMinioBucketConnectionWhere: RawDatasetMinioBucketConnectionWhere;
  RawDatasetMinioBucketCreateFieldInput: RawDatasetMinioBucketCreateFieldInput;
  RawDatasetMinioBucketDeleteFieldInput: RawDatasetMinioBucketDeleteFieldInput;
  RawDatasetMinioBucketDisconnectFieldInput: RawDatasetMinioBucketDisconnectFieldInput;
  RawDatasetMinioBucketFieldInput: RawDatasetMinioBucketFieldInput;
  RawDatasetMinioBucketMinioBucketAggregationSelection: ResolverTypeWrapper<RawDatasetMinioBucketMinioBucketAggregationSelection>;
  RawDatasetMinioBucketMinioBucketNodeAggregateSelection: ResolverTypeWrapper<RawDatasetMinioBucketMinioBucketNodeAggregateSelection>;
  RawDatasetMinioBucketNodeAggregationWhereInput: RawDatasetMinioBucketNodeAggregationWhereInput;
  RawDatasetMinioBucketRelationship: ResolverTypeWrapper<RawDatasetMinioBucketRelationship>;
  RawDatasetMinioBucketUpdateConnectionInput: RawDatasetMinioBucketUpdateConnectionInput;
  RawDatasetMinioBucketUpdateFieldInput: RawDatasetMinioBucketUpdateFieldInput;
  RawDatasetMinioUploadCodeBookAggregationSelection: ResolverTypeWrapper<RawDatasetMinioUploadCodeBookAggregationSelection>;
  RawDatasetMinioUploadCodeBookNodeAggregateSelection: ResolverTypeWrapper<RawDatasetMinioUploadCodeBookNodeAggregateSelection>;
  RawDatasetMinioUploadFilesAggregationSelection: ResolverTypeWrapper<RawDatasetMinioUploadFilesAggregationSelection>;
  RawDatasetMinioUploadFilesNodeAggregateSelection: ResolverTypeWrapper<RawDatasetMinioUploadFilesNodeAggregateSelection>;
  RawDatasetMinioUploadRawdataFileAggregationSelection: ResolverTypeWrapper<RawDatasetMinioUploadRawdataFileAggregationSelection>;
  RawDatasetMinioUploadRawdataFileNodeAggregateSelection: ResolverTypeWrapper<RawDatasetMinioUploadRawdataFileNodeAggregateSelection>;
  RawDatasetOnCreateInput: RawDatasetOnCreateInput;
  RawDatasetOptions: RawDatasetOptions;
  RawDatasetRawdataFileAggregateInput: RawDatasetRawdataFileAggregateInput;
  RawDatasetRawdataFileConnectFieldInput: RawDatasetRawdataFileConnectFieldInput;
  RawDatasetRawdataFileConnectOrCreateFieldInput: RawDatasetRawdataFileConnectOrCreateFieldInput;
  RawDatasetRawdataFileConnectOrCreateFieldInputOnCreate: RawDatasetRawdataFileConnectOrCreateFieldInputOnCreate;
  RawDatasetRawdataFileConnection: ResolverTypeWrapper<RawDatasetRawdataFileConnection>;
  RawDatasetRawdataFileConnectionSort: RawDatasetRawdataFileConnectionSort;
  RawDatasetRawdataFileConnectionWhere: RawDatasetRawdataFileConnectionWhere;
  RawDatasetRawdataFileCreateFieldInput: RawDatasetRawdataFileCreateFieldInput;
  RawDatasetRawdataFileDeleteFieldInput: RawDatasetRawdataFileDeleteFieldInput;
  RawDatasetRawdataFileDisconnectFieldInput: RawDatasetRawdataFileDisconnectFieldInput;
  RawDatasetRawdataFileFieldInput: RawDatasetRawdataFileFieldInput;
  RawDatasetRawdataFileNodeAggregationWhereInput: RawDatasetRawdataFileNodeAggregationWhereInput;
  RawDatasetRawdataFileRelationship: ResolverTypeWrapper<RawDatasetRawdataFileRelationship>;
  RawDatasetRawdataFileUpdateConnectionInput: RawDatasetRawdataFileUpdateConnectionInput;
  RawDatasetRawdataFileUpdateFieldInput: RawDatasetRawdataFileUpdateFieldInput;
  RawDatasetRelationInput: RawDatasetRelationInput;
  RawDatasetSort: RawDatasetSort;
  RawDatasetStudyFromStudyAggregationSelection: ResolverTypeWrapper<RawDatasetStudyFromStudyAggregationSelection>;
  RawDatasetStudyFromStudyNodeAggregateSelection: ResolverTypeWrapper<RawDatasetStudyFromStudyNodeAggregateSelection>;
  RawDatasetStudySiteAggregateInput: RawDatasetStudySiteAggregateInput;
  RawDatasetStudySiteConnectFieldInput: RawDatasetStudySiteConnectFieldInput;
  RawDatasetStudySiteConnectOrCreateFieldInput: RawDatasetStudySiteConnectOrCreateFieldInput;
  RawDatasetStudySiteConnectOrCreateFieldInputOnCreate: RawDatasetStudySiteConnectOrCreateFieldInputOnCreate;
  RawDatasetStudySiteConnection: ResolverTypeWrapper<RawDatasetStudySiteConnection>;
  RawDatasetStudySiteConnectionSort: RawDatasetStudySiteConnectionSort;
  RawDatasetStudySiteConnectionWhere: RawDatasetStudySiteConnectionWhere;
  RawDatasetStudySiteCreateFieldInput: RawDatasetStudySiteCreateFieldInput;
  RawDatasetStudySiteDeleteFieldInput: RawDatasetStudySiteDeleteFieldInput;
  RawDatasetStudySiteDisconnectFieldInput: RawDatasetStudySiteDisconnectFieldInput;
  RawDatasetStudySiteFieldInput: RawDatasetStudySiteFieldInput;
  RawDatasetStudySiteNodeAggregationWhereInput: RawDatasetStudySiteNodeAggregationWhereInput;
  RawDatasetStudySiteRelationship: ResolverTypeWrapper<RawDatasetStudySiteRelationship>;
  RawDatasetStudySiteUpdateConnectionInput: RawDatasetStudySiteUpdateConnectionInput;
  RawDatasetStudySiteUpdateFieldInput: RawDatasetStudySiteUpdateFieldInput;
  RawDatasetTaskFunnelTasksAggregationSelection: ResolverTypeWrapper<RawDatasetTaskFunnelTasksAggregationSelection>;
  RawDatasetTaskFunnelTasksNodeAggregateSelection: ResolverTypeWrapper<RawDatasetTaskFunnelTasksNodeAggregateSelection>;
  RawDatasetUniqueWhere: RawDatasetUniqueWhere;
  RawDatasetUpdateInput: RawDatasetUpdateInput;
  RawDatasetWhere: RawDatasetWhere;
  RawDatasetsConnection: ResolverTypeWrapper<RawDatasetsConnection>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  StringAggregateSelectionNullable: ResolverTypeWrapper<StringAggregateSelectionNullable>;
  StudiesConnection: ResolverTypeWrapper<StudiesConnection>;
  Study: ResolverTypeWrapper<Study>;
  StudyAggregateSelection: ResolverTypeWrapper<StudyAggregateSelection>;
  StudyConnectInput: StudyConnectInput;
  StudyConnectOrCreateInput: StudyConnectOrCreateInput;
  StudyConnectOrCreateWhere: StudyConnectOrCreateWhere;
  StudyConnectWhere: StudyConnectWhere;
  StudyCreateInput: StudyCreateInput;
  StudyDeleteInput: StudyDeleteInput;
  StudyDisconnectInput: StudyDisconnectInput;
  StudyEdge: ResolverTypeWrapper<StudyEdge>;
  StudyGeographyCityStudySitesAggregationSelection: ResolverTypeWrapper<StudyGeographyCityStudySitesAggregationSelection>;
  StudyGeographyCityStudySitesNodeAggregateSelection: ResolverTypeWrapper<StudyGeographyCityStudySitesNodeAggregateSelection>;
  StudyOnCreateInput: StudyOnCreateInput;
  StudyOptions: StudyOptions;
  StudyRawDatasetRawDatasetsAggregationSelection: ResolverTypeWrapper<StudyRawDatasetRawDatasetsAggregationSelection>;
  StudyRawDatasetRawDatasetsNodeAggregateSelection: ResolverTypeWrapper<StudyRawDatasetRawDatasetsNodeAggregateSelection>;
  StudyRawDatasetsAggregateInput: StudyRawDatasetsAggregateInput;
  StudyRawDatasetsConnectFieldInput: StudyRawDatasetsConnectFieldInput;
  StudyRawDatasetsConnectOrCreateFieldInput: StudyRawDatasetsConnectOrCreateFieldInput;
  StudyRawDatasetsConnectOrCreateFieldInputOnCreate: StudyRawDatasetsConnectOrCreateFieldInputOnCreate;
  StudyRawDatasetsConnection: ResolverTypeWrapper<StudyRawDatasetsConnection>;
  StudyRawDatasetsConnectionSort: StudyRawDatasetsConnectionSort;
  StudyRawDatasetsConnectionWhere: StudyRawDatasetsConnectionWhere;
  StudyRawDatasetsCreateFieldInput: StudyRawDatasetsCreateFieldInput;
  StudyRawDatasetsDeleteFieldInput: StudyRawDatasetsDeleteFieldInput;
  StudyRawDatasetsDisconnectFieldInput: StudyRawDatasetsDisconnectFieldInput;
  StudyRawDatasetsFieldInput: StudyRawDatasetsFieldInput;
  StudyRawDatasetsNodeAggregationWhereInput: StudyRawDatasetsNodeAggregationWhereInput;
  StudyRawDatasetsRelationship: ResolverTypeWrapper<StudyRawDatasetsRelationship>;
  StudyRawDatasetsUpdateConnectionInput: StudyRawDatasetsUpdateConnectionInput;
  StudyRawDatasetsUpdateFieldInput: StudyRawDatasetsUpdateFieldInput;
  StudyRelationInput: StudyRelationInput;
  StudySort: StudySort;
  StudyStudySitesAggregateInput: StudyStudySitesAggregateInput;
  StudyStudySitesConnectFieldInput: StudyStudySitesConnectFieldInput;
  StudyStudySitesConnectOrCreateFieldInput: StudyStudySitesConnectOrCreateFieldInput;
  StudyStudySitesConnectOrCreateFieldInputOnCreate: StudyStudySitesConnectOrCreateFieldInputOnCreate;
  StudyStudySitesConnection: ResolverTypeWrapper<StudyStudySitesConnection>;
  StudyStudySitesConnectionSort: StudyStudySitesConnectionSort;
  StudyStudySitesConnectionWhere: StudyStudySitesConnectionWhere;
  StudyStudySitesCreateFieldInput: StudyStudySitesCreateFieldInput;
  StudyStudySitesDeleteFieldInput: StudyStudySitesDeleteFieldInput;
  StudyStudySitesDisconnectFieldInput: StudyStudySitesDisconnectFieldInput;
  StudyStudySitesFieldInput: StudyStudySitesFieldInput;
  StudyStudySitesNodeAggregationWhereInput: StudyStudySitesNodeAggregationWhereInput;
  StudyStudySitesRelationship: ResolverTypeWrapper<StudyStudySitesRelationship>;
  StudyStudySitesUpdateConnectionInput: StudyStudySitesUpdateConnectionInput;
  StudyStudySitesUpdateFieldInput: StudyStudySitesUpdateFieldInput;
  StudyUniqueWhere: StudyUniqueWhere;
  StudyUpdateInput: StudyUpdateInput;
  StudyWhere: StudyWhere;
  Task: ResolverTypeWrapper<Task>;
  TaskAggregateSelection: ResolverTypeWrapper<TaskAggregateSelection>;
  TaskConnectInput: TaskConnectInput;
  TaskConnectOrCreateInput: TaskConnectOrCreateInput;
  TaskConnectWhere: TaskConnectWhere;
  TaskCreateInput: TaskCreateInput;
  TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection: ResolverTypeWrapper<TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection>;
  TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection: ResolverTypeWrapper<TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection>;
  TaskDeleteInput: TaskDeleteInput;
  TaskDisconnectInput: TaskDisconnectInput;
  TaskEdge: ResolverTypeWrapper<TaskEdge>;
  TaskFromCuratedDatasetAggregateInput: TaskFromCuratedDatasetAggregateInput;
  TaskFromCuratedDatasetConnectFieldInput: TaskFromCuratedDatasetConnectFieldInput;
  TaskFromCuratedDatasetConnection: ResolverTypeWrapper<TaskFromCuratedDatasetConnection>;
  TaskFromCuratedDatasetConnectionSort: TaskFromCuratedDatasetConnectionSort;
  TaskFromCuratedDatasetConnectionWhere: TaskFromCuratedDatasetConnectionWhere;
  TaskFromCuratedDatasetCreateFieldInput: TaskFromCuratedDatasetCreateFieldInput;
  TaskFromCuratedDatasetDeleteFieldInput: TaskFromCuratedDatasetDeleteFieldInput;
  TaskFromCuratedDatasetDisconnectFieldInput: TaskFromCuratedDatasetDisconnectFieldInput;
  TaskFromCuratedDatasetFieldInput: TaskFromCuratedDatasetFieldInput;
  TaskFromCuratedDatasetNodeAggregationWhereInput: TaskFromCuratedDatasetNodeAggregationWhereInput;
  TaskFromCuratedDatasetRelationship: ResolverTypeWrapper<TaskFromCuratedDatasetRelationship>;
  TaskFromCuratedDatasetUpdateConnectionInput: TaskFromCuratedDatasetUpdateConnectionInput;
  TaskFromCuratedDatasetUpdateFieldInput: TaskFromCuratedDatasetUpdateFieldInput;
  TaskFromRawDatasetAggregateInput: TaskFromRawDatasetAggregateInput;
  TaskFromRawDatasetConnectFieldInput: TaskFromRawDatasetConnectFieldInput;
  TaskFromRawDatasetConnectOrCreateFieldInput: TaskFromRawDatasetConnectOrCreateFieldInput;
  TaskFromRawDatasetConnectOrCreateFieldInputOnCreate: TaskFromRawDatasetConnectOrCreateFieldInputOnCreate;
  TaskFromRawDatasetConnection: ResolverTypeWrapper<TaskFromRawDatasetConnection>;
  TaskFromRawDatasetConnectionSort: TaskFromRawDatasetConnectionSort;
  TaskFromRawDatasetConnectionWhere: TaskFromRawDatasetConnectionWhere;
  TaskFromRawDatasetCreateFieldInput: TaskFromRawDatasetCreateFieldInput;
  TaskFromRawDatasetDeleteFieldInput: TaskFromRawDatasetDeleteFieldInput;
  TaskFromRawDatasetDisconnectFieldInput: TaskFromRawDatasetDisconnectFieldInput;
  TaskFromRawDatasetFieldInput: TaskFromRawDatasetFieldInput;
  TaskFromRawDatasetNodeAggregationWhereInput: TaskFromRawDatasetNodeAggregationWhereInput;
  TaskFromRawDatasetRelationship: ResolverTypeWrapper<TaskFromRawDatasetRelationship>;
  TaskFromRawDatasetUpdateConnectionInput: TaskFromRawDatasetUpdateConnectionInput;
  TaskFromRawDatasetUpdateFieldInput: TaskFromRawDatasetUpdateFieldInput;
  TaskGeneratedCuratedDatasetAggregateInput: TaskGeneratedCuratedDatasetAggregateInput;
  TaskGeneratedCuratedDatasetConnectFieldInput: TaskGeneratedCuratedDatasetConnectFieldInput;
  TaskGeneratedCuratedDatasetConnectOrCreateFieldInput: TaskGeneratedCuratedDatasetConnectOrCreateFieldInput;
  TaskGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate: TaskGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate;
  TaskGeneratedCuratedDatasetConnection: ResolverTypeWrapper<TaskGeneratedCuratedDatasetConnection>;
  TaskGeneratedCuratedDatasetConnectionSort: TaskGeneratedCuratedDatasetConnectionSort;
  TaskGeneratedCuratedDatasetConnectionWhere: TaskGeneratedCuratedDatasetConnectionWhere;
  TaskGeneratedCuratedDatasetCreateFieldInput: TaskGeneratedCuratedDatasetCreateFieldInput;
  TaskGeneratedCuratedDatasetDeleteFieldInput: TaskGeneratedCuratedDatasetDeleteFieldInput;
  TaskGeneratedCuratedDatasetDisconnectFieldInput: TaskGeneratedCuratedDatasetDisconnectFieldInput;
  TaskGeneratedCuratedDatasetFieldInput: TaskGeneratedCuratedDatasetFieldInput;
  TaskGeneratedCuratedDatasetNodeAggregationWhereInput: TaskGeneratedCuratedDatasetNodeAggregationWhereInput;
  TaskGeneratedCuratedDatasetRelationship: ResolverTypeWrapper<TaskGeneratedCuratedDatasetRelationship>;
  TaskGeneratedCuratedDatasetUpdateConnectionInput: TaskGeneratedCuratedDatasetUpdateConnectionInput;
  TaskGeneratedCuratedDatasetUpdateFieldInput: TaskGeneratedCuratedDatasetUpdateFieldInput;
  TaskGeneratedExportAggregateInput: TaskGeneratedExportAggregateInput;
  TaskGeneratedExportConnectFieldInput: TaskGeneratedExportConnectFieldInput;
  TaskGeneratedExportConnectOrCreateFieldInput: TaskGeneratedExportConnectOrCreateFieldInput;
  TaskGeneratedExportConnectOrCreateFieldInputOnCreate: TaskGeneratedExportConnectOrCreateFieldInputOnCreate;
  TaskGeneratedExportConnection: ResolverTypeWrapper<TaskGeneratedExportConnection>;
  TaskGeneratedExportConnectionSort: TaskGeneratedExportConnectionSort;
  TaskGeneratedExportConnectionWhere: TaskGeneratedExportConnectionWhere;
  TaskGeneratedExportCreateFieldInput: TaskGeneratedExportCreateFieldInput;
  TaskGeneratedExportDeleteFieldInput: TaskGeneratedExportDeleteFieldInput;
  TaskGeneratedExportDisconnectFieldInput: TaskGeneratedExportDisconnectFieldInput;
  TaskGeneratedExportFieldInput: TaskGeneratedExportFieldInput;
  TaskGeneratedExportNodeAggregationWhereInput: TaskGeneratedExportNodeAggregationWhereInput;
  TaskGeneratedExportRelationship: ResolverTypeWrapper<TaskGeneratedExportRelationship>;
  TaskGeneratedExportUpdateConnectionInput: TaskGeneratedExportUpdateConnectionInput;
  TaskGeneratedExportUpdateFieldInput: TaskGeneratedExportUpdateFieldInput;
  TaskMinioUploadGeneratedExportAggregationSelection: ResolverTypeWrapper<TaskMinioUploadGeneratedExportAggregationSelection>;
  TaskMinioUploadGeneratedExportNodeAggregateSelection: ResolverTypeWrapper<TaskMinioUploadGeneratedExportNodeAggregateSelection>;
  TaskOptions: TaskOptions;
  TaskRawDatasetFromRawDatasetAggregationSelection: ResolverTypeWrapper<TaskRawDatasetFromRawDatasetAggregationSelection>;
  TaskRawDatasetFromRawDatasetNodeAggregateSelection: ResolverTypeWrapper<TaskRawDatasetFromRawDatasetNodeAggregateSelection>;
  TaskRelationInput: TaskRelationInput;
  TaskSort: TaskSort;
  TaskTaskFromCuratedDatasetAggregationSelection: ResolverTypeWrapper<TaskTaskFromCuratedDatasetAggregationSelection>;
  TaskTaskFromCuratedDatasetNodeAggregateSelection: ResolverTypeWrapper<TaskTaskFromCuratedDatasetNodeAggregateSelection>;
  TaskUpdateInput: TaskUpdateInput;
  TaskWhere: TaskWhere;
  TasksConnection: ResolverTypeWrapper<TasksConnection>;
  UpdateClientRolesMutationResponse: ResolverTypeWrapper<UpdateClientRolesMutationResponse>;
  UpdateClientUsersMutationResponse: ResolverTypeWrapper<UpdateClientUsersMutationResponse>;
  UpdateClientsMutationResponse: ResolverTypeWrapper<UpdateClientsMutationResponse>;
  UpdateCuratedDatasetsMutationResponse: ResolverTypeWrapper<UpdateCuratedDatasetsMutationResponse>;
  UpdateDataVariableFieldDefinitionsMutationResponse: ResolverTypeWrapper<UpdateDataVariableFieldDefinitionsMutationResponse>;
  UpdateDataVariableFieldsMutationResponse: ResolverTypeWrapper<UpdateDataVariableFieldsMutationResponse>;
  UpdateDataVariableValuesMutationResponse: ResolverTypeWrapper<UpdateDataVariableValuesMutationResponse>;
  UpdateDataVariablesMutationResponse: ResolverTypeWrapper<UpdateDataVariablesMutationResponse>;
  UpdateFileValidationsMutationResponse: ResolverTypeWrapper<UpdateFileValidationsMutationResponse>;
  UpdateGeographyCitiesMutationResponse: ResolverTypeWrapper<UpdateGeographyCitiesMutationResponse>;
  UpdateHarmonizedDatasetsMutationResponse: ResolverTypeWrapper<UpdateHarmonizedDatasetsMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateKeycloakUsersMutationResponse: ResolverTypeWrapper<UpdateKeycloakUsersMutationResponse>;
  UpdateMinioBucketsMutationResponse: ResolverTypeWrapper<UpdateMinioBucketsMutationResponse>;
  UpdateMinioUploadsMutationResponse: ResolverTypeWrapper<UpdateMinioUploadsMutationResponse>;
  UpdateMismatchesMutationResponse: ResolverTypeWrapper<UpdateMismatchesMutationResponse>;
  UpdateNeo4JUpdateStatsMutationResponse: ResolverTypeWrapper<UpdateNeo4JUpdateStatsMutationResponse>;
  UpdateOntologiesMutationResponse: ResolverTypeWrapper<UpdateOntologiesMutationResponse>;
  UpdateOntologyClassesMutationResponse: ResolverTypeWrapper<UpdateOntologyClassesMutationResponse>;
  UpdateOntologyRelationsMutationResponse: ResolverTypeWrapper<UpdateOntologyRelationsMutationResponse>;
  UpdateRawDatasetsMutationResponse: ResolverTypeWrapper<UpdateRawDatasetsMutationResponse>;
  UpdateStudiesMutationResponse: ResolverTypeWrapper<UpdateStudiesMutationResponse>;
  UpdateTasksMutationResponse: ResolverTypeWrapper<UpdateTasksMutationResponse>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CalendarHeatmapDatum: CalendarHeatmapDatum;
  Client: Client;
  ClientAggregateSelection: ClientAggregateSelection;
  ClientCreateInput: ClientCreateInput;
  ClientEdge: ClientEdge;
  ClientOptions: ClientOptions;
  ClientRole: ClientRole;
  ClientRoleAggregateSelection: ClientRoleAggregateSelection;
  ClientRoleCreateInput: ClientRoleCreateInput;
  ClientRoleEdge: ClientRoleEdge;
  ClientRoleOptions: ClientRoleOptions;
  ClientRoleSort: ClientRoleSort;
  ClientRoleUpdateInput: ClientRoleUpdateInput;
  ClientRoleWhere: ClientRoleWhere;
  ClientRolesConnection: ClientRolesConnection;
  ClientSort: ClientSort;
  ClientUpdateInput: ClientUpdateInput;
  ClientUser: ClientUser;
  ClientUserAggregateSelection: ClientUserAggregateSelection;
  ClientUserCreateInput: ClientUserCreateInput;
  ClientUserEdge: ClientUserEdge;
  ClientUserOptions: ClientUserOptions;
  ClientUserSort: ClientUserSort;
  ClientUserUpdateInput: ClientUserUpdateInput;
  ClientUserWhere: ClientUserWhere;
  ClientUsersConnection: ClientUsersConnection;
  ClientWhere: ClientWhere;
  ClientsConnection: ClientsConnection;
  CreateClientRolesMutationResponse: CreateClientRolesMutationResponse;
  CreateClientUsersMutationResponse: CreateClientUsersMutationResponse;
  CreateClientsMutationResponse: CreateClientsMutationResponse;
  CreateCuratedDatasetsMutationResponse: CreateCuratedDatasetsMutationResponse;
  CreateDataVariableFieldDefinitionsMutationResponse: CreateDataVariableFieldDefinitionsMutationResponse;
  CreateDataVariableFieldsMutationResponse: CreateDataVariableFieldsMutationResponse;
  CreateDataVariableValuesMutationResponse: CreateDataVariableValuesMutationResponse;
  CreateDataVariablesMutationResponse: CreateDataVariablesMutationResponse;
  CreateFileValidationsMutationResponse: CreateFileValidationsMutationResponse;
  CreateGeographyCitiesMutationResponse: CreateGeographyCitiesMutationResponse;
  CreateHarmonizedDatasetsMutationResponse: CreateHarmonizedDatasetsMutationResponse;
  CreateInfo: CreateInfo;
  CreateKeycloakUsersMutationResponse: CreateKeycloakUsersMutationResponse;
  CreateMinioBucketsMutationResponse: CreateMinioBucketsMutationResponse;
  CreateMinioUploadsMutationResponse: CreateMinioUploadsMutationResponse;
  CreateMismatchesMutationResponse: CreateMismatchesMutationResponse;
  CreateNeo4JUpdateStatsMutationResponse: CreateNeo4JUpdateStatsMutationResponse;
  CreateOntologiesMutationResponse: CreateOntologiesMutationResponse;
  CreateOntologyClassesMutationResponse: CreateOntologyClassesMutationResponse;
  CreateOntologyRelationsMutationResponse: CreateOntologyRelationsMutationResponse;
  CreateRawDatasetsMutationResponse: CreateRawDatasetsMutationResponse;
  CreateStudiesMutationResponse: CreateStudiesMutationResponse;
  CreateTasksMutationResponse: CreateTasksMutationResponse;
  CuratedDataset: CuratedDataset;
  CuratedDatasetAggregateSelection: CuratedDatasetAggregateSelection;
  CuratedDatasetConnectInput: CuratedDatasetConnectInput;
  CuratedDatasetConnectOrCreateInput: CuratedDatasetConnectOrCreateInput;
  CuratedDatasetConnectOrCreateWhere: CuratedDatasetConnectOrCreateWhere;
  CuratedDatasetConnectWhere: CuratedDatasetConnectWhere;
  CuratedDatasetCreateInput: CuratedDatasetCreateInput;
  CuratedDatasetDataVariableDataVariablesAggregationSelection: CuratedDatasetDataVariableDataVariablesAggregationSelection;
  CuratedDatasetDataVariableDataVariablesNodeAggregateSelection: CuratedDatasetDataVariableDataVariablesNodeAggregateSelection;
  CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection: CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection;
  CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection: CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection;
  CuratedDatasetDataVariablesAggregateInput: CuratedDatasetDataVariablesAggregateInput;
  CuratedDatasetDataVariablesConnectFieldInput: CuratedDatasetDataVariablesConnectFieldInput;
  CuratedDatasetDataVariablesConnectOrCreateFieldInput: CuratedDatasetDataVariablesConnectOrCreateFieldInput;
  CuratedDatasetDataVariablesConnectOrCreateFieldInputOnCreate: CuratedDatasetDataVariablesConnectOrCreateFieldInputOnCreate;
  CuratedDatasetDataVariablesConnection: CuratedDatasetDataVariablesConnection;
  CuratedDatasetDataVariablesConnectionSort: CuratedDatasetDataVariablesConnectionSort;
  CuratedDatasetDataVariablesConnectionWhere: CuratedDatasetDataVariablesConnectionWhere;
  CuratedDatasetDataVariablesCreateFieldInput: CuratedDatasetDataVariablesCreateFieldInput;
  CuratedDatasetDataVariablesDeleteFieldInput: CuratedDatasetDataVariablesDeleteFieldInput;
  CuratedDatasetDataVariablesDisconnectFieldInput: CuratedDatasetDataVariablesDisconnectFieldInput;
  CuratedDatasetDataVariablesFieldInput: CuratedDatasetDataVariablesFieldInput;
  CuratedDatasetDataVariablesNodeAggregationWhereInput: CuratedDatasetDataVariablesNodeAggregationWhereInput;
  CuratedDatasetDataVariablesRelationship: CuratedDatasetDataVariablesRelationship;
  CuratedDatasetDataVariablesUpdateConnectionInput: CuratedDatasetDataVariablesUpdateConnectionInput;
  CuratedDatasetDataVariablesUpdateFieldInput: CuratedDatasetDataVariablesUpdateFieldInput;
  CuratedDatasetDeleteInput: CuratedDatasetDeleteInput;
  CuratedDatasetDisconnectInput: CuratedDatasetDisconnectInput;
  CuratedDatasetEdge: CuratedDatasetEdge;
  CuratedDatasetExportTaskAggregateInput: CuratedDatasetExportTaskAggregateInput;
  CuratedDatasetExportTaskConnectFieldInput: CuratedDatasetExportTaskConnectFieldInput;
  CuratedDatasetExportTaskConnection: CuratedDatasetExportTaskConnection;
  CuratedDatasetExportTaskConnectionSort: CuratedDatasetExportTaskConnectionSort;
  CuratedDatasetExportTaskConnectionWhere: CuratedDatasetExportTaskConnectionWhere;
  CuratedDatasetExportTaskCreateFieldInput: CuratedDatasetExportTaskCreateFieldInput;
  CuratedDatasetExportTaskDeleteFieldInput: CuratedDatasetExportTaskDeleteFieldInput;
  CuratedDatasetExportTaskDisconnectFieldInput: CuratedDatasetExportTaskDisconnectFieldInput;
  CuratedDatasetExportTaskFieldInput: CuratedDatasetExportTaskFieldInput;
  CuratedDatasetExportTaskNodeAggregationWhereInput: CuratedDatasetExportTaskNodeAggregationWhereInput;
  CuratedDatasetExportTaskRelationship: CuratedDatasetExportTaskRelationship;
  CuratedDatasetExportTaskUpdateConnectionInput: CuratedDatasetExportTaskUpdateConnectionInput;
  CuratedDatasetExportTaskUpdateFieldInput: CuratedDatasetExportTaskUpdateFieldInput;
  CuratedDatasetFieldDefinitionsAggregateInput: CuratedDatasetFieldDefinitionsAggregateInput;
  CuratedDatasetFieldDefinitionsConnectFieldInput: CuratedDatasetFieldDefinitionsConnectFieldInput;
  CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput: CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput;
  CuratedDatasetFieldDefinitionsConnectOrCreateFieldInputOnCreate: CuratedDatasetFieldDefinitionsConnectOrCreateFieldInputOnCreate;
  CuratedDatasetFieldDefinitionsConnection: CuratedDatasetFieldDefinitionsConnection;
  CuratedDatasetFieldDefinitionsConnectionSort: CuratedDatasetFieldDefinitionsConnectionSort;
  CuratedDatasetFieldDefinitionsConnectionWhere: CuratedDatasetFieldDefinitionsConnectionWhere;
  CuratedDatasetFieldDefinitionsCreateFieldInput: CuratedDatasetFieldDefinitionsCreateFieldInput;
  CuratedDatasetFieldDefinitionsDeleteFieldInput: CuratedDatasetFieldDefinitionsDeleteFieldInput;
  CuratedDatasetFieldDefinitionsDisconnectFieldInput: CuratedDatasetFieldDefinitionsDisconnectFieldInput;
  CuratedDatasetFieldDefinitionsFieldInput: CuratedDatasetFieldDefinitionsFieldInput;
  CuratedDatasetFieldDefinitionsNodeAggregationWhereInput: CuratedDatasetFieldDefinitionsNodeAggregationWhereInput;
  CuratedDatasetFieldDefinitionsRelationship: CuratedDatasetFieldDefinitionsRelationship;
  CuratedDatasetFieldDefinitionsUpdateConnectionInput: CuratedDatasetFieldDefinitionsUpdateConnectionInput;
  CuratedDatasetFieldDefinitionsUpdateFieldInput: CuratedDatasetFieldDefinitionsUpdateFieldInput;
  CuratedDatasetFunnelTaskAggregateInput: CuratedDatasetFunnelTaskAggregateInput;
  CuratedDatasetFunnelTaskConnectFieldInput: CuratedDatasetFunnelTaskConnectFieldInput;
  CuratedDatasetFunnelTaskConnection: CuratedDatasetFunnelTaskConnection;
  CuratedDatasetFunnelTaskConnectionSort: CuratedDatasetFunnelTaskConnectionSort;
  CuratedDatasetFunnelTaskConnectionWhere: CuratedDatasetFunnelTaskConnectionWhere;
  CuratedDatasetFunnelTaskCreateFieldInput: CuratedDatasetFunnelTaskCreateFieldInput;
  CuratedDatasetFunnelTaskDeleteFieldInput: CuratedDatasetFunnelTaskDeleteFieldInput;
  CuratedDatasetFunnelTaskDisconnectFieldInput: CuratedDatasetFunnelTaskDisconnectFieldInput;
  CuratedDatasetFunnelTaskFieldInput: CuratedDatasetFunnelTaskFieldInput;
  CuratedDatasetFunnelTaskNodeAggregationWhereInput: CuratedDatasetFunnelTaskNodeAggregationWhereInput;
  CuratedDatasetFunnelTaskRelationship: CuratedDatasetFunnelTaskRelationship;
  CuratedDatasetFunnelTaskUpdateConnectionInput: CuratedDatasetFunnelTaskUpdateConnectionInput;
  CuratedDatasetFunnelTaskUpdateFieldInput: CuratedDatasetFunnelTaskUpdateFieldInput;
  CuratedDatasetGeneratedByRawDatasetAggregateInput: CuratedDatasetGeneratedByRawDatasetAggregateInput;
  CuratedDatasetGeneratedByRawDatasetConnectFieldInput: CuratedDatasetGeneratedByRawDatasetConnectFieldInput;
  CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput: CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput;
  CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInputOnCreate: CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInputOnCreate;
  CuratedDatasetGeneratedByRawDatasetConnection: CuratedDatasetGeneratedByRawDatasetConnection;
  CuratedDatasetGeneratedByRawDatasetConnectionSort: CuratedDatasetGeneratedByRawDatasetConnectionSort;
  CuratedDatasetGeneratedByRawDatasetConnectionWhere: CuratedDatasetGeneratedByRawDatasetConnectionWhere;
  CuratedDatasetGeneratedByRawDatasetCreateFieldInput: CuratedDatasetGeneratedByRawDatasetCreateFieldInput;
  CuratedDatasetGeneratedByRawDatasetDeleteFieldInput: CuratedDatasetGeneratedByRawDatasetDeleteFieldInput;
  CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput: CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput;
  CuratedDatasetGeneratedByRawDatasetFieldInput: CuratedDatasetGeneratedByRawDatasetFieldInput;
  CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput: CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput;
  CuratedDatasetGeneratedByRawDatasetRelationship: CuratedDatasetGeneratedByRawDatasetRelationship;
  CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput: CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput;
  CuratedDatasetGeneratedByRawDatasetUpdateFieldInput: CuratedDatasetGeneratedByRawDatasetUpdateFieldInput;
  CuratedDatasetOnCreateInput: CuratedDatasetOnCreateInput;
  CuratedDatasetOptions: CuratedDatasetOptions;
  CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection: CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection;
  CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection: CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection;
  CuratedDatasetRelationInput: CuratedDatasetRelationInput;
  CuratedDatasetSort: CuratedDatasetSort;
  CuratedDatasetTaskExportTaskAggregationSelection: CuratedDatasetTaskExportTaskAggregationSelection;
  CuratedDatasetTaskExportTaskNodeAggregateSelection: CuratedDatasetTaskExportTaskNodeAggregateSelection;
  CuratedDatasetTaskFunnelTaskAggregationSelection: CuratedDatasetTaskFunnelTaskAggregationSelection;
  CuratedDatasetTaskFunnelTaskNodeAggregateSelection: CuratedDatasetTaskFunnelTaskNodeAggregateSelection;
  CuratedDatasetUniqueWhere: CuratedDatasetUniqueWhere;
  CuratedDatasetUpdateInput: CuratedDatasetUpdateInput;
  CuratedDatasetWhere: CuratedDatasetWhere;
  CuratedDatasetsConnection: CuratedDatasetsConnection;
  DataVariable: DataVariable;
  DataVariableAggregateSelection: DataVariableAggregateSelection;
  DataVariableConnectInput: DataVariableConnectInput;
  DataVariableConnectOrCreateInput: DataVariableConnectOrCreateInput;
  DataVariableConnectOrCreateWhere: DataVariableConnectOrCreateWhere;
  DataVariableConnectWhere: DataVariableConnectWhere;
  DataVariableCreateInput: DataVariableCreateInput;
  DataVariableCuratedDatasetAggregateInput: DataVariableCuratedDatasetAggregateInput;
  DataVariableCuratedDatasetConnectFieldInput: DataVariableCuratedDatasetConnectFieldInput;
  DataVariableCuratedDatasetConnectOrCreateFieldInput: DataVariableCuratedDatasetConnectOrCreateFieldInput;
  DataVariableCuratedDatasetConnectOrCreateFieldInputOnCreate: DataVariableCuratedDatasetConnectOrCreateFieldInputOnCreate;
  DataVariableCuratedDatasetConnection: DataVariableCuratedDatasetConnection;
  DataVariableCuratedDatasetConnectionSort: DataVariableCuratedDatasetConnectionSort;
  DataVariableCuratedDatasetConnectionWhere: DataVariableCuratedDatasetConnectionWhere;
  DataVariableCuratedDatasetCreateFieldInput: DataVariableCuratedDatasetCreateFieldInput;
  DataVariableCuratedDatasetCuratedDatasetAggregationSelection: DataVariableCuratedDatasetCuratedDatasetAggregationSelection;
  DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection: DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection;
  DataVariableCuratedDatasetDeleteFieldInput: DataVariableCuratedDatasetDeleteFieldInput;
  DataVariableCuratedDatasetDisconnectFieldInput: DataVariableCuratedDatasetDisconnectFieldInput;
  DataVariableCuratedDatasetFieldInput: DataVariableCuratedDatasetFieldInput;
  DataVariableCuratedDatasetNodeAggregationWhereInput: DataVariableCuratedDatasetNodeAggregationWhereInput;
  DataVariableCuratedDatasetRelationship: DataVariableCuratedDatasetRelationship;
  DataVariableCuratedDatasetUpdateConnectionInput: DataVariableCuratedDatasetUpdateConnectionInput;
  DataVariableCuratedDatasetUpdateFieldInput: DataVariableCuratedDatasetUpdateFieldInput;
  DataVariableDataVariableFieldFieldsAggregationSelection: DataVariableDataVariableFieldFieldsAggregationSelection;
  DataVariableDataVariableFieldFieldsNodeAggregateSelection: DataVariableDataVariableFieldFieldsNodeAggregateSelection;
  DataVariableDeleteInput: DataVariableDeleteInput;
  DataVariableDisconnectInput: DataVariableDisconnectInput;
  DataVariableEdge: DataVariableEdge;
  DataVariableField: DataVariableField;
  DataVariableFieldAggregateSelection: DataVariableFieldAggregateSelection;
  DataVariableFieldConnectInput: DataVariableFieldConnectInput;
  DataVariableFieldConnectOrCreateInput: DataVariableFieldConnectOrCreateInput;
  DataVariableFieldConnectOrCreateWhere: DataVariableFieldConnectOrCreateWhere;
  DataVariableFieldConnectWhere: DataVariableFieldConnectWhere;
  DataVariableFieldCreateInput: DataVariableFieldCreateInput;
  DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection: DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection;
  DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection: DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection;
  DataVariableFieldDefinition: DataVariableFieldDefinition;
  DataVariableFieldDefinitionAggregateSelection: DataVariableFieldDefinitionAggregateSelection;
  DataVariableFieldDefinitionConnectInput: DataVariableFieldDefinitionConnectInput;
  DataVariableFieldDefinitionConnectOrCreateInput: DataVariableFieldDefinitionConnectOrCreateInput;
  DataVariableFieldDefinitionConnectOrCreateWhere: DataVariableFieldDefinitionConnectOrCreateWhere;
  DataVariableFieldDefinitionConnectWhere: DataVariableFieldDefinitionConnectWhere;
  DataVariableFieldDefinitionCreateInput: DataVariableFieldDefinitionCreateInput;
  DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection: DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection;
  DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection: DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection;
  DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection: DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection;
  DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection: DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection;
  DataVariableFieldDefinitionDeleteInput: DataVariableFieldDefinitionDeleteInput;
  DataVariableFieldDefinitionDisconnectInput: DataVariableFieldDefinitionDisconnectInput;
  DataVariableFieldDefinitionEdge: DataVariableFieldDefinitionEdge;
  DataVariableFieldDefinitionHasCuratedDatasetAggregateInput: DataVariableFieldDefinitionHasCuratedDatasetAggregateInput;
  DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput: DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput: DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInputOnCreate: DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInputOnCreate;
  DataVariableFieldDefinitionHasCuratedDatasetConnection: DataVariableFieldDefinitionHasCuratedDatasetConnection;
  DataVariableFieldDefinitionHasCuratedDatasetConnectionSort: DataVariableFieldDefinitionHasCuratedDatasetConnectionSort;
  DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere: DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere;
  DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput: DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput: DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput: DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetFieldInput: DataVariableFieldDefinitionHasCuratedDatasetFieldInput;
  DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput: DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput;
  DataVariableFieldDefinitionHasCuratedDatasetRelationship: DataVariableFieldDefinitionHasCuratedDatasetRelationship;
  DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput: DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput;
  DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput: DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput;
  DataVariableFieldDefinitionHasFieldValuesAggregateInput: DataVariableFieldDefinitionHasFieldValuesAggregateInput;
  DataVariableFieldDefinitionHasFieldValuesConnectFieldInput: DataVariableFieldDefinitionHasFieldValuesConnectFieldInput;
  DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput: DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput;
  DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInputOnCreate: DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInputOnCreate;
  DataVariableFieldDefinitionHasFieldValuesConnection: DataVariableFieldDefinitionHasFieldValuesConnection;
  DataVariableFieldDefinitionHasFieldValuesConnectionSort: DataVariableFieldDefinitionHasFieldValuesConnectionSort;
  DataVariableFieldDefinitionHasFieldValuesConnectionWhere: DataVariableFieldDefinitionHasFieldValuesConnectionWhere;
  DataVariableFieldDefinitionHasFieldValuesCreateFieldInput: DataVariableFieldDefinitionHasFieldValuesCreateFieldInput;
  DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput: DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput;
  DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput: DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput;
  DataVariableFieldDefinitionHasFieldValuesFieldInput: DataVariableFieldDefinitionHasFieldValuesFieldInput;
  DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput: DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput;
  DataVariableFieldDefinitionHasFieldValuesRelationship: DataVariableFieldDefinitionHasFieldValuesRelationship;
  DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput: DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput;
  DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput: DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput;
  DataVariableFieldDefinitionOnCreateInput: DataVariableFieldDefinitionOnCreateInput;
  DataVariableFieldDefinitionOptions: DataVariableFieldDefinitionOptions;
  DataVariableFieldDefinitionRelationInput: DataVariableFieldDefinitionRelationInput;
  DataVariableFieldDefinitionSort: DataVariableFieldDefinitionSort;
  DataVariableFieldDefinitionUniqueWhere: DataVariableFieldDefinitionUniqueWhere;
  DataVariableFieldDefinitionUpdateInput: DataVariableFieldDefinitionUpdateInput;
  DataVariableFieldDefinitionWhere: DataVariableFieldDefinitionWhere;
  DataVariableFieldDefinitionsConnection: DataVariableFieldDefinitionsConnection;
  DataVariableFieldDeleteInput: DataVariableFieldDeleteInput;
  DataVariableFieldDisconnectInput: DataVariableFieldDisconnectInput;
  DataVariableFieldEdge: DataVariableFieldEdge;
  DataVariableFieldHasFieldDefinitionAggregateInput: DataVariableFieldHasFieldDefinitionAggregateInput;
  DataVariableFieldHasFieldDefinitionConnectFieldInput: DataVariableFieldHasFieldDefinitionConnectFieldInput;
  DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput: DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput;
  DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInputOnCreate: DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInputOnCreate;
  DataVariableFieldHasFieldDefinitionConnection: DataVariableFieldHasFieldDefinitionConnection;
  DataVariableFieldHasFieldDefinitionConnectionSort: DataVariableFieldHasFieldDefinitionConnectionSort;
  DataVariableFieldHasFieldDefinitionConnectionWhere: DataVariableFieldHasFieldDefinitionConnectionWhere;
  DataVariableFieldHasFieldDefinitionCreateFieldInput: DataVariableFieldHasFieldDefinitionCreateFieldInput;
  DataVariableFieldHasFieldDefinitionDeleteFieldInput: DataVariableFieldHasFieldDefinitionDeleteFieldInput;
  DataVariableFieldHasFieldDefinitionDisconnectFieldInput: DataVariableFieldHasFieldDefinitionDisconnectFieldInput;
  DataVariableFieldHasFieldDefinitionFieldInput: DataVariableFieldHasFieldDefinitionFieldInput;
  DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput: DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput;
  DataVariableFieldHasFieldDefinitionRelationship: DataVariableFieldHasFieldDefinitionRelationship;
  DataVariableFieldHasFieldDefinitionUpdateConnectionInput: DataVariableFieldHasFieldDefinitionUpdateConnectionInput;
  DataVariableFieldHasFieldDefinitionUpdateFieldInput: DataVariableFieldHasFieldDefinitionUpdateFieldInput;
  DataVariableFieldOnCreateInput: DataVariableFieldOnCreateInput;
  DataVariableFieldOptions: DataVariableFieldOptions;
  DataVariableFieldRelationInput: DataVariableFieldRelationInput;
  DataVariableFieldSort: DataVariableFieldSort;
  DataVariableFieldUniqueWhere: DataVariableFieldUniqueWhere;
  DataVariableFieldUpdateInput: DataVariableFieldUpdateInput;
  DataVariableFieldWhere: DataVariableFieldWhere;
  DataVariableFieldsAggregateInput: DataVariableFieldsAggregateInput;
  DataVariableFieldsConnectFieldInput: DataVariableFieldsConnectFieldInput;
  DataVariableFieldsConnectOrCreateFieldInput: DataVariableFieldsConnectOrCreateFieldInput;
  DataVariableFieldsConnectOrCreateFieldInputOnCreate: DataVariableFieldsConnectOrCreateFieldInputOnCreate;
  DataVariableFieldsConnection: DataVariableFieldsConnection;
  DataVariableFieldsConnectionSort: DataVariableFieldsConnectionSort;
  DataVariableFieldsConnectionWhere: DataVariableFieldsConnectionWhere;
  DataVariableFieldsCreateFieldInput: DataVariableFieldsCreateFieldInput;
  DataVariableFieldsDeleteFieldInput: DataVariableFieldsDeleteFieldInput;
  DataVariableFieldsDisconnectFieldInput: DataVariableFieldsDisconnectFieldInput;
  DataVariableFieldsFieldInput: DataVariableFieldsFieldInput;
  DataVariableFieldsNodeAggregationWhereInput: DataVariableFieldsNodeAggregationWhereInput;
  DataVariableFieldsRelationship: DataVariableFieldsRelationship;
  DataVariableFieldsUpdateConnectionInput: DataVariableFieldsUpdateConnectionInput;
  DataVariableFieldsUpdateFieldInput: DataVariableFieldsUpdateFieldInput;
  DataVariableOnCreateInput: DataVariableOnCreateInput;
  DataVariableOptions: DataVariableOptions;
  DataVariableRelationInput: DataVariableRelationInput;
  DataVariableSort: DataVariableSort;
  DataVariableUniqueWhere: DataVariableUniqueWhere;
  DataVariableUpdateInput: DataVariableUpdateInput;
  DataVariableValue: DataVariableValue;
  DataVariableValueAggregateSelection: DataVariableValueAggregateSelection;
  DataVariableValueConnectInput: DataVariableValueConnectInput;
  DataVariableValueConnectOrCreateInput: DataVariableValueConnectOrCreateInput;
  DataVariableValueConnectOrCreateWhere: DataVariableValueConnectOrCreateWhere;
  DataVariableValueConnectWhere: DataVariableValueConnectWhere;
  DataVariableValueCreateInput: DataVariableValueCreateInput;
  DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection: DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection;
  DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection: DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection;
  DataVariableValueDeleteInput: DataVariableValueDeleteInput;
  DataVariableValueDisconnectInput: DataVariableValueDisconnectInput;
  DataVariableValueEdge: DataVariableValueEdge;
  DataVariableValueFromFieldDefinitionAggregateInput: DataVariableValueFromFieldDefinitionAggregateInput;
  DataVariableValueFromFieldDefinitionConnectFieldInput: DataVariableValueFromFieldDefinitionConnectFieldInput;
  DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput: DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput;
  DataVariableValueFromFieldDefinitionConnectOrCreateFieldInputOnCreate: DataVariableValueFromFieldDefinitionConnectOrCreateFieldInputOnCreate;
  DataVariableValueFromFieldDefinitionConnection: DataVariableValueFromFieldDefinitionConnection;
  DataVariableValueFromFieldDefinitionConnectionSort: DataVariableValueFromFieldDefinitionConnectionSort;
  DataVariableValueFromFieldDefinitionConnectionWhere: DataVariableValueFromFieldDefinitionConnectionWhere;
  DataVariableValueFromFieldDefinitionCreateFieldInput: DataVariableValueFromFieldDefinitionCreateFieldInput;
  DataVariableValueFromFieldDefinitionDeleteFieldInput: DataVariableValueFromFieldDefinitionDeleteFieldInput;
  DataVariableValueFromFieldDefinitionDisconnectFieldInput: DataVariableValueFromFieldDefinitionDisconnectFieldInput;
  DataVariableValueFromFieldDefinitionFieldInput: DataVariableValueFromFieldDefinitionFieldInput;
  DataVariableValueFromFieldDefinitionNodeAggregationWhereInput: DataVariableValueFromFieldDefinitionNodeAggregationWhereInput;
  DataVariableValueFromFieldDefinitionRelationship: DataVariableValueFromFieldDefinitionRelationship;
  DataVariableValueFromFieldDefinitionUpdateConnectionInput: DataVariableValueFromFieldDefinitionUpdateConnectionInput;
  DataVariableValueFromFieldDefinitionUpdateFieldInput: DataVariableValueFromFieldDefinitionUpdateFieldInput;
  DataVariableValueOnCreateInput: DataVariableValueOnCreateInput;
  DataVariableValueOptions: DataVariableValueOptions;
  DataVariableValueRelationInput: DataVariableValueRelationInput;
  DataVariableValueSort: DataVariableValueSort;
  DataVariableValueUniqueWhere: DataVariableValueUniqueWhere;
  DataVariableValueUpdateInput: DataVariableValueUpdateInput;
  DataVariableValueWhere: DataVariableValueWhere;
  DataVariableValuesConnection: DataVariableValuesConnection;
  DataVariableWhere: DataVariableWhere;
  DataVariablesConnection: DataVariablesConnection;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DateTimeAggregateSelectionNonNullable: DateTimeAggregateSelectionNonNullable;
  DeleteInfo: DeleteInfo;
  Email: Scalars['Email'];
  FileValidation: FileValidation;
  FileValidationAggregateSelection: FileValidationAggregateSelection;
  FileValidationCreateInput: FileValidationCreateInput;
  FileValidationEdge: FileValidationEdge;
  FileValidationOptions: FileValidationOptions;
  FileValidationSort: FileValidationSort;
  FileValidationUpdateInput: FileValidationUpdateInput;
  FileValidationWhere: FileValidationWhere;
  FileValidationsConnection: FileValidationsConnection;
  Float: Scalars['Float'];
  FloatAggregateSelectionNonNullable: FloatAggregateSelectionNonNullable;
  GeographyCitiesConnection: GeographyCitiesConnection;
  GeographyCity: GeographyCity;
  GeographyCityAggregateSelection: GeographyCityAggregateSelection;
  GeographyCityConnectOrCreateWhere: GeographyCityConnectOrCreateWhere;
  GeographyCityConnectWhere: GeographyCityConnectWhere;
  GeographyCityCreateInput: GeographyCityCreateInput;
  GeographyCityEdge: GeographyCityEdge;
  GeographyCityOnCreateInput: GeographyCityOnCreateInput;
  GeographyCityOptions: GeographyCityOptions;
  GeographyCitySort: GeographyCitySort;
  GeographyCityUniqueWhere: GeographyCityUniqueWhere;
  GeographyCityUpdateInput: GeographyCityUpdateInput;
  GeographyCityWhere: GeographyCityWhere;
  HarmonizedDataset: HarmonizedDataset;
  HarmonizedDatasetAggregateSelection: HarmonizedDatasetAggregateSelection;
  HarmonizedDatasetConnectInput: HarmonizedDatasetConnectInput;
  HarmonizedDatasetConnectOrCreateInput: HarmonizedDatasetConnectOrCreateInput;
  HarmonizedDatasetCreateInput: HarmonizedDatasetCreateInput;
  HarmonizedDatasetDeleteInput: HarmonizedDatasetDeleteInput;
  HarmonizedDatasetDisconnectInput: HarmonizedDatasetDisconnectInput;
  HarmonizedDatasetEdge: HarmonizedDatasetEdge;
  HarmonizedDatasetOptions: HarmonizedDatasetOptions;
  HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection: HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection;
  HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection: HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection;
  HarmonizedDatasetRawDatasetsAggregateInput: HarmonizedDatasetRawDatasetsAggregateInput;
  HarmonizedDatasetRawDatasetsConnectFieldInput: HarmonizedDatasetRawDatasetsConnectFieldInput;
  HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput: HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput;
  HarmonizedDatasetRawDatasetsConnectOrCreateFieldInputOnCreate: HarmonizedDatasetRawDatasetsConnectOrCreateFieldInputOnCreate;
  HarmonizedDatasetRawDatasetsConnection: HarmonizedDatasetRawDatasetsConnection;
  HarmonizedDatasetRawDatasetsConnectionSort: HarmonizedDatasetRawDatasetsConnectionSort;
  HarmonizedDatasetRawDatasetsConnectionWhere: HarmonizedDatasetRawDatasetsConnectionWhere;
  HarmonizedDatasetRawDatasetsCreateFieldInput: HarmonizedDatasetRawDatasetsCreateFieldInput;
  HarmonizedDatasetRawDatasetsDeleteFieldInput: HarmonizedDatasetRawDatasetsDeleteFieldInput;
  HarmonizedDatasetRawDatasetsDisconnectFieldInput: HarmonizedDatasetRawDatasetsDisconnectFieldInput;
  HarmonizedDatasetRawDatasetsFieldInput: HarmonizedDatasetRawDatasetsFieldInput;
  HarmonizedDatasetRawDatasetsNodeAggregationWhereInput: HarmonizedDatasetRawDatasetsNodeAggregationWhereInput;
  HarmonizedDatasetRawDatasetsRelationship: HarmonizedDatasetRawDatasetsRelationship;
  HarmonizedDatasetRawDatasetsUpdateConnectionInput: HarmonizedDatasetRawDatasetsUpdateConnectionInput;
  HarmonizedDatasetRawDatasetsUpdateFieldInput: HarmonizedDatasetRawDatasetsUpdateFieldInput;
  HarmonizedDatasetRelationInput: HarmonizedDatasetRelationInput;
  HarmonizedDatasetSort: HarmonizedDatasetSort;
  HarmonizedDatasetUpdateInput: HarmonizedDatasetUpdateInput;
  HarmonizedDatasetWhere: HarmonizedDatasetWhere;
  HarmonizedDatasetsConnection: HarmonizedDatasetsConnection;
  HasCodebook: ResolversParentTypes['MinioUploadCodeBookRawDatasetRelationship'] | ResolversParentTypes['RawDatasetCodeBookRelationship'];
  HasCodebookCreateInput: HasCodebookCreateInput;
  HasCodebookSort: HasCodebookSort;
  HasCodebookUpdateInput: HasCodebookUpdateInput;
  HasCodebookWhere: HasCodebookWhere;
  HasPairedCodebook: ResolversParentTypes['MinioUploadPairedRawdataFileRelationship'];
  HasPairedCodebookCreateInput: HasPairedCodebookCreateInput;
  HasPairedCodebookSort: HasPairedCodebookSort;
  HasPairedCodebookUpdateInput: HasPairedCodebookUpdateInput;
  HasPairedCodebookWhere: HasPairedCodebookWhere;
  HasPairedRawdatafile: ResolversParentTypes['MinioUploadPairedCodebookRelationship'];
  HasPairedRawdatafileCreateInput: HasPairedRawdatafileCreateInput;
  HasPairedRawdatafileSort: HasPairedRawdatafileSort;
  HasPairedRawdatafileUpdateInput: HasPairedRawdatafileUpdateInput;
  HasPairedRawdatafileWhere: HasPairedRawdatafileWhere;
  HasRawdatafile: ResolversParentTypes['MinioUploadRawdataFileRawDatasetRelationship'] | ResolversParentTypes['RawDatasetRawdataFileRelationship'];
  HasRawdatafileCreateInput: HasRawdatafileCreateInput;
  HasRawdatafileSort: HasRawdatafileSort;
  HasRawdatafileUpdateInput: HasRawdatafileUpdateInput;
  HasRawdatafileWhere: HasRawdatafileWhere;
  ID: Scalars['ID'];
  IDAggregateSelectionNonNullable: IdAggregateSelectionNonNullable;
  IDAggregateSelectionNullable: IdAggregateSelectionNullable;
  Int: Scalars['Int'];
  IntAggregateSelectionNullable: IntAggregateSelectionNullable;
  JSON: Scalars['JSON'];
  KeycloakUser: KeycloakUser;
  KeycloakUserAggregateSelection: KeycloakUserAggregateSelection;
  KeycloakUserCreateInput: KeycloakUserCreateInput;
  KeycloakUserEdge: KeycloakUserEdge;
  KeycloakUserOptions: KeycloakUserOptions;
  KeycloakUserSort: KeycloakUserSort;
  KeycloakUserUpdateInput: KeycloakUserUpdateInput;
  KeycloakUserWhere: KeycloakUserWhere;
  KeycloakUsersConnection: KeycloakUsersConnection;
  MinioBucket: MinioBucket;
  MinioBucketAggregateSelection: MinioBucketAggregateSelection;
  MinioBucketConnectInput: MinioBucketConnectInput;
  MinioBucketConnectOrCreateInput: MinioBucketConnectOrCreateInput;
  MinioBucketConnectWhere: MinioBucketConnectWhere;
  MinioBucketCreateInput: MinioBucketCreateInput;
  MinioBucketDeleteInput: MinioBucketDeleteInput;
  MinioBucketDisconnectInput: MinioBucketDisconnectInput;
  MinioBucketEdge: MinioBucketEdge;
  MinioBucketMinioObjectsAggregateInput: MinioBucketMinioObjectsAggregateInput;
  MinioBucketMinioObjectsConnectFieldInput: MinioBucketMinioObjectsConnectFieldInput;
  MinioBucketMinioObjectsConnectOrCreateFieldInput: MinioBucketMinioObjectsConnectOrCreateFieldInput;
  MinioBucketMinioObjectsConnectOrCreateFieldInputOnCreate: MinioBucketMinioObjectsConnectOrCreateFieldInputOnCreate;
  MinioBucketMinioObjectsConnection: MinioBucketMinioObjectsConnection;
  MinioBucketMinioObjectsConnectionSort: MinioBucketMinioObjectsConnectionSort;
  MinioBucketMinioObjectsConnectionWhere: MinioBucketMinioObjectsConnectionWhere;
  MinioBucketMinioObjectsCreateFieldInput: MinioBucketMinioObjectsCreateFieldInput;
  MinioBucketMinioObjectsDeleteFieldInput: MinioBucketMinioObjectsDeleteFieldInput;
  MinioBucketMinioObjectsDisconnectFieldInput: MinioBucketMinioObjectsDisconnectFieldInput;
  MinioBucketMinioObjectsFieldInput: MinioBucketMinioObjectsFieldInput;
  MinioBucketMinioObjectsNodeAggregationWhereInput: MinioBucketMinioObjectsNodeAggregationWhereInput;
  MinioBucketMinioObjectsRelationship: MinioBucketMinioObjectsRelationship;
  MinioBucketMinioObjectsUpdateConnectionInput: MinioBucketMinioObjectsUpdateConnectionInput;
  MinioBucketMinioObjectsUpdateFieldInput: MinioBucketMinioObjectsUpdateFieldInput;
  MinioBucketMinioUploadMinioObjectsAggregationSelection: MinioBucketMinioUploadMinioObjectsAggregationSelection;
  MinioBucketMinioUploadMinioObjectsNodeAggregateSelection: MinioBucketMinioUploadMinioObjectsNodeAggregateSelection;
  MinioBucketOptions: MinioBucketOptions;
  MinioBucketRelationInput: MinioBucketRelationInput;
  MinioBucketSort: MinioBucketSort;
  MinioBucketUpdateInput: MinioBucketUpdateInput;
  MinioBucketWhere: MinioBucketWhere;
  MinioBucketsConnection: MinioBucketsConnection;
  MinioUpload: MinioUpload;
  MinioUploadAggregateSelection: MinioUploadAggregateSelection;
  MinioUploadCodeBookRawDatasetAggregateInput: MinioUploadCodeBookRawDatasetAggregateInput;
  MinioUploadCodeBookRawDatasetConnectFieldInput: MinioUploadCodeBookRawDatasetConnectFieldInput;
  MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput: MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput;
  MinioUploadCodeBookRawDatasetConnectOrCreateFieldInputOnCreate: MinioUploadCodeBookRawDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadCodeBookRawDatasetConnection: MinioUploadCodeBookRawDatasetConnection;
  MinioUploadCodeBookRawDatasetConnectionSort: MinioUploadCodeBookRawDatasetConnectionSort;
  MinioUploadCodeBookRawDatasetConnectionWhere: MinioUploadCodeBookRawDatasetConnectionWhere;
  MinioUploadCodeBookRawDatasetCreateFieldInput: MinioUploadCodeBookRawDatasetCreateFieldInput;
  MinioUploadCodeBookRawDatasetDeleteFieldInput: MinioUploadCodeBookRawDatasetDeleteFieldInput;
  MinioUploadCodeBookRawDatasetDisconnectFieldInput: MinioUploadCodeBookRawDatasetDisconnectFieldInput;
  MinioUploadCodeBookRawDatasetFieldInput: MinioUploadCodeBookRawDatasetFieldInput;
  MinioUploadCodeBookRawDatasetNodeAggregationWhereInput: MinioUploadCodeBookRawDatasetNodeAggregationWhereInput;
  MinioUploadCodeBookRawDatasetRelationship: MinioUploadCodeBookRawDatasetRelationship;
  MinioUploadCodeBookRawDatasetUpdateConnectionInput: MinioUploadCodeBookRawDatasetUpdateConnectionInput;
  MinioUploadCodeBookRawDatasetUpdateFieldInput: MinioUploadCodeBookRawDatasetUpdateFieldInput;
  MinioUploadConnectInput: MinioUploadConnectInput;
  MinioUploadConnectOrCreateInput: MinioUploadConnectOrCreateInput;
  MinioUploadConnectOrCreateWhere: MinioUploadConnectOrCreateWhere;
  MinioUploadConnectWhere: MinioUploadConnectWhere;
  MinioUploadCreateInput: MinioUploadCreateInput;
  MinioUploadDeleteInput: MinioUploadDeleteInput;
  MinioUploadDisconnectInput: MinioUploadDisconnectInput;
  MinioUploadEdge: MinioUploadEdge;
  MinioUploadFromExportTaskAggregateInput: MinioUploadFromExportTaskAggregateInput;
  MinioUploadFromExportTaskConnectFieldInput: MinioUploadFromExportTaskConnectFieldInput;
  MinioUploadFromExportTaskConnection: MinioUploadFromExportTaskConnection;
  MinioUploadFromExportTaskConnectionSort: MinioUploadFromExportTaskConnectionSort;
  MinioUploadFromExportTaskConnectionWhere: MinioUploadFromExportTaskConnectionWhere;
  MinioUploadFromExportTaskCreateFieldInput: MinioUploadFromExportTaskCreateFieldInput;
  MinioUploadFromExportTaskDeleteFieldInput: MinioUploadFromExportTaskDeleteFieldInput;
  MinioUploadFromExportTaskDisconnectFieldInput: MinioUploadFromExportTaskDisconnectFieldInput;
  MinioUploadFromExportTaskFieldInput: MinioUploadFromExportTaskFieldInput;
  MinioUploadFromExportTaskNodeAggregationWhereInput: MinioUploadFromExportTaskNodeAggregationWhereInput;
  MinioUploadFromExportTaskRelationship: MinioUploadFromExportTaskRelationship;
  MinioUploadFromExportTaskUpdateConnectionInput: MinioUploadFromExportTaskUpdateConnectionInput;
  MinioUploadFromExportTaskUpdateFieldInput: MinioUploadFromExportTaskUpdateFieldInput;
  MinioUploadMinioUploadPairedCodebookAggregationSelection: MinioUploadMinioUploadPairedCodebookAggregationSelection;
  MinioUploadMinioUploadPairedCodebookNodeAggregateSelection: MinioUploadMinioUploadPairedCodebookNodeAggregateSelection;
  MinioUploadMinioUploadPairedRawdataFileAggregationSelection: MinioUploadMinioUploadPairedRawdataFileAggregationSelection;
  MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection: MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection;
  MinioUploadOnCreateInput: MinioUploadOnCreateInput;
  MinioUploadOptions: MinioUploadOptions;
  MinioUploadPairedCodebookAggregateInput: MinioUploadPairedCodebookAggregateInput;
  MinioUploadPairedCodebookConnectFieldInput: MinioUploadPairedCodebookConnectFieldInput;
  MinioUploadPairedCodebookConnectOrCreateFieldInput: MinioUploadPairedCodebookConnectOrCreateFieldInput;
  MinioUploadPairedCodebookConnectOrCreateFieldInputOnCreate: MinioUploadPairedCodebookConnectOrCreateFieldInputOnCreate;
  MinioUploadPairedCodebookConnection: MinioUploadPairedCodebookConnection;
  MinioUploadPairedCodebookConnectionSort: MinioUploadPairedCodebookConnectionSort;
  MinioUploadPairedCodebookConnectionWhere: MinioUploadPairedCodebookConnectionWhere;
  MinioUploadPairedCodebookCreateFieldInput: MinioUploadPairedCodebookCreateFieldInput;
  MinioUploadPairedCodebookDeleteFieldInput: MinioUploadPairedCodebookDeleteFieldInput;
  MinioUploadPairedCodebookDisconnectFieldInput: MinioUploadPairedCodebookDisconnectFieldInput;
  MinioUploadPairedCodebookFieldInput: MinioUploadPairedCodebookFieldInput;
  MinioUploadPairedCodebookNodeAggregationWhereInput: MinioUploadPairedCodebookNodeAggregationWhereInput;
  MinioUploadPairedCodebookRelationship: MinioUploadPairedCodebookRelationship;
  MinioUploadPairedCodebookUpdateConnectionInput: MinioUploadPairedCodebookUpdateConnectionInput;
  MinioUploadPairedCodebookUpdateFieldInput: MinioUploadPairedCodebookUpdateFieldInput;
  MinioUploadPairedRawdataFileAggregateInput: MinioUploadPairedRawdataFileAggregateInput;
  MinioUploadPairedRawdataFileConnectFieldInput: MinioUploadPairedRawdataFileConnectFieldInput;
  MinioUploadPairedRawdataFileConnectOrCreateFieldInput: MinioUploadPairedRawdataFileConnectOrCreateFieldInput;
  MinioUploadPairedRawdataFileConnectOrCreateFieldInputOnCreate: MinioUploadPairedRawdataFileConnectOrCreateFieldInputOnCreate;
  MinioUploadPairedRawdataFileConnection: MinioUploadPairedRawdataFileConnection;
  MinioUploadPairedRawdataFileConnectionSort: MinioUploadPairedRawdataFileConnectionSort;
  MinioUploadPairedRawdataFileConnectionWhere: MinioUploadPairedRawdataFileConnectionWhere;
  MinioUploadPairedRawdataFileCreateFieldInput: MinioUploadPairedRawdataFileCreateFieldInput;
  MinioUploadPairedRawdataFileDeleteFieldInput: MinioUploadPairedRawdataFileDeleteFieldInput;
  MinioUploadPairedRawdataFileDisconnectFieldInput: MinioUploadPairedRawdataFileDisconnectFieldInput;
  MinioUploadPairedRawdataFileFieldInput: MinioUploadPairedRawdataFileFieldInput;
  MinioUploadPairedRawdataFileNodeAggregationWhereInput: MinioUploadPairedRawdataFileNodeAggregationWhereInput;
  MinioUploadPairedRawdataFileRelationship: MinioUploadPairedRawdataFileRelationship;
  MinioUploadPairedRawdataFileUpdateConnectionInput: MinioUploadPairedRawdataFileUpdateConnectionInput;
  MinioUploadPairedRawdataFileUpdateFieldInput: MinioUploadPairedRawdataFileUpdateFieldInput;
  MinioUploadRawDatasetAggregateInput: MinioUploadRawDatasetAggregateInput;
  MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection: MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection;
  MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection: MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection;
  MinioUploadRawDatasetConnectFieldInput: MinioUploadRawDatasetConnectFieldInput;
  MinioUploadRawDatasetConnectOrCreateFieldInput: MinioUploadRawDatasetConnectOrCreateFieldInput;
  MinioUploadRawDatasetConnectOrCreateFieldInputOnCreate: MinioUploadRawDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadRawDatasetConnection: MinioUploadRawDatasetConnection;
  MinioUploadRawDatasetConnectionSort: MinioUploadRawDatasetConnectionSort;
  MinioUploadRawDatasetConnectionWhere: MinioUploadRawDatasetConnectionWhere;
  MinioUploadRawDatasetCreateFieldInput: MinioUploadRawDatasetCreateFieldInput;
  MinioUploadRawDatasetDeleteFieldInput: MinioUploadRawDatasetDeleteFieldInput;
  MinioUploadRawDatasetDisconnectFieldInput: MinioUploadRawDatasetDisconnectFieldInput;
  MinioUploadRawDatasetFieldInput: MinioUploadRawDatasetFieldInput;
  MinioUploadRawDatasetNodeAggregationWhereInput: MinioUploadRawDatasetNodeAggregationWhereInput;
  MinioUploadRawDatasetRawDatasetAggregationSelection: MinioUploadRawDatasetRawDatasetAggregationSelection;
  MinioUploadRawDatasetRawDatasetNodeAggregateSelection: MinioUploadRawDatasetRawDatasetNodeAggregateSelection;
  MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection: MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection;
  MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection: MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection;
  MinioUploadRawDatasetRelationship: MinioUploadRawDatasetRelationship;
  MinioUploadRawDatasetUpdateConnectionInput: MinioUploadRawDatasetUpdateConnectionInput;
  MinioUploadRawDatasetUpdateFieldInput: MinioUploadRawDatasetUpdateFieldInput;
  MinioUploadRawdataFileRawDatasetAggregateInput: MinioUploadRawdataFileRawDatasetAggregateInput;
  MinioUploadRawdataFileRawDatasetConnectFieldInput: MinioUploadRawdataFileRawDatasetConnectFieldInput;
  MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput: MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput;
  MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInputOnCreate: MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadRawdataFileRawDatasetConnection: MinioUploadRawdataFileRawDatasetConnection;
  MinioUploadRawdataFileRawDatasetConnectionSort: MinioUploadRawdataFileRawDatasetConnectionSort;
  MinioUploadRawdataFileRawDatasetConnectionWhere: MinioUploadRawdataFileRawDatasetConnectionWhere;
  MinioUploadRawdataFileRawDatasetCreateFieldInput: MinioUploadRawdataFileRawDatasetCreateFieldInput;
  MinioUploadRawdataFileRawDatasetDeleteFieldInput: MinioUploadRawdataFileRawDatasetDeleteFieldInput;
  MinioUploadRawdataFileRawDatasetDisconnectFieldInput: MinioUploadRawdataFileRawDatasetDisconnectFieldInput;
  MinioUploadRawdataFileRawDatasetFieldInput: MinioUploadRawdataFileRawDatasetFieldInput;
  MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput: MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput;
  MinioUploadRawdataFileRawDatasetRelationship: MinioUploadRawdataFileRawDatasetRelationship;
  MinioUploadRawdataFileRawDatasetUpdateConnectionInput: MinioUploadRawdataFileRawDatasetUpdateConnectionInput;
  MinioUploadRawdataFileRawDatasetUpdateFieldInput: MinioUploadRawdataFileRawDatasetUpdateFieldInput;
  MinioUploadRelationInput: MinioUploadRelationInput;
  MinioUploadSort: MinioUploadSort;
  MinioUploadTaskFromExportTaskAggregationSelection: MinioUploadTaskFromExportTaskAggregationSelection;
  MinioUploadTaskFromExportTaskNodeAggregateSelection: MinioUploadTaskFromExportTaskNodeAggregateSelection;
  MinioUploadUniqueWhere: MinioUploadUniqueWhere;
  MinioUploadUpdateInput: MinioUploadUpdateInput;
  MinioUploadWhere: MinioUploadWhere;
  MinioUploadsConnection: MinioUploadsConnection;
  Mismatch: Mismatch;
  MismatchAggregateSelection: MismatchAggregateSelection;
  MismatchCreateInput: MismatchCreateInput;
  MismatchEdge: MismatchEdge;
  MismatchOptions: MismatchOptions;
  MismatchSort: MismatchSort;
  MismatchUpdateInput: MismatchUpdateInput;
  MismatchWhere: MismatchWhere;
  MismatchesConnection: MismatchesConnection;
  Mutation: {};
  Neo4JUpdateStatsConnection: Neo4JUpdateStatsConnection;
  Neo4jUpdateStats: Neo4jUpdateStats;
  Neo4jUpdateStatsAggregateSelection: Neo4jUpdateStatsAggregateSelection;
  Neo4jUpdateStatsCreateInput: Neo4jUpdateStatsCreateInput;
  Neo4jUpdateStatsEdge: Neo4jUpdateStatsEdge;
  Neo4jUpdateStatsOptions: Neo4jUpdateStatsOptions;
  Neo4jUpdateStatsSort: Neo4jUpdateStatsSort;
  Neo4jUpdateStatsUpdateInput: Neo4jUpdateStatsUpdateInput;
  Neo4jUpdateStatsWhere: Neo4jUpdateStatsWhere;
  OntologiesConnection: OntologiesConnection;
  Ontology: Ontology;
  OntologyAggregateSelection: OntologyAggregateSelection;
  OntologyClass: OntologyClass;
  OntologyClassAggregateSelection: OntologyClassAggregateSelection;
  OntologyClassConnectOrCreateWhere: OntologyClassConnectOrCreateWhere;
  OntologyClassConnectWhere: OntologyClassConnectWhere;
  OntologyClassCreateInput: OntologyClassCreateInput;
  OntologyClassEdge: OntologyClassEdge;
  OntologyClassOnCreateInput: OntologyClassOnCreateInput;
  OntologyClassOptions: OntologyClassOptions;
  OntologyClassSort: OntologyClassSort;
  OntologyClassUniqueWhere: OntologyClassUniqueWhere;
  OntologyClassUpdateInput: OntologyClassUpdateInput;
  OntologyClassWhere: OntologyClassWhere;
  OntologyClassesAggregateInput: OntologyClassesAggregateInput;
  OntologyClassesConnectFieldInput: OntologyClassesConnectFieldInput;
  OntologyClassesConnectOrCreateFieldInput: OntologyClassesConnectOrCreateFieldInput;
  OntologyClassesConnectOrCreateFieldInputOnCreate: OntologyClassesConnectOrCreateFieldInputOnCreate;
  OntologyClassesConnection: OntologyClassesConnection;
  OntologyClassesConnectionSort: OntologyClassesConnectionSort;
  OntologyClassesConnectionWhere: OntologyClassesConnectionWhere;
  OntologyClassesCreateFieldInput: OntologyClassesCreateFieldInput;
  OntologyClassesDeleteFieldInput: OntologyClassesDeleteFieldInput;
  OntologyClassesDisconnectFieldInput: OntologyClassesDisconnectFieldInput;
  OntologyClassesFieldInput: OntologyClassesFieldInput;
  OntologyClassesNodeAggregationWhereInput: OntologyClassesNodeAggregationWhereInput;
  OntologyClassesUpdateConnectionInput: OntologyClassesUpdateConnectionInput;
  OntologyClassesUpdateFieldInput: OntologyClassesUpdateFieldInput;
  OntologyConnectInput: OntologyConnectInput;
  OntologyConnectOrCreateInput: OntologyConnectOrCreateInput;
  OntologyCreateInput: OntologyCreateInput;
  OntologyDeleteInput: OntologyDeleteInput;
  OntologyDisconnectInput: OntologyDisconnectInput;
  OntologyEdge: OntologyEdge;
  OntologyOntologyClassClassesAggregationSelection: OntologyOntologyClassClassesAggregationSelection;
  OntologyOntologyClassClassesNodeAggregateSelection: OntologyOntologyClassClassesNodeAggregateSelection;
  OntologyOntologyRelationRelationsAggregationSelection: OntologyOntologyRelationRelationsAggregationSelection;
  OntologyOntologyRelationRelationsNodeAggregateSelection: OntologyOntologyRelationRelationsNodeAggregateSelection;
  OntologyOptions: OntologyOptions;
  OntologyRelation: OntologyRelation;
  OntologyRelationAggregateSelection: OntologyRelationAggregateSelection;
  OntologyRelationConnectInput: OntologyRelationConnectInput;
  OntologyRelationConnectOrCreateInput: OntologyRelationConnectOrCreateInput;
  OntologyRelationConnectOrCreateWhere: OntologyRelationConnectOrCreateWhere;
  OntologyRelationConnectWhere: OntologyRelationConnectWhere;
  OntologyRelationCreateInput: OntologyRelationCreateInput;
  OntologyRelationDeleteInput: OntologyRelationDeleteInput;
  OntologyRelationDisconnectInput: OntologyRelationDisconnectInput;
  OntologyRelationEdge: OntologyRelationEdge;
  OntologyRelationFromAggregateInput: OntologyRelationFromAggregateInput;
  OntologyRelationFromConnectFieldInput: OntologyRelationFromConnectFieldInput;
  OntologyRelationFromConnectOrCreateFieldInput: OntologyRelationFromConnectOrCreateFieldInput;
  OntologyRelationFromConnectOrCreateFieldInputOnCreate: OntologyRelationFromConnectOrCreateFieldInputOnCreate;
  OntologyRelationFromConnection: OntologyRelationFromConnection;
  OntologyRelationFromConnectionSort: OntologyRelationFromConnectionSort;
  OntologyRelationFromConnectionWhere: OntologyRelationFromConnectionWhere;
  OntologyRelationFromCreateFieldInput: OntologyRelationFromCreateFieldInput;
  OntologyRelationFromDeleteFieldInput: OntologyRelationFromDeleteFieldInput;
  OntologyRelationFromDisconnectFieldInput: OntologyRelationFromDisconnectFieldInput;
  OntologyRelationFromFieldInput: OntologyRelationFromFieldInput;
  OntologyRelationFromNodeAggregationWhereInput: OntologyRelationFromNodeAggregationWhereInput;
  OntologyRelationFromRelationship: OntologyRelationFromRelationship;
  OntologyRelationFromUpdateConnectionInput: OntologyRelationFromUpdateConnectionInput;
  OntologyRelationFromUpdateFieldInput: OntologyRelationFromUpdateFieldInput;
  OntologyRelationInput: OntologyRelationInput;
  OntologyRelationOnCreateInput: OntologyRelationOnCreateInput;
  OntologyRelationOntologyClassFromAggregationSelection: OntologyRelationOntologyClassFromAggregationSelection;
  OntologyRelationOntologyClassFromNodeAggregateSelection: OntologyRelationOntologyClassFromNodeAggregateSelection;
  OntologyRelationOntologyClassToAggregationSelection: OntologyRelationOntologyClassToAggregationSelection;
  OntologyRelationOntologyClassToNodeAggregateSelection: OntologyRelationOntologyClassToNodeAggregateSelection;
  OntologyRelationOptions: OntologyRelationOptions;
  OntologyRelationRelationInput: OntologyRelationRelationInput;
  OntologyRelationSort: OntologyRelationSort;
  OntologyRelationToAggregateInput: OntologyRelationToAggregateInput;
  OntologyRelationToConnectFieldInput: OntologyRelationToConnectFieldInput;
  OntologyRelationToConnectOrCreateFieldInput: OntologyRelationToConnectOrCreateFieldInput;
  OntologyRelationToConnectOrCreateFieldInputOnCreate: OntologyRelationToConnectOrCreateFieldInputOnCreate;
  OntologyRelationToConnection: OntologyRelationToConnection;
  OntologyRelationToConnectionSort: OntologyRelationToConnectionSort;
  OntologyRelationToConnectionWhere: OntologyRelationToConnectionWhere;
  OntologyRelationToCreateFieldInput: OntologyRelationToCreateFieldInput;
  OntologyRelationToDeleteFieldInput: OntologyRelationToDeleteFieldInput;
  OntologyRelationToDisconnectFieldInput: OntologyRelationToDisconnectFieldInput;
  OntologyRelationToFieldInput: OntologyRelationToFieldInput;
  OntologyRelationToNodeAggregationWhereInput: OntologyRelationToNodeAggregationWhereInput;
  OntologyRelationToRelationship: OntologyRelationToRelationship;
  OntologyRelationToUpdateConnectionInput: OntologyRelationToUpdateConnectionInput;
  OntologyRelationToUpdateFieldInput: OntologyRelationToUpdateFieldInput;
  OntologyRelationUniqueWhere: OntologyRelationUniqueWhere;
  OntologyRelationUpdateInput: OntologyRelationUpdateInput;
  OntologyRelationWhere: OntologyRelationWhere;
  OntologyRelationsAggregateInput: OntologyRelationsAggregateInput;
  OntologyRelationsConnectFieldInput: OntologyRelationsConnectFieldInput;
  OntologyRelationsConnectOrCreateFieldInput: OntologyRelationsConnectOrCreateFieldInput;
  OntologyRelationsConnectOrCreateFieldInputOnCreate: OntologyRelationsConnectOrCreateFieldInputOnCreate;
  OntologyRelationsConnection: OntologyRelationsConnection;
  OntologyRelationsConnectionSort: OntologyRelationsConnectionSort;
  OntologyRelationsConnectionWhere: OntologyRelationsConnectionWhere;
  OntologyRelationsCreateFieldInput: OntologyRelationsCreateFieldInput;
  OntologyRelationsDeleteFieldInput: OntologyRelationsDeleteFieldInput;
  OntologyRelationsDisconnectFieldInput: OntologyRelationsDisconnectFieldInput;
  OntologyRelationsFieldInput: OntologyRelationsFieldInput;
  OntologyRelationsNodeAggregationWhereInput: OntologyRelationsNodeAggregationWhereInput;
  OntologyRelationsUpdateConnectionInput: OntologyRelationsUpdateConnectionInput;
  OntologyRelationsUpdateFieldInput: OntologyRelationsUpdateFieldInput;
  OntologySort: OntologySort;
  OntologyUpdateInput: OntologyUpdateInput;
  OntologyWhere: OntologyWhere;
  PageInfo: PageInfo;
  Query: {};
  RawDataset: RawDataset;
  RawDatasetAggregateSelection: RawDatasetAggregateSelection;
  RawDatasetCodeBookAggregateInput: RawDatasetCodeBookAggregateInput;
  RawDatasetCodeBookConnectFieldInput: RawDatasetCodeBookConnectFieldInput;
  RawDatasetCodeBookConnectOrCreateFieldInput: RawDatasetCodeBookConnectOrCreateFieldInput;
  RawDatasetCodeBookConnectOrCreateFieldInputOnCreate: RawDatasetCodeBookConnectOrCreateFieldInputOnCreate;
  RawDatasetCodeBookConnection: RawDatasetCodeBookConnection;
  RawDatasetCodeBookConnectionSort: RawDatasetCodeBookConnectionSort;
  RawDatasetCodeBookConnectionWhere: RawDatasetCodeBookConnectionWhere;
  RawDatasetCodeBookCreateFieldInput: RawDatasetCodeBookCreateFieldInput;
  RawDatasetCodeBookDeleteFieldInput: RawDatasetCodeBookDeleteFieldInput;
  RawDatasetCodeBookDisconnectFieldInput: RawDatasetCodeBookDisconnectFieldInput;
  RawDatasetCodeBookFieldInput: RawDatasetCodeBookFieldInput;
  RawDatasetCodeBookNodeAggregationWhereInput: RawDatasetCodeBookNodeAggregationWhereInput;
  RawDatasetCodeBookRelationship: RawDatasetCodeBookRelationship;
  RawDatasetCodeBookUpdateConnectionInput: RawDatasetCodeBookUpdateConnectionInput;
  RawDatasetCodeBookUpdateFieldInput: RawDatasetCodeBookUpdateFieldInput;
  RawDatasetConnectInput: RawDatasetConnectInput;
  RawDatasetConnectOrCreateInput: RawDatasetConnectOrCreateInput;
  RawDatasetConnectOrCreateWhere: RawDatasetConnectOrCreateWhere;
  RawDatasetConnectWhere: RawDatasetConnectWhere;
  RawDatasetCreateInput: RawDatasetCreateInput;
  RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection: RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection;
  RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection: RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection;
  RawDatasetDeleteInput: RawDatasetDeleteInput;
  RawDatasetDisconnectInput: RawDatasetDisconnectInput;
  RawDatasetEdge: RawDatasetEdge;
  RawDatasetFilesAggregateInput: RawDatasetFilesAggregateInput;
  RawDatasetFilesConnectFieldInput: RawDatasetFilesConnectFieldInput;
  RawDatasetFilesConnectOrCreateFieldInput: RawDatasetFilesConnectOrCreateFieldInput;
  RawDatasetFilesConnectOrCreateFieldInputOnCreate: RawDatasetFilesConnectOrCreateFieldInputOnCreate;
  RawDatasetFilesConnection: RawDatasetFilesConnection;
  RawDatasetFilesConnectionSort: RawDatasetFilesConnectionSort;
  RawDatasetFilesConnectionWhere: RawDatasetFilesConnectionWhere;
  RawDatasetFilesCreateFieldInput: RawDatasetFilesCreateFieldInput;
  RawDatasetFilesDeleteFieldInput: RawDatasetFilesDeleteFieldInput;
  RawDatasetFilesDisconnectFieldInput: RawDatasetFilesDisconnectFieldInput;
  RawDatasetFilesFieldInput: RawDatasetFilesFieldInput;
  RawDatasetFilesNodeAggregationWhereInput: RawDatasetFilesNodeAggregationWhereInput;
  RawDatasetFilesRelationship: RawDatasetFilesRelationship;
  RawDatasetFilesUpdateConnectionInput: RawDatasetFilesUpdateConnectionInput;
  RawDatasetFilesUpdateFieldInput: RawDatasetFilesUpdateFieldInput;
  RawDatasetFromStudyAggregateInput: RawDatasetFromStudyAggregateInput;
  RawDatasetFromStudyConnectFieldInput: RawDatasetFromStudyConnectFieldInput;
  RawDatasetFromStudyConnectOrCreateFieldInput: RawDatasetFromStudyConnectOrCreateFieldInput;
  RawDatasetFromStudyConnectOrCreateFieldInputOnCreate: RawDatasetFromStudyConnectOrCreateFieldInputOnCreate;
  RawDatasetFromStudyConnection: RawDatasetFromStudyConnection;
  RawDatasetFromStudyConnectionSort: RawDatasetFromStudyConnectionSort;
  RawDatasetFromStudyConnectionWhere: RawDatasetFromStudyConnectionWhere;
  RawDatasetFromStudyCreateFieldInput: RawDatasetFromStudyCreateFieldInput;
  RawDatasetFromStudyDeleteFieldInput: RawDatasetFromStudyDeleteFieldInput;
  RawDatasetFromStudyDisconnectFieldInput: RawDatasetFromStudyDisconnectFieldInput;
  RawDatasetFromStudyFieldInput: RawDatasetFromStudyFieldInput;
  RawDatasetFromStudyNodeAggregationWhereInput: RawDatasetFromStudyNodeAggregationWhereInput;
  RawDatasetFromStudyRelationship: RawDatasetFromStudyRelationship;
  RawDatasetFromStudyUpdateConnectionInput: RawDatasetFromStudyUpdateConnectionInput;
  RawDatasetFromStudyUpdateFieldInput: RawDatasetFromStudyUpdateFieldInput;
  RawDatasetFunnelTasksAggregateInput: RawDatasetFunnelTasksAggregateInput;
  RawDatasetFunnelTasksConnectFieldInput: RawDatasetFunnelTasksConnectFieldInput;
  RawDatasetFunnelTasksConnection: RawDatasetFunnelTasksConnection;
  RawDatasetFunnelTasksConnectionSort: RawDatasetFunnelTasksConnectionSort;
  RawDatasetFunnelTasksConnectionWhere: RawDatasetFunnelTasksConnectionWhere;
  RawDatasetFunnelTasksCreateFieldInput: RawDatasetFunnelTasksCreateFieldInput;
  RawDatasetFunnelTasksDeleteFieldInput: RawDatasetFunnelTasksDeleteFieldInput;
  RawDatasetFunnelTasksDisconnectFieldInput: RawDatasetFunnelTasksDisconnectFieldInput;
  RawDatasetFunnelTasksFieldInput: RawDatasetFunnelTasksFieldInput;
  RawDatasetFunnelTasksNodeAggregationWhereInput: RawDatasetFunnelTasksNodeAggregationWhereInput;
  RawDatasetFunnelTasksRelationship: RawDatasetFunnelTasksRelationship;
  RawDatasetFunnelTasksUpdateConnectionInput: RawDatasetFunnelTasksUpdateConnectionInput;
  RawDatasetFunnelTasksUpdateFieldInput: RawDatasetFunnelTasksUpdateFieldInput;
  RawDatasetGeneratedCuratedDatasetsAggregateInput: RawDatasetGeneratedCuratedDatasetsAggregateInput;
  RawDatasetGeneratedCuratedDatasetsConnectFieldInput: RawDatasetGeneratedCuratedDatasetsConnectFieldInput;
  RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput: RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput;
  RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate: RawDatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate;
  RawDatasetGeneratedCuratedDatasetsConnection: RawDatasetGeneratedCuratedDatasetsConnection;
  RawDatasetGeneratedCuratedDatasetsConnectionSort: RawDatasetGeneratedCuratedDatasetsConnectionSort;
  RawDatasetGeneratedCuratedDatasetsConnectionWhere: RawDatasetGeneratedCuratedDatasetsConnectionWhere;
  RawDatasetGeneratedCuratedDatasetsCreateFieldInput: RawDatasetGeneratedCuratedDatasetsCreateFieldInput;
  RawDatasetGeneratedCuratedDatasetsDeleteFieldInput: RawDatasetGeneratedCuratedDatasetsDeleteFieldInput;
  RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput: RawDatasetGeneratedCuratedDatasetsDisconnectFieldInput;
  RawDatasetGeneratedCuratedDatasetsFieldInput: RawDatasetGeneratedCuratedDatasetsFieldInput;
  RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput: RawDatasetGeneratedCuratedDatasetsNodeAggregationWhereInput;
  RawDatasetGeneratedCuratedDatasetsRelationship: RawDatasetGeneratedCuratedDatasetsRelationship;
  RawDatasetGeneratedCuratedDatasetsUpdateConnectionInput: RawDatasetGeneratedCuratedDatasetsUpdateConnectionInput;
  RawDatasetGeneratedCuratedDatasetsUpdateFieldInput: RawDatasetGeneratedCuratedDatasetsUpdateFieldInput;
  RawDatasetGeographyCityStudySiteAggregationSelection: RawDatasetGeographyCityStudySiteAggregationSelection;
  RawDatasetGeographyCityStudySiteNodeAggregateSelection: RawDatasetGeographyCityStudySiteNodeAggregateSelection;
  RawDatasetMinioBucketAggregateInput: RawDatasetMinioBucketAggregateInput;
  RawDatasetMinioBucketConnectFieldInput: RawDatasetMinioBucketConnectFieldInput;
  RawDatasetMinioBucketConnection: RawDatasetMinioBucketConnection;
  RawDatasetMinioBucketConnectionSort: RawDatasetMinioBucketConnectionSort;
  RawDatasetMinioBucketConnectionWhere: RawDatasetMinioBucketConnectionWhere;
  RawDatasetMinioBucketCreateFieldInput: RawDatasetMinioBucketCreateFieldInput;
  RawDatasetMinioBucketDeleteFieldInput: RawDatasetMinioBucketDeleteFieldInput;
  RawDatasetMinioBucketDisconnectFieldInput: RawDatasetMinioBucketDisconnectFieldInput;
  RawDatasetMinioBucketFieldInput: RawDatasetMinioBucketFieldInput;
  RawDatasetMinioBucketMinioBucketAggregationSelection: RawDatasetMinioBucketMinioBucketAggregationSelection;
  RawDatasetMinioBucketMinioBucketNodeAggregateSelection: RawDatasetMinioBucketMinioBucketNodeAggregateSelection;
  RawDatasetMinioBucketNodeAggregationWhereInput: RawDatasetMinioBucketNodeAggregationWhereInput;
  RawDatasetMinioBucketRelationship: RawDatasetMinioBucketRelationship;
  RawDatasetMinioBucketUpdateConnectionInput: RawDatasetMinioBucketUpdateConnectionInput;
  RawDatasetMinioBucketUpdateFieldInput: RawDatasetMinioBucketUpdateFieldInput;
  RawDatasetMinioUploadCodeBookAggregationSelection: RawDatasetMinioUploadCodeBookAggregationSelection;
  RawDatasetMinioUploadCodeBookNodeAggregateSelection: RawDatasetMinioUploadCodeBookNodeAggregateSelection;
  RawDatasetMinioUploadFilesAggregationSelection: RawDatasetMinioUploadFilesAggregationSelection;
  RawDatasetMinioUploadFilesNodeAggregateSelection: RawDatasetMinioUploadFilesNodeAggregateSelection;
  RawDatasetMinioUploadRawdataFileAggregationSelection: RawDatasetMinioUploadRawdataFileAggregationSelection;
  RawDatasetMinioUploadRawdataFileNodeAggregateSelection: RawDatasetMinioUploadRawdataFileNodeAggregateSelection;
  RawDatasetOnCreateInput: RawDatasetOnCreateInput;
  RawDatasetOptions: RawDatasetOptions;
  RawDatasetRawdataFileAggregateInput: RawDatasetRawdataFileAggregateInput;
  RawDatasetRawdataFileConnectFieldInput: RawDatasetRawdataFileConnectFieldInput;
  RawDatasetRawdataFileConnectOrCreateFieldInput: RawDatasetRawdataFileConnectOrCreateFieldInput;
  RawDatasetRawdataFileConnectOrCreateFieldInputOnCreate: RawDatasetRawdataFileConnectOrCreateFieldInputOnCreate;
  RawDatasetRawdataFileConnection: RawDatasetRawdataFileConnection;
  RawDatasetRawdataFileConnectionSort: RawDatasetRawdataFileConnectionSort;
  RawDatasetRawdataFileConnectionWhere: RawDatasetRawdataFileConnectionWhere;
  RawDatasetRawdataFileCreateFieldInput: RawDatasetRawdataFileCreateFieldInput;
  RawDatasetRawdataFileDeleteFieldInput: RawDatasetRawdataFileDeleteFieldInput;
  RawDatasetRawdataFileDisconnectFieldInput: RawDatasetRawdataFileDisconnectFieldInput;
  RawDatasetRawdataFileFieldInput: RawDatasetRawdataFileFieldInput;
  RawDatasetRawdataFileNodeAggregationWhereInput: RawDatasetRawdataFileNodeAggregationWhereInput;
  RawDatasetRawdataFileRelationship: RawDatasetRawdataFileRelationship;
  RawDatasetRawdataFileUpdateConnectionInput: RawDatasetRawdataFileUpdateConnectionInput;
  RawDatasetRawdataFileUpdateFieldInput: RawDatasetRawdataFileUpdateFieldInput;
  RawDatasetRelationInput: RawDatasetRelationInput;
  RawDatasetSort: RawDatasetSort;
  RawDatasetStudyFromStudyAggregationSelection: RawDatasetStudyFromStudyAggregationSelection;
  RawDatasetStudyFromStudyNodeAggregateSelection: RawDatasetStudyFromStudyNodeAggregateSelection;
  RawDatasetStudySiteAggregateInput: RawDatasetStudySiteAggregateInput;
  RawDatasetStudySiteConnectFieldInput: RawDatasetStudySiteConnectFieldInput;
  RawDatasetStudySiteConnectOrCreateFieldInput: RawDatasetStudySiteConnectOrCreateFieldInput;
  RawDatasetStudySiteConnectOrCreateFieldInputOnCreate: RawDatasetStudySiteConnectOrCreateFieldInputOnCreate;
  RawDatasetStudySiteConnection: RawDatasetStudySiteConnection;
  RawDatasetStudySiteConnectionSort: RawDatasetStudySiteConnectionSort;
  RawDatasetStudySiteConnectionWhere: RawDatasetStudySiteConnectionWhere;
  RawDatasetStudySiteCreateFieldInput: RawDatasetStudySiteCreateFieldInput;
  RawDatasetStudySiteDeleteFieldInput: RawDatasetStudySiteDeleteFieldInput;
  RawDatasetStudySiteDisconnectFieldInput: RawDatasetStudySiteDisconnectFieldInput;
  RawDatasetStudySiteFieldInput: RawDatasetStudySiteFieldInput;
  RawDatasetStudySiteNodeAggregationWhereInput: RawDatasetStudySiteNodeAggregationWhereInput;
  RawDatasetStudySiteRelationship: RawDatasetStudySiteRelationship;
  RawDatasetStudySiteUpdateConnectionInput: RawDatasetStudySiteUpdateConnectionInput;
  RawDatasetStudySiteUpdateFieldInput: RawDatasetStudySiteUpdateFieldInput;
  RawDatasetTaskFunnelTasksAggregationSelection: RawDatasetTaskFunnelTasksAggregationSelection;
  RawDatasetTaskFunnelTasksNodeAggregateSelection: RawDatasetTaskFunnelTasksNodeAggregateSelection;
  RawDatasetUniqueWhere: RawDatasetUniqueWhere;
  RawDatasetUpdateInput: RawDatasetUpdateInput;
  RawDatasetWhere: RawDatasetWhere;
  RawDatasetsConnection: RawDatasetsConnection;
  String: Scalars['String'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  StringAggregateSelectionNullable: StringAggregateSelectionNullable;
  StudiesConnection: StudiesConnection;
  Study: Study;
  StudyAggregateSelection: StudyAggregateSelection;
  StudyConnectInput: StudyConnectInput;
  StudyConnectOrCreateInput: StudyConnectOrCreateInput;
  StudyConnectOrCreateWhere: StudyConnectOrCreateWhere;
  StudyConnectWhere: StudyConnectWhere;
  StudyCreateInput: StudyCreateInput;
  StudyDeleteInput: StudyDeleteInput;
  StudyDisconnectInput: StudyDisconnectInput;
  StudyEdge: StudyEdge;
  StudyGeographyCityStudySitesAggregationSelection: StudyGeographyCityStudySitesAggregationSelection;
  StudyGeographyCityStudySitesNodeAggregateSelection: StudyGeographyCityStudySitesNodeAggregateSelection;
  StudyOnCreateInput: StudyOnCreateInput;
  StudyOptions: StudyOptions;
  StudyRawDatasetRawDatasetsAggregationSelection: StudyRawDatasetRawDatasetsAggregationSelection;
  StudyRawDatasetRawDatasetsNodeAggregateSelection: StudyRawDatasetRawDatasetsNodeAggregateSelection;
  StudyRawDatasetsAggregateInput: StudyRawDatasetsAggregateInput;
  StudyRawDatasetsConnectFieldInput: StudyRawDatasetsConnectFieldInput;
  StudyRawDatasetsConnectOrCreateFieldInput: StudyRawDatasetsConnectOrCreateFieldInput;
  StudyRawDatasetsConnectOrCreateFieldInputOnCreate: StudyRawDatasetsConnectOrCreateFieldInputOnCreate;
  StudyRawDatasetsConnection: StudyRawDatasetsConnection;
  StudyRawDatasetsConnectionSort: StudyRawDatasetsConnectionSort;
  StudyRawDatasetsConnectionWhere: StudyRawDatasetsConnectionWhere;
  StudyRawDatasetsCreateFieldInput: StudyRawDatasetsCreateFieldInput;
  StudyRawDatasetsDeleteFieldInput: StudyRawDatasetsDeleteFieldInput;
  StudyRawDatasetsDisconnectFieldInput: StudyRawDatasetsDisconnectFieldInput;
  StudyRawDatasetsFieldInput: StudyRawDatasetsFieldInput;
  StudyRawDatasetsNodeAggregationWhereInput: StudyRawDatasetsNodeAggregationWhereInput;
  StudyRawDatasetsRelationship: StudyRawDatasetsRelationship;
  StudyRawDatasetsUpdateConnectionInput: StudyRawDatasetsUpdateConnectionInput;
  StudyRawDatasetsUpdateFieldInput: StudyRawDatasetsUpdateFieldInput;
  StudyRelationInput: StudyRelationInput;
  StudySort: StudySort;
  StudyStudySitesAggregateInput: StudyStudySitesAggregateInput;
  StudyStudySitesConnectFieldInput: StudyStudySitesConnectFieldInput;
  StudyStudySitesConnectOrCreateFieldInput: StudyStudySitesConnectOrCreateFieldInput;
  StudyStudySitesConnectOrCreateFieldInputOnCreate: StudyStudySitesConnectOrCreateFieldInputOnCreate;
  StudyStudySitesConnection: StudyStudySitesConnection;
  StudyStudySitesConnectionSort: StudyStudySitesConnectionSort;
  StudyStudySitesConnectionWhere: StudyStudySitesConnectionWhere;
  StudyStudySitesCreateFieldInput: StudyStudySitesCreateFieldInput;
  StudyStudySitesDeleteFieldInput: StudyStudySitesDeleteFieldInput;
  StudyStudySitesDisconnectFieldInput: StudyStudySitesDisconnectFieldInput;
  StudyStudySitesFieldInput: StudyStudySitesFieldInput;
  StudyStudySitesNodeAggregationWhereInput: StudyStudySitesNodeAggregationWhereInput;
  StudyStudySitesRelationship: StudyStudySitesRelationship;
  StudyStudySitesUpdateConnectionInput: StudyStudySitesUpdateConnectionInput;
  StudyStudySitesUpdateFieldInput: StudyStudySitesUpdateFieldInput;
  StudyUniqueWhere: StudyUniqueWhere;
  StudyUpdateInput: StudyUpdateInput;
  StudyWhere: StudyWhere;
  Task: Task;
  TaskAggregateSelection: TaskAggregateSelection;
  TaskConnectInput: TaskConnectInput;
  TaskConnectOrCreateInput: TaskConnectOrCreateInput;
  TaskConnectWhere: TaskConnectWhere;
  TaskCreateInput: TaskCreateInput;
  TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection: TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection;
  TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection: TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection;
  TaskDeleteInput: TaskDeleteInput;
  TaskDisconnectInput: TaskDisconnectInput;
  TaskEdge: TaskEdge;
  TaskFromCuratedDatasetAggregateInput: TaskFromCuratedDatasetAggregateInput;
  TaskFromCuratedDatasetConnectFieldInput: TaskFromCuratedDatasetConnectFieldInput;
  TaskFromCuratedDatasetConnection: TaskFromCuratedDatasetConnection;
  TaskFromCuratedDatasetConnectionSort: TaskFromCuratedDatasetConnectionSort;
  TaskFromCuratedDatasetConnectionWhere: TaskFromCuratedDatasetConnectionWhere;
  TaskFromCuratedDatasetCreateFieldInput: TaskFromCuratedDatasetCreateFieldInput;
  TaskFromCuratedDatasetDeleteFieldInput: TaskFromCuratedDatasetDeleteFieldInput;
  TaskFromCuratedDatasetDisconnectFieldInput: TaskFromCuratedDatasetDisconnectFieldInput;
  TaskFromCuratedDatasetFieldInput: TaskFromCuratedDatasetFieldInput;
  TaskFromCuratedDatasetNodeAggregationWhereInput: TaskFromCuratedDatasetNodeAggregationWhereInput;
  TaskFromCuratedDatasetRelationship: TaskFromCuratedDatasetRelationship;
  TaskFromCuratedDatasetUpdateConnectionInput: TaskFromCuratedDatasetUpdateConnectionInput;
  TaskFromCuratedDatasetUpdateFieldInput: TaskFromCuratedDatasetUpdateFieldInput;
  TaskFromRawDatasetAggregateInput: TaskFromRawDatasetAggregateInput;
  TaskFromRawDatasetConnectFieldInput: TaskFromRawDatasetConnectFieldInput;
  TaskFromRawDatasetConnectOrCreateFieldInput: TaskFromRawDatasetConnectOrCreateFieldInput;
  TaskFromRawDatasetConnectOrCreateFieldInputOnCreate: TaskFromRawDatasetConnectOrCreateFieldInputOnCreate;
  TaskFromRawDatasetConnection: TaskFromRawDatasetConnection;
  TaskFromRawDatasetConnectionSort: TaskFromRawDatasetConnectionSort;
  TaskFromRawDatasetConnectionWhere: TaskFromRawDatasetConnectionWhere;
  TaskFromRawDatasetCreateFieldInput: TaskFromRawDatasetCreateFieldInput;
  TaskFromRawDatasetDeleteFieldInput: TaskFromRawDatasetDeleteFieldInput;
  TaskFromRawDatasetDisconnectFieldInput: TaskFromRawDatasetDisconnectFieldInput;
  TaskFromRawDatasetFieldInput: TaskFromRawDatasetFieldInput;
  TaskFromRawDatasetNodeAggregationWhereInput: TaskFromRawDatasetNodeAggregationWhereInput;
  TaskFromRawDatasetRelationship: TaskFromRawDatasetRelationship;
  TaskFromRawDatasetUpdateConnectionInput: TaskFromRawDatasetUpdateConnectionInput;
  TaskFromRawDatasetUpdateFieldInput: TaskFromRawDatasetUpdateFieldInput;
  TaskGeneratedCuratedDatasetAggregateInput: TaskGeneratedCuratedDatasetAggregateInput;
  TaskGeneratedCuratedDatasetConnectFieldInput: TaskGeneratedCuratedDatasetConnectFieldInput;
  TaskGeneratedCuratedDatasetConnectOrCreateFieldInput: TaskGeneratedCuratedDatasetConnectOrCreateFieldInput;
  TaskGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate: TaskGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate;
  TaskGeneratedCuratedDatasetConnection: TaskGeneratedCuratedDatasetConnection;
  TaskGeneratedCuratedDatasetConnectionSort: TaskGeneratedCuratedDatasetConnectionSort;
  TaskGeneratedCuratedDatasetConnectionWhere: TaskGeneratedCuratedDatasetConnectionWhere;
  TaskGeneratedCuratedDatasetCreateFieldInput: TaskGeneratedCuratedDatasetCreateFieldInput;
  TaskGeneratedCuratedDatasetDeleteFieldInput: TaskGeneratedCuratedDatasetDeleteFieldInput;
  TaskGeneratedCuratedDatasetDisconnectFieldInput: TaskGeneratedCuratedDatasetDisconnectFieldInput;
  TaskGeneratedCuratedDatasetFieldInput: TaskGeneratedCuratedDatasetFieldInput;
  TaskGeneratedCuratedDatasetNodeAggregationWhereInput: TaskGeneratedCuratedDatasetNodeAggregationWhereInput;
  TaskGeneratedCuratedDatasetRelationship: TaskGeneratedCuratedDatasetRelationship;
  TaskGeneratedCuratedDatasetUpdateConnectionInput: TaskGeneratedCuratedDatasetUpdateConnectionInput;
  TaskGeneratedCuratedDatasetUpdateFieldInput: TaskGeneratedCuratedDatasetUpdateFieldInput;
  TaskGeneratedExportAggregateInput: TaskGeneratedExportAggregateInput;
  TaskGeneratedExportConnectFieldInput: TaskGeneratedExportConnectFieldInput;
  TaskGeneratedExportConnectOrCreateFieldInput: TaskGeneratedExportConnectOrCreateFieldInput;
  TaskGeneratedExportConnectOrCreateFieldInputOnCreate: TaskGeneratedExportConnectOrCreateFieldInputOnCreate;
  TaskGeneratedExportConnection: TaskGeneratedExportConnection;
  TaskGeneratedExportConnectionSort: TaskGeneratedExportConnectionSort;
  TaskGeneratedExportConnectionWhere: TaskGeneratedExportConnectionWhere;
  TaskGeneratedExportCreateFieldInput: TaskGeneratedExportCreateFieldInput;
  TaskGeneratedExportDeleteFieldInput: TaskGeneratedExportDeleteFieldInput;
  TaskGeneratedExportDisconnectFieldInput: TaskGeneratedExportDisconnectFieldInput;
  TaskGeneratedExportFieldInput: TaskGeneratedExportFieldInput;
  TaskGeneratedExportNodeAggregationWhereInput: TaskGeneratedExportNodeAggregationWhereInput;
  TaskGeneratedExportRelationship: TaskGeneratedExportRelationship;
  TaskGeneratedExportUpdateConnectionInput: TaskGeneratedExportUpdateConnectionInput;
  TaskGeneratedExportUpdateFieldInput: TaskGeneratedExportUpdateFieldInput;
  TaskMinioUploadGeneratedExportAggregationSelection: TaskMinioUploadGeneratedExportAggregationSelection;
  TaskMinioUploadGeneratedExportNodeAggregateSelection: TaskMinioUploadGeneratedExportNodeAggregateSelection;
  TaskOptions: TaskOptions;
  TaskRawDatasetFromRawDatasetAggregationSelection: TaskRawDatasetFromRawDatasetAggregationSelection;
  TaskRawDatasetFromRawDatasetNodeAggregateSelection: TaskRawDatasetFromRawDatasetNodeAggregateSelection;
  TaskRelationInput: TaskRelationInput;
  TaskSort: TaskSort;
  TaskTaskFromCuratedDatasetAggregationSelection: TaskTaskFromCuratedDatasetAggregationSelection;
  TaskTaskFromCuratedDatasetNodeAggregateSelection: TaskTaskFromCuratedDatasetNodeAggregateSelection;
  TaskUpdateInput: TaskUpdateInput;
  TaskWhere: TaskWhere;
  TasksConnection: TasksConnection;
  UpdateClientRolesMutationResponse: UpdateClientRolesMutationResponse;
  UpdateClientUsersMutationResponse: UpdateClientUsersMutationResponse;
  UpdateClientsMutationResponse: UpdateClientsMutationResponse;
  UpdateCuratedDatasetsMutationResponse: UpdateCuratedDatasetsMutationResponse;
  UpdateDataVariableFieldDefinitionsMutationResponse: UpdateDataVariableFieldDefinitionsMutationResponse;
  UpdateDataVariableFieldsMutationResponse: UpdateDataVariableFieldsMutationResponse;
  UpdateDataVariableValuesMutationResponse: UpdateDataVariableValuesMutationResponse;
  UpdateDataVariablesMutationResponse: UpdateDataVariablesMutationResponse;
  UpdateFileValidationsMutationResponse: UpdateFileValidationsMutationResponse;
  UpdateGeographyCitiesMutationResponse: UpdateGeographyCitiesMutationResponse;
  UpdateHarmonizedDatasetsMutationResponse: UpdateHarmonizedDatasetsMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateKeycloakUsersMutationResponse: UpdateKeycloakUsersMutationResponse;
  UpdateMinioBucketsMutationResponse: UpdateMinioBucketsMutationResponse;
  UpdateMinioUploadsMutationResponse: UpdateMinioUploadsMutationResponse;
  UpdateMismatchesMutationResponse: UpdateMismatchesMutationResponse;
  UpdateNeo4JUpdateStatsMutationResponse: UpdateNeo4JUpdateStatsMutationResponse;
  UpdateOntologiesMutationResponse: UpdateOntologiesMutationResponse;
  UpdateOntologyClassesMutationResponse: UpdateOntologyClassesMutationResponse;
  UpdateOntologyRelationsMutationResponse: UpdateOntologyRelationsMutationResponse;
  UpdateRawDatasetsMutationResponse: UpdateRawDatasetsMutationResponse;
  UpdateStudiesMutationResponse: UpdateStudiesMutationResponse;
  UpdateTasksMutationResponse: UpdateTasksMutationResponse;
  Upload: Scalars['Upload'];
};

export type AuthDirectiveArgs = { };

export type AuthDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HasPermissionDirectiveArgs = {
  resources?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type HasPermissionDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = HasPermissionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HasRoleDirectiveArgs = {
  role?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type HasRoleDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = HasRoleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CalendarHeatmapDatumResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CalendarHeatmapDatum'] = ResolversParentTypes['CalendarHeatmapDatum']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Client'] = ResolversParentTypes['Client']> = {
  clientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientAggregateSelection'] = ResolversParentTypes['ClientAggregateSelection']> = {
  clientId?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientEdge'] = ResolversParentTypes['ClientEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Client'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientRoleResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientRole'] = ResolversParentTypes['ClientRole']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientRoleAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientRoleAggregateSelection'] = ResolversParentTypes['ClientRoleAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientRoleEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientRoleEdge'] = ResolversParentTypes['ClientRoleEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ClientRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientRolesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientRolesConnection'] = ResolversParentTypes['ClientRolesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ClientRoleEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientUserResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientUser'] = ResolversParentTypes['ClientUser']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientUserAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientUserAggregateSelection'] = ResolversParentTypes['ClientUserAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientUserEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientUserEdge'] = ResolversParentTypes['ClientUserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ClientUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientUsersConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientUsersConnection'] = ResolversParentTypes['ClientUsersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ClientUserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClientsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['ClientsConnection'] = ResolversParentTypes['ClientsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ClientEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClientRolesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateClientRolesMutationResponse'] = ResolversParentTypes['CreateClientRolesMutationResponse']> = {
  clientRoles?: Resolver<Array<ResolversTypes['ClientRole']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClientUsersMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateClientUsersMutationResponse'] = ResolversParentTypes['CreateClientUsersMutationResponse']> = {
  clientUsers?: Resolver<Array<ResolversTypes['ClientUser']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClientsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateClientsMutationResponse'] = ResolversParentTypes['CreateClientsMutationResponse']> = {
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCuratedDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateCuratedDatasetsMutationResponse'] = ResolversParentTypes['CreateCuratedDatasetsMutationResponse']> = {
  curatedDatasets?: Resolver<Array<ResolversTypes['CuratedDataset']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDataVariableFieldDefinitionsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateDataVariableFieldDefinitionsMutationResponse'] = ResolversParentTypes['CreateDataVariableFieldDefinitionsMutationResponse']> = {
  dataVariableFieldDefinitions?: Resolver<Array<ResolversTypes['DataVariableFieldDefinition']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDataVariableFieldsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateDataVariableFieldsMutationResponse'] = ResolversParentTypes['CreateDataVariableFieldsMutationResponse']> = {
  dataVariableFields?: Resolver<Array<ResolversTypes['DataVariableField']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDataVariableValuesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateDataVariableValuesMutationResponse'] = ResolversParentTypes['CreateDataVariableValuesMutationResponse']> = {
  dataVariableValues?: Resolver<Array<ResolversTypes['DataVariableValue']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDataVariablesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateDataVariablesMutationResponse'] = ResolversParentTypes['CreateDataVariablesMutationResponse']> = {
  dataVariables?: Resolver<Array<ResolversTypes['DataVariable']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFileValidationsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateFileValidationsMutationResponse'] = ResolversParentTypes['CreateFileValidationsMutationResponse']> = {
  fileValidations?: Resolver<Array<ResolversTypes['FileValidation']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateGeographyCitiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateGeographyCitiesMutationResponse'] = ResolversParentTypes['CreateGeographyCitiesMutationResponse']> = {
  geographyCities?: Resolver<Array<ResolversTypes['GeographyCity']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateHarmonizedDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateHarmonizedDatasetsMutationResponse'] = ResolversParentTypes['CreateHarmonizedDatasetsMutationResponse']> = {
  harmonizedDatasets?: Resolver<Array<ResolversTypes['HarmonizedDataset']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateKeycloakUsersMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateKeycloakUsersMutationResponse'] = ResolversParentTypes['CreateKeycloakUsersMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  keycloakUsers?: Resolver<Array<ResolversTypes['KeycloakUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMinioBucketsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateMinioBucketsMutationResponse'] = ResolversParentTypes['CreateMinioBucketsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  minioBuckets?: Resolver<Array<ResolversTypes['MinioBucket']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMinioUploadsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateMinioUploadsMutationResponse'] = ResolversParentTypes['CreateMinioUploadsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  minioUploads?: Resolver<Array<ResolversTypes['MinioUpload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateMismatchesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateMismatchesMutationResponse'] = ResolversParentTypes['CreateMismatchesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  mismatches?: Resolver<Array<ResolversTypes['Mismatch']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateNeo4JUpdateStatsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateNeo4JUpdateStatsMutationResponse'] = ResolversParentTypes['CreateNeo4JUpdateStatsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  neo4JUpdateStats?: Resolver<Array<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOntologiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateOntologiesMutationResponse'] = ResolversParentTypes['CreateOntologiesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  ontologies?: Resolver<Array<ResolversTypes['Ontology']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOntologyClassesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateOntologyClassesMutationResponse'] = ResolversParentTypes['CreateOntologyClassesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  ontologyClasses?: Resolver<Array<ResolversTypes['OntologyClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOntologyRelationsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateOntologyRelationsMutationResponse'] = ResolversParentTypes['CreateOntologyRelationsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  ontologyRelations?: Resolver<Array<ResolversTypes['OntologyRelation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRawDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateRawDatasetsMutationResponse'] = ResolversParentTypes['CreateRawDatasetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  rawDatasets?: Resolver<Array<ResolversTypes['RawDataset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateStudiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateStudiesMutationResponse'] = ResolversParentTypes['CreateStudiesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  studies?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTasksMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateTasksMutationResponse'] = ResolversParentTypes['CreateTasksMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDataset'] = ResolversParentTypes['CuratedDataset']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  curatedDatasetID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  dataVariables?: Resolver<Array<ResolversTypes['DataVariable']>, ParentType, ContextType, RequireFields<CuratedDatasetDataVariablesArgs, 'directed'>>;
  dataVariablesAggregate?: Resolver<Maybe<ResolversTypes['CuratedDatasetDataVariableDataVariablesAggregationSelection']>, ParentType, ContextType, RequireFields<CuratedDatasetDataVariablesAggregateArgs, 'directed'>>;
  dataVariablesConnection?: Resolver<ResolversTypes['CuratedDatasetDataVariablesConnection'], ParentType, ContextType, RequireFields<CuratedDatasetDataVariablesConnectionArgs, 'directed'>>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exportTask?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<CuratedDatasetExportTaskArgs, 'directed'>>;
  exportTaskAggregate?: Resolver<Maybe<ResolversTypes['CuratedDatasetTaskExportTaskAggregationSelection']>, ParentType, ContextType, RequireFields<CuratedDatasetExportTaskAggregateArgs, 'directed'>>;
  exportTaskConnection?: Resolver<ResolversTypes['CuratedDatasetExportTaskConnection'], ParentType, ContextType, RequireFields<CuratedDatasetExportTaskConnectionArgs, 'directed'>>;
  fieldDefinitions?: Resolver<Array<ResolversTypes['DataVariableFieldDefinition']>, ParentType, ContextType, RequireFields<CuratedDatasetFieldDefinitionsArgs, 'directed'>>;
  fieldDefinitionsAggregate?: Resolver<Maybe<ResolversTypes['CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection']>, ParentType, ContextType, RequireFields<CuratedDatasetFieldDefinitionsAggregateArgs, 'directed'>>;
  fieldDefinitionsConnection?: Resolver<ResolversTypes['CuratedDatasetFieldDefinitionsConnection'], ParentType, ContextType, RequireFields<CuratedDatasetFieldDefinitionsConnectionArgs, 'directed'>>;
  funnelTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<CuratedDatasetFunnelTaskArgs, 'directed'>>;
  funnelTaskAggregate?: Resolver<Maybe<ResolversTypes['CuratedDatasetTaskFunnelTaskAggregationSelection']>, ParentType, ContextType, RequireFields<CuratedDatasetFunnelTaskAggregateArgs, 'directed'>>;
  funnelTaskConnection?: Resolver<ResolversTypes['CuratedDatasetFunnelTaskConnection'], ParentType, ContextType, RequireFields<CuratedDatasetFunnelTaskConnectionArgs, 'directed'>>;
  generatedByRawDataset?: Resolver<Maybe<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<CuratedDatasetGeneratedByRawDatasetArgs, 'directed'>>;
  generatedByRawDatasetAggregate?: Resolver<Maybe<ResolversTypes['CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<CuratedDatasetGeneratedByRawDatasetAggregateArgs, 'directed'>>;
  generatedByRawDatasetConnection?: Resolver<ResolversTypes['CuratedDatasetGeneratedByRawDatasetConnection'], ParentType, ContextType, RequireFields<CuratedDatasetGeneratedByRawDatasetConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetAggregateSelection'] = ResolversParentTypes['CuratedDatasetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  curatedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDataVariableDataVariablesAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDataVariableDataVariablesAggregationSelection'] = ResolversParentTypes['CuratedDatasetDataVariableDataVariablesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CuratedDatasetDataVariableDataVariablesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDataVariableDataVariablesNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDataVariableDataVariablesNodeAggregateSelection'] = ResolversParentTypes['CuratedDatasetDataVariableDataVariablesNodeAggregateSelection']> = {
  dataVariableID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection'] = ResolversParentTypes['CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection'] = ResolversParentTypes['CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection']> = {
  dataVariableFieldDefinitionID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  xref?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDataVariablesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDataVariablesConnection'] = ResolversParentTypes['CuratedDatasetDataVariablesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetDataVariablesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDataVariablesRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDataVariablesRelationship'] = ResolversParentTypes['CuratedDatasetDataVariablesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetEdge'] = ResolversParentTypes['CuratedDatasetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetExportTaskConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetExportTaskConnection'] = ResolversParentTypes['CuratedDatasetExportTaskConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetExportTaskRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetExportTaskRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetExportTaskRelationship'] = ResolversParentTypes['CuratedDatasetExportTaskRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetFieldDefinitionsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetFieldDefinitionsConnection'] = ResolversParentTypes['CuratedDatasetFieldDefinitionsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetFieldDefinitionsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetFieldDefinitionsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetFieldDefinitionsRelationship'] = ResolversParentTypes['CuratedDatasetFieldDefinitionsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableFieldDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetFunnelTaskConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetFunnelTaskConnection'] = ResolversParentTypes['CuratedDatasetFunnelTaskConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetFunnelTaskRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetFunnelTaskRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetFunnelTaskRelationship'] = ResolversParentTypes['CuratedDatasetFunnelTaskRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetGeneratedByRawDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetGeneratedByRawDatasetConnection'] = ResolversParentTypes['CuratedDatasetGeneratedByRawDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetGeneratedByRawDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetGeneratedByRawDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetGeneratedByRawDatasetRelationship'] = ResolversParentTypes['CuratedDatasetGeneratedByRawDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection'] = ResolversParentTypes['CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection'] = ResolversParentTypes['CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetTaskExportTaskAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetTaskExportTaskAggregationSelection'] = ResolversParentTypes['CuratedDatasetTaskExportTaskAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CuratedDatasetTaskExportTaskNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetTaskExportTaskNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetTaskExportTaskNodeAggregateSelection'] = ResolversParentTypes['CuratedDatasetTaskExportTaskNodeAggregateSelection']> = {
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetTaskFunnelTaskAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetTaskFunnelTaskAggregationSelection'] = ResolversParentTypes['CuratedDatasetTaskFunnelTaskAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CuratedDatasetTaskFunnelTaskNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetTaskFunnelTaskNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetTaskFunnelTaskNodeAggregateSelection'] = ResolversParentTypes['CuratedDatasetTaskFunnelTaskNodeAggregateSelection']> = {
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetsConnection'] = ResolversParentTypes['CuratedDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariable'] = ResolversParentTypes['DataVariable']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  curatedDataset?: Resolver<Array<ResolversTypes['CuratedDataset']>, ParentType, ContextType, RequireFields<DataVariableCuratedDatasetArgs, 'directed'>>;
  curatedDatasetAggregate?: Resolver<Maybe<ResolversTypes['DataVariableCuratedDatasetCuratedDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<DataVariableCuratedDatasetAggregateArgs, 'directed'>>;
  curatedDatasetConnection?: Resolver<ResolversTypes['DataVariableCuratedDatasetConnection'], ParentType, ContextType, RequireFields<DataVariableCuratedDatasetConnectionArgs, 'directed'>>;
  dataVariableID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['DataVariableField']>, ParentType, ContextType, RequireFields<DataVariableFieldsArgs, 'directed'>>;
  fieldsAggregate?: Resolver<Maybe<ResolversTypes['DataVariableDataVariableFieldFieldsAggregationSelection']>, ParentType, ContextType, RequireFields<DataVariableFieldsAggregateArgs, 'directed'>>;
  fieldsConnection?: Resolver<ResolversTypes['DataVariableFieldsConnection'], ParentType, ContextType, RequireFields<DataVariableFieldsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableAggregateSelection'] = ResolversParentTypes['DataVariableAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataVariableID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableCuratedDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableCuratedDatasetConnection'] = ResolversParentTypes['DataVariableCuratedDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableCuratedDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableCuratedDatasetCuratedDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableCuratedDatasetCuratedDatasetAggregationSelection'] = ResolversParentTypes['DataVariableCuratedDatasetCuratedDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection'] = ResolversParentTypes['DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection']> = {
  curatedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableCuratedDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableCuratedDatasetRelationship'] = ResolversParentTypes['DataVariableCuratedDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableDataVariableFieldFieldsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableDataVariableFieldFieldsAggregationSelection'] = ResolversParentTypes['DataVariableDataVariableFieldFieldsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DataVariableDataVariableFieldFieldsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableDataVariableFieldFieldsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableDataVariableFieldFieldsNodeAggregateSelection'] = ResolversParentTypes['DataVariableDataVariableFieldFieldsNodeAggregateSelection']> = {
  code?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  dataVariableFieldID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableEdge'] = ResolversParentTypes['DataVariableEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableField'] = ResolversParentTypes['DataVariableField']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dataVariableFieldID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasFieldDefinition?: Resolver<ResolversTypes['DataVariableFieldDefinition'], ParentType, ContextType, RequireFields<DataVariableFieldHasFieldDefinitionArgs, 'directed'>>;
  hasFieldDefinitionAggregate?: Resolver<Maybe<ResolversTypes['DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection']>, ParentType, ContextType, RequireFields<DataVariableFieldHasFieldDefinitionAggregateArgs, 'directed'>>;
  hasFieldDefinitionConnection?: Resolver<ResolversTypes['DataVariableFieldHasFieldDefinitionConnection'], ParentType, ContextType, RequireFields<DataVariableFieldHasFieldDefinitionConnectionArgs, 'directed'>>;
  jsonSchema?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldAggregateSelection'] = ResolversParentTypes['DataVariableFieldAggregateSelection']> = {
  code?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataVariableFieldID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection'] = ResolversParentTypes['DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection'] = ResolversParentTypes['DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection']> = {
  dataVariableFieldDefinitionID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  xref?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinition'] = ResolversParentTypes['DataVariableFieldDefinition']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  dataVariableFieldDefinitionID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasCuratedDataset?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType, RequireFields<DataVariableFieldDefinitionHasCuratedDatasetArgs, 'directed'>>;
  hasCuratedDatasetAggregate?: Resolver<Maybe<ResolversTypes['DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<DataVariableFieldDefinitionHasCuratedDatasetAggregateArgs, 'directed'>>;
  hasCuratedDatasetConnection?: Resolver<ResolversTypes['DataVariableFieldDefinitionHasCuratedDatasetConnection'], ParentType, ContextType, RequireFields<DataVariableFieldDefinitionHasCuratedDatasetConnectionArgs, 'directed'>>;
  hasFieldValues?: Resolver<Array<ResolversTypes['DataVariableValue']>, ParentType, ContextType, RequireFields<DataVariableFieldDefinitionHasFieldValuesArgs, 'directed'>>;
  hasFieldValuesAggregate?: Resolver<Maybe<ResolversTypes['DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection']>, ParentType, ContextType, RequireFields<DataVariableFieldDefinitionHasFieldValuesAggregateArgs, 'directed'>>;
  hasFieldValuesConnection?: Resolver<ResolversTypes['DataVariableFieldDefinitionHasFieldValuesConnection'], ParentType, ContextType, RequireFields<DataVariableFieldDefinitionHasFieldValuesConnectionArgs, 'directed'>>;
  validationSchema?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  xref?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionAggregateSelection'] = ResolversParentTypes['DataVariableFieldDefinitionAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataVariableFieldDefinitionID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  xref?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection'] = ResolversParentTypes['DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection'] = ResolversParentTypes['DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection']> = {
  curatedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection'] = ResolversParentTypes['DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection'] = ResolversParentTypes['DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection']> = {
  dataVariableValueID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionEdge'] = ResolversParentTypes['DataVariableFieldDefinitionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableFieldDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionHasCuratedDatasetConnection'] = ResolversParentTypes['DataVariableFieldDefinitionHasCuratedDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableFieldDefinitionHasCuratedDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionHasCuratedDatasetRelationship'] = ResolversParentTypes['DataVariableFieldDefinitionHasCuratedDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionHasFieldValuesConnection'] = ResolversParentTypes['DataVariableFieldDefinitionHasFieldValuesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableFieldDefinitionHasFieldValuesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionHasFieldValuesRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionHasFieldValuesRelationship'] = ResolversParentTypes['DataVariableFieldDefinitionHasFieldValuesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldDefinitionsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldDefinitionsConnection'] = ResolversParentTypes['DataVariableFieldDefinitionsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableFieldDefinitionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldEdge'] = ResolversParentTypes['DataVariableFieldEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableField'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldHasFieldDefinitionConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldHasFieldDefinitionConnection'] = ResolversParentTypes['DataVariableFieldHasFieldDefinitionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableFieldHasFieldDefinitionRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldHasFieldDefinitionRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldHasFieldDefinitionRelationship'] = ResolversParentTypes['DataVariableFieldHasFieldDefinitionRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableFieldDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldsConnection'] = ResolversParentTypes['DataVariableFieldsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableFieldsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableFieldsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableFieldsRelationship'] = ResolversParentTypes['DataVariableFieldsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableField'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValue'] = ResolversParentTypes['DataVariableValue']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  dataVariableValueID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fromFieldDefinition?: Resolver<ResolversTypes['DataVariableFieldDefinition'], ParentType, ContextType, RequireFields<DataVariableValueFromFieldDefinitionArgs, 'directed'>>;
  fromFieldDefinitionAggregate?: Resolver<Maybe<ResolversTypes['DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection']>, ParentType, ContextType, RequireFields<DataVariableValueFromFieldDefinitionAggregateArgs, 'directed'>>;
  fromFieldDefinitionConnection?: Resolver<ResolversTypes['DataVariableValueFromFieldDefinitionConnection'], ParentType, ContextType, RequireFields<DataVariableValueFromFieldDefinitionConnectionArgs, 'directed'>>;
  value?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValueAggregateSelection'] = ResolversParentTypes['DataVariableValueAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataVariableValueID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection'] = ResolversParentTypes['DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection'] = ResolversParentTypes['DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection']> = {
  dataVariableFieldDefinitionID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  xref?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValueEdge'] = ResolversParentTypes['DataVariableValueEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableValue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueFromFieldDefinitionConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValueFromFieldDefinitionConnection'] = ResolversParentTypes['DataVariableValueFromFieldDefinitionConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableValueFromFieldDefinitionRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValueFromFieldDefinitionRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValueFromFieldDefinitionRelationship'] = ResolversParentTypes['DataVariableValueFromFieldDefinitionRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['DataVariableFieldDefinition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariableValuesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariableValuesConnection'] = ResolversParentTypes['DataVariableValuesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableValueEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataVariablesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataVariablesConnection'] = ResolversParentTypes['DataVariablesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DataVariableEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DateTimeAggregateSelectionNonNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DateTimeAggregateSelectionNonNullable'] = ResolversParentTypes['DateTimeAggregateSelectionNonNullable']> = {
  max?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteInfoResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export type FileValidationResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['FileValidation'] = ResolversParentTypes['FileValidation']> = {
  isValid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mismatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mismatch']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileValidationAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['FileValidationAggregateSelection'] = ResolversParentTypes['FileValidationAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileValidationEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['FileValidationEdge'] = ResolversParentTypes['FileValidationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['FileValidation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileValidationsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['FileValidationsConnection'] = ResolversParentTypes['FileValidationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FileValidationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FloatAggregateSelectionNonNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['FloatAggregateSelectionNonNullable'] = ResolversParentTypes['FloatAggregateSelectionNonNullable']> = {
  average?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeographyCitiesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['GeographyCitiesConnection'] = ResolversParentTypes['GeographyCitiesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['GeographyCityEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeographyCityResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['GeographyCity'] = ResolversParentTypes['GeographyCity']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cityID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeographyCityAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['GeographyCityAggregateSelection'] = ResolversParentTypes['GeographyCityAggregateSelection']> = {
  city?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  cityID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeographyCityEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['GeographyCityEdge'] = ResolversParentTypes['GeographyCityEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['GeographyCity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDataset'] = ResolversParentTypes['HarmonizedDataset']> = {
  harmonizedDatasetID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawDatasets?: Resolver<Array<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<HarmonizedDatasetRawDatasetsArgs, 'directed'>>;
  rawDatasetsAggregate?: Resolver<Maybe<ResolversTypes['HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection']>, ParentType, ContextType, RequireFields<HarmonizedDatasetRawDatasetsAggregateArgs, 'directed'>>;
  rawDatasetsConnection?: Resolver<ResolversTypes['HarmonizedDatasetRawDatasetsConnection'], ParentType, ContextType, RequireFields<HarmonizedDatasetRawDatasetsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetAggregateSelection'] = ResolversParentTypes['HarmonizedDatasetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  harmonizedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetEdge'] = ResolversParentTypes['HarmonizedDatasetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['HarmonizedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetRawDatasetRawDatasetsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection'] = ResolversParentTypes['HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection'] = ResolversParentTypes['HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetRawDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetRawDatasetsConnection'] = ResolversParentTypes['HarmonizedDatasetRawDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['HarmonizedDatasetRawDatasetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetRawDatasetsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetRawDatasetsRelationship'] = ResolversParentTypes['HarmonizedDatasetRawDatasetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetsConnection'] = ResolversParentTypes['HarmonizedDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['HarmonizedDatasetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HasCodebookResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HasCodebook'] = ResolversParentTypes['HasCodebook']> = {
  __resolveType: TypeResolveFn<'MinioUploadCodeBookRawDatasetRelationship' | 'RawDatasetCodeBookRelationship', ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type HasPairedCodebookResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HasPairedCodebook'] = ResolversParentTypes['HasPairedCodebook']> = {
  __resolveType: TypeResolveFn<'MinioUploadPairedRawdataFileRelationship', ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type HasPairedRawdatafileResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HasPairedRawdatafile'] = ResolversParentTypes['HasPairedRawdatafile']> = {
  __resolveType: TypeResolveFn<'MinioUploadPairedCodebookRelationship', ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type HasRawdatafileResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HasRawdatafile'] = ResolversParentTypes['HasRawdatafile']> = {
  __resolveType: TypeResolveFn<'MinioUploadRawdataFileRawDatasetRelationship' | 'RawDatasetRawdataFileRelationship', ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type IdAggregateSelectionNonNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['IDAggregateSelectionNonNullable'] = ResolversParentTypes['IDAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdAggregateSelectionNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['IDAggregateSelectionNullable'] = ResolversParentTypes['IDAggregateSelectionNullable']> = {
  longest?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IntAggregateSelectionNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['IntAggregateSelectionNullable'] = ResolversParentTypes['IntAggregateSelectionNullable']> = {
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type KeycloakUserResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['KeycloakUser'] = ResolversParentTypes['KeycloakUser']> = {
  email?: Resolver<ResolversTypes['Email'], ParentType, ContextType>;
  keycloakUserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeycloakUserAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['KeycloakUserAggregateSelection'] = ResolversParentTypes['KeycloakUserAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  keycloakUserID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeycloakUserEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['KeycloakUserEdge'] = ResolversParentTypes['KeycloakUserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['KeycloakUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeycloakUsersConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['KeycloakUsersConnection'] = ResolversParentTypes['KeycloakUsersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['KeycloakUserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucket'] = ResolversParentTypes['MinioBucket']> = {
  bucketName?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minioObjects?: Resolver<Array<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<MinioBucketMinioObjectsArgs, 'directed'>>;
  minioObjectsAggregate?: Resolver<Maybe<ResolversTypes['MinioBucketMinioUploadMinioObjectsAggregationSelection']>, ParentType, ContextType, RequireFields<MinioBucketMinioObjectsAggregateArgs, 'directed'>>;
  minioObjectsConnection?: Resolver<ResolversTypes['MinioBucketMinioObjectsConnection'], ParentType, ContextType, RequireFields<MinioBucketMinioObjectsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketAggregateSelection'] = ResolversParentTypes['MinioBucketAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketEdge'] = ResolversParentTypes['MinioBucketEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioBucket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketMinioObjectsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketMinioObjectsConnection'] = ResolversParentTypes['MinioBucketMinioObjectsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioBucketMinioObjectsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketMinioObjectsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketMinioObjectsRelationship'] = ResolversParentTypes['MinioBucketMinioObjectsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketMinioUploadMinioObjectsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketMinioUploadMinioObjectsAggregationSelection'] = ResolversParentTypes['MinioBucketMinioUploadMinioObjectsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioBucketMinioUploadMinioObjectsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketMinioUploadMinioObjectsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketMinioUploadMinioObjectsNodeAggregateSelection'] = ResolversParentTypes['MinioBucketMinioUploadMinioObjectsNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioBucketsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioBucketsConnection'] = ResolversParentTypes['MinioBucketsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioBucketEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUpload'] = ResolversParentTypes['MinioUpload']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  bucketName?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  codeBookRawDataset?: Resolver<Maybe<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<MinioUploadCodeBookRawDatasetArgs, 'directed'>>;
  codeBookRawDatasetAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadCodeBookRawDatasetAggregateArgs, 'directed'>>;
  codeBookRawDatasetConnection?: Resolver<ResolversTypes['MinioUploadCodeBookRawDatasetConnection'], ParentType, ContextType, RequireFields<MinioUploadCodeBookRawDatasetConnectionArgs, 'directed'>>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fromExportTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MinioUploadFromExportTaskArgs, 'directed'>>;
  fromExportTaskAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadTaskFromExportTaskAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadFromExportTaskAggregateArgs, 'directed'>>;
  fromExportTaskConnection?: Resolver<ResolversTypes['MinioUploadFromExportTaskConnection'], ParentType, ContextType, RequireFields<MinioUploadFromExportTaskConnectionArgs, 'directed'>>;
  objectName?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pairedCodebook?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<MinioUploadPairedCodebookArgs, 'directed'>>;
  pairedCodebookAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadMinioUploadPairedCodebookAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadPairedCodebookAggregateArgs, 'directed'>>;
  pairedCodebookConnection?: Resolver<ResolversTypes['MinioUploadPairedCodebookConnection'], ParentType, ContextType, RequireFields<MinioUploadPairedCodebookConnectionArgs, 'directed'>>;
  pairedRawdataFile?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<MinioUploadPairedRawdataFileArgs, 'directed'>>;
  pairedRawdataFileAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadMinioUploadPairedRawdataFileAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadPairedRawdataFileAggregateArgs, 'directed'>>;
  pairedRawdataFileConnection?: Resolver<ResolversTypes['MinioUploadPairedRawdataFileConnection'], ParentType, ContextType, RequireFields<MinioUploadPairedRawdataFileConnectionArgs, 'directed'>>;
  presignedURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawDataset?: Resolver<Maybe<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<MinioUploadRawDatasetArgs, 'directed'>>;
  rawDatasetAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadRawDatasetRawDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadRawDatasetAggregateArgs, 'directed'>>;
  rawDatasetConnection?: Resolver<ResolversTypes['MinioUploadRawDatasetConnection'], ParentType, ContextType, RequireFields<MinioUploadRawDatasetConnectionArgs, 'directed'>>;
  rawdataFileRawDataset?: Resolver<Maybe<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<MinioUploadRawdataFileRawDatasetArgs, 'directed'>>;
  rawdataFileRawDatasetAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadRawdataFileRawDatasetAggregateArgs, 'directed'>>;
  rawdataFileRawDatasetConnection?: Resolver<ResolversTypes['MinioUploadRawdataFileRawDatasetConnection'], ParentType, ContextType, RequireFields<MinioUploadRawdataFileRawDatasetConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadAggregateSelection'] = ResolversParentTypes['MinioUploadAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadCodeBookRawDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadCodeBookRawDatasetConnection'] = ResolversParentTypes['MinioUploadCodeBookRawDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadCodeBookRawDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadCodeBookRawDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadCodeBookRawDatasetRelationship'] = ResolversParentTypes['MinioUploadCodeBookRawDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadEdge'] = ResolversParentTypes['MinioUploadEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadFromExportTaskConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadFromExportTaskConnection'] = ResolversParentTypes['MinioUploadFromExportTaskConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadFromExportTaskRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadFromExportTaskRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadFromExportTaskRelationship'] = ResolversParentTypes['MinioUploadFromExportTaskRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadMinioUploadPairedCodebookAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadMinioUploadPairedCodebookAggregationSelection'] = ResolversParentTypes['MinioUploadMinioUploadPairedCodebookAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadMinioUploadPairedCodebookNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadMinioUploadPairedCodebookNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadMinioUploadPairedCodebookNodeAggregateSelection'] = ResolversParentTypes['MinioUploadMinioUploadPairedCodebookNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadMinioUploadPairedRawdataFileAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadMinioUploadPairedRawdataFileAggregationSelection'] = ResolversParentTypes['MinioUploadMinioUploadPairedRawdataFileAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection'] = ResolversParentTypes['MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadPairedCodebookConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadPairedCodebookConnection'] = ResolversParentTypes['MinioUploadPairedCodebookConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadPairedCodebookRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadPairedCodebookRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadPairedCodebookRelationship'] = ResolversParentTypes['MinioUploadPairedCodebookRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadPairedRawdataFileConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadPairedRawdataFileConnection'] = ResolversParentTypes['MinioUploadPairedRawdataFileConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadPairedRawdataFileRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadPairedRawdataFileRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadPairedRawdataFileRelationship'] = ResolversParentTypes['MinioUploadPairedRawdataFileRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetCodeBookRawDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection'] = ResolversParentTypes['MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection'] = ResolversParentTypes['MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetConnection'] = ResolversParentTypes['MinioUploadRawDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadRawDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetRawDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetRawDatasetAggregationSelection'] = ResolversParentTypes['MinioUploadRawDatasetRawDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadRawDatasetRawDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetRawDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetRawDatasetNodeAggregateSelection'] = ResolversParentTypes['MinioUploadRawDatasetRawDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection'] = ResolversParentTypes['MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection'] = ResolversParentTypes['MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawDatasetRelationship'] = ResolversParentTypes['MinioUploadRawDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawdataFileRawDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawdataFileRawDatasetConnection'] = ResolversParentTypes['MinioUploadRawdataFileRawDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadRawdataFileRawDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawdataFileRawDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawdataFileRawDatasetRelationship'] = ResolversParentTypes['MinioUploadRawdataFileRawDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadTaskFromExportTaskAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadTaskFromExportTaskAggregationSelection'] = ResolversParentTypes['MinioUploadTaskFromExportTaskAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadTaskFromExportTaskNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadTaskFromExportTaskNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadTaskFromExportTaskNodeAggregateSelection'] = ResolversParentTypes['MinioUploadTaskFromExportTaskNodeAggregateSelection']> = {
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadsConnection'] = ResolversParentTypes['MinioUploadsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MismatchResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Mismatch'] = ResolversParentTypes['Mismatch']> = {
  fileA?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fileB?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lineNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MismatchAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MismatchAggregateSelection'] = ResolversParentTypes['MismatchAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fileA?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  fileB?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  lineNumber?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MismatchEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MismatchEdge'] = ResolversParentTypes['MismatchEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Mismatch'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MismatchesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MismatchesConnection'] = ResolversParentTypes['MismatchesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MismatchEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  cancelTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, Partial<MutationCancelTaskArgs>>;
  createClientRoles?: Resolver<ResolversTypes['CreateClientRolesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateClientRolesArgs, 'input'>>;
  createClientUsers?: Resolver<ResolversTypes['CreateClientUsersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateClientUsersArgs, 'input'>>;
  createClients?: Resolver<ResolversTypes['CreateClientsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateClientsArgs, 'input'>>;
  createCuratedDatasetFromCSVCodebook?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetFromCsvCodebookArgs, 'allowedSite' | 'allowedStudy' | 'name' | 'rawDatasetID'>>;
  createCuratedDatasetFromRawDataset?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetFromRawDatasetArgs, 'description' | 'name' | 'rawDatasetID'>>;
  createCuratedDatasetFromRawDatasetNew?: Resolver<Maybe<ResolversTypes['CuratedDataset']>, ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetFromRawDatasetNewArgs, 'codebookObjectName' | 'rawDatasetID' | 'rawObjectName'>>;
  createCuratedDatasets?: Resolver<ResolversTypes['CreateCuratedDatasetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetsArgs, 'input'>>;
  createDataVariableFieldDefinitions?: Resolver<ResolversTypes['CreateDataVariableFieldDefinitionsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateDataVariableFieldDefinitionsArgs, 'input'>>;
  createDataVariableFields?: Resolver<ResolversTypes['CreateDataVariableFieldsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateDataVariableFieldsArgs, 'input'>>;
  createDataVariableValues?: Resolver<ResolversTypes['CreateDataVariableValuesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateDataVariableValuesArgs, 'input'>>;
  createDataVariables?: Resolver<ResolversTypes['CreateDataVariablesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateDataVariablesArgs, 'input'>>;
  createFileValidations?: Resolver<ResolversTypes['CreateFileValidationsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFileValidationsArgs, 'input'>>;
  createGeographyCities?: Resolver<ResolversTypes['CreateGeographyCitiesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateGeographyCitiesArgs, 'input'>>;
  createHarmonizedDatasets?: Resolver<ResolversTypes['CreateHarmonizedDatasetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateHarmonizedDatasetsArgs, 'input'>>;
  createKeycloakUsers?: Resolver<ResolversTypes['CreateKeycloakUsersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateKeycloakUsersArgs, 'input'>>;
  createMinioBuckets?: Resolver<ResolversTypes['CreateMinioBucketsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMinioBucketsArgs, 'input'>>;
  createMinioUploads?: Resolver<ResolversTypes['CreateMinioUploadsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMinioUploadsArgs, 'input'>>;
  createMismatches?: Resolver<ResolversTypes['CreateMismatchesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateMismatchesArgs, 'input'>>;
  createNeo4JUpdateStats?: Resolver<ResolversTypes['CreateNeo4JUpdateStatsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateNeo4JUpdateStatsArgs, 'input'>>;
  createOntologies?: Resolver<ResolversTypes['CreateOntologiesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateOntologiesArgs, 'input'>>;
  createOntologyClasses?: Resolver<ResolversTypes['CreateOntologyClassesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateOntologyClassesArgs, 'input'>>;
  createOntologyRelations?: Resolver<ResolversTypes['CreateOntologyRelationsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateOntologyRelationsArgs, 'input'>>;
  createRawDatasetWithMinioBucket?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType, RequireFields<MutationCreateRawDatasetWithMinioBucketArgs, 'description' | 'name' | 'studyID' | 'studySiteID'>>;
  createRawDatasets?: Resolver<ResolversTypes['CreateRawDatasetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateRawDatasetsArgs, 'input'>>;
  createStudies?: Resolver<ResolversTypes['CreateStudiesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateStudiesArgs, 'input'>>;
  createTasks?: Resolver<ResolversTypes['CreateTasksMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateTasksArgs, 'input'>>;
  deleteClientRoles?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteClientRolesArgs>>;
  deleteClientUsers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteClientUsersArgs>>;
  deleteClients?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteClientsArgs>>;
  deleteCuratedDatasets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCuratedDatasetsArgs>>;
  deleteDataVariableFieldDefinitions?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteDataVariableFieldDefinitionsArgs>>;
  deleteDataVariableFields?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteDataVariableFieldsArgs>>;
  deleteDataVariableValues?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteDataVariableValuesArgs>>;
  deleteDataVariables?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteDataVariablesArgs>>;
  deleteFileValidations?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFileValidationsArgs>>;
  deleteGeographyCities?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteGeographyCitiesArgs>>;
  deleteHarmonizedDatasets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteHarmonizedDatasetsArgs>>;
  deleteKeycloakUsers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteKeycloakUsersArgs>>;
  deleteMinioBuckets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMinioBucketsArgs>>;
  deleteMinioUploads?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMinioUploadsArgs>>;
  deleteMismatches?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteMismatchesArgs>>;
  deleteNeo4JUpdateStats?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteNeo4JUpdateStatsArgs>>;
  deleteOntologies?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteOntologiesArgs>>;
  deleteOntologyClasses?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteOntologyClassesArgs>>;
  deleteOntologyRelations?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteOntologyRelationsArgs>>;
  deleteRawDatasets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteRawDatasetsArgs>>;
  deleteStudies?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteStudiesArgs>>;
  deleteTasks?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTasksArgs>>;
  funnelTaskExportCuratedDataset?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationFunnelTaskExportCuratedDatasetArgs, 'curatedDatasetID' | 'taskID'>>;
  funnelTaskExportDataVariableFieldDefinitions?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationFunnelTaskExportDataVariableFieldDefinitionsArgs, 'dataVariableFieldDefinitionIDs' | 'taskID'>>;
  keycloakSyncUsers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationKeycloakSyncUsersArgs>>;
  keycloak_clients_createRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloak_Clients_CreateRoleArgs, 'clientID' | 'roleName'>>;
  keycloak_clients_delRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloak_Clients_DelRoleArgs, 'clientID' | 'roleName'>>;
  keycloak_users_addClientRoleMappings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloak_Users_AddClientRoleMappingsArgs, 'clientID' | 'roleID' | 'roleName' | 'userID'>>;
  keycloak_users_create?: Resolver<Maybe<ResolversTypes['ClientUser']>, ParentType, ContextType, RequireFields<MutationKeycloak_Users_CreateArgs, 'email'>>;
  keycloak_users_delClientRoleMappings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloak_Users_DelClientRoleMappingsArgs, 'clientID' | 'roleID' | 'roleName' | 'userID'>>;
  keycloak_users_delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloak_Users_DeleteArgs, 'userID'>>;
  me?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType>;
  minioDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationMinioDeleteArgs, 'bucketName' | 'objectName'>>;
  minioUploadFile?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType, RequireFields<MutationMinioUploadFileArgs, 'bucketName' | 'file' | 'rawDatasetID'>>;
  nestedCuratedDatasetDelete?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedCuratedDatasetDeleteArgs, 'id'>>;
  nestedCuratedDatasetProperty?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedCuratedDatasetPropertyArgs, 'id' | 'operation' | 'property' | 'value'>>;
  nestedRawDatasetDelete?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedRawDatasetDeleteArgs, 'id'>>;
  nestedRawDatasetProperty?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedRawDatasetPropertyArgs, 'id' | 'operation' | 'property' | 'value'>>;
  nestedStudyDelete?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedStudyDeleteArgs, 'id'>>;
  nestedStudyProperty?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedStudyPropertyArgs, 'id' | 'operation' | 'property' | 'value'>>;
  nestedSwitch?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedSwitchArgs, 'id' | 'nestedSwitch' | 'operation' | 'property' | 'value'>>;
  nestedSwitchDelete?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedSwitchDeleteArgs, 'id'>>;
  submitTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, Partial<MutationSubmitTaskArgs>>;
  updateClientRoles?: Resolver<ResolversTypes['UpdateClientRolesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateClientRolesArgs>>;
  updateClientUsers?: Resolver<ResolversTypes['UpdateClientUsersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateClientUsersArgs>>;
  updateClients?: Resolver<ResolversTypes['UpdateClientsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateClientsArgs>>;
  updateCuratedDatasets?: Resolver<ResolversTypes['UpdateCuratedDatasetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCuratedDatasetsArgs>>;
  updateDataVariableFieldDefinitions?: Resolver<ResolversTypes['UpdateDataVariableFieldDefinitionsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateDataVariableFieldDefinitionsArgs>>;
  updateDataVariableFields?: Resolver<ResolversTypes['UpdateDataVariableFieldsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateDataVariableFieldsArgs>>;
  updateDataVariableValues?: Resolver<ResolversTypes['UpdateDataVariableValuesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateDataVariableValuesArgs>>;
  updateDataVariables?: Resolver<ResolversTypes['UpdateDataVariablesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateDataVariablesArgs>>;
  updateFileValidations?: Resolver<ResolversTypes['UpdateFileValidationsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFileValidationsArgs>>;
  updateGeographyCities?: Resolver<ResolversTypes['UpdateGeographyCitiesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateGeographyCitiesArgs>>;
  updateGeographyCityToStudy?: Resolver<ResolversTypes['GeographyCity'], ParentType, ContextType, RequireFields<MutationUpdateGeographyCityToStudyArgs, 'cityID' | 'studyID'>>;
  updateHarmonizedDatasets?: Resolver<ResolversTypes['UpdateHarmonizedDatasetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateHarmonizedDatasetsArgs>>;
  updateKeycloakUsers?: Resolver<ResolversTypes['UpdateKeycloakUsersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateKeycloakUsersArgs>>;
  updateMinioBuckets?: Resolver<ResolversTypes['UpdateMinioBucketsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMinioBucketsArgs>>;
  updateMinioUploads?: Resolver<ResolversTypes['UpdateMinioUploadsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMinioUploadsArgs>>;
  updateMismatches?: Resolver<ResolversTypes['UpdateMismatchesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateMismatchesArgs>>;
  updateNeo4JUpdateStats?: Resolver<ResolversTypes['UpdateNeo4JUpdateStatsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateNeo4JUpdateStatsArgs>>;
  updateOntologies?: Resolver<ResolversTypes['UpdateOntologiesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateOntologiesArgs>>;
  updateOntologyClasses?: Resolver<ResolversTypes['UpdateOntologyClassesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateOntologyClassesArgs>>;
  updateOntologyRelations?: Resolver<ResolversTypes['UpdateOntologyRelationsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateOntologyRelationsArgs>>;
  updateRawDatasets?: Resolver<ResolversTypes['UpdateRawDatasetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateRawDatasetsArgs>>;
  updateStudies?: Resolver<ResolversTypes['UpdateStudiesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateStudiesArgs>>;
  updateTasks?: Resolver<ResolversTypes['UpdateTasksMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTasksArgs>>;
  validateCodebook?: Resolver<Maybe<ResolversTypes['FileValidation']>, ParentType, ContextType, RequireFields<MutationValidateCodebookArgs, 'objectName' | 'rawDatasetID'>>;
  validateRawdatafile?: Resolver<Maybe<ResolversTypes['FileValidation']>, ParentType, ContextType, RequireFields<MutationValidateRawdatafileArgs, 'objectName' | 'rawDatasetID'>>;
  validateRawfileCodebookPair?: Resolver<Maybe<ResolversTypes['FileValidation']>, ParentType, ContextType, RequireFields<MutationValidateRawfileCodebookPairArgs, 'objectNameCB' | 'objectNameRF' | 'rawDatasetIDCB' | 'rawDatasetIDRF'>>;
};

export type Neo4JUpdateStatsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Neo4JUpdateStatsConnection'] = ResolversParentTypes['Neo4JUpdateStatsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['Neo4jUpdateStatsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Neo4jUpdateStatsResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Neo4jUpdateStats'] = ResolversParentTypes['Neo4jUpdateStats']> = {
  constraintsAdded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  constraintsRemoved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  indexesAdded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  indexesRemoved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  labelsAdded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  labelsRemoved?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodesCreated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  propertiesSet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relationshipsCreated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relationshipsDeleted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Neo4jUpdateStatsAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Neo4jUpdateStatsAggregateSelection'] = ResolversParentTypes['Neo4jUpdateStatsAggregateSelection']> = {
  constraintsAdded?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  constraintsRemoved?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  indexesAdded?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  indexesRemoved?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  labelsAdded?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  labelsRemoved?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  propertiesSet?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['IntAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Neo4jUpdateStatsEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Neo4jUpdateStatsEdge'] = ResolversParentTypes['Neo4jUpdateStatsEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Neo4jUpdateStats'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologiesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologiesConnection'] = ResolversParentTypes['OntologiesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OntologyEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Ontology'] = ResolversParentTypes['Ontology']> = {
  classes?: Resolver<Array<ResolversTypes['OntologyClass']>, ParentType, ContextType, RequireFields<OntologyClassesArgs, 'directed'>>;
  classesAggregate?: Resolver<Maybe<ResolversTypes['OntologyOntologyClassClassesAggregationSelection']>, ParentType, ContextType, RequireFields<OntologyClassesAggregateArgs, 'directed'>>;
  classesConnection?: Resolver<ResolversTypes['OntologyClassesConnection'], ParentType, ContextType, RequireFields<OntologyClassesConnectionArgs, 'directed'>>;
  externalID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ontologyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  relations?: Resolver<Array<ResolversTypes['OntologyRelation']>, ParentType, ContextType, RequireFields<OntologyRelationsArgs, 'directed'>>;
  relationsAggregate?: Resolver<Maybe<ResolversTypes['OntologyOntologyRelationRelationsAggregationSelection']>, ParentType, ContextType, RequireFields<OntologyRelationsAggregateArgs, 'directed'>>;
  relationsConnection?: Resolver<ResolversTypes['OntologyRelationsConnection'], ParentType, ContextType, RequireFields<OntologyRelationsConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyAggregateSelection'] = ResolversParentTypes['OntologyAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  externalID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyClassResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyClass'] = ResolversParentTypes['OntologyClass']> = {
  externalID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ontologyClassID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyClassAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyClassAggregateSelection'] = ResolversParentTypes['OntologyClassAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  externalID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyClassID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyClassEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyClassEdge'] = ResolversParentTypes['OntologyClassEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OntologyClass'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyClassesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyClassesConnection'] = ResolversParentTypes['OntologyClassesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OntologyClassEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyEdge'] = ResolversParentTypes['OntologyEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Ontology'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyOntologyClassClassesAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyOntologyClassClassesAggregationSelection'] = ResolversParentTypes['OntologyOntologyClassClassesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OntologyOntologyClassClassesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyOntologyClassClassesNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyOntologyClassClassesNodeAggregateSelection'] = ResolversParentTypes['OntologyOntologyClassClassesNodeAggregateSelection']> = {
  externalID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyClassID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyOntologyRelationRelationsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyOntologyRelationRelationsAggregationSelection'] = ResolversParentTypes['OntologyOntologyRelationRelationsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OntologyOntologyRelationRelationsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyOntologyRelationRelationsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyOntologyRelationRelationsNodeAggregateSelection'] = ResolversParentTypes['OntologyOntologyRelationRelationsNodeAggregateSelection']> = {
  label?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyRelationID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelation'] = ResolversParentTypes['OntologyRelation']> = {
  from?: Resolver<ResolversTypes['OntologyClass'], ParentType, ContextType, RequireFields<OntologyRelationFromArgs, 'directed'>>;
  fromAggregate?: Resolver<Maybe<ResolversTypes['OntologyRelationOntologyClassFromAggregationSelection']>, ParentType, ContextType, RequireFields<OntologyRelationFromAggregateArgs, 'directed'>>;
  fromConnection?: Resolver<ResolversTypes['OntologyRelationFromConnection'], ParentType, ContextType, RequireFields<OntologyRelationFromConnectionArgs, 'directed'>>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ontologyRelationID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['OntologyClass'], ParentType, ContextType, RequireFields<OntologyRelationToArgs, 'directed'>>;
  toAggregate?: Resolver<Maybe<ResolversTypes['OntologyRelationOntologyClassToAggregationSelection']>, ParentType, ContextType, RequireFields<OntologyRelationToAggregateArgs, 'directed'>>;
  toConnection?: Resolver<ResolversTypes['OntologyRelationToConnection'], ParentType, ContextType, RequireFields<OntologyRelationToConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationAggregateSelection'] = ResolversParentTypes['OntologyRelationAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyRelationID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationEdge'] = ResolversParentTypes['OntologyRelationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OntologyRelation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationFromConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationFromConnection'] = ResolversParentTypes['OntologyRelationFromConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OntologyRelationFromRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationFromRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationFromRelationship'] = ResolversParentTypes['OntologyRelationFromRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OntologyClass'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationOntologyClassFromAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationOntologyClassFromAggregationSelection'] = ResolversParentTypes['OntologyRelationOntologyClassFromAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OntologyRelationOntologyClassFromNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationOntologyClassFromNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationOntologyClassFromNodeAggregateSelection'] = ResolversParentTypes['OntologyRelationOntologyClassFromNodeAggregateSelection']> = {
  externalID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyClassID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationOntologyClassToAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationOntologyClassToAggregationSelection'] = ResolversParentTypes['OntologyRelationOntologyClassToAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OntologyRelationOntologyClassToNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationOntologyClassToNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationOntologyClassToNodeAggregateSelection'] = ResolversParentTypes['OntologyRelationOntologyClassToNodeAggregateSelection']> = {
  externalID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  ontologyClassID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationToConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationToConnection'] = ResolversParentTypes['OntologyRelationToConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OntologyRelationToRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationToRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationToRelationship'] = ResolversParentTypes['OntologyRelationToRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OntologyClass'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OntologyRelationsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['OntologyRelationsConnection'] = ResolversParentTypes['OntologyRelationsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OntologyRelationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  clientRoles?: Resolver<Array<ResolversTypes['ClientRole']>, ParentType, ContextType, Partial<QueryClientRolesArgs>>;
  clientRolesAggregate?: Resolver<ResolversTypes['ClientRoleAggregateSelection'], ParentType, ContextType, Partial<QueryClientRolesAggregateArgs>>;
  clientRolesConnection?: Resolver<ResolversTypes['ClientRolesConnection'], ParentType, ContextType, Partial<QueryClientRolesConnectionArgs>>;
  clientUsers?: Resolver<Array<ResolversTypes['ClientUser']>, ParentType, ContextType, Partial<QueryClientUsersArgs>>;
  clientUsersAggregate?: Resolver<ResolversTypes['ClientUserAggregateSelection'], ParentType, ContextType, Partial<QueryClientUsersAggregateArgs>>;
  clientUsersConnection?: Resolver<ResolversTypes['ClientUsersConnection'], ParentType, ContextType, Partial<QueryClientUsersConnectionArgs>>;
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType, Partial<QueryClientsArgs>>;
  clientsAggregate?: Resolver<ResolversTypes['ClientAggregateSelection'], ParentType, ContextType, Partial<QueryClientsAggregateArgs>>;
  clientsConnection?: Resolver<ResolversTypes['ClientsConnection'], ParentType, ContextType, Partial<QueryClientsConnectionArgs>>;
  curatedDatasets?: Resolver<Array<ResolversTypes['CuratedDataset']>, ParentType, ContextType, Partial<QueryCuratedDatasetsArgs>>;
  curatedDatasetsAggregate?: Resolver<ResolversTypes['CuratedDatasetAggregateSelection'], ParentType, ContextType, Partial<QueryCuratedDatasetsAggregateArgs>>;
  curatedDatasetsConnection?: Resolver<ResolversTypes['CuratedDatasetsConnection'], ParentType, ContextType, Partial<QueryCuratedDatasetsConnectionArgs>>;
  dataVariableFieldDefinitions?: Resolver<Array<ResolversTypes['DataVariableFieldDefinition']>, ParentType, ContextType, Partial<QueryDataVariableFieldDefinitionsArgs>>;
  dataVariableFieldDefinitionsAggregate?: Resolver<ResolversTypes['DataVariableFieldDefinitionAggregateSelection'], ParentType, ContextType, Partial<QueryDataVariableFieldDefinitionsAggregateArgs>>;
  dataVariableFieldDefinitionsConnection?: Resolver<ResolversTypes['DataVariableFieldDefinitionsConnection'], ParentType, ContextType, Partial<QueryDataVariableFieldDefinitionsConnectionArgs>>;
  dataVariableFields?: Resolver<Array<ResolversTypes['DataVariableField']>, ParentType, ContextType, Partial<QueryDataVariableFieldsArgs>>;
  dataVariableFieldsAggregate?: Resolver<ResolversTypes['DataVariableFieldAggregateSelection'], ParentType, ContextType, Partial<QueryDataVariableFieldsAggregateArgs>>;
  dataVariableFieldsConnection?: Resolver<ResolversTypes['DataVariableFieldsConnection'], ParentType, ContextType, Partial<QueryDataVariableFieldsConnectionArgs>>;
  dataVariableValues?: Resolver<Array<ResolversTypes['DataVariableValue']>, ParentType, ContextType, Partial<QueryDataVariableValuesArgs>>;
  dataVariableValuesAggregate?: Resolver<ResolversTypes['DataVariableValueAggregateSelection'], ParentType, ContextType, Partial<QueryDataVariableValuesAggregateArgs>>;
  dataVariableValuesConnection?: Resolver<ResolversTypes['DataVariableValuesConnection'], ParentType, ContextType, Partial<QueryDataVariableValuesConnectionArgs>>;
  dataVariables?: Resolver<Array<ResolversTypes['DataVariable']>, ParentType, ContextType, Partial<QueryDataVariablesArgs>>;
  dataVariablesAggregate?: Resolver<ResolversTypes['DataVariableAggregateSelection'], ParentType, ContextType, Partial<QueryDataVariablesAggregateArgs>>;
  dataVariablesConnection?: Resolver<ResolversTypes['DataVariablesConnection'], ParentType, ContextType, Partial<QueryDataVariablesConnectionArgs>>;
  fileValidations?: Resolver<Array<ResolversTypes['FileValidation']>, ParentType, ContextType, Partial<QueryFileValidationsArgs>>;
  fileValidationsAggregate?: Resolver<ResolversTypes['FileValidationAggregateSelection'], ParentType, ContextType, Partial<QueryFileValidationsAggregateArgs>>;
  fileValidationsConnection?: Resolver<ResolversTypes['FileValidationsConnection'], ParentType, ContextType, Partial<QueryFileValidationsConnectionArgs>>;
  funnelTask?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryFunnelTaskArgs>>;
  funnelTasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  geographyCities?: Resolver<Array<ResolversTypes['GeographyCity']>, ParentType, ContextType, Partial<QueryGeographyCitiesArgs>>;
  geographyCitiesAggregate?: Resolver<ResolversTypes['GeographyCityAggregateSelection'], ParentType, ContextType, Partial<QueryGeographyCitiesAggregateArgs>>;
  geographyCitiesConnection?: Resolver<ResolversTypes['GeographyCitiesConnection'], ParentType, ContextType, Partial<QueryGeographyCitiesConnectionArgs>>;
  harmonizedDatasets?: Resolver<Array<ResolversTypes['HarmonizedDataset']>, ParentType, ContextType, Partial<QueryHarmonizedDatasetsArgs>>;
  harmonizedDatasetsAggregate?: Resolver<ResolversTypes['HarmonizedDatasetAggregateSelection'], ParentType, ContextType, Partial<QueryHarmonizedDatasetsAggregateArgs>>;
  harmonizedDatasetsConnection?: Resolver<ResolversTypes['HarmonizedDatasetsConnection'], ParentType, ContextType, Partial<QueryHarmonizedDatasetsConnectionArgs>>;
  keycloakUsers?: Resolver<Array<ResolversTypes['KeycloakUser']>, ParentType, ContextType, Partial<QueryKeycloakUsersArgs>>;
  keycloakUsersAggregate?: Resolver<ResolversTypes['KeycloakUserAggregateSelection'], ParentType, ContextType, Partial<QueryKeycloakUsersAggregateArgs>>;
  keycloakUsersConnection?: Resolver<ResolversTypes['KeycloakUsersConnection'], ParentType, ContextType, Partial<QueryKeycloakUsersConnectionArgs>>;
  keycloak_clients_find?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType>;
  keycloak_clients_findRole?: Resolver<Maybe<ResolversTypes['ClientRole']>, ParentType, ContextType, RequireFields<QueryKeycloak_Clients_FindRoleArgs, 'clientID' | 'roleName'>>;
  keycloak_users_find?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientUser']>>>, ParentType, ContextType>;
  keycloak_users_listAvailableClientRoleMappings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientRole']>>>, ParentType, ContextType, RequireFields<QueryKeycloak_Users_ListAvailableClientRoleMappingsArgs, 'clientID'>>;
  keycloak_users_listClientRoleMappings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientRole']>>>, ParentType, ContextType, RequireFields<QueryKeycloak_Users_ListClientRoleMappingsArgs, 'clientID'>>;
  minioBuckets?: Resolver<Array<ResolversTypes['MinioBucket']>, ParentType, ContextType, Partial<QueryMinioBucketsArgs>>;
  minioBucketsAggregate?: Resolver<ResolversTypes['MinioBucketAggregateSelection'], ParentType, ContextType, Partial<QueryMinioBucketsAggregateArgs>>;
  minioBucketsConnection?: Resolver<ResolversTypes['MinioBucketsConnection'], ParentType, ContextType, Partial<QueryMinioBucketsConnectionArgs>>;
  minioUploads?: Resolver<Array<ResolversTypes['MinioUpload']>, ParentType, ContextType, Partial<QueryMinioUploadsArgs>>;
  minioUploadsAggregate?: Resolver<ResolversTypes['MinioUploadAggregateSelection'], ParentType, ContextType, Partial<QueryMinioUploadsAggregateArgs>>;
  minioUploadsConnection?: Resolver<ResolversTypes['MinioUploadsConnection'], ParentType, ContextType, Partial<QueryMinioUploadsConnectionArgs>>;
  mismatches?: Resolver<Array<ResolversTypes['Mismatch']>, ParentType, ContextType, Partial<QueryMismatchesArgs>>;
  mismatchesAggregate?: Resolver<ResolversTypes['MismatchAggregateSelection'], ParentType, ContextType, Partial<QueryMismatchesAggregateArgs>>;
  mismatchesConnection?: Resolver<ResolversTypes['MismatchesConnection'], ParentType, ContextType, Partial<QueryMismatchesConnectionArgs>>;
  neo4JUpdateStats?: Resolver<Array<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, Partial<QueryNeo4JUpdateStatsArgs>>;
  neo4JUpdateStatsAggregate?: Resolver<ResolversTypes['Neo4jUpdateStatsAggregateSelection'], ParentType, ContextType, Partial<QueryNeo4JUpdateStatsAggregateArgs>>;
  neo4JUpdateStatsConnection?: Resolver<ResolversTypes['Neo4JUpdateStatsConnection'], ParentType, ContextType, Partial<QueryNeo4JUpdateStatsConnectionArgs>>;
  ontologies?: Resolver<Array<ResolversTypes['Ontology']>, ParentType, ContextType, Partial<QueryOntologiesArgs>>;
  ontologiesAggregate?: Resolver<ResolversTypes['OntologyAggregateSelection'], ParentType, ContextType, Partial<QueryOntologiesAggregateArgs>>;
  ontologiesConnection?: Resolver<ResolversTypes['OntologiesConnection'], ParentType, ContextType, Partial<QueryOntologiesConnectionArgs>>;
  ontologyClasses?: Resolver<Array<ResolversTypes['OntologyClass']>, ParentType, ContextType, Partial<QueryOntologyClassesArgs>>;
  ontologyClassesAggregate?: Resolver<ResolversTypes['OntologyClassAggregateSelection'], ParentType, ContextType, Partial<QueryOntologyClassesAggregateArgs>>;
  ontologyClassesConnection?: Resolver<ResolversTypes['OntologyClassesConnection'], ParentType, ContextType, Partial<QueryOntologyClassesConnectionArgs>>;
  ontologyRelations?: Resolver<Array<ResolversTypes['OntologyRelation']>, ParentType, ContextType, Partial<QueryOntologyRelationsArgs>>;
  ontologyRelationsAggregate?: Resolver<ResolversTypes['OntologyRelationAggregateSelection'], ParentType, ContextType, Partial<QueryOntologyRelationsAggregateArgs>>;
  ontologyRelationsConnection?: Resolver<ResolversTypes['OntologyRelationsConnection'], ParentType, ContextType, Partial<QueryOntologyRelationsConnectionArgs>>;
  rawDatasetCalendarHeatmap?: Resolver<Array<ResolversTypes['CalendarHeatmapDatum']>, ParentType, ContextType, RequireFields<QueryRawDatasetCalendarHeatmapArgs, 'endDate' | 'startDate'>>;
  rawDatasets?: Resolver<Array<ResolversTypes['RawDataset']>, ParentType, ContextType, Partial<QueryRawDatasetsArgs>>;
  rawDatasetsAggregate?: Resolver<ResolversTypes['RawDatasetAggregateSelection'], ParentType, ContextType, Partial<QueryRawDatasetsAggregateArgs>>;
  rawDatasetsConnection?: Resolver<ResolversTypes['RawDatasetsConnection'], ParentType, ContextType, Partial<QueryRawDatasetsConnectionArgs>>;
  searchGeographyCities?: Resolver<Array<ResolversTypes['GeographyCity']>, ParentType, ContextType, RequireFields<QuerySearchGeographyCitiesArgs, 'name'>>;
  studies?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType, Partial<QueryStudiesArgs>>;
  studiesAggregate?: Resolver<ResolversTypes['StudyAggregateSelection'], ParentType, ContextType, Partial<QueryStudiesAggregateArgs>>;
  studiesConnection?: Resolver<ResolversTypes['StudiesConnection'], ParentType, ContextType, Partial<QueryStudiesConnectionArgs>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryTasksArgs>>;
  tasksAggregate?: Resolver<ResolversTypes['TaskAggregateSelection'], ParentType, ContextType, Partial<QueryTasksAggregateArgs>>;
  tasksConnection?: Resolver<ResolversTypes['TasksConnection'], ParentType, ContextType, Partial<QueryTasksConnectionArgs>>;
};

export type RawDatasetResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDataset'] = ResolversParentTypes['RawDataset']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  codeBook?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<RawDatasetCodeBookArgs, 'directed'>>;
  codeBookAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetMinioUploadCodeBookAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetCodeBookAggregateArgs, 'directed'>>;
  codeBookConnection?: Resolver<ResolversTypes['RawDatasetCodeBookConnection'], ParentType, ContextType, RequireFields<RawDatasetCodeBookConnectionArgs, 'directed'>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  files?: Resolver<Array<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<RawDatasetFilesArgs, 'directed'>>;
  filesAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetMinioUploadFilesAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetFilesAggregateArgs, 'directed'>>;
  filesConnection?: Resolver<ResolversTypes['RawDatasetFilesConnection'], ParentType, ContextType, RequireFields<RawDatasetFilesConnectionArgs, 'directed'>>;
  fromStudy?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType, RequireFields<RawDatasetFromStudyArgs, 'directed'>>;
  fromStudyAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetStudyFromStudyAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetFromStudyAggregateArgs, 'directed'>>;
  fromStudyConnection?: Resolver<ResolversTypes['RawDatasetFromStudyConnection'], ParentType, ContextType, RequireFields<RawDatasetFromStudyConnectionArgs, 'directed'>>;
  funnelTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<RawDatasetFunnelTasksArgs, 'directed'>>;
  funnelTasksAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetTaskFunnelTasksAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetFunnelTasksAggregateArgs, 'directed'>>;
  funnelTasksConnection?: Resolver<ResolversTypes['RawDatasetFunnelTasksConnection'], ParentType, ContextType, RequireFields<RawDatasetFunnelTasksConnectionArgs, 'directed'>>;
  generatedCuratedDatasets?: Resolver<Array<ResolversTypes['CuratedDataset']>, ParentType, ContextType, RequireFields<RawDatasetGeneratedCuratedDatasetsArgs, 'directed'>>;
  generatedCuratedDatasetsAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetGeneratedCuratedDatasetsAggregateArgs, 'directed'>>;
  generatedCuratedDatasetsConnection?: Resolver<ResolversTypes['RawDatasetGeneratedCuratedDatasetsConnection'], ParentType, ContextType, RequireFields<RawDatasetGeneratedCuratedDatasetsConnectionArgs, 'directed'>>;
  minioBucket?: Resolver<Maybe<ResolversTypes['MinioBucket']>, ParentType, ContextType, RequireFields<RawDatasetMinioBucketArgs, 'directed'>>;
  minioBucketAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetMinioBucketMinioBucketAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetMinioBucketAggregateArgs, 'directed'>>;
  minioBucketConnection?: Resolver<ResolversTypes['RawDatasetMinioBucketConnection'], ParentType, ContextType, RequireFields<RawDatasetMinioBucketConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rawdataFile?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<RawDatasetRawdataFileArgs, 'directed'>>;
  rawdataFileAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetMinioUploadRawdataFileAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetRawdataFileAggregateArgs, 'directed'>>;
  rawdataFileConnection?: Resolver<ResolversTypes['RawDatasetRawdataFileConnection'], ParentType, ContextType, RequireFields<RawDatasetRawdataFileConnectionArgs, 'directed'>>;
  studySite?: Resolver<Maybe<ResolversTypes['GeographyCity']>, ParentType, ContextType, RequireFields<RawDatasetStudySiteArgs, 'directed'>>;
  studySiteAggregate?: Resolver<Maybe<ResolversTypes['RawDatasetGeographyCityStudySiteAggregationSelection']>, ParentType, ContextType, RequireFields<RawDatasetStudySiteAggregateArgs, 'directed'>>;
  studySiteConnection?: Resolver<ResolversTypes['RawDatasetStudySiteConnection'], ParentType, ContextType, RequireFields<RawDatasetStudySiteConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetAggregateSelection'] = ResolversParentTypes['RawDatasetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetCodeBookConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetCodeBookConnection'] = ResolversParentTypes['RawDatasetCodeBookConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetCodeBookRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetCodeBookRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetCodeBookRelationship'] = ResolversParentTypes['RawDatasetCodeBookRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection'] = ResolversParentTypes['RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection'] = ResolversParentTypes['RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection']> = {
  curatedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetEdge'] = ResolversParentTypes['RawDatasetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetFilesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetFilesConnection'] = ResolversParentTypes['RawDatasetFilesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetFilesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetFilesRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetFilesRelationship'] = ResolversParentTypes['RawDatasetFilesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetFromStudyConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetFromStudyConnection'] = ResolversParentTypes['RawDatasetFromStudyConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetFromStudyRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetFromStudyRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetFromStudyRelationship'] = ResolversParentTypes['RawDatasetFromStudyRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetFunnelTasksConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetFunnelTasksConnection'] = ResolversParentTypes['RawDatasetFunnelTasksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetFunnelTasksRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetFunnelTasksRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetFunnelTasksRelationship'] = ResolversParentTypes['RawDatasetFunnelTasksRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetGeneratedCuratedDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetGeneratedCuratedDatasetsConnection'] = ResolversParentTypes['RawDatasetGeneratedCuratedDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetGeneratedCuratedDatasetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetGeneratedCuratedDatasetsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetGeneratedCuratedDatasetsRelationship'] = ResolversParentTypes['RawDatasetGeneratedCuratedDatasetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetGeographyCityStudySiteAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetGeographyCityStudySiteAggregationSelection'] = ResolversParentTypes['RawDatasetGeographyCityStudySiteAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetGeographyCityStudySiteNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetGeographyCityStudySiteNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetGeographyCityStudySiteNodeAggregateSelection'] = ResolversParentTypes['RawDatasetGeographyCityStudySiteNodeAggregateSelection']> = {
  city?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  cityID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioBucketConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioBucketConnection'] = ResolversParentTypes['RawDatasetMinioBucketConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetMinioBucketRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioBucketMinioBucketAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioBucketMinioBucketAggregationSelection'] = ResolversParentTypes['RawDatasetMinioBucketMinioBucketAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetMinioBucketMinioBucketNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioBucketMinioBucketNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioBucketMinioBucketNodeAggregateSelection'] = ResolversParentTypes['RawDatasetMinioBucketMinioBucketNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioBucketRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioBucketRelationship'] = ResolversParentTypes['RawDatasetMinioBucketRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioBucket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioUploadCodeBookAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioUploadCodeBookAggregationSelection'] = ResolversParentTypes['RawDatasetMinioUploadCodeBookAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetMinioUploadCodeBookNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioUploadCodeBookNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioUploadCodeBookNodeAggregateSelection'] = ResolversParentTypes['RawDatasetMinioUploadCodeBookNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioUploadFilesAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioUploadFilesAggregationSelection'] = ResolversParentTypes['RawDatasetMinioUploadFilesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetMinioUploadFilesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioUploadFilesNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioUploadFilesNodeAggregateSelection'] = ResolversParentTypes['RawDatasetMinioUploadFilesNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioUploadRawdataFileAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioUploadRawdataFileAggregationSelection'] = ResolversParentTypes['RawDatasetMinioUploadRawdataFileAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetMinioUploadRawdataFileNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetMinioUploadRawdataFileNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetMinioUploadRawdataFileNodeAggregateSelection'] = ResolversParentTypes['RawDatasetMinioUploadRawdataFileNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetRawdataFileConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetRawdataFileConnection'] = ResolversParentTypes['RawDatasetRawdataFileConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetRawdataFileRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetRawdataFileRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetRawdataFileRelationship'] = ResolversParentTypes['RawDatasetRawdataFileRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetStudyFromStudyAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetStudyFromStudyAggregationSelection'] = ResolversParentTypes['RawDatasetStudyFromStudyAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetStudyFromStudyNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetStudyFromStudyNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetStudyFromStudyNodeAggregateSelection'] = ResolversParentTypes['RawDatasetStudyFromStudyNodeAggregateSelection']> = {
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  studyID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetStudySiteConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetStudySiteConnection'] = ResolversParentTypes['RawDatasetStudySiteConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetStudySiteRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetStudySiteRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetStudySiteRelationship'] = ResolversParentTypes['RawDatasetStudySiteRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['GeographyCity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetTaskFunnelTasksAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetTaskFunnelTasksAggregationSelection'] = ResolversParentTypes['RawDatasetTaskFunnelTasksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RawDatasetTaskFunnelTasksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetTaskFunnelTasksNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetTaskFunnelTasksNodeAggregateSelection'] = ResolversParentTypes['RawDatasetTaskFunnelTasksNodeAggregateSelection']> = {
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RawDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['RawDatasetsConnection'] = ResolversParentTypes['RawDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['RawDatasetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringAggregateSelectionNonNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StringAggregateSelectionNonNullable'] = ResolversParentTypes['StringAggregateSelectionNonNullable']> = {
  longest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StringAggregateSelectionNullableResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StringAggregateSelectionNullable'] = ResolversParentTypes['StringAggregateSelectionNullable']> = {
  longest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudiesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudiesConnection'] = ResolversParentTypes['StudiesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['StudyEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Study'] = ResolversParentTypes['Study']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawDatasets?: Resolver<Array<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<StudyRawDatasetsArgs, 'directed'>>;
  rawDatasetsAggregate?: Resolver<Maybe<ResolversTypes['StudyRawDatasetRawDatasetsAggregationSelection']>, ParentType, ContextType, RequireFields<StudyRawDatasetsAggregateArgs, 'directed'>>;
  rawDatasetsConnection?: Resolver<ResolversTypes['StudyRawDatasetsConnection'], ParentType, ContextType, RequireFields<StudyRawDatasetsConnectionArgs, 'directed'>>;
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  studyID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  studySites?: Resolver<Array<ResolversTypes['GeographyCity']>, ParentType, ContextType, RequireFields<StudyStudySitesArgs, 'directed'>>;
  studySitesAggregate?: Resolver<Maybe<ResolversTypes['StudyGeographyCityStudySitesAggregationSelection']>, ParentType, ContextType, RequireFields<StudyStudySitesAggregateArgs, 'directed'>>;
  studySitesConnection?: Resolver<ResolversTypes['StudyStudySitesConnection'], ParentType, ContextType, RequireFields<StudyStudySitesConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyAggregateSelection'] = ResolversParentTypes['StudyAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  studyID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyEdge'] = ResolversParentTypes['StudyEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Study'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyGeographyCityStudySitesAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyGeographyCityStudySitesAggregationSelection'] = ResolversParentTypes['StudyGeographyCityStudySitesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['StudyGeographyCityStudySitesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyGeographyCityStudySitesNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyGeographyCityStudySitesNodeAggregateSelection'] = ResolversParentTypes['StudyGeographyCityStudySitesNodeAggregateSelection']> = {
  city?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  cityID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyRawDatasetRawDatasetsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyRawDatasetRawDatasetsAggregationSelection'] = ResolversParentTypes['StudyRawDatasetRawDatasetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['StudyRawDatasetRawDatasetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyRawDatasetRawDatasetsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyRawDatasetRawDatasetsNodeAggregateSelection'] = ResolversParentTypes['StudyRawDatasetRawDatasetsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyRawDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyRawDatasetsConnection'] = ResolversParentTypes['StudyRawDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['StudyRawDatasetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyRawDatasetsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyRawDatasetsRelationship'] = ResolversParentTypes['StudyRawDatasetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyStudySitesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyStudySitesConnection'] = ResolversParentTypes['StudyStudySitesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['StudyStudySitesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyStudySitesRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyStudySitesRelationship'] = ResolversParentTypes['StudyStudySitesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['GeographyCity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  creationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fromCuratedDataset?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<TaskFromCuratedDatasetArgs, 'directed'>>;
  fromCuratedDatasetAggregate?: Resolver<Maybe<ResolversTypes['TaskTaskFromCuratedDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<TaskFromCuratedDatasetAggregateArgs, 'directed'>>;
  fromCuratedDatasetConnection?: Resolver<ResolversTypes['TaskFromCuratedDatasetConnection'], ParentType, ContextType, RequireFields<TaskFromCuratedDatasetConnectionArgs, 'directed'>>;
  fromRawDataset?: Resolver<Maybe<ResolversTypes['RawDataset']>, ParentType, ContextType, RequireFields<TaskFromRawDatasetArgs, 'directed'>>;
  fromRawDatasetAggregate?: Resolver<Maybe<ResolversTypes['TaskRawDatasetFromRawDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<TaskFromRawDatasetAggregateArgs, 'directed'>>;
  fromRawDatasetConnection?: Resolver<ResolversTypes['TaskFromRawDatasetConnection'], ParentType, ContextType, RequireFields<TaskFromRawDatasetConnectionArgs, 'directed'>>;
  generatedCuratedDataset?: Resolver<Maybe<ResolversTypes['CuratedDataset']>, ParentType, ContextType, RequireFields<TaskGeneratedCuratedDatasetArgs, 'directed'>>;
  generatedCuratedDatasetAggregate?: Resolver<Maybe<ResolversTypes['TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<TaskGeneratedCuratedDatasetAggregateArgs, 'directed'>>;
  generatedCuratedDatasetConnection?: Resolver<ResolversTypes['TaskGeneratedCuratedDatasetConnection'], ParentType, ContextType, RequireFields<TaskGeneratedCuratedDatasetConnectionArgs, 'directed'>>;
  generatedExport?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<TaskGeneratedExportArgs, 'directed'>>;
  generatedExportAggregate?: Resolver<Maybe<ResolversTypes['TaskMinioUploadGeneratedExportAggregationSelection']>, ParentType, ContextType, RequireFields<TaskGeneratedExportAggregateArgs, 'directed'>>;
  generatedExportConnection?: Resolver<ResolversTypes['TaskGeneratedExportConnection'], ParentType, ContextType, RequireFields<TaskGeneratedExportConnectionArgs, 'directed'>>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['FunnelState']>, ParentType, ContextType>;
  taskID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskAggregateSelection'] = ResolversParentTypes['TaskAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection'] = ResolversParentTypes['TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection'] = ResolversParentTypes['TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection']> = {
  curatedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskEdge'] = ResolversParentTypes['TaskEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskFromCuratedDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskFromCuratedDatasetConnection'] = ResolversParentTypes['TaskFromCuratedDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TaskFromCuratedDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskFromCuratedDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskFromCuratedDatasetRelationship'] = ResolversParentTypes['TaskFromCuratedDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskFromRawDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskFromRawDatasetConnection'] = ResolversParentTypes['TaskFromRawDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TaskFromRawDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskFromRawDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskFromRawDatasetRelationship'] = ResolversParentTypes['TaskFromRawDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['RawDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskGeneratedCuratedDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskGeneratedCuratedDatasetConnection'] = ResolversParentTypes['TaskGeneratedCuratedDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TaskGeneratedCuratedDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskGeneratedCuratedDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskGeneratedCuratedDatasetRelationship'] = ResolversParentTypes['TaskGeneratedCuratedDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskGeneratedExportConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskGeneratedExportConnection'] = ResolversParentTypes['TaskGeneratedExportConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TaskGeneratedExportRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskGeneratedExportRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskGeneratedExportRelationship'] = ResolversParentTypes['TaskGeneratedExportRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskMinioUploadGeneratedExportAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskMinioUploadGeneratedExportAggregationSelection'] = ResolversParentTypes['TaskMinioUploadGeneratedExportAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TaskMinioUploadGeneratedExportNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskMinioUploadGeneratedExportNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskMinioUploadGeneratedExportNodeAggregateSelection'] = ResolversParentTypes['TaskMinioUploadGeneratedExportNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskRawDatasetFromRawDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskRawDatasetFromRawDatasetAggregationSelection'] = ResolversParentTypes['TaskRawDatasetFromRawDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TaskRawDatasetFromRawDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskRawDatasetFromRawDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskRawDatasetFromRawDatasetNodeAggregateSelection'] = ResolversParentTypes['TaskRawDatasetFromRawDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  rawDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskTaskFromCuratedDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskTaskFromCuratedDatasetAggregationSelection'] = ResolversParentTypes['TaskTaskFromCuratedDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TaskTaskFromCuratedDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskTaskFromCuratedDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskTaskFromCuratedDatasetNodeAggregateSelection'] = ResolversParentTypes['TaskTaskFromCuratedDatasetNodeAggregateSelection']> = {
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TasksConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TasksConnection'] = ResolversParentTypes['TasksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TaskEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClientRolesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateClientRolesMutationResponse'] = ResolversParentTypes['UpdateClientRolesMutationResponse']> = {
  clientRoles?: Resolver<Array<ResolversTypes['ClientRole']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClientUsersMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateClientUsersMutationResponse'] = ResolversParentTypes['UpdateClientUsersMutationResponse']> = {
  clientUsers?: Resolver<Array<ResolversTypes['ClientUser']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClientsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateClientsMutationResponse'] = ResolversParentTypes['UpdateClientsMutationResponse']> = {
  clients?: Resolver<Array<ResolversTypes['Client']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCuratedDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateCuratedDatasetsMutationResponse'] = ResolversParentTypes['UpdateCuratedDatasetsMutationResponse']> = {
  curatedDatasets?: Resolver<Array<ResolversTypes['CuratedDataset']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDataVariableFieldDefinitionsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateDataVariableFieldDefinitionsMutationResponse'] = ResolversParentTypes['UpdateDataVariableFieldDefinitionsMutationResponse']> = {
  dataVariableFieldDefinitions?: Resolver<Array<ResolversTypes['DataVariableFieldDefinition']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDataVariableFieldsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateDataVariableFieldsMutationResponse'] = ResolversParentTypes['UpdateDataVariableFieldsMutationResponse']> = {
  dataVariableFields?: Resolver<Array<ResolversTypes['DataVariableField']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDataVariableValuesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateDataVariableValuesMutationResponse'] = ResolversParentTypes['UpdateDataVariableValuesMutationResponse']> = {
  dataVariableValues?: Resolver<Array<ResolversTypes['DataVariableValue']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDataVariablesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateDataVariablesMutationResponse'] = ResolversParentTypes['UpdateDataVariablesMutationResponse']> = {
  dataVariables?: Resolver<Array<ResolversTypes['DataVariable']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFileValidationsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateFileValidationsMutationResponse'] = ResolversParentTypes['UpdateFileValidationsMutationResponse']> = {
  fileValidations?: Resolver<Array<ResolversTypes['FileValidation']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateGeographyCitiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateGeographyCitiesMutationResponse'] = ResolversParentTypes['UpdateGeographyCitiesMutationResponse']> = {
  geographyCities?: Resolver<Array<ResolversTypes['GeographyCity']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateHarmonizedDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateHarmonizedDatasetsMutationResponse'] = ResolversParentTypes['UpdateHarmonizedDatasetsMutationResponse']> = {
  harmonizedDatasets?: Resolver<Array<ResolversTypes['HarmonizedDataset']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateKeycloakUsersMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateKeycloakUsersMutationResponse'] = ResolversParentTypes['UpdateKeycloakUsersMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  keycloakUsers?: Resolver<Array<ResolversTypes['KeycloakUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMinioBucketsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateMinioBucketsMutationResponse'] = ResolversParentTypes['UpdateMinioBucketsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  minioBuckets?: Resolver<Array<ResolversTypes['MinioBucket']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMinioUploadsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateMinioUploadsMutationResponse'] = ResolversParentTypes['UpdateMinioUploadsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  minioUploads?: Resolver<Array<ResolversTypes['MinioUpload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateMismatchesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateMismatchesMutationResponse'] = ResolversParentTypes['UpdateMismatchesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  mismatches?: Resolver<Array<ResolversTypes['Mismatch']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateNeo4JUpdateStatsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateNeo4JUpdateStatsMutationResponse'] = ResolversParentTypes['UpdateNeo4JUpdateStatsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  neo4JUpdateStats?: Resolver<Array<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOntologiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateOntologiesMutationResponse'] = ResolversParentTypes['UpdateOntologiesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  ontologies?: Resolver<Array<ResolversTypes['Ontology']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOntologyClassesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateOntologyClassesMutationResponse'] = ResolversParentTypes['UpdateOntologyClassesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  ontologyClasses?: Resolver<Array<ResolversTypes['OntologyClass']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOntologyRelationsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateOntologyRelationsMutationResponse'] = ResolversParentTypes['UpdateOntologyRelationsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  ontologyRelations?: Resolver<Array<ResolversTypes['OntologyRelation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRawDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateRawDatasetsMutationResponse'] = ResolversParentTypes['UpdateRawDatasetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  rawDatasets?: Resolver<Array<ResolversTypes['RawDataset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateStudiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateStudiesMutationResponse'] = ResolversParentTypes['UpdateStudiesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  studies?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTasksMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateTasksMutationResponse'] = ResolversParentTypes['UpdateTasksMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = MyContextType> = {
  CalendarHeatmapDatum?: CalendarHeatmapDatumResolvers<ContextType>;
  Client?: ClientResolvers<ContextType>;
  ClientAggregateSelection?: ClientAggregateSelectionResolvers<ContextType>;
  ClientEdge?: ClientEdgeResolvers<ContextType>;
  ClientRole?: ClientRoleResolvers<ContextType>;
  ClientRoleAggregateSelection?: ClientRoleAggregateSelectionResolvers<ContextType>;
  ClientRoleEdge?: ClientRoleEdgeResolvers<ContextType>;
  ClientRolesConnection?: ClientRolesConnectionResolvers<ContextType>;
  ClientUser?: ClientUserResolvers<ContextType>;
  ClientUserAggregateSelection?: ClientUserAggregateSelectionResolvers<ContextType>;
  ClientUserEdge?: ClientUserEdgeResolvers<ContextType>;
  ClientUsersConnection?: ClientUsersConnectionResolvers<ContextType>;
  ClientsConnection?: ClientsConnectionResolvers<ContextType>;
  CreateClientRolesMutationResponse?: CreateClientRolesMutationResponseResolvers<ContextType>;
  CreateClientUsersMutationResponse?: CreateClientUsersMutationResponseResolvers<ContextType>;
  CreateClientsMutationResponse?: CreateClientsMutationResponseResolvers<ContextType>;
  CreateCuratedDatasetsMutationResponse?: CreateCuratedDatasetsMutationResponseResolvers<ContextType>;
  CreateDataVariableFieldDefinitionsMutationResponse?: CreateDataVariableFieldDefinitionsMutationResponseResolvers<ContextType>;
  CreateDataVariableFieldsMutationResponse?: CreateDataVariableFieldsMutationResponseResolvers<ContextType>;
  CreateDataVariableValuesMutationResponse?: CreateDataVariableValuesMutationResponseResolvers<ContextType>;
  CreateDataVariablesMutationResponse?: CreateDataVariablesMutationResponseResolvers<ContextType>;
  CreateFileValidationsMutationResponse?: CreateFileValidationsMutationResponseResolvers<ContextType>;
  CreateGeographyCitiesMutationResponse?: CreateGeographyCitiesMutationResponseResolvers<ContextType>;
  CreateHarmonizedDatasetsMutationResponse?: CreateHarmonizedDatasetsMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateKeycloakUsersMutationResponse?: CreateKeycloakUsersMutationResponseResolvers<ContextType>;
  CreateMinioBucketsMutationResponse?: CreateMinioBucketsMutationResponseResolvers<ContextType>;
  CreateMinioUploadsMutationResponse?: CreateMinioUploadsMutationResponseResolvers<ContextType>;
  CreateMismatchesMutationResponse?: CreateMismatchesMutationResponseResolvers<ContextType>;
  CreateNeo4JUpdateStatsMutationResponse?: CreateNeo4JUpdateStatsMutationResponseResolvers<ContextType>;
  CreateOntologiesMutationResponse?: CreateOntologiesMutationResponseResolvers<ContextType>;
  CreateOntologyClassesMutationResponse?: CreateOntologyClassesMutationResponseResolvers<ContextType>;
  CreateOntologyRelationsMutationResponse?: CreateOntologyRelationsMutationResponseResolvers<ContextType>;
  CreateRawDatasetsMutationResponse?: CreateRawDatasetsMutationResponseResolvers<ContextType>;
  CreateStudiesMutationResponse?: CreateStudiesMutationResponseResolvers<ContextType>;
  CreateTasksMutationResponse?: CreateTasksMutationResponseResolvers<ContextType>;
  CuratedDataset?: CuratedDatasetResolvers<ContextType>;
  CuratedDatasetAggregateSelection?: CuratedDatasetAggregateSelectionResolvers<ContextType>;
  CuratedDatasetDataVariableDataVariablesAggregationSelection?: CuratedDatasetDataVariableDataVariablesAggregationSelectionResolvers<ContextType>;
  CuratedDatasetDataVariableDataVariablesNodeAggregateSelection?: CuratedDatasetDataVariableDataVariablesNodeAggregateSelectionResolvers<ContextType>;
  CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection?: CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelectionResolvers<ContextType>;
  CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection?: CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelectionResolvers<ContextType>;
  CuratedDatasetDataVariablesConnection?: CuratedDatasetDataVariablesConnectionResolvers<ContextType>;
  CuratedDatasetDataVariablesRelationship?: CuratedDatasetDataVariablesRelationshipResolvers<ContextType>;
  CuratedDatasetEdge?: CuratedDatasetEdgeResolvers<ContextType>;
  CuratedDatasetExportTaskConnection?: CuratedDatasetExportTaskConnectionResolvers<ContextType>;
  CuratedDatasetExportTaskRelationship?: CuratedDatasetExportTaskRelationshipResolvers<ContextType>;
  CuratedDatasetFieldDefinitionsConnection?: CuratedDatasetFieldDefinitionsConnectionResolvers<ContextType>;
  CuratedDatasetFieldDefinitionsRelationship?: CuratedDatasetFieldDefinitionsRelationshipResolvers<ContextType>;
  CuratedDatasetFunnelTaskConnection?: CuratedDatasetFunnelTaskConnectionResolvers<ContextType>;
  CuratedDatasetFunnelTaskRelationship?: CuratedDatasetFunnelTaskRelationshipResolvers<ContextType>;
  CuratedDatasetGeneratedByRawDatasetConnection?: CuratedDatasetGeneratedByRawDatasetConnectionResolvers<ContextType>;
  CuratedDatasetGeneratedByRawDatasetRelationship?: CuratedDatasetGeneratedByRawDatasetRelationshipResolvers<ContextType>;
  CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection?: CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelectionResolvers<ContextType>;
  CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection?: CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelectionResolvers<ContextType>;
  CuratedDatasetTaskExportTaskAggregationSelection?: CuratedDatasetTaskExportTaskAggregationSelectionResolvers<ContextType>;
  CuratedDatasetTaskExportTaskNodeAggregateSelection?: CuratedDatasetTaskExportTaskNodeAggregateSelectionResolvers<ContextType>;
  CuratedDatasetTaskFunnelTaskAggregationSelection?: CuratedDatasetTaskFunnelTaskAggregationSelectionResolvers<ContextType>;
  CuratedDatasetTaskFunnelTaskNodeAggregateSelection?: CuratedDatasetTaskFunnelTaskNodeAggregateSelectionResolvers<ContextType>;
  CuratedDatasetsConnection?: CuratedDatasetsConnectionResolvers<ContextType>;
  DataVariable?: DataVariableResolvers<ContextType>;
  DataVariableAggregateSelection?: DataVariableAggregateSelectionResolvers<ContextType>;
  DataVariableCuratedDatasetConnection?: DataVariableCuratedDatasetConnectionResolvers<ContextType>;
  DataVariableCuratedDatasetCuratedDatasetAggregationSelection?: DataVariableCuratedDatasetCuratedDatasetAggregationSelectionResolvers<ContextType>;
  DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection?: DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelectionResolvers<ContextType>;
  DataVariableCuratedDatasetRelationship?: DataVariableCuratedDatasetRelationshipResolvers<ContextType>;
  DataVariableDataVariableFieldFieldsAggregationSelection?: DataVariableDataVariableFieldFieldsAggregationSelectionResolvers<ContextType>;
  DataVariableDataVariableFieldFieldsNodeAggregateSelection?: DataVariableDataVariableFieldFieldsNodeAggregateSelectionResolvers<ContextType>;
  DataVariableEdge?: DataVariableEdgeResolvers<ContextType>;
  DataVariableField?: DataVariableFieldResolvers<ContextType>;
  DataVariableFieldAggregateSelection?: DataVariableFieldAggregateSelectionResolvers<ContextType>;
  DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection?: DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelectionResolvers<ContextType>;
  DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection?: DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelectionResolvers<ContextType>;
  DataVariableFieldDefinition?: DataVariableFieldDefinitionResolvers<ContextType>;
  DataVariableFieldDefinitionAggregateSelection?: DataVariableFieldDefinitionAggregateSelectionResolvers<ContextType>;
  DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection?: DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelectionResolvers<ContextType>;
  DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection?: DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelectionResolvers<ContextType>;
  DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection?: DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelectionResolvers<ContextType>;
  DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection?: DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelectionResolvers<ContextType>;
  DataVariableFieldDefinitionEdge?: DataVariableFieldDefinitionEdgeResolvers<ContextType>;
  DataVariableFieldDefinitionHasCuratedDatasetConnection?: DataVariableFieldDefinitionHasCuratedDatasetConnectionResolvers<ContextType>;
  DataVariableFieldDefinitionHasCuratedDatasetRelationship?: DataVariableFieldDefinitionHasCuratedDatasetRelationshipResolvers<ContextType>;
  DataVariableFieldDefinitionHasFieldValuesConnection?: DataVariableFieldDefinitionHasFieldValuesConnectionResolvers<ContextType>;
  DataVariableFieldDefinitionHasFieldValuesRelationship?: DataVariableFieldDefinitionHasFieldValuesRelationshipResolvers<ContextType>;
  DataVariableFieldDefinitionsConnection?: DataVariableFieldDefinitionsConnectionResolvers<ContextType>;
  DataVariableFieldEdge?: DataVariableFieldEdgeResolvers<ContextType>;
  DataVariableFieldHasFieldDefinitionConnection?: DataVariableFieldHasFieldDefinitionConnectionResolvers<ContextType>;
  DataVariableFieldHasFieldDefinitionRelationship?: DataVariableFieldHasFieldDefinitionRelationshipResolvers<ContextType>;
  DataVariableFieldsConnection?: DataVariableFieldsConnectionResolvers<ContextType>;
  DataVariableFieldsRelationship?: DataVariableFieldsRelationshipResolvers<ContextType>;
  DataVariableValue?: DataVariableValueResolvers<ContextType>;
  DataVariableValueAggregateSelection?: DataVariableValueAggregateSelectionResolvers<ContextType>;
  DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection?: DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelectionResolvers<ContextType>;
  DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection?: DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelectionResolvers<ContextType>;
  DataVariableValueEdge?: DataVariableValueEdgeResolvers<ContextType>;
  DataVariableValueFromFieldDefinitionConnection?: DataVariableValueFromFieldDefinitionConnectionResolvers<ContextType>;
  DataVariableValueFromFieldDefinitionRelationship?: DataVariableValueFromFieldDefinitionRelationshipResolvers<ContextType>;
  DataVariableValuesConnection?: DataVariableValuesConnectionResolvers<ContextType>;
  DataVariablesConnection?: DataVariablesConnectionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeAggregateSelectionNonNullable?: DateTimeAggregateSelectionNonNullableResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  Email?: GraphQLScalarType;
  FileValidation?: FileValidationResolvers<ContextType>;
  FileValidationAggregateSelection?: FileValidationAggregateSelectionResolvers<ContextType>;
  FileValidationEdge?: FileValidationEdgeResolvers<ContextType>;
  FileValidationsConnection?: FileValidationsConnectionResolvers<ContextType>;
  FloatAggregateSelectionNonNullable?: FloatAggregateSelectionNonNullableResolvers<ContextType>;
  GeographyCitiesConnection?: GeographyCitiesConnectionResolvers<ContextType>;
  GeographyCity?: GeographyCityResolvers<ContextType>;
  GeographyCityAggregateSelection?: GeographyCityAggregateSelectionResolvers<ContextType>;
  GeographyCityEdge?: GeographyCityEdgeResolvers<ContextType>;
  HarmonizedDataset?: HarmonizedDatasetResolvers<ContextType>;
  HarmonizedDatasetAggregateSelection?: HarmonizedDatasetAggregateSelectionResolvers<ContextType>;
  HarmonizedDatasetEdge?: HarmonizedDatasetEdgeResolvers<ContextType>;
  HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection?: HarmonizedDatasetRawDatasetRawDatasetsAggregationSelectionResolvers<ContextType>;
  HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection?: HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelectionResolvers<ContextType>;
  HarmonizedDatasetRawDatasetsConnection?: HarmonizedDatasetRawDatasetsConnectionResolvers<ContextType>;
  HarmonizedDatasetRawDatasetsRelationship?: HarmonizedDatasetRawDatasetsRelationshipResolvers<ContextType>;
  HarmonizedDatasetsConnection?: HarmonizedDatasetsConnectionResolvers<ContextType>;
  HasCodebook?: HasCodebookResolvers<ContextType>;
  HasPairedCodebook?: HasPairedCodebookResolvers<ContextType>;
  HasPairedRawdatafile?: HasPairedRawdatafileResolvers<ContextType>;
  HasRawdatafile?: HasRawdatafileResolvers<ContextType>;
  IDAggregateSelectionNonNullable?: IdAggregateSelectionNonNullableResolvers<ContextType>;
  IDAggregateSelectionNullable?: IdAggregateSelectionNullableResolvers<ContextType>;
  IntAggregateSelectionNullable?: IntAggregateSelectionNullableResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  KeycloakUser?: KeycloakUserResolvers<ContextType>;
  KeycloakUserAggregateSelection?: KeycloakUserAggregateSelectionResolvers<ContextType>;
  KeycloakUserEdge?: KeycloakUserEdgeResolvers<ContextType>;
  KeycloakUsersConnection?: KeycloakUsersConnectionResolvers<ContextType>;
  MinioBucket?: MinioBucketResolvers<ContextType>;
  MinioBucketAggregateSelection?: MinioBucketAggregateSelectionResolvers<ContextType>;
  MinioBucketEdge?: MinioBucketEdgeResolvers<ContextType>;
  MinioBucketMinioObjectsConnection?: MinioBucketMinioObjectsConnectionResolvers<ContextType>;
  MinioBucketMinioObjectsRelationship?: MinioBucketMinioObjectsRelationshipResolvers<ContextType>;
  MinioBucketMinioUploadMinioObjectsAggregationSelection?: MinioBucketMinioUploadMinioObjectsAggregationSelectionResolvers<ContextType>;
  MinioBucketMinioUploadMinioObjectsNodeAggregateSelection?: MinioBucketMinioUploadMinioObjectsNodeAggregateSelectionResolvers<ContextType>;
  MinioBucketsConnection?: MinioBucketsConnectionResolvers<ContextType>;
  MinioUpload?: MinioUploadResolvers<ContextType>;
  MinioUploadAggregateSelection?: MinioUploadAggregateSelectionResolvers<ContextType>;
  MinioUploadCodeBookRawDatasetConnection?: MinioUploadCodeBookRawDatasetConnectionResolvers<ContextType>;
  MinioUploadCodeBookRawDatasetRelationship?: MinioUploadCodeBookRawDatasetRelationshipResolvers<ContextType>;
  MinioUploadEdge?: MinioUploadEdgeResolvers<ContextType>;
  MinioUploadFromExportTaskConnection?: MinioUploadFromExportTaskConnectionResolvers<ContextType>;
  MinioUploadFromExportTaskRelationship?: MinioUploadFromExportTaskRelationshipResolvers<ContextType>;
  MinioUploadMinioUploadPairedCodebookAggregationSelection?: MinioUploadMinioUploadPairedCodebookAggregationSelectionResolvers<ContextType>;
  MinioUploadMinioUploadPairedCodebookNodeAggregateSelection?: MinioUploadMinioUploadPairedCodebookNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadMinioUploadPairedRawdataFileAggregationSelection?: MinioUploadMinioUploadPairedRawdataFileAggregationSelectionResolvers<ContextType>;
  MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection?: MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadPairedCodebookConnection?: MinioUploadPairedCodebookConnectionResolvers<ContextType>;
  MinioUploadPairedCodebookRelationship?: MinioUploadPairedCodebookRelationshipResolvers<ContextType>;
  MinioUploadPairedRawdataFileConnection?: MinioUploadPairedRawdataFileConnectionResolvers<ContextType>;
  MinioUploadPairedRawdataFileRelationship?: MinioUploadPairedRawdataFileRelationshipResolvers<ContextType>;
  MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection?: MinioUploadRawDatasetCodeBookRawDatasetAggregationSelectionResolvers<ContextType>;
  MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection?: MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadRawDatasetConnection?: MinioUploadRawDatasetConnectionResolvers<ContextType>;
  MinioUploadRawDatasetRawDatasetAggregationSelection?: MinioUploadRawDatasetRawDatasetAggregationSelectionResolvers<ContextType>;
  MinioUploadRawDatasetRawDatasetNodeAggregateSelection?: MinioUploadRawDatasetRawDatasetNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection?: MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelectionResolvers<ContextType>;
  MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection?: MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadRawDatasetRelationship?: MinioUploadRawDatasetRelationshipResolvers<ContextType>;
  MinioUploadRawdataFileRawDatasetConnection?: MinioUploadRawdataFileRawDatasetConnectionResolvers<ContextType>;
  MinioUploadRawdataFileRawDatasetRelationship?: MinioUploadRawdataFileRawDatasetRelationshipResolvers<ContextType>;
  MinioUploadTaskFromExportTaskAggregationSelection?: MinioUploadTaskFromExportTaskAggregationSelectionResolvers<ContextType>;
  MinioUploadTaskFromExportTaskNodeAggregateSelection?: MinioUploadTaskFromExportTaskNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadsConnection?: MinioUploadsConnectionResolvers<ContextType>;
  Mismatch?: MismatchResolvers<ContextType>;
  MismatchAggregateSelection?: MismatchAggregateSelectionResolvers<ContextType>;
  MismatchEdge?: MismatchEdgeResolvers<ContextType>;
  MismatchesConnection?: MismatchesConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Neo4JUpdateStatsConnection?: Neo4JUpdateStatsConnectionResolvers<ContextType>;
  Neo4jUpdateStats?: Neo4jUpdateStatsResolvers<ContextType>;
  Neo4jUpdateStatsAggregateSelection?: Neo4jUpdateStatsAggregateSelectionResolvers<ContextType>;
  Neo4jUpdateStatsEdge?: Neo4jUpdateStatsEdgeResolvers<ContextType>;
  OntologiesConnection?: OntologiesConnectionResolvers<ContextType>;
  Ontology?: OntologyResolvers<ContextType>;
  OntologyAggregateSelection?: OntologyAggregateSelectionResolvers<ContextType>;
  OntologyClass?: OntologyClassResolvers<ContextType>;
  OntologyClassAggregateSelection?: OntologyClassAggregateSelectionResolvers<ContextType>;
  OntologyClassEdge?: OntologyClassEdgeResolvers<ContextType>;
  OntologyClassesConnection?: OntologyClassesConnectionResolvers<ContextType>;
  OntologyEdge?: OntologyEdgeResolvers<ContextType>;
  OntologyOntologyClassClassesAggregationSelection?: OntologyOntologyClassClassesAggregationSelectionResolvers<ContextType>;
  OntologyOntologyClassClassesNodeAggregateSelection?: OntologyOntologyClassClassesNodeAggregateSelectionResolvers<ContextType>;
  OntologyOntologyRelationRelationsAggregationSelection?: OntologyOntologyRelationRelationsAggregationSelectionResolvers<ContextType>;
  OntologyOntologyRelationRelationsNodeAggregateSelection?: OntologyOntologyRelationRelationsNodeAggregateSelectionResolvers<ContextType>;
  OntologyRelation?: OntologyRelationResolvers<ContextType>;
  OntologyRelationAggregateSelection?: OntologyRelationAggregateSelectionResolvers<ContextType>;
  OntologyRelationEdge?: OntologyRelationEdgeResolvers<ContextType>;
  OntologyRelationFromConnection?: OntologyRelationFromConnectionResolvers<ContextType>;
  OntologyRelationFromRelationship?: OntologyRelationFromRelationshipResolvers<ContextType>;
  OntologyRelationOntologyClassFromAggregationSelection?: OntologyRelationOntologyClassFromAggregationSelectionResolvers<ContextType>;
  OntologyRelationOntologyClassFromNodeAggregateSelection?: OntologyRelationOntologyClassFromNodeAggregateSelectionResolvers<ContextType>;
  OntologyRelationOntologyClassToAggregationSelection?: OntologyRelationOntologyClassToAggregationSelectionResolvers<ContextType>;
  OntologyRelationOntologyClassToNodeAggregateSelection?: OntologyRelationOntologyClassToNodeAggregateSelectionResolvers<ContextType>;
  OntologyRelationToConnection?: OntologyRelationToConnectionResolvers<ContextType>;
  OntologyRelationToRelationship?: OntologyRelationToRelationshipResolvers<ContextType>;
  OntologyRelationsConnection?: OntologyRelationsConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RawDataset?: RawDatasetResolvers<ContextType>;
  RawDatasetAggregateSelection?: RawDatasetAggregateSelectionResolvers<ContextType>;
  RawDatasetCodeBookConnection?: RawDatasetCodeBookConnectionResolvers<ContextType>;
  RawDatasetCodeBookRelationship?: RawDatasetCodeBookRelationshipResolvers<ContextType>;
  RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection?: RawDatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelectionResolvers<ContextType>;
  RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection?: RawDatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetEdge?: RawDatasetEdgeResolvers<ContextType>;
  RawDatasetFilesConnection?: RawDatasetFilesConnectionResolvers<ContextType>;
  RawDatasetFilesRelationship?: RawDatasetFilesRelationshipResolvers<ContextType>;
  RawDatasetFromStudyConnection?: RawDatasetFromStudyConnectionResolvers<ContextType>;
  RawDatasetFromStudyRelationship?: RawDatasetFromStudyRelationshipResolvers<ContextType>;
  RawDatasetFunnelTasksConnection?: RawDatasetFunnelTasksConnectionResolvers<ContextType>;
  RawDatasetFunnelTasksRelationship?: RawDatasetFunnelTasksRelationshipResolvers<ContextType>;
  RawDatasetGeneratedCuratedDatasetsConnection?: RawDatasetGeneratedCuratedDatasetsConnectionResolvers<ContextType>;
  RawDatasetGeneratedCuratedDatasetsRelationship?: RawDatasetGeneratedCuratedDatasetsRelationshipResolvers<ContextType>;
  RawDatasetGeographyCityStudySiteAggregationSelection?: RawDatasetGeographyCityStudySiteAggregationSelectionResolvers<ContextType>;
  RawDatasetGeographyCityStudySiteNodeAggregateSelection?: RawDatasetGeographyCityStudySiteNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetMinioBucketConnection?: RawDatasetMinioBucketConnectionResolvers<ContextType>;
  RawDatasetMinioBucketMinioBucketAggregationSelection?: RawDatasetMinioBucketMinioBucketAggregationSelectionResolvers<ContextType>;
  RawDatasetMinioBucketMinioBucketNodeAggregateSelection?: RawDatasetMinioBucketMinioBucketNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetMinioBucketRelationship?: RawDatasetMinioBucketRelationshipResolvers<ContextType>;
  RawDatasetMinioUploadCodeBookAggregationSelection?: RawDatasetMinioUploadCodeBookAggregationSelectionResolvers<ContextType>;
  RawDatasetMinioUploadCodeBookNodeAggregateSelection?: RawDatasetMinioUploadCodeBookNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetMinioUploadFilesAggregationSelection?: RawDatasetMinioUploadFilesAggregationSelectionResolvers<ContextType>;
  RawDatasetMinioUploadFilesNodeAggregateSelection?: RawDatasetMinioUploadFilesNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetMinioUploadRawdataFileAggregationSelection?: RawDatasetMinioUploadRawdataFileAggregationSelectionResolvers<ContextType>;
  RawDatasetMinioUploadRawdataFileNodeAggregateSelection?: RawDatasetMinioUploadRawdataFileNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetRawdataFileConnection?: RawDatasetRawdataFileConnectionResolvers<ContextType>;
  RawDatasetRawdataFileRelationship?: RawDatasetRawdataFileRelationshipResolvers<ContextType>;
  RawDatasetStudyFromStudyAggregationSelection?: RawDatasetStudyFromStudyAggregationSelectionResolvers<ContextType>;
  RawDatasetStudyFromStudyNodeAggregateSelection?: RawDatasetStudyFromStudyNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetStudySiteConnection?: RawDatasetStudySiteConnectionResolvers<ContextType>;
  RawDatasetStudySiteRelationship?: RawDatasetStudySiteRelationshipResolvers<ContextType>;
  RawDatasetTaskFunnelTasksAggregationSelection?: RawDatasetTaskFunnelTasksAggregationSelectionResolvers<ContextType>;
  RawDatasetTaskFunnelTasksNodeAggregateSelection?: RawDatasetTaskFunnelTasksNodeAggregateSelectionResolvers<ContextType>;
  RawDatasetsConnection?: RawDatasetsConnectionResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  StringAggregateSelectionNullable?: StringAggregateSelectionNullableResolvers<ContextType>;
  StudiesConnection?: StudiesConnectionResolvers<ContextType>;
  Study?: StudyResolvers<ContextType>;
  StudyAggregateSelection?: StudyAggregateSelectionResolvers<ContextType>;
  StudyEdge?: StudyEdgeResolvers<ContextType>;
  StudyGeographyCityStudySitesAggregationSelection?: StudyGeographyCityStudySitesAggregationSelectionResolvers<ContextType>;
  StudyGeographyCityStudySitesNodeAggregateSelection?: StudyGeographyCityStudySitesNodeAggregateSelectionResolvers<ContextType>;
  StudyRawDatasetRawDatasetsAggregationSelection?: StudyRawDatasetRawDatasetsAggregationSelectionResolvers<ContextType>;
  StudyRawDatasetRawDatasetsNodeAggregateSelection?: StudyRawDatasetRawDatasetsNodeAggregateSelectionResolvers<ContextType>;
  StudyRawDatasetsConnection?: StudyRawDatasetsConnectionResolvers<ContextType>;
  StudyRawDatasetsRelationship?: StudyRawDatasetsRelationshipResolvers<ContextType>;
  StudyStudySitesConnection?: StudyStudySitesConnectionResolvers<ContextType>;
  StudyStudySitesRelationship?: StudyStudySitesRelationshipResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskAggregateSelection?: TaskAggregateSelectionResolvers<ContextType>;
  TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection?: TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelectionResolvers<ContextType>;
  TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection?: TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelectionResolvers<ContextType>;
  TaskEdge?: TaskEdgeResolvers<ContextType>;
  TaskFromCuratedDatasetConnection?: TaskFromCuratedDatasetConnectionResolvers<ContextType>;
  TaskFromCuratedDatasetRelationship?: TaskFromCuratedDatasetRelationshipResolvers<ContextType>;
  TaskFromRawDatasetConnection?: TaskFromRawDatasetConnectionResolvers<ContextType>;
  TaskFromRawDatasetRelationship?: TaskFromRawDatasetRelationshipResolvers<ContextType>;
  TaskGeneratedCuratedDatasetConnection?: TaskGeneratedCuratedDatasetConnectionResolvers<ContextType>;
  TaskGeneratedCuratedDatasetRelationship?: TaskGeneratedCuratedDatasetRelationshipResolvers<ContextType>;
  TaskGeneratedExportConnection?: TaskGeneratedExportConnectionResolvers<ContextType>;
  TaskGeneratedExportRelationship?: TaskGeneratedExportRelationshipResolvers<ContextType>;
  TaskMinioUploadGeneratedExportAggregationSelection?: TaskMinioUploadGeneratedExportAggregationSelectionResolvers<ContextType>;
  TaskMinioUploadGeneratedExportNodeAggregateSelection?: TaskMinioUploadGeneratedExportNodeAggregateSelectionResolvers<ContextType>;
  TaskRawDatasetFromRawDatasetAggregationSelection?: TaskRawDatasetFromRawDatasetAggregationSelectionResolvers<ContextType>;
  TaskRawDatasetFromRawDatasetNodeAggregateSelection?: TaskRawDatasetFromRawDatasetNodeAggregateSelectionResolvers<ContextType>;
  TaskTaskFromCuratedDatasetAggregationSelection?: TaskTaskFromCuratedDatasetAggregationSelectionResolvers<ContextType>;
  TaskTaskFromCuratedDatasetNodeAggregateSelection?: TaskTaskFromCuratedDatasetNodeAggregateSelectionResolvers<ContextType>;
  TasksConnection?: TasksConnectionResolvers<ContextType>;
  UpdateClientRolesMutationResponse?: UpdateClientRolesMutationResponseResolvers<ContextType>;
  UpdateClientUsersMutationResponse?: UpdateClientUsersMutationResponseResolvers<ContextType>;
  UpdateClientsMutationResponse?: UpdateClientsMutationResponseResolvers<ContextType>;
  UpdateCuratedDatasetsMutationResponse?: UpdateCuratedDatasetsMutationResponseResolvers<ContextType>;
  UpdateDataVariableFieldDefinitionsMutationResponse?: UpdateDataVariableFieldDefinitionsMutationResponseResolvers<ContextType>;
  UpdateDataVariableFieldsMutationResponse?: UpdateDataVariableFieldsMutationResponseResolvers<ContextType>;
  UpdateDataVariableValuesMutationResponse?: UpdateDataVariableValuesMutationResponseResolvers<ContextType>;
  UpdateDataVariablesMutationResponse?: UpdateDataVariablesMutationResponseResolvers<ContextType>;
  UpdateFileValidationsMutationResponse?: UpdateFileValidationsMutationResponseResolvers<ContextType>;
  UpdateGeographyCitiesMutationResponse?: UpdateGeographyCitiesMutationResponseResolvers<ContextType>;
  UpdateHarmonizedDatasetsMutationResponse?: UpdateHarmonizedDatasetsMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateKeycloakUsersMutationResponse?: UpdateKeycloakUsersMutationResponseResolvers<ContextType>;
  UpdateMinioBucketsMutationResponse?: UpdateMinioBucketsMutationResponseResolvers<ContextType>;
  UpdateMinioUploadsMutationResponse?: UpdateMinioUploadsMutationResponseResolvers<ContextType>;
  UpdateMismatchesMutationResponse?: UpdateMismatchesMutationResponseResolvers<ContextType>;
  UpdateNeo4JUpdateStatsMutationResponse?: UpdateNeo4JUpdateStatsMutationResponseResolvers<ContextType>;
  UpdateOntologiesMutationResponse?: UpdateOntologiesMutationResponseResolvers<ContextType>;
  UpdateOntologyClassesMutationResponse?: UpdateOntologyClassesMutationResponseResolvers<ContextType>;
  UpdateOntologyRelationsMutationResponse?: UpdateOntologyRelationsMutationResponseResolvers<ContextType>;
  UpdateRawDatasetsMutationResponse?: UpdateRawDatasetsMutationResponseResolvers<ContextType>;
  UpdateStudiesMutationResponse?: UpdateStudiesMutationResponseResolvers<ContextType>;
  UpdateTasksMutationResponse?: UpdateTasksMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = MyContextType> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  hasPermission?: HasPermissionDirectiveResolver<any, any, ContextType>;
  hasRole?: HasRoleDirectiveResolver<any, any, ContextType>;
};
