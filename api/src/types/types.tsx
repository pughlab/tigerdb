import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContextType } from './models';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Email: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};













export type Basic = {
  __typename?: 'Basic';
  studies: Array<Study>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type BasicStudiesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StudyOrdering>>>;
  filter?: Maybe<_StudyFilter>;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String'];
  datafiles: Array<DataFile>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type CategoryDatafilesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DataFileOrdering>>>;
  filter?: Maybe<_DataFileFilter>;
};

export type DataFile = {
  __typename?: 'DataFile';
  fileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type File = {
  __typename?: 'File';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export type KeycloakUser = {
  __typename?: 'KeycloakUser';
  keycloakUserID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['Email'];
  userID: Scalars['ID'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  delete?: Maybe<Scalars['String']>;
  load?: Maybe<Scalars['String']>;
  load2?: Maybe<Scalars['String']>;
  load3?: Maybe<Scalars['String']>;
  testm?: Maybe<Scalars['String']>;
  initMinio?: Maybe<Scalars['String']>;
  minioUpload?: Maybe<File>;
  minioDelete?: Maybe<File>;
  me?: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSubjectSample?: Maybe<_AddSubjectSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSubjectSample?: Maybe<_RemoveSubjectSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSubjectSample?: Maybe<_MergeSubjectSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Subject node. */
  CreateSubject?: Maybe<Subject>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Subject node. */
  DeleteSubject?: Maybe<Subject>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Subject node. */
  MergeSubject?: Maybe<Subject>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleSampleDatum?: Maybe<_AddSampleSampleDatumPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleSampleDatum?: Maybe<_RemoveSampleSampleDatumPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleSampleDatum?: Maybe<_MergeSampleSampleDatumPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleSubject?: Maybe<_AddSampleSubjectPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleSubject?: Maybe<_RemoveSampleSubjectPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleSubject?: Maybe<_MergeSampleSubjectPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleSampleGroup?: Maybe<_AddSampleSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleSampleGroup?: Maybe<_RemoveSampleSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleSampleGroup?: Maybe<_MergeSampleSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Sample node. */
  CreateSample?: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Sample node. */
  UpdateSample?: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Sample node. */
  DeleteSample?: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Sample node. */
  MergeSample?: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_datum relationship. */
  AddSampleDatumSampleGroup?: Maybe<_AddSampleDatumSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_datum relationship. */
  RemoveSampleDatumSampleGroup?: Maybe<_RemoveSampleDatumSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_datum relationship. */
  MergeSampleDatumSampleGroup?: Maybe<_MergeSampleDatumSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleDatumSample?: Maybe<_AddSampleDatumSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleDatumSample?: Maybe<_RemoveSampleDatumSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleDatumSample?: Maybe<_MergeSampleDatumSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a SampleDatum node. */
  CreateSampleDatum?: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a SampleDatum node. */
  UpdateSampleDatum?: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a SampleDatum node. */
  DeleteSampleDatum?: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a SampleDatum node. */
  MergeSampleDatum?: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_datum relationship. */
  AddSampleGroupSampleData?: Maybe<_AddSampleGroupSampleDataPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_datum relationship. */
  RemoveSampleGroupSampleData?: Maybe<_RemoveSampleGroupSampleDataPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_datum relationship. */
  MergeSampleGroupSampleData?: Maybe<_MergeSampleGroupSampleDataPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleGroupSamples?: Maybe<_AddSampleGroupSamplesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleGroupSamples?: Maybe<_RemoveSampleGroupSamplesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleGroupSamples?: Maybe<_MergeSampleGroupSamplesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a SampleGroup node. */
  CreateSampleGroup?: Maybe<SampleGroup>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a SampleGroup node. */
  DeleteSampleGroup?: Maybe<SampleGroup>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a SampleGroup node. */
  MergeSampleGroup?: Maybe<SampleGroup>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Basic node. */
  CreateBasic?: Maybe<Basic>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Basic node. */
  DeleteBasic?: Maybe<Basic>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Basic node. */
  MergeBasic?: Maybe<Basic>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Study node. */
  CreateStudy?: Maybe<Study>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Study node. */
  DeleteStudy?: Maybe<Study>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Study node. */
  MergeStudy?: Maybe<Study>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Timepoint node. */
  CreateTimepoint?: Maybe<Timepoint>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Timepoint node. */
  DeleteTimepoint?: Maybe<Timepoint>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Timepoint node. */
  MergeTimepoint?: Maybe<Timepoint>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Category node. */
  CreateCategory?: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Category node. */
  DeleteCategory?: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Category node. */
  MergeCategory?: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a DataFile node. */
  CreateDataFile?: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a DataFile node. */
  UpdateDataFile?: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a DataFile node. */
  DeleteDataFile?: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a DataFile node. */
  MergeDataFile?: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a UploadedFile node. */
  CreateUploadedFile?: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a UploadedFile node. */
  UpdateUploadedFile?: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a UploadedFile node. */
  DeleteUploadedFile?: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a UploadedFile node. */
  MergeUploadedFile?: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a File node. */
  CreateFile?: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a File node. */
  UpdateFile?: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a File node. */
  DeleteFile?: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a File node. */
  MergeFile?: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a KeycloakUser node. */
  CreateKeycloakUser?: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a KeycloakUser node. */
  UpdateKeycloakUser?: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a KeycloakUser node. */
  DeleteKeycloakUser?: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a KeycloakUser node. */
  MergeKeycloakUser?: Maybe<KeycloakUser>;
};


export type MutationLoad3Args = {
  Filename?: Maybe<Scalars['String']>;
};


export type MutationMinioUploadArgs = {
  bucketName: Scalars['String'];
  objectName: Scalars['String'];
  file: Scalars['Upload'];
};


export type MutationMinioDeleteArgs = {
  bucketName: Scalars['String'];
  objectName: Scalars['String'];
};


export type MutationAddSubjectSampleArgs = {
  from: _SubjectInput;
  to: _SampleInput;
};


export type MutationRemoveSubjectSampleArgs = {
  from: _SubjectInput;
  to: _SampleInput;
};


export type MutationMergeSubjectSampleArgs = {
  from: _SubjectInput;
  to: _SampleInput;
};


export type MutationCreateSubjectArgs = {
  subjectId?: Maybe<Scalars['String']>;
};


export type MutationDeleteSubjectArgs = {
  subjectId: Scalars['String'];
};


export type MutationMergeSubjectArgs = {
  subjectId: Scalars['String'];
};


export type MutationAddSampleSampleDatumArgs = {
  from: _SampleDatumInput;
  to: _SampleInput;
};


export type MutationRemoveSampleSampleDatumArgs = {
  from: _SampleDatumInput;
  to: _SampleInput;
};


export type MutationMergeSampleSampleDatumArgs = {
  from: _SampleDatumInput;
  to: _SampleInput;
};


export type MutationAddSampleSubjectArgs = {
  from: _SubjectInput;
  to: _SampleInput;
};


export type MutationRemoveSampleSubjectArgs = {
  from: _SubjectInput;
  to: _SampleInput;
};


export type MutationMergeSampleSubjectArgs = {
  from: _SubjectInput;
  to: _SampleInput;
};


export type MutationAddSampleSampleGroupArgs = {
  from: _SampleGroupInput;
  to: _SampleInput;
};


export type MutationRemoveSampleSampleGroupArgs = {
  from: _SampleGroupInput;
  to: _SampleInput;
};


export type MutationMergeSampleSampleGroupArgs = {
  from: _SampleGroupInput;
  to: _SampleInput;
};


export type MutationCreateSampleArgs = {
  sampleId?: Maybe<Scalars['String']>;
  sampleValue?: Maybe<Scalars['String']>;
};


export type MutationUpdateSampleArgs = {
  sampleId: Scalars['String'];
  sampleValue?: Maybe<Scalars['String']>;
};


export type MutationDeleteSampleArgs = {
  sampleId: Scalars['String'];
};


export type MutationMergeSampleArgs = {
  sampleId: Scalars['String'];
  sampleValue?: Maybe<Scalars['String']>;
};


export type MutationAddSampleDatumSampleGroupArgs = {
  from: _SampleGroupInput;
  to: _SampleDatumInput;
};


export type MutationRemoveSampleDatumSampleGroupArgs = {
  from: _SampleGroupInput;
  to: _SampleDatumInput;
};


export type MutationMergeSampleDatumSampleGroupArgs = {
  from: _SampleGroupInput;
  to: _SampleDatumInput;
};


export type MutationAddSampleDatumSampleArgs = {
  from: _SampleDatumInput;
  to: _SampleInput;
};


export type MutationRemoveSampleDatumSampleArgs = {
  from: _SampleDatumInput;
  to: _SampleInput;
};


export type MutationMergeSampleDatumSampleArgs = {
  from: _SampleDatumInput;
  to: _SampleInput;
};


export type MutationCreateSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
  sampleDatumType?: Maybe<Scalars['String']>;
};


export type MutationUpdateSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
  sampleDatumType?: Maybe<Scalars['String']>;
};


export type MutationDeleteSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
};


export type MutationMergeSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
  sampleDatumType?: Maybe<Scalars['String']>;
};


export type MutationAddSampleGroupSampleDataArgs = {
  from: _SampleGroupInput;
  to: _SampleDatumInput;
};


export type MutationRemoveSampleGroupSampleDataArgs = {
  from: _SampleGroupInput;
  to: _SampleDatumInput;
};


export type MutationMergeSampleGroupSampleDataArgs = {
  from: _SampleGroupInput;
  to: _SampleDatumInput;
};


export type MutationAddSampleGroupSamplesArgs = {
  from: _SampleGroupInput;
  to: _SampleInput;
};


export type MutationRemoveSampleGroupSamplesArgs = {
  from: _SampleGroupInput;
  to: _SampleInput;
};


export type MutationMergeSampleGroupSamplesArgs = {
  from: _SampleGroupInput;
  to: _SampleInput;
};


export type MutationCreateSampleGroupArgs = {
  sampleGroupName: Scalars['String'];
};


export type MutationDeleteSampleGroupArgs = {
  sampleGroupName: Scalars['String'];
};


export type MutationMergeSampleGroupArgs = {
  sampleGroupName: Scalars['String'];
};


export type MutationCreateStudyArgs = {
  name: Scalars['String'];
};


export type MutationDeleteStudyArgs = {
  name: Scalars['String'];
};


export type MutationMergeStudyArgs = {
  name: Scalars['String'];
};


export type MutationCreateTimepointArgs = {
  name: Scalars['String'];
};


export type MutationDeleteTimepointArgs = {
  name: Scalars['String'];
};


export type MutationMergeTimepointArgs = {
  name: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationDeleteCategoryArgs = {
  name: Scalars['String'];
};


export type MutationMergeCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateDataFileArgs = {
  fileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
};


export type MutationUpdateDataFileArgs = {
  fileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
};


export type MutationDeleteDataFileArgs = {
  presignedUrl: Scalars['String'];
};


export type MutationMergeDataFileArgs = {
  fileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
};


export type MutationCreateUploadedFileArgs = {
  filename?: Maybe<Scalars['String']>;
  bucketName?: Maybe<Scalars['ID']>;
  objectName?: Maybe<Scalars['ID']>;
};


export type MutationUpdateUploadedFileArgs = {
  filename?: Maybe<Scalars['String']>;
  bucketName: Scalars['ID'];
  objectName?: Maybe<Scalars['ID']>;
};


export type MutationDeleteUploadedFileArgs = {
  bucketName: Scalars['ID'];
};


export type MutationMergeUploadedFileArgs = {
  filename?: Maybe<Scalars['String']>;
  bucketName: Scalars['ID'];
  objectName?: Maybe<Scalars['ID']>;
};


export type MutationCreateFileArgs = {
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};


export type MutationUpdateFileArgs = {
  filename: Scalars['String'];
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
};


export type MutationDeleteFileArgs = {
  filename: Scalars['String'];
};


export type MutationMergeFileArgs = {
  filename: Scalars['String'];
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
};


export type MutationCreateKeycloakUserArgs = {
  keycloakUserID?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  email: Scalars['Email'];
  userID: Scalars['ID'];
};


export type MutationUpdateKeycloakUserArgs = {
  keycloakUserID: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  userID?: Maybe<Scalars['ID']>;
};


export type MutationDeleteKeycloakUserArgs = {
  keycloakUserID: Scalars['ID'];
};


export type MutationMergeKeycloakUserArgs = {
  keycloakUserID: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  userID?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  subjectCount?: Maybe<Scalars['Int']>;
  listBasicMinio?: Maybe<Basic>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Subject type nodes. */
  Subject?: Maybe<Array<Maybe<Subject>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Sample type nodes. */
  Sample?: Maybe<Array<Maybe<Sample>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for SampleDatum type nodes. */
  SampleDatum?: Maybe<Array<Maybe<SampleDatum>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for SampleGroup type nodes. */
  SampleGroup?: Maybe<Array<Maybe<SampleGroup>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Basic type nodes. */
  Basic?: Maybe<Array<Maybe<Basic>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Study type nodes. */
  Study?: Maybe<Array<Maybe<Study>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Timepoint type nodes. */
  Timepoint?: Maybe<Array<Maybe<Timepoint>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Category type nodes. */
  Category?: Maybe<Array<Maybe<Category>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for DataFile type nodes. */
  DataFile?: Maybe<Array<Maybe<DataFile>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for UploadedFile type nodes. */
  UploadedFile?: Maybe<Array<Maybe<UploadedFile>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for File type nodes. */
  File?: Maybe<Array<Maybe<File>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for KeycloakUser type nodes. */
  KeycloakUser?: Maybe<Array<Maybe<KeycloakUser>>>;
};


export type QueryListBasicMinioArgs = {
  filter?: Maybe<_BasicFilter>;
};


export type QuerySubjectArgs = {
  subjectId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SubjectOrdering>>>;
  filter?: Maybe<_SubjectFilter>;
};


export type QuerySampleArgs = {
  sampleId?: Maybe<Scalars['String']>;
  sampleValue?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter?: Maybe<_SampleFilter>;
};


export type QuerySampleDatumArgs = {
  sampleDatumName?: Maybe<Scalars['String']>;
  sampleDatumType?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleDatumOrdering>>>;
  filter?: Maybe<_SampleDatumFilter>;
};


export type QuerySampleGroupArgs = {
  sampleGroupName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleGroupOrdering>>>;
  filter?: Maybe<_SampleGroupFilter>;
};


export type QueryBasicArgs = {
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BasicOrdering>>>;
  filter?: Maybe<_BasicFilter>;
};


export type QueryStudyArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StudyOrdering>>>;
  filter?: Maybe<_StudyFilter>;
};


export type QueryTimepointArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TimepointOrdering>>>;
  filter?: Maybe<_TimepointFilter>;
};


export type QueryCategoryArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter?: Maybe<_CategoryFilter>;
};


export type QueryDataFileArgs = {
  fileName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  presignedUrl?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DataFileOrdering>>>;
  filter?: Maybe<_DataFileFilter>;
};


export type QueryUploadedFileArgs = {
  filename?: Maybe<Scalars['String']>;
  bucketName?: Maybe<Scalars['ID']>;
  objectName?: Maybe<Scalars['ID']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UploadedFileOrdering>>>;
  filter?: Maybe<_UploadedFileFilter>;
};


export type QueryFileArgs = {
  filename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_FileOrdering>>>;
  filter?: Maybe<_FileFilter>;
};


export type QueryKeycloakUserArgs = {
  keycloakUserID?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  userID?: Maybe<Scalars['ID']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_KeycloakUserOrdering>>>;
  filter?: Maybe<_KeycloakUserFilter>;
};

export type Sample = {
  __typename?: 'Sample';
  sampleId?: Maybe<Scalars['String']>;
  sampleDatum: SampleDatum;
  sampleDatumName: Scalars['String'];
  sampleValue?: Maybe<Scalars['String']>;
  subject?: Maybe<Subject>;
  sampleGroup?: Maybe<SampleGroup>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type SampleSampleDatumArgs = {
  filter?: Maybe<_SampleDatumFilter>;
};


export type SampleSubjectArgs = {
  filter?: Maybe<_SubjectFilter>;
};


export type SampleSampleGroupArgs = {
  filter?: Maybe<_SampleGroupFilter>;
};

export type SampleDatum = {
  __typename?: 'SampleDatum';
  sampleDatumName: Scalars['String'];
  sampleDatumType?: Maybe<Scalars['String']>;
  sampleGroup?: Maybe<SampleGroup>;
  sample?: Maybe<Array<Maybe<Sample>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type SampleDatumSampleGroupArgs = {
  filter?: Maybe<_SampleGroupFilter>;
};


export type SampleDatumSampleArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter?: Maybe<_SampleFilter>;
};

export type SampleGroup = {
  __typename?: 'SampleGroup';
  sampleGroupName: Scalars['String'];
  sampleData: Array<SampleDatum>;
  samples?: Maybe<Array<Maybe<Sample>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type SampleGroupSampleDataArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleDatumOrdering>>>;
  filter?: Maybe<_SampleDatumFilter>;
};


export type SampleGroupSamplesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter?: Maybe<_SampleFilter>;
};

export type Study = {
  __typename?: 'Study';
  name: Scalars['String'];
  timepoints: Array<Timepoint>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type StudyTimepointsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TimepointOrdering>>>;
  filter?: Maybe<_TimepointFilter>;
};

export type Subject = {
  __typename?: 'Subject';
  subjectId?: Maybe<Scalars['String']>;
  sample: Array<Sample>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type SubjectSampleArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter?: Maybe<_SampleFilter>;
};

export type Timepoint = {
  __typename?: 'Timepoint';
  name: Scalars['String'];
  categories: Array<Category>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type TimepointCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter?: Maybe<_CategoryFilter>;
};


export type UploadedFile = {
  __typename?: 'UploadedFile';
  filename?: Maybe<Scalars['String']>;
  bucketName?: Maybe<Scalars['ID']>;
  objectName?: Maybe<Scalars['ID']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export type _AddSampleDatumSampleGroupPayload = {
  __typename?: '_AddSampleDatumSampleGroupPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SampleDatum>;
};

export type _AddSampleDatumSamplePayload = {
  __typename?: '_AddSampleDatumSamplePayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _AddSampleGroupSampleDataPayload = {
  __typename?: '_AddSampleGroupSampleDataPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SampleDatum>;
};

export type _AddSampleGroupSamplesPayload = {
  __typename?: '_AddSampleGroupSamplesPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _AddSampleSampleDatumPayload = {
  __typename?: '_AddSampleSampleDatumPayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _AddSampleSampleGroupPayload = {
  __typename?: '_AddSampleSampleGroupPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _AddSampleSubjectPayload = {
  __typename?: '_AddSampleSubjectPayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _AddSubjectSamplePayload = {
  __typename?: '_AddSubjectSamplePayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _BasicFilter = {
  AND?: Maybe<Array<_BasicFilter>>;
  OR?: Maybe<Array<_BasicFilter>>;
};

export enum _BasicOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _CategoryFilter = {
  AND?: Maybe<Array<_CategoryFilter>>;
  OR?: Maybe<Array<_CategoryFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type _CategoryInput = {
  name: Scalars['String'];
};

export enum _CategoryOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _DataFileFilter = {
  AND?: Maybe<Array<_DataFileFilter>>;
  OR?: Maybe<Array<_DataFileFilter>>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Scalars['String']>>;
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  fileName_regexp?: Maybe<Scalars['String']>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_starts_with?: Maybe<Scalars['String']>;
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  fileName_ends_with?: Maybe<Scalars['String']>;
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  etag?: Maybe<Scalars['String']>;
  etag_not?: Maybe<Scalars['String']>;
  etag_in?: Maybe<Array<Scalars['String']>>;
  etag_not_in?: Maybe<Array<Scalars['String']>>;
  etag_regexp?: Maybe<Scalars['String']>;
  etag_contains?: Maybe<Scalars['String']>;
  etag_not_contains?: Maybe<Scalars['String']>;
  etag_starts_with?: Maybe<Scalars['String']>;
  etag_not_starts_with?: Maybe<Scalars['String']>;
  etag_ends_with?: Maybe<Scalars['String']>;
  etag_not_ends_with?: Maybe<Scalars['String']>;
  presignedUrl?: Maybe<Scalars['String']>;
  presignedUrl_not?: Maybe<Scalars['String']>;
  presignedUrl_in?: Maybe<Array<Scalars['String']>>;
  presignedUrl_not_in?: Maybe<Array<Scalars['String']>>;
  presignedUrl_regexp?: Maybe<Scalars['String']>;
  presignedUrl_contains?: Maybe<Scalars['String']>;
  presignedUrl_not_contains?: Maybe<Scalars['String']>;
  presignedUrl_starts_with?: Maybe<Scalars['String']>;
  presignedUrl_not_starts_with?: Maybe<Scalars['String']>;
  presignedUrl_ends_with?: Maybe<Scalars['String']>;
  presignedUrl_not_ends_with?: Maybe<Scalars['String']>;
};

export type _DataFileInput = {
  presignedUrl: Scalars['String'];
};

export enum _DataFileOrdering {
  FileNameAsc = 'fileName_asc',
  FileNameDesc = 'fileName_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  EtagAsc = 'etag_asc',
  EtagDesc = 'etag_desc',
  PresignedUrlAsc = 'presignedUrl_asc',
  PresignedUrlDesc = 'presignedUrl_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _FileFilter = {
  AND?: Maybe<Array<_FileFilter>>;
  OR?: Maybe<Array<_FileFilter>>;
  filename?: Maybe<Scalars['String']>;
  filename_not?: Maybe<Scalars['String']>;
  filename_in?: Maybe<Array<Scalars['String']>>;
  filename_not_in?: Maybe<Array<Scalars['String']>>;
  filename_regexp?: Maybe<Scalars['String']>;
  filename_contains?: Maybe<Scalars['String']>;
  filename_not_contains?: Maybe<Scalars['String']>;
  filename_starts_with?: Maybe<Scalars['String']>;
  filename_not_starts_with?: Maybe<Scalars['String']>;
  filename_ends_with?: Maybe<Scalars['String']>;
  filename_not_ends_with?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  mimetype_not?: Maybe<Scalars['String']>;
  mimetype_in?: Maybe<Array<Scalars['String']>>;
  mimetype_not_in?: Maybe<Array<Scalars['String']>>;
  mimetype_regexp?: Maybe<Scalars['String']>;
  mimetype_contains?: Maybe<Scalars['String']>;
  mimetype_not_contains?: Maybe<Scalars['String']>;
  mimetype_starts_with?: Maybe<Scalars['String']>;
  mimetype_not_starts_with?: Maybe<Scalars['String']>;
  mimetype_ends_with?: Maybe<Scalars['String']>;
  mimetype_not_ends_with?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  encoding_not?: Maybe<Scalars['String']>;
  encoding_in?: Maybe<Array<Scalars['String']>>;
  encoding_not_in?: Maybe<Array<Scalars['String']>>;
  encoding_regexp?: Maybe<Scalars['String']>;
  encoding_contains?: Maybe<Scalars['String']>;
  encoding_not_contains?: Maybe<Scalars['String']>;
  encoding_starts_with?: Maybe<Scalars['String']>;
  encoding_not_starts_with?: Maybe<Scalars['String']>;
  encoding_ends_with?: Maybe<Scalars['String']>;
  encoding_not_ends_with?: Maybe<Scalars['String']>;
};

export type _FileInput = {
  filename: Scalars['String'];
};

export enum _FileOrdering {
  FilenameAsc = 'filename_asc',
  FilenameDesc = 'filename_desc',
  MimetypeAsc = 'mimetype_asc',
  MimetypeDesc = 'mimetype_desc',
  EncodingAsc = 'encoding_asc',
  EncodingDesc = 'encoding_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _KeycloakUserFilter = {
  AND?: Maybe<Array<_KeycloakUserFilter>>;
  OR?: Maybe<Array<_KeycloakUserFilter>>;
  keycloakUserID?: Maybe<Scalars['ID']>;
  keycloakUserID_not?: Maybe<Scalars['ID']>;
  keycloakUserID_in?: Maybe<Array<Scalars['ID']>>;
  keycloakUserID_not_in?: Maybe<Array<Scalars['ID']>>;
  keycloakUserID_regexp?: Maybe<Scalars['ID']>;
  keycloakUserID_contains?: Maybe<Scalars['ID']>;
  keycloakUserID_not_contains?: Maybe<Scalars['ID']>;
  keycloakUserID_starts_with?: Maybe<Scalars['ID']>;
  keycloakUserID_not_starts_with?: Maybe<Scalars['ID']>;
  keycloakUserID_ends_with?: Maybe<Scalars['ID']>;
  keycloakUserID_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['Email']>;
  userID?: Maybe<Scalars['ID']>;
  userID_not?: Maybe<Scalars['ID']>;
  userID_in?: Maybe<Array<Scalars['ID']>>;
  userID_not_in?: Maybe<Array<Scalars['ID']>>;
  userID_regexp?: Maybe<Scalars['ID']>;
  userID_contains?: Maybe<Scalars['ID']>;
  userID_not_contains?: Maybe<Scalars['ID']>;
  userID_starts_with?: Maybe<Scalars['ID']>;
  userID_not_starts_with?: Maybe<Scalars['ID']>;
  userID_ends_with?: Maybe<Scalars['ID']>;
  userID_not_ends_with?: Maybe<Scalars['ID']>;
};

export type _KeycloakUserInput = {
  keycloakUserID: Scalars['ID'];
};

export enum _KeycloakUserOrdering {
  KeycloakUserIdAsc = 'keycloakUserID_asc',
  KeycloakUserIdDesc = 'keycloakUserID_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  EmailAsc = 'email_asc',
  EmailDesc = 'email_desc',
  UserIdAsc = 'userID_asc',
  UserIdDesc = 'userID_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _MergeSampleDatumSampleGroupPayload = {
  __typename?: '_MergeSampleDatumSampleGroupPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SampleDatum>;
};

export type _MergeSampleDatumSamplePayload = {
  __typename?: '_MergeSampleDatumSamplePayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _MergeSampleGroupSampleDataPayload = {
  __typename?: '_MergeSampleGroupSampleDataPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SampleDatum>;
};

export type _MergeSampleGroupSamplesPayload = {
  __typename?: '_MergeSampleGroupSamplesPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _MergeSampleSampleDatumPayload = {
  __typename?: '_MergeSampleSampleDatumPayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _MergeSampleSampleGroupPayload = {
  __typename?: '_MergeSampleSampleGroupPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _MergeSampleSubjectPayload = {
  __typename?: '_MergeSampleSubjectPayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _MergeSubjectSamplePayload = {
  __typename?: '_MergeSubjectSamplePayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type _RemoveSampleDatumSampleGroupPayload = {
  __typename?: '_RemoveSampleDatumSampleGroupPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SampleDatum>;
};

export type _RemoveSampleDatumSamplePayload = {
  __typename?: '_RemoveSampleDatumSamplePayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _RemoveSampleGroupSampleDataPayload = {
  __typename?: '_RemoveSampleGroupSampleDataPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SampleDatum>;
};

export type _RemoveSampleGroupSamplesPayload = {
  __typename?: '_RemoveSampleGroupSamplesPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _RemoveSampleSampleDatumPayload = {
  __typename?: '_RemoveSampleSampleDatumPayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _RemoveSampleSampleGroupPayload = {
  __typename?: '_RemoveSampleSampleGroupPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _RemoveSampleSubjectPayload = {
  __typename?: '_RemoveSampleSubjectPayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _RemoveSubjectSamplePayload = {
  __typename?: '_RemoveSubjectSamplePayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Sample>;
};

export type _SampleDatumFilter = {
  AND?: Maybe<Array<_SampleDatumFilter>>;
  OR?: Maybe<Array<_SampleDatumFilter>>;
  sampleDatumName?: Maybe<Scalars['String']>;
  sampleDatumName_not?: Maybe<Scalars['String']>;
  sampleDatumName_in?: Maybe<Array<Scalars['String']>>;
  sampleDatumName_not_in?: Maybe<Array<Scalars['String']>>;
  sampleDatumName_regexp?: Maybe<Scalars['String']>;
  sampleDatumName_contains?: Maybe<Scalars['String']>;
  sampleDatumName_not_contains?: Maybe<Scalars['String']>;
  sampleDatumName_starts_with?: Maybe<Scalars['String']>;
  sampleDatumName_not_starts_with?: Maybe<Scalars['String']>;
  sampleDatumName_ends_with?: Maybe<Scalars['String']>;
  sampleDatumName_not_ends_with?: Maybe<Scalars['String']>;
  sampleDatumType?: Maybe<Scalars['String']>;
  sampleDatumType_not?: Maybe<Scalars['String']>;
  sampleDatumType_in?: Maybe<Array<Scalars['String']>>;
  sampleDatumType_not_in?: Maybe<Array<Scalars['String']>>;
  sampleDatumType_regexp?: Maybe<Scalars['String']>;
  sampleDatumType_contains?: Maybe<Scalars['String']>;
  sampleDatumType_not_contains?: Maybe<Scalars['String']>;
  sampleDatumType_starts_with?: Maybe<Scalars['String']>;
  sampleDatumType_not_starts_with?: Maybe<Scalars['String']>;
  sampleDatumType_ends_with?: Maybe<Scalars['String']>;
  sampleDatumType_not_ends_with?: Maybe<Scalars['String']>;
  sampleGroup?: Maybe<_SampleGroupFilter>;
  sampleGroup_not?: Maybe<_SampleGroupFilter>;
  sampleGroup_in?: Maybe<Array<_SampleGroupFilter>>;
  sampleGroup_not_in?: Maybe<Array<_SampleGroupFilter>>;
  sample?: Maybe<_SampleFilter>;
  sample_not?: Maybe<_SampleFilter>;
  sample_in?: Maybe<Array<_SampleFilter>>;
  sample_not_in?: Maybe<Array<_SampleFilter>>;
  sample_some?: Maybe<_SampleFilter>;
  sample_none?: Maybe<_SampleFilter>;
  sample_single?: Maybe<_SampleFilter>;
  sample_every?: Maybe<_SampleFilter>;
};

export type _SampleDatumInput = {
  sampleDatumName: Scalars['String'];
};

export enum _SampleDatumOrdering {
  SampleDatumNameAsc = 'sampleDatumName_asc',
  SampleDatumNameDesc = 'sampleDatumName_desc',
  SampleDatumTypeAsc = 'sampleDatumType_asc',
  SampleDatumTypeDesc = 'sampleDatumType_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _SampleFilter = {
  AND?: Maybe<Array<_SampleFilter>>;
  OR?: Maybe<Array<_SampleFilter>>;
  sampleId?: Maybe<Scalars['String']>;
  sampleId_not?: Maybe<Scalars['String']>;
  sampleId_in?: Maybe<Array<Scalars['String']>>;
  sampleId_not_in?: Maybe<Array<Scalars['String']>>;
  sampleId_regexp?: Maybe<Scalars['String']>;
  sampleId_contains?: Maybe<Scalars['String']>;
  sampleId_not_contains?: Maybe<Scalars['String']>;
  sampleId_starts_with?: Maybe<Scalars['String']>;
  sampleId_not_starts_with?: Maybe<Scalars['String']>;
  sampleId_ends_with?: Maybe<Scalars['String']>;
  sampleId_not_ends_with?: Maybe<Scalars['String']>;
  sampleDatum?: Maybe<_SampleDatumFilter>;
  sampleDatum_not?: Maybe<_SampleDatumFilter>;
  sampleDatum_in?: Maybe<Array<_SampleDatumFilter>>;
  sampleDatum_not_in?: Maybe<Array<_SampleDatumFilter>>;
  sampleValue?: Maybe<Scalars['String']>;
  sampleValue_not?: Maybe<Scalars['String']>;
  sampleValue_in?: Maybe<Array<Scalars['String']>>;
  sampleValue_not_in?: Maybe<Array<Scalars['String']>>;
  sampleValue_regexp?: Maybe<Scalars['String']>;
  sampleValue_contains?: Maybe<Scalars['String']>;
  sampleValue_not_contains?: Maybe<Scalars['String']>;
  sampleValue_starts_with?: Maybe<Scalars['String']>;
  sampleValue_not_starts_with?: Maybe<Scalars['String']>;
  sampleValue_ends_with?: Maybe<Scalars['String']>;
  sampleValue_not_ends_with?: Maybe<Scalars['String']>;
  subject?: Maybe<_SubjectFilter>;
  subject_not?: Maybe<_SubjectFilter>;
  subject_in?: Maybe<Array<_SubjectFilter>>;
  subject_not_in?: Maybe<Array<_SubjectFilter>>;
  sampleGroup?: Maybe<_SampleGroupFilter>;
  sampleGroup_not?: Maybe<_SampleGroupFilter>;
  sampleGroup_in?: Maybe<Array<_SampleGroupFilter>>;
  sampleGroup_not_in?: Maybe<Array<_SampleGroupFilter>>;
};

export type _SampleGroupFilter = {
  AND?: Maybe<Array<_SampleGroupFilter>>;
  OR?: Maybe<Array<_SampleGroupFilter>>;
  sampleGroupName?: Maybe<Scalars['String']>;
  sampleGroupName_not?: Maybe<Scalars['String']>;
  sampleGroupName_in?: Maybe<Array<Scalars['String']>>;
  sampleGroupName_not_in?: Maybe<Array<Scalars['String']>>;
  sampleGroupName_regexp?: Maybe<Scalars['String']>;
  sampleGroupName_contains?: Maybe<Scalars['String']>;
  sampleGroupName_not_contains?: Maybe<Scalars['String']>;
  sampleGroupName_starts_with?: Maybe<Scalars['String']>;
  sampleGroupName_not_starts_with?: Maybe<Scalars['String']>;
  sampleGroupName_ends_with?: Maybe<Scalars['String']>;
  sampleGroupName_not_ends_with?: Maybe<Scalars['String']>;
  sampleData?: Maybe<_SampleDatumFilter>;
  sampleData_not?: Maybe<_SampleDatumFilter>;
  sampleData_in?: Maybe<Array<_SampleDatumFilter>>;
  sampleData_not_in?: Maybe<Array<_SampleDatumFilter>>;
  sampleData_some?: Maybe<_SampleDatumFilter>;
  sampleData_none?: Maybe<_SampleDatumFilter>;
  sampleData_single?: Maybe<_SampleDatumFilter>;
  sampleData_every?: Maybe<_SampleDatumFilter>;
  samples?: Maybe<_SampleFilter>;
  samples_not?: Maybe<_SampleFilter>;
  samples_in?: Maybe<Array<_SampleFilter>>;
  samples_not_in?: Maybe<Array<_SampleFilter>>;
  samples_some?: Maybe<_SampleFilter>;
  samples_none?: Maybe<_SampleFilter>;
  samples_single?: Maybe<_SampleFilter>;
  samples_every?: Maybe<_SampleFilter>;
};

export type _SampleGroupInput = {
  sampleGroupName: Scalars['String'];
};

export enum _SampleGroupOrdering {
  SampleGroupNameAsc = 'sampleGroupName_asc',
  SampleGroupNameDesc = 'sampleGroupName_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _SampleInput = {
  sampleId: Scalars['String'];
};

export enum _SampleOrdering {
  SampleIdAsc = 'sampleId_asc',
  SampleIdDesc = 'sampleId_desc',
  SampleDatumNameAsc = 'sampleDatumName_asc',
  SampleDatumNameDesc = 'sampleDatumName_desc',
  SampleValueAsc = 'sampleValue_asc',
  SampleValueDesc = 'sampleValue_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _StudyFilter = {
  AND?: Maybe<Array<_StudyFilter>>;
  OR?: Maybe<Array<_StudyFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type _StudyInput = {
  name: Scalars['String'];
};

export enum _StudyOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _SubjectFilter = {
  AND?: Maybe<Array<_SubjectFilter>>;
  OR?: Maybe<Array<_SubjectFilter>>;
  subjectId?: Maybe<Scalars['String']>;
  subjectId_not?: Maybe<Scalars['String']>;
  subjectId_in?: Maybe<Array<Scalars['String']>>;
  subjectId_not_in?: Maybe<Array<Scalars['String']>>;
  subjectId_regexp?: Maybe<Scalars['String']>;
  subjectId_contains?: Maybe<Scalars['String']>;
  subjectId_not_contains?: Maybe<Scalars['String']>;
  subjectId_starts_with?: Maybe<Scalars['String']>;
  subjectId_not_starts_with?: Maybe<Scalars['String']>;
  subjectId_ends_with?: Maybe<Scalars['String']>;
  subjectId_not_ends_with?: Maybe<Scalars['String']>;
  sample?: Maybe<_SampleFilter>;
  sample_not?: Maybe<_SampleFilter>;
  sample_in?: Maybe<Array<_SampleFilter>>;
  sample_not_in?: Maybe<Array<_SampleFilter>>;
  sample_some?: Maybe<_SampleFilter>;
  sample_none?: Maybe<_SampleFilter>;
  sample_single?: Maybe<_SampleFilter>;
  sample_every?: Maybe<_SampleFilter>;
};

export type _SubjectInput = {
  subjectId: Scalars['String'];
};

export enum _SubjectOrdering {
  SubjectIdAsc = 'subjectId_asc',
  SubjectIdDesc = 'subjectId_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _TimepointFilter = {
  AND?: Maybe<Array<_TimepointFilter>>;
  OR?: Maybe<Array<_TimepointFilter>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
};

export type _TimepointInput = {
  name: Scalars['String'];
};

export enum _TimepointOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _UploadedFileFilter = {
  AND?: Maybe<Array<_UploadedFileFilter>>;
  OR?: Maybe<Array<_UploadedFileFilter>>;
  filename?: Maybe<Scalars['String']>;
  filename_not?: Maybe<Scalars['String']>;
  filename_in?: Maybe<Array<Scalars['String']>>;
  filename_not_in?: Maybe<Array<Scalars['String']>>;
  filename_regexp?: Maybe<Scalars['String']>;
  filename_contains?: Maybe<Scalars['String']>;
  filename_not_contains?: Maybe<Scalars['String']>;
  filename_starts_with?: Maybe<Scalars['String']>;
  filename_not_starts_with?: Maybe<Scalars['String']>;
  filename_ends_with?: Maybe<Scalars['String']>;
  filename_not_ends_with?: Maybe<Scalars['String']>;
  bucketName?: Maybe<Scalars['ID']>;
  bucketName_not?: Maybe<Scalars['ID']>;
  bucketName_in?: Maybe<Array<Scalars['ID']>>;
  bucketName_not_in?: Maybe<Array<Scalars['ID']>>;
  bucketName_regexp?: Maybe<Scalars['ID']>;
  bucketName_contains?: Maybe<Scalars['ID']>;
  bucketName_not_contains?: Maybe<Scalars['ID']>;
  bucketName_starts_with?: Maybe<Scalars['ID']>;
  bucketName_not_starts_with?: Maybe<Scalars['ID']>;
  bucketName_ends_with?: Maybe<Scalars['ID']>;
  bucketName_not_ends_with?: Maybe<Scalars['ID']>;
  objectName?: Maybe<Scalars['ID']>;
  objectName_not?: Maybe<Scalars['ID']>;
  objectName_in?: Maybe<Array<Scalars['ID']>>;
  objectName_not_in?: Maybe<Array<Scalars['ID']>>;
  objectName_regexp?: Maybe<Scalars['ID']>;
  objectName_contains?: Maybe<Scalars['ID']>;
  objectName_not_contains?: Maybe<Scalars['ID']>;
  objectName_starts_with?: Maybe<Scalars['ID']>;
  objectName_not_starts_with?: Maybe<Scalars['ID']>;
  objectName_ends_with?: Maybe<Scalars['ID']>;
  objectName_not_ends_with?: Maybe<Scalars['ID']>;
};

export type _UploadedFileInput = {
  bucketName: Scalars['ID'];
};

export enum _UploadedFileOrdering {
  FilenameAsc = 'filename_asc',
  FilenameDesc = 'filename_desc',
  BucketNameAsc = 'bucketName_asc',
  BucketNameDesc = 'bucketName_desc',
  ObjectNameAsc = 'objectName_asc',
  ObjectNameDesc = 'objectName_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  Basic: ResolverTypeWrapper<Basic>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Category: ResolverTypeWrapper<Category>;
  DataFile: ResolverTypeWrapper<DataFile>;
  Email: ResolverTypeWrapper<Scalars['Email']>;
  File: ResolverTypeWrapper<File>;
  KeycloakUser: ResolverTypeWrapper<KeycloakUser>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Sample: ResolverTypeWrapper<Sample>;
  SampleDatum: ResolverTypeWrapper<SampleDatum>;
  SampleGroup: ResolverTypeWrapper<SampleGroup>;
  Study: ResolverTypeWrapper<Study>;
  Subject: ResolverTypeWrapper<Subject>;
  Timepoint: ResolverTypeWrapper<Timepoint>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UploadedFile: ResolverTypeWrapper<UploadedFile>;
  _AddSampleDatumSampleGroupPayload: ResolverTypeWrapper<_AddSampleDatumSampleGroupPayload>;
  _AddSampleDatumSamplePayload: ResolverTypeWrapper<_AddSampleDatumSamplePayload>;
  _AddSampleGroupSampleDataPayload: ResolverTypeWrapper<_AddSampleGroupSampleDataPayload>;
  _AddSampleGroupSamplesPayload: ResolverTypeWrapper<_AddSampleGroupSamplesPayload>;
  _AddSampleSampleDatumPayload: ResolverTypeWrapper<_AddSampleSampleDatumPayload>;
  _AddSampleSampleGroupPayload: ResolverTypeWrapper<_AddSampleSampleGroupPayload>;
  _AddSampleSubjectPayload: ResolverTypeWrapper<_AddSampleSubjectPayload>;
  _AddSubjectSamplePayload: ResolverTypeWrapper<_AddSubjectSamplePayload>;
  _BasicFilter: _BasicFilter;
  _BasicOrdering: _BasicOrdering;
  _CategoryFilter: _CategoryFilter;
  _CategoryInput: _CategoryInput;
  _CategoryOrdering: _CategoryOrdering;
  _DataFileFilter: _DataFileFilter;
  _DataFileInput: _DataFileInput;
  _DataFileOrdering: _DataFileOrdering;
  _FileFilter: _FileFilter;
  _FileInput: _FileInput;
  _FileOrdering: _FileOrdering;
  _KeycloakUserFilter: _KeycloakUserFilter;
  _KeycloakUserInput: _KeycloakUserInput;
  _KeycloakUserOrdering: _KeycloakUserOrdering;
  _MergeSampleDatumSampleGroupPayload: ResolverTypeWrapper<_MergeSampleDatumSampleGroupPayload>;
  _MergeSampleDatumSamplePayload: ResolverTypeWrapper<_MergeSampleDatumSamplePayload>;
  _MergeSampleGroupSampleDataPayload: ResolverTypeWrapper<_MergeSampleGroupSampleDataPayload>;
  _MergeSampleGroupSamplesPayload: ResolverTypeWrapper<_MergeSampleGroupSamplesPayload>;
  _MergeSampleSampleDatumPayload: ResolverTypeWrapper<_MergeSampleSampleDatumPayload>;
  _MergeSampleSampleGroupPayload: ResolverTypeWrapper<_MergeSampleSampleGroupPayload>;
  _MergeSampleSubjectPayload: ResolverTypeWrapper<_MergeSampleSubjectPayload>;
  _MergeSubjectSamplePayload: ResolverTypeWrapper<_MergeSubjectSamplePayload>;
  _Neo4jDate: ResolverTypeWrapper<_Neo4jDate>;
  _Neo4jDateInput: _Neo4jDateInput;
  _Neo4jDateTime: ResolverTypeWrapper<_Neo4jDateTime>;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jLocalDateTime: ResolverTypeWrapper<_Neo4jLocalDateTime>;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _Neo4jLocalTime: ResolverTypeWrapper<_Neo4jLocalTime>;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jPoint: ResolverTypeWrapper<_Neo4jPoint>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  _Neo4jPointInput: _Neo4jPointInput;
  _Neo4jTime: ResolverTypeWrapper<_Neo4jTime>;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _RelationDirections: _RelationDirections;
  _RemoveSampleDatumSampleGroupPayload: ResolverTypeWrapper<_RemoveSampleDatumSampleGroupPayload>;
  _RemoveSampleDatumSamplePayload: ResolverTypeWrapper<_RemoveSampleDatumSamplePayload>;
  _RemoveSampleGroupSampleDataPayload: ResolverTypeWrapper<_RemoveSampleGroupSampleDataPayload>;
  _RemoveSampleGroupSamplesPayload: ResolverTypeWrapper<_RemoveSampleGroupSamplesPayload>;
  _RemoveSampleSampleDatumPayload: ResolverTypeWrapper<_RemoveSampleSampleDatumPayload>;
  _RemoveSampleSampleGroupPayload: ResolverTypeWrapper<_RemoveSampleSampleGroupPayload>;
  _RemoveSampleSubjectPayload: ResolverTypeWrapper<_RemoveSampleSubjectPayload>;
  _RemoveSubjectSamplePayload: ResolverTypeWrapper<_RemoveSubjectSamplePayload>;
  _SampleDatumFilter: _SampleDatumFilter;
  _SampleDatumInput: _SampleDatumInput;
  _SampleDatumOrdering: _SampleDatumOrdering;
  _SampleFilter: _SampleFilter;
  _SampleGroupFilter: _SampleGroupFilter;
  _SampleGroupInput: _SampleGroupInput;
  _SampleGroupOrdering: _SampleGroupOrdering;
  _SampleInput: _SampleInput;
  _SampleOrdering: _SampleOrdering;
  _StudyFilter: _StudyFilter;
  _StudyInput: _StudyInput;
  _StudyOrdering: _StudyOrdering;
  _SubjectFilter: _SubjectFilter;
  _SubjectInput: _SubjectInput;
  _SubjectOrdering: _SubjectOrdering;
  _TimepointFilter: _TimepointFilter;
  _TimepointInput: _TimepointInput;
  _TimepointOrdering: _TimepointOrdering;
  _UploadedFileFilter: _UploadedFileFilter;
  _UploadedFileInput: _UploadedFileInput;
  _UploadedFileOrdering: _UploadedFileOrdering;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Basic: Basic;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Category: Category;
  DataFile: DataFile;
  Email: Scalars['Email'];
  File: File;
  KeycloakUser: KeycloakUser;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Sample: Sample;
  SampleDatum: SampleDatum;
  SampleGroup: SampleGroup;
  Study: Study;
  Subject: Subject;
  Timepoint: Timepoint;
  Upload: Scalars['Upload'];
  UploadedFile: UploadedFile;
  _AddSampleDatumSampleGroupPayload: _AddSampleDatumSampleGroupPayload;
  _AddSampleDatumSamplePayload: _AddSampleDatumSamplePayload;
  _AddSampleGroupSampleDataPayload: _AddSampleGroupSampleDataPayload;
  _AddSampleGroupSamplesPayload: _AddSampleGroupSamplesPayload;
  _AddSampleSampleDatumPayload: _AddSampleSampleDatumPayload;
  _AddSampleSampleGroupPayload: _AddSampleSampleGroupPayload;
  _AddSampleSubjectPayload: _AddSampleSubjectPayload;
  _AddSubjectSamplePayload: _AddSubjectSamplePayload;
  _BasicFilter: _BasicFilter;
  _CategoryFilter: _CategoryFilter;
  _CategoryInput: _CategoryInput;
  _DataFileFilter: _DataFileFilter;
  _DataFileInput: _DataFileInput;
  _FileFilter: _FileFilter;
  _FileInput: _FileInput;
  _KeycloakUserFilter: _KeycloakUserFilter;
  _KeycloakUserInput: _KeycloakUserInput;
  _MergeSampleDatumSampleGroupPayload: _MergeSampleDatumSampleGroupPayload;
  _MergeSampleDatumSamplePayload: _MergeSampleDatumSamplePayload;
  _MergeSampleGroupSampleDataPayload: _MergeSampleGroupSampleDataPayload;
  _MergeSampleGroupSamplesPayload: _MergeSampleGroupSamplesPayload;
  _MergeSampleSampleDatumPayload: _MergeSampleSampleDatumPayload;
  _MergeSampleSampleGroupPayload: _MergeSampleSampleGroupPayload;
  _MergeSampleSubjectPayload: _MergeSampleSubjectPayload;
  _MergeSubjectSamplePayload: _MergeSubjectSamplePayload;
  _Neo4jDate: _Neo4jDate;
  _Neo4jDateInput: _Neo4jDateInput;
  _Neo4jDateTime: _Neo4jDateTime;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jLocalDateTime: _Neo4jLocalDateTime;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _Neo4jLocalTime: _Neo4jLocalTime;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jPoint: _Neo4jPoint;
  Float: Scalars['Float'];
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  _Neo4jPointInput: _Neo4jPointInput;
  _Neo4jTime: _Neo4jTime;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _RemoveSampleDatumSampleGroupPayload: _RemoveSampleDatumSampleGroupPayload;
  _RemoveSampleDatumSamplePayload: _RemoveSampleDatumSamplePayload;
  _RemoveSampleGroupSampleDataPayload: _RemoveSampleGroupSampleDataPayload;
  _RemoveSampleGroupSamplesPayload: _RemoveSampleGroupSamplesPayload;
  _RemoveSampleSampleDatumPayload: _RemoveSampleSampleDatumPayload;
  _RemoveSampleSampleGroupPayload: _RemoveSampleSampleGroupPayload;
  _RemoveSampleSubjectPayload: _RemoveSampleSubjectPayload;
  _RemoveSubjectSamplePayload: _RemoveSubjectSamplePayload;
  _SampleDatumFilter: _SampleDatumFilter;
  _SampleDatumInput: _SampleDatumInput;
  _SampleFilter: _SampleFilter;
  _SampleGroupFilter: _SampleGroupFilter;
  _SampleGroupInput: _SampleGroupInput;
  _SampleInput: _SampleInput;
  _StudyFilter: _StudyFilter;
  _StudyInput: _StudyInput;
  _SubjectFilter: _SubjectFilter;
  _SubjectInput: _SubjectInput;
  _TimepointFilter: _TimepointFilter;
  _TimepointInput: _TimepointInput;
  _UploadedFileFilter: _UploadedFileFilter;
  _UploadedFileInput: _UploadedFileInput;
  Boolean: Scalars['Boolean'];
};

export type MutationMetaDirectiveArgs = {   relationship?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>; };

export type MutationMetaDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = MutationMetaDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AdditionalLabelsDirectiveArgs = {   labels?: Maybe<Array<Maybe<Scalars['String']>>>; };

export type AdditionalLabelsDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = AdditionalLabelsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthDirectiveArgs = {  };

export type AuthDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CypherDirectiveArgs = {   statement?: Maybe<Scalars['String']>; };

export type CypherDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = CypherDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HasPermissionDirectiveArgs = {   resources?: Maybe<Array<Maybe<Scalars['String']>>>; };

export type HasPermissionDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = HasPermissionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HasRoleDirectiveArgs = {   role?: Maybe<Array<Maybe<Scalars['String']>>>; };

export type HasRoleDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = HasRoleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IndexDirectiveArgs = {  };

export type IndexDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = IndexDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Neo4j_IgnoreDirectiveArgs = {  };

export type Neo4j_IgnoreDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = Neo4j_IgnoreDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RelationDirectiveArgs = {   name?: Maybe<Scalars['String']>;
  direction?: Maybe<_RelationDirections>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>; };

export type RelationDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = RelationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SearchDirectiveArgs = {   index?: Maybe<Scalars['String']>; };

export type SearchDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = SearchDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UniqueDirectiveArgs = {  };

export type UniqueDirectiveResolver<Result, Parent, ContextType = MyContextType, Args = UniqueDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BasicResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Basic'] = ResolversParentTypes['Basic']> = {
  studies?: Resolver<Array<ResolversTypes['Study']>, ParentType, ContextType, RequireFields<BasicStudiesArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  datafiles?: Resolver<Array<ResolversTypes['DataFile']>, ParentType, ContextType, RequireFields<CategoryDatafilesArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataFileResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['DataFile'] = ResolversParentTypes['DataFile']> = {
  fileName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  etag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presignedUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Email'], any> {
  name: 'Email';
}

export type FileResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeycloakUserResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['KeycloakUser'] = ResolversParentTypes['KeycloakUser']> = {
  keycloakUserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Email'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  delete?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  load3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoad3Args, never>>;
  testm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initMinio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minioUpload?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationMinioUploadArgs, 'bucketName' | 'objectName' | 'file'>>;
  minioDelete?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationMinioDeleteArgs, 'bucketName' | 'objectName'>>;
  me?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType>;
  AddSubjectSample?: Resolver<Maybe<ResolversTypes['_AddSubjectSamplePayload']>, ParentType, ContextType, RequireFields<MutationAddSubjectSampleArgs, 'from' | 'to'>>;
  RemoveSubjectSample?: Resolver<Maybe<ResolversTypes['_RemoveSubjectSamplePayload']>, ParentType, ContextType, RequireFields<MutationRemoveSubjectSampleArgs, 'from' | 'to'>>;
  MergeSubjectSample?: Resolver<Maybe<ResolversTypes['_MergeSubjectSamplePayload']>, ParentType, ContextType, RequireFields<MutationMergeSubjectSampleArgs, 'from' | 'to'>>;
  CreateSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationCreateSubjectArgs, never>>;
  DeleteSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationDeleteSubjectArgs, 'subjectId'>>;
  MergeSubject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<MutationMergeSubjectArgs, 'subjectId'>>;
  AddSampleSampleDatum?: Resolver<Maybe<ResolversTypes['_AddSampleSampleDatumPayload']>, ParentType, ContextType, RequireFields<MutationAddSampleSampleDatumArgs, 'from' | 'to'>>;
  RemoveSampleSampleDatum?: Resolver<Maybe<ResolversTypes['_RemoveSampleSampleDatumPayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleSampleDatumArgs, 'from' | 'to'>>;
  MergeSampleSampleDatum?: Resolver<Maybe<ResolversTypes['_MergeSampleSampleDatumPayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleSampleDatumArgs, 'from' | 'to'>>;
  AddSampleSubject?: Resolver<Maybe<ResolversTypes['_AddSampleSubjectPayload']>, ParentType, ContextType, RequireFields<MutationAddSampleSubjectArgs, 'from' | 'to'>>;
  RemoveSampleSubject?: Resolver<Maybe<ResolversTypes['_RemoveSampleSubjectPayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleSubjectArgs, 'from' | 'to'>>;
  MergeSampleSubject?: Resolver<Maybe<ResolversTypes['_MergeSampleSubjectPayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleSubjectArgs, 'from' | 'to'>>;
  AddSampleSampleGroup?: Resolver<Maybe<ResolversTypes['_AddSampleSampleGroupPayload']>, ParentType, ContextType, RequireFields<MutationAddSampleSampleGroupArgs, 'from' | 'to'>>;
  RemoveSampleSampleGroup?: Resolver<Maybe<ResolversTypes['_RemoveSampleSampleGroupPayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleSampleGroupArgs, 'from' | 'to'>>;
  MergeSampleSampleGroup?: Resolver<Maybe<ResolversTypes['_MergeSampleSampleGroupPayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleSampleGroupArgs, 'from' | 'to'>>;
  CreateSample?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType, RequireFields<MutationCreateSampleArgs, never>>;
  UpdateSample?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType, RequireFields<MutationUpdateSampleArgs, 'sampleId'>>;
  DeleteSample?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType, RequireFields<MutationDeleteSampleArgs, 'sampleId'>>;
  MergeSample?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType, RequireFields<MutationMergeSampleArgs, 'sampleId'>>;
  AddSampleDatumSampleGroup?: Resolver<Maybe<ResolversTypes['_AddSampleDatumSampleGroupPayload']>, ParentType, ContextType, RequireFields<MutationAddSampleDatumSampleGroupArgs, 'from' | 'to'>>;
  RemoveSampleDatumSampleGroup?: Resolver<Maybe<ResolversTypes['_RemoveSampleDatumSampleGroupPayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleDatumSampleGroupArgs, 'from' | 'to'>>;
  MergeSampleDatumSampleGroup?: Resolver<Maybe<ResolversTypes['_MergeSampleDatumSampleGroupPayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleDatumSampleGroupArgs, 'from' | 'to'>>;
  AddSampleDatumSample?: Resolver<Maybe<ResolversTypes['_AddSampleDatumSamplePayload']>, ParentType, ContextType, RequireFields<MutationAddSampleDatumSampleArgs, 'from' | 'to'>>;
  RemoveSampleDatumSample?: Resolver<Maybe<ResolversTypes['_RemoveSampleDatumSamplePayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleDatumSampleArgs, 'from' | 'to'>>;
  MergeSampleDatumSample?: Resolver<Maybe<ResolversTypes['_MergeSampleDatumSamplePayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleDatumSampleArgs, 'from' | 'to'>>;
  CreateSampleDatum?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType, RequireFields<MutationCreateSampleDatumArgs, 'sampleDatumName'>>;
  UpdateSampleDatum?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType, RequireFields<MutationUpdateSampleDatumArgs, 'sampleDatumName'>>;
  DeleteSampleDatum?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType, RequireFields<MutationDeleteSampleDatumArgs, 'sampleDatumName'>>;
  MergeSampleDatum?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType, RequireFields<MutationMergeSampleDatumArgs, 'sampleDatumName'>>;
  AddSampleGroupSampleData?: Resolver<Maybe<ResolversTypes['_AddSampleGroupSampleDataPayload']>, ParentType, ContextType, RequireFields<MutationAddSampleGroupSampleDataArgs, 'from' | 'to'>>;
  RemoveSampleGroupSampleData?: Resolver<Maybe<ResolversTypes['_RemoveSampleGroupSampleDataPayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleGroupSampleDataArgs, 'from' | 'to'>>;
  MergeSampleGroupSampleData?: Resolver<Maybe<ResolversTypes['_MergeSampleGroupSampleDataPayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleGroupSampleDataArgs, 'from' | 'to'>>;
  AddSampleGroupSamples?: Resolver<Maybe<ResolversTypes['_AddSampleGroupSamplesPayload']>, ParentType, ContextType, RequireFields<MutationAddSampleGroupSamplesArgs, 'from' | 'to'>>;
  RemoveSampleGroupSamples?: Resolver<Maybe<ResolversTypes['_RemoveSampleGroupSamplesPayload']>, ParentType, ContextType, RequireFields<MutationRemoveSampleGroupSamplesArgs, 'from' | 'to'>>;
  MergeSampleGroupSamples?: Resolver<Maybe<ResolversTypes['_MergeSampleGroupSamplesPayload']>, ParentType, ContextType, RequireFields<MutationMergeSampleGroupSamplesArgs, 'from' | 'to'>>;
  CreateSampleGroup?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType, RequireFields<MutationCreateSampleGroupArgs, 'sampleGroupName'>>;
  DeleteSampleGroup?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType, RequireFields<MutationDeleteSampleGroupArgs, 'sampleGroupName'>>;
  MergeSampleGroup?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType, RequireFields<MutationMergeSampleGroupArgs, 'sampleGroupName'>>;
  CreateBasic?: Resolver<Maybe<ResolversTypes['Basic']>, ParentType, ContextType>;
  DeleteBasic?: Resolver<Maybe<ResolversTypes['Basic']>, ParentType, ContextType>;
  MergeBasic?: Resolver<Maybe<ResolversTypes['Basic']>, ParentType, ContextType>;
  CreateStudy?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType, RequireFields<MutationCreateStudyArgs, 'name'>>;
  DeleteStudy?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType, RequireFields<MutationDeleteStudyArgs, 'name'>>;
  MergeStudy?: Resolver<Maybe<ResolversTypes['Study']>, ParentType, ContextType, RequireFields<MutationMergeStudyArgs, 'name'>>;
  CreateTimepoint?: Resolver<Maybe<ResolversTypes['Timepoint']>, ParentType, ContextType, RequireFields<MutationCreateTimepointArgs, 'name'>>;
  DeleteTimepoint?: Resolver<Maybe<ResolversTypes['Timepoint']>, ParentType, ContextType, RequireFields<MutationDeleteTimepointArgs, 'name'>>;
  MergeTimepoint?: Resolver<Maybe<ResolversTypes['Timepoint']>, ParentType, ContextType, RequireFields<MutationMergeTimepointArgs, 'name'>>;
  CreateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name'>>;
  DeleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'name'>>;
  MergeCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationMergeCategoryArgs, 'name'>>;
  CreateDataFile?: Resolver<Maybe<ResolversTypes['DataFile']>, ParentType, ContextType, RequireFields<MutationCreateDataFileArgs, 'presignedUrl'>>;
  UpdateDataFile?: Resolver<Maybe<ResolversTypes['DataFile']>, ParentType, ContextType, RequireFields<MutationUpdateDataFileArgs, 'presignedUrl'>>;
  DeleteDataFile?: Resolver<Maybe<ResolversTypes['DataFile']>, ParentType, ContextType, RequireFields<MutationDeleteDataFileArgs, 'presignedUrl'>>;
  MergeDataFile?: Resolver<Maybe<ResolversTypes['DataFile']>, ParentType, ContextType, RequireFields<MutationMergeDataFileArgs, 'presignedUrl'>>;
  CreateUploadedFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType, RequireFields<MutationCreateUploadedFileArgs, never>>;
  UpdateUploadedFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType, RequireFields<MutationUpdateUploadedFileArgs, 'bucketName'>>;
  DeleteUploadedFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType, RequireFields<MutationDeleteUploadedFileArgs, 'bucketName'>>;
  MergeUploadedFile?: Resolver<Maybe<ResolversTypes['UploadedFile']>, ParentType, ContextType, RequireFields<MutationMergeUploadedFileArgs, 'bucketName'>>;
  CreateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationCreateFileArgs, 'filename' | 'mimetype' | 'encoding'>>;
  UpdateFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationUpdateFileArgs, 'filename'>>;
  DeleteFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationDeleteFileArgs, 'filename'>>;
  MergeFile?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<MutationMergeFileArgs, 'filename'>>;
  CreateKeycloakUser?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType, RequireFields<MutationCreateKeycloakUserArgs, 'name' | 'email' | 'userID'>>;
  UpdateKeycloakUser?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType, RequireFields<MutationUpdateKeycloakUserArgs, 'keycloakUserID'>>;
  DeleteKeycloakUser?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType, RequireFields<MutationDeleteKeycloakUserArgs, 'keycloakUserID'>>;
  MergeKeycloakUser?: Resolver<Maybe<ResolversTypes['KeycloakUser']>, ParentType, ContextType, RequireFields<MutationMergeKeycloakUserArgs, 'keycloakUserID'>>;
};

export type QueryResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  subjectCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listBasicMinio?: Resolver<Maybe<ResolversTypes['Basic']>, ParentType, ContextType, RequireFields<QueryListBasicMinioArgs, never>>;
  Subject?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subject']>>>, ParentType, ContextType, RequireFields<QuerySubjectArgs, never>>;
  Sample?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sample']>>>, ParentType, ContextType, RequireFields<QuerySampleArgs, never>>;
  SampleDatum?: Resolver<Maybe<Array<Maybe<ResolversTypes['SampleDatum']>>>, ParentType, ContextType, RequireFields<QuerySampleDatumArgs, never>>;
  SampleGroup?: Resolver<Maybe<Array<Maybe<ResolversTypes['SampleGroup']>>>, ParentType, ContextType, RequireFields<QuerySampleGroupArgs, never>>;
  Basic?: Resolver<Maybe<Array<Maybe<ResolversTypes['Basic']>>>, ParentType, ContextType, RequireFields<QueryBasicArgs, never>>;
  Study?: Resolver<Maybe<Array<Maybe<ResolversTypes['Study']>>>, ParentType, ContextType, RequireFields<QueryStudyArgs, never>>;
  Timepoint?: Resolver<Maybe<Array<Maybe<ResolversTypes['Timepoint']>>>, ParentType, ContextType, RequireFields<QueryTimepointArgs, never>>;
  Category?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, RequireFields<QueryCategoryArgs, never>>;
  DataFile?: Resolver<Maybe<Array<Maybe<ResolversTypes['DataFile']>>>, ParentType, ContextType, RequireFields<QueryDataFileArgs, never>>;
  UploadedFile?: Resolver<Maybe<Array<Maybe<ResolversTypes['UploadedFile']>>>, ParentType, ContextType, RequireFields<QueryUploadedFileArgs, never>>;
  File?: Resolver<Maybe<Array<Maybe<ResolversTypes['File']>>>, ParentType, ContextType, RequireFields<QueryFileArgs, never>>;
  KeycloakUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['KeycloakUser']>>>, ParentType, ContextType, RequireFields<QueryKeycloakUserArgs, never>>;
};

export type SampleResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Sample'] = ResolversParentTypes['Sample']> = {
  sampleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampleDatum?: Resolver<ResolversTypes['SampleDatum'], ParentType, ContextType, RequireFields<SampleSampleDatumArgs, never>>;
  sampleDatumName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sampleValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType, RequireFields<SampleSubjectArgs, never>>;
  sampleGroup?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType, RequireFields<SampleSampleGroupArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleDatumResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['SampleDatum'] = ResolversParentTypes['SampleDatum']> = {
  sampleDatumName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sampleDatumType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sampleGroup?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType, RequireFields<SampleDatumSampleGroupArgs, never>>;
  sample?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sample']>>>, ParentType, ContextType, RequireFields<SampleDatumSampleArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SampleGroupResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['SampleGroup'] = ResolversParentTypes['SampleGroup']> = {
  sampleGroupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sampleData?: Resolver<Array<ResolversTypes['SampleDatum']>, ParentType, ContextType, RequireFields<SampleGroupSampleDataArgs, never>>;
  samples?: Resolver<Maybe<Array<Maybe<ResolversTypes['Sample']>>>, ParentType, ContextType, RequireFields<SampleGroupSamplesArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StudyResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Study'] = ResolversParentTypes['Study']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timepoints?: Resolver<Array<ResolversTypes['Timepoint']>, ParentType, ContextType, RequireFields<StudyTimepointsArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubjectResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Subject'] = ResolversParentTypes['Subject']> = {
  subjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sample?: Resolver<Array<ResolversTypes['Sample']>, ParentType, ContextType, RequireFields<SubjectSampleArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimepointResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['Timepoint'] = ResolversParentTypes['Timepoint']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<TimepointCategoriesArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadedFileResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['UploadedFile'] = ResolversParentTypes['UploadedFile']> = {
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucketName?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  objectName?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleDatumSampleGroupPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleDatumSampleGroupPayload'] = ResolversParentTypes['_AddSampleDatumSampleGroupPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleDatumSamplePayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleDatumSamplePayload'] = ResolversParentTypes['_AddSampleDatumSamplePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleGroupSampleDataPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleGroupSampleDataPayload'] = ResolversParentTypes['_AddSampleGroupSampleDataPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleGroupSamplesPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleGroupSamplesPayload'] = ResolversParentTypes['_AddSampleGroupSamplesPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleSampleDatumPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleSampleDatumPayload'] = ResolversParentTypes['_AddSampleSampleDatumPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleSampleGroupPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleSampleGroupPayload'] = ResolversParentTypes['_AddSampleSampleGroupPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSampleSubjectPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSampleSubjectPayload'] = ResolversParentTypes['_AddSampleSubjectPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _AddSubjectSamplePayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_AddSubjectSamplePayload'] = ResolversParentTypes['_AddSubjectSamplePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleDatumSampleGroupPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleDatumSampleGroupPayload'] = ResolversParentTypes['_MergeSampleDatumSampleGroupPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleDatumSamplePayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleDatumSamplePayload'] = ResolversParentTypes['_MergeSampleDatumSamplePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleGroupSampleDataPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleGroupSampleDataPayload'] = ResolversParentTypes['_MergeSampleGroupSampleDataPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleGroupSamplesPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleGroupSamplesPayload'] = ResolversParentTypes['_MergeSampleGroupSamplesPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleSampleDatumPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleSampleDatumPayload'] = ResolversParentTypes['_MergeSampleSampleDatumPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleSampleGroupPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleSampleGroupPayload'] = ResolversParentTypes['_MergeSampleSampleGroupPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSampleSubjectPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSampleSubjectPayload'] = ResolversParentTypes['_MergeSampleSubjectPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _MergeSubjectSamplePayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_MergeSubjectSamplePayload'] = ResolversParentTypes['_MergeSubjectSamplePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jDateResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_Neo4jDate'] = ResolversParentTypes['_Neo4jDate']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jDateTimeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_Neo4jDateTime'] = ResolversParentTypes['_Neo4jDateTime']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jLocalDateTimeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_Neo4jLocalDateTime'] = ResolversParentTypes['_Neo4jLocalDateTime']> = {
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jLocalTimeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_Neo4jLocalTime'] = ResolversParentTypes['_Neo4jLocalTime']> = {
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jPointResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_Neo4jPoint'] = ResolversParentTypes['_Neo4jPoint']> = {
  x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Neo4jTimeResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_Neo4jTime'] = ResolversParentTypes['_Neo4jTime']> = {
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleDatumSampleGroupPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleDatumSampleGroupPayload'] = ResolversParentTypes['_RemoveSampleDatumSampleGroupPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleDatumSamplePayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleDatumSamplePayload'] = ResolversParentTypes['_RemoveSampleDatumSamplePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleGroupSampleDataPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleGroupSampleDataPayload'] = ResolversParentTypes['_RemoveSampleGroupSampleDataPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleGroupSamplesPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleGroupSamplesPayload'] = ResolversParentTypes['_RemoveSampleGroupSamplesPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleSampleDatumPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleSampleDatumPayload'] = ResolversParentTypes['_RemoveSampleSampleDatumPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleDatum']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleSampleGroupPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleSampleGroupPayload'] = ResolversParentTypes['_RemoveSampleSampleGroupPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['SampleGroup']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSampleSubjectPayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSampleSubjectPayload'] = ResolversParentTypes['_RemoveSampleSubjectPayload']> = {
  from?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _RemoveSubjectSamplePayloadResolvers<ContextType = MyContextType, ParentType extends ResolversParentTypes['_RemoveSubjectSamplePayload'] = ResolversParentTypes['_RemoveSubjectSamplePayload']> = {
  from?: Resolver<Maybe<ResolversTypes['Subject']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Sample']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MyContextType> = {
  Basic?: BasicResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  DataFile?: DataFileResolvers<ContextType>;
  Email?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  KeycloakUser?: KeycloakUserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sample?: SampleResolvers<ContextType>;
  SampleDatum?: SampleDatumResolvers<ContextType>;
  SampleGroup?: SampleGroupResolvers<ContextType>;
  Study?: StudyResolvers<ContextType>;
  Subject?: SubjectResolvers<ContextType>;
  Timepoint?: TimepointResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadedFile?: UploadedFileResolvers<ContextType>;
  _AddSampleDatumSampleGroupPayload?: _AddSampleDatumSampleGroupPayloadResolvers<ContextType>;
  _AddSampleDatumSamplePayload?: _AddSampleDatumSamplePayloadResolvers<ContextType>;
  _AddSampleGroupSampleDataPayload?: _AddSampleGroupSampleDataPayloadResolvers<ContextType>;
  _AddSampleGroupSamplesPayload?: _AddSampleGroupSamplesPayloadResolvers<ContextType>;
  _AddSampleSampleDatumPayload?: _AddSampleSampleDatumPayloadResolvers<ContextType>;
  _AddSampleSampleGroupPayload?: _AddSampleSampleGroupPayloadResolvers<ContextType>;
  _AddSampleSubjectPayload?: _AddSampleSubjectPayloadResolvers<ContextType>;
  _AddSubjectSamplePayload?: _AddSubjectSamplePayloadResolvers<ContextType>;
  _MergeSampleDatumSampleGroupPayload?: _MergeSampleDatumSampleGroupPayloadResolvers<ContextType>;
  _MergeSampleDatumSamplePayload?: _MergeSampleDatumSamplePayloadResolvers<ContextType>;
  _MergeSampleGroupSampleDataPayload?: _MergeSampleGroupSampleDataPayloadResolvers<ContextType>;
  _MergeSampleGroupSamplesPayload?: _MergeSampleGroupSamplesPayloadResolvers<ContextType>;
  _MergeSampleSampleDatumPayload?: _MergeSampleSampleDatumPayloadResolvers<ContextType>;
  _MergeSampleSampleGroupPayload?: _MergeSampleSampleGroupPayloadResolvers<ContextType>;
  _MergeSampleSubjectPayload?: _MergeSampleSubjectPayloadResolvers<ContextType>;
  _MergeSubjectSamplePayload?: _MergeSubjectSamplePayloadResolvers<ContextType>;
  _Neo4jDate?: _Neo4jDateResolvers<ContextType>;
  _Neo4jDateTime?: _Neo4jDateTimeResolvers<ContextType>;
  _Neo4jLocalDateTime?: _Neo4jLocalDateTimeResolvers<ContextType>;
  _Neo4jLocalTime?: _Neo4jLocalTimeResolvers<ContextType>;
  _Neo4jPoint?: _Neo4jPointResolvers<ContextType>;
  _Neo4jTime?: _Neo4jTimeResolvers<ContextType>;
  _RemoveSampleDatumSampleGroupPayload?: _RemoveSampleDatumSampleGroupPayloadResolvers<ContextType>;
  _RemoveSampleDatumSamplePayload?: _RemoveSampleDatumSamplePayloadResolvers<ContextType>;
  _RemoveSampleGroupSampleDataPayload?: _RemoveSampleGroupSampleDataPayloadResolvers<ContextType>;
  _RemoveSampleGroupSamplesPayload?: _RemoveSampleGroupSamplesPayloadResolvers<ContextType>;
  _RemoveSampleSampleDatumPayload?: _RemoveSampleSampleDatumPayloadResolvers<ContextType>;
  _RemoveSampleSampleGroupPayload?: _RemoveSampleSampleGroupPayloadResolvers<ContextType>;
  _RemoveSampleSubjectPayload?: _RemoveSampleSubjectPayloadResolvers<ContextType>;
  _RemoveSubjectSamplePayload?: _RemoveSubjectSamplePayloadResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContextType> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = MyContextType> = {
  MutationMeta?: MutationMetaDirectiveResolver<any, any, ContextType>;
  additionalLabels?: AdditionalLabelsDirectiveResolver<any, any, ContextType>;
  auth?: AuthDirectiveResolver<any, any, ContextType>;
  cypher?: CypherDirectiveResolver<any, any, ContextType>;
  hasPermission?: HasPermissionDirectiveResolver<any, any, ContextType>;
  hasRole?: HasRoleDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  index?: IndexDirectiveResolver<any, any, ContextType>;
  neo4j_ignore?: Neo4j_IgnoreDirectiveResolver<any, any, ContextType>;
  relation?: RelationDirectiveResolver<any, any, ContextType>;
  search?: SearchDirectiveResolver<any, any, ContextType>;
  unique?: UniqueDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = MyContextType> = DirectiveResolvers<ContextType>;