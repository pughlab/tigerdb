import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useReducer, useState } from 'react'

export default function useCuratedAnnotationsFiltersQuery() {
	const { data, loading, error, refetch } = useQuery(gql`
		query {
			curatedAnnotationFilters {
				filterKey
				placeholder
				text
			}
		}
	`, {fetchPolicy: 'network-only'})
	return { data, loading, error, refetch }
}