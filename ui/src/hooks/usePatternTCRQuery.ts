import { gql, useLazyQuery } from '@apollo/client'

export default function usePatternTCRQuery() {
  const [getPatternTCRs, { data, loading, error }] = useLazyQuery(gql`
    query PatternTCRs($runID: ID!, $patternID: ID!) {
      patternTCRs(runID: $runID, patternID: $patternID) {
        nodes {
          id
          size
          value
          color
          label
          group
        }
        links {
          source
          target
        }
      }
    }
  `)

  return { getPatternTCRs, data: data?.patternTCRs, loading, error }
}