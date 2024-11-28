import { gql, useLazyQuery } from '@apollo/client'
import { useCallback, useState } from 'react'

export default function useAnnotationAndDatasetVariablesQuery(dropdownFilters: any) {
  const [searchText, setSearchText] = useState('')

  const constructWhereClause = (filters: any, allowedKeys: string[] = []) => {
    let where = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value) && value.some(item => item !== null)) {
        // Filter out null values from the array
        const filteredValues = value.filter(item => item !== null);
        if (filteredValues.length > 0 && (allowedKeys.length === 0 || allowedKeys.includes(key))) {
          where = { ...where, [`${key}_IN`]: filteredValues };
        }
      }
    });
    return where;
  };

  // Construct where clauses
  const annotationWhere = constructWhereClause(dropdownFilters); // All filters for annotations
  const datasetWhere = constructWhereClause(dropdownFilters, ['cdr3b', 'trbv', 'trbj']); // Only specific fields for datasets

  // const where = constructWhereClause(dropdownFilters);

  const [runQuery, { loading, data, error, called }] = useLazyQuery(gql`
    query AnnotationAndDatasetVariables($annotationWhere: AnnotationVariableWhere, $datasetWhere: DatasetVariableWhere) {
      curatedAnnotations {
        dataset {
          datasetID
          name
          project {
            projectID
            name
          }
        }
        curatedAnnotationID
        annotationVariables(where: $annotationWhere) {
          annotationVariableID
          cdr3b
          cdr3a
          trbv
          trbj
          trav
          traj
          mhc
          mhcClass
          epitopeGene
          epitopeAAseq
          epitopeSpecies
          mutation
          recognizesWTEpitope
          reference
          uniProt
          notes
        }
      }
      curatedDatasets {
        dataset {
          datasetID
          name
          project {
            projectID
            name
          }
        }
        curatedDatasetID
        datasetVariables(where: $datasetWhere) {
          datasetVariableID
          cdr3b
          trbv
          trbj
          # cdr3a
          # subjectcondition
          # count
        }
        # datasetVariablesAggregate(where: $datasetWhere) {
        #   count
        # }
      }
    }
  `, {
    variables: { annotationWhere, datasetWhere },
    fetchPolicy: 'cache-first'
  })

  return { data, loading, error, called, searchText, setSearchText, runQuery,
    // totalDatasetVariables: data?.curatedDatasets?.datasetVariablesAggregate?.count || 0

   }
}