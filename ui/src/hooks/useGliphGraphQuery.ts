import { gql, useQuery } from '@apollo/client'

export const GET_GLIPH_GRAPH = gql`
  query GetGliphGraph($runID: ID!) {
    gliphGraph(runID: $runID) {
      nodes {
        id
        group
        size
        label
        value
        color
      }
      links {
        source
        target
        weight
      }
    }
  }
`

export default function useGliphGraphQuery({ runID }: { runID: string }) {
  const { data, loading, error, refetch } = useQuery(GET_GLIPH_GRAPH, {
    variables: { runID },
    skip: !runID
  })

  return { data: data?.gliphGraph, loading, error, refetch }
}
