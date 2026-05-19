import { gql, useMutation } from '@apollo/client';

const DELETE_DATASET = gql`
  mutation deleteDatasets($datasetID: ID!) {
    deleteDatasets(where: { datasetID: $datasetID }) {
      nodesDeleted
    }
  }
`;

export default function useDeleteDatasetMutation(refetch?: () => void) {
  const [mutate, { data, loading, error }] = useMutation(DELETE_DATASET, {
    onCompleted: () => {
      if (refetch) refetch()
    }
  });
  return { deleteDataset: mutate, data, loading, error };
}
