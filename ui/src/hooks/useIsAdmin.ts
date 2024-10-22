import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function useIsAdmin() {
	const { data, loading, error, refetch } = useQuery(gql`
		query {
			isAdmin
		}
	`, { fetchPolicy: 'network-only' });

	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		if (data?.isAdmin) {
			setIsAdmin(data.isAdmin);
		}
	}, [data]);

	return { isAdmin, loading, error, refetch };
}
