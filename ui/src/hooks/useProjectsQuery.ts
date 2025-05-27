import { gql,  useQuery } from '@apollo/client'

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
					tags {
						tagID
						name
						category
					}
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