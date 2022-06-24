import { gql, useMutation, useQuery } from "@apollo/client";
import { useReducer, useCallback, useState, useEffect } from "react"
import { useAppDispatch } from "../state/hooks";
import { setKeycloakMe } from "../state/appContext";
import { ApolloError } from "apollo-server";

export default function useRawDatasetDetailsQuery(rawDatasetID): [any, boolean, any] {
    const [rawDataset, setRawDataset] = useState()
    const {loading, data, error} = useQuery(gql`
        query test ($rawDatasetID:ID) {
            rawDatasets (where: {rawDatasetID: $rawDatasetID}) {
                name
                description
                rawDataFile {
                    filename
                    bucketName
                    objectName
                    presignedURL
                }
                codebookFile {
                    filename
                    bucketName
                    objectName
                    presignedURL
                }
            }
        }
    `, {
        variables: {rawDatasetID},
    })
    useEffect(() => {
        if (!!data?.rawDatasets && data.rawDatasets.length > 0) {
            setRawDataset(data.rawDatasets[0])
        }
    }, [data])
    console.log(rawDataset)
    return [rawDataset, loading, error]
}
  