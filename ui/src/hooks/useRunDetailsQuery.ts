import { gql, useQuery } from '@apollo/client'

export default function useRunDetailsQuery({ runID }: { runID: string }) {
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
			isOwner
			sharedWith {
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
				presignedURL
			}
			referenceDatasetsAggregate{
				count
			}
			gliphTCRsAggregate {
				count
			}
			referenceDatasets {
				dataset {
					tags {
						tagID
						name
						category
					}
				}
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
			presignedURL
		}
	}
	`, {
		variables: { runID },
		fetchPolicy: 'network-only'
	})
	return { run: data?.getRuns[0], loading, error, refetch }
}
