import { gql, useMutation, MutationResult } from "@apollo/client";
import { useReducer, useCallback, useState } from "react"

export default function useCreateCuratedAnnotationFromDatasetMutation(): [
    // (options?: { variables: { datasetID: String; bucketName: String; objectName: String } }) => void,
    // MutationResult<any>,
    any,
    any,
    boolean
] {
    const [success, setSuccess] = useState(false)
    const [createCuratedAnnotationFromDataset, mutationState] = useMutation(gql`
        mutation createCuratedAnnotationFromDataset(
            $datasetID: ID!
            $bucketName: ID!
            $objectName: ID!
        ) {
            createCuratedAnnotationFromDataset(
                datasetID: $datasetID
                bucketName: $bucketName
                objectName: $objectName
            ) {
                curatedAnnotationID
            }
        }
    `, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            console.log(data)
            if (!!data) {
                console.log(data)
                setSuccess(!!data?.createCuratedAnnotationFromDataset)
            }
        }
    })
    const {data, loading, error} = mutationState
    

    return [createCuratedAnnotationFromDataset, mutationState, success]
    
}
  
  