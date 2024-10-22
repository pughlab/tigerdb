import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'

export default function useMinioUploadsQuery({ datasetIDs }: { datasetIDs: string[]}) {
  const [searchText, setSearchText] = useState('')
  const { data, loading, error, refetch } = useQuery(gql`
  query MinioUploads($datasetIDs: [ID!], $searchText: String!) {
    minioUploads (
      # where: {OR :[{name_CONTAINS: $searchText}, {description_CONTAINS: $searchText}]}
      where: {
        AND: [
          {filename_CONTAINS: $searchText}
          { dataset: { datasetID_IN: $datasetIDs } }
        ]

        }
    ) {
      objectName
      bucketName
      filename
    }
  }`, { variables: { datasetIDs, searchText }, fetchPolicy: 'network-only' })
  return { data, loading, error, refetch, searchText, setSearchText }
}