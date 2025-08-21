import { gql, useQuery } from '@apollo/client'

export default function useProjectDetailsQuery({ projectID }: { projectID: string }) {
	const { data, loading, error, refetch } = useQuery(gql`
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
				isPublic
			}
		}
	`, {
		variables: { projectID },
		fetchPolicy: 'network-only'
	})
	return { data, loading, error, refetch, project: data?.getProjects[0] ?? {} }
}
