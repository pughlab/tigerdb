import { gql } from '@apollo/client';


export const loadDataMutation = gql`
  mutation loadData {load load2}
`

export const deleteDataMutation = gql`
  mutation deleteDataMutation {delete}
`

export const listBasicMinio = gql`
query listMinioBasic
  { listBasicMinio { studies { name timepoints { name categories { name datafiles { name etag presignedUrl }}}}}}
`

export const minioUploadQuery = gql`
  mutation minioUpload(
    $bucketName: String!
    $objectName: String!
    $file: Upload!
  ) {
    minioUpload(
      bucketName: $bucketName
      objectName: $objectName
      file: $file
    ) {
      filename
    }
  }
`

export const minioDeleteQuery = gql`
  mutation minioDelete(
    $bucketName: String!
    $objectName: String!
  ) {
    minioDelete(
      bucketName: $bucketName
      objectName: $objectName
    ) {
      filename
    }
  }
`

export const sampleDataQuery = gql`
  query sampleData($first: Int, $offset: Int) 
  { Subject(first: $first, offset: $offset)
    { subjectId 
      sample {
        sampleGroup {
          sampleGroupName} 
      sampleDatum {
        sampleDatumName}
      sampleValue }}}
`

export const subjectCountQuery = gql`
  query subjectCountQuery { subjectCount }
`

export const sampleGroupQuery = gql`
  query sampleGroupQuery { SampleGroup {  sampleGroupName sampleData { sampleDatumName} } }
`

export const meMutationQuery = gql`
  mutation CheckInKeycloak {
    me {
      keycloakUserID
      name
      email
    }
  }
`