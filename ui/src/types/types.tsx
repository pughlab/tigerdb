import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  clientId: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
};

export type ClientAggregateSelection = {
  __typename?: 'ClientAggregateSelection';
  clientId: StringAggregateSelectionNullable;
  count: Scalars['Int'];
  id: IdAggregateSelectionNullable;
};

export type ClientCreateInput = {
  clientId: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};

export type ClientEdge = {
  __typename?: 'ClientEdge';
  cursor: Scalars['String'];
  node: Client;
};

export type ClientOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClientSort objects to sort Clients by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<ClientSort>>;
};

export type ClientRole = {
  __typename?: 'ClientRole';
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
};

export type ClientRoleAggregateSelection = {
  __typename?: 'ClientRoleAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
};

export type ClientRoleCreateInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
};

export type ClientRoleEdge = {
  __typename?: 'ClientRoleEdge';
  cursor: Scalars['String'];
  node: ClientRole;
};

export type ClientRoleOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClientRoleSort objects to sort ClientRoles by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<ClientRoleSort>>;
};

/** Fields to sort ClientRoles by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientRoleSort object. */
export type ClientRoleSort = {
  id: InputMaybe<SortDirection>;
  name: InputMaybe<SortDirection>;
};

export type ClientRoleUpdateInput = {
  id: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
};

export type ClientRoleWhere = {
  AND: InputMaybe<Array<ClientRoleWhere>>;
  OR: InputMaybe<Array<ClientRoleWhere>>;
  id: InputMaybe<Scalars['ID']>;
  id_CONTAINS: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  name_CONTAINS: InputMaybe<Scalars['String']>;
  name_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  name_STARTS_WITH: InputMaybe<Scalars['String']>;
};

export type ClientRolesConnection = {
  __typename?: 'ClientRolesConnection';
  edges: Array<ClientRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Fields to sort Clients by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientSort object. */
export type ClientSort = {
  clientId: InputMaybe<SortDirection>;
  id: InputMaybe<SortDirection>;
};

export type ClientUpdateInput = {
  clientId: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};

export type ClientUser = {
  __typename?: 'ClientUser';
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  username: Maybe<Scalars['String']>;
};

export type ClientUserAggregateSelection = {
  __typename?: 'ClientUserAggregateSelection';
  count: Scalars['Int'];
  email: StringAggregateSelectionNullable;
  id: IdAggregateSelectionNullable;
  username: StringAggregateSelectionNullable;
};

export type ClientUserCreateInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  username: InputMaybe<Scalars['String']>;
};

export type ClientUserEdge = {
  __typename?: 'ClientUserEdge';
  cursor: Scalars['String'];
  node: ClientUser;
};

export type ClientUserOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more ClientUserSort objects to sort ClientUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<ClientUserSort>>;
};

/** Fields to sort ClientUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ClientUserSort object. */
export type ClientUserSort = {
  email: InputMaybe<SortDirection>;
  id: InputMaybe<SortDirection>;
  username: InputMaybe<SortDirection>;
};

export type ClientUserUpdateInput = {
  email: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  username: InputMaybe<Scalars['String']>;
};

export type ClientUserWhere = {
  AND: InputMaybe<Array<ClientUserWhere>>;
  OR: InputMaybe<Array<ClientUserWhere>>;
  email: InputMaybe<Scalars['String']>;
  email_CONTAINS: InputMaybe<Scalars['String']>;
  email_ENDS_WITH: InputMaybe<Scalars['String']>;
  email_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  email_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  email_STARTS_WITH: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_CONTAINS: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH: InputMaybe<Scalars['ID']>;
  username: InputMaybe<Scalars['String']>;
  username_CONTAINS: InputMaybe<Scalars['String']>;
  username_ENDS_WITH: InputMaybe<Scalars['String']>;
  username_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_NOT: InputMaybe<Scalars['String']>;
  username_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  username_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  username_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  username_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  username_STARTS_WITH: InputMaybe<Scalars['String']>;
};

export type ClientUsersConnection = {
  __typename?: 'ClientUsersConnection';
  edges: Array<ClientUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ClientWhere = {
  AND: InputMaybe<Array<ClientWhere>>;
  OR: InputMaybe<Array<ClientWhere>>;
  clientId: InputMaybe<Scalars['String']>;
  clientId_CONTAINS: InputMaybe<Scalars['String']>;
  clientId_ENDS_WITH: InputMaybe<Scalars['String']>;
  clientId_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId_NOT: InputMaybe<Scalars['String']>;
  clientId_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  clientId_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  clientId_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  clientId_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  clientId_STARTS_WITH: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_CONTAINS: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH: InputMaybe<Scalars['ID']>;
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
  bookmark: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
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
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  curatedDatasetID: Scalars['ID'];
  dataVariables: Array<DataVariable>;
  dataVariablesAggregate: Maybe<CuratedDatasetDataVariableDataVariablesAggregationSelection>;
  dataVariablesConnection: CuratedDatasetDataVariablesConnection;
  description: Scalars['String'];
  fieldDefinitions: Array<DataVariableFieldDefinition>;
  fieldDefinitionsAggregate: Maybe<CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection>;
  fieldDefinitionsConnection: CuratedDatasetFieldDefinitionsConnection;
  generatedByRawDataset: Maybe<RawDataset>;
  generatedByRawDatasetAggregate: Maybe<CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection>;
  generatedByRawDatasetConnection: CuratedDatasetGeneratedByRawDatasetConnection;
  name: Scalars['String'];
};


export type CuratedDatasetDataVariablesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<DataVariableOptions>;
  where: InputMaybe<DataVariableWhere>;
};


export type CuratedDatasetDataVariablesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<DataVariableWhere>;
};


export type CuratedDatasetDataVariablesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<CuratedDatasetDataVariablesConnectionSort>>;
  where: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};


export type CuratedDatasetFieldDefinitionsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<DataVariableFieldDefinitionOptions>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type CuratedDatasetFieldDefinitionsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type CuratedDatasetFieldDefinitionsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectionSort>>;
  where: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};


export type CuratedDatasetGeneratedByRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<RawDatasetOptions>;
  where: InputMaybe<RawDatasetWhere>;
};


export type CuratedDatasetGeneratedByRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<RawDatasetWhere>;
};


export type CuratedDatasetGeneratedByRawDatasetConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetConnectionSort>>;
  where: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetAggregateSelection = {
  __typename?: 'CuratedDatasetAggregateSelection';
  count: Scalars['Int'];
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type CuratedDatasetConnectInput = {
  dataVariables: InputMaybe<Array<CuratedDatasetDataVariablesConnectFieldInput>>;
  fieldDefinitions: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectFieldInput>>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectFieldInput>;
};

export type CuratedDatasetConnectOrCreateInput = {
  dataVariables: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  fieldDefinitions: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput>;
};

export type CuratedDatasetConnectOrCreateWhere = {
  node: CuratedDatasetUniqueWhere;
};

export type CuratedDatasetConnectWhere = {
  node: CuratedDatasetWhere;
};

export type CuratedDatasetCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataVariables: InputMaybe<CuratedDatasetDataVariablesFieldInput>;
  description: Scalars['String'];
  fieldDefinitions: InputMaybe<CuratedDatasetFieldDefinitionsFieldInput>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetFieldInput>;
  name: Scalars['String'];
};

export type CuratedDatasetDataVariableDataVariablesAggregationSelection = {
  __typename?: 'CuratedDatasetDataVariableDataVariablesAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<CuratedDatasetDataVariableDataVariablesNodeAggregateSelection>;
};

export type CuratedDatasetDataVariableDataVariablesNodeAggregateSelection = {
  __typename?: 'CuratedDatasetDataVariableDataVariablesNodeAggregateSelection';
  dataVariableID: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection = {
  __typename?: 'CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection>;
};

export type CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection = {
  __typename?: 'CuratedDatasetDataVariableFieldDefinitionFieldDefinitionsNodeAggregateSelection';
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetDataVariablesAggregateInput = {
  AND: InputMaybe<Array<CuratedDatasetDataVariablesAggregateInput>>;
  OR: InputMaybe<Array<CuratedDatasetDataVariablesAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<CuratedDatasetDataVariablesNodeAggregationWhereInput>;
};

export type CuratedDatasetDataVariablesConnectFieldInput = {
  connect: InputMaybe<Array<DataVariableConnectInput>>;
  where: InputMaybe<DataVariableConnectWhere>;
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
  node: InputMaybe<DataVariableSort>;
};

export type CuratedDatasetDataVariablesConnectionWhere = {
  AND: InputMaybe<Array<CuratedDatasetDataVariablesConnectionWhere>>;
  OR: InputMaybe<Array<CuratedDatasetDataVariablesConnectionWhere>>;
  node: InputMaybe<DataVariableWhere>;
  node_NOT: InputMaybe<DataVariableWhere>;
};

export type CuratedDatasetDataVariablesCreateFieldInput = {
  node: DataVariableCreateInput;
};

export type CuratedDatasetDataVariablesDeleteFieldInput = {
  delete: InputMaybe<DataVariableDeleteInput>;
  where: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};

export type CuratedDatasetDataVariablesDisconnectFieldInput = {
  disconnect: InputMaybe<DataVariableDisconnectInput>;
  where: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};

export type CuratedDatasetDataVariablesFieldInput = {
  connect: InputMaybe<Array<CuratedDatasetDataVariablesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
};

export type CuratedDatasetDataVariablesNodeAggregationWhereInput = {
  AND: InputMaybe<Array<CuratedDatasetDataVariablesNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<CuratedDatasetDataVariablesNodeAggregationWhereInput>>;
  dataVariableID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetDataVariablesRelationship = {
  __typename?: 'CuratedDatasetDataVariablesRelationship';
  cursor: Scalars['String'];
  node: DataVariable;
};

export type CuratedDatasetDataVariablesUpdateConnectionInput = {
  node: InputMaybe<DataVariableUpdateInput>;
};

export type CuratedDatasetDataVariablesUpdateFieldInput = {
  connect: InputMaybe<Array<CuratedDatasetDataVariablesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<CuratedDatasetDataVariablesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
  delete: InputMaybe<Array<CuratedDatasetDataVariablesDeleteFieldInput>>;
  disconnect: InputMaybe<Array<CuratedDatasetDataVariablesDisconnectFieldInput>>;
  update: InputMaybe<CuratedDatasetDataVariablesUpdateConnectionInput>;
  where: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
};

export type CuratedDatasetDeleteInput = {
  dataVariables: InputMaybe<Array<CuratedDatasetDataVariablesDeleteFieldInput>>;
  fieldDefinitions: InputMaybe<Array<CuratedDatasetFieldDefinitionsDeleteFieldInput>>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetDeleteFieldInput>;
};

export type CuratedDatasetDisconnectInput = {
  dataVariables: InputMaybe<Array<CuratedDatasetDataVariablesDisconnectFieldInput>>;
  fieldDefinitions: InputMaybe<Array<CuratedDatasetFieldDefinitionsDisconnectFieldInput>>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput>;
};

export type CuratedDatasetEdge = {
  __typename?: 'CuratedDatasetEdge';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type CuratedDatasetFieldDefinitionsAggregateInput = {
  AND: InputMaybe<Array<CuratedDatasetFieldDefinitionsAggregateInput>>;
  OR: InputMaybe<Array<CuratedDatasetFieldDefinitionsAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<CuratedDatasetFieldDefinitionsNodeAggregationWhereInput>;
};

export type CuratedDatasetFieldDefinitionsConnectFieldInput = {
  connect: InputMaybe<Array<DataVariableFieldDefinitionConnectInput>>;
  where: InputMaybe<DataVariableFieldDefinitionConnectWhere>;
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
  node: InputMaybe<DataVariableFieldDefinitionSort>;
};

export type CuratedDatasetFieldDefinitionsConnectionWhere = {
  AND: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectionWhere>>;
  OR: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectionWhere>>;
  node: InputMaybe<DataVariableFieldDefinitionWhere>;
  node_NOT: InputMaybe<DataVariableFieldDefinitionWhere>;
};

export type CuratedDatasetFieldDefinitionsCreateFieldInput = {
  node: DataVariableFieldDefinitionCreateInput;
};

export type CuratedDatasetFieldDefinitionsDeleteFieldInput = {
  delete: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};

export type CuratedDatasetFieldDefinitionsDisconnectFieldInput = {
  disconnect: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  where: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};

export type CuratedDatasetFieldDefinitionsFieldInput = {
  connect: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
};

export type CuratedDatasetFieldDefinitionsNodeAggregationWhereInput = {
  AND: InputMaybe<Array<CuratedDatasetFieldDefinitionsNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<CuratedDatasetFieldDefinitionsNodeAggregationWhereInput>>;
  dataVariableFieldDefinitionID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  xref_EQUAL: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetFieldDefinitionsRelationship = {
  __typename?: 'CuratedDatasetFieldDefinitionsRelationship';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type CuratedDatasetFieldDefinitionsUpdateConnectionInput = {
  node: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
};

export type CuratedDatasetFieldDefinitionsUpdateFieldInput = {
  connect: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<CuratedDatasetFieldDefinitionsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
  delete: InputMaybe<Array<CuratedDatasetFieldDefinitionsDeleteFieldInput>>;
  disconnect: InputMaybe<Array<CuratedDatasetFieldDefinitionsDisconnectFieldInput>>;
  update: InputMaybe<CuratedDatasetFieldDefinitionsUpdateConnectionInput>;
  where: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetAggregateInput = {
  AND: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetAggregateInput>>;
  OR: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput>;
};

export type CuratedDatasetGeneratedByRawDatasetConnectFieldInput = {
  connect: InputMaybe<RawDatasetConnectInput>;
  where: InputMaybe<RawDatasetConnectWhere>;
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
  node: InputMaybe<RawDatasetSort>;
};

export type CuratedDatasetGeneratedByRawDatasetConnectionWhere = {
  AND: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetConnectionWhere>>;
  OR: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetConnectionWhere>>;
  node: InputMaybe<RawDatasetWhere>;
  node_NOT: InputMaybe<RawDatasetWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type CuratedDatasetGeneratedByRawDatasetDeleteFieldInput = {
  delete: InputMaybe<RawDatasetDeleteInput>;
  where: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput = {
  disconnect: InputMaybe<RawDatasetDisconnectInput>;
  where: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetGeneratedByRawDatasetFieldInput = {
  connect: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<CuratedDatasetGeneratedByRawDatasetCreateFieldInput>;
};

export type CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput = {
  AND: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<CuratedDatasetGeneratedByRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetGeneratedByRawDatasetRelationship = {
  __typename?: 'CuratedDatasetGeneratedByRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput = {
  node: InputMaybe<RawDatasetUpdateInput>;
};

export type CuratedDatasetGeneratedByRawDatasetUpdateFieldInput = {
  connect: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<CuratedDatasetGeneratedByRawDatasetCreateFieldInput>;
  delete: InputMaybe<CuratedDatasetGeneratedByRawDatasetDeleteFieldInput>;
  disconnect: InputMaybe<CuratedDatasetGeneratedByRawDatasetDisconnectFieldInput>;
  update: InputMaybe<CuratedDatasetGeneratedByRawDatasetUpdateConnectionInput>;
  where: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
};

export type CuratedDatasetOnCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CuratedDatasetOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more CuratedDatasetSort objects to sort CuratedDatasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<CuratedDatasetSort>>;
};

export type CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection = {
  __typename?: 'CuratedDatasetRawDatasetGeneratedByRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection>;
};

export type CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection = {
  __typename?: 'CuratedDatasetRawDatasetGeneratedByRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type CuratedDatasetRelationInput = {
  dataVariables: InputMaybe<Array<CuratedDatasetDataVariablesCreateFieldInput>>;
  fieldDefinitions: InputMaybe<Array<CuratedDatasetFieldDefinitionsCreateFieldInput>>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetCreateFieldInput>;
};

/** Fields to sort CuratedDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one CuratedDatasetSort object. */
export type CuratedDatasetSort = {
  curatedDatasetID: InputMaybe<SortDirection>;
  description: InputMaybe<SortDirection>;
  name: InputMaybe<SortDirection>;
};

export type CuratedDatasetUniqueWhere = {
  curatedDatasetID: InputMaybe<Scalars['ID']>;
};

export type CuratedDatasetUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dataVariables: InputMaybe<Array<CuratedDatasetDataVariablesUpdateFieldInput>>;
  description: InputMaybe<Scalars['String']>;
  fieldDefinitions: InputMaybe<Array<CuratedDatasetFieldDefinitionsUpdateFieldInput>>;
  generatedByRawDataset: InputMaybe<CuratedDatasetGeneratedByRawDatasetUpdateFieldInput>;
  name: InputMaybe<Scalars['String']>;
};

export type CuratedDatasetWhere = {
  AND: InputMaybe<Array<CuratedDatasetWhere>>;
  OR: InputMaybe<Array<CuratedDatasetWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  curatedDatasetID: InputMaybe<Scalars['ID']>;
  curatedDatasetID_CONTAINS: InputMaybe<Scalars['ID']>;
  curatedDatasetID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  curatedDatasetID_IN: InputMaybe<Array<Scalars['ID']>>;
  curatedDatasetID_NOT: InputMaybe<Scalars['ID']>;
  curatedDatasetID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  curatedDatasetID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  curatedDatasetID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  curatedDatasetID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  curatedDatasetID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  dataVariables: InputMaybe<DataVariableWhere>;
  dataVariablesAggregate: InputMaybe<CuratedDatasetDataVariablesAggregateInput>;
  dataVariablesConnection: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_ALL: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_NONE: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_NOT: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_SINGLE: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  dataVariablesConnection_SOME: InputMaybe<CuratedDatasetDataVariablesConnectionWhere>;
  /** Return CuratedDatasets where all of the related DataVariables match this filter */
  dataVariables_ALL: InputMaybe<DataVariableWhere>;
  /** Return CuratedDatasets where none of the related DataVariables match this filter */
  dataVariables_NONE: InputMaybe<DataVariableWhere>;
  dataVariables_NOT: InputMaybe<DataVariableWhere>;
  /** Return CuratedDatasets where one of the related DataVariables match this filter */
  dataVariables_SINGLE: InputMaybe<DataVariableWhere>;
  /** Return CuratedDatasets where some of the related DataVariables match this filter */
  dataVariables_SOME: InputMaybe<DataVariableWhere>;
  description: InputMaybe<Scalars['String']>;
  description_CONTAINS: InputMaybe<Scalars['String']>;
  description_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  description_STARTS_WITH: InputMaybe<Scalars['String']>;
  fieldDefinitions: InputMaybe<DataVariableFieldDefinitionWhere>;
  fieldDefinitionsAggregate: InputMaybe<CuratedDatasetFieldDefinitionsAggregateInput>;
  fieldDefinitionsConnection: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_ALL: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_NONE: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_NOT: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_SINGLE: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  fieldDefinitionsConnection_SOME: InputMaybe<CuratedDatasetFieldDefinitionsConnectionWhere>;
  /** Return CuratedDatasets where all of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_ALL: InputMaybe<DataVariableFieldDefinitionWhere>;
  /** Return CuratedDatasets where none of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_NONE: InputMaybe<DataVariableFieldDefinitionWhere>;
  fieldDefinitions_NOT: InputMaybe<DataVariableFieldDefinitionWhere>;
  /** Return CuratedDatasets where one of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_SINGLE: InputMaybe<DataVariableFieldDefinitionWhere>;
  /** Return CuratedDatasets where some of the related DataVariableFieldDefinitions match this filter */
  fieldDefinitions_SOME: InputMaybe<DataVariableFieldDefinitionWhere>;
  generatedByRawDataset: InputMaybe<RawDatasetWhere>;
  generatedByRawDatasetAggregate: InputMaybe<CuratedDatasetGeneratedByRawDatasetAggregateInput>;
  generatedByRawDatasetConnection: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
  generatedByRawDatasetConnection_NOT: InputMaybe<CuratedDatasetGeneratedByRawDatasetConnectionWhere>;
  generatedByRawDataset_NOT: InputMaybe<RawDatasetWhere>;
  name: InputMaybe<Scalars['String']>;
  name_CONTAINS: InputMaybe<Scalars['String']>;
  name_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  name_STARTS_WITH: InputMaybe<Scalars['String']>;
};

export type CuratedDatasetsConnection = {
  __typename?: 'CuratedDatasetsConnection';
  edges: Array<CuratedDatasetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariable = {
  __typename?: 'DataVariable';
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  curatedDataset: Array<CuratedDataset>;
  curatedDatasetAggregate: Maybe<DataVariableCuratedDatasetCuratedDatasetAggregationSelection>;
  curatedDatasetConnection: DataVariableCuratedDatasetConnection;
  dataVariableID: Scalars['ID'];
  fields: Array<DataVariableField>;
  fieldsAggregate: Maybe<DataVariableDataVariableFieldFieldsAggregationSelection>;
  fieldsConnection: DataVariableFieldsConnection;
};


export type DataVariableCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<CuratedDatasetOptions>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableCuratedDatasetConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<DataVariableCuratedDatasetConnectionSort>>;
  where: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};


export type DataVariableFieldsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<DataVariableFieldOptions>;
  where: InputMaybe<DataVariableFieldWhere>;
};


export type DataVariableFieldsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<DataVariableFieldWhere>;
};


export type DataVariableFieldsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<DataVariableFieldsConnectionSort>>;
  where: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableAggregateSelection = {
  __typename?: 'DataVariableAggregateSelection';
  count: Scalars['Int'];
  dataVariableID: IdAggregateSelectionNonNullable;
};

export type DataVariableConnectInput = {
  curatedDataset: InputMaybe<Array<DataVariableCuratedDatasetConnectFieldInput>>;
  fields: InputMaybe<Array<DataVariableFieldsConnectFieldInput>>;
};

export type DataVariableConnectOrCreateInput = {
  curatedDataset: InputMaybe<Array<DataVariableCuratedDatasetConnectOrCreateFieldInput>>;
  fields: InputMaybe<Array<DataVariableFieldsConnectOrCreateFieldInput>>;
};

export type DataVariableConnectOrCreateWhere = {
  node: DataVariableUniqueWhere;
};

export type DataVariableConnectWhere = {
  node: DataVariableWhere;
};

export type DataVariableCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  curatedDataset: InputMaybe<DataVariableCuratedDatasetFieldInput>;
  fields: InputMaybe<DataVariableFieldsFieldInput>;
};

export type DataVariableCuratedDatasetAggregateInput = {
  AND: InputMaybe<Array<DataVariableCuratedDatasetAggregateInput>>;
  OR: InputMaybe<Array<DataVariableCuratedDatasetAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<DataVariableCuratedDatasetNodeAggregationWhereInput>;
};

export type DataVariableCuratedDatasetConnectFieldInput = {
  connect: InputMaybe<Array<CuratedDatasetConnectInput>>;
  where: InputMaybe<CuratedDatasetConnectWhere>;
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
  node: InputMaybe<CuratedDatasetSort>;
};

export type DataVariableCuratedDatasetConnectionWhere = {
  AND: InputMaybe<Array<DataVariableCuratedDatasetConnectionWhere>>;
  OR: InputMaybe<Array<DataVariableCuratedDatasetConnectionWhere>>;
  node: InputMaybe<CuratedDatasetWhere>;
  node_NOT: InputMaybe<CuratedDatasetWhere>;
};

export type DataVariableCuratedDatasetCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type DataVariableCuratedDatasetCuratedDatasetAggregationSelection = {
  __typename?: 'DataVariableCuratedDatasetCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection>;
};

export type DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection = {
  __typename?: 'DataVariableCuratedDatasetCuratedDatasetNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type DataVariableCuratedDatasetDeleteFieldInput = {
  delete: InputMaybe<CuratedDatasetDeleteInput>;
  where: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};

export type DataVariableCuratedDatasetDisconnectFieldInput = {
  disconnect: InputMaybe<CuratedDatasetDisconnectInput>;
  where: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};

export type DataVariableCuratedDatasetFieldInput = {
  connect: InputMaybe<Array<DataVariableCuratedDatasetConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<DataVariableCuratedDatasetConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<DataVariableCuratedDatasetCreateFieldInput>>;
};

export type DataVariableCuratedDatasetNodeAggregationWhereInput = {
  AND: InputMaybe<Array<DataVariableCuratedDatasetNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<DataVariableCuratedDatasetNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
};

export type DataVariableCuratedDatasetRelationship = {
  __typename?: 'DataVariableCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type DataVariableCuratedDatasetUpdateConnectionInput = {
  node: InputMaybe<CuratedDatasetUpdateInput>;
};

export type DataVariableCuratedDatasetUpdateFieldInput = {
  connect: InputMaybe<Array<DataVariableCuratedDatasetConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<DataVariableCuratedDatasetConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<DataVariableCuratedDatasetCreateFieldInput>>;
  delete: InputMaybe<Array<DataVariableCuratedDatasetDeleteFieldInput>>;
  disconnect: InputMaybe<Array<DataVariableCuratedDatasetDisconnectFieldInput>>;
  update: InputMaybe<DataVariableCuratedDatasetUpdateConnectionInput>;
  where: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
};

export type DataVariableDataVariableFieldFieldsAggregationSelection = {
  __typename?: 'DataVariableDataVariableFieldFieldsAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<DataVariableDataVariableFieldFieldsNodeAggregateSelection>;
};

export type DataVariableDataVariableFieldFieldsNodeAggregateSelection = {
  __typename?: 'DataVariableDataVariableFieldFieldsNodeAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  dataVariableFieldID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
};

export type DataVariableDeleteInput = {
  curatedDataset: InputMaybe<Array<DataVariableCuratedDatasetDeleteFieldInput>>;
  fields: InputMaybe<Array<DataVariableFieldsDeleteFieldInput>>;
};

export type DataVariableDisconnectInput = {
  curatedDataset: InputMaybe<Array<DataVariableCuratedDatasetDisconnectFieldInput>>;
  fields: InputMaybe<Array<DataVariableFieldsDisconnectFieldInput>>;
};

export type DataVariableEdge = {
  __typename?: 'DataVariableEdge';
  cursor: Scalars['String'];
  node: DataVariable;
};

export type DataVariableField = {
  __typename?: 'DataVariableField';
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  code: Scalars['String'];
  dataVariableFieldID: Scalars['ID'];
  description: Scalars['String'];
  hasFieldDefinition: DataVariableFieldDefinition;
  hasFieldDefinitionAggregate: Maybe<DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection>;
  hasFieldDefinitionConnection: DataVariableFieldHasFieldDefinitionConnection;
  jsonSchema: Scalars['JSON'];
};


export type DataVariableFieldHasFieldDefinitionArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<DataVariableFieldDefinitionOptions>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableFieldHasFieldDefinitionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableFieldHasFieldDefinitionConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<DataVariableFieldHasFieldDefinitionConnectionSort>>;
  where: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldAggregateSelection = {
  __typename?: 'DataVariableFieldAggregateSelection';
  code: StringAggregateSelectionNonNullable;
  count: Scalars['Int'];
  dataVariableFieldID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
};

export type DataVariableFieldConnectInput = {
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionConnectFieldInput>;
};

export type DataVariableFieldConnectOrCreateInput = {
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput>;
};

export type DataVariableFieldConnectOrCreateWhere = {
  node: DataVariableFieldUniqueWhere;
};

export type DataVariableFieldConnectWhere = {
  node: DataVariableFieldWhere;
};

export type DataVariableFieldCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code: Scalars['String'];
  description: Scalars['String'];
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionFieldInput>;
  jsonSchema: Scalars['JSON'];
};

export type DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection = {
  __typename?: 'DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection>;
};

export type DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection = {
  __typename?: 'DataVariableFieldDataVariableFieldDefinitionHasFieldDefinitionNodeAggregateSelection';
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinition = {
  __typename?: 'DataVariableFieldDefinition';
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  dataVariableFieldDefinitionID: Scalars['ID'];
  description: Scalars['String'];
  hasCuratedDataset: CuratedDataset;
  hasCuratedDatasetAggregate: Maybe<DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection>;
  hasCuratedDatasetConnection: DataVariableFieldDefinitionHasCuratedDatasetConnection;
  hasFieldValues: Array<DataVariableValue>;
  hasFieldValuesAggregate: Maybe<DataVariableFieldDefinitionDataVariableValueHasFieldValuesAggregationSelection>;
  hasFieldValuesConnection: DataVariableFieldDefinitionHasFieldValuesConnection;
  validationSchema: Maybe<Scalars['JSON']>;
  xref: Scalars['ID'];
};


export type DataVariableFieldDefinitionHasCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<CuratedDatasetOptions>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableFieldDefinitionHasCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type DataVariableFieldDefinitionHasCuratedDatasetConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetConnectionSort>>;
  where: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};


export type DataVariableFieldDefinitionHasFieldValuesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<DataVariableValueOptions>;
  where: InputMaybe<DataVariableValueWhere>;
};


export type DataVariableFieldDefinitionHasFieldValuesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<DataVariableValueWhere>;
};


export type DataVariableFieldDefinitionHasFieldValuesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectionSort>>;
  where: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionAggregateSelection = {
  __typename?: 'DataVariableFieldDefinitionAggregateSelection';
  count: Scalars['Int'];
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinitionConnectInput = {
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput>;
  hasFieldValues: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectFieldInput>>;
};

export type DataVariableFieldDefinitionConnectOrCreateInput = {
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput>;
  hasFieldValues: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput>>;
};

export type DataVariableFieldDefinitionConnectOrCreateWhere = {
  node: DataVariableFieldDefinitionUniqueWhere;
};

export type DataVariableFieldDefinitionConnectWhere = {
  node: DataVariableFieldDefinitionWhere;
};

export type DataVariableFieldDefinitionCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetFieldInput>;
  hasFieldValues: InputMaybe<DataVariableFieldDefinitionHasFieldValuesFieldInput>;
  validationSchema: InputMaybe<Scalars['JSON']>;
  xref: Scalars['ID'];
};

export type DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection = {
  __typename?: 'DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<DataVariableFieldDefinitionCuratedDatasetHasCuratedDatasetNodeAggregateSelection>;
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
  node: Maybe<DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection>;
};

export type DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection = {
  __typename?: 'DataVariableFieldDefinitionDataVariableValueHasFieldValuesNodeAggregateSelection';
  dataVariableValueID: IdAggregateSelectionNonNullable;
};

export type DataVariableFieldDefinitionDeleteInput = {
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput>;
  hasFieldValues: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput>>;
};

export type DataVariableFieldDefinitionDisconnectInput = {
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput>;
  hasFieldValues: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput>>;
};

export type DataVariableFieldDefinitionEdge = {
  __typename?: 'DataVariableFieldDefinitionEdge';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type DataVariableFieldDefinitionHasCuratedDatasetAggregateInput = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetAggregateInput>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput = {
  connect: InputMaybe<CuratedDatasetConnectInput>;
  where: InputMaybe<CuratedDatasetConnectWhere>;
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
  node: InputMaybe<CuratedDatasetSort>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>>;
  node: InputMaybe<CuratedDatasetWhere>;
  node_NOT: InputMaybe<CuratedDatasetWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput = {
  delete: InputMaybe<CuratedDatasetDeleteInput>;
  where: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput = {
  disconnect: InputMaybe<CuratedDatasetDisconnectInput>;
  where: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetFieldInput = {
  connect: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionHasCuratedDatasetNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetRelationship = {
  __typename?: 'DataVariableFieldDefinitionHasCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput = {
  node: InputMaybe<CuratedDatasetUpdateInput>;
};

export type DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput = {
  connect: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput>;
  delete: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDeleteFieldInput>;
  disconnect: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetDisconnectFieldInput>;
  update: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetUpdateConnectionInput>;
  where: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesAggregateInput = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesAggregateInput>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput>;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectFieldInput = {
  connect: InputMaybe<Array<DataVariableValueConnectInput>>;
  where: InputMaybe<DataVariableValueConnectWhere>;
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
  node: InputMaybe<DataVariableValueSort>;
};

export type DataVariableFieldDefinitionHasFieldValuesConnectionWhere = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>>;
  node: InputMaybe<DataVariableValueWhere>;
  node_NOT: InputMaybe<DataVariableValueWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesCreateFieldInput = {
  node: DataVariableValueCreateInput;
};

export type DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput = {
  delete: InputMaybe<DataVariableValueDeleteInput>;
  where: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput = {
  disconnect: InputMaybe<DataVariableValueDisconnectInput>;
  where: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionHasFieldValuesFieldInput = {
  connect: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesCreateFieldInput>>;
};

export type DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesNodeAggregationWhereInput>>;
  dataVariableValueID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionHasFieldValuesRelationship = {
  __typename?: 'DataVariableFieldDefinitionHasFieldValuesRelationship';
  cursor: Scalars['String'];
  node: DataVariableValue;
};

export type DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput = {
  node: InputMaybe<DataVariableValueUpdateInput>;
};

export type DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput = {
  connect: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesCreateFieldInput>>;
  delete: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDeleteFieldInput>>;
  disconnect: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesDisconnectFieldInput>>;
  update: InputMaybe<DataVariableFieldDefinitionHasFieldValuesUpdateConnectionInput>;
  where: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
};

export type DataVariableFieldDefinitionOnCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  validationSchema: InputMaybe<Scalars['JSON']>;
  xref: Scalars['ID'];
};

export type DataVariableFieldDefinitionOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableFieldDefinitionSort objects to sort DataVariableFieldDefinitions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<DataVariableFieldDefinitionSort>>;
};

export type DataVariableFieldDefinitionRelationInput = {
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetCreateFieldInput>;
  hasFieldValues: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesCreateFieldInput>>;
};

/** Fields to sort DataVariableFieldDefinitions by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableFieldDefinitionSort object. */
export type DataVariableFieldDefinitionSort = {
  dataVariableFieldDefinitionID: InputMaybe<SortDirection>;
  description: InputMaybe<SortDirection>;
  validationSchema: InputMaybe<SortDirection>;
  xref: InputMaybe<SortDirection>;
};

export type DataVariableFieldDefinitionUniqueWhere = {
  dataVariableFieldDefinitionID: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: InputMaybe<Scalars['String']>;
  hasCuratedDataset: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetUpdateFieldInput>;
  hasFieldValues: InputMaybe<Array<DataVariableFieldDefinitionHasFieldValuesUpdateFieldInput>>;
  validationSchema: InputMaybe<Scalars['JSON']>;
  xref: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionWhere = {
  AND: InputMaybe<Array<DataVariableFieldDefinitionWhere>>;
  OR: InputMaybe<Array<DataVariableFieldDefinitionWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  dataVariableFieldDefinitionID: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldDefinitionID_NOT: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldDefinitionID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableFieldDefinitionID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  description: InputMaybe<Scalars['String']>;
  description_CONTAINS: InputMaybe<Scalars['String']>;
  description_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  description_STARTS_WITH: InputMaybe<Scalars['String']>;
  hasCuratedDataset: InputMaybe<CuratedDatasetWhere>;
  hasCuratedDatasetAggregate: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetAggregateInput>;
  hasCuratedDatasetConnection: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
  hasCuratedDatasetConnection_NOT: InputMaybe<DataVariableFieldDefinitionHasCuratedDatasetConnectionWhere>;
  hasCuratedDataset_NOT: InputMaybe<CuratedDatasetWhere>;
  hasFieldValues: InputMaybe<DataVariableValueWhere>;
  hasFieldValuesAggregate: InputMaybe<DataVariableFieldDefinitionHasFieldValuesAggregateInput>;
  hasFieldValuesConnection: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_ALL: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_NONE: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_NOT: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_SINGLE: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  hasFieldValuesConnection_SOME: InputMaybe<DataVariableFieldDefinitionHasFieldValuesConnectionWhere>;
  /** Return DataVariableFieldDefinitions where all of the related DataVariableValues match this filter */
  hasFieldValues_ALL: InputMaybe<DataVariableValueWhere>;
  /** Return DataVariableFieldDefinitions where none of the related DataVariableValues match this filter */
  hasFieldValues_NONE: InputMaybe<DataVariableValueWhere>;
  hasFieldValues_NOT: InputMaybe<DataVariableValueWhere>;
  /** Return DataVariableFieldDefinitions where one of the related DataVariableValues match this filter */
  hasFieldValues_SINGLE: InputMaybe<DataVariableValueWhere>;
  /** Return DataVariableFieldDefinitions where some of the related DataVariableValues match this filter */
  hasFieldValues_SOME: InputMaybe<DataVariableValueWhere>;
  validationSchema: InputMaybe<Scalars['JSON']>;
  validationSchema_IN: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  validationSchema_NOT: InputMaybe<Scalars['JSON']>;
  validationSchema_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  xref: InputMaybe<Scalars['ID']>;
  xref_CONTAINS: InputMaybe<Scalars['ID']>;
  xref_ENDS_WITH: InputMaybe<Scalars['ID']>;
  xref_IN: InputMaybe<Array<Scalars['ID']>>;
  xref_NOT: InputMaybe<Scalars['ID']>;
  xref_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  xref_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  xref_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  xref_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  xref_STARTS_WITH: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldDefinitionsConnection = {
  __typename?: 'DataVariableFieldDefinitionsConnection';
  edges: Array<DataVariableFieldDefinitionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableFieldDeleteInput = {
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionDeleteFieldInput>;
};

export type DataVariableFieldDisconnectInput = {
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionDisconnectFieldInput>;
};

export type DataVariableFieldEdge = {
  __typename?: 'DataVariableFieldEdge';
  cursor: Scalars['String'];
  node: DataVariableField;
};

export type DataVariableFieldHasFieldDefinitionAggregateInput = {
  AND: InputMaybe<Array<DataVariableFieldHasFieldDefinitionAggregateInput>>;
  OR: InputMaybe<Array<DataVariableFieldHasFieldDefinitionAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput>;
};

export type DataVariableFieldHasFieldDefinitionConnectFieldInput = {
  connect: InputMaybe<DataVariableFieldDefinitionConnectInput>;
  where: InputMaybe<DataVariableFieldDefinitionConnectWhere>;
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
  node: InputMaybe<DataVariableFieldDefinitionSort>;
};

export type DataVariableFieldHasFieldDefinitionConnectionWhere = {
  AND: InputMaybe<Array<DataVariableFieldHasFieldDefinitionConnectionWhere>>;
  OR: InputMaybe<Array<DataVariableFieldHasFieldDefinitionConnectionWhere>>;
  node: InputMaybe<DataVariableFieldDefinitionWhere>;
  node_NOT: InputMaybe<DataVariableFieldDefinitionWhere>;
};

export type DataVariableFieldHasFieldDefinitionCreateFieldInput = {
  node: DataVariableFieldDefinitionCreateInput;
};

export type DataVariableFieldHasFieldDefinitionDeleteFieldInput = {
  delete: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldHasFieldDefinitionDisconnectFieldInput = {
  disconnect: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  where: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldHasFieldDefinitionFieldInput = {
  connect: InputMaybe<DataVariableFieldHasFieldDefinitionConnectFieldInput>;
  connectOrCreate: InputMaybe<DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput>;
  create: InputMaybe<DataVariableFieldHasFieldDefinitionCreateFieldInput>;
};

export type DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput = {
  AND: InputMaybe<Array<DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<DataVariableFieldHasFieldDefinitionNodeAggregationWhereInput>>;
  dataVariableFieldDefinitionID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  xref_EQUAL: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldHasFieldDefinitionRelationship = {
  __typename?: 'DataVariableFieldHasFieldDefinitionRelationship';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type DataVariableFieldHasFieldDefinitionUpdateConnectionInput = {
  node: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
};

export type DataVariableFieldHasFieldDefinitionUpdateFieldInput = {
  connect: InputMaybe<DataVariableFieldHasFieldDefinitionConnectFieldInput>;
  connectOrCreate: InputMaybe<DataVariableFieldHasFieldDefinitionConnectOrCreateFieldInput>;
  create: InputMaybe<DataVariableFieldHasFieldDefinitionCreateFieldInput>;
  delete: InputMaybe<DataVariableFieldHasFieldDefinitionDeleteFieldInput>;
  disconnect: InputMaybe<DataVariableFieldHasFieldDefinitionDisconnectFieldInput>;
  update: InputMaybe<DataVariableFieldHasFieldDefinitionUpdateConnectionInput>;
  where: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
};

export type DataVariableFieldOnCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code: Scalars['String'];
  description: Scalars['String'];
  jsonSchema: Scalars['JSON'];
};

export type DataVariableFieldOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableFieldSort objects to sort DataVariableFields by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<DataVariableFieldSort>>;
};

export type DataVariableFieldRelationInput = {
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionCreateFieldInput>;
};

/** Fields to sort DataVariableFields by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableFieldSort object. */
export type DataVariableFieldSort = {
  code: InputMaybe<SortDirection>;
  dataVariableFieldID: InputMaybe<SortDirection>;
  description: InputMaybe<SortDirection>;
  jsonSchema: InputMaybe<SortDirection>;
};

export type DataVariableFieldUniqueWhere = {
  dataVariableFieldID: InputMaybe<Scalars['ID']>;
};

export type DataVariableFieldUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  code: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  hasFieldDefinition: InputMaybe<DataVariableFieldHasFieldDefinitionUpdateFieldInput>;
  jsonSchema: InputMaybe<Scalars['JSON']>;
};

export type DataVariableFieldWhere = {
  AND: InputMaybe<Array<DataVariableFieldWhere>>;
  OR: InputMaybe<Array<DataVariableFieldWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  code: InputMaybe<Scalars['String']>;
  code_CONTAINS: InputMaybe<Scalars['String']>;
  code_ENDS_WITH: InputMaybe<Scalars['String']>;
  code_IN: InputMaybe<Array<Scalars['String']>>;
  code_NOT: InputMaybe<Scalars['String']>;
  code_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  code_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  code_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  code_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  code_STARTS_WITH: InputMaybe<Scalars['String']>;
  dataVariableFieldID: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldID_NOT: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableFieldID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableFieldID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  description: InputMaybe<Scalars['String']>;
  description_CONTAINS: InputMaybe<Scalars['String']>;
  description_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  description_STARTS_WITH: InputMaybe<Scalars['String']>;
  hasFieldDefinition: InputMaybe<DataVariableFieldDefinitionWhere>;
  hasFieldDefinitionAggregate: InputMaybe<DataVariableFieldHasFieldDefinitionAggregateInput>;
  hasFieldDefinitionConnection: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
  hasFieldDefinitionConnection_NOT: InputMaybe<DataVariableFieldHasFieldDefinitionConnectionWhere>;
  hasFieldDefinition_NOT: InputMaybe<DataVariableFieldDefinitionWhere>;
  jsonSchema: InputMaybe<Scalars['JSON']>;
  jsonSchema_IN: InputMaybe<Array<Scalars['JSON']>>;
  jsonSchema_NOT: InputMaybe<Scalars['JSON']>;
  jsonSchema_NOT_IN: InputMaybe<Array<Scalars['JSON']>>;
};

export type DataVariableFieldsAggregateInput = {
  AND: InputMaybe<Array<DataVariableFieldsAggregateInput>>;
  OR: InputMaybe<Array<DataVariableFieldsAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<DataVariableFieldsNodeAggregationWhereInput>;
};

export type DataVariableFieldsConnectFieldInput = {
  connect: InputMaybe<Array<DataVariableFieldConnectInput>>;
  where: InputMaybe<DataVariableFieldConnectWhere>;
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
  node: InputMaybe<DataVariableFieldSort>;
};

export type DataVariableFieldsConnectionWhere = {
  AND: InputMaybe<Array<DataVariableFieldsConnectionWhere>>;
  OR: InputMaybe<Array<DataVariableFieldsConnectionWhere>>;
  node: InputMaybe<DataVariableFieldWhere>;
  node_NOT: InputMaybe<DataVariableFieldWhere>;
};

export type DataVariableFieldsCreateFieldInput = {
  node: DataVariableFieldCreateInput;
};

export type DataVariableFieldsDeleteFieldInput = {
  delete: InputMaybe<DataVariableFieldDeleteInput>;
  where: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableFieldsDisconnectFieldInput = {
  disconnect: InputMaybe<DataVariableFieldDisconnectInput>;
  where: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableFieldsFieldInput = {
  connect: InputMaybe<Array<DataVariableFieldsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<DataVariableFieldsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<DataVariableFieldsCreateFieldInput>>;
};

export type DataVariableFieldsNodeAggregationWhereInput = {
  AND: InputMaybe<Array<DataVariableFieldsNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<DataVariableFieldsNodeAggregationWhereInput>>;
  code_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  code_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  code_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  code_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  code_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  code_EQUAL: InputMaybe<Scalars['String']>;
  code_GT: InputMaybe<Scalars['Int']>;
  code_GTE: InputMaybe<Scalars['Int']>;
  code_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  code_LONGEST_GT: InputMaybe<Scalars['Int']>;
  code_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  code_LONGEST_LT: InputMaybe<Scalars['Int']>;
  code_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  code_LT: InputMaybe<Scalars['Int']>;
  code_LTE: InputMaybe<Scalars['Int']>;
  code_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  code_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  code_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  code_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  code_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  dataVariableFieldID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
};

export type DataVariableFieldsRelationship = {
  __typename?: 'DataVariableFieldsRelationship';
  cursor: Scalars['String'];
  node: DataVariableField;
};

export type DataVariableFieldsUpdateConnectionInput = {
  node: InputMaybe<DataVariableFieldUpdateInput>;
};

export type DataVariableFieldsUpdateFieldInput = {
  connect: InputMaybe<Array<DataVariableFieldsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<DataVariableFieldsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<DataVariableFieldsCreateFieldInput>>;
  delete: InputMaybe<Array<DataVariableFieldsDeleteFieldInput>>;
  disconnect: InputMaybe<Array<DataVariableFieldsDisconnectFieldInput>>;
  update: InputMaybe<DataVariableFieldsUpdateConnectionInput>;
  where: InputMaybe<DataVariableFieldsConnectionWhere>;
};

export type DataVariableOnCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DataVariableOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableSort objects to sort DataVariables by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<DataVariableSort>>;
};

export type DataVariableRelationInput = {
  curatedDataset: InputMaybe<Array<DataVariableCuratedDatasetCreateFieldInput>>;
  fields: InputMaybe<Array<DataVariableFieldsCreateFieldInput>>;
};

/** Fields to sort DataVariables by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableSort object. */
export type DataVariableSort = {
  dataVariableID: InputMaybe<SortDirection>;
};

export type DataVariableUniqueWhere = {
  dataVariableID: InputMaybe<Scalars['ID']>;
};

export type DataVariableUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  curatedDataset: InputMaybe<Array<DataVariableCuratedDatasetUpdateFieldInput>>;
  fields: InputMaybe<Array<DataVariableFieldsUpdateFieldInput>>;
};

export type DataVariableValue = {
  __typename?: 'DataVariableValue';
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  dataVariableValueID: Scalars['ID'];
  fromFieldDefinition: DataVariableFieldDefinition;
  fromFieldDefinitionAggregate: Maybe<DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection>;
  fromFieldDefinitionConnection: DataVariableValueFromFieldDefinitionConnection;
  value: Scalars['JSON'];
};


export type DataVariableValueFromFieldDefinitionArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<DataVariableFieldDefinitionOptions>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableValueFromFieldDefinitionAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type DataVariableValueFromFieldDefinitionConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<DataVariableValueFromFieldDefinitionConnectionSort>>;
  where: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueAggregateSelection = {
  __typename?: 'DataVariableValueAggregateSelection';
  count: Scalars['Int'];
  dataVariableValueID: IdAggregateSelectionNonNullable;
};

export type DataVariableValueConnectInput = {
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionConnectFieldInput>;
};

export type DataVariableValueConnectOrCreateInput = {
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput>;
};

export type DataVariableValueConnectOrCreateWhere = {
  node: DataVariableValueUniqueWhere;
};

export type DataVariableValueConnectWhere = {
  node: DataVariableValueWhere;
};

export type DataVariableValueCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionFieldInput>;
  value: Scalars['JSON'];
};

export type DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection = {
  __typename?: 'DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection>;
};

export type DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection = {
  __typename?: 'DataVariableValueDataVariableFieldDefinitionFromFieldDefinitionNodeAggregateSelection';
  dataVariableFieldDefinitionID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  xref: IdAggregateSelectionNonNullable;
};

export type DataVariableValueDeleteInput = {
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionDeleteFieldInput>;
};

export type DataVariableValueDisconnectInput = {
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionDisconnectFieldInput>;
};

export type DataVariableValueEdge = {
  __typename?: 'DataVariableValueEdge';
  cursor: Scalars['String'];
  node: DataVariableValue;
};

export type DataVariableValueFromFieldDefinitionAggregateInput = {
  AND: InputMaybe<Array<DataVariableValueFromFieldDefinitionAggregateInput>>;
  OR: InputMaybe<Array<DataVariableValueFromFieldDefinitionAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<DataVariableValueFromFieldDefinitionNodeAggregationWhereInput>;
};

export type DataVariableValueFromFieldDefinitionConnectFieldInput = {
  connect: InputMaybe<DataVariableFieldDefinitionConnectInput>;
  where: InputMaybe<DataVariableFieldDefinitionConnectWhere>;
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
  node: InputMaybe<DataVariableFieldDefinitionSort>;
};

export type DataVariableValueFromFieldDefinitionConnectionWhere = {
  AND: InputMaybe<Array<DataVariableValueFromFieldDefinitionConnectionWhere>>;
  OR: InputMaybe<Array<DataVariableValueFromFieldDefinitionConnectionWhere>>;
  node: InputMaybe<DataVariableFieldDefinitionWhere>;
  node_NOT: InputMaybe<DataVariableFieldDefinitionWhere>;
};

export type DataVariableValueFromFieldDefinitionCreateFieldInput = {
  node: DataVariableFieldDefinitionCreateInput;
};

export type DataVariableValueFromFieldDefinitionDeleteFieldInput = {
  delete: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueFromFieldDefinitionDisconnectFieldInput = {
  disconnect: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  where: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueFromFieldDefinitionFieldInput = {
  connect: InputMaybe<DataVariableValueFromFieldDefinitionConnectFieldInput>;
  connectOrCreate: InputMaybe<DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput>;
  create: InputMaybe<DataVariableValueFromFieldDefinitionCreateFieldInput>;
};

export type DataVariableValueFromFieldDefinitionNodeAggregationWhereInput = {
  AND: InputMaybe<Array<DataVariableValueFromFieldDefinitionNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<DataVariableValueFromFieldDefinitionNodeAggregationWhereInput>>;
  dataVariableFieldDefinitionID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  xref_EQUAL: InputMaybe<Scalars['ID']>;
};

export type DataVariableValueFromFieldDefinitionRelationship = {
  __typename?: 'DataVariableValueFromFieldDefinitionRelationship';
  cursor: Scalars['String'];
  node: DataVariableFieldDefinition;
};

export type DataVariableValueFromFieldDefinitionUpdateConnectionInput = {
  node: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
};

export type DataVariableValueFromFieldDefinitionUpdateFieldInput = {
  connect: InputMaybe<DataVariableValueFromFieldDefinitionConnectFieldInput>;
  connectOrCreate: InputMaybe<DataVariableValueFromFieldDefinitionConnectOrCreateFieldInput>;
  create: InputMaybe<DataVariableValueFromFieldDefinitionCreateFieldInput>;
  delete: InputMaybe<DataVariableValueFromFieldDefinitionDeleteFieldInput>;
  disconnect: InputMaybe<DataVariableValueFromFieldDefinitionDisconnectFieldInput>;
  update: InputMaybe<DataVariableValueFromFieldDefinitionUpdateConnectionInput>;
  where: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
};

export type DataVariableValueOnCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  value: Scalars['JSON'];
};

export type DataVariableValueOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more DataVariableValueSort objects to sort DataVariableValues by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<DataVariableValueSort>>;
};

export type DataVariableValueRelationInput = {
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionCreateFieldInput>;
};

/** Fields to sort DataVariableValues by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataVariableValueSort object. */
export type DataVariableValueSort = {
  dataVariableValueID: InputMaybe<SortDirection>;
  value: InputMaybe<SortDirection>;
};

export type DataVariableValueUniqueWhere = {
  dataVariableValueID: InputMaybe<Scalars['ID']>;
};

export type DataVariableValueUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fromFieldDefinition: InputMaybe<DataVariableValueFromFieldDefinitionUpdateFieldInput>;
  value: InputMaybe<Scalars['JSON']>;
};

export type DataVariableValueWhere = {
  AND: InputMaybe<Array<DataVariableValueWhere>>;
  OR: InputMaybe<Array<DataVariableValueWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  dataVariableValueID: InputMaybe<Scalars['ID']>;
  dataVariableValueID_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableValueID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableValueID_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableValueID_NOT: InputMaybe<Scalars['ID']>;
  dataVariableValueID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableValueID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableValueID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableValueID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableValueID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  fromFieldDefinition: InputMaybe<DataVariableFieldDefinitionWhere>;
  fromFieldDefinitionAggregate: InputMaybe<DataVariableValueFromFieldDefinitionAggregateInput>;
  fromFieldDefinitionConnection: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
  fromFieldDefinitionConnection_NOT: InputMaybe<DataVariableValueFromFieldDefinitionConnectionWhere>;
  fromFieldDefinition_NOT: InputMaybe<DataVariableFieldDefinitionWhere>;
  value: InputMaybe<Scalars['JSON']>;
  value_IN: InputMaybe<Array<Scalars['JSON']>>;
  value_NOT: InputMaybe<Scalars['JSON']>;
  value_NOT_IN: InputMaybe<Array<Scalars['JSON']>>;
};

export type DataVariableValuesConnection = {
  __typename?: 'DataVariableValuesConnection';
  edges: Array<DataVariableValueEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DataVariableWhere = {
  AND: InputMaybe<Array<DataVariableWhere>>;
  OR: InputMaybe<Array<DataVariableWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  curatedDataset: InputMaybe<CuratedDatasetWhere>;
  curatedDatasetAggregate: InputMaybe<DataVariableCuratedDatasetAggregateInput>;
  curatedDatasetConnection: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_ALL: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_NONE: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_NOT: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_SINGLE: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  curatedDatasetConnection_SOME: InputMaybe<DataVariableCuratedDatasetConnectionWhere>;
  /** Return DataVariables where all of the related CuratedDatasets match this filter */
  curatedDataset_ALL: InputMaybe<CuratedDatasetWhere>;
  /** Return DataVariables where none of the related CuratedDatasets match this filter */
  curatedDataset_NONE: InputMaybe<CuratedDatasetWhere>;
  curatedDataset_NOT: InputMaybe<CuratedDatasetWhere>;
  /** Return DataVariables where one of the related CuratedDatasets match this filter */
  curatedDataset_SINGLE: InputMaybe<CuratedDatasetWhere>;
  /** Return DataVariables where some of the related CuratedDatasets match this filter */
  curatedDataset_SOME: InputMaybe<CuratedDatasetWhere>;
  dataVariableID: InputMaybe<Scalars['ID']>;
  dataVariableID_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableID_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableID_NOT: InputMaybe<Scalars['ID']>;
  dataVariableID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  dataVariableID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  dataVariableID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  dataVariableID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  fields: InputMaybe<DataVariableFieldWhere>;
  fieldsAggregate: InputMaybe<DataVariableFieldsAggregateInput>;
  fieldsConnection: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_ALL: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_NONE: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_NOT: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_SINGLE: InputMaybe<DataVariableFieldsConnectionWhere>;
  fieldsConnection_SOME: InputMaybe<DataVariableFieldsConnectionWhere>;
  /** Return DataVariables where all of the related DataVariableFields match this filter */
  fields_ALL: InputMaybe<DataVariableFieldWhere>;
  /** Return DataVariables where none of the related DataVariableFields match this filter */
  fields_NONE: InputMaybe<DataVariableFieldWhere>;
  fields_NOT: InputMaybe<DataVariableFieldWhere>;
  /** Return DataVariables where one of the related DataVariableFields match this filter */
  fields_SINGLE: InputMaybe<DataVariableFieldWhere>;
  /** Return DataVariables where some of the related DataVariableFields match this filter */
  fields_SOME: InputMaybe<DataVariableFieldWhere>;
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
  bookmark: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type FileValidation = {
  __typename?: 'FileValidation';
  isValid: Scalars['Boolean'];
  message: Maybe<Scalars['String']>;
  mismatches: Maybe<Array<Maybe<Mismatch>>>;
};

export type FileValidationAggregateSelection = {
  __typename?: 'FileValidationAggregateSelection';
  count: Scalars['Int'];
  message: StringAggregateSelectionNullable;
};

export type FileValidationCreateInput = {
  isValid: Scalars['Boolean'];
  message: InputMaybe<Scalars['String']>;
};

export type FileValidationEdge = {
  __typename?: 'FileValidationEdge';
  cursor: Scalars['String'];
  node: FileValidation;
};

export type FileValidationOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more FileValidationSort objects to sort FileValidations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<FileValidationSort>>;
};

/** Fields to sort FileValidations by. The order in which sorts are applied is not guaranteed when specifying many fields in one FileValidationSort object. */
export type FileValidationSort = {
  isValid: InputMaybe<SortDirection>;
  message: InputMaybe<SortDirection>;
};

export type FileValidationUpdateInput = {
  isValid: InputMaybe<Scalars['Boolean']>;
  message: InputMaybe<Scalars['String']>;
};

export type FileValidationWhere = {
  AND: InputMaybe<Array<FileValidationWhere>>;
  OR: InputMaybe<Array<FileValidationWhere>>;
  isValid: InputMaybe<Scalars['Boolean']>;
  isValid_NOT: InputMaybe<Scalars['Boolean']>;
  message: InputMaybe<Scalars['String']>;
  message_CONTAINS: InputMaybe<Scalars['String']>;
  message_ENDS_WITH: InputMaybe<Scalars['String']>;
  message_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_NOT: InputMaybe<Scalars['String']>;
  message_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  message_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  message_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  message_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  message_STARTS_WITH: InputMaybe<Scalars['String']>;
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
  id: Maybe<Scalars['ID']>;
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
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more GeographyCitySort objects to sort GeographyCities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<GeographyCitySort>>;
};

/** Fields to sort GeographyCities by. The order in which sorts are applied is not guaranteed when specifying many fields in one GeographyCitySort object. */
export type GeographyCitySort = {
  city: InputMaybe<SortDirection>;
  cityID: InputMaybe<SortDirection>;
  country: InputMaybe<SortDirection>;
  id: InputMaybe<SortDirection>;
  latitude: InputMaybe<SortDirection>;
  longitude: InputMaybe<SortDirection>;
};

export type GeographyCityUniqueWhere = {
  id: InputMaybe<Scalars['ID']>;
};

export type GeographyCityUpdateInput = {
  city: InputMaybe<Scalars['String']>;
  cityID: InputMaybe<Scalars['ID']>;
  country: InputMaybe<Scalars['String']>;
  latitude: InputMaybe<Scalars['Float']>;
  latitude_ADD: InputMaybe<Scalars['Float']>;
  latitude_DIVIDE: InputMaybe<Scalars['Float']>;
  latitude_MULTIPLY: InputMaybe<Scalars['Float']>;
  latitude_SUBTRACT: InputMaybe<Scalars['Float']>;
  longitude: InputMaybe<Scalars['Float']>;
  longitude_ADD: InputMaybe<Scalars['Float']>;
  longitude_DIVIDE: InputMaybe<Scalars['Float']>;
  longitude_MULTIPLY: InputMaybe<Scalars['Float']>;
  longitude_SUBTRACT: InputMaybe<Scalars['Float']>;
};

export type GeographyCityWhere = {
  AND: InputMaybe<Array<GeographyCityWhere>>;
  OR: InputMaybe<Array<GeographyCityWhere>>;
  city: InputMaybe<Scalars['String']>;
  cityID: InputMaybe<Scalars['ID']>;
  cityID_CONTAINS: InputMaybe<Scalars['ID']>;
  cityID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  cityID_IN: InputMaybe<Array<Scalars['ID']>>;
  cityID_NOT: InputMaybe<Scalars['ID']>;
  cityID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  cityID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  cityID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  cityID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  cityID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  city_CONTAINS: InputMaybe<Scalars['String']>;
  city_ENDS_WITH: InputMaybe<Scalars['String']>;
  city_IN: InputMaybe<Array<Scalars['String']>>;
  city_NOT: InputMaybe<Scalars['String']>;
  city_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  city_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  city_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  city_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  city_STARTS_WITH: InputMaybe<Scalars['String']>;
  country: InputMaybe<Scalars['String']>;
  country_CONTAINS: InputMaybe<Scalars['String']>;
  country_ENDS_WITH: InputMaybe<Scalars['String']>;
  country_IN: InputMaybe<Array<Scalars['String']>>;
  country_NOT: InputMaybe<Scalars['String']>;
  country_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  country_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  country_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  country_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  country_STARTS_WITH: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
  id_CONTAINS: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  id_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH: InputMaybe<Scalars['ID']>;
  latitude: InputMaybe<Scalars['Float']>;
  latitude_GT: InputMaybe<Scalars['Float']>;
  latitude_GTE: InputMaybe<Scalars['Float']>;
  latitude_IN: InputMaybe<Array<Scalars['Float']>>;
  latitude_LT: InputMaybe<Scalars['Float']>;
  latitude_LTE: InputMaybe<Scalars['Float']>;
  latitude_NOT: InputMaybe<Scalars['Float']>;
  latitude_NOT_IN: InputMaybe<Array<Scalars['Float']>>;
  longitude: InputMaybe<Scalars['Float']>;
  longitude_GT: InputMaybe<Scalars['Float']>;
  longitude_GTE: InputMaybe<Scalars['Float']>;
  longitude_IN: InputMaybe<Array<Scalars['Float']>>;
  longitude_LT: InputMaybe<Scalars['Float']>;
  longitude_LTE: InputMaybe<Scalars['Float']>;
  longitude_NOT: InputMaybe<Scalars['Float']>;
  longitude_NOT_IN: InputMaybe<Array<Scalars['Float']>>;
};

export type HarmonizedDataset = {
  __typename?: 'HarmonizedDataset';
  harmonizedDatasetID: Scalars['ID'];
  name: Scalars['String'];
  rawDatasets: Array<RawDataset>;
  rawDatasetsAggregate: Maybe<HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection>;
  rawDatasetsConnection: HarmonizedDatasetRawDatasetsConnection;
};


export type HarmonizedDatasetRawDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<RawDatasetOptions>;
  where: InputMaybe<RawDatasetWhere>;
};


export type HarmonizedDatasetRawDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<RawDatasetWhere>;
};


export type HarmonizedDatasetRawDatasetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectionSort>>;
  where: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetAggregateSelection = {
  __typename?: 'HarmonizedDatasetAggregateSelection';
  count: Scalars['Int'];
  harmonizedDatasetID: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type HarmonizedDatasetConnectInput = {
  rawDatasets: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectFieldInput>>;
};

export type HarmonizedDatasetConnectOrCreateInput = {
  rawDatasets: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput>>;
};

export type HarmonizedDatasetCreateInput = {
  name: Scalars['String'];
  rawDatasets: InputMaybe<HarmonizedDatasetRawDatasetsFieldInput>;
};

export type HarmonizedDatasetDeleteInput = {
  rawDatasets: InputMaybe<Array<HarmonizedDatasetRawDatasetsDeleteFieldInput>>;
};

export type HarmonizedDatasetDisconnectInput = {
  rawDatasets: InputMaybe<Array<HarmonizedDatasetRawDatasetsDisconnectFieldInput>>;
};

export type HarmonizedDatasetEdge = {
  __typename?: 'HarmonizedDatasetEdge';
  cursor: Scalars['String'];
  node: HarmonizedDataset;
};

export type HarmonizedDatasetOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more HarmonizedDatasetSort objects to sort HarmonizedDatasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<HarmonizedDatasetSort>>;
};

export type HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection = {
  __typename?: 'HarmonizedDatasetRawDatasetRawDatasetsAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection>;
};

export type HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection = {
  __typename?: 'HarmonizedDatasetRawDatasetRawDatasetsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type HarmonizedDatasetRawDatasetsAggregateInput = {
  AND: InputMaybe<Array<HarmonizedDatasetRawDatasetsAggregateInput>>;
  OR: InputMaybe<Array<HarmonizedDatasetRawDatasetsAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<HarmonizedDatasetRawDatasetsNodeAggregationWhereInput>;
};

export type HarmonizedDatasetRawDatasetsConnectFieldInput = {
  connect: InputMaybe<Array<RawDatasetConnectInput>>;
  where: InputMaybe<RawDatasetConnectWhere>;
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
  node: InputMaybe<RawDatasetSort>;
};

export type HarmonizedDatasetRawDatasetsConnectionWhere = {
  AND: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectionWhere>>;
  OR: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectionWhere>>;
  node: InputMaybe<RawDatasetWhere>;
  node_NOT: InputMaybe<RawDatasetWhere>;
};

export type HarmonizedDatasetRawDatasetsCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type HarmonizedDatasetRawDatasetsDeleteFieldInput = {
  delete: InputMaybe<RawDatasetDeleteInput>;
  where: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRawDatasetsDisconnectFieldInput = {
  disconnect: InputMaybe<RawDatasetDisconnectInput>;
  where: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRawDatasetsFieldInput = {
  connect: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<HarmonizedDatasetRawDatasetsCreateFieldInput>>;
};

export type HarmonizedDatasetRawDatasetsNodeAggregationWhereInput = {
  AND: InputMaybe<Array<HarmonizedDatasetRawDatasetsNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<HarmonizedDatasetRawDatasetsNodeAggregationWhereInput>>;
  createdAt_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type HarmonizedDatasetRawDatasetsRelationship = {
  __typename?: 'HarmonizedDatasetRawDatasetsRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type HarmonizedDatasetRawDatasetsUpdateConnectionInput = {
  node: InputMaybe<RawDatasetUpdateInput>;
};

export type HarmonizedDatasetRawDatasetsUpdateFieldInput = {
  connect: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<HarmonizedDatasetRawDatasetsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<HarmonizedDatasetRawDatasetsCreateFieldInput>>;
  delete: InputMaybe<Array<HarmonizedDatasetRawDatasetsDeleteFieldInput>>;
  disconnect: InputMaybe<Array<HarmonizedDatasetRawDatasetsDisconnectFieldInput>>;
  update: InputMaybe<HarmonizedDatasetRawDatasetsUpdateConnectionInput>;
  where: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
};

export type HarmonizedDatasetRelationInput = {
  rawDatasets: InputMaybe<Array<HarmonizedDatasetRawDatasetsCreateFieldInput>>;
};

/** Fields to sort HarmonizedDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one HarmonizedDatasetSort object. */
export type HarmonizedDatasetSort = {
  harmonizedDatasetID: InputMaybe<SortDirection>;
  name: InputMaybe<SortDirection>;
};

export type HarmonizedDatasetUpdateInput = {
  name: InputMaybe<Scalars['String']>;
  rawDatasets: InputMaybe<Array<HarmonizedDatasetRawDatasetsUpdateFieldInput>>;
};

export type HarmonizedDatasetWhere = {
  AND: InputMaybe<Array<HarmonizedDatasetWhere>>;
  OR: InputMaybe<Array<HarmonizedDatasetWhere>>;
  harmonizedDatasetID: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_CONTAINS: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_IN: InputMaybe<Array<Scalars['ID']>>;
  harmonizedDatasetID_NOT: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  harmonizedDatasetID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  harmonizedDatasetID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  name_CONTAINS: InputMaybe<Scalars['String']>;
  name_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  name_STARTS_WITH: InputMaybe<Scalars['String']>;
  rawDatasets: InputMaybe<RawDatasetWhere>;
  rawDatasetsAggregate: InputMaybe<HarmonizedDatasetRawDatasetsAggregateInput>;
  rawDatasetsConnection: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_ALL: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NONE: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NOT: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SINGLE: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SOME: InputMaybe<HarmonizedDatasetRawDatasetsConnectionWhere>;
  /** Return HarmonizedDatasets where all of the related RawDatasets match this filter */
  rawDatasets_ALL: InputMaybe<RawDatasetWhere>;
  /** Return HarmonizedDatasets where none of the related RawDatasets match this filter */
  rawDatasets_NONE: InputMaybe<RawDatasetWhere>;
  rawDatasets_NOT: InputMaybe<RawDatasetWhere>;
  /** Return HarmonizedDatasets where one of the related RawDatasets match this filter */
  rawDatasets_SINGLE: InputMaybe<RawDatasetWhere>;
  /** Return HarmonizedDatasets where some of the related RawDatasets match this filter */
  rawDatasets_SOME: InputMaybe<RawDatasetWhere>;
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
  validated: InputMaybe<SortDirection>;
};

export type HasCodebookUpdateInput = {
  validated: InputMaybe<Scalars['Boolean']>;
};

export type HasCodebookWhere = {
  AND: InputMaybe<Array<HasCodebookWhere>>;
  OR: InputMaybe<Array<HasCodebookWhere>>;
  validated: InputMaybe<Scalars['Boolean']>;
  validated_NOT: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedCodebook = {
  validated: Scalars['Boolean'];
};

export type HasPairedCodebookCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasPairedCodebookSort = {
  validated: InputMaybe<SortDirection>;
};

export type HasPairedCodebookUpdateInput = {
  validated: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedCodebookWhere = {
  AND: InputMaybe<Array<HasPairedCodebookWhere>>;
  OR: InputMaybe<Array<HasPairedCodebookWhere>>;
  validated: InputMaybe<Scalars['Boolean']>;
  validated_NOT: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedRawdatafile = {
  validated: Scalars['Boolean'];
};

export type HasPairedRawdatafileCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasPairedRawdatafileSort = {
  validated: InputMaybe<SortDirection>;
};

export type HasPairedRawdatafileUpdateInput = {
  validated: InputMaybe<Scalars['Boolean']>;
};

export type HasPairedRawdatafileWhere = {
  AND: InputMaybe<Array<HasPairedRawdatafileWhere>>;
  OR: InputMaybe<Array<HasPairedRawdatafileWhere>>;
  validated: InputMaybe<Scalars['Boolean']>;
  validated_NOT: InputMaybe<Scalars['Boolean']>;
};

export type HasRawdatafile = {
  validated: Scalars['Boolean'];
};

export type HasRawdatafileCreateInput = {
  validated: Scalars['Boolean'];
};

export type HasRawdatafileSort = {
  validated: InputMaybe<SortDirection>;
};

export type HasRawdatafileUpdateInput = {
  validated: InputMaybe<Scalars['Boolean']>;
};

export type HasRawdatafileWhere = {
  AND: InputMaybe<Array<HasRawdatafileWhere>>;
  OR: InputMaybe<Array<HasRawdatafileWhere>>;
  validated: InputMaybe<Scalars['Boolean']>;
  validated_NOT: InputMaybe<Scalars['Boolean']>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type IdAggregateSelectionNullable = {
  __typename?: 'IDAggregateSelectionNullable';
  longest: Maybe<Scalars['ID']>;
  shortest: Maybe<Scalars['ID']>;
};

export type IntAggregateSelectionNullable = {
  __typename?: 'IntAggregateSelectionNullable';
  average: Maybe<Scalars['Float']>;
  max: Maybe<Scalars['Int']>;
  min: Maybe<Scalars['Int']>;
  sum: Maybe<Scalars['Int']>;
};

export type KeycloakUser = {
  __typename?: 'KeycloakUser';
  email: Scalars['Email'];
  keycloakUserID: Scalars['ID'];
  name: Scalars['String'];
};

export type MinioBucket = {
  __typename?: 'MinioBucket';
  bucketName: Scalars['ID'];
  minioObjects: Array<MinioUpload>;
  minioObjectsAggregate: Maybe<MinioBucketMinioUploadMinioObjectsAggregationSelection>;
  minioObjectsConnection: MinioBucketMinioObjectsConnection;
};


export type MinioBucketMinioObjectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<MinioUploadOptions>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MinioBucketMinioObjectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MinioBucketMinioObjectsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<MinioBucketMinioObjectsConnectionSort>>;
  where: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketAggregateSelection = {
  __typename?: 'MinioBucketAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
};

export type MinioBucketConnectInput = {
  minioObjects: InputMaybe<Array<MinioBucketMinioObjectsConnectFieldInput>>;
};

export type MinioBucketConnectOrCreateInput = {
  minioObjects: InputMaybe<Array<MinioBucketMinioObjectsConnectOrCreateFieldInput>>;
};

export type MinioBucketConnectWhere = {
  node: MinioBucketWhere;
};

export type MinioBucketCreateInput = {
  bucketName: Scalars['ID'];
  minioObjects: InputMaybe<MinioBucketMinioObjectsFieldInput>;
};

export type MinioBucketDeleteInput = {
  minioObjects: InputMaybe<Array<MinioBucketMinioObjectsDeleteFieldInput>>;
};

export type MinioBucketDisconnectInput = {
  minioObjects: InputMaybe<Array<MinioBucketMinioObjectsDisconnectFieldInput>>;
};

export type MinioBucketEdge = {
  __typename?: 'MinioBucketEdge';
  cursor: Scalars['String'];
  node: MinioBucket;
};

export type MinioBucketMinioObjectsAggregateInput = {
  AND: InputMaybe<Array<MinioBucketMinioObjectsAggregateInput>>;
  OR: InputMaybe<Array<MinioBucketMinioObjectsAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<MinioBucketMinioObjectsNodeAggregationWhereInput>;
};

export type MinioBucketMinioObjectsConnectFieldInput = {
  connect: InputMaybe<Array<MinioUploadConnectInput>>;
  where: InputMaybe<MinioUploadConnectWhere>;
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
  node: InputMaybe<MinioUploadSort>;
};

export type MinioBucketMinioObjectsConnectionWhere = {
  AND: InputMaybe<Array<MinioBucketMinioObjectsConnectionWhere>>;
  OR: InputMaybe<Array<MinioBucketMinioObjectsConnectionWhere>>;
  node: InputMaybe<MinioUploadWhere>;
  node_NOT: InputMaybe<MinioUploadWhere>;
};

export type MinioBucketMinioObjectsCreateFieldInput = {
  node: MinioUploadCreateInput;
};

export type MinioBucketMinioObjectsDeleteFieldInput = {
  delete: InputMaybe<MinioUploadDeleteInput>;
  where: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketMinioObjectsDisconnectFieldInput = {
  disconnect: InputMaybe<MinioUploadDisconnectInput>;
  where: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketMinioObjectsFieldInput = {
  connect: InputMaybe<Array<MinioBucketMinioObjectsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<MinioBucketMinioObjectsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<MinioBucketMinioObjectsCreateFieldInput>>;
};

export type MinioBucketMinioObjectsNodeAggregationWhereInput = {
  AND: InputMaybe<Array<MinioBucketMinioObjectsNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<MinioBucketMinioObjectsNodeAggregationWhereInput>>;
  bucketName_EQUAL: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  filename_EQUAL: InputMaybe<Scalars['String']>;
  filename_GT: InputMaybe<Scalars['Int']>;
  filename_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  filename_LT: InputMaybe<Scalars['Int']>;
  filename_LTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  objectName_EQUAL: InputMaybe<Scalars['ID']>;
};

export type MinioBucketMinioObjectsRelationship = {
  __typename?: 'MinioBucketMinioObjectsRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type MinioBucketMinioObjectsUpdateConnectionInput = {
  node: InputMaybe<MinioUploadUpdateInput>;
};

export type MinioBucketMinioObjectsUpdateFieldInput = {
  connect: InputMaybe<Array<MinioBucketMinioObjectsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<MinioBucketMinioObjectsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<MinioBucketMinioObjectsCreateFieldInput>>;
  delete: InputMaybe<Array<MinioBucketMinioObjectsDeleteFieldInput>>;
  disconnect: InputMaybe<Array<MinioBucketMinioObjectsDisconnectFieldInput>>;
  update: InputMaybe<MinioBucketMinioObjectsUpdateConnectionInput>;
  where: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
};

export type MinioBucketMinioUploadMinioObjectsAggregationSelection = {
  __typename?: 'MinioBucketMinioUploadMinioObjectsAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<MinioBucketMinioUploadMinioObjectsNodeAggregateSelection>;
};

export type MinioBucketMinioUploadMinioObjectsNodeAggregateSelection = {
  __typename?: 'MinioBucketMinioUploadMinioObjectsNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioBucketOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more MinioBucketSort objects to sort MinioBuckets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<MinioBucketSort>>;
};

export type MinioBucketRelationInput = {
  minioObjects: InputMaybe<Array<MinioBucketMinioObjectsCreateFieldInput>>;
};

/** Fields to sort MinioBuckets by. The order in which sorts are applied is not guaranteed when specifying many fields in one MinioBucketSort object. */
export type MinioBucketSort = {
  bucketName: InputMaybe<SortDirection>;
};

export type MinioBucketUpdateInput = {
  bucketName: InputMaybe<Scalars['ID']>;
  minioObjects: InputMaybe<Array<MinioBucketMinioObjectsUpdateFieldInput>>;
};

export type MinioBucketWhere = {
  AND: InputMaybe<Array<MinioBucketWhere>>;
  OR: InputMaybe<Array<MinioBucketWhere>>;
  bucketName: InputMaybe<Scalars['ID']>;
  bucketName_CONTAINS: InputMaybe<Scalars['ID']>;
  bucketName_ENDS_WITH: InputMaybe<Scalars['ID']>;
  bucketName_IN: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT: InputMaybe<Scalars['ID']>;
  bucketName_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  bucketName_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  bucketName_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  bucketName_STARTS_WITH: InputMaybe<Scalars['ID']>;
  minioObjects: InputMaybe<MinioUploadWhere>;
  minioObjectsAggregate: InputMaybe<MinioBucketMinioObjectsAggregateInput>;
  minioObjectsConnection: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_ALL: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_NONE: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_NOT: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_SINGLE: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  minioObjectsConnection_SOME: InputMaybe<MinioBucketMinioObjectsConnectionWhere>;
  /** Return MinioBuckets where all of the related MinioUploads match this filter */
  minioObjects_ALL: InputMaybe<MinioUploadWhere>;
  /** Return MinioBuckets where none of the related MinioUploads match this filter */
  minioObjects_NONE: InputMaybe<MinioUploadWhere>;
  minioObjects_NOT: InputMaybe<MinioUploadWhere>;
  /** Return MinioBuckets where one of the related MinioUploads match this filter */
  minioObjects_SINGLE: InputMaybe<MinioUploadWhere>;
  /** Return MinioBuckets where some of the related MinioUploads match this filter */
  minioObjects_SOME: InputMaybe<MinioUploadWhere>;
};

export type MinioBucketsConnection = {
  __typename?: 'MinioBucketsConnection';
  edges: Array<MinioBucketEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MinioUpload = {
  __typename?: 'MinioUpload';
  bucketName: Scalars['ID'];
  codeBookRawDataset: Maybe<RawDataset>;
  codeBookRawDatasetAggregate: Maybe<MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection>;
  codeBookRawDatasetConnection: MinioUploadCodeBookRawDatasetConnection;
  filename: Scalars['String'];
  objectName: Scalars['ID'];
  pairedCodebook: Maybe<MinioUpload>;
  pairedCodebookAggregate: Maybe<MinioUploadMinioUploadPairedCodebookAggregationSelection>;
  pairedCodebookConnection: MinioUploadPairedCodebookConnection;
  pairedRawdataFile: Maybe<MinioUpload>;
  pairedRawdataFileAggregate: Maybe<MinioUploadMinioUploadPairedRawdataFileAggregationSelection>;
  pairedRawdataFileConnection: MinioUploadPairedRawdataFileConnection;
  presignedURL: Maybe<Scalars['String']>;
  rawdataFileRawDataset: Maybe<RawDataset>;
  rawdataFileRawDatasetAggregate: Maybe<MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection>;
  rawdataFileRawDatasetConnection: MinioUploadRawdataFileRawDatasetConnection;
};


export type MinioUploadCodeBookRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<RawDatasetOptions>;
  where: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadCodeBookRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadCodeBookRawDatasetConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<MinioUploadCodeBookRawDatasetConnectionSort>>;
  where: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};


export type MinioUploadPairedCodebookArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<MinioUploadOptions>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedCodebookAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedCodebookConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<MinioUploadPairedCodebookConnectionSort>>;
  where: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};


export type MinioUploadPairedRawdataFileArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<MinioUploadOptions>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedRawdataFileAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MinioUploadPairedRawdataFileConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<MinioUploadPairedRawdataFileConnectionSort>>;
  where: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};


export type MinioUploadRawdataFileRawDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<RawDatasetOptions>;
  where: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadRawdataFileRawDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<RawDatasetWhere>;
};


export type MinioUploadRawdataFileRawDatasetConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<MinioUploadRawdataFileRawDatasetConnectionSort>>;
  where: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadAggregateSelection = {
  __typename?: 'MinioUploadAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  count: Scalars['Int'];
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioUploadCodeBookRawDatasetAggregateInput = {
  AND: InputMaybe<Array<MinioUploadCodeBookRawDatasetAggregateInput>>;
  OR: InputMaybe<Array<MinioUploadCodeBookRawDatasetAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<MinioUploadCodeBookRawDatasetNodeAggregationWhereInput>;
};

export type MinioUploadCodeBookRawDatasetConnectFieldInput = {
  connect: InputMaybe<RawDatasetConnectInput>;
  edge: HasCodebookCreateInput;
  where: InputMaybe<RawDatasetConnectWhere>;
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
  edge: InputMaybe<HasCodebookSort>;
  node: InputMaybe<RawDatasetSort>;
};

export type MinioUploadCodeBookRawDatasetConnectionWhere = {
  AND: InputMaybe<Array<MinioUploadCodeBookRawDatasetConnectionWhere>>;
  OR: InputMaybe<Array<MinioUploadCodeBookRawDatasetConnectionWhere>>;
  edge: InputMaybe<HasCodebookWhere>;
  edge_NOT: InputMaybe<HasCodebookWhere>;
  node: InputMaybe<RawDatasetWhere>;
  node_NOT: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadCodeBookRawDatasetCreateFieldInput = {
  edge: HasCodebookCreateInput;
  node: RawDatasetCreateInput;
};

export type MinioUploadCodeBookRawDatasetDeleteFieldInput = {
  delete: InputMaybe<RawDatasetDeleteInput>;
  where: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};

export type MinioUploadCodeBookRawDatasetDisconnectFieldInput = {
  disconnect: InputMaybe<RawDatasetDisconnectInput>;
  where: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};

export type MinioUploadCodeBookRawDatasetFieldInput = {
  connect: InputMaybe<MinioUploadCodeBookRawDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadCodeBookRawDatasetCreateFieldInput>;
};

export type MinioUploadCodeBookRawDatasetNodeAggregationWhereInput = {
  AND: InputMaybe<Array<MinioUploadCodeBookRawDatasetNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<MinioUploadCodeBookRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type MinioUploadCodeBookRawDatasetRelationship = HasCodebook & {
  __typename?: 'MinioUploadCodeBookRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
  validated: Scalars['Boolean'];
};

export type MinioUploadCodeBookRawDatasetUpdateConnectionInput = {
  edge: InputMaybe<HasCodebookUpdateInput>;
  node: InputMaybe<RawDatasetUpdateInput>;
};

export type MinioUploadCodeBookRawDatasetUpdateFieldInput = {
  connect: InputMaybe<MinioUploadCodeBookRawDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadCodeBookRawDatasetCreateFieldInput>;
  delete: InputMaybe<MinioUploadCodeBookRawDatasetDeleteFieldInput>;
  disconnect: InputMaybe<MinioUploadCodeBookRawDatasetDisconnectFieldInput>;
  update: InputMaybe<MinioUploadCodeBookRawDatasetUpdateConnectionInput>;
  where: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
};

export type MinioUploadConnectInput = {
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetConnectFieldInput>;
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetConnectFieldInput>;
};

export type MinioUploadConnectOrCreateInput = {
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetConnectOrCreateFieldInput>;
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput>;
};

export type MinioUploadConnectOrCreateWhere = {
  node: MinioUploadUniqueWhere;
};

export type MinioUploadConnectWhere = {
  node: MinioUploadWhere;
};

export type MinioUploadCreateInput = {
  bucketName: Scalars['ID'];
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetFieldInput>;
  filename: Scalars['String'];
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetFieldInput>;
};

export type MinioUploadDeleteInput = {
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetDeleteFieldInput>;
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookDeleteFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileDeleteFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetDeleteFieldInput>;
};

export type MinioUploadDisconnectInput = {
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetDisconnectFieldInput>;
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookDisconnectFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileDisconnectFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetDisconnectFieldInput>;
};

export type MinioUploadEdge = {
  __typename?: 'MinioUploadEdge';
  cursor: Scalars['String'];
  node: MinioUpload;
};

export type MinioUploadMinioUploadPairedCodebookAggregationSelection = {
  __typename?: 'MinioUploadMinioUploadPairedCodebookAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<MinioUploadMinioUploadPairedCodebookNodeAggregateSelection>;
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
  node: Maybe<MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection>;
};

export type MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection = {
  __typename?: 'MinioUploadMinioUploadPairedRawdataFileNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type MinioUploadOnCreateInput = {
  bucketName: Scalars['ID'];
  filename: Scalars['String'];
};

export type MinioUploadOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more MinioUploadSort objects to sort MinioUploads by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<MinioUploadSort>>;
};

export type MinioUploadPairedCodebookAggregateInput = {
  AND: InputMaybe<Array<MinioUploadPairedCodebookAggregateInput>>;
  OR: InputMaybe<Array<MinioUploadPairedCodebookAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<MinioUploadPairedCodebookNodeAggregationWhereInput>;
};

export type MinioUploadPairedCodebookConnectFieldInput = {
  connect: InputMaybe<MinioUploadConnectInput>;
  edge: HasPairedRawdatafileCreateInput;
  where: InputMaybe<MinioUploadConnectWhere>;
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
  edge: InputMaybe<HasPairedRawdatafileSort>;
  node: InputMaybe<MinioUploadSort>;
};

export type MinioUploadPairedCodebookConnectionWhere = {
  AND: InputMaybe<Array<MinioUploadPairedCodebookConnectionWhere>>;
  OR: InputMaybe<Array<MinioUploadPairedCodebookConnectionWhere>>;
  edge: InputMaybe<HasPairedRawdatafileWhere>;
  edge_NOT: InputMaybe<HasPairedRawdatafileWhere>;
  node: InputMaybe<MinioUploadWhere>;
  node_NOT: InputMaybe<MinioUploadWhere>;
};

export type MinioUploadPairedCodebookCreateFieldInput = {
  edge: HasPairedRawdatafileCreateInput;
  node: MinioUploadCreateInput;
};

export type MinioUploadPairedCodebookDeleteFieldInput = {
  delete: InputMaybe<MinioUploadDeleteInput>;
  where: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};

export type MinioUploadPairedCodebookDisconnectFieldInput = {
  disconnect: InputMaybe<MinioUploadDisconnectInput>;
  where: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};

export type MinioUploadPairedCodebookFieldInput = {
  connect: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
};

export type MinioUploadPairedCodebookNodeAggregationWhereInput = {
  AND: InputMaybe<Array<MinioUploadPairedCodebookNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<MinioUploadPairedCodebookNodeAggregationWhereInput>>;
  bucketName_EQUAL: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  filename_EQUAL: InputMaybe<Scalars['String']>;
  filename_GT: InputMaybe<Scalars['Int']>;
  filename_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  filename_LT: InputMaybe<Scalars['Int']>;
  filename_LTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  objectName_EQUAL: InputMaybe<Scalars['ID']>;
};

export type MinioUploadPairedCodebookRelationship = HasPairedRawdatafile & {
  __typename?: 'MinioUploadPairedCodebookRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type MinioUploadPairedCodebookUpdateConnectionInput = {
  edge: InputMaybe<HasPairedRawdatafileUpdateInput>;
  node: InputMaybe<MinioUploadUpdateInput>;
};

export type MinioUploadPairedCodebookUpdateFieldInput = {
  connect: InputMaybe<MinioUploadPairedCodebookConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadPairedCodebookConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
  delete: InputMaybe<MinioUploadPairedCodebookDeleteFieldInput>;
  disconnect: InputMaybe<MinioUploadPairedCodebookDisconnectFieldInput>;
  update: InputMaybe<MinioUploadPairedCodebookUpdateConnectionInput>;
  where: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
};

export type MinioUploadPairedRawdataFileAggregateInput = {
  AND: InputMaybe<Array<MinioUploadPairedRawdataFileAggregateInput>>;
  OR: InputMaybe<Array<MinioUploadPairedRawdataFileAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<MinioUploadPairedRawdataFileNodeAggregationWhereInput>;
};

export type MinioUploadPairedRawdataFileConnectFieldInput = {
  connect: InputMaybe<MinioUploadConnectInput>;
  edge: HasPairedCodebookCreateInput;
  where: InputMaybe<MinioUploadConnectWhere>;
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
  edge: InputMaybe<HasPairedCodebookSort>;
  node: InputMaybe<MinioUploadSort>;
};

export type MinioUploadPairedRawdataFileConnectionWhere = {
  AND: InputMaybe<Array<MinioUploadPairedRawdataFileConnectionWhere>>;
  OR: InputMaybe<Array<MinioUploadPairedRawdataFileConnectionWhere>>;
  edge: InputMaybe<HasPairedCodebookWhere>;
  edge_NOT: InputMaybe<HasPairedCodebookWhere>;
  node: InputMaybe<MinioUploadWhere>;
  node_NOT: InputMaybe<MinioUploadWhere>;
};

export type MinioUploadPairedRawdataFileCreateFieldInput = {
  edge: HasPairedCodebookCreateInput;
  node: MinioUploadCreateInput;
};

export type MinioUploadPairedRawdataFileDeleteFieldInput = {
  delete: InputMaybe<MinioUploadDeleteInput>;
  where: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};

export type MinioUploadPairedRawdataFileDisconnectFieldInput = {
  disconnect: InputMaybe<MinioUploadDisconnectInput>;
  where: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};

export type MinioUploadPairedRawdataFileFieldInput = {
  connect: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
};

export type MinioUploadPairedRawdataFileNodeAggregationWhereInput = {
  AND: InputMaybe<Array<MinioUploadPairedRawdataFileNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<MinioUploadPairedRawdataFileNodeAggregationWhereInput>>;
  bucketName_EQUAL: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  filename_EQUAL: InputMaybe<Scalars['String']>;
  filename_GT: InputMaybe<Scalars['Int']>;
  filename_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  filename_LT: InputMaybe<Scalars['Int']>;
  filename_LTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  objectName_EQUAL: InputMaybe<Scalars['ID']>;
};

export type MinioUploadPairedRawdataFileRelationship = HasPairedCodebook & {
  __typename?: 'MinioUploadPairedRawdataFileRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type MinioUploadPairedRawdataFileUpdateConnectionInput = {
  edge: InputMaybe<HasPairedCodebookUpdateInput>;
  node: InputMaybe<MinioUploadUpdateInput>;
};

export type MinioUploadPairedRawdataFileUpdateFieldInput = {
  connect: InputMaybe<MinioUploadPairedRawdataFileConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadPairedRawdataFileConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
  delete: InputMaybe<MinioUploadPairedRawdataFileDeleteFieldInput>;
  disconnect: InputMaybe<MinioUploadPairedRawdataFileDisconnectFieldInput>;
  update: InputMaybe<MinioUploadPairedRawdataFileUpdateConnectionInput>;
  where: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
};

export type MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection = {
  __typename?: 'MinioUploadRawDatasetCodeBookRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection>;
};

export type MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadRawDatasetCodeBookRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection = {
  __typename?: 'MinioUploadRawDatasetRawdataFileRawDatasetAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection>;
};

export type MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection = {
  __typename?: 'MinioUploadRawDatasetRawdataFileRawDatasetNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type MinioUploadRawdataFileRawDatasetAggregateInput = {
  AND: InputMaybe<Array<MinioUploadRawdataFileRawDatasetAggregateInput>>;
  OR: InputMaybe<Array<MinioUploadRawdataFileRawDatasetAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput>;
};

export type MinioUploadRawdataFileRawDatasetConnectFieldInput = {
  connect: InputMaybe<RawDatasetConnectInput>;
  edge: HasRawdatafileCreateInput;
  where: InputMaybe<RawDatasetConnectWhere>;
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
  edge: InputMaybe<HasRawdatafileSort>;
  node: InputMaybe<RawDatasetSort>;
};

export type MinioUploadRawdataFileRawDatasetConnectionWhere = {
  AND: InputMaybe<Array<MinioUploadRawdataFileRawDatasetConnectionWhere>>;
  OR: InputMaybe<Array<MinioUploadRawdataFileRawDatasetConnectionWhere>>;
  edge: InputMaybe<HasRawdatafileWhere>;
  edge_NOT: InputMaybe<HasRawdatafileWhere>;
  node: InputMaybe<RawDatasetWhere>;
  node_NOT: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadRawdataFileRawDatasetCreateFieldInput = {
  edge: HasRawdatafileCreateInput;
  node: RawDatasetCreateInput;
};

export type MinioUploadRawdataFileRawDatasetDeleteFieldInput = {
  delete: InputMaybe<RawDatasetDeleteInput>;
  where: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileRawDatasetDisconnectFieldInput = {
  disconnect: InputMaybe<RawDatasetDisconnectInput>;
  where: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadRawdataFileRawDatasetFieldInput = {
  connect: InputMaybe<MinioUploadRawdataFileRawDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadRawdataFileRawDatasetCreateFieldInput>;
};

export type MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput = {
  AND: InputMaybe<Array<MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<MinioUploadRawdataFileRawDatasetNodeAggregationWhereInput>>;
  createdAt_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type MinioUploadRawdataFileRawDatasetRelationship = HasRawdatafile & {
  __typename?: 'MinioUploadRawdataFileRawDatasetRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
  validated: Scalars['Boolean'];
};

export type MinioUploadRawdataFileRawDatasetUpdateConnectionInput = {
  edge: InputMaybe<HasRawdatafileUpdateInput>;
  node: InputMaybe<RawDatasetUpdateInput>;
};

export type MinioUploadRawdataFileRawDatasetUpdateFieldInput = {
  connect: InputMaybe<MinioUploadRawdataFileRawDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<MinioUploadRawdataFileRawDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<MinioUploadRawdataFileRawDatasetCreateFieldInput>;
  delete: InputMaybe<MinioUploadRawdataFileRawDatasetDeleteFieldInput>;
  disconnect: InputMaybe<MinioUploadRawdataFileRawDatasetDisconnectFieldInput>;
  update: InputMaybe<MinioUploadRawdataFileRawDatasetUpdateConnectionInput>;
  where: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
};

export type MinioUploadRelationInput = {
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetCreateFieldInput>;
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookCreateFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileCreateFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetCreateFieldInput>;
};

/** Fields to sort MinioUploads by. The order in which sorts are applied is not guaranteed when specifying many fields in one MinioUploadSort object. */
export type MinioUploadSort = {
  bucketName: InputMaybe<SortDirection>;
  filename: InputMaybe<SortDirection>;
  objectName: InputMaybe<SortDirection>;
};

export type MinioUploadUniqueWhere = {
  objectName: InputMaybe<Scalars['ID']>;
};

export type MinioUploadUpdateInput = {
  bucketName: InputMaybe<Scalars['ID']>;
  codeBookRawDataset: InputMaybe<MinioUploadCodeBookRawDatasetUpdateFieldInput>;
  filename: InputMaybe<Scalars['String']>;
  pairedCodebook: InputMaybe<MinioUploadPairedCodebookUpdateFieldInput>;
  pairedRawdataFile: InputMaybe<MinioUploadPairedRawdataFileUpdateFieldInput>;
  rawdataFileRawDataset: InputMaybe<MinioUploadRawdataFileRawDatasetUpdateFieldInput>;
};

export type MinioUploadWhere = {
  AND: InputMaybe<Array<MinioUploadWhere>>;
  OR: InputMaybe<Array<MinioUploadWhere>>;
  bucketName: InputMaybe<Scalars['ID']>;
  bucketName_CONTAINS: InputMaybe<Scalars['ID']>;
  bucketName_ENDS_WITH: InputMaybe<Scalars['ID']>;
  bucketName_IN: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT: InputMaybe<Scalars['ID']>;
  bucketName_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  bucketName_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  bucketName_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  bucketName_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  bucketName_STARTS_WITH: InputMaybe<Scalars['ID']>;
  codeBookRawDataset: InputMaybe<RawDatasetWhere>;
  codeBookRawDatasetAggregate: InputMaybe<MinioUploadCodeBookRawDatasetAggregateInput>;
  codeBookRawDatasetConnection: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
  codeBookRawDatasetConnection_NOT: InputMaybe<MinioUploadCodeBookRawDatasetConnectionWhere>;
  codeBookRawDataset_NOT: InputMaybe<RawDatasetWhere>;
  filename: InputMaybe<Scalars['String']>;
  filename_CONTAINS: InputMaybe<Scalars['String']>;
  filename_ENDS_WITH: InputMaybe<Scalars['String']>;
  filename_IN: InputMaybe<Array<Scalars['String']>>;
  filename_NOT: InputMaybe<Scalars['String']>;
  filename_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  filename_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  filename_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  filename_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  filename_STARTS_WITH: InputMaybe<Scalars['String']>;
  objectName: InputMaybe<Scalars['ID']>;
  objectName_CONTAINS: InputMaybe<Scalars['ID']>;
  objectName_ENDS_WITH: InputMaybe<Scalars['ID']>;
  objectName_IN: InputMaybe<Array<Scalars['ID']>>;
  objectName_NOT: InputMaybe<Scalars['ID']>;
  objectName_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  objectName_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  objectName_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  objectName_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  objectName_STARTS_WITH: InputMaybe<Scalars['ID']>;
  pairedCodebook: InputMaybe<MinioUploadWhere>;
  pairedCodebookAggregate: InputMaybe<MinioUploadPairedCodebookAggregateInput>;
  pairedCodebookConnection: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
  pairedCodebookConnection_NOT: InputMaybe<MinioUploadPairedCodebookConnectionWhere>;
  pairedCodebook_NOT: InputMaybe<MinioUploadWhere>;
  pairedRawdataFile: InputMaybe<MinioUploadWhere>;
  pairedRawdataFileAggregate: InputMaybe<MinioUploadPairedRawdataFileAggregateInput>;
  pairedRawdataFileConnection: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
  pairedRawdataFileConnection_NOT: InputMaybe<MinioUploadPairedRawdataFileConnectionWhere>;
  pairedRawdataFile_NOT: InputMaybe<MinioUploadWhere>;
  rawdataFileRawDataset: InputMaybe<RawDatasetWhere>;
  rawdataFileRawDatasetAggregate: InputMaybe<MinioUploadRawdataFileRawDatasetAggregateInput>;
  rawdataFileRawDatasetConnection: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
  rawdataFileRawDatasetConnection_NOT: InputMaybe<MinioUploadRawdataFileRawDatasetConnectionWhere>;
  rawdataFileRawDataset_NOT: InputMaybe<RawDatasetWhere>;
};

export type MinioUploadsConnection = {
  __typename?: 'MinioUploadsConnection';
  edges: Array<MinioUploadEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mismatch = {
  __typename?: 'Mismatch';
  fileA: Maybe<Scalars['String']>;
  fileB: Maybe<Scalars['String']>;
  lineNumber: Maybe<Scalars['Int']>;
};

export type MismatchAggregateSelection = {
  __typename?: 'MismatchAggregateSelection';
  count: Scalars['Int'];
  fileA: StringAggregateSelectionNullable;
  fileB: StringAggregateSelectionNullable;
  lineNumber: IntAggregateSelectionNullable;
};

export type MismatchCreateInput = {
  fileA: InputMaybe<Scalars['String']>;
  fileB: InputMaybe<Scalars['String']>;
  lineNumber: InputMaybe<Scalars['Int']>;
};

export type MismatchEdge = {
  __typename?: 'MismatchEdge';
  cursor: Scalars['String'];
  node: Mismatch;
};

export type MismatchOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more MismatchSort objects to sort Mismatches by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<MismatchSort>>;
};

/** Fields to sort Mismatches by. The order in which sorts are applied is not guaranteed when specifying many fields in one MismatchSort object. */
export type MismatchSort = {
  fileA: InputMaybe<SortDirection>;
  fileB: InputMaybe<SortDirection>;
  lineNumber: InputMaybe<SortDirection>;
};

export type MismatchUpdateInput = {
  fileA: InputMaybe<Scalars['String']>;
  fileB: InputMaybe<Scalars['String']>;
  lineNumber: InputMaybe<Scalars['Int']>;
  lineNumber_DECREMENT: InputMaybe<Scalars['Int']>;
  lineNumber_INCREMENT: InputMaybe<Scalars['Int']>;
};

export type MismatchWhere = {
  AND: InputMaybe<Array<MismatchWhere>>;
  OR: InputMaybe<Array<MismatchWhere>>;
  fileA: InputMaybe<Scalars['String']>;
  fileA_CONTAINS: InputMaybe<Scalars['String']>;
  fileA_ENDS_WITH: InputMaybe<Scalars['String']>;
  fileA_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileA_NOT: InputMaybe<Scalars['String']>;
  fileA_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  fileA_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  fileA_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileA_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  fileA_STARTS_WITH: InputMaybe<Scalars['String']>;
  fileB: InputMaybe<Scalars['String']>;
  fileB_CONTAINS: InputMaybe<Scalars['String']>;
  fileB_ENDS_WITH: InputMaybe<Scalars['String']>;
  fileB_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileB_NOT: InputMaybe<Scalars['String']>;
  fileB_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  fileB_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  fileB_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileB_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  fileB_STARTS_WITH: InputMaybe<Scalars['String']>;
  lineNumber: InputMaybe<Scalars['Int']>;
  lineNumber_GT: InputMaybe<Scalars['Int']>;
  lineNumber_GTE: InputMaybe<Scalars['Int']>;
  lineNumber_IN: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lineNumber_LT: InputMaybe<Scalars['Int']>;
  lineNumber_LTE: InputMaybe<Scalars['Int']>;
  lineNumber_NOT: InputMaybe<Scalars['Int']>;
  lineNumber_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type MismatchesConnection = {
  __typename?: 'MismatchesConnection';
  edges: Array<MismatchEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelTask: Maybe<Task>;
  createClientRoles: CreateClientRolesMutationResponse;
  createClientUsers: CreateClientUsersMutationResponse;
  createClients: CreateClientsMutationResponse;
  createCuratedDatasetFromCSVCodebook: Scalars['Boolean'];
  createCuratedDatasetFromRawDataset: CuratedDataset;
  createCuratedDatasetFromRawDatasetNew: Maybe<CuratedDataset>;
  createCuratedDatasets: CreateCuratedDatasetsMutationResponse;
  createDataVariableFieldDefinitions: CreateDataVariableFieldDefinitionsMutationResponse;
  createDataVariableFields: CreateDataVariableFieldsMutationResponse;
  createDataVariableValues: CreateDataVariableValuesMutationResponse;
  createDataVariables: CreateDataVariablesMutationResponse;
  createFileValidations: CreateFileValidationsMutationResponse;
  createGeographyCities: CreateGeographyCitiesMutationResponse;
  createHarmonizedDatasets: CreateHarmonizedDatasetsMutationResponse;
  createMinioBuckets: CreateMinioBucketsMutationResponse;
  createMinioUploads: CreateMinioUploadsMutationResponse;
  createMismatches: CreateMismatchesMutationResponse;
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
  deleteMinioBuckets: DeleteInfo;
  deleteMinioUploads: DeleteInfo;
  deleteMismatches: DeleteInfo;
  deleteOntologies: DeleteInfo;
  deleteOntologyClasses: DeleteInfo;
  deleteOntologyRelations: DeleteInfo;
  deleteRawDatasets: DeleteInfo;
  deleteStudies: DeleteInfo;
  deleteTasks: DeleteInfo;
  keycloak_clients_createRole: Maybe<Scalars['Boolean']>;
  keycloak_clients_delRole: Maybe<Scalars['Boolean']>;
  keycloak_users_addClientRoleMappings: Maybe<Scalars['Boolean']>;
  keycloak_users_delClientRoleMappings: Maybe<Scalars['Boolean']>;
  me: Maybe<KeycloakUser>;
  minioDelete: Maybe<Scalars['Boolean']>;
  minioUpload: MinioUpload;
  nestedCuratedDatasetPermissions: Maybe<Scalars['Boolean']>;
  nestedCuratedDatasetProperty: Maybe<Scalars['Boolean']>;
  nestedDataVariableDefinitionProperty: Maybe<Scalars['Boolean']>;
  nestedDataVariableFieldProperty: Maybe<Scalars['Boolean']>;
  nestedDataVariableProperty: Maybe<Scalars['Boolean']>;
  nestedDataVariableValueProperty: Maybe<Scalars['Boolean']>;
  nestedRawDatasetProperty: Maybe<Scalars['Boolean']>;
  nestedStudyProperty: Maybe<Scalars['Boolean']>;
  submitTask: Maybe<Task>;
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
  updateMinioBuckets: UpdateMinioBucketsMutationResponse;
  updateMinioUploads: UpdateMinioUploadsMutationResponse;
  updateMismatches: UpdateMismatchesMutationResponse;
  updateOntologies: UpdateOntologiesMutationResponse;
  updateOntologyClasses: UpdateOntologyClassesMutationResponse;
  updateOntologyRelations: UpdateOntologyRelationsMutationResponse;
  updateRawDatasets: UpdateRawDatasetsMutationResponse;
  updateStudies: UpdateStudiesMutationResponse;
  updateTasks: UpdateTasksMutationResponse;
  validateCodebook: Maybe<FileValidation>;
  validateRawdatafile: Maybe<FileValidation>;
  validateRawfileCodebookPair: Maybe<FileValidation>;
};


export type MutationCancelTaskArgs = {
  taskId: InputMaybe<Scalars['ID']>;
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


export type MutationCreateMinioBucketsArgs = {
  input: Array<MinioBucketCreateInput>;
};


export type MutationCreateMinioUploadsArgs = {
  input: Array<MinioUploadCreateInput>;
};


export type MutationCreateMismatchesArgs = {
  input: Array<MismatchCreateInput>;
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
  where: InputMaybe<ClientRoleWhere>;
};


export type MutationDeleteClientUsersArgs = {
  where: InputMaybe<ClientUserWhere>;
};


export type MutationDeleteClientsArgs = {
  where: InputMaybe<ClientWhere>;
};


export type MutationDeleteCuratedDatasetsArgs = {
  delete: InputMaybe<CuratedDatasetDeleteInput>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type MutationDeleteDataVariableFieldDefinitionsArgs = {
  delete: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type MutationDeleteDataVariableFieldsArgs = {
  delete: InputMaybe<DataVariableFieldDeleteInput>;
  where: InputMaybe<DataVariableFieldWhere>;
};


export type MutationDeleteDataVariableValuesArgs = {
  delete: InputMaybe<DataVariableValueDeleteInput>;
  where: InputMaybe<DataVariableValueWhere>;
};


export type MutationDeleteDataVariablesArgs = {
  delete: InputMaybe<DataVariableDeleteInput>;
  where: InputMaybe<DataVariableWhere>;
};


export type MutationDeleteFileValidationsArgs = {
  where: InputMaybe<FileValidationWhere>;
};


export type MutationDeleteGeographyCitiesArgs = {
  where: InputMaybe<GeographyCityWhere>;
};


export type MutationDeleteHarmonizedDatasetsArgs = {
  delete: InputMaybe<HarmonizedDatasetDeleteInput>;
  where: InputMaybe<HarmonizedDatasetWhere>;
};


export type MutationDeleteMinioBucketsArgs = {
  delete: InputMaybe<MinioBucketDeleteInput>;
  where: InputMaybe<MinioBucketWhere>;
};


export type MutationDeleteMinioUploadsArgs = {
  delete: InputMaybe<MinioUploadDeleteInput>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MutationDeleteMismatchesArgs = {
  where: InputMaybe<MismatchWhere>;
};


export type MutationDeleteOntologiesArgs = {
  delete: InputMaybe<OntologyDeleteInput>;
  where: InputMaybe<OntologyWhere>;
};


export type MutationDeleteOntologyClassesArgs = {
  where: InputMaybe<OntologyClassWhere>;
};


export type MutationDeleteOntologyRelationsArgs = {
  delete: InputMaybe<OntologyRelationDeleteInput>;
  where: InputMaybe<OntologyRelationWhere>;
};


export type MutationDeleteRawDatasetsArgs = {
  delete: InputMaybe<RawDatasetDeleteInput>;
  where: InputMaybe<RawDatasetWhere>;
};


export type MutationDeleteStudiesArgs = {
  delete: InputMaybe<StudyDeleteInput>;
  where: InputMaybe<StudyWhere>;
};


export type MutationDeleteTasksArgs = {
  where: InputMaybe<TaskWhere>;
};


export type MutationKeycloak_Clients_CreateRoleArgs = {
  clientID: InputMaybe<Scalars['ID']>;
  roleName: InputMaybe<Scalars['String']>;
};


export type MutationKeycloak_Clients_DelRoleArgs = {
  clientID: InputMaybe<Scalars['ID']>;
  roleName: InputMaybe<Scalars['String']>;
};


export type MutationKeycloak_Users_AddClientRoleMappingsArgs = {
  clientID: InputMaybe<Scalars['String']>;
  roleID: InputMaybe<Scalars['ID']>;
  roleName: InputMaybe<Scalars['String']>;
  userID: InputMaybe<Scalars['ID']>;
};


export type MutationKeycloak_Users_DelClientRoleMappingsArgs = {
  clientID: InputMaybe<Scalars['String']>;
  roleID: InputMaybe<Scalars['ID']>;
  roleName: InputMaybe<Scalars['String']>;
  userID: InputMaybe<Scalars['ID']>;
};


export type MutationMinioDeleteArgs = {
  bucketName: Scalars['String'];
  objectName: Scalars['String'];
};


export type MutationMinioUploadArgs = {
  bucketName: Scalars['String'];
  file: Scalars['Upload'];
};


export type MutationNestedCuratedDatasetPermissionsArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedCuratedDatasetPropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedDataVariableDefinitionPropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedDataVariableFieldPropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedDataVariablePropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedDataVariableValuePropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedRawDatasetPropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationNestedStudyPropertyArgs = {
  id: InputMaybe<Scalars['ID']>;
  operation: InputMaybe<NestedOperations>;
  property: InputMaybe<Scalars['String']>;
  value: InputMaybe<Scalars['String']>;
};


export type MutationSubmitTaskArgs = {
  command: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  image: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};


export type MutationUpdateClientRolesArgs = {
  update: InputMaybe<ClientRoleUpdateInput>;
  where: InputMaybe<ClientRoleWhere>;
};


export type MutationUpdateClientUsersArgs = {
  update: InputMaybe<ClientUserUpdateInput>;
  where: InputMaybe<ClientUserWhere>;
};


export type MutationUpdateClientsArgs = {
  update: InputMaybe<ClientUpdateInput>;
  where: InputMaybe<ClientWhere>;
};


export type MutationUpdateCuratedDatasetsArgs = {
  connect: InputMaybe<CuratedDatasetConnectInput>;
  connectOrCreate: InputMaybe<CuratedDatasetConnectOrCreateInput>;
  create: InputMaybe<CuratedDatasetRelationInput>;
  delete: InputMaybe<CuratedDatasetDeleteInput>;
  disconnect: InputMaybe<CuratedDatasetDisconnectInput>;
  update: InputMaybe<CuratedDatasetUpdateInput>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type MutationUpdateDataVariableFieldDefinitionsArgs = {
  connect: InputMaybe<DataVariableFieldDefinitionConnectInput>;
  connectOrCreate: InputMaybe<DataVariableFieldDefinitionConnectOrCreateInput>;
  create: InputMaybe<DataVariableFieldDefinitionRelationInput>;
  delete: InputMaybe<DataVariableFieldDefinitionDeleteInput>;
  disconnect: InputMaybe<DataVariableFieldDefinitionDisconnectInput>;
  update: InputMaybe<DataVariableFieldDefinitionUpdateInput>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type MutationUpdateDataVariableFieldsArgs = {
  connect: InputMaybe<DataVariableFieldConnectInput>;
  connectOrCreate: InputMaybe<DataVariableFieldConnectOrCreateInput>;
  create: InputMaybe<DataVariableFieldRelationInput>;
  delete: InputMaybe<DataVariableFieldDeleteInput>;
  disconnect: InputMaybe<DataVariableFieldDisconnectInput>;
  update: InputMaybe<DataVariableFieldUpdateInput>;
  where: InputMaybe<DataVariableFieldWhere>;
};


export type MutationUpdateDataVariableValuesArgs = {
  connect: InputMaybe<DataVariableValueConnectInput>;
  connectOrCreate: InputMaybe<DataVariableValueConnectOrCreateInput>;
  create: InputMaybe<DataVariableValueRelationInput>;
  delete: InputMaybe<DataVariableValueDeleteInput>;
  disconnect: InputMaybe<DataVariableValueDisconnectInput>;
  update: InputMaybe<DataVariableValueUpdateInput>;
  where: InputMaybe<DataVariableValueWhere>;
};


export type MutationUpdateDataVariablesArgs = {
  connect: InputMaybe<DataVariableConnectInput>;
  connectOrCreate: InputMaybe<DataVariableConnectOrCreateInput>;
  create: InputMaybe<DataVariableRelationInput>;
  delete: InputMaybe<DataVariableDeleteInput>;
  disconnect: InputMaybe<DataVariableDisconnectInput>;
  update: InputMaybe<DataVariableUpdateInput>;
  where: InputMaybe<DataVariableWhere>;
};


export type MutationUpdateFileValidationsArgs = {
  update: InputMaybe<FileValidationUpdateInput>;
  where: InputMaybe<FileValidationWhere>;
};


export type MutationUpdateGeographyCitiesArgs = {
  update: InputMaybe<GeographyCityUpdateInput>;
  where: InputMaybe<GeographyCityWhere>;
};


export type MutationUpdateGeographyCityToStudyArgs = {
  cityID: Scalars['ID'];
  studyID: Scalars['ID'];
};


export type MutationUpdateHarmonizedDatasetsArgs = {
  connect: InputMaybe<HarmonizedDatasetConnectInput>;
  connectOrCreate: InputMaybe<HarmonizedDatasetConnectOrCreateInput>;
  create: InputMaybe<HarmonizedDatasetRelationInput>;
  delete: InputMaybe<HarmonizedDatasetDeleteInput>;
  disconnect: InputMaybe<HarmonizedDatasetDisconnectInput>;
  update: InputMaybe<HarmonizedDatasetUpdateInput>;
  where: InputMaybe<HarmonizedDatasetWhere>;
};


export type MutationUpdateMinioBucketsArgs = {
  connect: InputMaybe<MinioBucketConnectInput>;
  connectOrCreate: InputMaybe<MinioBucketConnectOrCreateInput>;
  create: InputMaybe<MinioBucketRelationInput>;
  delete: InputMaybe<MinioBucketDeleteInput>;
  disconnect: InputMaybe<MinioBucketDisconnectInput>;
  update: InputMaybe<MinioBucketUpdateInput>;
  where: InputMaybe<MinioBucketWhere>;
};


export type MutationUpdateMinioUploadsArgs = {
  connect: InputMaybe<MinioUploadConnectInput>;
  connectOrCreate: InputMaybe<MinioUploadConnectOrCreateInput>;
  create: InputMaybe<MinioUploadRelationInput>;
  delete: InputMaybe<MinioUploadDeleteInput>;
  disconnect: InputMaybe<MinioUploadDisconnectInput>;
  update: InputMaybe<MinioUploadUpdateInput>;
  where: InputMaybe<MinioUploadWhere>;
};


export type MutationUpdateMismatchesArgs = {
  update: InputMaybe<MismatchUpdateInput>;
  where: InputMaybe<MismatchWhere>;
};


export type MutationUpdateOntologiesArgs = {
  connect: InputMaybe<OntologyConnectInput>;
  connectOrCreate: InputMaybe<OntologyConnectOrCreateInput>;
  create: InputMaybe<OntologyRelationInput>;
  delete: InputMaybe<OntologyDeleteInput>;
  disconnect: InputMaybe<OntologyDisconnectInput>;
  update: InputMaybe<OntologyUpdateInput>;
  where: InputMaybe<OntologyWhere>;
};


export type MutationUpdateOntologyClassesArgs = {
  update: InputMaybe<OntologyClassUpdateInput>;
  where: InputMaybe<OntologyClassWhere>;
};


export type MutationUpdateOntologyRelationsArgs = {
  connect: InputMaybe<OntologyRelationConnectInput>;
  connectOrCreate: InputMaybe<OntologyRelationConnectOrCreateInput>;
  create: InputMaybe<OntologyRelationRelationInput>;
  delete: InputMaybe<OntologyRelationDeleteInput>;
  disconnect: InputMaybe<OntologyRelationDisconnectInput>;
  update: InputMaybe<OntologyRelationUpdateInput>;
  where: InputMaybe<OntologyRelationWhere>;
};


export type MutationUpdateRawDatasetsArgs = {
  connect: InputMaybe<RawDatasetConnectInput>;
  connectOrCreate: InputMaybe<RawDatasetConnectOrCreateInput>;
  create: InputMaybe<RawDatasetRelationInput>;
  delete: InputMaybe<RawDatasetDeleteInput>;
  disconnect: InputMaybe<RawDatasetDisconnectInput>;
  update: InputMaybe<RawDatasetUpdateInput>;
  where: InputMaybe<RawDatasetWhere>;
};


export type MutationUpdateStudiesArgs = {
  connect: InputMaybe<StudyConnectInput>;
  connectOrCreate: InputMaybe<StudyConnectOrCreateInput>;
  create: InputMaybe<StudyRelationInput>;
  delete: InputMaybe<StudyDeleteInput>;
  disconnect: InputMaybe<StudyDisconnectInput>;
  update: InputMaybe<StudyUpdateInput>;
  where: InputMaybe<StudyWhere>;
};


export type MutationUpdateTasksArgs = {
  update: InputMaybe<TaskUpdateInput>;
  where: InputMaybe<TaskWhere>;
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

export type OntologiesConnection = {
  __typename?: 'OntologiesConnection';
  edges: Array<OntologyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Ontology = {
  __typename?: 'Ontology';
  classes: Array<OntologyClass>;
  classesAggregate: Maybe<OntologyOntologyClassClassesAggregationSelection>;
  classesConnection: OntologyClassesConnection;
  externalID: Scalars['ID'];
  name: Scalars['String'];
  ontologyID: Scalars['ID'];
  relations: Array<OntologyRelation>;
  relationsAggregate: Maybe<OntologyOntologyRelationRelationsAggregationSelection>;
  relationsConnection: OntologyRelationsConnection;
};


export type OntologyClassesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<OntologyClassOptions>;
  where: InputMaybe<OntologyClassWhere>;
};


export type OntologyClassesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<OntologyClassWhere>;
};


export type OntologyClassesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<OntologyClassesConnectionSort>>;
  where: InputMaybe<OntologyClassesConnectionWhere>;
};


export type OntologyRelationsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<OntologyRelationOptions>;
  where: InputMaybe<OntologyRelationWhere>;
};


export type OntologyRelationsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<OntologyRelationWhere>;
};


export type OntologyRelationsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<OntologyRelationsConnectionSort>>;
  where: InputMaybe<OntologyRelationsConnectionWhere>;
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
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more OntologyClassSort objects to sort OntologyClasses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<OntologyClassSort>>;
};

/** Fields to sort OntologyClasses by. The order in which sorts are applied is not guaranteed when specifying many fields in one OntologyClassSort object. */
export type OntologyClassSort = {
  externalID: InputMaybe<SortDirection>;
  label: InputMaybe<SortDirection>;
  ontologyClassID: InputMaybe<SortDirection>;
};

export type OntologyClassUniqueWhere = {
  ontologyClassID: InputMaybe<Scalars['ID']>;
};

export type OntologyClassUpdateInput = {
  externalID: InputMaybe<Scalars['ID']>;
  label: InputMaybe<Scalars['String']>;
};

export type OntologyClassWhere = {
  AND: InputMaybe<Array<OntologyClassWhere>>;
  OR: InputMaybe<Array<OntologyClassWhere>>;
  externalID: InputMaybe<Scalars['ID']>;
  externalID_CONTAINS: InputMaybe<Scalars['ID']>;
  externalID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  externalID_IN: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT: InputMaybe<Scalars['ID']>;
  externalID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  externalID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  externalID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  externalID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  label: InputMaybe<Scalars['String']>;
  label_CONTAINS: InputMaybe<Scalars['String']>;
  label_ENDS_WITH: InputMaybe<Scalars['String']>;
  label_IN: InputMaybe<Array<Scalars['String']>>;
  label_NOT: InputMaybe<Scalars['String']>;
  label_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  label_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  label_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  label_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  label_STARTS_WITH: InputMaybe<Scalars['String']>;
  ontologyClassID: InputMaybe<Scalars['ID']>;
  ontologyClassID_CONTAINS: InputMaybe<Scalars['ID']>;
  ontologyClassID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  ontologyClassID_IN: InputMaybe<Array<Scalars['ID']>>;
  ontologyClassID_NOT: InputMaybe<Scalars['ID']>;
  ontologyClassID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  ontologyClassID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  ontologyClassID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  ontologyClassID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  ontologyClassID_STARTS_WITH: InputMaybe<Scalars['ID']>;
};

export type OntologyClassesAggregateInput = {
  AND: InputMaybe<Array<OntologyClassesAggregateInput>>;
  OR: InputMaybe<Array<OntologyClassesAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<OntologyClassesNodeAggregationWhereInput>;
};

export type OntologyClassesConnectFieldInput = {
  where: InputMaybe<OntologyClassConnectWhere>;
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
  node: InputMaybe<OntologyClassSort>;
};

export type OntologyClassesConnectionWhere = {
  AND: InputMaybe<Array<OntologyClassesConnectionWhere>>;
  OR: InputMaybe<Array<OntologyClassesConnectionWhere>>;
  node: InputMaybe<OntologyClassWhere>;
  node_NOT: InputMaybe<OntologyClassWhere>;
};

export type OntologyClassesCreateFieldInput = {
  node: OntologyClassCreateInput;
};

export type OntologyClassesDeleteFieldInput = {
  where: InputMaybe<OntologyClassesConnectionWhere>;
};

export type OntologyClassesDisconnectFieldInput = {
  where: InputMaybe<OntologyClassesConnectionWhere>;
};

export type OntologyClassesFieldInput = {
  connect: InputMaybe<Array<OntologyClassesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<OntologyClassesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<OntologyClassesCreateFieldInput>>;
};

export type OntologyClassesNodeAggregationWhereInput = {
  AND: InputMaybe<Array<OntologyClassesNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<OntologyClassesNodeAggregationWhereInput>>;
  externalID_EQUAL: InputMaybe<Scalars['ID']>;
  label_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  label_EQUAL: InputMaybe<Scalars['String']>;
  label_GT: InputMaybe<Scalars['Int']>;
  label_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  label_LT: InputMaybe<Scalars['Int']>;
  label_LTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  ontologyClassID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type OntologyClassesUpdateConnectionInput = {
  node: InputMaybe<OntologyClassUpdateInput>;
};

export type OntologyClassesUpdateFieldInput = {
  connect: InputMaybe<Array<OntologyClassesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<OntologyClassesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<OntologyClassesCreateFieldInput>>;
  delete: InputMaybe<Array<OntologyClassesDeleteFieldInput>>;
  disconnect: InputMaybe<Array<OntologyClassesDisconnectFieldInput>>;
  update: InputMaybe<OntologyClassesUpdateConnectionInput>;
  where: InputMaybe<OntologyClassesConnectionWhere>;
};

export type OntologyConnectInput = {
  classes: InputMaybe<Array<OntologyClassesConnectFieldInput>>;
  relations: InputMaybe<Array<OntologyRelationsConnectFieldInput>>;
};

export type OntologyConnectOrCreateInput = {
  classes: InputMaybe<Array<OntologyClassesConnectOrCreateFieldInput>>;
  relations: InputMaybe<Array<OntologyRelationsConnectOrCreateFieldInput>>;
};

export type OntologyCreateInput = {
  classes: InputMaybe<OntologyClassesFieldInput>;
  externalID: Scalars['ID'];
  name: Scalars['String'];
  relations: InputMaybe<OntologyRelationsFieldInput>;
};

export type OntologyDeleteInput = {
  classes: InputMaybe<Array<OntologyClassesDeleteFieldInput>>;
  relations: InputMaybe<Array<OntologyRelationsDeleteFieldInput>>;
};

export type OntologyDisconnectInput = {
  classes: InputMaybe<Array<OntologyClassesDisconnectFieldInput>>;
  relations: InputMaybe<Array<OntologyRelationsDisconnectFieldInput>>;
};

export type OntologyEdge = {
  __typename?: 'OntologyEdge';
  cursor: Scalars['String'];
  node: Ontology;
};

export type OntologyOntologyClassClassesAggregationSelection = {
  __typename?: 'OntologyOntologyClassClassesAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<OntologyOntologyClassClassesNodeAggregateSelection>;
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
  node: Maybe<OntologyOntologyRelationRelationsNodeAggregateSelection>;
};

export type OntologyOntologyRelationRelationsNodeAggregateSelection = {
  __typename?: 'OntologyOntologyRelationRelationsNodeAggregateSelection';
  label: StringAggregateSelectionNonNullable;
  ontologyRelationID: IdAggregateSelectionNonNullable;
};

export type OntologyOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more OntologySort objects to sort Ontologies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<OntologySort>>;
};

export type OntologyRelation = {
  __typename?: 'OntologyRelation';
  from: OntologyClass;
  fromAggregate: Maybe<OntologyRelationOntologyClassFromAggregationSelection>;
  fromConnection: OntologyRelationFromConnection;
  label: Scalars['String'];
  ontologyRelationID: Scalars['ID'];
  to: OntologyClass;
  toAggregate: Maybe<OntologyRelationOntologyClassToAggregationSelection>;
  toConnection: OntologyRelationToConnection;
};


export type OntologyRelationFromArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<OntologyClassOptions>;
  where: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationFromAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationFromConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<OntologyRelationFromConnectionSort>>;
  where: InputMaybe<OntologyRelationFromConnectionWhere>;
};


export type OntologyRelationToArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<OntologyClassOptions>;
  where: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationToAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<OntologyClassWhere>;
};


export type OntologyRelationToConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<OntologyRelationToConnectionSort>>;
  where: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationAggregateSelection = {
  __typename?: 'OntologyRelationAggregateSelection';
  count: Scalars['Int'];
  label: StringAggregateSelectionNonNullable;
  ontologyRelationID: IdAggregateSelectionNonNullable;
};

export type OntologyRelationConnectInput = {
  from: InputMaybe<OntologyRelationFromConnectFieldInput>;
  to: InputMaybe<OntologyRelationToConnectFieldInput>;
};

export type OntologyRelationConnectOrCreateInput = {
  from: InputMaybe<OntologyRelationFromConnectOrCreateFieldInput>;
  to: InputMaybe<OntologyRelationToConnectOrCreateFieldInput>;
};

export type OntologyRelationConnectOrCreateWhere = {
  node: OntologyRelationUniqueWhere;
};

export type OntologyRelationConnectWhere = {
  node: OntologyRelationWhere;
};

export type OntologyRelationCreateInput = {
  from: InputMaybe<OntologyRelationFromFieldInput>;
  label: Scalars['String'];
  to: InputMaybe<OntologyRelationToFieldInput>;
};

export type OntologyRelationDeleteInput = {
  from: InputMaybe<OntologyRelationFromDeleteFieldInput>;
  to: InputMaybe<OntologyRelationToDeleteFieldInput>;
};

export type OntologyRelationDisconnectInput = {
  from: InputMaybe<OntologyRelationFromDisconnectFieldInput>;
  to: InputMaybe<OntologyRelationToDisconnectFieldInput>;
};

export type OntologyRelationEdge = {
  __typename?: 'OntologyRelationEdge';
  cursor: Scalars['String'];
  node: OntologyRelation;
};

export type OntologyRelationFromAggregateInput = {
  AND: InputMaybe<Array<OntologyRelationFromAggregateInput>>;
  OR: InputMaybe<Array<OntologyRelationFromAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<OntologyRelationFromNodeAggregationWhereInput>;
};

export type OntologyRelationFromConnectFieldInput = {
  where: InputMaybe<OntologyClassConnectWhere>;
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
  node: InputMaybe<OntologyClassSort>;
};

export type OntologyRelationFromConnectionWhere = {
  AND: InputMaybe<Array<OntologyRelationFromConnectionWhere>>;
  OR: InputMaybe<Array<OntologyRelationFromConnectionWhere>>;
  node: InputMaybe<OntologyClassWhere>;
  node_NOT: InputMaybe<OntologyClassWhere>;
};

export type OntologyRelationFromCreateFieldInput = {
  node: OntologyClassCreateInput;
};

export type OntologyRelationFromDeleteFieldInput = {
  where: InputMaybe<OntologyRelationFromConnectionWhere>;
};

export type OntologyRelationFromDisconnectFieldInput = {
  where: InputMaybe<OntologyRelationFromConnectionWhere>;
};

export type OntologyRelationFromFieldInput = {
  connect: InputMaybe<OntologyRelationFromConnectFieldInput>;
  connectOrCreate: InputMaybe<OntologyRelationFromConnectOrCreateFieldInput>;
  create: InputMaybe<OntologyRelationFromCreateFieldInput>;
};

export type OntologyRelationFromNodeAggregationWhereInput = {
  AND: InputMaybe<Array<OntologyRelationFromNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<OntologyRelationFromNodeAggregationWhereInput>>;
  externalID_EQUAL: InputMaybe<Scalars['ID']>;
  label_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  label_EQUAL: InputMaybe<Scalars['String']>;
  label_GT: InputMaybe<Scalars['Int']>;
  label_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  label_LT: InputMaybe<Scalars['Int']>;
  label_LTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  ontologyClassID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationFromRelationship = {
  __typename?: 'OntologyRelationFromRelationship';
  cursor: Scalars['String'];
  node: OntologyClass;
};

export type OntologyRelationFromUpdateConnectionInput = {
  node: InputMaybe<OntologyClassUpdateInput>;
};

export type OntologyRelationFromUpdateFieldInput = {
  connect: InputMaybe<OntologyRelationFromConnectFieldInput>;
  connectOrCreate: InputMaybe<OntologyRelationFromConnectOrCreateFieldInput>;
  create: InputMaybe<OntologyRelationFromCreateFieldInput>;
  delete: InputMaybe<OntologyRelationFromDeleteFieldInput>;
  disconnect: InputMaybe<OntologyRelationFromDisconnectFieldInput>;
  update: InputMaybe<OntologyRelationFromUpdateConnectionInput>;
  where: InputMaybe<OntologyRelationFromConnectionWhere>;
};

export type OntologyRelationInput = {
  classes: InputMaybe<Array<OntologyClassesCreateFieldInput>>;
  relations: InputMaybe<Array<OntologyRelationsCreateFieldInput>>;
};

export type OntologyRelationOnCreateInput = {
  label: Scalars['String'];
};

export type OntologyRelationOntologyClassFromAggregationSelection = {
  __typename?: 'OntologyRelationOntologyClassFromAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<OntologyRelationOntologyClassFromNodeAggregateSelection>;
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
  node: Maybe<OntologyRelationOntologyClassToNodeAggregateSelection>;
};

export type OntologyRelationOntologyClassToNodeAggregateSelection = {
  __typename?: 'OntologyRelationOntologyClassToNodeAggregateSelection';
  externalID: IdAggregateSelectionNonNullable;
  label: StringAggregateSelectionNonNullable;
  ontologyClassID: IdAggregateSelectionNonNullable;
};

export type OntologyRelationOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more OntologyRelationSort objects to sort OntologyRelations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<OntologyRelationSort>>;
};

export type OntologyRelationRelationInput = {
  from: InputMaybe<OntologyRelationFromCreateFieldInput>;
  to: InputMaybe<OntologyRelationToCreateFieldInput>;
};

/** Fields to sort OntologyRelations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OntologyRelationSort object. */
export type OntologyRelationSort = {
  label: InputMaybe<SortDirection>;
  ontologyRelationID: InputMaybe<SortDirection>;
};

export type OntologyRelationToAggregateInput = {
  AND: InputMaybe<Array<OntologyRelationToAggregateInput>>;
  OR: InputMaybe<Array<OntologyRelationToAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<OntologyRelationToNodeAggregationWhereInput>;
};

export type OntologyRelationToConnectFieldInput = {
  where: InputMaybe<OntologyClassConnectWhere>;
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
  node: InputMaybe<OntologyClassSort>;
};

export type OntologyRelationToConnectionWhere = {
  AND: InputMaybe<Array<OntologyRelationToConnectionWhere>>;
  OR: InputMaybe<Array<OntologyRelationToConnectionWhere>>;
  node: InputMaybe<OntologyClassWhere>;
  node_NOT: InputMaybe<OntologyClassWhere>;
};

export type OntologyRelationToCreateFieldInput = {
  node: OntologyClassCreateInput;
};

export type OntologyRelationToDeleteFieldInput = {
  where: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationToDisconnectFieldInput = {
  where: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationToFieldInput = {
  connect: InputMaybe<OntologyRelationToConnectFieldInput>;
  connectOrCreate: InputMaybe<OntologyRelationToConnectOrCreateFieldInput>;
  create: InputMaybe<OntologyRelationToCreateFieldInput>;
};

export type OntologyRelationToNodeAggregationWhereInput = {
  AND: InputMaybe<Array<OntologyRelationToNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<OntologyRelationToNodeAggregationWhereInput>>;
  externalID_EQUAL: InputMaybe<Scalars['ID']>;
  label_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  label_EQUAL: InputMaybe<Scalars['String']>;
  label_GT: InputMaybe<Scalars['Int']>;
  label_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  label_LT: InputMaybe<Scalars['Int']>;
  label_LTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  ontologyClassID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationToRelationship = {
  __typename?: 'OntologyRelationToRelationship';
  cursor: Scalars['String'];
  node: OntologyClass;
};

export type OntologyRelationToUpdateConnectionInput = {
  node: InputMaybe<OntologyClassUpdateInput>;
};

export type OntologyRelationToUpdateFieldInput = {
  connect: InputMaybe<OntologyRelationToConnectFieldInput>;
  connectOrCreate: InputMaybe<OntologyRelationToConnectOrCreateFieldInput>;
  create: InputMaybe<OntologyRelationToCreateFieldInput>;
  delete: InputMaybe<OntologyRelationToDeleteFieldInput>;
  disconnect: InputMaybe<OntologyRelationToDisconnectFieldInput>;
  update: InputMaybe<OntologyRelationToUpdateConnectionInput>;
  where: InputMaybe<OntologyRelationToConnectionWhere>;
};

export type OntologyRelationUniqueWhere = {
  ontologyRelationID: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationUpdateInput = {
  from: InputMaybe<OntologyRelationFromUpdateFieldInput>;
  label: InputMaybe<Scalars['String']>;
  to: InputMaybe<OntologyRelationToUpdateFieldInput>;
};

export type OntologyRelationWhere = {
  AND: InputMaybe<Array<OntologyRelationWhere>>;
  OR: InputMaybe<Array<OntologyRelationWhere>>;
  from: InputMaybe<OntologyClassWhere>;
  fromAggregate: InputMaybe<OntologyRelationFromAggregateInput>;
  fromConnection: InputMaybe<OntologyRelationFromConnectionWhere>;
  fromConnection_NOT: InputMaybe<OntologyRelationFromConnectionWhere>;
  from_NOT: InputMaybe<OntologyClassWhere>;
  label: InputMaybe<Scalars['String']>;
  label_CONTAINS: InputMaybe<Scalars['String']>;
  label_ENDS_WITH: InputMaybe<Scalars['String']>;
  label_IN: InputMaybe<Array<Scalars['String']>>;
  label_NOT: InputMaybe<Scalars['String']>;
  label_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  label_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  label_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  label_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  label_STARTS_WITH: InputMaybe<Scalars['String']>;
  ontologyRelationID: InputMaybe<Scalars['ID']>;
  ontologyRelationID_CONTAINS: InputMaybe<Scalars['ID']>;
  ontologyRelationID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  ontologyRelationID_IN: InputMaybe<Array<Scalars['ID']>>;
  ontologyRelationID_NOT: InputMaybe<Scalars['ID']>;
  ontologyRelationID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  ontologyRelationID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  ontologyRelationID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  ontologyRelationID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  ontologyRelationID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  to: InputMaybe<OntologyClassWhere>;
  toAggregate: InputMaybe<OntologyRelationToAggregateInput>;
  toConnection: InputMaybe<OntologyRelationToConnectionWhere>;
  toConnection_NOT: InputMaybe<OntologyRelationToConnectionWhere>;
  to_NOT: InputMaybe<OntologyClassWhere>;
};

export type OntologyRelationsAggregateInput = {
  AND: InputMaybe<Array<OntologyRelationsAggregateInput>>;
  OR: InputMaybe<Array<OntologyRelationsAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<OntologyRelationsNodeAggregationWhereInput>;
};

export type OntologyRelationsConnectFieldInput = {
  connect: InputMaybe<Array<OntologyRelationConnectInput>>;
  where: InputMaybe<OntologyRelationConnectWhere>;
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
  node: InputMaybe<OntologyRelationSort>;
};

export type OntologyRelationsConnectionWhere = {
  AND: InputMaybe<Array<OntologyRelationsConnectionWhere>>;
  OR: InputMaybe<Array<OntologyRelationsConnectionWhere>>;
  node: InputMaybe<OntologyRelationWhere>;
  node_NOT: InputMaybe<OntologyRelationWhere>;
};

export type OntologyRelationsCreateFieldInput = {
  node: OntologyRelationCreateInput;
};

export type OntologyRelationsDeleteFieldInput = {
  delete: InputMaybe<OntologyRelationDeleteInput>;
  where: InputMaybe<OntologyRelationsConnectionWhere>;
};

export type OntologyRelationsDisconnectFieldInput = {
  disconnect: InputMaybe<OntologyRelationDisconnectInput>;
  where: InputMaybe<OntologyRelationsConnectionWhere>;
};

export type OntologyRelationsFieldInput = {
  connect: InputMaybe<Array<OntologyRelationsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<OntologyRelationsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<OntologyRelationsCreateFieldInput>>;
};

export type OntologyRelationsNodeAggregationWhereInput = {
  AND: InputMaybe<Array<OntologyRelationsNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<OntologyRelationsNodeAggregationWhereInput>>;
  label_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  label_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  label_EQUAL: InputMaybe<Scalars['String']>;
  label_GT: InputMaybe<Scalars['Int']>;
  label_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_LONGEST_GT: InputMaybe<Scalars['Int']>;
  label_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  label_LONGEST_LT: InputMaybe<Scalars['Int']>;
  label_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  label_LT: InputMaybe<Scalars['Int']>;
  label_LTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  label_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  ontologyRelationID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type OntologyRelationsUpdateConnectionInput = {
  node: InputMaybe<OntologyRelationUpdateInput>;
};

export type OntologyRelationsUpdateFieldInput = {
  connect: InputMaybe<Array<OntologyRelationsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<OntologyRelationsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<OntologyRelationsCreateFieldInput>>;
  delete: InputMaybe<Array<OntologyRelationsDeleteFieldInput>>;
  disconnect: InputMaybe<Array<OntologyRelationsDisconnectFieldInput>>;
  update: InputMaybe<OntologyRelationsUpdateConnectionInput>;
  where: InputMaybe<OntologyRelationsConnectionWhere>;
};

/** Fields to sort Ontologies by. The order in which sorts are applied is not guaranteed when specifying many fields in one OntologySort object. */
export type OntologySort = {
  externalID: InputMaybe<SortDirection>;
  name: InputMaybe<SortDirection>;
  ontologyID: InputMaybe<SortDirection>;
};

export type OntologyUpdateInput = {
  classes: InputMaybe<Array<OntologyClassesUpdateFieldInput>>;
  externalID: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  relations: InputMaybe<Array<OntologyRelationsUpdateFieldInput>>;
};

export type OntologyWhere = {
  AND: InputMaybe<Array<OntologyWhere>>;
  OR: InputMaybe<Array<OntologyWhere>>;
  classes: InputMaybe<OntologyClassWhere>;
  classesAggregate: InputMaybe<OntologyClassesAggregateInput>;
  classesConnection: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_ALL: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_NONE: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_NOT: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_SINGLE: InputMaybe<OntologyClassesConnectionWhere>;
  classesConnection_SOME: InputMaybe<OntologyClassesConnectionWhere>;
  /** Return Ontologies where all of the related OntologyClasses match this filter */
  classes_ALL: InputMaybe<OntologyClassWhere>;
  /** Return Ontologies where none of the related OntologyClasses match this filter */
  classes_NONE: InputMaybe<OntologyClassWhere>;
  classes_NOT: InputMaybe<OntologyClassWhere>;
  /** Return Ontologies where one of the related OntologyClasses match this filter */
  classes_SINGLE: InputMaybe<OntologyClassWhere>;
  /** Return Ontologies where some of the related OntologyClasses match this filter */
  classes_SOME: InputMaybe<OntologyClassWhere>;
  externalID: InputMaybe<Scalars['ID']>;
  externalID_CONTAINS: InputMaybe<Scalars['ID']>;
  externalID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  externalID_IN: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT: InputMaybe<Scalars['ID']>;
  externalID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  externalID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  externalID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  externalID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  externalID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  name_CONTAINS: InputMaybe<Scalars['String']>;
  name_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  name_STARTS_WITH: InputMaybe<Scalars['String']>;
  ontologyID: InputMaybe<Scalars['ID']>;
  ontologyID_CONTAINS: InputMaybe<Scalars['ID']>;
  ontologyID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  ontologyID_IN: InputMaybe<Array<Scalars['ID']>>;
  ontologyID_NOT: InputMaybe<Scalars['ID']>;
  ontologyID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  ontologyID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  ontologyID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  ontologyID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  ontologyID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  relations: InputMaybe<OntologyRelationWhere>;
  relationsAggregate: InputMaybe<OntologyRelationsAggregateInput>;
  relationsConnection: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_ALL: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_NONE: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_NOT: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_SINGLE: InputMaybe<OntologyRelationsConnectionWhere>;
  relationsConnection_SOME: InputMaybe<OntologyRelationsConnectionWhere>;
  /** Return Ontologies where all of the related OntologyRelations match this filter */
  relations_ALL: InputMaybe<OntologyRelationWhere>;
  /** Return Ontologies where none of the related OntologyRelations match this filter */
  relations_NONE: InputMaybe<OntologyRelationWhere>;
  relations_NOT: InputMaybe<OntologyRelationWhere>;
  /** Return Ontologies where one of the related OntologyRelations match this filter */
  relations_SINGLE: InputMaybe<OntologyRelationWhere>;
  /** Return Ontologies where some of the related OntologyRelations match this filter */
  relations_SOME: InputMaybe<OntologyRelationWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Maybe<Scalars['String']>;
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
  funnelTask: Maybe<Task>;
  funnelTasks: Maybe<Array<Maybe<Task>>>;
  geographyCities: Array<GeographyCity>;
  geographyCitiesAggregate: GeographyCityAggregateSelection;
  geographyCitiesConnection: GeographyCitiesConnection;
  harmonizedDatasets: Array<HarmonizedDataset>;
  harmonizedDatasetsAggregate: HarmonizedDatasetAggregateSelection;
  harmonizedDatasetsConnection: HarmonizedDatasetsConnection;
  keycloak_clients_find: Maybe<Array<Maybe<Client>>>;
  keycloak_clients_findRole: Maybe<ClientRole>;
  keycloak_users_find: Maybe<Array<Maybe<ClientUser>>>;
  keycloak_users_listAvailableClientRoleMappings: Maybe<Array<Maybe<ClientRole>>>;
  keycloak_users_listClientRoleMappings: Maybe<Array<Maybe<ClientRole>>>;
  minioBuckets: Array<MinioBucket>;
  minioBucketsAggregate: MinioBucketAggregateSelection;
  minioBucketsConnection: MinioBucketsConnection;
  minioUploads: Array<MinioUpload>;
  minioUploadsAggregate: MinioUploadAggregateSelection;
  minioUploadsConnection: MinioUploadsConnection;
  mismatches: Array<Mismatch>;
  mismatchesAggregate: MismatchAggregateSelection;
  mismatchesConnection: MismatchesConnection;
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
  options: InputMaybe<ClientRoleOptions>;
  where: InputMaybe<ClientRoleWhere>;
};


export type QueryClientRolesAggregateArgs = {
  where: InputMaybe<ClientRoleWhere>;
};


export type QueryClientRolesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<ClientRoleSort>>>;
  where: InputMaybe<ClientRoleWhere>;
};


export type QueryClientUsersArgs = {
  options: InputMaybe<ClientUserOptions>;
  where: InputMaybe<ClientUserWhere>;
};


export type QueryClientUsersAggregateArgs = {
  where: InputMaybe<ClientUserWhere>;
};


export type QueryClientUsersConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<ClientUserSort>>>;
  where: InputMaybe<ClientUserWhere>;
};


export type QueryClientsArgs = {
  options: InputMaybe<ClientOptions>;
  where: InputMaybe<ClientWhere>;
};


export type QueryClientsAggregateArgs = {
  where: InputMaybe<ClientWhere>;
};


export type QueryClientsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<ClientSort>>>;
  where: InputMaybe<ClientWhere>;
};


export type QueryCuratedDatasetsArgs = {
  options: InputMaybe<CuratedDatasetOptions>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type QueryCuratedDatasetsAggregateArgs = {
  where: InputMaybe<CuratedDatasetWhere>;
};


export type QueryCuratedDatasetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<CuratedDatasetSort>>>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type QueryDataVariableFieldDefinitionsArgs = {
  options: InputMaybe<DataVariableFieldDefinitionOptions>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type QueryDataVariableFieldDefinitionsAggregateArgs = {
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type QueryDataVariableFieldDefinitionsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<DataVariableFieldDefinitionSort>>>;
  where: InputMaybe<DataVariableFieldDefinitionWhere>;
};


export type QueryDataVariableFieldsArgs = {
  options: InputMaybe<DataVariableFieldOptions>;
  where: InputMaybe<DataVariableFieldWhere>;
};


export type QueryDataVariableFieldsAggregateArgs = {
  where: InputMaybe<DataVariableFieldWhere>;
};


export type QueryDataVariableFieldsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<DataVariableFieldSort>>>;
  where: InputMaybe<DataVariableFieldWhere>;
};


export type QueryDataVariableValuesArgs = {
  options: InputMaybe<DataVariableValueOptions>;
  where: InputMaybe<DataVariableValueWhere>;
};


export type QueryDataVariableValuesAggregateArgs = {
  where: InputMaybe<DataVariableValueWhere>;
};


export type QueryDataVariableValuesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<DataVariableValueSort>>>;
  where: InputMaybe<DataVariableValueWhere>;
};


export type QueryDataVariablesArgs = {
  options: InputMaybe<DataVariableOptions>;
  where: InputMaybe<DataVariableWhere>;
};


export type QueryDataVariablesAggregateArgs = {
  where: InputMaybe<DataVariableWhere>;
};


export type QueryDataVariablesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<DataVariableSort>>>;
  where: InputMaybe<DataVariableWhere>;
};


export type QueryFileValidationsArgs = {
  options: InputMaybe<FileValidationOptions>;
  where: InputMaybe<FileValidationWhere>;
};


export type QueryFileValidationsAggregateArgs = {
  where: InputMaybe<FileValidationWhere>;
};


export type QueryFileValidationsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<FileValidationSort>>>;
  where: InputMaybe<FileValidationWhere>;
};


export type QueryFunnelTaskArgs = {
  taskId: InputMaybe<Scalars['ID']>;
};


export type QueryGeographyCitiesArgs = {
  options: InputMaybe<GeographyCityOptions>;
  where: InputMaybe<GeographyCityWhere>;
};


export type QueryGeographyCitiesAggregateArgs = {
  where: InputMaybe<GeographyCityWhere>;
};


export type QueryGeographyCitiesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<GeographyCitySort>>>;
  where: InputMaybe<GeographyCityWhere>;
};


export type QueryHarmonizedDatasetsArgs = {
  options: InputMaybe<HarmonizedDatasetOptions>;
  where: InputMaybe<HarmonizedDatasetWhere>;
};


export type QueryHarmonizedDatasetsAggregateArgs = {
  where: InputMaybe<HarmonizedDatasetWhere>;
};


export type QueryHarmonizedDatasetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<HarmonizedDatasetSort>>>;
  where: InputMaybe<HarmonizedDatasetWhere>;
};


export type QueryKeycloak_Clients_FindRoleArgs = {
  clientID: InputMaybe<Scalars['ID']>;
  roleName: InputMaybe<Scalars['String']>;
};


export type QueryKeycloak_Users_ListAvailableClientRoleMappingsArgs = {
  clientID: InputMaybe<Scalars['ID']>;
  roleID: InputMaybe<Scalars['ID']>;
  roleName: InputMaybe<Scalars['String']>;
  userID: InputMaybe<Scalars['ID']>;
};


export type QueryKeycloak_Users_ListClientRoleMappingsArgs = {
  clientID: InputMaybe<Scalars['String']>;
  userID: InputMaybe<Scalars['ID']>;
};


export type QueryMinioBucketsArgs = {
  options: InputMaybe<MinioBucketOptions>;
  where: InputMaybe<MinioBucketWhere>;
};


export type QueryMinioBucketsAggregateArgs = {
  where: InputMaybe<MinioBucketWhere>;
};


export type QueryMinioBucketsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<MinioBucketSort>>>;
  where: InputMaybe<MinioBucketWhere>;
};


export type QueryMinioUploadsArgs = {
  options: InputMaybe<MinioUploadOptions>;
  where: InputMaybe<MinioUploadWhere>;
};


export type QueryMinioUploadsAggregateArgs = {
  where: InputMaybe<MinioUploadWhere>;
};


export type QueryMinioUploadsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<MinioUploadSort>>>;
  where: InputMaybe<MinioUploadWhere>;
};


export type QueryMismatchesArgs = {
  options: InputMaybe<MismatchOptions>;
  where: InputMaybe<MismatchWhere>;
};


export type QueryMismatchesAggregateArgs = {
  where: InputMaybe<MismatchWhere>;
};


export type QueryMismatchesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<MismatchSort>>>;
  where: InputMaybe<MismatchWhere>;
};


export type QueryOntologiesArgs = {
  options: InputMaybe<OntologyOptions>;
  where: InputMaybe<OntologyWhere>;
};


export type QueryOntologiesAggregateArgs = {
  where: InputMaybe<OntologyWhere>;
};


export type QueryOntologiesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<OntologySort>>>;
  where: InputMaybe<OntologyWhere>;
};


export type QueryOntologyClassesArgs = {
  options: InputMaybe<OntologyClassOptions>;
  where: InputMaybe<OntologyClassWhere>;
};


export type QueryOntologyClassesAggregateArgs = {
  where: InputMaybe<OntologyClassWhere>;
};


export type QueryOntologyClassesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<OntologyClassSort>>>;
  where: InputMaybe<OntologyClassWhere>;
};


export type QueryOntologyRelationsArgs = {
  options: InputMaybe<OntologyRelationOptions>;
  where: InputMaybe<OntologyRelationWhere>;
};


export type QueryOntologyRelationsAggregateArgs = {
  where: InputMaybe<OntologyRelationWhere>;
};


export type QueryOntologyRelationsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<OntologyRelationSort>>>;
  where: InputMaybe<OntologyRelationWhere>;
};


export type QueryRawDatasetCalendarHeatmapArgs = {
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};


export type QueryRawDatasetsArgs = {
  options: InputMaybe<RawDatasetOptions>;
  where: InputMaybe<RawDatasetWhere>;
};


export type QueryRawDatasetsAggregateArgs = {
  where: InputMaybe<RawDatasetWhere>;
};


export type QueryRawDatasetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<RawDatasetSort>>>;
  where: InputMaybe<RawDatasetWhere>;
};


export type QuerySearchGeographyCitiesArgs = {
  name: Scalars['String'];
};


export type QueryStudiesArgs = {
  options: InputMaybe<StudyOptions>;
  where: InputMaybe<StudyWhere>;
};


export type QueryStudiesAggregateArgs = {
  where: InputMaybe<StudyWhere>;
};


export type QueryStudiesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<StudySort>>>;
  where: InputMaybe<StudyWhere>;
};


export type QueryTasksArgs = {
  options: InputMaybe<TaskOptions>;
  where: InputMaybe<TaskWhere>;
};


export type QueryTasksAggregateArgs = {
  where: InputMaybe<TaskWhere>;
};


export type QueryTasksConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<TaskSort>>>;
  where: InputMaybe<TaskWhere>;
};

export type RawDataset = {
  __typename?: 'RawDataset';
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  codeBook: Maybe<MinioUpload>;
  codeBookAggregate: Maybe<RawDatasetMinioUploadCodeBookAggregationSelection>;
  codeBookConnection: RawDatasetCodeBookConnection;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  fromStudy: Maybe<Study>;
  fromStudyAggregate: Maybe<RawDatasetStudyFromStudyAggregationSelection>;
  fromStudyConnection: RawDatasetFromStudyConnection;
  generatedCuratedDataset: Maybe<CuratedDataset>;
  generatedCuratedDatasetAggregate: Maybe<RawDatasetCuratedDatasetGeneratedCuratedDatasetAggregationSelection>;
  generatedCuratedDatasetConnection: RawDatasetGeneratedCuratedDatasetConnection;
  minioBucket: Maybe<MinioBucket>;
  minioBucketAggregate: Maybe<RawDatasetMinioBucketMinioBucketAggregationSelection>;
  minioBucketConnection: RawDatasetMinioBucketConnection;
  name: Scalars['String'];
  rawDatasetID: Scalars['ID'];
  rawdataFile: Maybe<MinioUpload>;
  rawdataFileAggregate: Maybe<RawDatasetMinioUploadRawdataFileAggregationSelection>;
  rawdataFileConnection: RawDatasetRawdataFileConnection;
  studySite: Maybe<GeographyCity>;
  studySiteAggregate: Maybe<RawDatasetGeographyCityStudySiteAggregationSelection>;
  studySiteConnection: RawDatasetStudySiteConnection;
};


export type RawDatasetCodeBookArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<MinioUploadOptions>;
  where: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetCodeBookAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetCodeBookConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<RawDatasetCodeBookConnectionSort>>;
  where: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};


export type RawDatasetFromStudyArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<StudyOptions>;
  where: InputMaybe<StudyWhere>;
};


export type RawDatasetFromStudyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<StudyWhere>;
};


export type RawDatasetFromStudyConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<RawDatasetFromStudyConnectionSort>>;
  where: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};


export type RawDatasetGeneratedCuratedDatasetArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<CuratedDatasetOptions>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type RawDatasetGeneratedCuratedDatasetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<CuratedDatasetWhere>;
};


export type RawDatasetGeneratedCuratedDatasetConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetConnectionSort>>;
  where: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectionWhere>;
};


export type RawDatasetMinioBucketArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<MinioBucketOptions>;
  where: InputMaybe<MinioBucketWhere>;
};


export type RawDatasetMinioBucketAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<MinioBucketWhere>;
};


export type RawDatasetMinioBucketConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<RawDatasetMinioBucketConnectionSort>>;
  where: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};


export type RawDatasetRawdataFileArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<MinioUploadOptions>;
  where: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetRawdataFileAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<MinioUploadWhere>;
};


export type RawDatasetRawdataFileConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<RawDatasetRawdataFileConnectionSort>>;
  where: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};


export type RawDatasetStudySiteArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<GeographyCityOptions>;
  where: InputMaybe<GeographyCityWhere>;
};


export type RawDatasetStudySiteAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<GeographyCityWhere>;
};


export type RawDatasetStudySiteConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<RawDatasetStudySiteConnectionSort>>;
  where: InputMaybe<RawDatasetStudySiteConnectionWhere>;
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
  AND: InputMaybe<Array<RawDatasetCodeBookAggregateInput>>;
  OR: InputMaybe<Array<RawDatasetCodeBookAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<RawDatasetCodeBookNodeAggregationWhereInput>;
};

export type RawDatasetCodeBookConnectFieldInput = {
  connect: InputMaybe<MinioUploadConnectInput>;
  edge: HasCodebookCreateInput;
  where: InputMaybe<MinioUploadConnectWhere>;
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
  edge: InputMaybe<HasCodebookSort>;
  node: InputMaybe<MinioUploadSort>;
};

export type RawDatasetCodeBookConnectionWhere = {
  AND: InputMaybe<Array<RawDatasetCodeBookConnectionWhere>>;
  OR: InputMaybe<Array<RawDatasetCodeBookConnectionWhere>>;
  edge: InputMaybe<HasCodebookWhere>;
  edge_NOT: InputMaybe<HasCodebookWhere>;
  node: InputMaybe<MinioUploadWhere>;
  node_NOT: InputMaybe<MinioUploadWhere>;
};

export type RawDatasetCodeBookCreateFieldInput = {
  edge: HasCodebookCreateInput;
  node: MinioUploadCreateInput;
};

export type RawDatasetCodeBookDeleteFieldInput = {
  delete: InputMaybe<MinioUploadDeleteInput>;
  where: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};

export type RawDatasetCodeBookDisconnectFieldInput = {
  disconnect: InputMaybe<MinioUploadDisconnectInput>;
  where: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};

export type RawDatasetCodeBookFieldInput = {
  connect: InputMaybe<RawDatasetCodeBookConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetCodeBookConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetCodeBookCreateFieldInput>;
};

export type RawDatasetCodeBookNodeAggregationWhereInput = {
  AND: InputMaybe<Array<RawDatasetCodeBookNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<RawDatasetCodeBookNodeAggregationWhereInput>>;
  bucketName_EQUAL: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  filename_EQUAL: InputMaybe<Scalars['String']>;
  filename_GT: InputMaybe<Scalars['Int']>;
  filename_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  filename_LT: InputMaybe<Scalars['Int']>;
  filename_LTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  objectName_EQUAL: InputMaybe<Scalars['ID']>;
};

export type RawDatasetCodeBookRelationship = HasCodebook & {
  __typename?: 'RawDatasetCodeBookRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type RawDatasetCodeBookUpdateConnectionInput = {
  edge: InputMaybe<HasCodebookUpdateInput>;
  node: InputMaybe<MinioUploadUpdateInput>;
};

export type RawDatasetCodeBookUpdateFieldInput = {
  connect: InputMaybe<RawDatasetCodeBookConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetCodeBookConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetCodeBookCreateFieldInput>;
  delete: InputMaybe<RawDatasetCodeBookDeleteFieldInput>;
  disconnect: InputMaybe<RawDatasetCodeBookDisconnectFieldInput>;
  update: InputMaybe<RawDatasetCodeBookUpdateConnectionInput>;
  where: InputMaybe<RawDatasetCodeBookConnectionWhere>;
};

export type RawDatasetConnectInput = {
  codeBook: InputMaybe<RawDatasetCodeBookConnectFieldInput>;
  fromStudy: InputMaybe<RawDatasetFromStudyConnectFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectFieldInput>;
  minioBucket: InputMaybe<RawDatasetMinioBucketConnectFieldInput>;
  rawdataFile: InputMaybe<RawDatasetRawdataFileConnectFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteConnectFieldInput>;
};

export type RawDatasetConnectOrCreateInput = {
  codeBook: InputMaybe<RawDatasetCodeBookConnectOrCreateFieldInput>;
  fromStudy: InputMaybe<RawDatasetFromStudyConnectOrCreateFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectOrCreateFieldInput>;
  rawdataFile: InputMaybe<RawDatasetRawdataFileConnectOrCreateFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteConnectOrCreateFieldInput>;
};

export type RawDatasetConnectOrCreateWhere = {
  node: RawDatasetUniqueWhere;
};

export type RawDatasetConnectWhere = {
  node: RawDatasetWhere;
};

export type RawDatasetCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  codeBook: InputMaybe<RawDatasetCodeBookFieldInput>;
  description: Scalars['String'];
  fromStudy: InputMaybe<RawDatasetFromStudyFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetFieldInput>;
  minioBucket: InputMaybe<RawDatasetMinioBucketFieldInput>;
  name: Scalars['String'];
  rawdataFile: InputMaybe<RawDatasetRawdataFileFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteFieldInput>;
};

export type RawDatasetCuratedDatasetGeneratedCuratedDatasetAggregationSelection = {
  __typename?: 'RawDatasetCuratedDatasetGeneratedCuratedDatasetAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<RawDatasetCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection>;
};

export type RawDatasetCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection = {
  __typename?: 'RawDatasetCuratedDatasetGeneratedCuratedDatasetNodeAggregateSelection';
  curatedDatasetID: IdAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
};

export type RawDatasetDeleteInput = {
  codeBook: InputMaybe<RawDatasetCodeBookDeleteFieldInput>;
  fromStudy: InputMaybe<RawDatasetFromStudyDeleteFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetDeleteFieldInput>;
  minioBucket: InputMaybe<RawDatasetMinioBucketDeleteFieldInput>;
  rawdataFile: InputMaybe<RawDatasetRawdataFileDeleteFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteDeleteFieldInput>;
};

export type RawDatasetDisconnectInput = {
  codeBook: InputMaybe<RawDatasetCodeBookDisconnectFieldInput>;
  fromStudy: InputMaybe<RawDatasetFromStudyDisconnectFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetDisconnectFieldInput>;
  minioBucket: InputMaybe<RawDatasetMinioBucketDisconnectFieldInput>;
  rawdataFile: InputMaybe<RawDatasetRawdataFileDisconnectFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteDisconnectFieldInput>;
};

export type RawDatasetEdge = {
  __typename?: 'RawDatasetEdge';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type RawDatasetFromStudyAggregateInput = {
  AND: InputMaybe<Array<RawDatasetFromStudyAggregateInput>>;
  OR: InputMaybe<Array<RawDatasetFromStudyAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<RawDatasetFromStudyNodeAggregationWhereInput>;
};

export type RawDatasetFromStudyConnectFieldInput = {
  connect: InputMaybe<StudyConnectInput>;
  where: InputMaybe<StudyConnectWhere>;
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
  node: InputMaybe<StudySort>;
};

export type RawDatasetFromStudyConnectionWhere = {
  AND: InputMaybe<Array<RawDatasetFromStudyConnectionWhere>>;
  OR: InputMaybe<Array<RawDatasetFromStudyConnectionWhere>>;
  node: InputMaybe<StudyWhere>;
  node_NOT: InputMaybe<StudyWhere>;
};

export type RawDatasetFromStudyCreateFieldInput = {
  node: StudyCreateInput;
};

export type RawDatasetFromStudyDeleteFieldInput = {
  delete: InputMaybe<StudyDeleteInput>;
  where: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};

export type RawDatasetFromStudyDisconnectFieldInput = {
  disconnect: InputMaybe<StudyDisconnectInput>;
  where: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};

export type RawDatasetFromStudyFieldInput = {
  connect: InputMaybe<RawDatasetFromStudyConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetFromStudyConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetFromStudyCreateFieldInput>;
};

export type RawDatasetFromStudyNodeAggregationWhereInput = {
  AND: InputMaybe<Array<RawDatasetFromStudyNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<RawDatasetFromStudyNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  fullName_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  fullName_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  fullName_EQUAL: InputMaybe<Scalars['String']>;
  fullName_GT: InputMaybe<Scalars['Int']>;
  fullName_GTE: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_GT: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_LT: InputMaybe<Scalars['Int']>;
  fullName_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  fullName_LT: InputMaybe<Scalars['Int']>;
  fullName_LTE: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  fullName_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  shortName_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  shortName_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  shortName_EQUAL: InputMaybe<Scalars['String']>;
  shortName_GT: InputMaybe<Scalars['Int']>;
  shortName_GTE: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_GT: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_LT: InputMaybe<Scalars['Int']>;
  shortName_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  shortName_LT: InputMaybe<Scalars['Int']>;
  shortName_LTE: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  shortName_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  studyID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type RawDatasetFromStudyRelationship = {
  __typename?: 'RawDatasetFromStudyRelationship';
  cursor: Scalars['String'];
  node: Study;
};

export type RawDatasetFromStudyUpdateConnectionInput = {
  node: InputMaybe<StudyUpdateInput>;
};

export type RawDatasetFromStudyUpdateFieldInput = {
  connect: InputMaybe<RawDatasetFromStudyConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetFromStudyConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetFromStudyCreateFieldInput>;
  delete: InputMaybe<RawDatasetFromStudyDeleteFieldInput>;
  disconnect: InputMaybe<RawDatasetFromStudyDisconnectFieldInput>;
  update: InputMaybe<RawDatasetFromStudyUpdateConnectionInput>;
  where: InputMaybe<RawDatasetFromStudyConnectionWhere>;
};

export type RawDatasetGeneratedCuratedDatasetAggregateInput = {
  AND: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetAggregateInput>>;
  OR: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<RawDatasetGeneratedCuratedDatasetNodeAggregationWhereInput>;
};

export type RawDatasetGeneratedCuratedDatasetConnectFieldInput = {
  connect: InputMaybe<CuratedDatasetConnectInput>;
  where: InputMaybe<CuratedDatasetConnectWhere>;
};

export type RawDatasetGeneratedCuratedDatasetConnectOrCreateFieldInput = {
  onCreate: RawDatasetGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate;
  where: CuratedDatasetConnectOrCreateWhere;
};

export type RawDatasetGeneratedCuratedDatasetConnectOrCreateFieldInputOnCreate = {
  node: CuratedDatasetOnCreateInput;
};

export type RawDatasetGeneratedCuratedDatasetConnection = {
  __typename?: 'RawDatasetGeneratedCuratedDatasetConnection';
  edges: Array<RawDatasetGeneratedCuratedDatasetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetGeneratedCuratedDatasetConnectionSort = {
  node: InputMaybe<CuratedDatasetSort>;
};

export type RawDatasetGeneratedCuratedDatasetConnectionWhere = {
  AND: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetConnectionWhere>>;
  OR: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetConnectionWhere>>;
  node: InputMaybe<CuratedDatasetWhere>;
  node_NOT: InputMaybe<CuratedDatasetWhere>;
};

export type RawDatasetGeneratedCuratedDatasetCreateFieldInput = {
  node: CuratedDatasetCreateInput;
};

export type RawDatasetGeneratedCuratedDatasetDeleteFieldInput = {
  delete: InputMaybe<CuratedDatasetDeleteInput>;
  where: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectionWhere>;
};

export type RawDatasetGeneratedCuratedDatasetDisconnectFieldInput = {
  disconnect: InputMaybe<CuratedDatasetDisconnectInput>;
  where: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectionWhere>;
};

export type RawDatasetGeneratedCuratedDatasetFieldInput = {
  connect: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetGeneratedCuratedDatasetCreateFieldInput>;
};

export type RawDatasetGeneratedCuratedDatasetNodeAggregationWhereInput = {
  AND: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<RawDatasetGeneratedCuratedDatasetNodeAggregationWhereInput>>;
  curatedDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
};

export type RawDatasetGeneratedCuratedDatasetRelationship = {
  __typename?: 'RawDatasetGeneratedCuratedDatasetRelationship';
  cursor: Scalars['String'];
  node: CuratedDataset;
};

export type RawDatasetGeneratedCuratedDatasetUpdateConnectionInput = {
  node: InputMaybe<CuratedDatasetUpdateInput>;
};

export type RawDatasetGeneratedCuratedDatasetUpdateFieldInput = {
  connect: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetGeneratedCuratedDatasetCreateFieldInput>;
  delete: InputMaybe<RawDatasetGeneratedCuratedDatasetDeleteFieldInput>;
  disconnect: InputMaybe<RawDatasetGeneratedCuratedDatasetDisconnectFieldInput>;
  update: InputMaybe<RawDatasetGeneratedCuratedDatasetUpdateConnectionInput>;
  where: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectionWhere>;
};

export type RawDatasetGeographyCityStudySiteAggregationSelection = {
  __typename?: 'RawDatasetGeographyCityStudySiteAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<RawDatasetGeographyCityStudySiteNodeAggregateSelection>;
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
  AND: InputMaybe<Array<RawDatasetMinioBucketAggregateInput>>;
  OR: InputMaybe<Array<RawDatasetMinioBucketAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<RawDatasetMinioBucketNodeAggregationWhereInput>;
};

export type RawDatasetMinioBucketConnectFieldInput = {
  connect: InputMaybe<MinioBucketConnectInput>;
  where: InputMaybe<MinioBucketConnectWhere>;
};

export type RawDatasetMinioBucketConnection = {
  __typename?: 'RawDatasetMinioBucketConnection';
  edges: Array<RawDatasetMinioBucketRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RawDatasetMinioBucketConnectionSort = {
  node: InputMaybe<MinioBucketSort>;
};

export type RawDatasetMinioBucketConnectionWhere = {
  AND: InputMaybe<Array<RawDatasetMinioBucketConnectionWhere>>;
  OR: InputMaybe<Array<RawDatasetMinioBucketConnectionWhere>>;
  node: InputMaybe<MinioBucketWhere>;
  node_NOT: InputMaybe<MinioBucketWhere>;
};

export type RawDatasetMinioBucketCreateFieldInput = {
  node: MinioBucketCreateInput;
};

export type RawDatasetMinioBucketDeleteFieldInput = {
  delete: InputMaybe<MinioBucketDeleteInput>;
  where: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};

export type RawDatasetMinioBucketDisconnectFieldInput = {
  disconnect: InputMaybe<MinioBucketDisconnectInput>;
  where: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};

export type RawDatasetMinioBucketFieldInput = {
  connect: InputMaybe<RawDatasetMinioBucketConnectFieldInput>;
  create: InputMaybe<RawDatasetMinioBucketCreateFieldInput>;
};

export type RawDatasetMinioBucketMinioBucketAggregationSelection = {
  __typename?: 'RawDatasetMinioBucketMinioBucketAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<RawDatasetMinioBucketMinioBucketNodeAggregateSelection>;
};

export type RawDatasetMinioBucketMinioBucketNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioBucketMinioBucketNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
};

export type RawDatasetMinioBucketNodeAggregationWhereInput = {
  AND: InputMaybe<Array<RawDatasetMinioBucketNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<RawDatasetMinioBucketNodeAggregationWhereInput>>;
  bucketName_EQUAL: InputMaybe<Scalars['ID']>;
};

export type RawDatasetMinioBucketRelationship = {
  __typename?: 'RawDatasetMinioBucketRelationship';
  cursor: Scalars['String'];
  node: MinioBucket;
};

export type RawDatasetMinioBucketUpdateConnectionInput = {
  node: InputMaybe<MinioBucketUpdateInput>;
};

export type RawDatasetMinioBucketUpdateFieldInput = {
  connect: InputMaybe<RawDatasetMinioBucketConnectFieldInput>;
  create: InputMaybe<RawDatasetMinioBucketCreateFieldInput>;
  delete: InputMaybe<RawDatasetMinioBucketDeleteFieldInput>;
  disconnect: InputMaybe<RawDatasetMinioBucketDisconnectFieldInput>;
  update: InputMaybe<RawDatasetMinioBucketUpdateConnectionInput>;
  where: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
};

export type RawDatasetMinioUploadCodeBookAggregationSelection = {
  __typename?: 'RawDatasetMinioUploadCodeBookAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<RawDatasetMinioUploadCodeBookNodeAggregateSelection>;
};

export type RawDatasetMinioUploadCodeBookNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioUploadCodeBookNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type RawDatasetMinioUploadRawdataFileAggregationSelection = {
  __typename?: 'RawDatasetMinioUploadRawdataFileAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<RawDatasetMinioUploadRawdataFileNodeAggregateSelection>;
};

export type RawDatasetMinioUploadRawdataFileNodeAggregateSelection = {
  __typename?: 'RawDatasetMinioUploadRawdataFileNodeAggregateSelection';
  bucketName: IdAggregateSelectionNonNullable;
  filename: StringAggregateSelectionNonNullable;
  objectName: IdAggregateSelectionNonNullable;
};

export type RawDatasetOnCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type RawDatasetOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more RawDatasetSort objects to sort RawDatasets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<RawDatasetSort>>;
};

export type RawDatasetRawdataFileAggregateInput = {
  AND: InputMaybe<Array<RawDatasetRawdataFileAggregateInput>>;
  OR: InputMaybe<Array<RawDatasetRawdataFileAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<RawDatasetRawdataFileNodeAggregationWhereInput>;
};

export type RawDatasetRawdataFileConnectFieldInput = {
  connect: InputMaybe<MinioUploadConnectInput>;
  edge: HasRawdatafileCreateInput;
  where: InputMaybe<MinioUploadConnectWhere>;
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
  edge: InputMaybe<HasRawdatafileSort>;
  node: InputMaybe<MinioUploadSort>;
};

export type RawDatasetRawdataFileConnectionWhere = {
  AND: InputMaybe<Array<RawDatasetRawdataFileConnectionWhere>>;
  OR: InputMaybe<Array<RawDatasetRawdataFileConnectionWhere>>;
  edge: InputMaybe<HasRawdatafileWhere>;
  edge_NOT: InputMaybe<HasRawdatafileWhere>;
  node: InputMaybe<MinioUploadWhere>;
  node_NOT: InputMaybe<MinioUploadWhere>;
};

export type RawDatasetRawdataFileCreateFieldInput = {
  edge: HasRawdatafileCreateInput;
  node: MinioUploadCreateInput;
};

export type RawDatasetRawdataFileDeleteFieldInput = {
  delete: InputMaybe<MinioUploadDeleteInput>;
  where: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};

export type RawDatasetRawdataFileDisconnectFieldInput = {
  disconnect: InputMaybe<MinioUploadDisconnectInput>;
  where: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};

export type RawDatasetRawdataFileFieldInput = {
  connect: InputMaybe<RawDatasetRawdataFileConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetRawdataFileConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetRawdataFileCreateFieldInput>;
};

export type RawDatasetRawdataFileNodeAggregationWhereInput = {
  AND: InputMaybe<Array<RawDatasetRawdataFileNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<RawDatasetRawdataFileNodeAggregationWhereInput>>;
  bucketName_EQUAL: InputMaybe<Scalars['ID']>;
  filename_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  filename_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  filename_EQUAL: InputMaybe<Scalars['String']>;
  filename_GT: InputMaybe<Scalars['Int']>;
  filename_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LT: InputMaybe<Scalars['Int']>;
  filename_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  filename_LT: InputMaybe<Scalars['Int']>;
  filename_LTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  filename_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  objectName_EQUAL: InputMaybe<Scalars['ID']>;
};

export type RawDatasetRawdataFileRelationship = HasRawdatafile & {
  __typename?: 'RawDatasetRawdataFileRelationship';
  cursor: Scalars['String'];
  node: MinioUpload;
  validated: Scalars['Boolean'];
};

export type RawDatasetRawdataFileUpdateConnectionInput = {
  edge: InputMaybe<HasRawdatafileUpdateInput>;
  node: InputMaybe<MinioUploadUpdateInput>;
};

export type RawDatasetRawdataFileUpdateFieldInput = {
  connect: InputMaybe<RawDatasetRawdataFileConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetRawdataFileConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetRawdataFileCreateFieldInput>;
  delete: InputMaybe<RawDatasetRawdataFileDeleteFieldInput>;
  disconnect: InputMaybe<RawDatasetRawdataFileDisconnectFieldInput>;
  update: InputMaybe<RawDatasetRawdataFileUpdateConnectionInput>;
  where: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
};

export type RawDatasetRelationInput = {
  codeBook: InputMaybe<RawDatasetCodeBookCreateFieldInput>;
  fromStudy: InputMaybe<RawDatasetFromStudyCreateFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetCreateFieldInput>;
  minioBucket: InputMaybe<RawDatasetMinioBucketCreateFieldInput>;
  rawdataFile: InputMaybe<RawDatasetRawdataFileCreateFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteCreateFieldInput>;
};

/** Fields to sort RawDatasets by. The order in which sorts are applied is not guaranteed when specifying many fields in one RawDatasetSort object. */
export type RawDatasetSort = {
  createdAt: InputMaybe<SortDirection>;
  description: InputMaybe<SortDirection>;
  name: InputMaybe<SortDirection>;
  rawDatasetID: InputMaybe<SortDirection>;
};

export type RawDatasetStudyFromStudyAggregationSelection = {
  __typename?: 'RawDatasetStudyFromStudyAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<RawDatasetStudyFromStudyNodeAggregateSelection>;
};

export type RawDatasetStudyFromStudyNodeAggregateSelection = {
  __typename?: 'RawDatasetStudyFromStudyNodeAggregateSelection';
  description: StringAggregateSelectionNonNullable;
  fullName: StringAggregateSelectionNonNullable;
  shortName: StringAggregateSelectionNonNullable;
  studyID: IdAggregateSelectionNonNullable;
};

export type RawDatasetStudySiteAggregateInput = {
  AND: InputMaybe<Array<RawDatasetStudySiteAggregateInput>>;
  OR: InputMaybe<Array<RawDatasetStudySiteAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<RawDatasetStudySiteNodeAggregationWhereInput>;
};

export type RawDatasetStudySiteConnectFieldInput = {
  where: InputMaybe<GeographyCityConnectWhere>;
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
  node: InputMaybe<GeographyCitySort>;
};

export type RawDatasetStudySiteConnectionWhere = {
  AND: InputMaybe<Array<RawDatasetStudySiteConnectionWhere>>;
  OR: InputMaybe<Array<RawDatasetStudySiteConnectionWhere>>;
  node: InputMaybe<GeographyCityWhere>;
  node_NOT: InputMaybe<GeographyCityWhere>;
};

export type RawDatasetStudySiteCreateFieldInput = {
  node: GeographyCityCreateInput;
};

export type RawDatasetStudySiteDeleteFieldInput = {
  where: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetStudySiteDisconnectFieldInput = {
  where: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetStudySiteFieldInput = {
  connect: InputMaybe<RawDatasetStudySiteConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetStudySiteConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetStudySiteCreateFieldInput>;
};

export type RawDatasetStudySiteNodeAggregationWhereInput = {
  AND: InputMaybe<Array<RawDatasetStudySiteNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<RawDatasetStudySiteNodeAggregationWhereInput>>;
  cityID_EQUAL: InputMaybe<Scalars['ID']>;
  city_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  city_EQUAL: InputMaybe<Scalars['String']>;
  city_GT: InputMaybe<Scalars['Int']>;
  city_GTE: InputMaybe<Scalars['Int']>;
  city_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  city_LONGEST_GT: InputMaybe<Scalars['Int']>;
  city_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  city_LONGEST_LT: InputMaybe<Scalars['Int']>;
  city_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  city_LT: InputMaybe<Scalars['Int']>;
  city_LTE: InputMaybe<Scalars['Int']>;
  city_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  country_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  country_EQUAL: InputMaybe<Scalars['String']>;
  country_GT: InputMaybe<Scalars['Int']>;
  country_GTE: InputMaybe<Scalars['Int']>;
  country_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  country_LONGEST_GT: InputMaybe<Scalars['Int']>;
  country_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  country_LONGEST_LT: InputMaybe<Scalars['Int']>;
  country_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  country_LT: InputMaybe<Scalars['Int']>;
  country_LTE: InputMaybe<Scalars['Int']>;
  country_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  id_EQUAL: InputMaybe<Scalars['ID']>;
  latitude_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  latitude_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_GT: InputMaybe<Scalars['Float']>;
  latitude_GTE: InputMaybe<Scalars['Float']>;
  latitude_LT: InputMaybe<Scalars['Float']>;
  latitude_LTE: InputMaybe<Scalars['Float']>;
  latitude_MAX_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_MAX_GT: InputMaybe<Scalars['Float']>;
  latitude_MAX_GTE: InputMaybe<Scalars['Float']>;
  latitude_MAX_LT: InputMaybe<Scalars['Float']>;
  latitude_MAX_LTE: InputMaybe<Scalars['Float']>;
  latitude_MIN_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_MIN_GT: InputMaybe<Scalars['Float']>;
  latitude_MIN_GTE: InputMaybe<Scalars['Float']>;
  latitude_MIN_LT: InputMaybe<Scalars['Float']>;
  latitude_MIN_LTE: InputMaybe<Scalars['Float']>;
  latitude_SUM_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_SUM_GT: InputMaybe<Scalars['Float']>;
  latitude_SUM_GTE: InputMaybe<Scalars['Float']>;
  latitude_SUM_LT: InputMaybe<Scalars['Float']>;
  latitude_SUM_LTE: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  longitude_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_GT: InputMaybe<Scalars['Float']>;
  longitude_GTE: InputMaybe<Scalars['Float']>;
  longitude_LT: InputMaybe<Scalars['Float']>;
  longitude_LTE: InputMaybe<Scalars['Float']>;
  longitude_MAX_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_MAX_GT: InputMaybe<Scalars['Float']>;
  longitude_MAX_GTE: InputMaybe<Scalars['Float']>;
  longitude_MAX_LT: InputMaybe<Scalars['Float']>;
  longitude_MAX_LTE: InputMaybe<Scalars['Float']>;
  longitude_MIN_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_MIN_GT: InputMaybe<Scalars['Float']>;
  longitude_MIN_GTE: InputMaybe<Scalars['Float']>;
  longitude_MIN_LT: InputMaybe<Scalars['Float']>;
  longitude_MIN_LTE: InputMaybe<Scalars['Float']>;
  longitude_SUM_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_SUM_GT: InputMaybe<Scalars['Float']>;
  longitude_SUM_GTE: InputMaybe<Scalars['Float']>;
  longitude_SUM_LT: InputMaybe<Scalars['Float']>;
  longitude_SUM_LTE: InputMaybe<Scalars['Float']>;
};

export type RawDatasetStudySiteRelationship = {
  __typename?: 'RawDatasetStudySiteRelationship';
  cursor: Scalars['String'];
  node: GeographyCity;
};

export type RawDatasetStudySiteUpdateConnectionInput = {
  node: InputMaybe<GeographyCityUpdateInput>;
};

export type RawDatasetStudySiteUpdateFieldInput = {
  connect: InputMaybe<RawDatasetStudySiteConnectFieldInput>;
  connectOrCreate: InputMaybe<RawDatasetStudySiteConnectOrCreateFieldInput>;
  create: InputMaybe<RawDatasetStudySiteCreateFieldInput>;
  delete: InputMaybe<RawDatasetStudySiteDeleteFieldInput>;
  disconnect: InputMaybe<RawDatasetStudySiteDisconnectFieldInput>;
  update: InputMaybe<RawDatasetStudySiteUpdateConnectionInput>;
  where: InputMaybe<RawDatasetStudySiteConnectionWhere>;
};

export type RawDatasetUniqueWhere = {
  rawDatasetID: InputMaybe<Scalars['ID']>;
};

export type RawDatasetUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  codeBook: InputMaybe<RawDatasetCodeBookUpdateFieldInput>;
  description: InputMaybe<Scalars['String']>;
  fromStudy: InputMaybe<RawDatasetFromStudyUpdateFieldInput>;
  generatedCuratedDataset: InputMaybe<RawDatasetGeneratedCuratedDatasetUpdateFieldInput>;
  minioBucket: InputMaybe<RawDatasetMinioBucketUpdateFieldInput>;
  name: InputMaybe<Scalars['String']>;
  rawdataFile: InputMaybe<RawDatasetRawdataFileUpdateFieldInput>;
  studySite: InputMaybe<RawDatasetStudySiteUpdateFieldInput>;
};

export type RawDatasetWhere = {
  AND: InputMaybe<Array<RawDatasetWhere>>;
  OR: InputMaybe<Array<RawDatasetWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  codeBook: InputMaybe<MinioUploadWhere>;
  codeBookAggregate: InputMaybe<RawDatasetCodeBookAggregateInput>;
  codeBookConnection: InputMaybe<RawDatasetCodeBookConnectionWhere>;
  codeBookConnection_NOT: InputMaybe<RawDatasetCodeBookConnectionWhere>;
  codeBook_NOT: InputMaybe<MinioUploadWhere>;
  createdAt: InputMaybe<Scalars['DateTime']>;
  createdAt_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_IN: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN: InputMaybe<Array<Scalars['DateTime']>>;
  description: InputMaybe<Scalars['String']>;
  description_CONTAINS: InputMaybe<Scalars['String']>;
  description_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  description_STARTS_WITH: InputMaybe<Scalars['String']>;
  fromStudy: InputMaybe<StudyWhere>;
  fromStudyAggregate: InputMaybe<RawDatasetFromStudyAggregateInput>;
  fromStudyConnection: InputMaybe<RawDatasetFromStudyConnectionWhere>;
  fromStudyConnection_NOT: InputMaybe<RawDatasetFromStudyConnectionWhere>;
  fromStudy_NOT: InputMaybe<StudyWhere>;
  generatedCuratedDataset: InputMaybe<CuratedDatasetWhere>;
  generatedCuratedDatasetAggregate: InputMaybe<RawDatasetGeneratedCuratedDatasetAggregateInput>;
  generatedCuratedDatasetConnection: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectionWhere>;
  generatedCuratedDatasetConnection_NOT: InputMaybe<RawDatasetGeneratedCuratedDatasetConnectionWhere>;
  generatedCuratedDataset_NOT: InputMaybe<CuratedDatasetWhere>;
  minioBucket: InputMaybe<MinioBucketWhere>;
  minioBucketAggregate: InputMaybe<RawDatasetMinioBucketAggregateInput>;
  minioBucketConnection: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
  minioBucketConnection_NOT: InputMaybe<RawDatasetMinioBucketConnectionWhere>;
  minioBucket_NOT: InputMaybe<MinioBucketWhere>;
  name: InputMaybe<Scalars['String']>;
  name_CONTAINS: InputMaybe<Scalars['String']>;
  name_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  name_STARTS_WITH: InputMaybe<Scalars['String']>;
  rawDatasetID: InputMaybe<Scalars['ID']>;
  rawDatasetID_CONTAINS: InputMaybe<Scalars['ID']>;
  rawDatasetID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  rawDatasetID_IN: InputMaybe<Array<Scalars['ID']>>;
  rawDatasetID_NOT: InputMaybe<Scalars['ID']>;
  rawDatasetID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  rawDatasetID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  rawDatasetID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  rawDatasetID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  rawDatasetID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  rawdataFile: InputMaybe<MinioUploadWhere>;
  rawdataFileAggregate: InputMaybe<RawDatasetRawdataFileAggregateInput>;
  rawdataFileConnection: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
  rawdataFileConnection_NOT: InputMaybe<RawDatasetRawdataFileConnectionWhere>;
  rawdataFile_NOT: InputMaybe<MinioUploadWhere>;
  studySite: InputMaybe<GeographyCityWhere>;
  studySiteAggregate: InputMaybe<RawDatasetStudySiteAggregateInput>;
  studySiteConnection: InputMaybe<RawDatasetStudySiteConnectionWhere>;
  studySiteConnection_NOT: InputMaybe<RawDatasetStudySiteConnectionWhere>;
  studySite_NOT: InputMaybe<GeographyCityWhere>;
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
  longest: Maybe<Scalars['String']>;
  shortest: Maybe<Scalars['String']>;
};

export type StudiesConnection = {
  __typename?: 'StudiesConnection';
  edges: Array<StudyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Study = {
  __typename?: 'Study';
  allowedSites: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedStudies: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  rawDatasets: Array<RawDataset>;
  rawDatasetsAggregate: Maybe<StudyRawDatasetRawDatasetsAggregationSelection>;
  rawDatasetsConnection: StudyRawDatasetsConnection;
  shortName: Scalars['String'];
  studyID: Scalars['ID'];
  studySites: Array<GeographyCity>;
  studySitesAggregate: Maybe<StudyGeographyCityStudySitesAggregationSelection>;
  studySitesConnection: StudyStudySitesConnection;
};


export type StudyRawDatasetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<RawDatasetOptions>;
  where: InputMaybe<RawDatasetWhere>;
};


export type StudyRawDatasetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<RawDatasetWhere>;
};


export type StudyRawDatasetsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<StudyRawDatasetsConnectionSort>>;
  where: InputMaybe<StudyRawDatasetsConnectionWhere>;
};


export type StudyStudySitesArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options: InputMaybe<GeographyCityOptions>;
  where: InputMaybe<GeographyCityWhere>;
};


export type StudyStudySitesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where: InputMaybe<GeographyCityWhere>;
};


export type StudyStudySitesConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<StudyStudySitesConnectionSort>>;
  where: InputMaybe<StudyStudySitesConnectionWhere>;
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
  rawDatasets: InputMaybe<Array<StudyRawDatasetsConnectFieldInput>>;
  studySites: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
};

export type StudyConnectOrCreateInput = {
  rawDatasets: InputMaybe<Array<StudyRawDatasetsConnectOrCreateFieldInput>>;
  studySites: InputMaybe<Array<StudyStudySitesConnectOrCreateFieldInput>>;
};

export type StudyConnectOrCreateWhere = {
  node: StudyUniqueWhere;
};

export type StudyConnectWhere = {
  node: StudyWhere;
};

export type StudyCreateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  rawDatasets: InputMaybe<StudyRawDatasetsFieldInput>;
  shortName: Scalars['String'];
  studySites: InputMaybe<StudyStudySitesFieldInput>;
};

export type StudyDeleteInput = {
  rawDatasets: InputMaybe<Array<StudyRawDatasetsDeleteFieldInput>>;
  studySites: InputMaybe<Array<StudyStudySitesDeleteFieldInput>>;
};

export type StudyDisconnectInput = {
  rawDatasets: InputMaybe<Array<StudyRawDatasetsDisconnectFieldInput>>;
  studySites: InputMaybe<Array<StudyStudySitesDisconnectFieldInput>>;
};

export type StudyEdge = {
  __typename?: 'StudyEdge';
  cursor: Scalars['String'];
  node: Study;
};

export type StudyGeographyCityStudySitesAggregationSelection = {
  __typename?: 'StudyGeographyCityStudySitesAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<StudyGeographyCityStudySitesNodeAggregateSelection>;
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
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: Scalars['String'];
  fullName: Scalars['String'];
  shortName: Scalars['String'];
};

export type StudyOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more StudySort objects to sort Studies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<StudySort>>;
};

export type StudyRawDatasetRawDatasetsAggregationSelection = {
  __typename?: 'StudyRawDatasetRawDatasetsAggregationSelection';
  count: Scalars['Int'];
  node: Maybe<StudyRawDatasetRawDatasetsNodeAggregateSelection>;
};

export type StudyRawDatasetRawDatasetsNodeAggregateSelection = {
  __typename?: 'StudyRawDatasetRawDatasetsNodeAggregateSelection';
  createdAt: DateTimeAggregateSelectionNonNullable;
  description: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  rawDatasetID: IdAggregateSelectionNonNullable;
};

export type StudyRawDatasetsAggregateInput = {
  AND: InputMaybe<Array<StudyRawDatasetsAggregateInput>>;
  OR: InputMaybe<Array<StudyRawDatasetsAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<StudyRawDatasetsNodeAggregationWhereInput>;
};

export type StudyRawDatasetsConnectFieldInput = {
  connect: InputMaybe<Array<RawDatasetConnectInput>>;
  where: InputMaybe<RawDatasetConnectWhere>;
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
  node: InputMaybe<RawDatasetSort>;
};

export type StudyRawDatasetsConnectionWhere = {
  AND: InputMaybe<Array<StudyRawDatasetsConnectionWhere>>;
  OR: InputMaybe<Array<StudyRawDatasetsConnectionWhere>>;
  node: InputMaybe<RawDatasetWhere>;
  node_NOT: InputMaybe<RawDatasetWhere>;
};

export type StudyRawDatasetsCreateFieldInput = {
  node: RawDatasetCreateInput;
};

export type StudyRawDatasetsDeleteFieldInput = {
  delete: InputMaybe<RawDatasetDeleteInput>;
  where: InputMaybe<StudyRawDatasetsConnectionWhere>;
};

export type StudyRawDatasetsDisconnectFieldInput = {
  disconnect: InputMaybe<RawDatasetDisconnectInput>;
  where: InputMaybe<StudyRawDatasetsConnectionWhere>;
};

export type StudyRawDatasetsFieldInput = {
  connect: InputMaybe<Array<StudyRawDatasetsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<StudyRawDatasetsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<StudyRawDatasetsCreateFieldInput>>;
};

export type StudyRawDatasetsNodeAggregationWhereInput = {
  AND: InputMaybe<Array<StudyRawDatasetsNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<StudyRawDatasetsNodeAggregationWhereInput>>;
  createdAt_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE: InputMaybe<Scalars['DateTime']>;
  description_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  description_EQUAL: InputMaybe<Scalars['String']>;
  description_GT: InputMaybe<Scalars['Int']>;
  description_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  description_LT: InputMaybe<Scalars['Int']>;
  description_LTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  name_EQUAL: InputMaybe<Scalars['String']>;
  name_GT: InputMaybe<Scalars['Int']>;
  name_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  name_LT: InputMaybe<Scalars['Int']>;
  name_LTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  rawDatasetID_EQUAL: InputMaybe<Scalars['ID']>;
};

export type StudyRawDatasetsRelationship = {
  __typename?: 'StudyRawDatasetsRelationship';
  cursor: Scalars['String'];
  node: RawDataset;
};

export type StudyRawDatasetsUpdateConnectionInput = {
  node: InputMaybe<RawDatasetUpdateInput>;
};

export type StudyRawDatasetsUpdateFieldInput = {
  connect: InputMaybe<Array<StudyRawDatasetsConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<StudyRawDatasetsConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<StudyRawDatasetsCreateFieldInput>>;
  delete: InputMaybe<Array<StudyRawDatasetsDeleteFieldInput>>;
  disconnect: InputMaybe<Array<StudyRawDatasetsDisconnectFieldInput>>;
  update: InputMaybe<StudyRawDatasetsUpdateConnectionInput>;
  where: InputMaybe<StudyRawDatasetsConnectionWhere>;
};

export type StudyRelationInput = {
  rawDatasets: InputMaybe<Array<StudyRawDatasetsCreateFieldInput>>;
  studySites: InputMaybe<Array<StudyStudySitesCreateFieldInput>>;
};

/** Fields to sort Studies by. The order in which sorts are applied is not guaranteed when specifying many fields in one StudySort object. */
export type StudySort = {
  description: InputMaybe<SortDirection>;
  fullName: InputMaybe<SortDirection>;
  shortName: InputMaybe<SortDirection>;
  studyID: InputMaybe<SortDirection>;
};

export type StudyStudySitesAggregateInput = {
  AND: InputMaybe<Array<StudyStudySitesAggregateInput>>;
  OR: InputMaybe<Array<StudyStudySitesAggregateInput>>;
  count: InputMaybe<Scalars['Int']>;
  count_GT: InputMaybe<Scalars['Int']>;
  count_GTE: InputMaybe<Scalars['Int']>;
  count_LT: InputMaybe<Scalars['Int']>;
  count_LTE: InputMaybe<Scalars['Int']>;
  node: InputMaybe<StudyStudySitesNodeAggregationWhereInput>;
};

export type StudyStudySitesConnectFieldInput = {
  where: InputMaybe<GeographyCityConnectWhere>;
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
  node: InputMaybe<GeographyCitySort>;
};

export type StudyStudySitesConnectionWhere = {
  AND: InputMaybe<Array<StudyStudySitesConnectionWhere>>;
  OR: InputMaybe<Array<StudyStudySitesConnectionWhere>>;
  node: InputMaybe<GeographyCityWhere>;
  node_NOT: InputMaybe<GeographyCityWhere>;
};

export type StudyStudySitesCreateFieldInput = {
  node: GeographyCityCreateInput;
};

export type StudyStudySitesDeleteFieldInput = {
  where: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyStudySitesDisconnectFieldInput = {
  where: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyStudySitesFieldInput = {
  connect: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<StudyStudySitesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<StudyStudySitesCreateFieldInput>>;
};

export type StudyStudySitesNodeAggregationWhereInput = {
  AND: InputMaybe<Array<StudyStudySitesNodeAggregationWhereInput>>;
  OR: InputMaybe<Array<StudyStudySitesNodeAggregationWhereInput>>;
  cityID_EQUAL: InputMaybe<Scalars['ID']>;
  city_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  city_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  city_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  city_EQUAL: InputMaybe<Scalars['String']>;
  city_GT: InputMaybe<Scalars['Int']>;
  city_GTE: InputMaybe<Scalars['Int']>;
  city_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  city_LONGEST_GT: InputMaybe<Scalars['Int']>;
  city_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  city_LONGEST_LT: InputMaybe<Scalars['Int']>;
  city_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  city_LT: InputMaybe<Scalars['Int']>;
  city_LTE: InputMaybe<Scalars['Int']>;
  city_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  city_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  city_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  country_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  country_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  country_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  country_EQUAL: InputMaybe<Scalars['String']>;
  country_GT: InputMaybe<Scalars['Int']>;
  country_GTE: InputMaybe<Scalars['Int']>;
  country_LONGEST_EQUAL: InputMaybe<Scalars['Int']>;
  country_LONGEST_GT: InputMaybe<Scalars['Int']>;
  country_LONGEST_GTE: InputMaybe<Scalars['Int']>;
  country_LONGEST_LT: InputMaybe<Scalars['Int']>;
  country_LONGEST_LTE: InputMaybe<Scalars['Int']>;
  country_LT: InputMaybe<Scalars['Int']>;
  country_LTE: InputMaybe<Scalars['Int']>;
  country_SHORTEST_EQUAL: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GT: InputMaybe<Scalars['Int']>;
  country_SHORTEST_GTE: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LT: InputMaybe<Scalars['Int']>;
  country_SHORTEST_LTE: InputMaybe<Scalars['Int']>;
  id_EQUAL: InputMaybe<Scalars['ID']>;
  latitude_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  latitude_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  latitude_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_GT: InputMaybe<Scalars['Float']>;
  latitude_GTE: InputMaybe<Scalars['Float']>;
  latitude_LT: InputMaybe<Scalars['Float']>;
  latitude_LTE: InputMaybe<Scalars['Float']>;
  latitude_MAX_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_MAX_GT: InputMaybe<Scalars['Float']>;
  latitude_MAX_GTE: InputMaybe<Scalars['Float']>;
  latitude_MAX_LT: InputMaybe<Scalars['Float']>;
  latitude_MAX_LTE: InputMaybe<Scalars['Float']>;
  latitude_MIN_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_MIN_GT: InputMaybe<Scalars['Float']>;
  latitude_MIN_GTE: InputMaybe<Scalars['Float']>;
  latitude_MIN_LT: InputMaybe<Scalars['Float']>;
  latitude_MIN_LTE: InputMaybe<Scalars['Float']>;
  latitude_SUM_EQUAL: InputMaybe<Scalars['Float']>;
  latitude_SUM_GT: InputMaybe<Scalars['Float']>;
  latitude_SUM_GTE: InputMaybe<Scalars['Float']>;
  latitude_SUM_LT: InputMaybe<Scalars['Float']>;
  latitude_SUM_LTE: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GT: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_GTE: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LT: InputMaybe<Scalars['Float']>;
  longitude_AVERAGE_LTE: InputMaybe<Scalars['Float']>;
  longitude_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_GT: InputMaybe<Scalars['Float']>;
  longitude_GTE: InputMaybe<Scalars['Float']>;
  longitude_LT: InputMaybe<Scalars['Float']>;
  longitude_LTE: InputMaybe<Scalars['Float']>;
  longitude_MAX_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_MAX_GT: InputMaybe<Scalars['Float']>;
  longitude_MAX_GTE: InputMaybe<Scalars['Float']>;
  longitude_MAX_LT: InputMaybe<Scalars['Float']>;
  longitude_MAX_LTE: InputMaybe<Scalars['Float']>;
  longitude_MIN_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_MIN_GT: InputMaybe<Scalars['Float']>;
  longitude_MIN_GTE: InputMaybe<Scalars['Float']>;
  longitude_MIN_LT: InputMaybe<Scalars['Float']>;
  longitude_MIN_LTE: InputMaybe<Scalars['Float']>;
  longitude_SUM_EQUAL: InputMaybe<Scalars['Float']>;
  longitude_SUM_GT: InputMaybe<Scalars['Float']>;
  longitude_SUM_GTE: InputMaybe<Scalars['Float']>;
  longitude_SUM_LT: InputMaybe<Scalars['Float']>;
  longitude_SUM_LTE: InputMaybe<Scalars['Float']>;
};

export type StudyStudySitesRelationship = {
  __typename?: 'StudyStudySitesRelationship';
  cursor: Scalars['String'];
  node: GeographyCity;
};

export type StudyStudySitesUpdateConnectionInput = {
  node: InputMaybe<GeographyCityUpdateInput>;
};

export type StudyStudySitesUpdateFieldInput = {
  connect: InputMaybe<Array<StudyStudySitesConnectFieldInput>>;
  connectOrCreate: InputMaybe<Array<StudyStudySitesConnectOrCreateFieldInput>>;
  create: InputMaybe<Array<StudyStudySitesCreateFieldInput>>;
  delete: InputMaybe<Array<StudyStudySitesDeleteFieldInput>>;
  disconnect: InputMaybe<Array<StudyStudySitesDisconnectFieldInput>>;
  update: InputMaybe<StudyStudySitesUpdateConnectionInput>;
  where: InputMaybe<StudyStudySitesConnectionWhere>;
};

export type StudyUniqueWhere = {
  studyID: InputMaybe<Scalars['ID']>;
};

export type StudyUpdateInput = {
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_POP: InputMaybe<Scalars['Int']>;
  allowedSites_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_POP: InputMaybe<Scalars['Int']>;
  allowedStudies_PUSH: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description: InputMaybe<Scalars['String']>;
  fullName: InputMaybe<Scalars['String']>;
  rawDatasets: InputMaybe<Array<StudyRawDatasetsUpdateFieldInput>>;
  shortName: InputMaybe<Scalars['String']>;
  studySites: InputMaybe<Array<StudyStudySitesUpdateFieldInput>>;
};

export type StudyWhere = {
  AND: InputMaybe<Array<StudyWhere>>;
  OR: InputMaybe<Array<StudyWhere>>;
  allowedSites: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_INCLUDES: InputMaybe<Scalars['String']>;
  allowedSites_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedSites_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_INCLUDES: InputMaybe<Scalars['String']>;
  allowedStudies_NOT: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  allowedStudies_NOT_INCLUDES: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  description_CONTAINS: InputMaybe<Scalars['String']>;
  description_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  description_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  description_STARTS_WITH: InputMaybe<Scalars['String']>;
  fullName: InputMaybe<Scalars['String']>;
  fullName_CONTAINS: InputMaybe<Scalars['String']>;
  fullName_ENDS_WITH: InputMaybe<Scalars['String']>;
  fullName_IN: InputMaybe<Array<Scalars['String']>>;
  fullName_NOT: InputMaybe<Scalars['String']>;
  fullName_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  fullName_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  fullName_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  fullName_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  fullName_STARTS_WITH: InputMaybe<Scalars['String']>;
  rawDatasets: InputMaybe<RawDatasetWhere>;
  rawDatasetsAggregate: InputMaybe<StudyRawDatasetsAggregateInput>;
  rawDatasetsConnection: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_ALL: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NONE: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_NOT: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SINGLE: InputMaybe<StudyRawDatasetsConnectionWhere>;
  rawDatasetsConnection_SOME: InputMaybe<StudyRawDatasetsConnectionWhere>;
  /** Return Studies where all of the related RawDatasets match this filter */
  rawDatasets_ALL: InputMaybe<RawDatasetWhere>;
  /** Return Studies where none of the related RawDatasets match this filter */
  rawDatasets_NONE: InputMaybe<RawDatasetWhere>;
  rawDatasets_NOT: InputMaybe<RawDatasetWhere>;
  /** Return Studies where one of the related RawDatasets match this filter */
  rawDatasets_SINGLE: InputMaybe<RawDatasetWhere>;
  /** Return Studies where some of the related RawDatasets match this filter */
  rawDatasets_SOME: InputMaybe<RawDatasetWhere>;
  shortName: InputMaybe<Scalars['String']>;
  shortName_CONTAINS: InputMaybe<Scalars['String']>;
  shortName_ENDS_WITH: InputMaybe<Scalars['String']>;
  shortName_IN: InputMaybe<Array<Scalars['String']>>;
  shortName_NOT: InputMaybe<Scalars['String']>;
  shortName_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  shortName_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  shortName_NOT_IN: InputMaybe<Array<Scalars['String']>>;
  shortName_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  shortName_STARTS_WITH: InputMaybe<Scalars['String']>;
  studyID: InputMaybe<Scalars['ID']>;
  studyID_CONTAINS: InputMaybe<Scalars['ID']>;
  studyID_ENDS_WITH: InputMaybe<Scalars['ID']>;
  studyID_IN: InputMaybe<Array<Scalars['ID']>>;
  studyID_NOT: InputMaybe<Scalars['ID']>;
  studyID_NOT_CONTAINS: InputMaybe<Scalars['ID']>;
  studyID_NOT_ENDS_WITH: InputMaybe<Scalars['ID']>;
  studyID_NOT_IN: InputMaybe<Array<Scalars['ID']>>;
  studyID_NOT_STARTS_WITH: InputMaybe<Scalars['ID']>;
  studyID_STARTS_WITH: InputMaybe<Scalars['ID']>;
  studySites: InputMaybe<GeographyCityWhere>;
  studySitesAggregate: InputMaybe<StudyStudySitesAggregateInput>;
  studySitesConnection: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_ALL: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_NONE: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_NOT: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_SINGLE: InputMaybe<StudyStudySitesConnectionWhere>;
  studySitesConnection_SOME: InputMaybe<StudyStudySitesConnectionWhere>;
  /** Return Studies where all of the related GeographyCities match this filter */
  studySites_ALL: InputMaybe<GeographyCityWhere>;
  /** Return Studies where none of the related GeographyCities match this filter */
  studySites_NONE: InputMaybe<GeographyCityWhere>;
  studySites_NOT: InputMaybe<GeographyCityWhere>;
  /** Return Studies where one of the related GeographyCities match this filter */
  studySites_SINGLE: InputMaybe<GeographyCityWhere>;
  /** Return Studies where some of the related GeographyCities match this filter */
  studySites_SOME: InputMaybe<GeographyCityWhere>;
};

export type Task = {
  __typename?: 'Task';
  creationTime: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  state: Maybe<Scalars['String']>;
};

export type TaskAggregateSelection = {
  __typename?: 'TaskAggregateSelection';
  count: Scalars['Int'];
  creationTime: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  id: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
};

export type TaskCreateInput = {
  creationTime: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  state: InputMaybe<Scalars['String']>;
};

export type TaskEdge = {
  __typename?: 'TaskEdge';
  cursor: Scalars['String'];
  node: Task;
};

export type TaskOptions = {
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  /** Specify one or more TaskSort objects to sort Tasks by. The sorts will be applied in the order in which they are arranged in the array. */
  sort: InputMaybe<Array<TaskSort>>;
};

/** Fields to sort Tasks by. The order in which sorts are applied is not guaranteed when specifying many fields in one TaskSort object. */
export type TaskSort = {
  creationTime: InputMaybe<SortDirection>;
  description: InputMaybe<SortDirection>;
  id: InputMaybe<SortDirection>;
  name: InputMaybe<SortDirection>;
  state: InputMaybe<SortDirection>;
};

export type TaskUpdateInput = {
  creationTime: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  state: InputMaybe<Scalars['String']>;
};

export type TaskWhere = {
  AND: InputMaybe<Array<TaskWhere>>;
  OR: InputMaybe<Array<TaskWhere>>;
  creationTime: InputMaybe<Scalars['String']>;
  creationTime_CONTAINS: InputMaybe<Scalars['String']>;
  creationTime_ENDS_WITH: InputMaybe<Scalars['String']>;
  creationTime_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationTime_NOT: InputMaybe<Scalars['String']>;
  creationTime_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  creationTime_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  creationTime_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  creationTime_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  creationTime_STARTS_WITH: InputMaybe<Scalars['String']>;
  description: InputMaybe<Scalars['String']>;
  description_CONTAINS: InputMaybe<Scalars['String']>;
  description_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  description_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  description_STARTS_WITH: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_CONTAINS: InputMaybe<Scalars['String']>;
  id_ENDS_WITH: InputMaybe<Scalars['String']>;
  id_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_NOT: InputMaybe<Scalars['String']>;
  id_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  id_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  id_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  id_STARTS_WITH: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_CONTAINS: InputMaybe<Scalars['String']>;
  name_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  name_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  name_STARTS_WITH: InputMaybe<Scalars['String']>;
  state: InputMaybe<Scalars['String']>;
  state_CONTAINS: InputMaybe<Scalars['String']>;
  state_ENDS_WITH: InputMaybe<Scalars['String']>;
  state_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_NOT: InputMaybe<Scalars['String']>;
  state_NOT_CONTAINS: InputMaybe<Scalars['String']>;
  state_NOT_ENDS_WITH: InputMaybe<Scalars['String']>;
  state_NOT_IN: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  state_NOT_STARTS_WITH: InputMaybe<Scalars['String']>;
  state_STARTS_WITH: InputMaybe<Scalars['String']>;
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
  bookmark: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
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

export enum NestedOperations {
  Subtract = 'subtract',
  Union = 'union'
}
