import React from 'react'
import Plot from 'react-plotly.js'
import { gql, useQuery } from "@apollo/client"

function compareCounts(a, b) {
    let result = 0
    const aCount = a.count
    const bCount= b.count
  
    if (aCount > bCount) {
      result = -1
    } else if (aCount < bCount) {
      result = 1
    }
    return result
  }

export default function BarChart() {
    const { loading, data, error } = useQuery(gql`
        query EpitopeSpeciesCount {
            countEpitopeSpecies {
                count
                epitopeSpecies
        }
    }`)

    if (loading) return <>{'Loading...'}</>

    if (error) return <>{'There was an error when querying the data!'}</>

    const sortedData = [...data.countEpitopeSpecies].sort(compareCounts)
    const chartData = [{
        x: sortedData.map((species) => species.epitopeSpecies),
        y: sortedData.map((species) => species.count),
        type: 'bar'
    }]
    const layout = {
        title: 'Count of epitope species',
        xaxis: { title: 'Epitope Species name' },
        yaxis: { title: 'Count' }
    }

    return (
        <div>
            <Plot
                data={chartData}
                layout={layout}
            />
        </div>
    )
}