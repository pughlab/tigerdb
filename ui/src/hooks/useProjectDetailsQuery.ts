import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'

export default function useProjectDetailsQuery({ projectID }: { projectID: string }) {
	const [project, setProject] = useState()
	const { data, loading, error } = useQuery(gql`
		query ProjectDetails ($projectID: ID!) {
			projects(where: {projectID: $projectID}) {
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
		if (!!data?.projects && data.projects.length > 0) {
			setProject(data.projects[0])
		}
	}, [data])
	return { project, loading, error }
}
