import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

export default function useDatasetsQuery({ projectIDs, searchText }: { projectIDs: string[], searchText?: string }) {
  const { data, loading, error, refetch } = useQuery(gql`
  query Datasets($projectIDs: [ID!], $searchText: String) {
    datasets (
      # where: {OR :[{name_CONTAINS: $searchText}, {description_CONTAINS: $searchText}]}
      where: {
        AND: [
          {name_CONTAINS: $searchText}
          {project: {projectID_IN: $projectIDs}}
        ]

        }
    ) {
      datasetID
      name
      project {
        projectID
        name
        isPublic
        isReference
      }
      tags {
        tagID
        name
        category
      }
    }
  }`, { variables: { projectIDs, searchText }, fetchPolicy: 'network-only' })
  return { data, loading, error, refetch }
}