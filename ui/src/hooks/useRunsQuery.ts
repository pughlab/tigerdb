import { gql, useQuery } from '@apollo/client'

export default function useRunsQuery() {
	const { data, loading, error, refetch } = useQuery(gql`
		query {
			getRuns {
				runID
				name
				description
				# datasets {
				# 	datasetID
				# 	name
				# }
				processedDatasets {
					objectName
					bucketName
					filename
					minioUpload {
						dataset {
							tags {
								tagID
								name
								category
							}
						}
					}
				}
				referenceDatasetsAggregate{
					count
				}
				createdBy {
					keycloakUserID
					email
					name
				}
				createdOn
				status				
			}
		}
	`, {fetchPolicy: 'network-only'})
	return { data, loading, error, refetch }
}