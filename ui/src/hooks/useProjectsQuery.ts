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
					minioUpload {
						objectName
						filename
						processedDataset {
							objectName
							filename
							minioUpload {
								dataset {
									datasetID
									name
								}
							}
						}
					}
				}
				createdBy {
					keycloakUserID
					email
					name
				}
				createdOn
				isPublic
				isReference
			}
		}
	`, {fetchPolicy: 'network-only'})
	return { data, loading, error, refetch }
}