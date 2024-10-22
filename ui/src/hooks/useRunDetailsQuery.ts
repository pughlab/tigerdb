import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'

export default function useRunDetailsQuery({ runID }: { runID: string }) {
	const [run, setRun] = useState()

	const { data, loading, error, refetch } = useQuery(gql`
	query RunDetails($runID: ID!) {
		getRuns(runID: $runID) {
			wesID
			name
			status
			description
			createdOn
			createdBy {
				keycloakUserID
				email
				name
			}
			# datasets {
			# 	datasetID
			# 	name
			# }
			processedDatasets {
				objectName
				bucketName
				filename
			}
			runParameters {
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
	`, {
		variables: { runID },
		fetchPolicy: 'network-only'
	})
	useEffect(() => {
		if (!!data?.getRuns && data.getRuns.length > 0) {
			setRun(data.getRuns[0])
		}
	}, [data])
	return { run, loading, error, refetch }
}
