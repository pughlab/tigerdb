import React, { useState } from 'react';
import { Group } from '@visx/group';
import {
  Treemap,
  hierarchy,
  stratify,
  treemapSquarify,
  treemapBinary,
  treemapDice,
  treemapResquarify,
  treemapSlice,
  treemapSliceDice,
} from '@visx/hierarchy';
import { TileMethod } from '@visx/hierarchy/lib/types';
import shakespeare, { Shakespeare } from '@visx/mock-data/lib/mocks/shakespeare';
import hierarchyData from "../sunburst/data";
import { scaleLinear, scaleOrdinal } from '@visx/scale';
// import { scaleLinear, scaleSqrt, scaleOrdinal } from "@visx/scale";


export const color1 = '#f3e9d2';
const color2 = '#4281a4';
export const background = '#114b5f';

import ParentSize from '@visx/responsive/lib/components/ParentSize';

// const colorScale = scaleLinear<string>({
//   domain: [0, Math.max(...Object.values(hierarchyData).map((d) => d.size || 0))],
//   range: [color2, color1],
// });
const colorScale = scaleOrdinal().range([
  "#FE938C",
  "#E6B89C",
  "#EAD2AC",
  "#9CAFB7",
  "#4281A4"
]);

const tileMethods: { [tile: string]: TileMethod<typeof data> } = {
  treemapSquarify,
  treemapBinary,
  treemapDice,
  treemapResquarify,
  treemapSlice,
  treemapSliceDice,
};

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };

export type TreemapProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

function TreemapDemo({ width, height, margin = defaultMargin }: TreemapProps) {
  const [tileMethod, setTileMethod] = useState<string>('treemapSquarify');
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;  

  return width < 10 ? null : (
    <div>
      <label>tile method</label>{' '}
      <select
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setTileMethod(e.target.value)}
        value={tileMethod}
      >
        {Object.keys(tileMethods).map((tile) => (
          <option key={tile} value={tile}>
            {tile}
          </option>
        ))}
      </select>
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} rx={14} fill={background} />
          <Treemap<typeof data>
            top={margin.top}
            root={root}
            size={[xMax, yMax]}
            tile={tileMethods[tileMethod]}
            round
          >
            {(treemap) => (
              <Group>
                {treemap
                  .descendants()
                  .reverse()
                  .map((node, i) => {
                    const nodeWidth = node.x1 - node.x0;
                    const nodeHeight = node.y1 - node.y0;
                    return (
                      <Group
                        key={`node-${i}`}
                        top={node.y0 + margin.top}
                        left={node.x0 + margin.left}
                      >
                        {node.depth === 1 && (
                          <rect
                            width={nodeWidth}
                            height={nodeHeight}
                            stroke={background}
                            strokeWidth={4}
                            fill="transparent"
                          />
                        )}
                        {node.depth > 2 && (
                          <rect
                            width={nodeWidth}
                            height={nodeHeight}
                            stroke={background}
                            fill={colorScale(node.value || 0)}
                          />
                        )}
                      </Group>
                    );
                  })}
              </Group>
            )}
          </Treemap>
        </svg>
      </div>
    </div>
  );
}

const root = hierarchy<any>(hierarchyData)
  .eachBefore(
    (d) => (d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name)
  )
  .sum((d) => d.size)
  // .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  .sort((a, b) => b.height - a.height || (b.value ?? 0) - (a.value ?? 0));

export default function TreemapVisualization() {
    return (
        // <h1>Visx zoomable sunburst chart with tooltip and animation</h1>
        <ParentSize>
          {(size) => <TreemapDemo root={root} width={800} height={800} />}
        </ParentSize>
    );
  }
  