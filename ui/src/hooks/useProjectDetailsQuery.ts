import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'

export default function useProjectDetailsQuery({ projectID }: { projectID: string }) {
	const [project, setProject] = useState()
	const { data, loading, error } = useQuery(gql`
		query ProjectDetails ($projectID: ID!) {
			getProjects(projectID: $projectID) {
				projectID
				name
				description
				# sharedWith
				createdOn
				createdBy {
					keycloakUserID
					email
					name
				}
			}
		}
	`, {
		variables: { projectID },
		fetchPolicy: 'network-only'
	})
	useEffect(() => {
		if (!!data?.getProjects && data.getProjects.length > 0) {
			setProject(data.getProjects[0])
		}
	}, [data])
	return { project, loading, error }
}
