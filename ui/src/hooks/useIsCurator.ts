import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function useIsCurator() {
	const { data, loading, error, refetch } = useQuery(gql`
		query {
			isCurator
		}
	`, { fetchPolicy: 'network-only' });

	const [isCurator, setIsCurator] = useState(false);

	useEffect(() => {
		if (data?.isCurator) {
			setIsCurator(data.isCurator);
		}
	}, [data]);

	return { isCurator, loading, error, refetch };
}
