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
        v_gene
        hla_a
        hla_b
        hla_c
        hla_dpa1
        hla_dpb1
        hla_dqa1
        hla_dqb1
        hla_drb1
        hla_drb3
        hla_drb4
        hla_drb5
      }
      links {
        source
        target
        group
        color
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
