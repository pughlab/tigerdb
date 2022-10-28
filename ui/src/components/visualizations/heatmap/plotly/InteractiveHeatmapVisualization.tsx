import React, { useState } from 'react'
import { Message, Divider, List, Container, Input, Segment, Form, Button } from 'semantic-ui-react'

import { gql, useQuery } from '@apollo/client'
import Plot from 'react-plotly.js';
import * as R from 'remeda'

//this code assumes all samples (y-axis) have the same bins: 'start' (x-axis)
export default function InteractiveHeatmapVisualization() {
    const { data, loading, error } = useQuery(gql`
        query HeatmapDataVariables{
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
        {})
    if (!data) {return}

    //array declarations for data
    let dataVariableDisplay : any[] = [];
    // TODO: this is an alternative way to get the same thing, not clear how accessor creates hovertip from it
    // const dataVariableDisplay = R.pipe(
    //     data.curatedDatasets,
    //     R.map(R.prop('dataVariables')),
    //     R.map(R.map(R.prop('dataVariableID')))
    // )
    // console.log(dataVariableDisplay)

    // has structure {[chromosome]: [... bin start values]}
    type ChromosomeBinsType = {
        chromosome: any[]
    }
    const chromosomeBins = {} as ChromosomeBinsType

    //initial array loop (Curated Datasets)
    for(let i = 0; i < data.curatedDatasets.length; i+=1){
        const datasetDataVariables = data?.curatedDatasets[i]['dataVariables']
        
        let z_dataVariableID: any[] = [];
        //looping through 'dataVariables' in 'curatedDataset'
        for(let j = 0; j < datasetDataVariables.length; j+=1){
            const dataVariable = datasetDataVariables[j];
            const {dataVariableID, chromosome, start, datavalue} = dataVariable
            // Add empty array if new chromosome
            if (!chromosomeBins[chromosome]) {
                chromosomeBins[chromosome] = []
            }
            chromosomeBins[chromosome].push(start)

            z_dataVariableID.push(dataVariable['dataVariableID'])
        }
        dataVariableDisplay.push(z_dataVariableID)

    }
    //Displaying all bins for current chromosome (chr1, chr2, etc..) across datasets
    let X_global : any[] = []
    const X_chromosomes = Object.keys(chromosomeBins).sort() //sorting by ascending order
    const uniqAndSort = (x: any[]) => R.pipe(x, R.uniq, R.sort((a: number, b: number) => a - b))
    for (const chr of X_chromosomes) {
        // chr_start contains all bins for the current chromosome from all datasets
        const chr_starts = R.map(uniqAndSort(chromosomeBins[chr]), start => `${chr}_${start}`)
        X_global = [... X_global, ... chr_starts]
    }
    console.log(X_global)

    //extracting curatedDatasetID from all datasets 
    const Y_global: any[] = R.map(data.curatedDatasets, R.prop('curatedDatasetID'))
    console.log(Y_global)

    // Loop over each set of datavariables to construct z_global subarrays
    let Z_global : any[] = []
    for (const curatedDataset of data.curatedDatasets){
        const D = {}
        for (const dataVariable of curatedDataset['dataVariables']) {
            const {chromosome, start, datavalue} = dataVariable
            if (!D[chromosome]) {D[chromosome] = {}}
            D[chromosome][start] = datavalue
        }
        Z_global.push(D)
    }
    
    //mapping bins to data values for every dataset
    const fill_yz = D => {
        const create_yz_obj = (chromosomeBins) => {
            //creating deep copy of chromosomeBins 
            const yz = R.clone(chromosomeBins)
            const chromosomes = Object.keys(chromosomeBins)
            for (const chr of chromosomes) {
                const starts = yz[chr]
                yz[chr] = R.mapToObj(starts, (start: number) => [start, null])
            }
            return yz
        }
        const yz = create_yz_obj(chromosomeBins)
        const chromosomes = Object.keys(D)
        for (const chr of chromosomes) {
            const starts = Object.keys(D[chr])
            for (const start of starts) {
                yz[chr][start] = D[chr][start]
            }
        }
        const yz_array: any[] = []
        console.log(Object.keys(chromosomeBins))
        for (const chr of Object.keys(chromosomeBins)) {
            // console.log(chromosomeBins[chr])
            for (const start of uniqAndSort(chromosomeBins[chr])) {
                yz_array.push(R.pathOr(yz, [chr, start], null))
            }
        }
        return yz_array
    }
    Z_global = R.map(Z_global, fill_yz)

    //heatmap values
    const hoverOptions = {
        text: dataVariableDisplay,
        hoverongaps: false,
        hovertemplate:'<b>Bins</b>: %{x}' +
        '<br><b>curatedDatasetID</b>: %{y}<br>' +
        '<b>Data Value</b>: %{z}<br>' +
        '<b>dataVariableID</b>: %{text}' +
        '<extra></extra>'
    }
    let trace1 = {
        type: 'heatmap', 
        z: Z_global,
        x: X_global,
        y: Y_global,
        colorscale: [[0, '#dfdfdf'], [0.5, '#e9835c'], [1, '#b20a1c']],
        ... hoverOptions
    }

    console.log(trace1)
    
    return (
        <>
        <Plot
            config={{ showTips: false }}
            data={[trace1]}
            layout={{
                width: 1000, height: 800, title: 'Heatmap Visualization', 
                //x-axis starts at 0, ticks appear incrementally every 10000 bins
                xaxis: {rangemode: 'tozero', autorange: true, tickmode: "linear", tick0: 0, dtick: 10000, tickangle: 40, tickfont: {size: 11,}, title: 'Bins',},
                yaxis: {automargin: true, tickangle: 40, tickfont: {size: 14,}, title: 'Samples',},
                showlegend: false,
            }}
        />
        </>
    )
}
