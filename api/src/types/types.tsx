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

export type CreateDatasetsMutationResponse = {
  __typename?: 'CreateDatasetsMutationResponse';
  info: CreateInfo;
  Datasets: Array<Dataset>;
};

export type CreateStudiesMutationResponse = {
  __typename?: 'CreateStudiesMutationResponse';
  info: CreateInfo;
  studies: Array<Project>;
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
  generatedByDataset?: Maybe<Dataset>;
  generatedByDatasetAggregate?: Maybe<CuratedDatasetDatasetGeneratedByDatasetAggregationSelection>;
  generatedByDatasetConnection: CuratedDatasetGeneratedByDatasetConnection;
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


export type CuratedDatasetGeneratedByDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type CuratedDatasetGeneratedByDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type CuratedDatasetGeneratedByDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetConnectionSort>>;
  where?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectionWhere>;
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
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectFieldInput>;
};

export type CuratedDatasetConnectOrCreateInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput>;
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
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetFieldInput>;
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
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetDeleteFieldInput>;
};

export type CuratedDatasetDisconnectInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesDisconnectFieldInput>>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskDisconnectFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsDisconnectFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskDisconnectFieldInput>;
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetDisconnectFieldInput>;
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

export type CuratedDatasetGeneratedByDatasetAggregateInput = {
  AND?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetAggregateInput>>;
  OR?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput>;
};

export type CuratedDatasetGeneratedByDatasetConnectFieldInput = {
  connect?: InputMaybe<DatasetConnectInput>;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput = {
  onCreate: CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInputOnCreate = {
  node: DatasetOnCreateInput;
};

export type CuratedDatasetGeneratedByDatasetConnection = {
  __typename?: 'CuratedDatasetGeneratedByDatasetConnection';
  edges: Array<CuratedDatasetGeneratedByDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CuratedDatasetGeneratedByDatasetConnectionSort = {
  node?: InputMaybe<DatasetSort>;
};

export type CuratedDatasetGeneratedByDatasetConnectionWhere = {
  AND?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetConnectionWhere>>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type CuratedDatasetGeneratedByDatasetCreateFieldInput = {
  node: DatasetCreateInput;
};

export type CuratedDatasetGeneratedByDatasetDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectionWhere>;
};

export type CuratedDatasetGeneratedByDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectionWhere>;
};

export type CuratedDatasetGeneratedByDatasetFieldInput = {
  connect?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<CuratedDatasetGeneratedByDatasetCreateFieldInput>;
};

export type CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetGeneratedByDatasetRelationship = {
  __typename?: 'CuratedDatasetGeneratedByDatasetRelationship';
  cursor: Scalars['String'];
  node: Dataset;
};

export type CuratedDatasetGeneratedByDatasetUpdateConnectionInput = {
  node?: InputMaybe<DatasetUpdateInput>;
};

export type CuratedDatasetGeneratedByDatasetUpdateFieldInput = {
  connect?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<CuratedDatasetGeneratedByDatasetCreateFieldInput>;
  delete?: InputMaybe<CuratedDatasetGeneratedByDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<CuratedDatasetGeneratedByDatasetDisconnectFieldInput>;
  update?: InputMaybe<CuratedDatasetGeneratedByDatasetUpdateConnectionInput>;
  where?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectionWhere>;
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

export type CuratedDatasetDatasetGeneratedByDatasetAggregationSelection = {
  __typename?: 'CuratedDatasetDatasetGeneratedByDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection>;
};

export type CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection = {
  __typename?: 'CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetRelationInput = {
  dataVariables?: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
  exportTask?: InputMaybe<Array<CuratedDatasetExportTaskCreateFieldInput>>;
  fieldDefinitions?: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
  funnelTask?: InputMaybe<CuratedDatasetFunnelTaskCreateFieldInput>;
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetCreateFieldInput>;
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
  generatedByDataset?: InputMaybe<CuratedDatasetGeneratedByDatasetUpdateFieldInput>;
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
  generatedByDataset?: InputMaybe<DatasetWhere>;
  generatedByDatasetAggregate?: InputMaybe<CuratedDatasetGeneratedByDatasetAggregateInput>;
  generatedByDatasetConnection?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectionWhere>;
  generatedByDatasetConnection_NOT?: InputMaybe<CuratedDatasetGeneratedByDatasetConnectionWhere>;
  generatedByDataset_NOT?: InputMaybe<DatasetWhere>;
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
  Datasets: Array<Dataset>;
  DatasetsAggregate?: Maybe<HarmonizedDatasetDatasetDatasetsAggregationSelection>;
  DatasetsConnection: HarmonizedDatasetDatasetsConnection;
};


export type HarmonizedDatasetDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type HarmonizedDatasetDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type HarmonizedDatasetDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectionSort>>;
  where?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
};

export type HarmonizedDatasetAggregateSelection = {
  __typename?: 'HarmonizedDatasetAggregateSelection';
  count: Scalars['Int'];
  harmonizedDatasetID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type HarmonizedDatasetConnectInput = {
  Datasets?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectFieldInput>>;
};

export type HarmonizedDatasetConnectOrCreateInput = {
  Datasets?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectOrCreateFieldInput>>;
};

export type HarmonizedDatasetCreateInput = {
  name: Scalars['String'];
  Datasets?: InputMaybe<HarmonizedDatasetDatasetsFieldInput>;
};

export type HarmonizedDatasetDeleteInput = {
  Datasets?: InputMaybe<Array<HarmonizedDatasetDatasetsDeleteFieldInput>>;
};

export type HarmonizedDatasetDisconnectInput = {
  Datasets?: InputMaybe<Array<HarmonizedDatasetDatasetsDisconnectFieldInput>>;
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

export type HarmonizedDatasetDatasetDatasetsAggregationSelection = {
  __typename?: 'HarmonizedDatasetDatasetDatasetsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<HarmonizedDatasetDatasetDatasetsNodeAggregateSelection>;
};

export type HarmonizedDatasetDatasetDatasetsNodeAggregateSelection = {
  __typename?: 'HarmonizedDatasetDatasetDatasetsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type HarmonizedDatasetDatasetsAggregateInput = {
  AND?: InputMaybe<Array<HarmonizedDatasetDatasetsAggregateInput>>;
  OR?: InputMaybe<Array<HarmonizedDatasetDatasetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<HarmonizedDatasetDatasetsNodeAggregationWhereInput>;
};

export type HarmonizedDatasetDatasetsConnectFieldInput = {
  connect?: InputMaybe<Array<DatasetConnectInput>>;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type HarmonizedDatasetDatasetsConnectOrCreateFieldInput = {
  onCreate: HarmonizedDatasetDatasetsConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type HarmonizedDatasetDatasetsConnectOrCreateFieldInputOnCreate = {
  node: DatasetOnCreateInput;
};

export type HarmonizedDatasetDatasetsConnection = {
  __typename?: 'HarmonizedDatasetDatasetsConnection';
  edges: Array<HarmonizedDatasetDatasetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HarmonizedDatasetDatasetsConnectionSort = {
  node?: InputMaybe<DatasetSort>;
};

export type HarmonizedDatasetDatasetsConnectionWhere = {
  AND?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectionWhere>>;
  OR?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectionWhere>>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type HarmonizedDatasetDatasetsCreateFieldInput = {
  node: DatasetCreateInput;
};

export type HarmonizedDatasetDatasetsDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
};

export type HarmonizedDatasetDatasetsDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
};

export type HarmonizedDatasetDatasetsFieldInput = {
  connect?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HarmonizedDatasetDatasetsCreateFieldInput>>;
};

export type HarmonizedDatasetDatasetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HarmonizedDatasetDatasetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HarmonizedDatasetDatasetsNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type HarmonizedDatasetDatasetsRelationship = {
  __typename?: 'HarmonizedDatasetDatasetsRelationship';
  cursor: Scalars['String'];
  node: Dataset;
};

export type HarmonizedDatasetDatasetsUpdateConnectionInput = {
  node?: InputMaybe<DatasetUpdateInput>;
};

export type HarmonizedDatasetDatasetsUpdateFieldInput = {
  connect?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HarmonizedDatasetDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HarmonizedDatasetDatasetsCreateFieldInput>>;
  delete?: InputMaybe<Array<HarmonizedDatasetDatasetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HarmonizedDatasetDatasetsDisconnectFieldInput>>;
  update?: InputMaybe<HarmonizedDatasetDatasetsUpdateConnectionInput>;
  where?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRelationInput = {
  Datasets?: InputMaybe<Array<HarmonizedDatasetDatasetsCreateFieldInput>>;
};

/** Fields to sort HarmonizedDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one HarmonizedDatasetSort object. */
export type HarmonizedDatasetSort = {
  harmonizedDatasetID?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type HarmonizedDatasetUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  Datasets?: InputMaybe<Array<HarmonizedDatasetDatasetsUpdateFieldInput>>;
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
  Datasets?: InputMaybe<DatasetWhere>;
  DatasetsAggregate?: InputMaybe<HarmonizedDatasetDatasetsAggregateInput>;
  DatasetsConnection?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
  DatasetsConnection_ALL?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
  DatasetsConnection_NONE?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
  DatasetsConnection_NOT?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
  DatasetsConnection_SINGLE?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
  DatasetsConnection_SOME?: InputMaybe<HarmonizedDatasetDatasetsConnectionWhere>;
  /** Return HarmonizedDatasets where all of the related Datasets match this filter */
  Datasets_ALL?: InputMaybe<DatasetWhere>;
  /** Return HarmonizedDatasets where none of the related Datasets match this filter */
  Datasets_NONE?: InputMaybe<DatasetWhere>;
  Datasets_NOT?: InputMaybe<DatasetWhere>;
  /** Return HarmonizedDatasets where one of the related Datasets match this filter */
  Datasets_SINGLE?: InputMaybe<DatasetWhere>;
  /** Return HarmonizedDatasets where some of the related Datasets match this filter */
  Datasets_SOME?: InputMaybe<DatasetWhere>;
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
  codeBookDataset?: Maybe<Dataset>;
  codeBookDatasetAggregate?: Maybe<MinioUploadDatasetCodeBookDatasetAggregationSelection>;
  codeBookDatasetConnection: MinioUploadCodeBookDatasetConnection;
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
  Dataset?: Maybe<Dataset>;
  DatasetAggregate?: Maybe<MinioUploadDatasetDatasetAggregationSelection>;
  DatasetConnection: MinioUploadDatasetConnection;
  rawdataFileDataset?: Maybe<Dataset>;
  rawdataFileDatasetAggregate?: Maybe<MinioUploadDatasetRawdataFileDatasetAggregationSelection>;
  rawdataFileDatasetConnection: MinioUploadRawdataFileDatasetConnection;
};


export type MinioUploadCodeBookDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type MinioUploadCodeBookDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type MinioUploadCodeBookDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadCodeBookDatasetConnectionSort>>;
  where?: InputMaybe<MinioUploadCodeBookDatasetConnectionWhere>;
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


export type MinioUploadDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type MinioUploadDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type MinioUploadDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadDatasetConnectionSort>>;
  where?: InputMaybe<MinioUploadDatasetConnectionWhere>;
};


export type MinioUploadRawdataFileDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type MinioUploadRawdataFileDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type MinioUploadRawdataFileDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<MinioUploadRawdataFileDatasetConnectionSort>>;
  where?: InputMaybe<MinioUploadRawdataFileDatasetConnectionWhere>;
};

export type MinioUploadAggregateSelection = {
  __typename?: 'MinioUploadAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioUploadCodeBookDatasetAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadCodeBookDatasetAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadCodeBookDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadCodeBookDatasetNodeAggregationWhereInput>;
};

export type MinioUploadCodeBookDatasetConnectFieldInput = {
  connect?: InputMaybe<DatasetConnectInput>;
  edge: HasCodebookCreateInput;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type MinioUploadCodeBookDatasetConnectOrCreateFieldInput = {
  onCreate: MinioUploadCodeBookDatasetConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type MinioUploadCodeBookDatasetConnectOrCreateFieldInputOnCreate = {
  edge: HasCodebookCreateInput;
  node: DatasetOnCreateInput;
};

export type MinioUploadCodeBookDatasetConnection = {
  __typename?: 'MinioUploadCodeBookDatasetConnection';
  edges: Array<MinioUploadCodeBookDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadCodeBookDatasetConnectionSort = {
  edge?: InputMaybe<HasCodebookSort>;
  node?: InputMaybe<DatasetSort>;
};

export type MinioUploadCodeBookDatasetConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadCodeBookDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadCodeBookDatasetConnectionWhere>>;
  edge?: InputMaybe<HasCodebookWhere>;
  edge_NOT?: InputMaybe<HasCodebookWhere>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type MinioUploadCodeBookDatasetCreateFieldInput = {
  edge: HasCodebookCreateInput;
  node: DatasetCreateInput;
};

export type MinioUploadCodeBookDatasetDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<MinioUploadCodeBookDatasetConnectionWhere>;
};

export type MinioUploadCodeBookDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<MinioUploadCodeBookDatasetConnectionWhere>;
};

export type MinioUploadCodeBookDatasetFieldInput = {
  connect?: InputMaybe<MinioUploadCodeBookDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadCodeBookDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadCodeBookDatasetCreateFieldInput>;
};

export type MinioUploadCodeBookDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadCodeBookDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadCodeBookDatasetNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadCodeBookDatasetRelationship = HasCodebook & {
  __typename?: 'MinioUploadCodeBookDatasetRelationship';
  cursor: Scalars['String'];
  node: Dataset;
  validated: Scalars['Boolean'];
};

export type MinioUploadCodeBookDatasetUpdateConnectionInput = {
  edge?: InputMaybe<HasCodebookUpdateInput>;
  node?: InputMaybe<DatasetUpdateInput>;
};

export type MinioUploadCodeBookDatasetUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadCodeBookDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadCodeBookDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadCodeBookDatasetCreateFieldInput>;
  delete?: InputMaybe<MinioUploadCodeBookDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadCodeBookDatasetDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadCodeBookDatasetUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadCodeBookDatasetConnectionWhere>;
};

export type MinioUploadConnectInput = {
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetConnectFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskConnectFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetConnectFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetConnectFieldInput>;
};

export type MinioUploadConnectOrCreateInput = {
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetConnectOrCreateFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetConnectOrCreateFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetConnectOrCreateFieldInput>;
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
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetFieldInput>;
  filename: Scalars['String'];
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetFieldInput>;
};

export type MinioUploadDeleteInput = {
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetDeleteFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskDeleteFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookDeleteFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileDeleteFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetDeleteFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetDeleteFieldInput>;
};

export type MinioUploadDisconnectInput = {
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetDisconnectFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskDisconnectFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookDisconnectFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileDisconnectFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetDisconnectFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetDisconnectFieldInput>;
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

export type MinioUploadDatasetAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadDatasetAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadDatasetNodeAggregationWhereInput>;
};

export type MinioUploadDatasetCodeBookDatasetAggregationSelection = {
  __typename?: 'MinioUploadDatasetCodeBookDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadDatasetCodeBookDatasetNodeAggregateSelection>;
};

export type MinioUploadDatasetCodeBookDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadDatasetCodeBookDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadDatasetConnectFieldInput = {
  connect?: InputMaybe<DatasetConnectInput>;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type MinioUploadDatasetConnectOrCreateFieldInput = {
  onCreate: MinioUploadDatasetConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type MinioUploadDatasetConnectOrCreateFieldInputOnCreate = {
  node: DatasetOnCreateInput;
};

export type MinioUploadDatasetConnection = {
  __typename?: 'MinioUploadDatasetConnection';
  edges: Array<MinioUploadDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadDatasetConnectionSort = {
  node?: InputMaybe<DatasetSort>;
};

export type MinioUploadDatasetConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadDatasetConnectionWhere>>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type MinioUploadDatasetCreateFieldInput = {
  node: DatasetCreateInput;
};

export type MinioUploadDatasetDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<MinioUploadDatasetConnectionWhere>;
};

export type MinioUploadDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<MinioUploadDatasetConnectionWhere>;
};

export type MinioUploadDatasetFieldInput = {
  connect?: InputMaybe<MinioUploadDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadDatasetCreateFieldInput>;
};

export type MinioUploadDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadDatasetNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadDatasetDatasetAggregationSelection = {
  __typename?: 'MinioUploadDatasetDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadDatasetDatasetNodeAggregateSelection>;
};

export type MinioUploadDatasetDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadDatasetDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadDatasetRawdataFileDatasetAggregationSelection = {
  __typename?: 'MinioUploadDatasetRawdataFileDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection>;
};

export type MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadDatasetRelationship = {
  __typename?: 'MinioUploadDatasetRelationship';
  cursor: Scalars['String'];
  node: Dataset;
};

export type MinioUploadDatasetUpdateConnectionInput = {
  node?: InputMaybe<DatasetUpdateInput>;
};

export type MinioUploadDatasetUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadDatasetCreateFieldInput>;
  delete?: InputMaybe<MinioUploadDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadDatasetDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadDatasetUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileDatasetAggregateInput = {
  AND?: InputMaybe<Array<MinioUploadRawdataFileDatasetAggregateInput>>;
  OR?: InputMaybe<Array<MinioUploadRawdataFileDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<MinioUploadRawdataFileDatasetNodeAggregationWhereInput>;
};

export type MinioUploadRawdataFileDatasetConnectFieldInput = {
  connect?: InputMaybe<DatasetConnectInput>;
  edge: HasRawdatafileCreateInput;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type MinioUploadRawdataFileDatasetConnectOrCreateFieldInput = {
  onCreate: MinioUploadRawdataFileDatasetConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type MinioUploadRawdataFileDatasetConnectOrCreateFieldInputOnCreate = {
  edge: HasRawdatafileCreateInput;
  node: DatasetOnCreateInput;
};

export type MinioUploadRawdataFileDatasetConnection = {
  __typename?: 'MinioUploadRawdataFileDatasetConnection';
  edges: Array<MinioUploadRawdataFileDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUploadRawdataFileDatasetConnectionSort = {
  edge?: InputMaybe<HasRawdatafileSort>;
  node?: InputMaybe<DatasetSort>;
};

export type MinioUploadRawdataFileDatasetConnectionWhere = {
  AND?: InputMaybe<Array<MinioUploadRawdataFileDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<MinioUploadRawdataFileDatasetConnectionWhere>>;
  edge?: InputMaybe<HasRawdatafileWhere>;
  edge_NOT?: InputMaybe<HasRawdatafileWhere>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type MinioUploadRawdataFileDatasetCreateFieldInput = {
  edge: HasRawdatafileCreateInput;
  node: DatasetCreateInput;
};

export type MinioUploadRawdataFileDatasetDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<MinioUploadRawdataFileDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<MinioUploadRawdataFileDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileDatasetFieldInput = {
  connect?: InputMaybe<MinioUploadRawdataFileDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadRawdataFileDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadRawdataFileDatasetCreateFieldInput>;
};

export type MinioUploadRawdataFileDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MinioUploadRawdataFileDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MinioUploadRawdataFileDatasetNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type MinioUploadRawdataFileDatasetRelationship = HasRawdatafile & {
  __typename?: 'MinioUploadRawdataFileDatasetRelationship';
  cursor: Scalars['String'];
  node: Dataset;
  validated: Scalars['Boolean'];
};

export type MinioUploadRawdataFileDatasetUpdateConnectionInput = {
  edge?: InputMaybe<HasRawdatafileUpdateInput>;
  node?: InputMaybe<DatasetUpdateInput>;
};

export type MinioUploadRawdataFileDatasetUpdateFieldInput = {
  connect?: InputMaybe<MinioUploadRawdataFileDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<MinioUploadRawdataFileDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<MinioUploadRawdataFileDatasetCreateFieldInput>;
  delete?: InputMaybe<MinioUploadRawdataFileDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<MinioUploadRawdataFileDatasetDisconnectFieldInput>;
  update?: InputMaybe<MinioUploadRawdataFileDatasetUpdateConnectionInput>;
  where?: InputMaybe<MinioUploadRawdataFileDatasetConnectionWhere>;
};

export type MinioUploadRelationInput = {
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetCreateFieldInput>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskCreateFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetCreateFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetCreateFieldInput>;
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
  codeBookDataset?: InputMaybe<MinioUploadCodeBookDatasetUpdateFieldInput>;
  filename?: InputMaybe<Scalars['String']>;
  fromExportTask?: InputMaybe<MinioUploadFromExportTaskUpdateFieldInput>;
  pairedCodebook?: InputMaybe<MinioUploadPairedCodebookUpdateFieldInput>;
  pairedRawdataFile?: InputMaybe<MinioUploadPairedRawdataFileUpdateFieldInput>;
  Dataset?: InputMaybe<MinioUploadDatasetUpdateFieldInput>;
  rawdataFileDataset?: InputMaybe<MinioUploadRawdataFileDatasetUpdateFieldInput>;
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
  codeBookDataset?: InputMaybe<DatasetWhere>;
  codeBookDatasetAggregate?: InputMaybe<MinioUploadCodeBookDatasetAggregateInput>;
  codeBookDatasetConnection?: InputMaybe<MinioUploadCodeBookDatasetConnectionWhere>;
  codeBookDatasetConnection_NOT?: InputMaybe<MinioUploadCodeBookDatasetConnectionWhere>;
  codeBookDataset_NOT?: InputMaybe<DatasetWhere>;
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
  Dataset?: InputMaybe<DatasetWhere>;
  DatasetAggregate?: InputMaybe<MinioUploadDatasetAggregateInput>;
  DatasetConnection?: InputMaybe<MinioUploadDatasetConnectionWhere>;
  DatasetConnection_NOT?: InputMaybe<MinioUploadDatasetConnectionWhere>;
  Dataset_NOT?: InputMaybe<DatasetWhere>;
  rawdataFileDataset?: InputMaybe<DatasetWhere>;
  rawdataFileDatasetAggregate?: InputMaybe<MinioUploadRawdataFileDatasetAggregateInput>;
  rawdataFileDatasetConnection?: InputMaybe<MinioUploadRawdataFileDatasetConnectionWhere>;
  rawdataFileDatasetConnection_NOT?: InputMaybe<MinioUploadRawdataFileDatasetConnectionWhere>;
  rawdataFileDataset_NOT?: InputMaybe<DatasetWhere>;
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
  createCuratedDatasetFromDataset: CuratedDataset;
  createCuratedDatasetFromDatasetNew?: Maybe<CuratedDataset>;
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
  createDataset: Dataset;
  createDatasets: CreateDatasetsMutationResponse;
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
  deleteDatasets: DeleteInfo;
  deleteStudies: DeleteInfo;
  deleteTasks: DeleteInfo;
  funnelTaskExportCuratedDataset?: Maybe<Task>;
  funnelTaskExportDataVariableFieldDefinitions?: Maybe<Task>;
  keycloakAcceptTOS?: Maybe<Scalars['Boolean']>;
  keycloakClientsCreateRole?: Maybe<Scalars['Boolean']>;
  keycloakClientsDelRole?: Maybe<Scalars['Boolean']>;
  keycloakSyncUsers?: Maybe<Scalars['Boolean']>;
  keycloakUsersAddClientRoleMappings?: Maybe<Scalars['Boolean']>;
  keycloakUsersCreate?: Maybe<ClientUser>;
  keycloakUsersDelClientRoleMappings?: Maybe<Scalars['Boolean']>;
  keycloakUsersDelete?: Maybe<Scalars['Boolean']>;
  me?: Maybe<KeycloakUser>;
  minioDelete?: Maybe<Scalars['Boolean']>;
  minioUploadFile: MinioUpload;
  nestedCuratedDatasetDelete?: Maybe<Neo4jUpdateStats>;
  nestedCuratedDatasetProperty?: Maybe<Neo4jUpdateStats>;
  nestedDatasetDelete?: Maybe<Neo4jUpdateStats>;
  nestedDatasetProperty?: Maybe<Neo4jUpdateStats>;
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
  updateDatasets: UpdateDatasetsMutationResponse;
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
  DatasetID: Scalars['ID'];
};


export type MutationCreateCuratedDatasetFromDatasetArgs = {
  description: Scalars['String'];
  name: Scalars['String'];
  DatasetID: Scalars['ID'];
};


export type MutationCreateCuratedDatasetFromDatasetNewArgs = {
  codebookObjectName: Scalars['String'];
  DatasetID: Scalars['ID'];
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


export type MutationcreateDatasetArgs = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
  studyID: Scalars['ID'];
  studySiteID: Scalars['ID'];
};


export type MutationCreateDatasetsArgs = {
  input: Array<DatasetCreateInput>;
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


export type MutationDeleteDatasetsArgs = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<DatasetWhere>;
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


export type MutationKeycloakClientsCreateRoleArgs = {
  clientID: Scalars['ID'];
  roleName: Scalars['String'];
};


export type MutationKeycloakClientsDelRoleArgs = {
  clientID: Scalars['ID'];
  roleName: Scalars['String'];
};


export type MutationKeycloakSyncUsersArgs = {
  missingIn?: InputMaybe<KeycloakSyncSet>;
  operation?: InputMaybe<KeycloakSyncOperation>;
};


export type MutationKeycloakUsersAddClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  roleID: Scalars['ID'];
  roleName: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationKeycloakUsersCreateArgs = {
  email: Scalars['String'];
};


export type MutationKeycloakUsersDelClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  roleID: Scalars['ID'];
  roleName: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationKeycloakUsersDeleteArgs = {
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
  DatasetID: Scalars['ID'];
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


export type MutationNestedDatasetDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationNestedDatasetPropertyArgs = {
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


export type MutationUpdateDatasetsArgs = {
  connect?: InputMaybe<DatasetConnectInput>;
  connectOrCreate?: InputMaybe<DatasetConnectOrCreateInput>;
  create?: InputMaybe<DatasetRelationInput>;
  delete?: InputMaybe<DatasetDeleteInput>;
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  update?: InputMaybe<DatasetUpdateInput>;
  where?: InputMaybe<DatasetWhere>;
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
  DatasetID: Scalars['ID'];
};


export type MutationValidateRawdatafileArgs = {
  objectName: Scalars['ID'];
  DatasetID: Scalars['ID'];
};


export type MutationValidateRawfileCodebookPairArgs = {
  objectNameCB: Scalars['ID'];
  objectNameRF: Scalars['ID'];
  DatasetIDCB: Scalars['ID'];
  DatasetIDRF: Scalars['ID'];
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
  NestedDatasetProperty = 'nestedDatasetProperty',
  NestedStudyProperty = 'nestedStudyProperty'
}

export enum NestedSwitchDelete {
  NestedCuratedDatasetDelete = 'nestedCuratedDatasetDelete',
  NestedDatasetDelete = 'nestedDatasetDelete',
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
  keycloakClientsFind?: Maybe<Array<Maybe<Client>>>;
  keycloakClientsFindRole?: Maybe<ClientRole>;
  keycloakUsers: Array<KeycloakUser>;
  keycloakUsersAggregate: KeycloakUserAggregateSelection;
  keycloakUsersConnection: KeycloakUsersConnection;
  keycloakUsersFind?: Maybe<Array<Maybe<ClientUser>>>;
  keycloakUsersListAvailableClientRoleMappings?: Maybe<Array<Maybe<ClientRole>>>;
  keycloakUsersListClientRoleMappings?: Maybe<Array<Maybe<ClientRole>>>;
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
  DatasetCalendarHeatmap: Array<CalendarHeatmapDatum>;
  datasets: Array<Dataset>;
  DatasetsAggregate: DatasetAggregateSelection;
  DatasetsConnection: DatasetsConnection;
  searchGeographyCities: Array<GeographyCity>;
  studies: Array<Project>;
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


export type QueryKeycloakClientsFindRoleArgs = {
  clientID: Scalars['ID'];
  roleName: Scalars['String'];
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


export type QueryKeycloakUsersListAvailableClientRoleMappingsArgs = {
  clientID: Scalars['ID'];
  userID?: InputMaybe<Scalars['ID']>;
};


export type QueryKeycloakUsersListClientRoleMappingsArgs = {
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


export type QueryDatasetCalendarHeatmapArgs = {
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};


export type QueryDatasetsArgs = {
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type QueryDatasetsAggregateArgs = {
  where?: InputMaybe<DatasetWhere>;
};


export type QueryDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<DatasetSort>>>;
  where?: InputMaybe<DatasetWhere>;
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

export type Dataset = {
  __typename?: 'Dataset';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeBook?: Maybe<MinioUpload>;
  codeBookAggregate?: Maybe<DatasetMinioUploadCodeBookAggregationSelection>;
  codeBookConnection: DatasetCodeBookConnection;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  files: Array<MinioUpload>;
  filesAggregate?: Maybe<DatasetMinioUploadFilesAggregationSelection>;
  filesConnection: DatasetFilesConnection;
  fromStudy?: Maybe<Project>;
  fromStudyAggregate?: Maybe<DatasetStudyFromStudyAggregationSelection>;
  fromStudyConnection: DatasetFromStudyConnection;
  funnelTasks: Array<Task>;
  funnelTasksAggregate?: Maybe<DatasetTaskFunnelTasksAggregationSelection>;
  funnelTasksConnection: DatasetFunnelTasksConnection;
  generatedCuratedDatasets: Array<CuratedDataset>;
  generatedCuratedDatasetsAggregate?: Maybe<DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection>;
  generatedCuratedDatasetsConnection: DatasetGeneratedCuratedDatasetsConnection;
  minioBucket?: Maybe<MinioBucket>;
  minioBucketAggregate?: Maybe<DatasetMinioBucketMinioBucketAggregationSelection>;
  minioBucketConnection: DatasetMinioBucketConnection;
  name: Scalars['String'];
  DatasetID: Scalars['ID'];
  rawdataFile?: Maybe<MinioUpload>;
  rawdataFileAggregate?: Maybe<DatasetMinioUploadRawdataFileAggregationSelection>;
  rawdataFileConnection: DatasetRawdataFileConnection;
  studySite?: Maybe<GeographyCity>;
  studySiteAggregate?: Maybe<DatasetGeographyCityStudySiteAggregationSelection>;
  studySiteConnection: DatasetStudySiteConnection;
};


export type DatasetCodeBookArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type DatasetCodeBookAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type DatasetCodeBookConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetCodeBookConnectionSort>>;
  where?: InputMaybe<DatasetCodeBookConnectionWhere>;
};


export type DatasetFilesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type DatasetFilesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type DatasetFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetFilesConnectionSort>>;
  where?: InputMaybe<DatasetFilesConnectionWhere>;
};


export type DatasetFromStudyArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<StudyOptions>;
  where?: InputMaybe<StudyWhere>;
};


export type DatasetFromStudyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<StudyWhere>;
};


export type DatasetFromStudyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetFromStudyConnectionSort>>;
  where?: InputMaybe<DatasetFromStudyConnectionWhere>;
};


export type DatasetFunnelTasksArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<TaskOptions>;
  where?: InputMaybe<TaskWhere>;
};


export type DatasetFunnelTasksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TaskWhere>;
};


export type DatasetFunnelTasksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetFunnelTasksConnectionSort>>;
  where?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
};


export type DatasetGeneratedCuratedDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<CuratedDatasetOptions>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type DatasetGeneratedCuratedDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CuratedDatasetWhere>;
};


export type DatasetGeneratedCuratedDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectionSort>>;
  where?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
};


export type DatasetMinioBucketArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioBucketOptions>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type DatasetMinioBucketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioBucketWhere>;
};


export type DatasetMinioBucketConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetMinioBucketConnectionSort>>;
  where?: InputMaybe<DatasetMinioBucketConnectionWhere>;
};


export type DatasetRawdataFileArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<MinioUploadOptions>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type DatasetRawdataFileAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MinioUploadWhere>;
};


export type DatasetRawdataFileConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetRawdataFileConnectionSort>>;
  where?: InputMaybe<DatasetRawdataFileConnectionWhere>;
};


export type DatasetStudySiteArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<GeographyCityOptions>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type DatasetStudySiteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<GeographyCityWhere>;
};


export type DatasetStudySiteConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DatasetStudySiteConnectionSort>>;
  where?: InputMaybe<DatasetStudySiteConnectionWhere>;
};

export type DatasetAggregateSelection = {
  __typename?: 'DatasetAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type DatasetCodeBookAggregateInput = {
  AND?: InputMaybe<Array<DatasetCodeBookAggregateInput>>;
  OR?: InputMaybe<Array<DatasetCodeBookAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetCodeBookNodeAggregationWhereInput>;
};

export type DatasetCodeBookConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  edge: HasCodebookCreateInput;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type DatasetCodeBookConnectOrCreateFieldInput = {
  onCreate: DatasetCodeBookConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type DatasetCodeBookConnectOrCreateFieldInputOnCreate = {
  edge: HasCodebookCreateInput;
  node: MinioUploadOnCreateInput;
};

export type DatasetCodeBookConnection = {
  __typename?: 'DatasetCodeBookConnection';
  edges: Array<DatasetCodeBookRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetCodeBookConnectionSort = {
  edge?: InputMaybe<HasCodebookSort>;
  node?: InputMaybe<MinioUploadSort>;
};

export type DatasetCodeBookConnectionWhere = {
  AND?: InputMaybe<Array<DatasetCodeBookConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetCodeBookConnectionWhere>>;
  edge?: InputMaybe<HasCodebookWhere>;
  edge_NOT?: InputMaybe<HasCodebookWhere>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type DatasetCodeBookCreateFieldInput = {
  edge: HasCodebookCreateInput;
  node: MinioUploadCreateInput;
};

export type DatasetCodeBookDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<DatasetCodeBookConnectionWhere>;
};

export type DatasetCodeBookDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<DatasetCodeBookConnectionWhere>;
};

export type DatasetCodeBookFieldInput = {
  connect?: InputMaybe<DatasetCodeBookConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetCodeBookConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetCodeBookCreateFieldInput>;
};

export type DatasetCodeBookNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetCodeBookNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetCodeBookNodeAggregationWhereInput>>;
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

export type DatasetCodeBookRelationship = HasCodebook & {
  __typename?: 'DatasetCodeBookRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type DatasetCodeBookUpdateConnectionInput = {
  edge?: InputMaybe<HasCodebookUpdateInput>;
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type DatasetCodeBookUpdateFieldInput = {
  connect?: InputMaybe<DatasetCodeBookConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetCodeBookConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetCodeBookCreateFieldInput>;
  delete?: InputMaybe<DatasetCodeBookDeleteFieldInput>;
  disconnect?: InputMaybe<DatasetCodeBookDisconnectFieldInput>;
  update?: InputMaybe<DatasetCodeBookUpdateConnectionInput>;
  where?: InputMaybe<DatasetCodeBookConnectionWhere>;
};

export type DatasetConnectInput = {
  codeBook?: InputMaybe<DatasetCodeBookConnectFieldInput>;
  files?: InputMaybe<Array<DatasetFilesConnectFieldInput>>;
  fromStudy?: InputMaybe<DatasetFromStudyConnectFieldInput>;
  funnelTasks?: InputMaybe<Array<DatasetFunnelTasksConnectFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectFieldInput>>;
  minioBucket?: InputMaybe<DatasetMinioBucketConnectFieldInput>;
  rawdataFile?: InputMaybe<DatasetRawdataFileConnectFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteConnectFieldInput>;
};

export type DatasetConnectOrCreateInput = {
  codeBook?: InputMaybe<DatasetCodeBookConnectOrCreateFieldInput>;
  files?: InputMaybe<Array<DatasetFilesConnectOrCreateFieldInput>>;
  fromStudy?: InputMaybe<DatasetFromStudyConnectOrCreateFieldInput>;
  generatedCuratedDatasets?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput>>;
  rawdataFile?: InputMaybe<DatasetRawdataFileConnectOrCreateFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteConnectOrCreateFieldInput>;
};

export type DatasetConnectOrCreateWhere = {
  node: DatasetUniqueWhere;
};

export type DatasetConnectWhere = {
  node: DatasetWhere;
};

export type DatasetCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  codeBook?: InputMaybe<DatasetCodeBookFieldInput>;
  description: Scalars['String'];
  files?: InputMaybe<DatasetFilesFieldInput>;
  fromStudy?: InputMaybe<DatasetFromStudyFieldInput>;
  funnelTasks?: InputMaybe<DatasetFunnelTasksFieldInput>;
  generatedCuratedDatasets?: InputMaybe<DatasetGeneratedCuratedDatasetsFieldInput>;
  minioBucket?: InputMaybe<DatasetMinioBucketFieldInput>;
  name: Scalars['String'];
  rawdataFile?: InputMaybe<DatasetRawdataFileFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteFieldInput>;
};

export type DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection = {
  __typename?: 'DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection>;
};

export type DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection = {
  __typename?: 'DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DatasetDeleteInput = {
  codeBook?: InputMaybe<DatasetCodeBookDeleteFieldInput>;
  files?: InputMaybe<Array<DatasetFilesDeleteFieldInput>>;
  fromStudy?: InputMaybe<DatasetFromStudyDeleteFieldInput>;
  funnelTasks?: InputMaybe<Array<DatasetFunnelTasksDeleteFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsDeleteFieldInput>>;
  minioBucket?: InputMaybe<DatasetMinioBucketDeleteFieldInput>;
  rawdataFile?: InputMaybe<DatasetRawdataFileDeleteFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteDeleteFieldInput>;
};

export type DatasetDisconnectInput = {
  codeBook?: InputMaybe<DatasetCodeBookDisconnectFieldInput>;
  files?: InputMaybe<Array<DatasetFilesDisconnectFieldInput>>;
  fromStudy?: InputMaybe<DatasetFromStudyDisconnectFieldInput>;
  funnelTasks?: InputMaybe<Array<DatasetFunnelTasksDisconnectFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsDisconnectFieldInput>>;
  minioBucket?: InputMaybe<DatasetMinioBucketDisconnectFieldInput>;
  rawdataFile?: InputMaybe<DatasetRawdataFileDisconnectFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteDisconnectFieldInput>;
};

export type DatasetEdge = {
  __typename?: 'DatasetEdge';
  cursor: Scalars['String'];
  node: Dataset;
};

export type DatasetFilesAggregateInput = {
  AND?: InputMaybe<Array<DatasetFilesAggregateInput>>;
  OR?: InputMaybe<Array<DatasetFilesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetFilesNodeAggregationWhereInput>;
};

export type DatasetFilesConnectFieldInput = {
  connect?: InputMaybe<Array<MinioUploadConnectInput>>;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type DatasetFilesConnectOrCreateFieldInput = {
  onCreate: DatasetFilesConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type DatasetFilesConnectOrCreateFieldInputOnCreate = {
  node: MinioUploadOnCreateInput;
};

export type DatasetFilesConnection = {
  __typename?: 'DatasetFilesConnection';
  edges: Array<DatasetFilesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetFilesConnectionSort = {
  node?: InputMaybe<MinioUploadSort>;
};

export type DatasetFilesConnectionWhere = {
  AND?: InputMaybe<Array<DatasetFilesConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetFilesConnectionWhere>>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type DatasetFilesCreateFieldInput = {
  node: MinioUploadCreateInput;
};

export type DatasetFilesDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<DatasetFilesConnectionWhere>;
};

export type DatasetFilesDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<DatasetFilesConnectionWhere>;
};

export type DatasetFilesFieldInput = {
  connect?: InputMaybe<Array<DatasetFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DatasetFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DatasetFilesCreateFieldInput>>;
};

export type DatasetFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetFilesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetFilesNodeAggregationWhereInput>>;
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

export type DatasetFilesRelationship = {
  __typename?: 'DatasetFilesRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type DatasetFilesUpdateConnectionInput = {
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type DatasetFilesUpdateFieldInput = {
  connect?: InputMaybe<Array<DatasetFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DatasetFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DatasetFilesCreateFieldInput>>;
  delete?: InputMaybe<Array<DatasetFilesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DatasetFilesDisconnectFieldInput>>;
  update?: InputMaybe<DatasetFilesUpdateConnectionInput>;
  where?: InputMaybe<DatasetFilesConnectionWhere>;
};

export type DatasetFromStudyAggregateInput = {
  AND?: InputMaybe<Array<DatasetFromStudyAggregateInput>>;
  OR?: InputMaybe<Array<DatasetFromStudyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetFromStudyNodeAggregationWhereInput>;
};

export type DatasetFromStudyConnectFieldInput = {
  connect?: InputMaybe<StudyConnectInput>;
  where?: InputMaybe<StudyConnectWhere>;
};

export type DatasetFromStudyConnectOrCreateFieldInput = {
  onCreate: DatasetFromStudyConnectOrCreateFieldInputOnCreate;
  where: StudyConnectOrCreateWhere;
};

export type DatasetFromStudyConnectOrCreateFieldInputOnCreate = {
  node: StudyOnCreateInput;
};

export type DatasetFromStudyConnection = {
  __typename?: 'DatasetFromStudyConnection';
  edges: Array<DatasetFromStudyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetFromStudyConnectionSort = {
  node?: InputMaybe<StudySort>;
};

export type DatasetFromStudyConnectionWhere = {
  AND?: InputMaybe<Array<DatasetFromStudyConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetFromStudyConnectionWhere>>;
  node?: InputMaybe<StudyWhere>;
  node_NOT?: InputMaybe<StudyWhere>;
};

export type DatasetFromStudyCreateFieldInput = {
  node: StudyCreateInput;
};

export type DatasetFromStudyDeleteFieldInput = {
  delete?: InputMaybe<StudyDeleteInput>;
  where?: InputMaybe<DatasetFromStudyConnectionWhere>;
};

export type DatasetFromStudyDisconnectFieldInput = {
  disconnect?: InputMaybe<StudyDisconnectInput>;
  where?: InputMaybe<DatasetFromStudyConnectionWhere>;
};

export type DatasetFromStudyFieldInput = {
  connect?: InputMaybe<DatasetFromStudyConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetFromStudyConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetFromStudyCreateFieldInput>;
};

export type DatasetFromStudyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetFromStudyNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetFromStudyNodeAggregationWhereInput>>;
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

export type DatasetFromStudyRelationship = {
  __typename?: 'DatasetFromStudyRelationship';
  cursor: Scalars['String'];
  node: Project;
};

export type DatasetFromStudyUpdateConnectionInput = {
  node?: InputMaybe<StudyUpdateInput>;
};

export type DatasetFromStudyUpdateFieldInput = {
  connect?: InputMaybe<DatasetFromStudyConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetFromStudyConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetFromStudyCreateFieldInput>;
  delete?: InputMaybe<DatasetFromStudyDeleteFieldInput>;
  disconnect?: InputMaybe<DatasetFromStudyDisconnectFieldInput>;
  update?: InputMaybe<DatasetFromStudyUpdateConnectionInput>;
  where?: InputMaybe<DatasetFromStudyConnectionWhere>;
};

export type DatasetFunnelTasksAggregateInput = {
  AND?: InputMaybe<Array<DatasetFunnelTasksAggregateInput>>;
  OR?: InputMaybe<Array<DatasetFunnelTasksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetFunnelTasksNodeAggregationWhereInput>;
};

export type DatasetFunnelTasksConnectFieldInput = {
  connect?: InputMaybe<Array<TaskConnectInput>>;
  where?: InputMaybe<TaskConnectWhere>;
};

export type DatasetFunnelTasksConnection = {
  __typename?: 'DatasetFunnelTasksConnection';
  edges: Array<DatasetFunnelTasksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetFunnelTasksConnectionSort = {
  node?: InputMaybe<TaskSort>;
};

export type DatasetFunnelTasksConnectionWhere = {
  AND?: InputMaybe<Array<DatasetFunnelTasksConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetFunnelTasksConnectionWhere>>;
  node?: InputMaybe<TaskWhere>;
  node_NOT?: InputMaybe<TaskWhere>;
};

export type DatasetFunnelTasksCreateFieldInput = {
  node: TaskCreateInput;
};

export type DatasetFunnelTasksDeleteFieldInput = {
  delete?: InputMaybe<TaskDeleteInput>;
  where?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
};

export type DatasetFunnelTasksDisconnectFieldInput = {
  disconnect?: InputMaybe<TaskDisconnectInput>;
  where?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
};

export type DatasetFunnelTasksFieldInput = {
  connect?: InputMaybe<Array<DatasetFunnelTasksConnectFieldInput>>;
  create?: InputMaybe<Array<DatasetFunnelTasksCreateFieldInput>>;
};

export type DatasetFunnelTasksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetFunnelTasksNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetFunnelTasksNodeAggregationWhereInput>>;
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

export type DatasetFunnelTasksRelationship = {
  __typename?: 'DatasetFunnelTasksRelationship';
  cursor: Scalars['String'];
  node: Task;
};

export type DatasetFunnelTasksUpdateConnectionInput = {
  node?: InputMaybe<TaskUpdateInput>;
};

export type DatasetFunnelTasksUpdateFieldInput = {
  connect?: InputMaybe<Array<DatasetFunnelTasksConnectFieldInput>>;
  create?: InputMaybe<Array<DatasetFunnelTasksCreateFieldInput>>;
  delete?: InputMaybe<Array<DatasetFunnelTasksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DatasetFunnelTasksDisconnectFieldInput>>;
  update?: InputMaybe<DatasetFunnelTasksUpdateConnectionInput>;
  where?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
};

export type DatasetGeneratedCuratedDatasetsAggregateInput = {
  AND?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsAggregateInput>>;
  OR?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput>;
};

export type DatasetGeneratedCuratedDatasetsConnectFieldInput = {
  connect?: InputMaybe<Array<CuratedDatasetConnectInput>>;
  where?: InputMaybe<CuratedDatasetConnectWhere>;
};

export type DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput = {
  onCreate: DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate;
  where: CuratedDatasetConnectOrCreateWhere;
};

export type DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate = {
  node: CuratedDatasetOnCreateInput;
};

export type DatasetGeneratedCuratedDatasetsConnection = {
  __typename?: 'DatasetGeneratedCuratedDatasetsConnection';
  edges: Array<DatasetGeneratedCuratedDatasetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetGeneratedCuratedDatasetsConnectionSort = {
  node?: InputMaybe<CuratedDatasetSort>;
};

export type DatasetGeneratedCuratedDatasetsConnectionWhere = {
  AND?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectionWhere>>;
  node?: InputMaybe<CuratedDatasetWhere>;
  node_NOT?: InputMaybe<CuratedDatasetWhere>;
};

export type DatasetGeneratedCuratedDatasetsCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type DatasetGeneratedCuratedDatasetsDeleteFieldInput = {
  delete?: InputMaybe<CuratedDatasetDeleteInput>;
  where?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
};

export type DatasetGeneratedCuratedDatasetsDisconnectFieldInput = {
  disconnect?: InputMaybe<CuratedDatasetDisconnectInput>;
  where?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
};

export type DatasetGeneratedCuratedDatasetsFieldInput = {
  connect?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsCreateFieldInput>>;
};

export type DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput>>;
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

export type DatasetGeneratedCuratedDatasetsRelationship = {
  __typename?: 'DatasetGeneratedCuratedDatasetsRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type DatasetGeneratedCuratedDatasetsUpdateConnectionInput = {
  node?: InputMaybe<CuratedDatasetUpdateInput>;
};

export type DatasetGeneratedCuratedDatasetsUpdateFieldInput = {
  connect?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsCreateFieldInput>>;
  delete?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsDisconnectFieldInput>>;
  update?: InputMaybe<DatasetGeneratedCuratedDatasetsUpdateConnectionInput>;
  where?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
};

export type DatasetGeographyCityStudySiteAggregationSelection = {
  __typename?: 'DatasetGeographyCityStudySiteAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetGeographyCityStudySiteNodeAggregateSelection>;
};

export type DatasetGeographyCityStudySiteNodeAggregateSelection = {
  __typename?: 'DatasetGeographyCityStudySiteNodeAggregateSelection';
  city: StringAggregateSelectionNonNullable;
  cityID: IdAggregateSelectionNonNullable;
  country: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNullable;
  latitude: FloatAggregateSelectionNonNullable;
  longitude: FloatAggregateSelectionNonNullable;
};

export type DatasetMinioBucketAggregateInput = {
  AND?: InputMaybe<Array<DatasetMinioBucketAggregateInput>>;
  OR?: InputMaybe<Array<DatasetMinioBucketAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetMinioBucketNodeAggregationWhereInput>;
};

export type DatasetMinioBucketConnectFieldInput = {
  connect?: InputMaybe<MinioBucketConnectInput>;
  where?: InputMaybe<MinioBucketConnectWhere>;
};

export type DatasetMinioBucketConnection = {
  __typename?: 'DatasetMinioBucketConnection';
  edges: Array<DatasetMinioBucketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetMinioBucketConnectionSort = {
  node?: InputMaybe<MinioBucketSort>;
};

export type DatasetMinioBucketConnectionWhere = {
  AND?: InputMaybe<Array<DatasetMinioBucketConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetMinioBucketConnectionWhere>>;
  node?: InputMaybe<MinioBucketWhere>;
  node_NOT?: InputMaybe<MinioBucketWhere>;
};

export type DatasetMinioBucketCreateFieldInput = {
  node: MinioBucketCreateInput;
};

export type DatasetMinioBucketDeleteFieldInput = {
  delete?: InputMaybe<MinioBucketDeleteInput>;
  where?: InputMaybe<DatasetMinioBucketConnectionWhere>;
};

export type DatasetMinioBucketDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioBucketDisconnectInput>;
  where?: InputMaybe<DatasetMinioBucketConnectionWhere>;
};

export type DatasetMinioBucketFieldInput = {
  connect?: InputMaybe<DatasetMinioBucketConnectFieldInput>;
  create?: InputMaybe<DatasetMinioBucketCreateFieldInput>;
};

export type DatasetMinioBucketMinioBucketAggregationSelection = {
  __typename?: 'DatasetMinioBucketMinioBucketAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetMinioBucketMinioBucketNodeAggregateSelection>;
};

export type DatasetMinioBucketMinioBucketNodeAggregateSelection = {
  __typename?: 'DatasetMinioBucketMinioBucketNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
};

export type DatasetMinioBucketNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetMinioBucketNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetMinioBucketNodeAggregationWhereInput>>;
  bucketName_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type DatasetMinioBucketRelationship = {
  __typename?: 'DatasetMinioBucketRelationship';
  cursor: Scalars['String'];
  node: MinioBucket;
};

export type DatasetMinioBucketUpdateConnectionInput = {
  node?: InputMaybe<MinioBucketUpdateInput>;
};

export type DatasetMinioBucketUpdateFieldInput = {
  connect?: InputMaybe<DatasetMinioBucketConnectFieldInput>;
  create?: InputMaybe<DatasetMinioBucketCreateFieldInput>;
  delete?: InputMaybe<DatasetMinioBucketDeleteFieldInput>;
  disconnect?: InputMaybe<DatasetMinioBucketDisconnectFieldInput>;
  update?: InputMaybe<DatasetMinioBucketUpdateConnectionInput>;
  where?: InputMaybe<DatasetMinioBucketConnectionWhere>;
};

export type DatasetMinioUploadCodeBookAggregationSelection = {
  __typename?: 'DatasetMinioUploadCodeBookAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetMinioUploadCodeBookNodeAggregateSelection>;
};

export type DatasetMinioUploadCodeBookNodeAggregateSelection = {
  __typename?: 'DatasetMinioUploadCodeBookNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type DatasetMinioUploadFilesAggregationSelection = {
  __typename?: 'DatasetMinioUploadFilesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetMinioUploadFilesNodeAggregateSelection>;
};

export type DatasetMinioUploadFilesNodeAggregateSelection = {
  __typename?: 'DatasetMinioUploadFilesNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type DatasetMinioUploadRawdataFileAggregationSelection = {
  __typename?: 'DatasetMinioUploadRawdataFileAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetMinioUploadRawdataFileNodeAggregateSelection>;
};

export type DatasetMinioUploadRawdataFileNodeAggregateSelection = {
  __typename?: 'DatasetMinioUploadRawdataFileNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type DatasetOnCreateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type DatasetOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DatasetSort objects to sort Datasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DatasetSort>>;
};

export type DatasetRawdataFileAggregateInput = {
  AND?: InputMaybe<Array<DatasetRawdataFileAggregateInput>>;
  OR?: InputMaybe<Array<DatasetRawdataFileAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetRawdataFileNodeAggregationWhereInput>;
};

export type DatasetRawdataFileConnectFieldInput = {
  connect?: InputMaybe<MinioUploadConnectInput>;
  edge: HasRawdatafileCreateInput;
  where?: InputMaybe<MinioUploadConnectWhere>;
};

export type DatasetRawdataFileConnectOrCreateFieldInput = {
  onCreate: DatasetRawdataFileConnectOrCreateFieldInputOnCreate;
  where: MinioUploadConnectOrCreateWhere;
};

export type DatasetRawdataFileConnectOrCreateFieldInputOnCreate = {
  edge: HasRawdatafileCreateInput;
  node: MinioUploadOnCreateInput;
};

export type DatasetRawdataFileConnection = {
  __typename?: 'DatasetRawdataFileConnection';
  edges: Array<DatasetRawdataFileRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetRawdataFileConnectionSort = {
  edge?: InputMaybe<HasRawdatafileSort>;
  node?: InputMaybe<MinioUploadSort>;
};

export type DatasetRawdataFileConnectionWhere = {
  AND?: InputMaybe<Array<DatasetRawdataFileConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetRawdataFileConnectionWhere>>;
  edge?: InputMaybe<HasRawdatafileWhere>;
  edge_NOT?: InputMaybe<HasRawdatafileWhere>;
  node?: InputMaybe<MinioUploadWhere>;
  node_NOT?: InputMaybe<MinioUploadWhere>;
};

export type DatasetRawdataFileCreateFieldInput = {
  edge: HasRawdatafileCreateInput;
  node: MinioUploadCreateInput;
};

export type DatasetRawdataFileDeleteFieldInput = {
  delete?: InputMaybe<MinioUploadDeleteInput>;
  where?: InputMaybe<DatasetRawdataFileConnectionWhere>;
};

export type DatasetRawdataFileDisconnectFieldInput = {
  disconnect?: InputMaybe<MinioUploadDisconnectInput>;
  where?: InputMaybe<DatasetRawdataFileConnectionWhere>;
};

export type DatasetRawdataFileFieldInput = {
  connect?: InputMaybe<DatasetRawdataFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetRawdataFileConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetRawdataFileCreateFieldInput>;
};

export type DatasetRawdataFileNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetRawdataFileNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetRawdataFileNodeAggregationWhereInput>>;
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

export type DatasetRawdataFileRelationship = HasRawdatafile & {
  __typename?: 'DatasetRawdataFileRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type DatasetRawdataFileUpdateConnectionInput = {
  edge?: InputMaybe<HasRawdatafileUpdateInput>;
  node?: InputMaybe<MinioUploadUpdateInput>;
};

export type DatasetRawdataFileUpdateFieldInput = {
  connect?: InputMaybe<DatasetRawdataFileConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetRawdataFileConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetRawdataFileCreateFieldInput>;
  delete?: InputMaybe<DatasetRawdataFileDeleteFieldInput>;
  disconnect?: InputMaybe<DatasetRawdataFileDisconnectFieldInput>;
  update?: InputMaybe<DatasetRawdataFileUpdateConnectionInput>;
  where?: InputMaybe<DatasetRawdataFileConnectionWhere>;
};

export type DatasetRelationInput = {
  codeBook?: InputMaybe<DatasetCodeBookCreateFieldInput>;
  files?: InputMaybe<Array<DatasetFilesCreateFieldInput>>;
  fromStudy?: InputMaybe<DatasetFromStudyCreateFieldInput>;
  funnelTasks?: InputMaybe<Array<DatasetFunnelTasksCreateFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsCreateFieldInput>>;
  minioBucket?: InputMaybe<DatasetMinioBucketCreateFieldInput>;
  rawdataFile?: InputMaybe<DatasetRawdataFileCreateFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteCreateFieldInput>;
};

/** Fields to sort Datasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one DatasetSort object. */
export type DatasetSort = {
  createdAt?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  DatasetID?: InputMaybe<SortDirection>;
};

export type DatasetStudyFromStudyAggregationSelection = {
  __typename?: 'DatasetStudyFromStudyAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetStudyFromStudyNodeAggregateSelection>;
};

export type DatasetStudyFromStudyNodeAggregateSelection = {
  __typename?: 'DatasetStudyFromStudyNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  fullName: StringAggregateSelectionNonNullable;
  shortName: StringAggregateSelectionNonNullable;
  studyID: IdAggregateSelectionNonNullable;
};

export type DatasetStudySiteAggregateInput = {
  AND?: InputMaybe<Array<DatasetStudySiteAggregateInput>>;
  OR?: InputMaybe<Array<DatasetStudySiteAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DatasetStudySiteNodeAggregationWhereInput>;
};

export type DatasetStudySiteConnectFieldInput = {
  where?: InputMaybe<GeographyCityConnectWhere>;
};

export type DatasetStudySiteConnectOrCreateFieldInput = {
  onCreate: DatasetStudySiteConnectOrCreateFieldInputOnCreate;
  where: GeographyCityConnectOrCreateWhere;
};

export type DatasetStudySiteConnectOrCreateFieldInputOnCreate = {
  node: GeographyCityOnCreateInput;
};

export type DatasetStudySiteConnection = {
  __typename?: 'DatasetStudySiteConnection';
  edges: Array<DatasetStudySiteRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DatasetStudySiteConnectionSort = {
  node?: InputMaybe<GeographyCitySort>;
};

export type DatasetStudySiteConnectionWhere = {
  AND?: InputMaybe<Array<DatasetStudySiteConnectionWhere>>;
  OR?: InputMaybe<Array<DatasetStudySiteConnectionWhere>>;
  node?: InputMaybe<GeographyCityWhere>;
  node_NOT?: InputMaybe<GeographyCityWhere>;
};

export type DatasetStudySiteCreateFieldInput = {
  node: GeographyCityCreateInput;
};

export type DatasetStudySiteDeleteFieldInput = {
  where?: InputMaybe<DatasetStudySiteConnectionWhere>;
};

export type DatasetStudySiteDisconnectFieldInput = {
  where?: InputMaybe<DatasetStudySiteConnectionWhere>;
};

export type DatasetStudySiteFieldInput = {
  connect?: InputMaybe<DatasetStudySiteConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetStudySiteConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetStudySiteCreateFieldInput>;
};

export type DatasetStudySiteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatasetStudySiteNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DatasetStudySiteNodeAggregationWhereInput>>;
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

export type DatasetStudySiteRelationship = {
  __typename?: 'DatasetStudySiteRelationship';
  cursor: Scalars['String'];
  node: GeographyCity;
};

export type DatasetStudySiteUpdateConnectionInput = {
  node?: InputMaybe<GeographyCityUpdateInput>;
};

export type DatasetStudySiteUpdateFieldInput = {
  connect?: InputMaybe<DatasetStudySiteConnectFieldInput>;
  connectOrCreate?: InputMaybe<DatasetStudySiteConnectOrCreateFieldInput>;
  create?: InputMaybe<DatasetStudySiteCreateFieldInput>;
  delete?: InputMaybe<DatasetStudySiteDeleteFieldInput>;
  disconnect?: InputMaybe<DatasetStudySiteDisconnectFieldInput>;
  update?: InputMaybe<DatasetStudySiteUpdateConnectionInput>;
  where?: InputMaybe<DatasetStudySiteConnectionWhere>;
};

export type DatasetTaskFunnelTasksAggregationSelection = {
  __typename?: 'DatasetTaskFunnelTasksAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DatasetTaskFunnelTasksNodeAggregateSelection>;
};

export type DatasetTaskFunnelTasksNodeAggregateSelection = {
  __typename?: 'DatasetTaskFunnelTasksNodeAggregateSelection';
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  taskID: IdAggregateSelectionNullable;
};

export type DatasetUniqueWhere = {
  DatasetID?: InputMaybe<Scalars['ID']>;
};

export type DatasetUpdateInput = {
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP?: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP?: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  codeBook?: InputMaybe<DatasetCodeBookUpdateFieldInput>;
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<DatasetFilesUpdateFieldInput>>;
  fromStudy?: InputMaybe<DatasetFromStudyUpdateFieldInput>;
  funnelTasks?: InputMaybe<Array<DatasetFunnelTasksUpdateFieldInput>>;
  generatedCuratedDatasets?: InputMaybe<Array<DatasetGeneratedCuratedDatasetsUpdateFieldInput>>;
  minioBucket?: InputMaybe<DatasetMinioBucketUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  rawdataFile?: InputMaybe<DatasetRawdataFileUpdateFieldInput>;
  studySite?: InputMaybe<DatasetStudySiteUpdateFieldInput>;
};

export type DatasetWhere = {
  AND?: InputMaybe<Array<DatasetWhere>>;
  OR?: InputMaybe<Array<DatasetWhere>>;
  allowedSites?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedSites_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES?: InputMaybe<Scalars['String']>;
  allowedStudies_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
  codeBook?: InputMaybe<MinioUploadWhere>;
  codeBookAggregate?: InputMaybe<DatasetCodeBookAggregateInput>;
  codeBookConnection?: InputMaybe<DatasetCodeBookConnectionWhere>;
  codeBookConnection_NOT?: InputMaybe<DatasetCodeBookConnectionWhere>;
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
  filesAggregate?: InputMaybe<DatasetFilesAggregateInput>;
  filesConnection?: InputMaybe<DatasetFilesConnectionWhere>;
  filesConnection_ALL?: InputMaybe<DatasetFilesConnectionWhere>;
  filesConnection_NONE?: InputMaybe<DatasetFilesConnectionWhere>;
  filesConnection_NOT?: InputMaybe<DatasetFilesConnectionWhere>;
  filesConnection_SINGLE?: InputMaybe<DatasetFilesConnectionWhere>;
  filesConnection_SOME?: InputMaybe<DatasetFilesConnectionWhere>;
  /** Return Datasets where all of the related MinioUploads match this filter */
  files_ALL?: InputMaybe<MinioUploadWhere>;
  /** Return Datasets where none of the related MinioUploads match this filter */
  files_NONE?: InputMaybe<MinioUploadWhere>;
  files_NOT?: InputMaybe<MinioUploadWhere>;
  /** Return Datasets where one of the related MinioUploads match this filter */
  files_SINGLE?: InputMaybe<MinioUploadWhere>;
  /** Return Datasets where some of the related MinioUploads match this filter */
  files_SOME?: InputMaybe<MinioUploadWhere>;
  fromStudy?: InputMaybe<StudyWhere>;
  fromStudyAggregate?: InputMaybe<DatasetFromStudyAggregateInput>;
  fromStudyConnection?: InputMaybe<DatasetFromStudyConnectionWhere>;
  fromStudyConnection_NOT?: InputMaybe<DatasetFromStudyConnectionWhere>;
  fromStudy_NOT?: InputMaybe<StudyWhere>;
  funnelTasks?: InputMaybe<TaskWhere>;
  funnelTasksAggregate?: InputMaybe<DatasetFunnelTasksAggregateInput>;
  funnelTasksConnection?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_ALL?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_NONE?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_NOT?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_SINGLE?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
  funnelTasksConnection_SOME?: InputMaybe<DatasetFunnelTasksConnectionWhere>;
  /** Return Datasets where all of the related Tasks match this filter */
  funnelTasks_ALL?: InputMaybe<TaskWhere>;
  /** Return Datasets where none of the related Tasks match this filter */
  funnelTasks_NONE?: InputMaybe<TaskWhere>;
  funnelTasks_NOT?: InputMaybe<TaskWhere>;
  /** Return Datasets where one of the related Tasks match this filter */
  funnelTasks_SINGLE?: InputMaybe<TaskWhere>;
  /** Return Datasets where some of the related Tasks match this filter */
  funnelTasks_SOME?: InputMaybe<TaskWhere>;
  generatedCuratedDatasets?: InputMaybe<CuratedDatasetWhere>;
  generatedCuratedDatasetsAggregate?: InputMaybe<DatasetGeneratedCuratedDatasetsAggregateInput>;
  generatedCuratedDatasetsConnection?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_ALL?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_NONE?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_NOT?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_SINGLE?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
  generatedCuratedDatasetsConnection_SOME?: InputMaybe<DatasetGeneratedCuratedDatasetsConnectionWhere>;
  /** Return Datasets where all of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_ALL?: InputMaybe<CuratedDatasetWhere>;
  /** Return Datasets where none of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_NONE?: InputMaybe<CuratedDatasetWhere>;
  generatedCuratedDatasets_NOT?: InputMaybe<CuratedDatasetWhere>;
  /** Return Datasets where one of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_SINGLE?: InputMaybe<CuratedDatasetWhere>;
  /** Return Datasets where some of the related CuratedDatasets match this filter */
  generatedCuratedDatasets_SOME?: InputMaybe<CuratedDatasetWhere>;
  minioBucket?: InputMaybe<MinioBucketWhere>;
  minioBucketAggregate?: InputMaybe<DatasetMinioBucketAggregateInput>;
  minioBucketConnection?: InputMaybe<DatasetMinioBucketConnectionWhere>;
  minioBucketConnection_NOT?: InputMaybe<DatasetMinioBucketConnectionWhere>;
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
  DatasetID?: InputMaybe<Scalars['ID']>;
  DatasetID_CONTAINS?: InputMaybe<Scalars['ID']>;
  DatasetID_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  DatasetID_IN?: InputMaybe<Array<Scalars['ID']>>;
  DatasetID_NOT?: InputMaybe<Scalars['ID']>;
  DatasetID_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  DatasetID_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  DatasetID_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  DatasetID_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  DatasetID_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  rawdataFile?: InputMaybe<MinioUploadWhere>;
  rawdataFileAggregate?: InputMaybe<DatasetRawdataFileAggregateInput>;
  rawdataFileConnection?: InputMaybe<DatasetRawdataFileConnectionWhere>;
  rawdataFileConnection_NOT?: InputMaybe<DatasetRawdataFileConnectionWhere>;
  rawdataFile_NOT?: InputMaybe<MinioUploadWhere>;
  studySite?: InputMaybe<GeographyCityWhere>;
  studySiteAggregate?: InputMaybe<DatasetStudySiteAggregateInput>;
  studySiteConnection?: InputMaybe<DatasetStudySiteConnectionWhere>;
  studySiteConnection_NOT?: InputMaybe<DatasetStudySiteConnectionWhere>;
  studySite_NOT?: InputMaybe<GeographyCityWhere>;
};

export type DatasetsConnection = {
  __typename?: 'DatasetsConnection';
  edges: Array<DatasetEdge>;
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

export type Project = {
  __typename?: 'Project';
  allowedSites?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies?: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  Datasets: Array<Dataset>;
  DatasetsAggregate?: Maybe<StudyDatasetDatasetsAggregationSelection>;
  DatasetsConnection: StudyDatasetsConnection;
  shortName: Scalars['String'];
  studyID: Scalars['ID'];
  studySites: Array<GeographyCity>;
  studySitesAggregate?: Maybe<StudyGeographyCityStudySitesAggregationSelection>;
  studySitesConnection: StudyStudySitesConnection;
};


export type StudyDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type StudyDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type StudyDatasetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<StudyDatasetsConnectionSort>>;
  where?: InputMaybe<StudyDatasetsConnectionWhere>;
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
  Datasets?: InputMaybe<Array<StudyDatasetsConnectFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
};

export type StudyConnectOrCreateInput = {
  Datasets?: InputMaybe<Array<StudyDatasetsConnectOrCreateFieldInput>>;
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
  Datasets?: InputMaybe<StudyDatasetsFieldInput>;
  shortName: Scalars['String'];
  studySites?: InputMaybe<StudyStudySitesFieldInput>;
};

export type StudyDeleteInput = {
  Datasets?: InputMaybe<Array<StudyDatasetsDeleteFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesDeleteFieldInput>>;
};

export type StudyDisconnectInput = {
  Datasets?: InputMaybe<Array<StudyDatasetsDisconnectFieldInput>>;
  studySites?: InputMaybe<Array<StudyStudySitesDisconnectFieldInput>>;
};

export type StudyEdge = {
  __typename?: 'StudyEdge';
  cursor: Scalars['String'];
  node: Project;
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

export type StudyDatasetDatasetsAggregationSelection = {
  __typename?: 'StudyDatasetDatasetsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<StudyDatasetDatasetsNodeAggregateSelection>;
};

export type StudyDatasetDatasetsNodeAggregateSelection = {
  __typename?: 'StudyDatasetDatasetsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type StudyDatasetsAggregateInput = {
  AND?: InputMaybe<Array<StudyDatasetsAggregateInput>>;
  OR?: InputMaybe<Array<StudyDatasetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<StudyDatasetsNodeAggregationWhereInput>;
};

export type StudyDatasetsConnectFieldInput = {
  connect?: InputMaybe<Array<DatasetConnectInput>>;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type StudyDatasetsConnectOrCreateFieldInput = {
  onCreate: StudyDatasetsConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type StudyDatasetsConnectOrCreateFieldInputOnCreate = {
  node: DatasetOnCreateInput;
};

export type StudyDatasetsConnection = {
  __typename?: 'StudyDatasetsConnection';
  edges: Array<StudyDatasetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type StudyDatasetsConnectionSort = {
  node?: InputMaybe<DatasetSort>;
};

export type StudyDatasetsConnectionWhere = {
  AND?: InputMaybe<Array<StudyDatasetsConnectionWhere>>;
  OR?: InputMaybe<Array<StudyDatasetsConnectionWhere>>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type StudyDatasetsCreateFieldInput = {
  node: DatasetCreateInput;
};

export type StudyDatasetsDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<StudyDatasetsConnectionWhere>;
};

export type StudyDatasetsDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<StudyDatasetsConnectionWhere>;
};

export type StudyDatasetsFieldInput = {
  connect?: InputMaybe<Array<StudyDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StudyDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StudyDatasetsCreateFieldInput>>;
};

export type StudyDatasetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StudyDatasetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<StudyDatasetsNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type StudyDatasetsRelationship = {
  __typename?: 'StudyDatasetsRelationship';
  cursor: Scalars['String'];
  node: Dataset;
};

export type StudyDatasetsUpdateConnectionInput = {
  node?: InputMaybe<DatasetUpdateInput>;
};

export type StudyDatasetsUpdateFieldInput = {
  connect?: InputMaybe<Array<StudyDatasetsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StudyDatasetsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StudyDatasetsCreateFieldInput>>;
  delete?: InputMaybe<Array<StudyDatasetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StudyDatasetsDisconnectFieldInput>>;
  update?: InputMaybe<StudyDatasetsUpdateConnectionInput>;
  where?: InputMaybe<StudyDatasetsConnectionWhere>;
};

export type StudyRelationInput = {
  Datasets?: InputMaybe<Array<StudyDatasetsCreateFieldInput>>;
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
  Datasets?: InputMaybe<Array<StudyDatasetsUpdateFieldInput>>;
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
  Datasets?: InputMaybe<DatasetWhere>;
  DatasetsAggregate?: InputMaybe<StudyDatasetsAggregateInput>;
  DatasetsConnection?: InputMaybe<StudyDatasetsConnectionWhere>;
  DatasetsConnection_ALL?: InputMaybe<StudyDatasetsConnectionWhere>;
  DatasetsConnection_NONE?: InputMaybe<StudyDatasetsConnectionWhere>;
  DatasetsConnection_NOT?: InputMaybe<StudyDatasetsConnectionWhere>;
  DatasetsConnection_SINGLE?: InputMaybe<StudyDatasetsConnectionWhere>;
  DatasetsConnection_SOME?: InputMaybe<StudyDatasetsConnectionWhere>;
  /** Return Studies where all of the related Datasets match this filter */
  Datasets_ALL?: InputMaybe<DatasetWhere>;
  /** Return Studies where none of the related Datasets match this filter */
  Datasets_NONE?: InputMaybe<DatasetWhere>;
  Datasets_NOT?: InputMaybe<DatasetWhere>;
  /** Return Studies where one of the related Datasets match this filter */
  Datasets_SINGLE?: InputMaybe<DatasetWhere>;
  /** Return Studies where some of the related Datasets match this filter */
  Datasets_SOME?: InputMaybe<DatasetWhere>;
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
  fromDataset?: Maybe<Dataset>;
  fromDatasetAggregate?: Maybe<TaskDatasetFromDatasetAggregationSelection>;
  fromDatasetConnection: TaskFromDatasetConnection;
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


export type TaskFromDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<DatasetOptions>;
  where?: InputMaybe<DatasetWhere>;
};


export type TaskFromDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<DatasetWhere>;
};


export type TaskFromDatasetConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TaskFromDatasetConnectionSort>>;
  where?: InputMaybe<TaskFromDatasetConnectionWhere>;
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
  fromDataset?: InputMaybe<TaskFromDatasetConnectFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetConnectFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportConnectFieldInput>;
};

export type TaskConnectOrCreateInput = {
  fromDataset?: InputMaybe<TaskFromDatasetConnectOrCreateFieldInput>;
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
  fromDataset?: InputMaybe<TaskFromDatasetFieldInput>;
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
  fromDataset?: InputMaybe<TaskFromDatasetDeleteFieldInput>;
  generatedCuratedDataset?: InputMaybe<TaskGeneratedCuratedDatasetDeleteFieldInput>;
  generatedExport?: InputMaybe<TaskGeneratedExportDeleteFieldInput>;
};

export type TaskDisconnectInput = {
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetDisconnectFieldInput>;
  fromDataset?: InputMaybe<TaskFromDatasetDisconnectFieldInput>;
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

export type TaskFromDatasetAggregateInput = {
  AND?: InputMaybe<Array<TaskFromDatasetAggregateInput>>;
  OR?: InputMaybe<Array<TaskFromDatasetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TaskFromDatasetNodeAggregationWhereInput>;
};

export type TaskFromDatasetConnectFieldInput = {
  connect?: InputMaybe<DatasetConnectInput>;
  where?: InputMaybe<DatasetConnectWhere>;
};

export type TaskFromDatasetConnectOrCreateFieldInput = {
  onCreate: TaskFromDatasetConnectOrCreateFieldInputOnCreate;
  where: DatasetConnectOrCreateWhere;
};

export type TaskFromDatasetConnectOrCreateFieldInputOnCreate = {
  node: DatasetOnCreateInput;
};

export type TaskFromDatasetConnection = {
  __typename?: 'TaskFromDatasetConnection';
  edges: Array<TaskFromDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaskFromDatasetConnectionSort = {
  node?: InputMaybe<DatasetSort>;
};

export type TaskFromDatasetConnectionWhere = {
  AND?: InputMaybe<Array<TaskFromDatasetConnectionWhere>>;
  OR?: InputMaybe<Array<TaskFromDatasetConnectionWhere>>;
  node?: InputMaybe<DatasetWhere>;
  node_NOT?: InputMaybe<DatasetWhere>;
};

export type TaskFromDatasetCreateFieldInput = {
  node: DatasetCreateInput;
};

export type TaskFromDatasetDeleteFieldInput = {
  delete?: InputMaybe<DatasetDeleteInput>;
  where?: InputMaybe<TaskFromDatasetConnectionWhere>;
};

export type TaskFromDatasetDisconnectFieldInput = {
  disconnect?: InputMaybe<DatasetDisconnectInput>;
  where?: InputMaybe<TaskFromDatasetConnectionWhere>;
};

export type TaskFromDatasetFieldInput = {
  connect?: InputMaybe<TaskFromDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskFromDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskFromDatasetCreateFieldInput>;
};

export type TaskFromDatasetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TaskFromDatasetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TaskFromDatasetNodeAggregationWhereInput>>;
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
  DatasetID_EQUAL?: InputMaybe<Scalars['ID']>;
};

export type TaskFromDatasetRelationship = {
  __typename?: 'TaskFromDatasetRelationship';
  cursor: Scalars['String'];
  node: Dataset;
};

export type TaskFromDatasetUpdateConnectionInput = {
  node?: InputMaybe<DatasetUpdateInput>;
};

export type TaskFromDatasetUpdateFieldInput = {
  connect?: InputMaybe<TaskFromDatasetConnectFieldInput>;
  connectOrCreate?: InputMaybe<TaskFromDatasetConnectOrCreateFieldInput>;
  create?: InputMaybe<TaskFromDatasetCreateFieldInput>;
  delete?: InputMaybe<TaskFromDatasetDeleteFieldInput>;
  disconnect?: InputMaybe<TaskFromDatasetDisconnectFieldInput>;
  update?: InputMaybe<TaskFromDatasetUpdateConnectionInput>;
  where?: InputMaybe<TaskFromDatasetConnectionWhere>;
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

export type TaskDatasetFromDatasetAggregationSelection = {
  __typename?: 'TaskDatasetFromDatasetAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TaskDatasetFromDatasetNodeAggregateSelection>;
};

export type TaskDatasetFromDatasetNodeAggregateSelection = {
  __typename?: 'TaskDatasetFromDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  DatasetID: IdAggregateSelectionNonNullable;
};

export type TaskRelationInput = {
  fromCuratedDataset?: InputMaybe<TaskFromCuratedDatasetCreateFieldInput>;
  fromDataset?: InputMaybe<TaskFromDatasetCreateFieldInput>;
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
  fromDataset?: InputMaybe<TaskFromDatasetUpdateFieldInput>;
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
  fromDataset?: InputMaybe<DatasetWhere>;
  fromDatasetAggregate?: InputMaybe<TaskFromDatasetAggregateInput>;
  fromDatasetConnection?: InputMaybe<TaskFromDatasetConnectionWhere>;
  fromDatasetConnection_NOT?: InputMaybe<TaskFromDatasetConnectionWhere>;
  fromDataset_NOT?: InputMaybe<DatasetWhere>;
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

export type UpdateDatasetsMutationResponse = {
  __typename?: 'UpdateDatasetsMutationResponse';
  info: UpdateInfo;
  Datasets: Array<Dataset>;
};

export type UpdateStudiesMutationResponse = {
  __typename?: 'UpdateStudiesMutationResponse';
  info: UpdateInfo;
  studies: Array<Project>;
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
  CreateDatasetsMutationResponse: ResolverTypeWrapper<CreateDatasetsMutationResponse>;
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
  CuratedDatasetGeneratedByDatasetAggregateInput: CuratedDatasetGeneratedByDatasetAggregateInput;
  CuratedDatasetGeneratedByDatasetConnectFieldInput: CuratedDatasetGeneratedByDatasetConnectFieldInput;
  CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput: CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput;
  CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInputOnCreate: CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInputOnCreate;
  CuratedDatasetGeneratedByDatasetConnection: ResolverTypeWrapper<CuratedDatasetGeneratedByDatasetConnection>;
  CuratedDatasetGeneratedByDatasetConnectionSort: CuratedDatasetGeneratedByDatasetConnectionSort;
  CuratedDatasetGeneratedByDatasetConnectionWhere: CuratedDatasetGeneratedByDatasetConnectionWhere;
  CuratedDatasetGeneratedByDatasetCreateFieldInput: CuratedDatasetGeneratedByDatasetCreateFieldInput;
  CuratedDatasetGeneratedByDatasetDeleteFieldInput: CuratedDatasetGeneratedByDatasetDeleteFieldInput;
  CuratedDatasetGeneratedByDatasetDisconnectFieldInput: CuratedDatasetGeneratedByDatasetDisconnectFieldInput;
  CuratedDatasetGeneratedByDatasetFieldInput: CuratedDatasetGeneratedByDatasetFieldInput;
  CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput: CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput;
  CuratedDatasetGeneratedByDatasetRelationship: ResolverTypeWrapper<CuratedDatasetGeneratedByDatasetRelationship>;
  CuratedDatasetGeneratedByDatasetUpdateConnectionInput: CuratedDatasetGeneratedByDatasetUpdateConnectionInput;
  CuratedDatasetGeneratedByDatasetUpdateFieldInput: CuratedDatasetGeneratedByDatasetUpdateFieldInput;
  CuratedDatasetOnCreateInput: CuratedDatasetOnCreateInput;
  CuratedDatasetOptions: CuratedDatasetOptions;
  CuratedDatasetDatasetGeneratedByDatasetAggregationSelection: ResolverTypeWrapper<CuratedDatasetDatasetGeneratedByDatasetAggregationSelection>;
  CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection: ResolverTypeWrapper<CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection>;
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
  HarmonizedDatasetDatasetDatasetsAggregationSelection: ResolverTypeWrapper<HarmonizedDatasetDatasetDatasetsAggregationSelection>;
  HarmonizedDatasetDatasetDatasetsNodeAggregateSelection: ResolverTypeWrapper<HarmonizedDatasetDatasetDatasetsNodeAggregateSelection>;
  HarmonizedDatasetDatasetsAggregateInput: HarmonizedDatasetDatasetsAggregateInput;
  HarmonizedDatasetDatasetsConnectFieldInput: HarmonizedDatasetDatasetsConnectFieldInput;
  HarmonizedDatasetDatasetsConnectOrCreateFieldInput: HarmonizedDatasetDatasetsConnectOrCreateFieldInput;
  HarmonizedDatasetDatasetsConnectOrCreateFieldInputOnCreate: HarmonizedDatasetDatasetsConnectOrCreateFieldInputOnCreate;
  HarmonizedDatasetDatasetsConnection: ResolverTypeWrapper<HarmonizedDatasetDatasetsConnection>;
  HarmonizedDatasetDatasetsConnectionSort: HarmonizedDatasetDatasetsConnectionSort;
  HarmonizedDatasetDatasetsConnectionWhere: HarmonizedDatasetDatasetsConnectionWhere;
  HarmonizedDatasetDatasetsCreateFieldInput: HarmonizedDatasetDatasetsCreateFieldInput;
  HarmonizedDatasetDatasetsDeleteFieldInput: HarmonizedDatasetDatasetsDeleteFieldInput;
  HarmonizedDatasetDatasetsDisconnectFieldInput: HarmonizedDatasetDatasetsDisconnectFieldInput;
  HarmonizedDatasetDatasetsFieldInput: HarmonizedDatasetDatasetsFieldInput;
  HarmonizedDatasetDatasetsNodeAggregationWhereInput: HarmonizedDatasetDatasetsNodeAggregationWhereInput;
  HarmonizedDatasetDatasetsRelationship: ResolverTypeWrapper<HarmonizedDatasetDatasetsRelationship>;
  HarmonizedDatasetDatasetsUpdateConnectionInput: HarmonizedDatasetDatasetsUpdateConnectionInput;
  HarmonizedDatasetDatasetsUpdateFieldInput: HarmonizedDatasetDatasetsUpdateFieldInput;
  HarmonizedDatasetRelationInput: HarmonizedDatasetRelationInput;
  HarmonizedDatasetSort: HarmonizedDatasetSort;
  HarmonizedDatasetUpdateInput: HarmonizedDatasetUpdateInput;
  HarmonizedDatasetWhere: HarmonizedDatasetWhere;
  HarmonizedDatasetsConnection: ResolverTypeWrapper<HarmonizedDatasetsConnection>;
  HasCodebook: ResolversTypes['MinioUploadCodeBookDatasetRelationship'] | ResolversTypes['DatasetCodeBookRelationship'];
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
  HasRawdatafile: ResolversTypes['MinioUploadRawdataFileDatasetRelationship'] | ResolversTypes['DatasetRawdataFileRelationship'];
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
  MinioUploadCodeBookDatasetAggregateInput: MinioUploadCodeBookDatasetAggregateInput;
  MinioUploadCodeBookDatasetConnectFieldInput: MinioUploadCodeBookDatasetConnectFieldInput;
  MinioUploadCodeBookDatasetConnectOrCreateFieldInput: MinioUploadCodeBookDatasetConnectOrCreateFieldInput;
  MinioUploadCodeBookDatasetConnectOrCreateFieldInputOnCreate: MinioUploadCodeBookDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadCodeBookDatasetConnection: ResolverTypeWrapper<MinioUploadCodeBookDatasetConnection>;
  MinioUploadCodeBookDatasetConnectionSort: MinioUploadCodeBookDatasetConnectionSort;
  MinioUploadCodeBookDatasetConnectionWhere: MinioUploadCodeBookDatasetConnectionWhere;
  MinioUploadCodeBookDatasetCreateFieldInput: MinioUploadCodeBookDatasetCreateFieldInput;
  MinioUploadCodeBookDatasetDeleteFieldInput: MinioUploadCodeBookDatasetDeleteFieldInput;
  MinioUploadCodeBookDatasetDisconnectFieldInput: MinioUploadCodeBookDatasetDisconnectFieldInput;
  MinioUploadCodeBookDatasetFieldInput: MinioUploadCodeBookDatasetFieldInput;
  MinioUploadCodeBookDatasetNodeAggregationWhereInput: MinioUploadCodeBookDatasetNodeAggregationWhereInput;
  MinioUploadCodeBookDatasetRelationship: ResolverTypeWrapper<MinioUploadCodeBookDatasetRelationship>;
  MinioUploadCodeBookDatasetUpdateConnectionInput: MinioUploadCodeBookDatasetUpdateConnectionInput;
  MinioUploadCodeBookDatasetUpdateFieldInput: MinioUploadCodeBookDatasetUpdateFieldInput;
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
  MinioUploadDatasetAggregateInput: MinioUploadDatasetAggregateInput;
  MinioUploadDatasetCodeBookDatasetAggregationSelection: ResolverTypeWrapper<MinioUploadDatasetCodeBookDatasetAggregationSelection>;
  MinioUploadDatasetCodeBookDatasetNodeAggregateSelection: ResolverTypeWrapper<MinioUploadDatasetCodeBookDatasetNodeAggregateSelection>;
  MinioUploadDatasetConnectFieldInput: MinioUploadDatasetConnectFieldInput;
  MinioUploadDatasetConnectOrCreateFieldInput: MinioUploadDatasetConnectOrCreateFieldInput;
  MinioUploadDatasetConnectOrCreateFieldInputOnCreate: MinioUploadDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadDatasetConnection: ResolverTypeWrapper<MinioUploadDatasetConnection>;
  MinioUploadDatasetConnectionSort: MinioUploadDatasetConnectionSort;
  MinioUploadDatasetConnectionWhere: MinioUploadDatasetConnectionWhere;
  MinioUploadDatasetCreateFieldInput: MinioUploadDatasetCreateFieldInput;
  MinioUploadDatasetDeleteFieldInput: MinioUploadDatasetDeleteFieldInput;
  MinioUploadDatasetDisconnectFieldInput: MinioUploadDatasetDisconnectFieldInput;
  MinioUploadDatasetFieldInput: MinioUploadDatasetFieldInput;
  MinioUploadDatasetNodeAggregationWhereInput: MinioUploadDatasetNodeAggregationWhereInput;
  MinioUploadDatasetDatasetAggregationSelection: ResolverTypeWrapper<MinioUploadDatasetDatasetAggregationSelection>;
  MinioUploadDatasetDatasetNodeAggregateSelection: ResolverTypeWrapper<MinioUploadDatasetDatasetNodeAggregateSelection>;
  MinioUploadDatasetRawdataFileDatasetAggregationSelection: ResolverTypeWrapper<MinioUploadDatasetRawdataFileDatasetAggregationSelection>;
  MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection: ResolverTypeWrapper<MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection>;
  MinioUploadDatasetRelationship: ResolverTypeWrapper<MinioUploadDatasetRelationship>;
  MinioUploadDatasetUpdateConnectionInput: MinioUploadDatasetUpdateConnectionInput;
  MinioUploadDatasetUpdateFieldInput: MinioUploadDatasetUpdateFieldInput;
  MinioUploadRawdataFileDatasetAggregateInput: MinioUploadRawdataFileDatasetAggregateInput;
  MinioUploadRawdataFileDatasetConnectFieldInput: MinioUploadRawdataFileDatasetConnectFieldInput;
  MinioUploadRawdataFileDatasetConnectOrCreateFieldInput: MinioUploadRawdataFileDatasetConnectOrCreateFieldInput;
  MinioUploadRawdataFileDatasetConnectOrCreateFieldInputOnCreate: MinioUploadRawdataFileDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadRawdataFileDatasetConnection: ResolverTypeWrapper<MinioUploadRawdataFileDatasetConnection>;
  MinioUploadRawdataFileDatasetConnectionSort: MinioUploadRawdataFileDatasetConnectionSort;
  MinioUploadRawdataFileDatasetConnectionWhere: MinioUploadRawdataFileDatasetConnectionWhere;
  MinioUploadRawdataFileDatasetCreateFieldInput: MinioUploadRawdataFileDatasetCreateFieldInput;
  MinioUploadRawdataFileDatasetDeleteFieldInput: MinioUploadRawdataFileDatasetDeleteFieldInput;
  MinioUploadRawdataFileDatasetDisconnectFieldInput: MinioUploadRawdataFileDatasetDisconnectFieldInput;
  MinioUploadRawdataFileDatasetFieldInput: MinioUploadRawdataFileDatasetFieldInput;
  MinioUploadRawdataFileDatasetNodeAggregationWhereInput: MinioUploadRawdataFileDatasetNodeAggregationWhereInput;
  MinioUploadRawdataFileDatasetRelationship: ResolverTypeWrapper<MinioUploadRawdataFileDatasetRelationship>;
  MinioUploadRawdataFileDatasetUpdateConnectionInput: MinioUploadRawdataFileDatasetUpdateConnectionInput;
  MinioUploadRawdataFileDatasetUpdateFieldInput: MinioUploadRawdataFileDatasetUpdateFieldInput;
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
  Dataset: ResolverTypeWrapper<Dataset>;
  DatasetAggregateSelection: ResolverTypeWrapper<DatasetAggregateSelection>;
  DatasetCodeBookAggregateInput: DatasetCodeBookAggregateInput;
  DatasetCodeBookConnectFieldInput: DatasetCodeBookConnectFieldInput;
  DatasetCodeBookConnectOrCreateFieldInput: DatasetCodeBookConnectOrCreateFieldInput;
  DatasetCodeBookConnectOrCreateFieldInputOnCreate: DatasetCodeBookConnectOrCreateFieldInputOnCreate;
  DatasetCodeBookConnection: ResolverTypeWrapper<DatasetCodeBookConnection>;
  DatasetCodeBookConnectionSort: DatasetCodeBookConnectionSort;
  DatasetCodeBookConnectionWhere: DatasetCodeBookConnectionWhere;
  DatasetCodeBookCreateFieldInput: DatasetCodeBookCreateFieldInput;
  DatasetCodeBookDeleteFieldInput: DatasetCodeBookDeleteFieldInput;
  DatasetCodeBookDisconnectFieldInput: DatasetCodeBookDisconnectFieldInput;
  DatasetCodeBookFieldInput: DatasetCodeBookFieldInput;
  DatasetCodeBookNodeAggregationWhereInput: DatasetCodeBookNodeAggregationWhereInput;
  DatasetCodeBookRelationship: ResolverTypeWrapper<DatasetCodeBookRelationship>;
  DatasetCodeBookUpdateConnectionInput: DatasetCodeBookUpdateConnectionInput;
  DatasetCodeBookUpdateFieldInput: DatasetCodeBookUpdateFieldInput;
  DatasetConnectInput: DatasetConnectInput;
  DatasetConnectOrCreateInput: DatasetConnectOrCreateInput;
  DatasetConnectOrCreateWhere: DatasetConnectOrCreateWhere;
  DatasetConnectWhere: DatasetConnectWhere;
  DatasetCreateInput: DatasetCreateInput;
  DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection: ResolverTypeWrapper<DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection>;
  DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection: ResolverTypeWrapper<DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection>;
  DatasetDeleteInput: DatasetDeleteInput;
  DatasetDisconnectInput: DatasetDisconnectInput;
  DatasetEdge: ResolverTypeWrapper<DatasetEdge>;
  DatasetFilesAggregateInput: DatasetFilesAggregateInput;
  DatasetFilesConnectFieldInput: DatasetFilesConnectFieldInput;
  DatasetFilesConnectOrCreateFieldInput: DatasetFilesConnectOrCreateFieldInput;
  DatasetFilesConnectOrCreateFieldInputOnCreate: DatasetFilesConnectOrCreateFieldInputOnCreate;
  DatasetFilesConnection: ResolverTypeWrapper<DatasetFilesConnection>;
  DatasetFilesConnectionSort: DatasetFilesConnectionSort;
  DatasetFilesConnectionWhere: DatasetFilesConnectionWhere;
  DatasetFilesCreateFieldInput: DatasetFilesCreateFieldInput;
  DatasetFilesDeleteFieldInput: DatasetFilesDeleteFieldInput;
  DatasetFilesDisconnectFieldInput: DatasetFilesDisconnectFieldInput;
  DatasetFilesFieldInput: DatasetFilesFieldInput;
  DatasetFilesNodeAggregationWhereInput: DatasetFilesNodeAggregationWhereInput;
  DatasetFilesRelationship: ResolverTypeWrapper<DatasetFilesRelationship>;
  DatasetFilesUpdateConnectionInput: DatasetFilesUpdateConnectionInput;
  DatasetFilesUpdateFieldInput: DatasetFilesUpdateFieldInput;
  DatasetFromStudyAggregateInput: DatasetFromStudyAggregateInput;
  DatasetFromStudyConnectFieldInput: DatasetFromStudyConnectFieldInput;
  DatasetFromStudyConnectOrCreateFieldInput: DatasetFromStudyConnectOrCreateFieldInput;
  DatasetFromStudyConnectOrCreateFieldInputOnCreate: DatasetFromStudyConnectOrCreateFieldInputOnCreate;
  DatasetFromStudyConnection: ResolverTypeWrapper<DatasetFromStudyConnection>;
  DatasetFromStudyConnectionSort: DatasetFromStudyConnectionSort;
  DatasetFromStudyConnectionWhere: DatasetFromStudyConnectionWhere;
  DatasetFromStudyCreateFieldInput: DatasetFromStudyCreateFieldInput;
  DatasetFromStudyDeleteFieldInput: DatasetFromStudyDeleteFieldInput;
  DatasetFromStudyDisconnectFieldInput: DatasetFromStudyDisconnectFieldInput;
  DatasetFromStudyFieldInput: DatasetFromStudyFieldInput;
  DatasetFromStudyNodeAggregationWhereInput: DatasetFromStudyNodeAggregationWhereInput;
  DatasetFromStudyRelationship: ResolverTypeWrapper<DatasetFromStudyRelationship>;
  DatasetFromStudyUpdateConnectionInput: DatasetFromStudyUpdateConnectionInput;
  DatasetFromStudyUpdateFieldInput: DatasetFromStudyUpdateFieldInput;
  DatasetFunnelTasksAggregateInput: DatasetFunnelTasksAggregateInput;
  DatasetFunnelTasksConnectFieldInput: DatasetFunnelTasksConnectFieldInput;
  DatasetFunnelTasksConnection: ResolverTypeWrapper<DatasetFunnelTasksConnection>;
  DatasetFunnelTasksConnectionSort: DatasetFunnelTasksConnectionSort;
  DatasetFunnelTasksConnectionWhere: DatasetFunnelTasksConnectionWhere;
  DatasetFunnelTasksCreateFieldInput: DatasetFunnelTasksCreateFieldInput;
  DatasetFunnelTasksDeleteFieldInput: DatasetFunnelTasksDeleteFieldInput;
  DatasetFunnelTasksDisconnectFieldInput: DatasetFunnelTasksDisconnectFieldInput;
  DatasetFunnelTasksFieldInput: DatasetFunnelTasksFieldInput;
  DatasetFunnelTasksNodeAggregationWhereInput: DatasetFunnelTasksNodeAggregationWhereInput;
  DatasetFunnelTasksRelationship: ResolverTypeWrapper<DatasetFunnelTasksRelationship>;
  DatasetFunnelTasksUpdateConnectionInput: DatasetFunnelTasksUpdateConnectionInput;
  DatasetFunnelTasksUpdateFieldInput: DatasetFunnelTasksUpdateFieldInput;
  DatasetGeneratedCuratedDatasetsAggregateInput: DatasetGeneratedCuratedDatasetsAggregateInput;
  DatasetGeneratedCuratedDatasetsConnectFieldInput: DatasetGeneratedCuratedDatasetsConnectFieldInput;
  DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput: DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput;
  DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate: DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate;
  DatasetGeneratedCuratedDatasetsConnection: ResolverTypeWrapper<DatasetGeneratedCuratedDatasetsConnection>;
  DatasetGeneratedCuratedDatasetsConnectionSort: DatasetGeneratedCuratedDatasetsConnectionSort;
  DatasetGeneratedCuratedDatasetsConnectionWhere: DatasetGeneratedCuratedDatasetsConnectionWhere;
  DatasetGeneratedCuratedDatasetsCreateFieldInput: DatasetGeneratedCuratedDatasetsCreateFieldInput;
  DatasetGeneratedCuratedDatasetsDeleteFieldInput: DatasetGeneratedCuratedDatasetsDeleteFieldInput;
  DatasetGeneratedCuratedDatasetsDisconnectFieldInput: DatasetGeneratedCuratedDatasetsDisconnectFieldInput;
  DatasetGeneratedCuratedDatasetsFieldInput: DatasetGeneratedCuratedDatasetsFieldInput;
  DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput: DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput;
  DatasetGeneratedCuratedDatasetsRelationship: ResolverTypeWrapper<DatasetGeneratedCuratedDatasetsRelationship>;
  DatasetGeneratedCuratedDatasetsUpdateConnectionInput: DatasetGeneratedCuratedDatasetsUpdateConnectionInput;
  DatasetGeneratedCuratedDatasetsUpdateFieldInput: DatasetGeneratedCuratedDatasetsUpdateFieldInput;
  DatasetGeographyCityStudySiteAggregationSelection: ResolverTypeWrapper<DatasetGeographyCityStudySiteAggregationSelection>;
  DatasetGeographyCityStudySiteNodeAggregateSelection: ResolverTypeWrapper<DatasetGeographyCityStudySiteNodeAggregateSelection>;
  DatasetMinioBucketAggregateInput: DatasetMinioBucketAggregateInput;
  DatasetMinioBucketConnectFieldInput: DatasetMinioBucketConnectFieldInput;
  DatasetMinioBucketConnection: ResolverTypeWrapper<DatasetMinioBucketConnection>;
  DatasetMinioBucketConnectionSort: DatasetMinioBucketConnectionSort;
  DatasetMinioBucketConnectionWhere: DatasetMinioBucketConnectionWhere;
  DatasetMinioBucketCreateFieldInput: DatasetMinioBucketCreateFieldInput;
  DatasetMinioBucketDeleteFieldInput: DatasetMinioBucketDeleteFieldInput;
  DatasetMinioBucketDisconnectFieldInput: DatasetMinioBucketDisconnectFieldInput;
  DatasetMinioBucketFieldInput: DatasetMinioBucketFieldInput;
  DatasetMinioBucketMinioBucketAggregationSelection: ResolverTypeWrapper<DatasetMinioBucketMinioBucketAggregationSelection>;
  DatasetMinioBucketMinioBucketNodeAggregateSelection: ResolverTypeWrapper<DatasetMinioBucketMinioBucketNodeAggregateSelection>;
  DatasetMinioBucketNodeAggregationWhereInput: DatasetMinioBucketNodeAggregationWhereInput;
  DatasetMinioBucketRelationship: ResolverTypeWrapper<DatasetMinioBucketRelationship>;
  DatasetMinioBucketUpdateConnectionInput: DatasetMinioBucketUpdateConnectionInput;
  DatasetMinioBucketUpdateFieldInput: DatasetMinioBucketUpdateFieldInput;
  DatasetMinioUploadCodeBookAggregationSelection: ResolverTypeWrapper<DatasetMinioUploadCodeBookAggregationSelection>;
  DatasetMinioUploadCodeBookNodeAggregateSelection: ResolverTypeWrapper<DatasetMinioUploadCodeBookNodeAggregateSelection>;
  DatasetMinioUploadFilesAggregationSelection: ResolverTypeWrapper<DatasetMinioUploadFilesAggregationSelection>;
  DatasetMinioUploadFilesNodeAggregateSelection: ResolverTypeWrapper<DatasetMinioUploadFilesNodeAggregateSelection>;
  DatasetMinioUploadRawdataFileAggregationSelection: ResolverTypeWrapper<DatasetMinioUploadRawdataFileAggregationSelection>;
  DatasetMinioUploadRawdataFileNodeAggregateSelection: ResolverTypeWrapper<DatasetMinioUploadRawdataFileNodeAggregateSelection>;
  DatasetOnCreateInput: DatasetOnCreateInput;
  DatasetOptions: DatasetOptions;
  DatasetRawdataFileAggregateInput: DatasetRawdataFileAggregateInput;
  DatasetRawdataFileConnectFieldInput: DatasetRawdataFileConnectFieldInput;
  DatasetRawdataFileConnectOrCreateFieldInput: DatasetRawdataFileConnectOrCreateFieldInput;
  DatasetRawdataFileConnectOrCreateFieldInputOnCreate: DatasetRawdataFileConnectOrCreateFieldInputOnCreate;
  DatasetRawdataFileConnection: ResolverTypeWrapper<DatasetRawdataFileConnection>;
  DatasetRawdataFileConnectionSort: DatasetRawdataFileConnectionSort;
  DatasetRawdataFileConnectionWhere: DatasetRawdataFileConnectionWhere;
  DatasetRawdataFileCreateFieldInput: DatasetRawdataFileCreateFieldInput;
  DatasetRawdataFileDeleteFieldInput: DatasetRawdataFileDeleteFieldInput;
  DatasetRawdataFileDisconnectFieldInput: DatasetRawdataFileDisconnectFieldInput;
  DatasetRawdataFileFieldInput: DatasetRawdataFileFieldInput;
  DatasetRawdataFileNodeAggregationWhereInput: DatasetRawdataFileNodeAggregationWhereInput;
  DatasetRawdataFileRelationship: ResolverTypeWrapper<DatasetRawdataFileRelationship>;
  DatasetRawdataFileUpdateConnectionInput: DatasetRawdataFileUpdateConnectionInput;
  DatasetRawdataFileUpdateFieldInput: DatasetRawdataFileUpdateFieldInput;
  DatasetRelationInput: DatasetRelationInput;
  DatasetSort: DatasetSort;
  DatasetStudyFromStudyAggregationSelection: ResolverTypeWrapper<DatasetStudyFromStudyAggregationSelection>;
  DatasetStudyFromStudyNodeAggregateSelection: ResolverTypeWrapper<DatasetStudyFromStudyNodeAggregateSelection>;
  DatasetStudySiteAggregateInput: DatasetStudySiteAggregateInput;
  DatasetStudySiteConnectFieldInput: DatasetStudySiteConnectFieldInput;
  DatasetStudySiteConnectOrCreateFieldInput: DatasetStudySiteConnectOrCreateFieldInput;
  DatasetStudySiteConnectOrCreateFieldInputOnCreate: DatasetStudySiteConnectOrCreateFieldInputOnCreate;
  DatasetStudySiteConnection: ResolverTypeWrapper<DatasetStudySiteConnection>;
  DatasetStudySiteConnectionSort: DatasetStudySiteConnectionSort;
  DatasetStudySiteConnectionWhere: DatasetStudySiteConnectionWhere;
  DatasetStudySiteCreateFieldInput: DatasetStudySiteCreateFieldInput;
  DatasetStudySiteDeleteFieldInput: DatasetStudySiteDeleteFieldInput;
  DatasetStudySiteDisconnectFieldInput: DatasetStudySiteDisconnectFieldInput;
  DatasetStudySiteFieldInput: DatasetStudySiteFieldInput;
  DatasetStudySiteNodeAggregationWhereInput: DatasetStudySiteNodeAggregationWhereInput;
  DatasetStudySiteRelationship: ResolverTypeWrapper<DatasetStudySiteRelationship>;
  DatasetStudySiteUpdateConnectionInput: DatasetStudySiteUpdateConnectionInput;
  DatasetStudySiteUpdateFieldInput: DatasetStudySiteUpdateFieldInput;
  DatasetTaskFunnelTasksAggregationSelection: ResolverTypeWrapper<DatasetTaskFunnelTasksAggregationSelection>;
  DatasetTaskFunnelTasksNodeAggregateSelection: ResolverTypeWrapper<DatasetTaskFunnelTasksNodeAggregateSelection>;
  DatasetUniqueWhere: DatasetUniqueWhere;
  DatasetUpdateInput: DatasetUpdateInput;
  DatasetWhere: DatasetWhere;
  DatasetsConnection: ResolverTypeWrapper<DatasetsConnection>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringAggregateSelectionNonNullable: ResolverTypeWrapper<StringAggregateSelectionNonNullable>;
  StringAggregateSelectionNullable: ResolverTypeWrapper<StringAggregateSelectionNullable>;
  StudiesConnection: ResolverTypeWrapper<StudiesConnection>;
  Project: ResolverTypeWrapper<Project>;
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
  StudyDatasetDatasetsAggregationSelection: ResolverTypeWrapper<StudyDatasetDatasetsAggregationSelection>;
  StudyDatasetDatasetsNodeAggregateSelection: ResolverTypeWrapper<StudyDatasetDatasetsNodeAggregateSelection>;
  StudyDatasetsAggregateInput: StudyDatasetsAggregateInput;
  StudyDatasetsConnectFieldInput: StudyDatasetsConnectFieldInput;
  StudyDatasetsConnectOrCreateFieldInput: StudyDatasetsConnectOrCreateFieldInput;
  StudyDatasetsConnectOrCreateFieldInputOnCreate: StudyDatasetsConnectOrCreateFieldInputOnCreate;
  StudyDatasetsConnection: ResolverTypeWrapper<StudyDatasetsConnection>;
  StudyDatasetsConnectionSort: StudyDatasetsConnectionSort;
  StudyDatasetsConnectionWhere: StudyDatasetsConnectionWhere;
  StudyDatasetsCreateFieldInput: StudyDatasetsCreateFieldInput;
  StudyDatasetsDeleteFieldInput: StudyDatasetsDeleteFieldInput;
  StudyDatasetsDisconnectFieldInput: StudyDatasetsDisconnectFieldInput;
  StudyDatasetsFieldInput: StudyDatasetsFieldInput;
  StudyDatasetsNodeAggregationWhereInput: StudyDatasetsNodeAggregationWhereInput;
  StudyDatasetsRelationship: ResolverTypeWrapper<StudyDatasetsRelationship>;
  StudyDatasetsUpdateConnectionInput: StudyDatasetsUpdateConnectionInput;
  StudyDatasetsUpdateFieldInput: StudyDatasetsUpdateFieldInput;
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
  TaskFromDatasetAggregateInput: TaskFromDatasetAggregateInput;
  TaskFromDatasetConnectFieldInput: TaskFromDatasetConnectFieldInput;
  TaskFromDatasetConnectOrCreateFieldInput: TaskFromDatasetConnectOrCreateFieldInput;
  TaskFromDatasetConnectOrCreateFieldInputOnCreate: TaskFromDatasetConnectOrCreateFieldInputOnCreate;
  TaskFromDatasetConnection: ResolverTypeWrapper<TaskFromDatasetConnection>;
  TaskFromDatasetConnectionSort: TaskFromDatasetConnectionSort;
  TaskFromDatasetConnectionWhere: TaskFromDatasetConnectionWhere;
  TaskFromDatasetCreateFieldInput: TaskFromDatasetCreateFieldInput;
  TaskFromDatasetDeleteFieldInput: TaskFromDatasetDeleteFieldInput;
  TaskFromDatasetDisconnectFieldInput: TaskFromDatasetDisconnectFieldInput;
  TaskFromDatasetFieldInput: TaskFromDatasetFieldInput;
  TaskFromDatasetNodeAggregationWhereInput: TaskFromDatasetNodeAggregationWhereInput;
  TaskFromDatasetRelationship: ResolverTypeWrapper<TaskFromDatasetRelationship>;
  TaskFromDatasetUpdateConnectionInput: TaskFromDatasetUpdateConnectionInput;
  TaskFromDatasetUpdateFieldInput: TaskFromDatasetUpdateFieldInput;
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
  TaskDatasetFromDatasetAggregationSelection: ResolverTypeWrapper<TaskDatasetFromDatasetAggregationSelection>;
  TaskDatasetFromDatasetNodeAggregateSelection: ResolverTypeWrapper<TaskDatasetFromDatasetNodeAggregateSelection>;
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
  UpdateDatasetsMutationResponse: ResolverTypeWrapper<UpdateDatasetsMutationResponse>;
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
  CreateDatasetsMutationResponse: CreateDatasetsMutationResponse;
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
  CuratedDatasetGeneratedByDatasetAggregateInput: CuratedDatasetGeneratedByDatasetAggregateInput;
  CuratedDatasetGeneratedByDatasetConnectFieldInput: CuratedDatasetGeneratedByDatasetConnectFieldInput;
  CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput: CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInput;
  CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInputOnCreate: CuratedDatasetGeneratedByDatasetConnectOrCreateFieldInputOnCreate;
  CuratedDatasetGeneratedByDatasetConnection: CuratedDatasetGeneratedByDatasetConnection;
  CuratedDatasetGeneratedByDatasetConnectionSort: CuratedDatasetGeneratedByDatasetConnectionSort;
  CuratedDatasetGeneratedByDatasetConnectionWhere: CuratedDatasetGeneratedByDatasetConnectionWhere;
  CuratedDatasetGeneratedByDatasetCreateFieldInput: CuratedDatasetGeneratedByDatasetCreateFieldInput;
  CuratedDatasetGeneratedByDatasetDeleteFieldInput: CuratedDatasetGeneratedByDatasetDeleteFieldInput;
  CuratedDatasetGeneratedByDatasetDisconnectFieldInput: CuratedDatasetGeneratedByDatasetDisconnectFieldInput;
  CuratedDatasetGeneratedByDatasetFieldInput: CuratedDatasetGeneratedByDatasetFieldInput;
  CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput: CuratedDatasetGeneratedByDatasetNodeAggregationWhereInput;
  CuratedDatasetGeneratedByDatasetRelationship: CuratedDatasetGeneratedByDatasetRelationship;
  CuratedDatasetGeneratedByDatasetUpdateConnectionInput: CuratedDatasetGeneratedByDatasetUpdateConnectionInput;
  CuratedDatasetGeneratedByDatasetUpdateFieldInput: CuratedDatasetGeneratedByDatasetUpdateFieldInput;
  CuratedDatasetOnCreateInput: CuratedDatasetOnCreateInput;
  CuratedDatasetOptions: CuratedDatasetOptions;
  CuratedDatasetDatasetGeneratedByDatasetAggregationSelection: CuratedDatasetDatasetGeneratedByDatasetAggregationSelection;
  CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection: CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection;
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
  HarmonizedDatasetDatasetDatasetsAggregationSelection: HarmonizedDatasetDatasetDatasetsAggregationSelection;
  HarmonizedDatasetDatasetDatasetsNodeAggregateSelection: HarmonizedDatasetDatasetDatasetsNodeAggregateSelection;
  HarmonizedDatasetDatasetsAggregateInput: HarmonizedDatasetDatasetsAggregateInput;
  HarmonizedDatasetDatasetsConnectFieldInput: HarmonizedDatasetDatasetsConnectFieldInput;
  HarmonizedDatasetDatasetsConnectOrCreateFieldInput: HarmonizedDatasetDatasetsConnectOrCreateFieldInput;
  HarmonizedDatasetDatasetsConnectOrCreateFieldInputOnCreate: HarmonizedDatasetDatasetsConnectOrCreateFieldInputOnCreate;
  HarmonizedDatasetDatasetsConnection: HarmonizedDatasetDatasetsConnection;
  HarmonizedDatasetDatasetsConnectionSort: HarmonizedDatasetDatasetsConnectionSort;
  HarmonizedDatasetDatasetsConnectionWhere: HarmonizedDatasetDatasetsConnectionWhere;
  HarmonizedDatasetDatasetsCreateFieldInput: HarmonizedDatasetDatasetsCreateFieldInput;
  HarmonizedDatasetDatasetsDeleteFieldInput: HarmonizedDatasetDatasetsDeleteFieldInput;
  HarmonizedDatasetDatasetsDisconnectFieldInput: HarmonizedDatasetDatasetsDisconnectFieldInput;
  HarmonizedDatasetDatasetsFieldInput: HarmonizedDatasetDatasetsFieldInput;
  HarmonizedDatasetDatasetsNodeAggregationWhereInput: HarmonizedDatasetDatasetsNodeAggregationWhereInput;
  HarmonizedDatasetDatasetsRelationship: HarmonizedDatasetDatasetsRelationship;
  HarmonizedDatasetDatasetsUpdateConnectionInput: HarmonizedDatasetDatasetsUpdateConnectionInput;
  HarmonizedDatasetDatasetsUpdateFieldInput: HarmonizedDatasetDatasetsUpdateFieldInput;
  HarmonizedDatasetRelationInput: HarmonizedDatasetRelationInput;
  HarmonizedDatasetSort: HarmonizedDatasetSort;
  HarmonizedDatasetUpdateInput: HarmonizedDatasetUpdateInput;
  HarmonizedDatasetWhere: HarmonizedDatasetWhere;
  HarmonizedDatasetsConnection: HarmonizedDatasetsConnection;
  HasCodebook: ResolversParentTypes['MinioUploadCodeBookDatasetRelationship'] | ResolversParentTypes['DatasetCodeBookRelationship'];
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
  HasRawdatafile: ResolversParentTypes['MinioUploadRawdataFileDatasetRelationship'] | ResolversParentTypes['DatasetRawdataFileRelationship'];
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
  MinioUploadCodeBookDatasetAggregateInput: MinioUploadCodeBookDatasetAggregateInput;
  MinioUploadCodeBookDatasetConnectFieldInput: MinioUploadCodeBookDatasetConnectFieldInput;
  MinioUploadCodeBookDatasetConnectOrCreateFieldInput: MinioUploadCodeBookDatasetConnectOrCreateFieldInput;
  MinioUploadCodeBookDatasetConnectOrCreateFieldInputOnCreate: MinioUploadCodeBookDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadCodeBookDatasetConnection: MinioUploadCodeBookDatasetConnection;
  MinioUploadCodeBookDatasetConnectionSort: MinioUploadCodeBookDatasetConnectionSort;
  MinioUploadCodeBookDatasetConnectionWhere: MinioUploadCodeBookDatasetConnectionWhere;
  MinioUploadCodeBookDatasetCreateFieldInput: MinioUploadCodeBookDatasetCreateFieldInput;
  MinioUploadCodeBookDatasetDeleteFieldInput: MinioUploadCodeBookDatasetDeleteFieldInput;
  MinioUploadCodeBookDatasetDisconnectFieldInput: MinioUploadCodeBookDatasetDisconnectFieldInput;
  MinioUploadCodeBookDatasetFieldInput: MinioUploadCodeBookDatasetFieldInput;
  MinioUploadCodeBookDatasetNodeAggregationWhereInput: MinioUploadCodeBookDatasetNodeAggregationWhereInput;
  MinioUploadCodeBookDatasetRelationship: MinioUploadCodeBookDatasetRelationship;
  MinioUploadCodeBookDatasetUpdateConnectionInput: MinioUploadCodeBookDatasetUpdateConnectionInput;
  MinioUploadCodeBookDatasetUpdateFieldInput: MinioUploadCodeBookDatasetUpdateFieldInput;
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
  MinioUploadDatasetAggregateInput: MinioUploadDatasetAggregateInput;
  MinioUploadDatasetCodeBookDatasetAggregationSelection: MinioUploadDatasetCodeBookDatasetAggregationSelection;
  MinioUploadDatasetCodeBookDatasetNodeAggregateSelection: MinioUploadDatasetCodeBookDatasetNodeAggregateSelection;
  MinioUploadDatasetConnectFieldInput: MinioUploadDatasetConnectFieldInput;
  MinioUploadDatasetConnectOrCreateFieldInput: MinioUploadDatasetConnectOrCreateFieldInput;
  MinioUploadDatasetConnectOrCreateFieldInputOnCreate: MinioUploadDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadDatasetConnection: MinioUploadDatasetConnection;
  MinioUploadDatasetConnectionSort: MinioUploadDatasetConnectionSort;
  MinioUploadDatasetConnectionWhere: MinioUploadDatasetConnectionWhere;
  MinioUploadDatasetCreateFieldInput: MinioUploadDatasetCreateFieldInput;
  MinioUploadDatasetDeleteFieldInput: MinioUploadDatasetDeleteFieldInput;
  MinioUploadDatasetDisconnectFieldInput: MinioUploadDatasetDisconnectFieldInput;
  MinioUploadDatasetFieldInput: MinioUploadDatasetFieldInput;
  MinioUploadDatasetNodeAggregationWhereInput: MinioUploadDatasetNodeAggregationWhereInput;
  MinioUploadDatasetDatasetAggregationSelection: MinioUploadDatasetDatasetAggregationSelection;
  MinioUploadDatasetDatasetNodeAggregateSelection: MinioUploadDatasetDatasetNodeAggregateSelection;
  MinioUploadDatasetRawdataFileDatasetAggregationSelection: MinioUploadDatasetRawdataFileDatasetAggregationSelection;
  MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection: MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection;
  MinioUploadDatasetRelationship: MinioUploadDatasetRelationship;
  MinioUploadDatasetUpdateConnectionInput: MinioUploadDatasetUpdateConnectionInput;
  MinioUploadDatasetUpdateFieldInput: MinioUploadDatasetUpdateFieldInput;
  MinioUploadRawdataFileDatasetAggregateInput: MinioUploadRawdataFileDatasetAggregateInput;
  MinioUploadRawdataFileDatasetConnectFieldInput: MinioUploadRawdataFileDatasetConnectFieldInput;
  MinioUploadRawdataFileDatasetConnectOrCreateFieldInput: MinioUploadRawdataFileDatasetConnectOrCreateFieldInput;
  MinioUploadRawdataFileDatasetConnectOrCreateFieldInputOnCreate: MinioUploadRawdataFileDatasetConnectOrCreateFieldInputOnCreate;
  MinioUploadRawdataFileDatasetConnection: MinioUploadRawdataFileDatasetConnection;
  MinioUploadRawdataFileDatasetConnectionSort: MinioUploadRawdataFileDatasetConnectionSort;
  MinioUploadRawdataFileDatasetConnectionWhere: MinioUploadRawdataFileDatasetConnectionWhere;
  MinioUploadRawdataFileDatasetCreateFieldInput: MinioUploadRawdataFileDatasetCreateFieldInput;
  MinioUploadRawdataFileDatasetDeleteFieldInput: MinioUploadRawdataFileDatasetDeleteFieldInput;
  MinioUploadRawdataFileDatasetDisconnectFieldInput: MinioUploadRawdataFileDatasetDisconnectFieldInput;
  MinioUploadRawdataFileDatasetFieldInput: MinioUploadRawdataFileDatasetFieldInput;
  MinioUploadRawdataFileDatasetNodeAggregationWhereInput: MinioUploadRawdataFileDatasetNodeAggregationWhereInput;
  MinioUploadRawdataFileDatasetRelationship: MinioUploadRawdataFileDatasetRelationship;
  MinioUploadRawdataFileDatasetUpdateConnectionInput: MinioUploadRawdataFileDatasetUpdateConnectionInput;
  MinioUploadRawdataFileDatasetUpdateFieldInput: MinioUploadRawdataFileDatasetUpdateFieldInput;
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
  Dataset: Dataset;
  DatasetAggregateSelection: DatasetAggregateSelection;
  DatasetCodeBookAggregateInput: DatasetCodeBookAggregateInput;
  DatasetCodeBookConnectFieldInput: DatasetCodeBookConnectFieldInput;
  DatasetCodeBookConnectOrCreateFieldInput: DatasetCodeBookConnectOrCreateFieldInput;
  DatasetCodeBookConnectOrCreateFieldInputOnCreate: DatasetCodeBookConnectOrCreateFieldInputOnCreate;
  DatasetCodeBookConnection: DatasetCodeBookConnection;
  DatasetCodeBookConnectionSort: DatasetCodeBookConnectionSort;
  DatasetCodeBookConnectionWhere: DatasetCodeBookConnectionWhere;
  DatasetCodeBookCreateFieldInput: DatasetCodeBookCreateFieldInput;
  DatasetCodeBookDeleteFieldInput: DatasetCodeBookDeleteFieldInput;
  DatasetCodeBookDisconnectFieldInput: DatasetCodeBookDisconnectFieldInput;
  DatasetCodeBookFieldInput: DatasetCodeBookFieldInput;
  DatasetCodeBookNodeAggregationWhereInput: DatasetCodeBookNodeAggregationWhereInput;
  DatasetCodeBookRelationship: DatasetCodeBookRelationship;
  DatasetCodeBookUpdateConnectionInput: DatasetCodeBookUpdateConnectionInput;
  DatasetCodeBookUpdateFieldInput: DatasetCodeBookUpdateFieldInput;
  DatasetConnectInput: DatasetConnectInput;
  DatasetConnectOrCreateInput: DatasetConnectOrCreateInput;
  DatasetConnectOrCreateWhere: DatasetConnectOrCreateWhere;
  DatasetConnectWhere: DatasetConnectWhere;
  DatasetCreateInput: DatasetCreateInput;
  DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection: DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection;
  DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection: DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection;
  DatasetDeleteInput: DatasetDeleteInput;
  DatasetDisconnectInput: DatasetDisconnectInput;
  DatasetEdge: DatasetEdge;
  DatasetFilesAggregateInput: DatasetFilesAggregateInput;
  DatasetFilesConnectFieldInput: DatasetFilesConnectFieldInput;
  DatasetFilesConnectOrCreateFieldInput: DatasetFilesConnectOrCreateFieldInput;
  DatasetFilesConnectOrCreateFieldInputOnCreate: DatasetFilesConnectOrCreateFieldInputOnCreate;
  DatasetFilesConnection: DatasetFilesConnection;
  DatasetFilesConnectionSort: DatasetFilesConnectionSort;
  DatasetFilesConnectionWhere: DatasetFilesConnectionWhere;
  DatasetFilesCreateFieldInput: DatasetFilesCreateFieldInput;
  DatasetFilesDeleteFieldInput: DatasetFilesDeleteFieldInput;
  DatasetFilesDisconnectFieldInput: DatasetFilesDisconnectFieldInput;
  DatasetFilesFieldInput: DatasetFilesFieldInput;
  DatasetFilesNodeAggregationWhereInput: DatasetFilesNodeAggregationWhereInput;
  DatasetFilesRelationship: DatasetFilesRelationship;
  DatasetFilesUpdateConnectionInput: DatasetFilesUpdateConnectionInput;
  DatasetFilesUpdateFieldInput: DatasetFilesUpdateFieldInput;
  DatasetFromStudyAggregateInput: DatasetFromStudyAggregateInput;
  DatasetFromStudyConnectFieldInput: DatasetFromStudyConnectFieldInput;
  DatasetFromStudyConnectOrCreateFieldInput: DatasetFromStudyConnectOrCreateFieldInput;
  DatasetFromStudyConnectOrCreateFieldInputOnCreate: DatasetFromStudyConnectOrCreateFieldInputOnCreate;
  DatasetFromStudyConnection: DatasetFromStudyConnection;
  DatasetFromStudyConnectionSort: DatasetFromStudyConnectionSort;
  DatasetFromStudyConnectionWhere: DatasetFromStudyConnectionWhere;
  DatasetFromStudyCreateFieldInput: DatasetFromStudyCreateFieldInput;
  DatasetFromStudyDeleteFieldInput: DatasetFromStudyDeleteFieldInput;
  DatasetFromStudyDisconnectFieldInput: DatasetFromStudyDisconnectFieldInput;
  DatasetFromStudyFieldInput: DatasetFromStudyFieldInput;
  DatasetFromStudyNodeAggregationWhereInput: DatasetFromStudyNodeAggregationWhereInput;
  DatasetFromStudyRelationship: DatasetFromStudyRelationship;
  DatasetFromStudyUpdateConnectionInput: DatasetFromStudyUpdateConnectionInput;
  DatasetFromStudyUpdateFieldInput: DatasetFromStudyUpdateFieldInput;
  DatasetFunnelTasksAggregateInput: DatasetFunnelTasksAggregateInput;
  DatasetFunnelTasksConnectFieldInput: DatasetFunnelTasksConnectFieldInput;
  DatasetFunnelTasksConnection: DatasetFunnelTasksConnection;
  DatasetFunnelTasksConnectionSort: DatasetFunnelTasksConnectionSort;
  DatasetFunnelTasksConnectionWhere: DatasetFunnelTasksConnectionWhere;
  DatasetFunnelTasksCreateFieldInput: DatasetFunnelTasksCreateFieldInput;
  DatasetFunnelTasksDeleteFieldInput: DatasetFunnelTasksDeleteFieldInput;
  DatasetFunnelTasksDisconnectFieldInput: DatasetFunnelTasksDisconnectFieldInput;
  DatasetFunnelTasksFieldInput: DatasetFunnelTasksFieldInput;
  DatasetFunnelTasksNodeAggregationWhereInput: DatasetFunnelTasksNodeAggregationWhereInput;
  DatasetFunnelTasksRelationship: DatasetFunnelTasksRelationship;
  DatasetFunnelTasksUpdateConnectionInput: DatasetFunnelTasksUpdateConnectionInput;
  DatasetFunnelTasksUpdateFieldInput: DatasetFunnelTasksUpdateFieldInput;
  DatasetGeneratedCuratedDatasetsAggregateInput: DatasetGeneratedCuratedDatasetsAggregateInput;
  DatasetGeneratedCuratedDatasetsConnectFieldInput: DatasetGeneratedCuratedDatasetsConnectFieldInput;
  DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput: DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInput;
  DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate: DatasetGeneratedCuratedDatasetsConnectOrCreateFieldInputOnCreate;
  DatasetGeneratedCuratedDatasetsConnection: DatasetGeneratedCuratedDatasetsConnection;
  DatasetGeneratedCuratedDatasetsConnectionSort: DatasetGeneratedCuratedDatasetsConnectionSort;
  DatasetGeneratedCuratedDatasetsConnectionWhere: DatasetGeneratedCuratedDatasetsConnectionWhere;
  DatasetGeneratedCuratedDatasetsCreateFieldInput: DatasetGeneratedCuratedDatasetsCreateFieldInput;
  DatasetGeneratedCuratedDatasetsDeleteFieldInput: DatasetGeneratedCuratedDatasetsDeleteFieldInput;
  DatasetGeneratedCuratedDatasetsDisconnectFieldInput: DatasetGeneratedCuratedDatasetsDisconnectFieldInput;
  DatasetGeneratedCuratedDatasetsFieldInput: DatasetGeneratedCuratedDatasetsFieldInput;
  DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput: DatasetGeneratedCuratedDatasetsNodeAggregationWhereInput;
  DatasetGeneratedCuratedDatasetsRelationship: DatasetGeneratedCuratedDatasetsRelationship;
  DatasetGeneratedCuratedDatasetsUpdateConnectionInput: DatasetGeneratedCuratedDatasetsUpdateConnectionInput;
  DatasetGeneratedCuratedDatasetsUpdateFieldInput: DatasetGeneratedCuratedDatasetsUpdateFieldInput;
  DatasetGeographyCityStudySiteAggregationSelection: DatasetGeographyCityStudySiteAggregationSelection;
  DatasetGeographyCityStudySiteNodeAggregateSelection: DatasetGeographyCityStudySiteNodeAggregateSelection;
  DatasetMinioBucketAggregateInput: DatasetMinioBucketAggregateInput;
  DatasetMinioBucketConnectFieldInput: DatasetMinioBucketConnectFieldInput;
  DatasetMinioBucketConnection: DatasetMinioBucketConnection;
  DatasetMinioBucketConnectionSort: DatasetMinioBucketConnectionSort;
  DatasetMinioBucketConnectionWhere: DatasetMinioBucketConnectionWhere;
  DatasetMinioBucketCreateFieldInput: DatasetMinioBucketCreateFieldInput;
  DatasetMinioBucketDeleteFieldInput: DatasetMinioBucketDeleteFieldInput;
  DatasetMinioBucketDisconnectFieldInput: DatasetMinioBucketDisconnectFieldInput;
  DatasetMinioBucketFieldInput: DatasetMinioBucketFieldInput;
  DatasetMinioBucketMinioBucketAggregationSelection: DatasetMinioBucketMinioBucketAggregationSelection;
  DatasetMinioBucketMinioBucketNodeAggregateSelection: DatasetMinioBucketMinioBucketNodeAggregateSelection;
  DatasetMinioBucketNodeAggregationWhereInput: DatasetMinioBucketNodeAggregationWhereInput;
  DatasetMinioBucketRelationship: DatasetMinioBucketRelationship;
  DatasetMinioBucketUpdateConnectionInput: DatasetMinioBucketUpdateConnectionInput;
  DatasetMinioBucketUpdateFieldInput: DatasetMinioBucketUpdateFieldInput;
  DatasetMinioUploadCodeBookAggregationSelection: DatasetMinioUploadCodeBookAggregationSelection;
  DatasetMinioUploadCodeBookNodeAggregateSelection: DatasetMinioUploadCodeBookNodeAggregateSelection;
  DatasetMinioUploadFilesAggregationSelection: DatasetMinioUploadFilesAggregationSelection;
  DatasetMinioUploadFilesNodeAggregateSelection: DatasetMinioUploadFilesNodeAggregateSelection;
  DatasetMinioUploadRawdataFileAggregationSelection: DatasetMinioUploadRawdataFileAggregationSelection;
  DatasetMinioUploadRawdataFileNodeAggregateSelection: DatasetMinioUploadRawdataFileNodeAggregateSelection;
  DatasetOnCreateInput: DatasetOnCreateInput;
  DatasetOptions: DatasetOptions;
  DatasetRawdataFileAggregateInput: DatasetRawdataFileAggregateInput;
  DatasetRawdataFileConnectFieldInput: DatasetRawdataFileConnectFieldInput;
  DatasetRawdataFileConnectOrCreateFieldInput: DatasetRawdataFileConnectOrCreateFieldInput;
  DatasetRawdataFileConnectOrCreateFieldInputOnCreate: DatasetRawdataFileConnectOrCreateFieldInputOnCreate;
  DatasetRawdataFileConnection: DatasetRawdataFileConnection;
  DatasetRawdataFileConnectionSort: DatasetRawdataFileConnectionSort;
  DatasetRawdataFileConnectionWhere: DatasetRawdataFileConnectionWhere;
  DatasetRawdataFileCreateFieldInput: DatasetRawdataFileCreateFieldInput;
  DatasetRawdataFileDeleteFieldInput: DatasetRawdataFileDeleteFieldInput;
  DatasetRawdataFileDisconnectFieldInput: DatasetRawdataFileDisconnectFieldInput;
  DatasetRawdataFileFieldInput: DatasetRawdataFileFieldInput;
  DatasetRawdataFileNodeAggregationWhereInput: DatasetRawdataFileNodeAggregationWhereInput;
  DatasetRawdataFileRelationship: DatasetRawdataFileRelationship;
  DatasetRawdataFileUpdateConnectionInput: DatasetRawdataFileUpdateConnectionInput;
  DatasetRawdataFileUpdateFieldInput: DatasetRawdataFileUpdateFieldInput;
  DatasetRelationInput: DatasetRelationInput;
  DatasetSort: DatasetSort;
  DatasetStudyFromStudyAggregationSelection: DatasetStudyFromStudyAggregationSelection;
  DatasetStudyFromStudyNodeAggregateSelection: DatasetStudyFromStudyNodeAggregateSelection;
  DatasetStudySiteAggregateInput: DatasetStudySiteAggregateInput;
  DatasetStudySiteConnectFieldInput: DatasetStudySiteConnectFieldInput;
  DatasetStudySiteConnectOrCreateFieldInput: DatasetStudySiteConnectOrCreateFieldInput;
  DatasetStudySiteConnectOrCreateFieldInputOnCreate: DatasetStudySiteConnectOrCreateFieldInputOnCreate;
  DatasetStudySiteConnection: DatasetStudySiteConnection;
  DatasetStudySiteConnectionSort: DatasetStudySiteConnectionSort;
  DatasetStudySiteConnectionWhere: DatasetStudySiteConnectionWhere;
  DatasetStudySiteCreateFieldInput: DatasetStudySiteCreateFieldInput;
  DatasetStudySiteDeleteFieldInput: DatasetStudySiteDeleteFieldInput;
  DatasetStudySiteDisconnectFieldInput: DatasetStudySiteDisconnectFieldInput;
  DatasetStudySiteFieldInput: DatasetStudySiteFieldInput;
  DatasetStudySiteNodeAggregationWhereInput: DatasetStudySiteNodeAggregationWhereInput;
  DatasetStudySiteRelationship: DatasetStudySiteRelationship;
  DatasetStudySiteUpdateConnectionInput: DatasetStudySiteUpdateConnectionInput;
  DatasetStudySiteUpdateFieldInput: DatasetStudySiteUpdateFieldInput;
  DatasetTaskFunnelTasksAggregationSelection: DatasetTaskFunnelTasksAggregationSelection;
  DatasetTaskFunnelTasksNodeAggregateSelection: DatasetTaskFunnelTasksNodeAggregateSelection;
  DatasetUniqueWhere: DatasetUniqueWhere;
  DatasetUpdateInput: DatasetUpdateInput;
  DatasetWhere: DatasetWhere;
  DatasetsConnection: DatasetsConnection;
  String: Scalars['String'];
  StringAggregateSelectionNonNullable: StringAggregateSelectionNonNullable;
  StringAggregateSelectionNullable: StringAggregateSelectionNullable;
  StudiesConnection: StudiesConnection;
  Project: Project;
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
  StudyDatasetDatasetsAggregationSelection: StudyDatasetDatasetsAggregationSelection;
  StudyDatasetDatasetsNodeAggregateSelection: StudyDatasetDatasetsNodeAggregateSelection;
  StudyDatasetsAggregateInput: StudyDatasetsAggregateInput;
  StudyDatasetsConnectFieldInput: StudyDatasetsConnectFieldInput;
  StudyDatasetsConnectOrCreateFieldInput: StudyDatasetsConnectOrCreateFieldInput;
  StudyDatasetsConnectOrCreateFieldInputOnCreate: StudyDatasetsConnectOrCreateFieldInputOnCreate;
  StudyDatasetsConnection: StudyDatasetsConnection;
  StudyDatasetsConnectionSort: StudyDatasetsConnectionSort;
  StudyDatasetsConnectionWhere: StudyDatasetsConnectionWhere;
  StudyDatasetsCreateFieldInput: StudyDatasetsCreateFieldInput;
  StudyDatasetsDeleteFieldInput: StudyDatasetsDeleteFieldInput;
  StudyDatasetsDisconnectFieldInput: StudyDatasetsDisconnectFieldInput;
  StudyDatasetsFieldInput: StudyDatasetsFieldInput;
  StudyDatasetsNodeAggregationWhereInput: StudyDatasetsNodeAggregationWhereInput;
  StudyDatasetsRelationship: StudyDatasetsRelationship;
  StudyDatasetsUpdateConnectionInput: StudyDatasetsUpdateConnectionInput;
  StudyDatasetsUpdateFieldInput: StudyDatasetsUpdateFieldInput;
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
  TaskFromDatasetAggregateInput: TaskFromDatasetAggregateInput;
  TaskFromDatasetConnectFieldInput: TaskFromDatasetConnectFieldInput;
  TaskFromDatasetConnectOrCreateFieldInput: TaskFromDatasetConnectOrCreateFieldInput;
  TaskFromDatasetConnectOrCreateFieldInputOnCreate: TaskFromDatasetConnectOrCreateFieldInputOnCreate;
  TaskFromDatasetConnection: TaskFromDatasetConnection;
  TaskFromDatasetConnectionSort: TaskFromDatasetConnectionSort;
  TaskFromDatasetConnectionWhere: TaskFromDatasetConnectionWhere;
  TaskFromDatasetCreateFieldInput: TaskFromDatasetCreateFieldInput;
  TaskFromDatasetDeleteFieldInput: TaskFromDatasetDeleteFieldInput;
  TaskFromDatasetDisconnectFieldInput: TaskFromDatasetDisconnectFieldInput;
  TaskFromDatasetFieldInput: TaskFromDatasetFieldInput;
  TaskFromDatasetNodeAggregationWhereInput: TaskFromDatasetNodeAggregationWhereInput;
  TaskFromDatasetRelationship: TaskFromDatasetRelationship;
  TaskFromDatasetUpdateConnectionInput: TaskFromDatasetUpdateConnectionInput;
  TaskFromDatasetUpdateFieldInput: TaskFromDatasetUpdateFieldInput;
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
  TaskDatasetFromDatasetAggregationSelection: TaskDatasetFromDatasetAggregationSelection;
  TaskDatasetFromDatasetNodeAggregateSelection: TaskDatasetFromDatasetNodeAggregateSelection;
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
  UpdateDatasetsMutationResponse: UpdateDatasetsMutationResponse;
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

export type CreateDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateDatasetsMutationResponse'] = ResolversParentTypes['CreateDatasetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  Datasets?: Resolver<Array<ResolversTypes['Dataset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateStudiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CreateStudiesMutationResponse'] = ResolversParentTypes['CreateStudiesMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  studies?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
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
  generatedByDataset?: Resolver<Maybe<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<CuratedDatasetGeneratedByDatasetArgs, 'directed'>>;
  generatedByDatasetAggregate?: Resolver<Maybe<ResolversTypes['CuratedDatasetDatasetGeneratedByDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<CuratedDatasetGeneratedByDatasetAggregateArgs, 'directed'>>;
  generatedByDatasetConnection?: Resolver<ResolversTypes['CuratedDatasetGeneratedByDatasetConnection'], ParentType, ContextType, RequireFields<CuratedDatasetGeneratedByDatasetConnectionArgs, 'directed'>>;
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

export type CuratedDatasetGeneratedByDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetGeneratedByDatasetConnection'] = ResolversParentTypes['CuratedDatasetGeneratedByDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CuratedDatasetGeneratedByDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetGeneratedByDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetGeneratedByDatasetRelationship'] = ResolversParentTypes['CuratedDatasetGeneratedByDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDatasetGeneratedByDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDatasetGeneratedByDatasetAggregationSelection'] = ResolversParentTypes['CuratedDatasetDatasetGeneratedByDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection'] = ResolversParentTypes['CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
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
  Datasets?: Resolver<Array<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<HarmonizedDatasetDatasetsArgs, 'directed'>>;
  DatasetsAggregate?: Resolver<Maybe<ResolversTypes['HarmonizedDatasetDatasetDatasetsAggregationSelection']>, ParentType, ContextType, RequireFields<HarmonizedDatasetDatasetsAggregateArgs, 'directed'>>;
  DatasetsConnection?: Resolver<ResolversTypes['HarmonizedDatasetDatasetsConnection'], ParentType, ContextType, RequireFields<HarmonizedDatasetDatasetsConnectionArgs, 'directed'>>;
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

export type HarmonizedDatasetDatasetDatasetsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetDatasetDatasetsAggregationSelection'] = ResolversParentTypes['HarmonizedDatasetDatasetDatasetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['HarmonizedDatasetDatasetDatasetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetDatasetDatasetsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetDatasetDatasetsNodeAggregateSelection'] = ResolversParentTypes['HarmonizedDatasetDatasetDatasetsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetDatasetsConnection'] = ResolversParentTypes['HarmonizedDatasetDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['HarmonizedDatasetDatasetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetDatasetsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetDatasetsRelationship'] = ResolversParentTypes['HarmonizedDatasetDatasetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HarmonizedDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HarmonizedDatasetsConnection'] = ResolversParentTypes['HarmonizedDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['HarmonizedDatasetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HasCodebookResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['HasCodebook'] = ResolversParentTypes['HasCodebook']> = {
  __resolveType: TypeResolveFn<'MinioUploadCodeBookDatasetRelationship' | 'DatasetCodeBookRelationship', ParentType, ContextType>;
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
  __resolveType: TypeResolveFn<'MinioUploadRawdataFileDatasetRelationship' | 'DatasetRawdataFileRelationship', ParentType, ContextType>;
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
  codeBookDataset?: Resolver<Maybe<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<MinioUploadCodeBookDatasetArgs, 'directed'>>;
  codeBookDatasetAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadDatasetCodeBookDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadCodeBookDatasetAggregateArgs, 'directed'>>;
  codeBookDatasetConnection?: Resolver<ResolversTypes['MinioUploadCodeBookDatasetConnection'], ParentType, ContextType, RequireFields<MinioUploadCodeBookDatasetConnectionArgs, 'directed'>>;
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
  Dataset?: Resolver<Maybe<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<MinioUploadDatasetArgs, 'directed'>>;
  DatasetAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadDatasetDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadDatasetAggregateArgs, 'directed'>>;
  DatasetConnection?: Resolver<ResolversTypes['MinioUploadDatasetConnection'], ParentType, ContextType, RequireFields<MinioUploadDatasetConnectionArgs, 'directed'>>;
  rawdataFileDataset?: Resolver<Maybe<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<MinioUploadRawdataFileDatasetArgs, 'directed'>>;
  rawdataFileDatasetAggregate?: Resolver<Maybe<ResolversTypes['MinioUploadDatasetRawdataFileDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<MinioUploadRawdataFileDatasetAggregateArgs, 'directed'>>;
  rawdataFileDatasetConnection?: Resolver<ResolversTypes['MinioUploadRawdataFileDatasetConnection'], ParentType, ContextType, RequireFields<MinioUploadRawdataFileDatasetConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadAggregateSelection'] = ResolversParentTypes['MinioUploadAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadCodeBookDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadCodeBookDatasetConnection'] = ResolversParentTypes['MinioUploadCodeBookDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadCodeBookDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadCodeBookDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadCodeBookDatasetRelationship'] = ResolversParentTypes['MinioUploadCodeBookDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
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

export type MinioUploadDatasetCodeBookDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetCodeBookDatasetAggregationSelection'] = ResolversParentTypes['MinioUploadDatasetCodeBookDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadDatasetCodeBookDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetCodeBookDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetCodeBookDatasetNodeAggregateSelection'] = ResolversParentTypes['MinioUploadDatasetCodeBookDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetConnection'] = ResolversParentTypes['MinioUploadDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetDatasetAggregationSelection'] = ResolversParentTypes['MinioUploadDatasetDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadDatasetDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetDatasetNodeAggregateSelection'] = ResolversParentTypes['MinioUploadDatasetDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetRawdataFileDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetRawdataFileDatasetAggregationSelection'] = ResolversParentTypes['MinioUploadDatasetRawdataFileDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetRawdataFileDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection'] = ResolversParentTypes['MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadDatasetRelationship'] = ResolversParentTypes['MinioUploadDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawdataFileDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawdataFileDatasetConnection'] = ResolversParentTypes['MinioUploadRawdataFileDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MinioUploadRawdataFileDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MinioUploadRawdataFileDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['MinioUploadRawdataFileDatasetRelationship'] = ResolversParentTypes['MinioUploadRawdataFileDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
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
  createCuratedDatasetFromCSVCodebook?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetFromCsvCodebookArgs, 'allowedSite' | 'allowedStudy' | 'name' | 'DatasetID'>>;
  createCuratedDatasetFromDataset?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetFromDatasetArgs, 'description' | 'name' | 'DatasetID'>>;
  createCuratedDatasetFromDatasetNew?: Resolver<Maybe<ResolversTypes['CuratedDataset']>, ParentType, ContextType, RequireFields<MutationCreateCuratedDatasetFromDatasetNewArgs, 'codebookObjectName' | 'DatasetID' | 'rawObjectName'>>;
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
  createDataset?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType, RequireFields<MutationcreateDatasetArgs, 'description' | 'name' | 'studyID' | 'studySiteID'>>;
  createDatasets?: Resolver<ResolversTypes['CreateDatasetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateDatasetsArgs, 'input'>>;
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
  deleteDatasets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteDatasetsArgs>>;
  deleteStudies?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteStudiesArgs>>;
  deleteTasks?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteTasksArgs>>;
  funnelTaskExportCuratedDataset?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationFunnelTaskExportCuratedDatasetArgs, 'curatedDatasetID' | 'taskID'>>;
  funnelTaskExportDataVariableFieldDefinitions?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<MutationFunnelTaskExportDataVariableFieldDefinitionsArgs, 'dataVariableFieldDefinitionIDs' | 'taskID'>>;
  keycloakAcceptTOS?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  keycloakClientsCreateRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloakClientsCreateRoleArgs, 'clientID' | 'roleName'>>;
  keycloakClientsDelRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloakClientsDelRoleArgs, 'clientID' | 'roleName'>>;
  keycloakSyncUsers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationKeycloakSyncUsersArgs>>;
  keycloakUsersAddClientRoleMappings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloakUsersAddClientRoleMappingsArgs, 'clientID' | 'roleID' | 'roleName' | 'userID'>>;
  keycloakUsersCreate?: Resolver<Maybe<ResolversTypes['ClientUser']>, ParentType, ContextType, RequireFields<MutationKeycloakUsersCreateArgs, 'email'>>;
  keycloakUsersDelClientRoleMappings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloakUsersDelClientRoleMappingsArgs, 'clientID' | 'roleID' | 'roleName' | 'userID'>>;
  keycloakUsersDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationKeycloakUsersDeleteArgs, 'userID'>>;
  me?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType>;
  minioDelete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationMinioDeleteArgs, 'bucketName' | 'objectName'>>;
  minioUploadFile?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType, RequireFields<MutationMinioUploadFileArgs, 'bucketName' | 'file' | 'DatasetID'>>;
  nestedCuratedDatasetDelete?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedCuratedDatasetDeleteArgs, 'id'>>;
  nestedCuratedDatasetProperty?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedCuratedDatasetPropertyArgs, 'id' | 'operation' | 'property' | 'value'>>;
  nestedDatasetDelete?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedDatasetDeleteArgs, 'id'>>;
  nestedDatasetProperty?: Resolver<Maybe<ResolversTypes['Neo4jUpdateStats']>, ParentType, ContextType, RequireFields<MutationNestedDatasetPropertyArgs, 'id' | 'operation' | 'property' | 'value'>>;
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
  updateDatasets?: Resolver<ResolversTypes['UpdateDatasetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateDatasetsArgs>>;
  updateStudies?: Resolver<ResolversTypes['UpdateStudiesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateStudiesArgs>>;
  updateTasks?: Resolver<ResolversTypes['UpdateTasksMutationResponse'], ParentType, ContextType, Partial<MutationUpdateTasksArgs>>;
  validateCodebook?: Resolver<Maybe<ResolversTypes['FileValidation']>, ParentType, ContextType, RequireFields<MutationValidateCodebookArgs, 'objectName' | 'DatasetID'>>;
  validateRawdatafile?: Resolver<Maybe<ResolversTypes['FileValidation']>, ParentType, ContextType, RequireFields<MutationValidateRawdatafileArgs, 'objectName' | 'DatasetID'>>;
  validateRawfileCodebookPair?: Resolver<Maybe<ResolversTypes['FileValidation']>, ParentType, ContextType, RequireFields<MutationValidateRawfileCodebookPairArgs, 'objectNameCB' | 'objectNameRF' | 'DatasetIDCB' | 'DatasetIDRF'>>;
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
  keycloakClientsFind?: Resolver<Maybe<Array<Maybe<ResolversTypes['Client']>>>, ParentType, ContextType>;
  keycloakClientsFindRole?: Resolver<Maybe<ResolversTypes['ClientRole']>, ParentType, ContextType, RequireFields<QueryKeycloakClientsFindRoleArgs, 'clientID' | 'roleName'>>;
  keycloakUsers?: Resolver<Array<ResolversTypes['KeycloakUser']>, ParentType, ContextType, Partial<QueryKeycloakUsersArgs>>;
  keycloakUsersAggregate?: Resolver<ResolversTypes['KeycloakUserAggregateSelection'], ParentType, ContextType, Partial<QueryKeycloakUsersAggregateArgs>>;
  keycloakUsersConnection?: Resolver<ResolversTypes['KeycloakUsersConnection'], ParentType, ContextType, Partial<QueryKeycloakUsersConnectionArgs>>;
  keycloakUsersFind?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientUser']>>>, ParentType, ContextType>;
  keycloakUsersListAvailableClientRoleMappings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientRole']>>>, ParentType, ContextType, RequireFields<QueryKeycloakUsersListAvailableClientRoleMappingsArgs, 'clientID'>>;
  keycloakUsersListClientRoleMappings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClientRole']>>>, ParentType, ContextType, RequireFields<QueryKeycloakUsersListClientRoleMappingsArgs, 'clientID'>>;
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
  DatasetCalendarHeatmap?: Resolver<Array<ResolversTypes['CalendarHeatmapDatum']>, ParentType, ContextType, RequireFields<QueryDatasetCalendarHeatmapArgs, 'endDate' | 'startDate'>>;
  Datasets?: Resolver<Array<ResolversTypes['Dataset']>, ParentType, ContextType, Partial<QueryDatasetsArgs>>;
  DatasetsAggregate?: Resolver<ResolversTypes['DatasetAggregateSelection'], ParentType, ContextType, Partial<QueryDatasetsAggregateArgs>>;
  DatasetsConnection?: Resolver<ResolversTypes['DatasetsConnection'], ParentType, ContextType, Partial<QueryDatasetsConnectionArgs>>;
  searchGeographyCities?: Resolver<Array<ResolversTypes['GeographyCity']>, ParentType, ContextType, RequireFields<QuerySearchGeographyCitiesArgs, 'name'>>;
  studies?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType, Partial<QueryStudiesArgs>>;
  studiesAggregate?: Resolver<ResolversTypes['StudyAggregateSelection'], ParentType, ContextType, Partial<QueryStudiesAggregateArgs>>;
  studiesConnection?: Resolver<ResolversTypes['StudiesConnection'], ParentType, ContextType, Partial<QueryStudiesConnectionArgs>>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryTasksArgs>>;
  tasksAggregate?: Resolver<ResolversTypes['TaskAggregateSelection'], ParentType, ContextType, Partial<QueryTasksAggregateArgs>>;
  tasksConnection?: Resolver<ResolversTypes['TasksConnection'], ParentType, ContextType, Partial<QueryTasksConnectionArgs>>;
};

export type DatasetResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Dataset'] = ResolversParentTypes['Dataset']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  codeBook?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<DatasetCodeBookArgs, 'directed'>>;
  codeBookAggregate?: Resolver<Maybe<ResolversTypes['DatasetMinioUploadCodeBookAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetCodeBookAggregateArgs, 'directed'>>;
  codeBookConnection?: Resolver<ResolversTypes['DatasetCodeBookConnection'], ParentType, ContextType, RequireFields<DatasetCodeBookConnectionArgs, 'directed'>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  files?: Resolver<Array<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<DatasetFilesArgs, 'directed'>>;
  filesAggregate?: Resolver<Maybe<ResolversTypes['DatasetMinioUploadFilesAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetFilesAggregateArgs, 'directed'>>;
  filesConnection?: Resolver<ResolversTypes['DatasetFilesConnection'], ParentType, ContextType, RequireFields<DatasetFilesConnectionArgs, 'directed'>>;
  fromStudy?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<DatasetFromStudyArgs, 'directed'>>;
  fromStudyAggregate?: Resolver<Maybe<ResolversTypes['DatasetStudyFromStudyAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetFromStudyAggregateArgs, 'directed'>>;
  fromStudyConnection?: Resolver<ResolversTypes['DatasetFromStudyConnection'], ParentType, ContextType, RequireFields<DatasetFromStudyConnectionArgs, 'directed'>>;
  funnelTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<DatasetFunnelTasksArgs, 'directed'>>;
  funnelTasksAggregate?: Resolver<Maybe<ResolversTypes['DatasetTaskFunnelTasksAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetFunnelTasksAggregateArgs, 'directed'>>;
  funnelTasksConnection?: Resolver<ResolversTypes['DatasetFunnelTasksConnection'], ParentType, ContextType, RequireFields<DatasetFunnelTasksConnectionArgs, 'directed'>>;
  generatedCuratedDatasets?: Resolver<Array<ResolversTypes['CuratedDataset']>, ParentType, ContextType, RequireFields<DatasetGeneratedCuratedDatasetsArgs, 'directed'>>;
  generatedCuratedDatasetsAggregate?: Resolver<Maybe<ResolversTypes['DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetGeneratedCuratedDatasetsAggregateArgs, 'directed'>>;
  generatedCuratedDatasetsConnection?: Resolver<ResolversTypes['DatasetGeneratedCuratedDatasetsConnection'], ParentType, ContextType, RequireFields<DatasetGeneratedCuratedDatasetsConnectionArgs, 'directed'>>;
  minioBucket?: Resolver<Maybe<ResolversTypes['MinioBucket']>, ParentType, ContextType, RequireFields<DatasetMinioBucketArgs, 'directed'>>;
  minioBucketAggregate?: Resolver<Maybe<ResolversTypes['DatasetMinioBucketMinioBucketAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetMinioBucketAggregateArgs, 'directed'>>;
  minioBucketConnection?: Resolver<ResolversTypes['DatasetMinioBucketConnection'], ParentType, ContextType, RequireFields<DatasetMinioBucketConnectionArgs, 'directed'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rawdataFile?: Resolver<Maybe<ResolversTypes['MinioUpload']>, ParentType, ContextType, RequireFields<DatasetRawdataFileArgs, 'directed'>>;
  rawdataFileAggregate?: Resolver<Maybe<ResolversTypes['DatasetMinioUploadRawdataFileAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetRawdataFileAggregateArgs, 'directed'>>;
  rawdataFileConnection?: Resolver<ResolversTypes['DatasetRawdataFileConnection'], ParentType, ContextType, RequireFields<DatasetRawdataFileConnectionArgs, 'directed'>>;
  studySite?: Resolver<Maybe<ResolversTypes['GeographyCity']>, ParentType, ContextType, RequireFields<DatasetStudySiteArgs, 'directed'>>;
  studySiteAggregate?: Resolver<Maybe<ResolversTypes['DatasetGeographyCityStudySiteAggregationSelection']>, ParentType, ContextType, RequireFields<DatasetStudySiteAggregateArgs, 'directed'>>;
  studySiteConnection?: Resolver<ResolversTypes['DatasetStudySiteConnection'], ParentType, ContextType, RequireFields<DatasetStudySiteConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetAggregateSelection'] = ResolversParentTypes['DatasetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetCodeBookConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetCodeBookConnection'] = ResolversParentTypes['DatasetCodeBookConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetCodeBookRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetCodeBookRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetCodeBookRelationship'] = ResolversParentTypes['DatasetCodeBookRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection'] = ResolversParentTypes['DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection'] = ResolversParentTypes['DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection']> = {
  curatedDatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetEdgeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetEdge'] = ResolversParentTypes['DatasetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetFilesConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetFilesConnection'] = ResolversParentTypes['DatasetFilesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetFilesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetFilesRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetFilesRelationship'] = ResolversParentTypes['DatasetFilesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetFromStudyConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetFromStudyConnection'] = ResolversParentTypes['DatasetFromStudyConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetFromStudyRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetFromStudyRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetFromStudyRelationship'] = ResolversParentTypes['DatasetFromStudyRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetFunnelTasksConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetFunnelTasksConnection'] = ResolversParentTypes['DatasetFunnelTasksConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetFunnelTasksRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetFunnelTasksRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetFunnelTasksRelationship'] = ResolversParentTypes['DatasetFunnelTasksRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetGeneratedCuratedDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetGeneratedCuratedDatasetsConnection'] = ResolversParentTypes['DatasetGeneratedCuratedDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetGeneratedCuratedDatasetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetGeneratedCuratedDatasetsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetGeneratedCuratedDatasetsRelationship'] = ResolversParentTypes['DatasetGeneratedCuratedDatasetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CuratedDataset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetGeographyCityStudySiteAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetGeographyCityStudySiteAggregationSelection'] = ResolversParentTypes['DatasetGeographyCityStudySiteAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetGeographyCityStudySiteNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetGeographyCityStudySiteNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetGeographyCityStudySiteNodeAggregateSelection'] = ResolversParentTypes['DatasetGeographyCityStudySiteNodeAggregateSelection']> = {
  city?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  cityID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['FloatAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioBucketConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioBucketConnection'] = ResolversParentTypes['DatasetMinioBucketConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetMinioBucketRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioBucketMinioBucketAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioBucketMinioBucketAggregationSelection'] = ResolversParentTypes['DatasetMinioBucketMinioBucketAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetMinioBucketMinioBucketNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioBucketMinioBucketNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioBucketMinioBucketNodeAggregateSelection'] = ResolversParentTypes['DatasetMinioBucketMinioBucketNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioBucketRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioBucketRelationship'] = ResolversParentTypes['DatasetMinioBucketRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioBucket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioUploadCodeBookAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioUploadCodeBookAggregationSelection'] = ResolversParentTypes['DatasetMinioUploadCodeBookAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetMinioUploadCodeBookNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioUploadCodeBookNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioUploadCodeBookNodeAggregateSelection'] = ResolversParentTypes['DatasetMinioUploadCodeBookNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioUploadFilesAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioUploadFilesAggregationSelection'] = ResolversParentTypes['DatasetMinioUploadFilesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetMinioUploadFilesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioUploadFilesNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioUploadFilesNodeAggregateSelection'] = ResolversParentTypes['DatasetMinioUploadFilesNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioUploadRawdataFileAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioUploadRawdataFileAggregationSelection'] = ResolversParentTypes['DatasetMinioUploadRawdataFileAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetMinioUploadRawdataFileNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetMinioUploadRawdataFileNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetMinioUploadRawdataFileNodeAggregateSelection'] = ResolversParentTypes['DatasetMinioUploadRawdataFileNodeAggregateSelection']> = {
  bucketName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  objectName?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetRawdataFileConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetRawdataFileConnection'] = ResolversParentTypes['DatasetRawdataFileConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetRawdataFileRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetRawdataFileRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetRawdataFileRelationship'] = ResolversParentTypes['DatasetRawdataFileRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['MinioUpload'], ParentType, ContextType>;
  validated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetStudyFromStudyAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetStudyFromStudyAggregationSelection'] = ResolversParentTypes['DatasetStudyFromStudyAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetStudyFromStudyNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetStudyFromStudyNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetStudyFromStudyNodeAggregateSelection'] = ResolversParentTypes['DatasetStudyFromStudyNodeAggregateSelection']> = {
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  studyID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetStudySiteConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetStudySiteConnection'] = ResolversParentTypes['DatasetStudySiteConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetStudySiteRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetStudySiteRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetStudySiteRelationship'] = ResolversParentTypes['DatasetStudySiteRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['GeographyCity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetTaskFunnelTasksAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetTaskFunnelTasksAggregationSelection'] = ResolversParentTypes['DatasetTaskFunnelTasksAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['DatasetTaskFunnelTasksNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetTaskFunnelTasksNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetTaskFunnelTasksNodeAggregateSelection'] = ResolversParentTypes['DatasetTaskFunnelTasksNodeAggregateSelection']> = {
  creationTime?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNullable'], ParentType, ContextType>;
  taskID?: Resolver<ResolversTypes['IDAggregateSelectionNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DatasetsConnection'] = ResolversParentTypes['DatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['DatasetEdge']>, ParentType, ContextType>;
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

export type StudyResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  allowedSites?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  allowedStudies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Datasets?: Resolver<Array<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<StudyDatasetsArgs, 'directed'>>;
  DatasetsAggregate?: Resolver<Maybe<ResolversTypes['StudyDatasetDatasetsAggregationSelection']>, ParentType, ContextType, RequireFields<StudyDatasetsAggregateArgs, 'directed'>>;
  DatasetsConnection?: Resolver<ResolversTypes['StudyDatasetsConnection'], ParentType, ContextType, RequireFields<StudyDatasetsConnectionArgs, 'directed'>>;
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
  node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
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

export type StudyDatasetDatasetsAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyDatasetDatasetsAggregationSelection'] = ResolversParentTypes['StudyDatasetDatasetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['StudyDatasetDatasetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyDatasetDatasetsNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyDatasetDatasetsNodeAggregateSelection'] = ResolversParentTypes['StudyDatasetDatasetsNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyDatasetsConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyDatasetsConnection'] = ResolversParentTypes['StudyDatasetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['StudyDatasetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyDatasetsRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['StudyDatasetsRelationship'] = ResolversParentTypes['StudyDatasetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
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
  fromDataset?: Resolver<Maybe<ResolversTypes['Dataset']>, ParentType, ContextType, RequireFields<TaskFromDatasetArgs, 'directed'>>;
  fromDatasetAggregate?: Resolver<Maybe<ResolversTypes['TaskDatasetFromDatasetAggregationSelection']>, ParentType, ContextType, RequireFields<TaskFromDatasetAggregateArgs, 'directed'>>;
  fromDatasetConnection?: Resolver<ResolversTypes['TaskFromDatasetConnection'], ParentType, ContextType, RequireFields<TaskFromDatasetConnectionArgs, 'directed'>>;
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

export type TaskFromDatasetConnectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskFromDatasetConnection'] = ResolversParentTypes['TaskFromDatasetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['TaskFromDatasetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskFromDatasetRelationshipResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskFromDatasetRelationship'] = ResolversParentTypes['TaskFromDatasetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Dataset'], ParentType, ContextType>;
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

export type TaskDatasetFromDatasetAggregationSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskDatasetFromDatasetAggregationSelection'] = ResolversParentTypes['TaskDatasetFromDatasetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TaskDatasetFromDatasetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskDatasetFromDatasetNodeAggregateSelectionResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['TaskDatasetFromDatasetNodeAggregateSelection'] = ResolversParentTypes['TaskDatasetFromDatasetNodeAggregateSelection']> = {
  createdAt?: Resolver<ResolversTypes['DateTimeAggregateSelectionNonNullable'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelectionNonNullable'], ParentType, ContextType>;
  DatasetID?: Resolver<ResolversTypes['IDAggregateSelectionNonNullable'], ParentType, ContextType>;
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

export type UpdateDatasetsMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateDatasetsMutationResponse'] = ResolversParentTypes['UpdateDatasetsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  Datasets?: Resolver<Array<ResolversTypes['Dataset']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateStudiesMutationResponseResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UpdateStudiesMutationResponse'] = ResolversParentTypes['UpdateStudiesMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  studies?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
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
  CreateDatasetsMutationResponse?: CreateDatasetsMutationResponseResolvers<ContextType>;
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
  CuratedDatasetGeneratedByDatasetConnection?: CuratedDatasetGeneratedByDatasetConnectionResolvers<ContextType>;
  CuratedDatasetGeneratedByDatasetRelationship?: CuratedDatasetGeneratedByDatasetRelationshipResolvers<ContextType>;
  CuratedDatasetDatasetGeneratedByDatasetAggregationSelection?: CuratedDatasetDatasetGeneratedByDatasetAggregationSelectionResolvers<ContextType>;
  CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelection?: CuratedDatasetDatasetGeneratedByDatasetNodeAggregateSelectionResolvers<ContextType>;
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
  HarmonizedDatasetDatasetDatasetsAggregationSelection?: HarmonizedDatasetDatasetDatasetsAggregationSelectionResolvers<ContextType>;
  HarmonizedDatasetDatasetDatasetsNodeAggregateSelection?: HarmonizedDatasetDatasetDatasetsNodeAggregateSelectionResolvers<ContextType>;
  HarmonizedDatasetDatasetsConnection?: HarmonizedDatasetDatasetsConnectionResolvers<ContextType>;
  HarmonizedDatasetDatasetsRelationship?: HarmonizedDatasetDatasetsRelationshipResolvers<ContextType>;
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
  MinioUploadCodeBookDatasetConnection?: MinioUploadCodeBookDatasetConnectionResolvers<ContextType>;
  MinioUploadCodeBookDatasetRelationship?: MinioUploadCodeBookDatasetRelationshipResolvers<ContextType>;
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
  MinioUploadDatasetCodeBookDatasetAggregationSelection?: MinioUploadDatasetCodeBookDatasetAggregationSelectionResolvers<ContextType>;
  MinioUploadDatasetCodeBookDatasetNodeAggregateSelection?: MinioUploadDatasetCodeBookDatasetNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadDatasetConnection?: MinioUploadDatasetConnectionResolvers<ContextType>;
  MinioUploadDatasetDatasetAggregationSelection?: MinioUploadDatasetDatasetAggregationSelectionResolvers<ContextType>;
  MinioUploadDatasetDatasetNodeAggregateSelection?: MinioUploadDatasetDatasetNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadDatasetRawdataFileDatasetAggregationSelection?: MinioUploadDatasetRawdataFileDatasetAggregationSelectionResolvers<ContextType>;
  MinioUploadDatasetRawdataFileDatasetNodeAggregateSelection?: MinioUploadDatasetRawdataFileDatasetNodeAggregateSelectionResolvers<ContextType>;
  MinioUploadDatasetRelationship?: MinioUploadDatasetRelationshipResolvers<ContextType>;
  MinioUploadRawdataFileDatasetConnection?: MinioUploadRawdataFileDatasetConnectionResolvers<ContextType>;
  MinioUploadRawdataFileDatasetRelationship?: MinioUploadRawdataFileDatasetRelationshipResolvers<ContextType>;
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
  Dataset?: DatasetResolvers<ContextType>;
  DatasetAggregateSelection?: DatasetAggregateSelectionResolvers<ContextType>;
  DatasetCodeBookConnection?: DatasetCodeBookConnectionResolvers<ContextType>;
  DatasetCodeBookRelationship?: DatasetCodeBookRelationshipResolvers<ContextType>;
  DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelection?: DatasetCuratedDatasetGeneratedCuratedDatasetsAggregationSelectionResolvers<ContextType>;
  DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelection?: DatasetCuratedDatasetGeneratedCuratedDatasetsNodeAggregateSelectionResolvers<ContextType>;
  DatasetEdge?: DatasetEdgeResolvers<ContextType>;
  DatasetFilesConnection?: DatasetFilesConnectionResolvers<ContextType>;
  DatasetFilesRelationship?: DatasetFilesRelationshipResolvers<ContextType>;
  DatasetFromStudyConnection?: DatasetFromStudyConnectionResolvers<ContextType>;
  DatasetFromStudyRelationship?: DatasetFromStudyRelationshipResolvers<ContextType>;
  DatasetFunnelTasksConnection?: DatasetFunnelTasksConnectionResolvers<ContextType>;
  DatasetFunnelTasksRelationship?: DatasetFunnelTasksRelationshipResolvers<ContextType>;
  DatasetGeneratedCuratedDatasetsConnection?: DatasetGeneratedCuratedDatasetsConnectionResolvers<ContextType>;
  DatasetGeneratedCuratedDatasetsRelationship?: DatasetGeneratedCuratedDatasetsRelationshipResolvers<ContextType>;
  DatasetGeographyCityStudySiteAggregationSelection?: DatasetGeographyCityStudySiteAggregationSelectionResolvers<ContextType>;
  DatasetGeographyCityStudySiteNodeAggregateSelection?: DatasetGeographyCityStudySiteNodeAggregateSelectionResolvers<ContextType>;
  DatasetMinioBucketConnection?: DatasetMinioBucketConnectionResolvers<ContextType>;
  DatasetMinioBucketMinioBucketAggregationSelection?: DatasetMinioBucketMinioBucketAggregationSelectionResolvers<ContextType>;
  DatasetMinioBucketMinioBucketNodeAggregateSelection?: DatasetMinioBucketMinioBucketNodeAggregateSelectionResolvers<ContextType>;
  DatasetMinioBucketRelationship?: DatasetMinioBucketRelationshipResolvers<ContextType>;
  DatasetMinioUploadCodeBookAggregationSelection?: DatasetMinioUploadCodeBookAggregationSelectionResolvers<ContextType>;
  DatasetMinioUploadCodeBookNodeAggregateSelection?: DatasetMinioUploadCodeBookNodeAggregateSelectionResolvers<ContextType>;
  DatasetMinioUploadFilesAggregationSelection?: DatasetMinioUploadFilesAggregationSelectionResolvers<ContextType>;
  DatasetMinioUploadFilesNodeAggregateSelection?: DatasetMinioUploadFilesNodeAggregateSelectionResolvers<ContextType>;
  DatasetMinioUploadRawdataFileAggregationSelection?: DatasetMinioUploadRawdataFileAggregationSelectionResolvers<ContextType>;
  DatasetMinioUploadRawdataFileNodeAggregateSelection?: DatasetMinioUploadRawdataFileNodeAggregateSelectionResolvers<ContextType>;
  DatasetRawdataFileConnection?: DatasetRawdataFileConnectionResolvers<ContextType>;
  DatasetRawdataFileRelationship?: DatasetRawdataFileRelationshipResolvers<ContextType>;
  DatasetStudyFromStudyAggregationSelection?: DatasetStudyFromStudyAggregationSelectionResolvers<ContextType>;
  DatasetStudyFromStudyNodeAggregateSelection?: DatasetStudyFromStudyNodeAggregateSelectionResolvers<ContextType>;
  DatasetStudySiteConnection?: DatasetStudySiteConnectionResolvers<ContextType>;
  DatasetStudySiteRelationship?: DatasetStudySiteRelationshipResolvers<ContextType>;
  DatasetTaskFunnelTasksAggregationSelection?: DatasetTaskFunnelTasksAggregationSelectionResolvers<ContextType>;
  DatasetTaskFunnelTasksNodeAggregateSelection?: DatasetTaskFunnelTasksNodeAggregateSelectionResolvers<ContextType>;
  DatasetsConnection?: DatasetsConnectionResolvers<ContextType>;
  StringAggregateSelectionNonNullable?: StringAggregateSelectionNonNullableResolvers<ContextType>;
  StringAggregateSelectionNullable?: StringAggregateSelectionNullableResolvers<ContextType>;
  StudiesConnection?: StudiesConnectionResolvers<ContextType>;
  Project?: StudyResolvers<ContextType>;
  StudyAggregateSelection?: StudyAggregateSelectionResolvers<ContextType>;
  StudyEdge?: StudyEdgeResolvers<ContextType>;
  StudyGeographyCityStudySitesAggregationSelection?: StudyGeographyCityStudySitesAggregationSelectionResolvers<ContextType>;
  StudyGeographyCityStudySitesNodeAggregateSelection?: StudyGeographyCityStudySitesNodeAggregateSelectionResolvers<ContextType>;
  StudyDatasetDatasetsAggregationSelection?: StudyDatasetDatasetsAggregationSelectionResolvers<ContextType>;
  StudyDatasetDatasetsNodeAggregateSelection?: StudyDatasetDatasetsNodeAggregateSelectionResolvers<ContextType>;
  StudyDatasetsConnection?: StudyDatasetsConnectionResolvers<ContextType>;
  StudyDatasetsRelationship?: StudyDatasetsRelationshipResolvers<ContextType>;
  StudyStudySitesConnection?: StudyStudySitesConnectionResolvers<ContextType>;
  StudyStudySitesRelationship?: StudyStudySitesRelationshipResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskAggregateSelection?: TaskAggregateSelectionResolvers<ContextType>;
  TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelection?: TaskCuratedDatasetGeneratedCuratedDatasetAggregationSelectionResolvers<ContextType>;
  TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection?: TaskCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelectionResolvers<ContextType>;
  TaskEdge?: TaskEdgeResolvers<ContextType>;
  TaskFromCuratedDatasetConnection?: TaskFromCuratedDatasetConnectionResolvers<ContextType>;
  TaskFromCuratedDatasetRelationship?: TaskFromCuratedDatasetRelationshipResolvers<ContextType>;
  TaskFromDatasetConnection?: TaskFromDatasetConnectionResolvers<ContextType>;
  TaskFromDatasetRelationship?: TaskFromDatasetRelationshipResolvers<ContextType>;
  TaskGeneratedCuratedDatasetConnection?: TaskGeneratedCuratedDatasetConnectionResolvers<ContextType>;
  TaskGeneratedCuratedDatasetRelationship?: TaskGeneratedCuratedDatasetRelationshipResolvers<ContextType>;
  TaskGeneratedExportConnection?: TaskGeneratedExportConnectionResolvers<ContextType>;
  TaskGeneratedExportRelationship?: TaskGeneratedExportRelationshipResolvers<ContextType>;
  TaskMinioUploadGeneratedExportAggregationSelection?: TaskMinioUploadGeneratedExportAggregationSelectionResolvers<ContextType>;
  TaskMinioUploadGeneratedExportNodeAggregateSelection?: TaskMinioUploadGeneratedExportNodeAggregateSelectionResolvers<ContextType>;
  TaskDatasetFromDatasetAggregationSelection?: TaskDatasetFromDatasetAggregationSelectionResolvers<ContextType>;
  TaskDatasetFromDatasetNodeAggregateSelection?: TaskDatasetFromDatasetNodeAggregateSelectionResolvers<ContextType>;
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
  UpdateDatasetsMutationResponse?: UpdateDatasetsMutationResponseResolvers<ContextType>;
  UpdateStudiesMutationResponse?: UpdateStudiesMutationResponseResolvers<ContextType>;
  UpdateTasksMutationResponse?: UpdateTasksMutationResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = MyContextType> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  hasPermission?: HasPermissionDirectiveResolver<any, any, ContextType>;
  hasRole?: HasRoleDirectiveResolver<any, any, ContextType>;
};
