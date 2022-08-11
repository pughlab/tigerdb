import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';
import './react-calendar-heatmap.css';

import { addDays, addMonths, addYears, format } from 'date-fns'
import {atom, useAtom} from 'jotai'
import { Button, Divider, Icon, Label, Segment } from 'semantic-ui-react';

import useRawDatasetCalendarHeatmapQuery from '../../../../hooks/useRawDatasetCalendarHeatmapQuery';

export default function CalendarHeatmapVisualization() {
  const {variables: {startDate, endDate, setEndDate}, heatmapData, loading} = useRawDatasetCalendarHeatmapQuery()

  return (
    <Segment loading={loading}>
      <Divider horizontal>
        <Button.Group>
          <Button icon='left arrow' onClick={() => setEndDate(addMonths(endDate, -1))} />
          <Button onClick={() => setEndDate(new Date())}>
            <Icon name='calendar outline' />
            <Label content={format(startDate, 'dd MMM yy')} />
            -
            <Label content={format(endDate, 'dd MMM yy')} />
          </Button>
          <Button icon='right arrow' onClick={() => setEndDate(addMonths(endDate, 1))}/>
        </Button.Group>
      </Divider>
      {!!heatmapData &&
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={heatmapData}
            classForValue={value => !value ? 'color-empty' : `color-github-${value.count}`}
            titleForValue={value => !!value ? `${value.date} has count: ${value.count}` : ''}
            showWeekdayLabels={true}
            weekdayLabels={['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa']}
            onClick={value => alert(`Clicked on value with count: ${value.count}`)}
          />
    }

      <ReactTooltip />
    </Segment>
  );
}
