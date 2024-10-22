import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

export default function useProcessedDatasetsQuery({ datasetIDs }: { datasetIDs: string[] }) {
  const [searchText, setSearchText] = useState('')
  const { data, loading, error, refetch } = useQuery(
    gql`
      query processedDatasets($datasetIDs: [ID!], $searchText: String!) {
        processedDatasets(
          where: {
            filename_CONTAINS: $searchText
            minioUpload: {
              dataset: {
                datasetID_IN: $datasetIDs
              }
            }
          }
        ) {
          objectName
          bucketName
          filename
          minioUpload {
            dataset {
              datasetID
              name
            }
          }
        }
      }
    `,
    {
      variables: { datasetIDs, searchText },
      fetchPolicy: 'network-only',
    }
  )
  return { data, loading, error, refetch, searchText, setSearchText }
}



// import { gql, useMutation, useQuery } from '@apollo/client'
// import { useCallback, useState } from 'react'

// export default function useProcessedDatasetsQuery({ datasetIDs }: { datasetIDs: string[]}) {
//   const [searchText, setSearchText] = useState('')
//   const { data, loading, error, refetch } = useQuery(gql`
//   query ProcessedDatasets($datasetIDs: [ID!], $searchText: String!) {
//     processedDatasets (
//       # where: {OR :[{name_CONTAINS: $searchText}, {description_CONTAINS: $searchText}]}
//       where: {
//         AND: [
//           {filename_CONTAINS: $searchText}
//           { dataset: { datasetID_IN: $datasetIDs } }
//         ]

//         }
//     ) {
//       objectName
//       bucketName
//       filename
//     }
//   }`, { variables: { datasetIDs, searchText }, fetchPolicy: 'network-only' })
//   return { data, loading, error, refetch, searchText, setSearchText }
// }