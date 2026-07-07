import { gql, useQuery } from "@apollo/client";
import * as d3 from "d3";
import { scaleBand, scaleLog } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import React, { useState } from "react";
import { Tooltip, useTooltip } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { FaPerson, FaBacteria } from "react-icons/fa6";
import { RiVirusFill } from "react-icons/ri";
import { Grid } from "@visx/grid";
import { Text } from "@visx/text";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

function generateTone(baseHue = 30, saturation = 20, lightness = 80) {
  return `hsl(${baseHue}, ${saturation}%, ${lightness}%)`;
}

function generatePalette(steps = 5) {
  const palette = [];
  const baseLightness = 80;
  
  for(let i = 0; i < steps; i++) {
      const lightness = baseLightness + (i * 5);
      palette.push(generateTone(35, 20, Math.min(lightness, 95))); 
  }
  
  return palette;
}

export function EnhancedBarChart() {
  const { loading: epitopesLoading, data: epitopes, error: epitopesError } = useQuery(gql`
    query EpitopeSpeciesCount {
      countEpitopes {
        count
        epitopeSpecies
      }
    }
  `);
  const { loading: unlabelledVarsLoading, data: unlabelledVars, error: unlabelledVarsError } = useQuery(gql`
    query UnlabelledVars {
      countUnlabelledVariables {
        name
        count
      }
    }
  `)
  const loading = epitopesLoading || unlabelledVarsLoading
  const error = epitopesError || unlabelledVarsError

  if (loading) return (
    <Segment placeholder basic icon="chart bar">
    <Dimmer active inverted>
      <Loader size='large'>Loading...</Loader>
    </Dimmer>
    </Segment>
  );

  if (error) return <>{"There was an error when querying the data!"}</>;

  const data = {
    epitopes: epitopes.countEpitopes,
    unlabelled: unlabelledVars.countUnlabelledVariables
  }

  return <BarChart data={data} />;
}

const BarChart = ({ data }: { data: any }) => {
  const [hover, setHover] = useState("");

  const categories = {
    Human: ["Human"],
    Viral: [
      "CMV",
      "HCV",
      "Influenza",
      "EBV",
      "MCPyV",
      "DENV",
      "HBV",
      "HPV",
      "HSV",
      "HTLV1",
      "YFV",
      "CEF"
    ],
    Bacterial: ["M.tuberculosis", "S-pneumoniae"],
    Unlabelled: ["Unlabelled"]
  };

  const getXAxisTicks = () => {
    const maxValue: number = Math.max(...data.epitopes.map(d => d.count))
    const power: number = Number(Math.log10(maxValue).toFixed()) + 1

    return [...Array(power + 1)].map((_, i) => 10 ** i)
  }

  const iconMap = {
    Human: <FaPerson />,
    Viral: <RiVirusFill />,
    Bacterial: <FaBacteria />,
  };

  const categoryOrder = ["Unlabelled", "Human", "Viral", "Bacterial"];

  const getCategory = (speciesName) => {
    for (const category of Object.keys(categories)) {
      if (categories[category].includes(speciesName)) {
        return category;
      }
    }
    return "Unlabelled";
  };

  // Transform and sort the data
  const transformedData = data.epitopes
    .map((species) => {
      const category = getCategory(species.epitopeSpecies);
      return {
        epitopeSpecies: species.epitopeSpecies,
        count: species.count,
        category: category,
        icon: iconMap[category],
      };
    })
    .sort((a, b) => {
      // Sort by specified category order, then by count descending
      const categoryComparison =
        categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
      if (categoryComparison === 0) {
        return b.count - a.count;
      }
      return categoryComparison;
    });

  // Introduce gaps between categories
  const dataWithGaps = [];
  let positionIndex = 0;

  const margin = { top: 20, left: 100, bottom: 60, right: 150 },
    width = 1100, // Total SVG width
    height = 500; // Total SVG height

  const innerWidth = width - margin.left - margin.right; // Drawable width
  const innerHeight = height - margin.top - margin.bottom; // Drawable height

  const colors = {
    Human: "tomato",
    Bacterial: "mediumturquoise",
    Viral: "lightcyan",
    Unlabelled: "moccasin"
  };
  const stackedBarColors = generatePalette(data.unlabelled.length)

  // Define y scale before computing category positions
  const y = scaleBand({
    domain: [], // We'll set the domain after building dataWithGaps
    range: [0, innerHeight],
    padding: 0.1,
  });

  // Build dataWithGaps and set up position indices
  categoryOrder.forEach((category, groupIndex) => {
    const categoryItems = transformedData.filter(
      (d) => d.category === category
    );
    categoryItems.forEach((item) => {
      item.positionIndex = positionIndex;
      dataWithGaps.push(item);
      positionIndex++;
    });
    if (groupIndex < categoryOrder.length - 1) {
      // Add a gap after each category except the last
      dataWithGaps.push({ isGap: true, positionIndex: positionIndex });
      positionIndex++;
    }
  });

  // Update y scale domain now that dataWithGaps is built
  y.domain(dataWithGaps.map((d) => d.positionIndex));

  // Now compute category positions
  const categoryPositions = [];

  categoryOrder.forEach((category) => {
    const categoryItems = dataWithGaps.filter(
      (d) => d.category === category && !d.isGap
    );
    if (categoryItems.length > 0) {
      const yPositions = categoryItems.map(
        (d) => y(d.positionIndex) + y.bandwidth() / 2
      );
      const meanYPosition = d3.mean(yPositions);
      categoryPositions.push({
        category,
        yPosition: meanYPosition,
      });
    }
  });

  const x = scaleLog({
    domain: [1, Math.max(...transformedData.map((species) => species.count))],
    range: [0, innerWidth],
    nice: true,
    base: 10,
  });

  const { tooltipData, tooltipLeft, tooltipTop, showTooltip, hideTooltip } =
    useTooltip();

  const handleMouseOver = (event, species) => {
    const { x, y } = localPoint(event);
    setHover(species.epitopeSpecies);
    showTooltip({
      tooltipLeft: x,
      tooltipTop: y,
      tooltipData: species,
    });
  };

  const handleMouseOut = () => {
    hideTooltip();
    setHover("");
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>TIGERdb Available Data</h2>
      <svg width={width} height={height}>
        {/* Add the Grid component */}
        <Grid
          xScale={x}
          yScale={y}
          width={innerWidth}
          height={innerHeight}
          numTicksColumns={4}
          stroke="gray"
          strokeOpacity={0.3}
          left={margin.left}
          top={margin.top}
        />
        <Group top={margin.top} left={margin.left}>
          {
            // Draw the bars
            dataWithGaps.map((d) => {
              if (d.category === 'Unlabelled') {
                let xPosition = x(1)
                const sortedUnlabelled = data.unlabelled.toSorted((a, b) => a.count - b.count)
                return (<Group key={d.category} y={d.positionIndex}>
                  {
                    sortedUnlabelled.map((project, index) => {
                      if (project.count === 0) {
                        return null
                      }
                      const barWidth = x(project.count) - xPosition
                      const barData = {
                        x: xPosition,
                        y: y(d.positionIndex),
                        width: barWidth,
                        height: y.bandwidth(),
                        opacity: hover === project.name ? 1 : 0.7
                      }
                      const bar = (<g key={`segment-${project.name}`}>
                        <rect 
                          {...barData}
                          onMouseOver={(event) => handleMouseOver(event, {
                            epitopeSpecies: project.name,
                            count: project.count
                          })}
                          onMouseOut={handleMouseOut}
                          fill={stackedBarColors[index]}
                          style={{zIndex: index}}
                        />
                      </g>)

                      xPosition += barWidth

                      return bar
                    })
                  }
                </Group>)
              }
              if (d.isGap || isNaN(x(d.count))) {
                // Do not render anything for gaps or invalid values
                return null;
              }
              return (
                <rect
                key={d.epitopeSpecies}
                x={x(1)}
                y={y(d.positionIndex)}
                height={y.bandwidth()}
                width={x(d.count) - x(1)}
                fill={colors[d.category] || "white"}
                onMouseOver={(event) => handleMouseOver(event, d)}
                onMouseOut={handleMouseOut}
                opacity={hover === d.epitopeSpecies ? 1 : 0.7}
                />
              );
            })
          }

          {/* Draw the category labels on the right */}
          {categoryPositions.map(({ category, yPosition }) => (
            <Text
              key={category}
              x={innerWidth + 10} // Move label to the right of the bars
              y={yPosition} // Center in the group of bars
              textAnchor="start"
              fontSize={16}
              fontWeight="bold"
              fill={colors[category]}
            >
              {category}
            </Text>
          ))}

          {/* X Axis with Label */}
          <AxisBottom
            top={innerHeight} // Position at the bottom of the drawable area
            scale={x}
            stroke="white" // Set axis line color
            tickStroke="white" // Set tick marks color
            tickFormat={(d) => d.toString()}
            tickValues={getXAxisTicks()}
            tickLabelProps={() => ({
              fontSize: 12,
              textAnchor: "middle",
              fill: "white",
            })}
          />
          <Text
            x={innerWidth / 2} // Center the label
            y={innerHeight + 40} // Position the label below the X-axis
            textAnchor="middle"
            fontSize={16}
            fill="white"
          >
            Number of unique TRB CDR3s
          </Text>
          {/* Y Axis */}
          <AxisLeft
            left={0} // Position relative to the group
            scale={y}
            stroke="white" // Set axis line color
            tickStroke="white" // Set tick marks color
            tickValues={dataWithGaps.map((d) => d.positionIndex)} 
            tickFormat={(d) => {
              const item = dataWithGaps.find(
                (item) => item.positionIndex === d
              );
              return item && !item.isGap ? item.epitopeSpecies : "";
            }}
            tickLabelProps={() => ({
              fontSize: 12,
              textAnchor: "end",
              alignmentBaseline: "middle",
              dy: "0.35em",
              fill: "white",
            })}
          />
        </Group>
      </svg>

      {/* Tooltip */}
      {tooltipData && (
        <Tooltip top={tooltipTop} left={tooltipLeft}>
          <div>
            <strong>{tooltipData.epitopeSpecies}</strong>: {tooltipData.count}
          </div>
        </Tooltip>
      )}
    </>
  );
};
