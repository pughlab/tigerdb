import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

export default function useRunLogsQuery({ runID }: { runID: string }) {
  const [logs, setLogs] = useState(null)

  // Use Apollo's `useQuery` hook with inline query and options
  const { loading, data, error } = useQuery(gql`
      query RunLogs($runID: ID!) {
        getRuns(runID: $runID) {
			getRunData
        }
      }
    `, 
    {
      variables: { runID },
      pollInterval: 5000,  // Poll every 500ms
      fetchPolicy: 'network-only' // Always fetch from network to get the latest logs
    }
  )

  // Update the logs state when the data is received
//   useEffect(() => {
//     if (data && data.runs) {
//       const { runs: { logs: logsFromPolling } } = data
//       setLogs(logsFromPolling)
//     }
//   }, [data])

  useEffect(() => {
	if (!!data?.getRuns && data.getRuns.length > 0) {
		const { logs: logsFromPolling } = data.getRuns[0].getRunData
		console.log(data.getRuns[0].getRunData)
		setLogs(data.getRuns[0].getRunData)
	}
}, [data])

  return { logs, loading, error }
}
