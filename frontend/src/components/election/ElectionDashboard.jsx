import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import FabButton from '../FabButton';
import NavBar from '../Navbar';

const ElectionDashboard = () => (
  <div className="electionWrapper">
    <NavBar actionIcon="back" path={{ from: '/' }} />
    <FabButton />
    <div className="banner">
      <h1>Title</h1>
      <Button color="secondary" variant="contained">
        Action button
      </Button>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </div>
  </div>
);

export default ElectionDashboard;
