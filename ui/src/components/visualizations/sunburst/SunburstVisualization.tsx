import * as React from "react";
import { ParentSize } from "@visx/responsive";
import hierarchyData from "./data";
import { hierarchy } from "@visx/hierarchy";

import { arc } from "@visx/shape";
import { scaleLinear, scaleSqrt, scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { Partition } from "@visx/hierarchy";
import { animated } from "react-spring";
import { useAnimatedScale } from "./AnimatedScale";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";

// Derived from: https://observablehq.com/@d3/zoomable-sunburst
// Does not work with react-spring v9
function Sunburst(props: any) {
  const {
    root,
    width,
    height,
    margin = { top: 0, left: 0, right: 0, bottom: 0 }
  } = props;

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip
  } = useTooltip();

  // const { containerRef, TooltipInPortal } = useTooltipInPortal({
  //   detectBounds: true,
  //   scroll: true
  // });

  const color = scaleOrdinal().range([
    "#FE938C",
    "#E6B89C",
    "#EAD2AC",
    "#9CAFB7",
    "#4281A4"
  ]);

  const xAnimatedScale = useAnimatedScale(scaleLinear, {
    domain: [0, 1],
    range: [0, 2 * Math.PI]
  });

  const yAnimatedScale = useAnimatedScale(scaleSqrt, {
    domain: [0, 1],
    range: [0, props.width / 2]
  });

  const handleMouseOver = (event: any, data: any) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    console.log(data);
    // if (data.size) {
    //   showTooltip({
    //     tooltipLeft: coords ? coords.x : 0,
    //     tooltipTop: coords ? coords.y : 0,
    //     tooltipData: data.size
    //   });
    // } else {
    //   hideTooltip();
    // }
  };

  const arcGenerator = arc<any, any>()
    .startAngle((d) =>
      Math.max(0, Math.min(2 * Math.PI, xAnimatedScale.scale(d.x0)))
    )
    .endAngle((d) =>
      Math.max(0, Math.min(2 * Math.PI, xAnimatedScale.scale(d.x1)))
    )
    .innerRadius((d) => Math.max(0, yAnimatedScale.scale(d.y0)))
    .outerRadius((d) => Math.max(0, yAnimatedScale.scale(d.y1)));
    console.log(xAnimatedScale)
  return (
    <>
      <svg width={width} height={height}>
        <Partition<any>
          top={margin.top}
          left={margin.left}
          root={root}
          // size={[2 * Math.PI, (root.height + 1) / 2]}
        >
          {(data) => (
            <Group top={height / 2} left={width / 2}>
              {data.descendants().map((node, i) => (
                <animated.path
                  className="path"
                  // TODO: Interpolate should be for both scales
                  d={xAnimatedScale.interpolate(() => arcGenerator(node))}
                  stroke="#373737"
                  strokeWidth="2"
                  fill={color(
                    (node.children ? node.data : node.parent?.data).name
                  )}
                  fillOpacity={node.children ? 0.7 : 0.3}
                  fillRule="evenodd"
                  onMouseEnter={(e) => handleMouseOver(e, node.data)}
                  onClick={() => {
                    xAnimatedScale.setState((prevState) => ({
                      ...prevState,
                      domain: [node.x0, node.x1]
                    }));
                    yAnimatedScale.setState((prevState) => ({
                      ...prevState,
                      domain: [node.y0, 1],
                      range: [node.y0 ? 20 : 0, props.width / 2]
                    }));
                  }}
                  key={i}
                />
              ))}
            </Group>
          )}
        </Partition>
        {/* {tooltipOpen && (
          <TooltipInPortal
            key={Math.random()}
            top={tooltipTop}
            left={tooltipLeft}
          >
            Data value <strong>{tooltipData}</strong>
          </TooltipInPortal>
        )} */}
      </svg>
    </>
  );
}

const root = hierarchy<any>(hierarchyData)
  .eachBefore(
    (d) => (d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name)
  )
  .sum((d) => d.size)
  // .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  .sort((a, b) => b.height - a.height || (b.value ?? 0) - (a.value ?? 0));

export default function SunburstVisualization() {
  return (
      // <h1>Visx zoomable sunburst chart with tooltip and animation</h1>
      <ParentSize>
        {(size) => <Sunburst root={root} width={800} height={800} />}
      </ParentSize>
  );
}
