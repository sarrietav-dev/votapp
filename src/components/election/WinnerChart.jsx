import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from '@reactchartjs/react-chart.js';
import parseData from './utils/parse-data';

const WinnerChart = () => {
  const candidates = useSelector(
    (state) => state.election.currentElection.candidates,
  );

  return <Bar data={parseData(candidates)} />;
};

export default WinnerChart;
