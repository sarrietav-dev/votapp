import { Button } from '@material-ui/core';
import React from 'react';
import FabButton from '../FabButton';

const ElectionDashboard = () => (
  <div className="electionWrapper">
    <FabButton />
    <div className="banner">
      <h1>Title</h1>
      <Button color="secondary">Action button</Button>
    </div>
  </div>
);

export default ElectionDashboard;
