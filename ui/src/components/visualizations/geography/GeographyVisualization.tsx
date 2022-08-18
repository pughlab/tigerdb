import React from 'react';
import { scaleQuantize } from '@visx/scale';
import { Mercator, Graticule } from '@visx/geo'; 
import * as topojson from 'topojson-client';
import topology from './world-topo.json';

export const background = '#f9f7e8';

import { ParentSize } from "@visx/responsive";
import {geoMercator} from 'd3-geo'
import { Segment } from 'semantic-ui-react';

export type GeoMercatorProps = {
  width: number;
  height: number;
  events?: boolean;
};

interface FeatureShape {
  type: 'Feature';
  id: string;
  geometry: { coordinates: [number, number][][]; type: 'Polygon' };
  properties: { name: string };
}

// @ts-ignore
const world = topojson.feature(topology, topology.objects.units) as {
  type: 'FeatureCollection';
  features: FeatureShape[];
};

const color = scaleQuantize({
  domain: [
    Math.min(...world.features.map((f) => f.geometry.coordinates.length)),
    Math.max(...world.features.map((f) => f.geometry.coordinates.length)),
  ],
  range: ['#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48'],
});

function MercatorProjection ({ width, height, events = false, cityMarkers = []}) {
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = (width / 630) * 100;
  const translate = [centerX, centerY]
  const projection = geoMercator().translate(translate).scale(scale);
  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
      <Mercator<FeatureShape>
        data={world.features}
        scale={scale}
        translate={translate}
      >
        {(mercator) => (
          <g>
            <Graticule graticule={(g) => mercator.path(g) || ''} stroke="rgba(33,33,33,0.05)" />
            {mercator.features.map(({ feature, path }, i) => (
              <path
                key={`map-feature-${i}`}
                d={path || ''}
                fill={color(feature.geometry.coordinates.length)}
                stroke={background}
                strokeWidth={0.5}
                onClick={() => {
                  if (events) alert(`Clicked: ${feature.properties.name} (${feature.id})`);
                }}
              />
            ))}
          </g>
        )}
      </Mercator>
      {cityMarkers.map(marker =>
        <>
            <circle
              onClick={()=> {}}
              r={8}
              fill="#333"
              stroke="#333"
              strokeWidth={4}
              transform={`translate(${projection([
                marker.longitude,
                marker.latitude
              ])})`}
            />
        </>
      )}
    </svg>
  );
};

export default function GeographyVisualization ({cityMarkers=[]}) {
  return (
    <ParentSize>
      {(size) => <MercatorProjection width={size.width} height={800} cityMarkers={cityMarkers} />}
    </ParentSize>  
  )
}