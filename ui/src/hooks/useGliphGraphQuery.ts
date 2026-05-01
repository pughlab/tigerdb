import { gql, useQuery } from '@apollo/client'

type GliphGraphInput = {
  runID: string,
  minCommunitySize?: number,
  cdr3bContains?: string
}

export const GET_GLIPH_GRAPH = gql`
  query GetGliphGraph($input: GliphGraphInput!) {
    gliphGraph(input: $input) {
      nodes {
        id
        group
        size
        label
        value
        color
        source
      }
      links {
        source
        target
        weight
      }
    }
  }
`

export default function useGliphGraphQuery({ input }: {input: GliphGraphInput}) {
  const { runID } = input
  const { data, loading, error, refetch } = useQuery(GET_GLIPH_GRAPH, {
    variables: { input },
    skip: !runID
  })

  return { data: data?.gliphGraph, loading, error, refetch }
}
