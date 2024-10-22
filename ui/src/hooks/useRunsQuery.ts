import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'

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