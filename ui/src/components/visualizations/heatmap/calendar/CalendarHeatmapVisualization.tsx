import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';
import './react-calendar-heatmap.css';

const today = new Date();

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CalendarHeatmapVisualization() {
    const randomValues = getRange(200).map(index => {
      return {
        date: shiftDate(today, -index),
        count: getRandomInt(1, 3),
      };
    });
    console.log(randomValues[randomValues.length-1])
    return (
      <div>
        <CalendarHeatmap
          startDate={shiftDate(today, -150)}
          endDate={shiftDate(today, -1)}
          values={randomValues}
          classForValue={value => {
            if (!value) {
              return 'color-empty';
            }
            return `color-github-${value.count}`;
          }}
          tooltipDataAttrs={value => {
            return {
              'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${value.count}`,
            };
          }}
          showWeekdayLabels={true}
          onClick={value => alert(`Clicked on value with count: ${value.count}`)}
        />
        <ReactTooltip />
      </div>
    );
  }
