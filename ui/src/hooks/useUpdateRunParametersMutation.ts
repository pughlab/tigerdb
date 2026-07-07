import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export default function useUpdateRunParametersMutation({ runID, initialParameters } : { runID: string, initialParameters?: any }) {
  const [parameters, setParameters] = useState(initialParameters || {
    outPrefix: '',
    localMinpValue: 0.0,
    pDepth: 0,
    globalConvergenceCutoff: 0,
    simulationDepth: 0,
    kmerMinDepth: 0,
    localMinOVE: 0,
    allAAInterchangeable: 1,
  })

  // Debounce the parameters state
  const [debouncedParameters] = useDebounce(parameters, 500) // Adjust the debounce time as needed (e.g., 500ms)

  const [updatedRun, setUpdatedRun] = useState()

  const [updateRunParametersMutation, { data, loading, error }] = useMutation(gql`
    mutation updateRunParameters($where: RunParametersWhere, $update: RunParametersUpdateInput) {
      updateRunParameters(
        where: $where,
        update: $update
      ) {
        runParameters {
          runID
          outPrefix
          localMinpValue
          pDepth
          globalConvergenceCutoff
          simulationDepth
          kmerMinDepth
          localMinOVE
          allAAInterchangeable
        }
      }
    }
  `)

  // Fetch existing parameters from the server if initialParameters is not provided
  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(gql`
    query getRunParameters($runID: ID!) {
      runParameters(where: { runID: $runID }) {
        outPrefix
        localMinpValue
        pDepth
        globalConvergenceCutoff
        simulationDepth
        kmerMinDepth
        localMinOVE
        allAAInterchangeable
      }
    }
  `, {
    variables: { runID },
    skip: !!initialParameters, // Skip the query if initialParameters are provided
    fetchPolicy: 'network-only',
  })

  // Set parameters from fetched data when query completes
  useEffect(() => {
    if (queryData && queryData.runParameters && queryData.runParameters.length > 0) {
      setParameters(queryData.runParameters[0])
    }
  }, [queryData])

  // Trigger the mutation when debouncedParameters change
  useEffect(() => {
    if (debouncedParameters && runID) {
      updateRunParametersMutation({
        variables: {
          where: { runID },
          update: debouncedParameters,
        },
      })
    }
  }, [debouncedParameters, runID])

  useEffect(() => {
    if (data && data.updateRunParameters && data.updateRunParameters.runParameters.length > 0) {
      setUpdatedRun(data.updateRunParameters.runParameters[0])
    }
  }, [data])

  return {
    parameters,
    setParameters,
    updatedRun,
    loading: loading || queryLoading,
    error: error || queryError,
  }
}


// // hooks/useUpdateRunParametersMutation.js
// import { gql, useMutation, useQuery } from '@apollo/client';
// import { useEffect, useState } from 'react';
// import { useDebounce } from 'use-debounce';

// export default function useUpdateRunParametersMutation({ runID } : { runID: string }) {
//   // State to hold run parameters
//   const [parameters, setParameters] = useState(null);
  
//   // Debounce the parameters state to prevent excessive mutations
//   const [debouncedParameters] = useDebounce(parameters, 500); // 500ms debounce

//   // State to hold the updated run after mutation
//   const [updatedRun, setUpdatedRun] = useState(null);

//   // GraphQL mutation to update run parameters
//   const [updateRunParametersMutation, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(gql`
//     mutation updateRunParameters($where: RunParametersWhere, $update: RunParametersUpdateInput) {
//       updateRunParameters(
//         where: $where,
//         update: $update
//       ) {
//         runParameters {
//           runID
//           outPrefix
//           localMinpValue
//           pDepth
//           globalConvergenceCutoff
//           simulationDepth
//           kmerMinDepth
//           localMinOVE
//           allAAInterchangeable
//         }
//       }
//     }
//   `);

//   // GraphQL query to fetch existing run parameters
//   const { data: queryData, loading: queryLoading, error: queryError } = useQuery(gql`
//     query getRunParameters($runID: ID!) {
//       runParameters(where: { runID: $runID }) {
//         outPrefix
//         localMinpValue
//         pDepth
//         globalConvergenceCutoff
//         simulationDepth
//         kmerMinDepth
//         localMinOVE
//         allAAInterchangeable
//       }
//     }
//   `, {
//     variables: { runID },
//     fetchPolicy: 'network-only', // Ensure fresh data
//   });

//   // **Embedded Utility Function to Remove __typename Deeply**
//   const removeTypenameDeep : any = (obj : any) => {
//     if (Array.isArray(obj)) {
//       return obj.map(removeTypenameDeep);
//     } else if (obj !== null && typeof obj === 'object') {
//       const { __typename, ...rest } = obj;
//       return Object.fromEntries(
//         Object.entries(rest).map(([key, value]) => [key, removeTypenameDeep(value)])
//       );
//     }
//     return obj;
//   };

//   // Set parameters from fetched data when query completes
//   useEffect(() => {
//     if (queryData && queryData.runParameters) {
//       // Deep remove __typename if present
//       const cleanParameters = removeTypenameDeep(queryData.runParameters);
//       setParameters(cleanParameters);
//       console.log('Initial Parameters Set:', cleanParameters);
//     }
//   }, [queryData]);

//   // Trigger the mutation when debouncedParameters change
//   useEffect(() => {
//     if (debouncedParameters && runID) {
//       // Remove __typename from parameters before mutation
//       const updateFields = removeTypenameDeep(debouncedParameters);

//       // **Debugging: Log the mutation input**
//       console.log('Mutation Input (updateFields):', updateFields);

//       // Execute the mutation
//       updateRunParametersMutation({
//         variables: {
//           where: { runID },
//           update: updateFields,
//         },
//       });
//     }
//   }, [debouncedParameters, runID, updateRunParametersMutation]);

//   // Update the local state with the result of the mutation
//   useEffect(() => {
//     if (mutationData && mutationData.updateRunParameters && mutationData.updateRunParameters.runParameters) {
//       setUpdatedRun(mutationData.updateRunParameters.runParameters);
//       console.log('Updated Run:', mutationData.updateRunParameters.runParameters);
//     }
//   }, [mutationData]);

//   return {
//     parameters,
//     setParameters,
//     updatedRun,
//     loading: mutationLoading || queryLoading,
//     error: mutationError || queryError,
//   };
// }
