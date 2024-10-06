import { gql, useMutation, useQuery } from '@apollo/client'
import { useCallback, useState } from 'react'

export default function useDatasetsQuery({ projectID }: { projectID: string }) {
  const [searchText, setSearchText] = useState('')
  const { data, loading, error, refetch } = useQuery(gql`
  query Datasets($projectID: ID!, $searchText: String!) {
    datasets (
      # where: {OR :[{name_CONTAINS: $searchText}, {description_CONTAINS: $searchText}]}
      where: {
        AND: [
          {name_CONTAINS: $searchText}
          {project: {projectID: $projectID}}
        ]

        }
    ) {
      datasetID
      name
      project {
        projectID
        name
      }
    }
  }`, { variables: { projectID, searchText }, fetchPolicy: 'network-only' })
  return { data, loading, error, refetch, searchText, setSearchText }
}