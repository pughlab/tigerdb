import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'

export default function useProjectsQuery() {
	const { data, loading, error, refetch } = useQuery(gql`
		query {
			getProjects {
				projectID
				name
				description
				datasets {
					datasetID
					name
				}
				createdBy {
					keycloakUserID
					email
					name
				}
				createdOn
				isPublic				
			}
		}
	`, {fetchPolicy: 'network-only'})
	return { data, loading, error, refetch }
}