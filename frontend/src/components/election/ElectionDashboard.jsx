import { Button, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import FabButton from '../FabButton';
import NavBar from '../Navbar';

const useStyles = makeStyles(() => ({
  electionWrapper: {},
  banner: {},
}));

const ElectionDashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.electionWrapper}>
      <NavBar actionIcon="back" path={{ from: '/' }} />
      <FabButton />
      <div className={classes.banner}>
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
};

export default ElectionDashboard;
