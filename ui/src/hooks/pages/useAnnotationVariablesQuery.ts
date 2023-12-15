// import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client'
// import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'



// export default function useDataVariablesQuery({ }) {

//   const [loadQuery, { data, loading, error, called }] = useLazyQuery(gql`
//         query DataVariables($curatedDatasetIDs: [ID!]!, $dataVariableWhere: DataVariableWhere) {
//             curatedDatasets(
//                 where: {OR: [{curatedDatasetID_IN: $curatedDatasetIDs}]}, 
//             ) {
//                 curatedDatasetID
//                 name
//                 dataVariables(
//                     where: $dataVariableWhere
//                     # where: {OR: [{chromosome:"chr1",start_GTE:10000,end_LTE: 50000, datavalue_GTE: 0.1},
//                     # {chromosome:"chr2",start_GTE:50000,end_LTE: 500000, datavalue_GTE: 0.2},
//                     # {chromosome:"chr2",start_GTE:500000,end_LTE: 5000000, datavalue_GTE: 0.2},
//                     # {chromosome:"chr3",start_GTE:5000000,end_LTE: 50000000, datavalue_GTE: 0.3}]}
//                     # options:{limit:10000, sort: [{ chromosome: ASC },{ start: ASC }]}
//                     options:{limit:50000}
//                 ) {
//                     dataVariableID
//                     chromosome
//                     start
//                     end
//                     datavalue
//                 }  
//             }
//         }
//   `, { variables: { curatedDatasetIDs, dataVariableWhere }, fetchPolicy: 'network-only' })

//   return {state, dispatch, data, loading, error, called, loadQuery}
// }




import { gql, useMutation, useLazyQuery } from '@apollo/client'
import { useCallback, useState } from 'react'

export default function useAnnotationVariablesQuery(dropdownFilters: any) {
  const [searchText, setSearchText] = useState('')

  const constructWhereClause = (filters: any) => {
    let where = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.some(item => item !== null)) {
        // Filter out null values from the array
        const filteredValues = value.filter(item => item !== null);
        if (filteredValues.length > 0) {
          where = {...where, [`${key}_IN`]: filteredValues}
        }
      }
    });
    console.log(where)
    return where;
  };

  const where = constructWhereClause(dropdownFilters);
  const [runQuery, { loading, data, error, called }]  = useLazyQuery(gql`
  query AnnotationVariables($where: AnnotationVariableWhere) {
    curatedAnnotations {
      curatedAnnotationID
      name
      description
      annotationVariables(where: $where) 
      {
        annotationVariableID
        locus
        cdr3b 
        trbv
        trbj
        mhc
        mhcClass
        epitope
        epitopeGene
        epitopeSpecies
        reference
      }
    }
  }`, { 
    variables: {where: where},
    fetchPolicy: 'network-only' 
  })
  
  return { data, loading, error, called, searchText, setSearchText, runQuery }
}