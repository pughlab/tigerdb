import { gql, useMutation, MutationResult } from "@apollo/client";
import { useReducer, useCallback, useState } from "react"

export default function useCreateCuratedDatasetFromDatasetMutation(): [
    // (options?: { variables: { datasetID: String; bucketName: String; objectName: String } }) => void,
    // MutationResult<any>,
    any,
    any,
    boolean
] {
    const [success, setSuccess] = useState(false)
    const [createCuratedDatasetFromDataset, mutationState] = useMutation(gql`
        mutation createCuratedDatasetFromDataset(
            $datasetID: ID!
            $bucketName: ID!
            $objectName: ID!
            $selectedDelimiter: String!
        ) {
            createCuratedDatasetFromDataset(
                datasetID: $datasetID
                bucketName: $bucketName
                objectName: $objectName
                selectedDelimiter: $selectedDelimiter
            ) {
                curatedDatasetID
            }
        }
    `, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            console.log(data)
            if (!!data) {
                console.log(data)
                setSuccess(!!data?.createCuratedDatasetFromDataset)
            }
        }
    })
    const {data, loading, error} = mutationState
    

    return [createCuratedDatasetFromDataset, mutationState, success]
    
}
  
  