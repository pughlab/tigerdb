import { gql, useMutation, MutationResult } from "@apollo/client";
import { useReducer, useCallback, useState } from "react"
import {grapheneClient} from '../grapheneClient'


export default function useSubmitRunMutation(): [
    // (options?: { variables: { datasetID: String; bucketName: String; objectName: String } }) => void,
    // MutationResult<any>,
    any,
    any,
    boolean
] {
    const [submitted, setSubmitted] = useState(false)
    const [submitRun, mutationState] = useMutation(gql`
        mutation submitRun(
            $runID: ID!
        ) {
            submitRun(
                runID: $runID
            ) {
                run {
                    runID
                }
            }
        }
    `, {
        client: grapheneClient,
        fetchPolicy: 'network-only',
        onCompleted: ({run}) => {
            if (!!run) {
                console.log(run)
                setSubmitted(!!run?.wesID)
                // refetch()
            }
        }
    })
    const {data, loading, error} = mutationState
    

    return [submitRun, mutationState, submitted]
    
}
  
  