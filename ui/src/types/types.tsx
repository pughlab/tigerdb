import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  _id: Maybe<Scalars['String']>;
};


export type BasicStudiesArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_StudyOrdering>>>;
  filter: Maybe<_StudyFilter>;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String'];
  datafiles: Array<DataFile>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type CategoryDatafilesArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_DataFileOrdering>>>;
  filter: Maybe<_DataFileFilter>;
};

export type DataFile = {
  __typename?: 'DataFile';
  fileName: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  etag: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type File = {
  __typename?: 'File';
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};

export type KeycloakUser = {
  __typename?: 'KeycloakUser';
  keycloakUserID: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['Email'];
  userID: Scalars['ID'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  delete: Maybe<Scalars['String']>;
  load: Maybe<Scalars['String']>;
  load2: Maybe<Scalars['String']>;
  load3: Maybe<Scalars['String']>;
  testm: Maybe<Scalars['String']>;
  initMinio: Maybe<Scalars['String']>;
  minioUpload: Maybe<File>;
  minioDelete: Maybe<File>;
  me: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSubjectSample: Maybe<_AddSubjectSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSubjectSample: Maybe<_RemoveSubjectSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSubjectSample: Maybe<_MergeSubjectSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Subject node. */
  CreateSubject: Maybe<Subject>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Subject node. */
  DeleteSubject: Maybe<Subject>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Subject node. */
  MergeSubject: Maybe<Subject>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleSampleDatum: Maybe<_AddSampleSampleDatumPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleSampleDatum: Maybe<_RemoveSampleSampleDatumPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleSampleDatum: Maybe<_MergeSampleSampleDatumPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleSubject: Maybe<_AddSampleSubjectPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleSubject: Maybe<_RemoveSampleSubjectPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleSubject: Maybe<_MergeSampleSubjectPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleSampleGroup: Maybe<_AddSampleSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleSampleGroup: Maybe<_RemoveSampleSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleSampleGroup: Maybe<_MergeSampleSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Sample node. */
  CreateSample: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Sample node. */
  UpdateSample: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Sample node. */
  DeleteSample: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Sample node. */
  MergeSample: Maybe<Sample>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_datum relationship. */
  AddSampleDatumSampleGroup: Maybe<_AddSampleDatumSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_datum relationship. */
  RemoveSampleDatumSampleGroup: Maybe<_RemoveSampleDatumSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_datum relationship. */
  MergeSampleDatumSampleGroup: Maybe<_MergeSampleDatumSampleGroupPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleDatumSample: Maybe<_AddSampleDatumSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleDatumSample: Maybe<_RemoveSampleDatumSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleDatumSample: Maybe<_MergeSampleDatumSamplePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a SampleDatum node. */
  CreateSampleDatum: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a SampleDatum node. */
  UpdateSampleDatum: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a SampleDatum node. */
  DeleteSampleDatum: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a SampleDatum node. */
  MergeSampleDatum: Maybe<SampleDatum>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_datum relationship. */
  AddSampleGroupSampleData: Maybe<_AddSampleGroupSampleDataPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_datum relationship. */
  RemoveSampleGroupSampleData: Maybe<_RemoveSampleGroupSampleDataPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_datum relationship. */
  MergeSampleGroupSampleData: Maybe<_MergeSampleGroupSampleDataPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the has_sample relationship. */
  AddSampleGroupSamples: Maybe<_AddSampleGroupSamplesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the has_sample relationship. */
  RemoveSampleGroupSamples: Maybe<_RemoveSampleGroupSamplesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the has_sample relationship. */
  MergeSampleGroupSamples: Maybe<_MergeSampleGroupSamplesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a SampleGroup node. */
  CreateSampleGroup: Maybe<SampleGroup>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a SampleGroup node. */
  DeleteSampleGroup: Maybe<SampleGroup>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a SampleGroup node. */
  MergeSampleGroup: Maybe<SampleGroup>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Basic node. */
  CreateBasic: Maybe<Basic>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Basic node. */
  DeleteBasic: Maybe<Basic>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Basic node. */
  MergeBasic: Maybe<Basic>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Study node. */
  CreateStudy: Maybe<Study>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Study node. */
  DeleteStudy: Maybe<Study>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Study node. */
  MergeStudy: Maybe<Study>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Timepoint node. */
  CreateTimepoint: Maybe<Timepoint>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Timepoint node. */
  DeleteTimepoint: Maybe<Timepoint>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Timepoint node. */
  MergeTimepoint: Maybe<Timepoint>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Category node. */
  CreateCategory: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Category node. */
  DeleteCategory: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Category node. */
  MergeCategory: Maybe<Category>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a DataFile node. */
  CreateDataFile: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a DataFile node. */
  UpdateDataFile: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a DataFile node. */
  DeleteDataFile: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a DataFile node. */
  MergeDataFile: Maybe<DataFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a UploadedFile node. */
  CreateUploadedFile: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a UploadedFile node. */
  UpdateUploadedFile: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a UploadedFile node. */
  DeleteUploadedFile: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a UploadedFile node. */
  MergeUploadedFile: Maybe<UploadedFile>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a File node. */
  CreateFile: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a File node. */
  UpdateFile: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a File node. */
  DeleteFile: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a File node. */
  MergeFile: Maybe<File>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a KeycloakUser node. */
  CreateKeycloakUser: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a KeycloakUser node. */
  UpdateKeycloakUser: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a KeycloakUser node. */
  DeleteKeycloakUser: Maybe<KeycloakUser>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a KeycloakUser node. */
  MergeKeycloakUser: Maybe<KeycloakUser>;
};


export type MutationLoad3Args = {
  Filename: Maybe<Scalars['String']>;
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
  subjectId: Maybe<Scalars['String']>;
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
  sampleId: Maybe<Scalars['String']>;
  sampleValue: Maybe<Scalars['String']>;
};


export type MutationUpdateSampleArgs = {
  sampleId: Scalars['String'];
  sampleValue: Maybe<Scalars['String']>;
};


export type MutationDeleteSampleArgs = {
  sampleId: Scalars['String'];
};


export type MutationMergeSampleArgs = {
  sampleId: Scalars['String'];
  sampleValue: Maybe<Scalars['String']>;
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
  sampleDatumType: Maybe<Scalars['String']>;
};


export type MutationUpdateSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
  sampleDatumType: Maybe<Scalars['String']>;
};


export type MutationDeleteSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
};


export type MutationMergeSampleDatumArgs = {
  sampleDatumName: Scalars['String'];
  sampleDatumType: Maybe<Scalars['String']>;
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
  fileName: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  etag: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
};


export type MutationUpdateDataFileArgs = {
  fileName: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  etag: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
};


export type MutationDeleteDataFileArgs = {
  presignedUrl: Scalars['String'];
};


export type MutationMergeDataFileArgs = {
  fileName: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  etag: Maybe<Scalars['String']>;
  presignedUrl: Scalars['String'];
};


export type MutationCreateUploadedFileArgs = {
  filename: Maybe<Scalars['String']>;
  bucketName: Maybe<Scalars['ID']>;
  objectName: Maybe<Scalars['ID']>;
};


export type MutationUpdateUploadedFileArgs = {
  filename: Maybe<Scalars['String']>;
  bucketName: Scalars['ID'];
  objectName: Maybe<Scalars['ID']>;
};


export type MutationDeleteUploadedFileArgs = {
  bucketName: Scalars['ID'];
};


export type MutationMergeUploadedFileArgs = {
  filename: Maybe<Scalars['String']>;
  bucketName: Scalars['ID'];
  objectName: Maybe<Scalars['ID']>;
};


export type MutationCreateFileArgs = {
  filename: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};


export type MutationUpdateFileArgs = {
  filename: Scalars['String'];
  mimetype: Maybe<Scalars['String']>;
  encoding: Maybe<Scalars['String']>;
};


export type MutationDeleteFileArgs = {
  filename: Scalars['String'];
};


export type MutationMergeFileArgs = {
  filename: Scalars['String'];
  mimetype: Maybe<Scalars['String']>;
  encoding: Maybe<Scalars['String']>;
};


export type MutationCreateKeycloakUserArgs = {
  keycloakUserID: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  email: Scalars['Email'];
  userID: Scalars['ID'];
};


export type MutationUpdateKeycloakUserArgs = {
  keycloakUserID: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['Email']>;
  userID: Maybe<Scalars['ID']>;
};


export type MutationDeleteKeycloakUserArgs = {
  keycloakUserID: Scalars['ID'];
};


export type MutationMergeKeycloakUserArgs = {
  keycloakUserID: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['Email']>;
  userID: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  subjectCount: Maybe<Scalars['Int']>;
  listBasicMinio: Maybe<Basic>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Subject type nodes. */
  Subject: Maybe<Array<Maybe<Subject>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Sample type nodes. */
  Sample: Maybe<Array<Maybe<Sample>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for SampleDatum type nodes. */
  SampleDatum: Maybe<Array<Maybe<SampleDatum>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for SampleGroup type nodes. */
  SampleGroup: Maybe<Array<Maybe<SampleGroup>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Basic type nodes. */
  Basic: Maybe<Array<Maybe<Basic>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Study type nodes. */
  Study: Maybe<Array<Maybe<Study>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Timepoint type nodes. */
  Timepoint: Maybe<Array<Maybe<Timepoint>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Category type nodes. */
  Category: Maybe<Array<Maybe<Category>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for DataFile type nodes. */
  DataFile: Maybe<Array<Maybe<DataFile>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for UploadedFile type nodes. */
  UploadedFile: Maybe<Array<Maybe<UploadedFile>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for File type nodes. */
  File: Maybe<Array<Maybe<File>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for KeycloakUser type nodes. */
  KeycloakUser: Maybe<Array<Maybe<KeycloakUser>>>;
};


export type QueryListBasicMinioArgs = {
  filter: Maybe<_BasicFilter>;
};


export type QuerySubjectArgs = {
  subjectId: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SubjectOrdering>>>;
  filter: Maybe<_SubjectFilter>;
};


export type QuerySampleArgs = {
  sampleId: Maybe<Scalars['String']>;
  sampleValue: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter: Maybe<_SampleFilter>;
};


export type QuerySampleDatumArgs = {
  sampleDatumName: Maybe<Scalars['String']>;
  sampleDatumType: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleDatumOrdering>>>;
  filter: Maybe<_SampleDatumFilter>;
};


export type QuerySampleGroupArgs = {
  sampleGroupName: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleGroupOrdering>>>;
  filter: Maybe<_SampleGroupFilter>;
};


export type QueryBasicArgs = {
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_BasicOrdering>>>;
  filter: Maybe<_BasicFilter>;
};


export type QueryStudyArgs = {
  name: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_StudyOrdering>>>;
  filter: Maybe<_StudyFilter>;
};


export type QueryTimepointArgs = {
  name: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_TimepointOrdering>>>;
  filter: Maybe<_TimepointFilter>;
};


export type QueryCategoryArgs = {
  name: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter: Maybe<_CategoryFilter>;
};


export type QueryDataFileArgs = {
  fileName: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  etag: Maybe<Scalars['String']>;
  presignedUrl: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_DataFileOrdering>>>;
  filter: Maybe<_DataFileFilter>;
};


export type QueryUploadedFileArgs = {
  filename: Maybe<Scalars['String']>;
  bucketName: Maybe<Scalars['ID']>;
  objectName: Maybe<Scalars['ID']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_UploadedFileOrdering>>>;
  filter: Maybe<_UploadedFileFilter>;
};


export type QueryFileArgs = {
  filename: Maybe<Scalars['String']>;
  mimetype: Maybe<Scalars['String']>;
  encoding: Maybe<Scalars['String']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_FileOrdering>>>;
  filter: Maybe<_FileFilter>;
};


export type QueryKeycloakUserArgs = {
  keycloakUserID: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  email: Maybe<Scalars['Email']>;
  userID: Maybe<Scalars['ID']>;
  _id: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_KeycloakUserOrdering>>>;
  filter: Maybe<_KeycloakUserFilter>;
};

export type Sample = {
  __typename?: 'Sample';
  sampleId: Maybe<Scalars['String']>;
  sampleDatum: SampleDatum;
  sampleDatumName: Scalars['String'];
  sampleValue: Maybe<Scalars['String']>;
  subject: Maybe<Subject>;
  sampleGroup: Maybe<SampleGroup>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type SampleSampleDatumArgs = {
  filter: Maybe<_SampleDatumFilter>;
};


export type SampleSubjectArgs = {
  filter: Maybe<_SubjectFilter>;
};


export type SampleSampleGroupArgs = {
  filter: Maybe<_SampleGroupFilter>;
};

export type SampleDatum = {
  __typename?: 'SampleDatum';
  sampleDatumName: Scalars['String'];
  sampleDatumType: Maybe<Scalars['String']>;
  sampleGroup: Maybe<SampleGroup>;
  sample: Maybe<Array<Maybe<Sample>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type SampleDatumSampleGroupArgs = {
  filter: Maybe<_SampleGroupFilter>;
};


export type SampleDatumSampleArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter: Maybe<_SampleFilter>;
};

export type SampleGroup = {
  __typename?: 'SampleGroup';
  sampleGroupName: Scalars['String'];
  sampleData: Array<SampleDatum>;
  samples: Maybe<Array<Maybe<Sample>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type SampleGroupSampleDataArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleDatumOrdering>>>;
  filter: Maybe<_SampleDatumFilter>;
};


export type SampleGroupSamplesArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter: Maybe<_SampleFilter>;
};

export type Study = {
  __typename?: 'Study';
  name: Scalars['String'];
  timepoints: Array<Timepoint>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type StudyTimepointsArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_TimepointOrdering>>>;
  filter: Maybe<_TimepointFilter>;
};

export type Subject = {
  __typename?: 'Subject';
  subjectId: Maybe<Scalars['String']>;
  sample: Array<Sample>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type SubjectSampleArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_SampleOrdering>>>;
  filter: Maybe<_SampleFilter>;
};

export type Timepoint = {
  __typename?: 'Timepoint';
  name: Scalars['String'];
  categories: Array<Category>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};


export type TimepointCategoriesArgs = {
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  orderBy: Maybe<Array<Maybe<_CategoryOrdering>>>;
  filter: Maybe<_CategoryFilter>;
};


export type UploadedFile = {
  __typename?: 'UploadedFile';
  filename: Maybe<Scalars['String']>;
  bucketName: Maybe<Scalars['ID']>;
  objectName: Maybe<Scalars['ID']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id: Maybe<Scalars['String']>;
};

export type _AddSampleDatumSampleGroupPayload = {
  __typename?: '_AddSampleDatumSampleGroupPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<SampleDatum>;
};

export type _AddSampleDatumSamplePayload = {
  __typename?: '_AddSampleDatumSamplePayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _AddSampleGroupSampleDataPayload = {
  __typename?: '_AddSampleGroupSampleDataPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<SampleDatum>;
};

export type _AddSampleGroupSamplesPayload = {
  __typename?: '_AddSampleGroupSamplesPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _AddSampleSampleDatumPayload = {
  __typename?: '_AddSampleSampleDatumPayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _AddSampleSampleGroupPayload = {
  __typename?: '_AddSampleSampleGroupPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _AddSampleSubjectPayload = {
  __typename?: '_AddSampleSubjectPayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _AddSubjectSamplePayload = {
  __typename?: '_AddSubjectSamplePayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _BasicFilter = {
  AND: Maybe<Array<_BasicFilter>>;
  OR: Maybe<Array<_BasicFilter>>;
};

export enum _BasicOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _CategoryFilter = {
  AND: Maybe<Array<_CategoryFilter>>;
  OR: Maybe<Array<_CategoryFilter>>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
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
  AND: Maybe<Array<_DataFileFilter>>;
  OR: Maybe<Array<_DataFileFilter>>;
  fileName: Maybe<Scalars['String']>;
  fileName_not: Maybe<Scalars['String']>;
  fileName_in: Maybe<Array<Scalars['String']>>;
  fileName_not_in: Maybe<Array<Scalars['String']>>;
  fileName_regexp: Maybe<Scalars['String']>;
  fileName_contains: Maybe<Scalars['String']>;
  fileName_not_contains: Maybe<Scalars['String']>;
  fileName_starts_with: Maybe<Scalars['String']>;
  fileName_not_starts_with: Maybe<Scalars['String']>;
  fileName_ends_with: Maybe<Scalars['String']>;
  fileName_not_ends_with: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
  etag: Maybe<Scalars['String']>;
  etag_not: Maybe<Scalars['String']>;
  etag_in: Maybe<Array<Scalars['String']>>;
  etag_not_in: Maybe<Array<Scalars['String']>>;
  etag_regexp: Maybe<Scalars['String']>;
  etag_contains: Maybe<Scalars['String']>;
  etag_not_contains: Maybe<Scalars['String']>;
  etag_starts_with: Maybe<Scalars['String']>;
  etag_not_starts_with: Maybe<Scalars['String']>;
  etag_ends_with: Maybe<Scalars['String']>;
  etag_not_ends_with: Maybe<Scalars['String']>;
  presignedUrl: Maybe<Scalars['String']>;
  presignedUrl_not: Maybe<Scalars['String']>;
  presignedUrl_in: Maybe<Array<Scalars['String']>>;
  presignedUrl_not_in: Maybe<Array<Scalars['String']>>;
  presignedUrl_regexp: Maybe<Scalars['String']>;
  presignedUrl_contains: Maybe<Scalars['String']>;
  presignedUrl_not_contains: Maybe<Scalars['String']>;
  presignedUrl_starts_with: Maybe<Scalars['String']>;
  presignedUrl_not_starts_with: Maybe<Scalars['String']>;
  presignedUrl_ends_with: Maybe<Scalars['String']>;
  presignedUrl_not_ends_with: Maybe<Scalars['String']>;
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
  AND: Maybe<Array<_FileFilter>>;
  OR: Maybe<Array<_FileFilter>>;
  filename: Maybe<Scalars['String']>;
  filename_not: Maybe<Scalars['String']>;
  filename_in: Maybe<Array<Scalars['String']>>;
  filename_not_in: Maybe<Array<Scalars['String']>>;
  filename_regexp: Maybe<Scalars['String']>;
  filename_contains: Maybe<Scalars['String']>;
  filename_not_contains: Maybe<Scalars['String']>;
  filename_starts_with: Maybe<Scalars['String']>;
  filename_not_starts_with: Maybe<Scalars['String']>;
  filename_ends_with: Maybe<Scalars['String']>;
  filename_not_ends_with: Maybe<Scalars['String']>;
  mimetype: Maybe<Scalars['String']>;
  mimetype_not: Maybe<Scalars['String']>;
  mimetype_in: Maybe<Array<Scalars['String']>>;
  mimetype_not_in: Maybe<Array<Scalars['String']>>;
  mimetype_regexp: Maybe<Scalars['String']>;
  mimetype_contains: Maybe<Scalars['String']>;
  mimetype_not_contains: Maybe<Scalars['String']>;
  mimetype_starts_with: Maybe<Scalars['String']>;
  mimetype_not_starts_with: Maybe<Scalars['String']>;
  mimetype_ends_with: Maybe<Scalars['String']>;
  mimetype_not_ends_with: Maybe<Scalars['String']>;
  encoding: Maybe<Scalars['String']>;
  encoding_not: Maybe<Scalars['String']>;
  encoding_in: Maybe<Array<Scalars['String']>>;
  encoding_not_in: Maybe<Array<Scalars['String']>>;
  encoding_regexp: Maybe<Scalars['String']>;
  encoding_contains: Maybe<Scalars['String']>;
  encoding_not_contains: Maybe<Scalars['String']>;
  encoding_starts_with: Maybe<Scalars['String']>;
  encoding_not_starts_with: Maybe<Scalars['String']>;
  encoding_ends_with: Maybe<Scalars['String']>;
  encoding_not_ends_with: Maybe<Scalars['String']>;
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
  AND: Maybe<Array<_KeycloakUserFilter>>;
  OR: Maybe<Array<_KeycloakUserFilter>>;
  keycloakUserID: Maybe<Scalars['ID']>;
  keycloakUserID_not: Maybe<Scalars['ID']>;
  keycloakUserID_in: Maybe<Array<Scalars['ID']>>;
  keycloakUserID_not_in: Maybe<Array<Scalars['ID']>>;
  keycloakUserID_regexp: Maybe<Scalars['ID']>;
  keycloakUserID_contains: Maybe<Scalars['ID']>;
  keycloakUserID_not_contains: Maybe<Scalars['ID']>;
  keycloakUserID_starts_with: Maybe<Scalars['ID']>;
  keycloakUserID_not_starts_with: Maybe<Scalars['ID']>;
  keycloakUserID_ends_with: Maybe<Scalars['ID']>;
  keycloakUserID_not_ends_with: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
  email: Maybe<Scalars['Email']>;
  userID: Maybe<Scalars['ID']>;
  userID_not: Maybe<Scalars['ID']>;
  userID_in: Maybe<Array<Scalars['ID']>>;
  userID_not_in: Maybe<Array<Scalars['ID']>>;
  userID_regexp: Maybe<Scalars['ID']>;
  userID_contains: Maybe<Scalars['ID']>;
  userID_not_contains: Maybe<Scalars['ID']>;
  userID_starts_with: Maybe<Scalars['ID']>;
  userID_not_starts_with: Maybe<Scalars['ID']>;
  userID_ends_with: Maybe<Scalars['ID']>;
  userID_not_ends_with: Maybe<Scalars['ID']>;
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
  from: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<SampleDatum>;
};

export type _MergeSampleDatumSamplePayload = {
  __typename?: '_MergeSampleDatumSamplePayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _MergeSampleGroupSampleDataPayload = {
  __typename?: '_MergeSampleGroupSampleDataPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<SampleDatum>;
};

export type _MergeSampleGroupSamplesPayload = {
  __typename?: '_MergeSampleGroupSamplesPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _MergeSampleSampleDatumPayload = {
  __typename?: '_MergeSampleSampleDatumPayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _MergeSampleSampleGroupPayload = {
  __typename?: '_MergeSampleSampleGroupPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _MergeSampleSubjectPayload = {
  __typename?: '_MergeSampleSubjectPayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _MergeSubjectSamplePayload = {
  __typename?: '_MergeSubjectSamplePayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  year: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted: Maybe<Scalars['String']>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
  z: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  latitude: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  crs: Maybe<Scalars['String']>;
  srid: Maybe<Scalars['Int']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  x: Maybe<Scalars['Float']>;
  y: Maybe<Scalars['Float']>;
  z: Maybe<Scalars['Float']>;
  longitude: Maybe<Scalars['Float']>;
  latitude: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  crs: Maybe<Scalars['String']>;
  srid: Maybe<Scalars['Int']>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted: Maybe<Scalars['String']>;
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  hour: Maybe<Scalars['Int']>;
  minute: Maybe<Scalars['Int']>;
  second: Maybe<Scalars['Int']>;
  millisecond: Maybe<Scalars['Int']>;
  microsecond: Maybe<Scalars['Int']>;
  nanosecond: Maybe<Scalars['Int']>;
  timezone: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted: Maybe<Scalars['String']>;
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type _RemoveSampleDatumSampleGroupPayload = {
  __typename?: '_RemoveSampleDatumSampleGroupPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<SampleDatum>;
};

export type _RemoveSampleDatumSamplePayload = {
  __typename?: '_RemoveSampleDatumSamplePayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _RemoveSampleGroupSampleDataPayload = {
  __typename?: '_RemoveSampleGroupSampleDataPayload';
  /** Field for the SampleGroup node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the SampleDatum node this has_datum [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<SampleDatum>;
};

export type _RemoveSampleGroupSamplesPayload = {
  __typename?: '_RemoveSampleGroupSamplesPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _RemoveSampleSampleDatumPayload = {
  __typename?: '_RemoveSampleSampleDatumPayload';
  /** Field for the SampleDatum node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleDatum>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _RemoveSampleSampleGroupPayload = {
  __typename?: '_RemoveSampleSampleGroupPayload';
  /** Field for the SampleGroup node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<SampleGroup>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _RemoveSampleSubjectPayload = {
  __typename?: '_RemoveSampleSubjectPayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _RemoveSubjectSamplePayload = {
  __typename?: '_RemoveSubjectSamplePayload';
  /** Field for the Subject node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from: Maybe<Subject>;
  /** Field for the Sample node this has_sample [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to: Maybe<Sample>;
};

export type _SampleDatumFilter = {
  AND: Maybe<Array<_SampleDatumFilter>>;
  OR: Maybe<Array<_SampleDatumFilter>>;
  sampleDatumName: Maybe<Scalars['String']>;
  sampleDatumName_not: Maybe<Scalars['String']>;
  sampleDatumName_in: Maybe<Array<Scalars['String']>>;
  sampleDatumName_not_in: Maybe<Array<Scalars['String']>>;
  sampleDatumName_regexp: Maybe<Scalars['String']>;
  sampleDatumName_contains: Maybe<Scalars['String']>;
  sampleDatumName_not_contains: Maybe<Scalars['String']>;
  sampleDatumName_starts_with: Maybe<Scalars['String']>;
  sampleDatumName_not_starts_with: Maybe<Scalars['String']>;
  sampleDatumName_ends_with: Maybe<Scalars['String']>;
  sampleDatumName_not_ends_with: Maybe<Scalars['String']>;
  sampleDatumType: Maybe<Scalars['String']>;
  sampleDatumType_not: Maybe<Scalars['String']>;
  sampleDatumType_in: Maybe<Array<Scalars['String']>>;
  sampleDatumType_not_in: Maybe<Array<Scalars['String']>>;
  sampleDatumType_regexp: Maybe<Scalars['String']>;
  sampleDatumType_contains: Maybe<Scalars['String']>;
  sampleDatumType_not_contains: Maybe<Scalars['String']>;
  sampleDatumType_starts_with: Maybe<Scalars['String']>;
  sampleDatumType_not_starts_with: Maybe<Scalars['String']>;
  sampleDatumType_ends_with: Maybe<Scalars['String']>;
  sampleDatumType_not_ends_with: Maybe<Scalars['String']>;
  sampleGroup: Maybe<_SampleGroupFilter>;
  sampleGroup_not: Maybe<_SampleGroupFilter>;
  sampleGroup_in: Maybe<Array<_SampleGroupFilter>>;
  sampleGroup_not_in: Maybe<Array<_SampleGroupFilter>>;
  sample: Maybe<_SampleFilter>;
  sample_not: Maybe<_SampleFilter>;
  sample_in: Maybe<Array<_SampleFilter>>;
  sample_not_in: Maybe<Array<_SampleFilter>>;
  sample_some: Maybe<_SampleFilter>;
  sample_none: Maybe<_SampleFilter>;
  sample_single: Maybe<_SampleFilter>;
  sample_every: Maybe<_SampleFilter>;
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
  AND: Maybe<Array<_SampleFilter>>;
  OR: Maybe<Array<_SampleFilter>>;
  sampleId: Maybe<Scalars['String']>;
  sampleId_not: Maybe<Scalars['String']>;
  sampleId_in: Maybe<Array<Scalars['String']>>;
  sampleId_not_in: Maybe<Array<Scalars['String']>>;
  sampleId_regexp: Maybe<Scalars['String']>;
  sampleId_contains: Maybe<Scalars['String']>;
  sampleId_not_contains: Maybe<Scalars['String']>;
  sampleId_starts_with: Maybe<Scalars['String']>;
  sampleId_not_starts_with: Maybe<Scalars['String']>;
  sampleId_ends_with: Maybe<Scalars['String']>;
  sampleId_not_ends_with: Maybe<Scalars['String']>;
  sampleDatum: Maybe<_SampleDatumFilter>;
  sampleDatum_not: Maybe<_SampleDatumFilter>;
  sampleDatum_in: Maybe<Array<_SampleDatumFilter>>;
  sampleDatum_not_in: Maybe<Array<_SampleDatumFilter>>;
  sampleValue: Maybe<Scalars['String']>;
  sampleValue_not: Maybe<Scalars['String']>;
  sampleValue_in: Maybe<Array<Scalars['String']>>;
  sampleValue_not_in: Maybe<Array<Scalars['String']>>;
  sampleValue_regexp: Maybe<Scalars['String']>;
  sampleValue_contains: Maybe<Scalars['String']>;
  sampleValue_not_contains: Maybe<Scalars['String']>;
  sampleValue_starts_with: Maybe<Scalars['String']>;
  sampleValue_not_starts_with: Maybe<Scalars['String']>;
  sampleValue_ends_with: Maybe<Scalars['String']>;
  sampleValue_not_ends_with: Maybe<Scalars['String']>;
  subject: Maybe<_SubjectFilter>;
  subject_not: Maybe<_SubjectFilter>;
  subject_in: Maybe<Array<_SubjectFilter>>;
  subject_not_in: Maybe<Array<_SubjectFilter>>;
  sampleGroup: Maybe<_SampleGroupFilter>;
  sampleGroup_not: Maybe<_SampleGroupFilter>;
  sampleGroup_in: Maybe<Array<_SampleGroupFilter>>;
  sampleGroup_not_in: Maybe<Array<_SampleGroupFilter>>;
};

export type _SampleGroupFilter = {
  AND: Maybe<Array<_SampleGroupFilter>>;
  OR: Maybe<Array<_SampleGroupFilter>>;
  sampleGroupName: Maybe<Scalars['String']>;
  sampleGroupName_not: Maybe<Scalars['String']>;
  sampleGroupName_in: Maybe<Array<Scalars['String']>>;
  sampleGroupName_not_in: Maybe<Array<Scalars['String']>>;
  sampleGroupName_regexp: Maybe<Scalars['String']>;
  sampleGroupName_contains: Maybe<Scalars['String']>;
  sampleGroupName_not_contains: Maybe<Scalars['String']>;
  sampleGroupName_starts_with: Maybe<Scalars['String']>;
  sampleGroupName_not_starts_with: Maybe<Scalars['String']>;
  sampleGroupName_ends_with: Maybe<Scalars['String']>;
  sampleGroupName_not_ends_with: Maybe<Scalars['String']>;
  sampleData: Maybe<_SampleDatumFilter>;
  sampleData_not: Maybe<_SampleDatumFilter>;
  sampleData_in: Maybe<Array<_SampleDatumFilter>>;
  sampleData_not_in: Maybe<Array<_SampleDatumFilter>>;
  sampleData_some: Maybe<_SampleDatumFilter>;
  sampleData_none: Maybe<_SampleDatumFilter>;
  sampleData_single: Maybe<_SampleDatumFilter>;
  sampleData_every: Maybe<_SampleDatumFilter>;
  samples: Maybe<_SampleFilter>;
  samples_not: Maybe<_SampleFilter>;
  samples_in: Maybe<Array<_SampleFilter>>;
  samples_not_in: Maybe<Array<_SampleFilter>>;
  samples_some: Maybe<_SampleFilter>;
  samples_none: Maybe<_SampleFilter>;
  samples_single: Maybe<_SampleFilter>;
  samples_every: Maybe<_SampleFilter>;
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
  AND: Maybe<Array<_StudyFilter>>;
  OR: Maybe<Array<_StudyFilter>>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
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
  AND: Maybe<Array<_SubjectFilter>>;
  OR: Maybe<Array<_SubjectFilter>>;
  subjectId: Maybe<Scalars['String']>;
  subjectId_not: Maybe<Scalars['String']>;
  subjectId_in: Maybe<Array<Scalars['String']>>;
  subjectId_not_in: Maybe<Array<Scalars['String']>>;
  subjectId_regexp: Maybe<Scalars['String']>;
  subjectId_contains: Maybe<Scalars['String']>;
  subjectId_not_contains: Maybe<Scalars['String']>;
  subjectId_starts_with: Maybe<Scalars['String']>;
  subjectId_not_starts_with: Maybe<Scalars['String']>;
  subjectId_ends_with: Maybe<Scalars['String']>;
  subjectId_not_ends_with: Maybe<Scalars['String']>;
  sample: Maybe<_SampleFilter>;
  sample_not: Maybe<_SampleFilter>;
  sample_in: Maybe<Array<_SampleFilter>>;
  sample_not_in: Maybe<Array<_SampleFilter>>;
  sample_some: Maybe<_SampleFilter>;
  sample_none: Maybe<_SampleFilter>;
  sample_single: Maybe<_SampleFilter>;
  sample_every: Maybe<_SampleFilter>;
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
  AND: Maybe<Array<_TimepointFilter>>;
  OR: Maybe<Array<_TimepointFilter>>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Scalars['String']>>;
  name_not_in: Maybe<Array<Scalars['String']>>;
  name_regexp: Maybe<Scalars['String']>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  name_starts_with: Maybe<Scalars['String']>;
  name_not_starts_with: Maybe<Scalars['String']>;
  name_ends_with: Maybe<Scalars['String']>;
  name_not_ends_with: Maybe<Scalars['String']>;
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
  AND: Maybe<Array<_UploadedFileFilter>>;
  OR: Maybe<Array<_UploadedFileFilter>>;
  filename: Maybe<Scalars['String']>;
  filename_not: Maybe<Scalars['String']>;
  filename_in: Maybe<Array<Scalars['String']>>;
  filename_not_in: Maybe<Array<Scalars['String']>>;
  filename_regexp: Maybe<Scalars['String']>;
  filename_contains: Maybe<Scalars['String']>;
  filename_not_contains: Maybe<Scalars['String']>;
  filename_starts_with: Maybe<Scalars['String']>;
  filename_not_starts_with: Maybe<Scalars['String']>;
  filename_ends_with: Maybe<Scalars['String']>;
  filename_not_ends_with: Maybe<Scalars['String']>;
  bucketName: Maybe<Scalars['ID']>;
  bucketName_not: Maybe<Scalars['ID']>;
  bucketName_in: Maybe<Array<Scalars['ID']>>;
  bucketName_not_in: Maybe<Array<Scalars['ID']>>;
  bucketName_regexp: Maybe<Scalars['ID']>;
  bucketName_contains: Maybe<Scalars['ID']>;
  bucketName_not_contains: Maybe<Scalars['ID']>;
  bucketName_starts_with: Maybe<Scalars['ID']>;
  bucketName_not_starts_with: Maybe<Scalars['ID']>;
  bucketName_ends_with: Maybe<Scalars['ID']>;
  bucketName_not_ends_with: Maybe<Scalars['ID']>;
  objectName: Maybe<Scalars['ID']>;
  objectName_not: Maybe<Scalars['ID']>;
  objectName_in: Maybe<Array<Scalars['ID']>>;
  objectName_not_in: Maybe<Array<Scalars['ID']>>;
  objectName_regexp: Maybe<Scalars['ID']>;
  objectName_contains: Maybe<Scalars['ID']>;
  objectName_not_contains: Maybe<Scalars['ID']>;
  objectName_starts_with: Maybe<Scalars['ID']>;
  objectName_not_starts_with: Maybe<Scalars['ID']>;
  objectName_ends_with: Maybe<Scalars['ID']>;
  objectName_not_ends_with: Maybe<Scalars['ID']>;
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

export type LoadDataMutationVariables = Exact<{ [key: string]: never; }>;


export type LoadDataMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'load' | 'load2'>
);

export type DeleteDataMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteDataMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'delete'>
);

export type ListMinioBasicQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMinioBasicQuery = (
  { __typename?: 'Query' }
  & { listBasicMinio: Maybe<(
    { __typename?: 'Basic' }
    & { studies: Array<(
      { __typename?: 'Study' }
      & Pick<Study, 'name'>
      & { timepoints: Array<(
        { __typename?: 'Timepoint' }
        & Pick<Timepoint, 'name'>
        & { categories: Array<(
          { __typename?: 'Category' }
          & Pick<Category, 'name'>
          & { datafiles: Array<(
            { __typename?: 'DataFile' }
            & Pick<DataFile, 'name' | 'etag' | 'presignedUrl'>
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type MinioUploadMutationVariables = Exact<{
  bucketName: Scalars['String'];
  objectName: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type MinioUploadMutation = (
  { __typename?: 'Mutation' }
  & { minioUpload: Maybe<(
    { __typename?: 'File' }
    & Pick<File, 'filename'>
  )> }
);

export type MinioDeleteMutationVariables = Exact<{
  bucketName: Scalars['String'];
  objectName: Scalars['String'];
}>;


export type MinioDeleteMutation = (
  { __typename?: 'Mutation' }
  & { minioDelete: Maybe<(
    { __typename?: 'File' }
    & Pick<File, 'filename'>
  )> }
);

export type SampleDataQueryVariables = Exact<{
  first: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
}>;


export type SampleDataQuery = (
  { __typename?: 'Query' }
  & { Subject: Maybe<Array<Maybe<(
    { __typename?: 'Subject' }
    & Pick<Subject, 'subjectId'>
    & { sample: Array<(
      { __typename?: 'Sample' }
      & Pick<Sample, 'sampleValue'>
      & { sampleGroup: Maybe<(
        { __typename?: 'SampleGroup' }
        & Pick<SampleGroup, 'sampleGroupName'>
      )>, sampleDatum: (
        { __typename?: 'SampleDatum' }
        & Pick<SampleDatum, 'sampleDatumName'>
      ) }
    )> }
  )>>> }
);

export type SubjectCountQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SubjectCountQueryQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'subjectCount'>
);

export type SampleGroupQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SampleGroupQueryQuery = (
  { __typename?: 'Query' }
  & { SampleGroup: Maybe<Array<Maybe<(
    { __typename?: 'SampleGroup' }
    & Pick<SampleGroup, 'sampleGroupName'>
    & { sampleData: Array<(
      { __typename?: 'SampleDatum' }
      & Pick<SampleDatum, 'sampleDatumName'>
    )> }
  )>>> }
);

export type CheckInKeycloakMutationVariables = Exact<{ [key: string]: never; }>;


export type CheckInKeycloakMutation = (
  { __typename?: 'Mutation' }
  & { me: Maybe<(
    { __typename?: 'KeycloakUser' }
    & Pick<KeycloakUser, 'keycloakUserID' | 'name' | 'email' | 'userID'>
  )> }
);


export const LoadDataDocument = gql`
    mutation loadData {
  load
  load2
}
    `;
export type LoadDataMutationFn = Apollo.MutationFunction<LoadDataMutation, LoadDataMutationVariables>;

/**
 * __useLoadDataMutation__
 *
 * To run a mutation, you first call `useLoadDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoadDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loadDataMutation, { data, loading, error }] = useLoadDataMutation({
 *   variables: {
 *   },
 * });
 */
export function useLoadDataMutation(baseOptions?: Apollo.MutationHookOptions<LoadDataMutation, LoadDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoadDataMutation, LoadDataMutationVariables>(LoadDataDocument, options);
      }
export type LoadDataMutationHookResult = ReturnType<typeof useLoadDataMutation>;
export type LoadDataMutationResult = Apollo.MutationResult<LoadDataMutation>;
export type LoadDataMutationOptions = Apollo.BaseMutationOptions<LoadDataMutation, LoadDataMutationVariables>;
export const DeleteDataMutationDocument = gql`
    mutation deleteDataMutation {
  delete
}
    `;
export type DeleteDataMutationMutationFn = Apollo.MutationFunction<DeleteDataMutationMutation, DeleteDataMutationMutationVariables>;

/**
 * __useDeleteDataMutationMutation__
 *
 * To run a mutation, you first call `useDeleteDataMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDataMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDataMutationMutation, { data, loading, error }] = useDeleteDataMutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteDataMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDataMutationMutation, DeleteDataMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDataMutationMutation, DeleteDataMutationMutationVariables>(DeleteDataMutationDocument, options);
      }
export type DeleteDataMutationMutationHookResult = ReturnType<typeof useDeleteDataMutationMutation>;
export type DeleteDataMutationMutationResult = Apollo.MutationResult<DeleteDataMutationMutation>;
export type DeleteDataMutationMutationOptions = Apollo.BaseMutationOptions<DeleteDataMutationMutation, DeleteDataMutationMutationVariables>;
export const ListMinioBasicDocument = gql`
    query listMinioBasic {
  listBasicMinio {
    studies {
      name
      timepoints {
        name
        categories {
          name
          datafiles {
            name
            etag
            presignedUrl
          }
        }
      }
    }
  }
}
    `;

/**
 * __useListMinioBasicQuery__
 *
 * To run a query within a React component, call `useListMinioBasicQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMinioBasicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMinioBasicQuery({
 *   variables: {
 *   },
 * });
 */
export function useListMinioBasicQuery(baseOptions?: Apollo.QueryHookOptions<ListMinioBasicQuery, ListMinioBasicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMinioBasicQuery, ListMinioBasicQueryVariables>(ListMinioBasicDocument, options);
      }
export function useListMinioBasicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMinioBasicQuery, ListMinioBasicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMinioBasicQuery, ListMinioBasicQueryVariables>(ListMinioBasicDocument, options);
        }
export type ListMinioBasicQueryHookResult = ReturnType<typeof useListMinioBasicQuery>;
export type ListMinioBasicLazyQueryHookResult = ReturnType<typeof useListMinioBasicLazyQuery>;
export type ListMinioBasicQueryResult = Apollo.QueryResult<ListMinioBasicQuery, ListMinioBasicQueryVariables>;
export const MinioUploadDocument = gql`
    mutation minioUpload($bucketName: String!, $objectName: String!, $file: Upload!) {
  minioUpload(bucketName: $bucketName, objectName: $objectName, file: $file) {
    filename
  }
}
    `;
export type MinioUploadMutationFn = Apollo.MutationFunction<MinioUploadMutation, MinioUploadMutationVariables>;

/**
 * __useMinioUploadMutation__
 *
 * To run a mutation, you first call `useMinioUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMinioUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [minioUploadMutation, { data, loading, error }] = useMinioUploadMutation({
 *   variables: {
 *      bucketName: // value for 'bucketName'
 *      objectName: // value for 'objectName'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useMinioUploadMutation(baseOptions?: Apollo.MutationHookOptions<MinioUploadMutation, MinioUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MinioUploadMutation, MinioUploadMutationVariables>(MinioUploadDocument, options);
      }
export type MinioUploadMutationHookResult = ReturnType<typeof useMinioUploadMutation>;
export type MinioUploadMutationResult = Apollo.MutationResult<MinioUploadMutation>;
export type MinioUploadMutationOptions = Apollo.BaseMutationOptions<MinioUploadMutation, MinioUploadMutationVariables>;
export const MinioDeleteDocument = gql`
    mutation minioDelete($bucketName: String!, $objectName: String!) {
  minioDelete(bucketName: $bucketName, objectName: $objectName) {
    filename
  }
}
    `;
export type MinioDeleteMutationFn = Apollo.MutationFunction<MinioDeleteMutation, MinioDeleteMutationVariables>;

/**
 * __useMinioDeleteMutation__
 *
 * To run a mutation, you first call `useMinioDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMinioDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [minioDeleteMutation, { data, loading, error }] = useMinioDeleteMutation({
 *   variables: {
 *      bucketName: // value for 'bucketName'
 *      objectName: // value for 'objectName'
 *   },
 * });
 */
export function useMinioDeleteMutation(baseOptions?: Apollo.MutationHookOptions<MinioDeleteMutation, MinioDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MinioDeleteMutation, MinioDeleteMutationVariables>(MinioDeleteDocument, options);
      }
export type MinioDeleteMutationHookResult = ReturnType<typeof useMinioDeleteMutation>;
export type MinioDeleteMutationResult = Apollo.MutationResult<MinioDeleteMutation>;
export type MinioDeleteMutationOptions = Apollo.BaseMutationOptions<MinioDeleteMutation, MinioDeleteMutationVariables>;
export const SampleDataDocument = gql`
    query sampleData($first: Int, $offset: Int) {
  Subject(first: $first, offset: $offset) {
    subjectId
    sample {
      sampleGroup {
        sampleGroupName
      }
      sampleDatum {
        sampleDatumName
      }
      sampleValue
    }
  }
}
    `;

/**
 * __useSampleDataQuery__
 *
 * To run a query within a React component, call `useSampleDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useSampleDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSampleDataQuery({
 *   variables: {
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSampleDataQuery(baseOptions?: Apollo.QueryHookOptions<SampleDataQuery, SampleDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SampleDataQuery, SampleDataQueryVariables>(SampleDataDocument, options);
      }
export function useSampleDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SampleDataQuery, SampleDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SampleDataQuery, SampleDataQueryVariables>(SampleDataDocument, options);
        }
export type SampleDataQueryHookResult = ReturnType<typeof useSampleDataQuery>;
export type SampleDataLazyQueryHookResult = ReturnType<typeof useSampleDataLazyQuery>;
export type SampleDataQueryResult = Apollo.QueryResult<SampleDataQuery, SampleDataQueryVariables>;
export const SubjectCountQueryDocument = gql`
    query subjectCountQuery {
  subjectCount
}
    `;

/**
 * __useSubjectCountQueryQuery__
 *
 * To run a query within a React component, call `useSubjectCountQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubjectCountQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubjectCountQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubjectCountQueryQuery(baseOptions?: Apollo.QueryHookOptions<SubjectCountQueryQuery, SubjectCountQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SubjectCountQueryQuery, SubjectCountQueryQueryVariables>(SubjectCountQueryDocument, options);
      }
export function useSubjectCountQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SubjectCountQueryQuery, SubjectCountQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SubjectCountQueryQuery, SubjectCountQueryQueryVariables>(SubjectCountQueryDocument, options);
        }
export type SubjectCountQueryQueryHookResult = ReturnType<typeof useSubjectCountQueryQuery>;
export type SubjectCountQueryLazyQueryHookResult = ReturnType<typeof useSubjectCountQueryLazyQuery>;
export type SubjectCountQueryQueryResult = Apollo.QueryResult<SubjectCountQueryQuery, SubjectCountQueryQueryVariables>;
export const SampleGroupQueryDocument = gql`
    query sampleGroupQuery {
  SampleGroup {
    sampleGroupName
    sampleData {
      sampleDatumName
    }
  }
}
    `;

/**
 * __useSampleGroupQueryQuery__
 *
 * To run a query within a React component, call `useSampleGroupQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSampleGroupQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSampleGroupQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSampleGroupQueryQuery(baseOptions?: Apollo.QueryHookOptions<SampleGroupQueryQuery, SampleGroupQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SampleGroupQueryQuery, SampleGroupQueryQueryVariables>(SampleGroupQueryDocument, options);
      }
export function useSampleGroupQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SampleGroupQueryQuery, SampleGroupQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SampleGroupQueryQuery, SampleGroupQueryQueryVariables>(SampleGroupQueryDocument, options);
        }
export type SampleGroupQueryQueryHookResult = ReturnType<typeof useSampleGroupQueryQuery>;
export type SampleGroupQueryLazyQueryHookResult = ReturnType<typeof useSampleGroupQueryLazyQuery>;
export type SampleGroupQueryQueryResult = Apollo.QueryResult<SampleGroupQueryQuery, SampleGroupQueryQueryVariables>;
export const CheckInKeycloakDocument = gql`
    mutation CheckInKeycloak {
  me {
    keycloakUserID
    name
    email
    userID
  }
}
    `;
export type CheckInKeycloakMutationFn = Apollo.MutationFunction<CheckInKeycloakMutation, CheckInKeycloakMutationVariables>;

/**
 * __useCheckInKeycloakMutation__
 *
 * To run a mutation, you first call `useCheckInKeycloakMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckInKeycloakMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkInKeycloakMutation, { data, loading, error }] = useCheckInKeycloakMutation({
 *   variables: {
 *   },
 * });
 */
export function useCheckInKeycloakMutation(baseOptions?: Apollo.MutationHookOptions<CheckInKeycloakMutation, CheckInKeycloakMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckInKeycloakMutation, CheckInKeycloakMutationVariables>(CheckInKeycloakDocument, options);
      }
export type CheckInKeycloakMutationHookResult = ReturnType<typeof useCheckInKeycloakMutation>;
export type CheckInKeycloakMutationResult = Apollo.MutationResult<CheckInKeycloakMutation>;
export type CheckInKeycloakMutationOptions = Apollo.BaseMutationOptions<CheckInKeycloakMutation, CheckInKeycloakMutationVariables>;