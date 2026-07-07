// import { gql, useMutation } from "@apollo/client";
// import { useCallback } from "react";

// // Define the GraphQL mutation for uploading the processed headers
// const UPLOAD_PROCESSED_HEADERS = gql`
//   mutation UploadProcessedHeaders(
//     $bucketName: String!
//     $objectName: String!
//     $selectedHeaders: [HeaderInput!]!
//     $selectedDelimiter: String!
//     $filename: String!
//   ) {
//     uploadProcessedHeaders(
//       bucketName: $bucketName,
//       objectName: $objectName,
//       filename: $filename,
//       selectedHeaders: $selectedHeaders,
//       selectedDelimiter: $selectedDelimiter
//     ) {
//       objectName
//       filename
//       processedDataset {
//         headers {
//           name
//           index
//         }
//         rows
//         createdAt
//       }
//     }
//   }
// `;

// interface Header {
//   index: number;
//   name: string;
// }

// type SelectedHeaders = Record<string, string>; // A record of columnIndex -> headerName
// type DesiredOrder = string[]; // Array of desired header names

// // The custom hook
// export default function useUploadProcessedHeaders(postFn: () => void) {
//   // Set up the mutation using Apollo's useMutation
//   const [uploadProcessedHeadersMutation, { loading, error }] = useMutation(UPLOAD_PROCESSED_HEADERS, {
//     onCompleted: (data) => {
//       postFn(); // Optional callback after mutation is successful
//     },
//     onError: (error) => {
//       console.error("Error uploading processed headers:", error.message);
//     }
//   });

//   // Function to reorder headers and ensure the correct names are used
//   const reorderHeaders = (selectedHeaders: SelectedHeaders, desiredOrder: DesiredOrder): Header[] => {
//     return desiredOrder.map((header: string, index: number) => {
//       const foundHeader = Object.entries(selectedHeaders).find(
//         ([, headerName]) => headerName === header
//       );

//       return {
//         index,
//         name: foundHeader ? header : header, // Just keep the header name, no 'NA' or '1' here
//       };
//     });
//   };

//   // Function to handle the submission of headers and rows
//   const handleUploadProcessedHeaders = useCallback(
//     (bucketName: string, objectName: string, filename: string, selectedHeaders: SelectedHeaders, selectedDelimiter: string) => {
//       const desiredHeaderOrder: DesiredOrder = ['cdr3b', 'trbv', 'trbj', 'cdr3a', 'subject:condition', 'count'];
//       const reorderedHeaders = reorderHeaders(selectedHeaders, desiredHeaderOrder);

//       // Trigger the mutation with processed headers
//       uploadProcessedHeadersMutation({
//         variables: {
//           bucketName,
//           objectName,
//           filename,
//           selectedHeaders: reorderedHeaders, // Only the headers
//           selectedDelimiter,
//           // No need to pass rows explicitly since the mutation will auto-fill with '1' and 'NA'
//         }
//       });
//     },
//     [uploadProcessedHeadersMutation]
//   );

//   // Return the necessary values for logic handling
//   return { handleUploadProcessedHeaders, loading, error };
// }




import { gql, useMutation } from "@apollo/client";
import { useReducer, useCallback } from "react";

// Define the types for our state and actions
interface UploadState {
    headers?: any;
    processedDataset?: any;
    isLoading: boolean;
    error?: string;
}

type UploadAction =
  | { type: 'SET_HEADERS', headers: any }
  | { type: 'SET_PROCESSED_DATASET', processedDataset: any }
  | { type: 'SET_LOADING', isLoading: boolean }
  | { type: 'SET_ERROR', error: string };

// Reducer function to handle state transitions
const reducer = (state: UploadState, action: UploadAction): UploadState => {
  switch (action.type) {
    case 'SET_HEADERS':
      return { ...state, headers: action.headers };
    case 'SET_PROCESSED_DATASET':
      return { ...state, processedDataset: action.processedDataset, isLoading: false };
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'SET_ERROR':
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

// Initial state
const initialState: UploadState = {
  headers: undefined,
  processedDataset: undefined,
  isLoading: false,
  error: undefined
};

// Define the GraphQL mutation for uploading the processed headers
const UPLOAD_PROCESSED_HEADERS = gql`
  mutation UploadProcessedHeaders(
    $bucketName: String!
    $objectName: String!
    $headers: [HeaderInput!]!
    $selectedDelimiter: String!
    $filename: String!
    $includesHeader: Boolean!
  ) {
    uploadProcessedHeaders(
      bucketName: $bucketName,
      objectName: $objectName,
      filename: $filename,
      headers: $headers,
      selectedDelimiter: $selectedDelimiter,
      includesHeader: $includesHeader
    ) {
      objectName
      filename
      processedDataset {
        headers {
          name
          index
        }
        rows
        createdAt
        selectedDelimiter
      }
    }
  }
`;

// The custom hook
export default function useUploadProcessedHeaders(postFn: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Set up the mutation using Apollo's useMutation
  const [uploadProcessedHeadersMutation] = useMutation(UPLOAD_PROCESSED_HEADERS, {
    onCompleted: (data) => {
      if (data) {
        dispatch({ type: 'SET_PROCESSED_DATASET', processedDataset: data.uploadProcessedHeaders });
      }
      postFn(); // Optional callback after mutation is successful
    },
    onError: (error) => {
      dispatch({ type: 'SET_ERROR', error: error.message });
    }
  });

  // Function to handle the submission of headers
  const handleUploadProcessedHeaders = useCallback((bucketName: string, objectName: string, filename: string, headers: any, selectedDelimiter: string, includesHeader: boolean) => {
    // Dispatch loading state
    dispatch({ type: 'SET_LOADING', isLoading: true });

    // Format the headers
    const formattedHeaders = Object.entries(headers).map(([columnIndex, header]) => ({
      index: parseInt(columnIndex, 10),
      name: header,
    }));

    // Trigger the mutation
    uploadProcessedHeadersMutation({
      variables: {
        bucketName,
        objectName,
        filename,
        headers: formattedHeaders,
        selectedDelimiter,
        includesHeader
      }
    });
  }, [uploadProcessedHeadersMutation]);

  // Return state and the callback function
  return { state, dispatch, handleUploadProcessedHeaders };
}


