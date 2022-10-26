import React, { useState } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button } from 'semantic-ui-react'

import { gql, useQuery } from '@apollo/client'
import Plot from 'react-plotly.js';

//this code assumes all samples (y-axis) have the same bins: 'start' (x-axis)
export default function Explore() {
    const [searchText, setSearchText] = useState('')
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(1000)

    const { data, loading, error } = useQuery(gql`
        query MyTestQuery{
            curatedDatasets {
                curatedDatasetID
                name
                dataVariables(options: {sort: [ {chromosome: ASC},{ start: ASC } ]})
                {
                    dataVariableID
                    chromosome
                    start
                    end
                    datavalue
                }
            }
        }`,
        { variables: { searchText, start, end } })
    // console.log(data)

    //array declarations for data
    let curatedDatasetsArray : any[] = [];
    let dataVariablesArray : any[] = [];
    let curatedDatasetIDArray : any[] = [];
    //array declarations for plotly values
    let x : any[] = [];
    let y : any[] = [];
    let z : any[] = [];
    let dataVariableDisplay : any[] = [];

    //initial array loop (Curated Datasets)
    for(let i = 0; i < data?.curatedDatasets.length; i+=1){
        curatedDatasetsArray = data?.curatedDatasets[i] 
        console.log(curatedDatasetsArray)

        y.push(curatedDatasetsArray['curatedDatasetID'])
        // console.log(curatedDatasetIDArray)

        dataVariablesArray.push(curatedDatasetsArray['dataVariables'])
        console.log(dataVariablesArray)

        let z_y : any[] = [];
        let z_dataVariableID: any[] = [];
        x = [];
        //looping through 'dataVariables' in 'curatedDataset'
        for(let j = 0; j < curatedDatasetsArray['dataVariables'].length; j+=1){
            const dataVariable = curatedDatasetsArray['dataVariables'][j];
            
            z_y.push(dataVariable['datavalue'])
            x.push(dataVariable['start'])
            z_dataVariableID.push(dataVariable['dataVariableID'])
        }
        z.push(z_y)
        dataVariableDisplay.push(z_dataVariableID)
    }

    //heatmap values
    let trace1 = {
        type: 'heatmap', 
        z: z,
        x: x,
        y: y,
        text: dataVariableDisplay,
        // hoverongaps:false,
        hovertemplate:'<b>Bins</b>: %{x}' +
        '<br><b>curatedDatasetID</b>: %{y}<br>' +
        '<b>Data Value</b>: %{z}<br>' +
        '<b>dataVariableID</b>: %{text}' +
        '<extra></extra>',
        colorscale: [[0, '#dfdfdf'], [0.5, '#e9835c'], [1, '#b20a1c']],
    }

    console.log(trace1)
    
    return (
        <>
            <Message>
                Some text about data variables and searching to create visualizations
                <Divider horizontal />
            </Message>
            <Plot
                config={{ showTips: false }}
                data={[trace1]}
                layout={{
                    width: 600, height: 600, title: 'Heatmap Visualization', 
                    //x-axis starts at 0, ticks appear incrementally every 10000 bins
                    xaxis: {rangemode: 'tozero', autorange: true, tickmode: "linear", tick0: 0, dtick: 10000, tickangle: 40, tickfont: {size: 11,}, title: 'Bins',},
                    yaxis: {automargin: true, tickangle: 40, tickfont: {size: 14,}, title: 'Samples',},
                    showlegend: false,
                }}
            />
        </>
    )
}
