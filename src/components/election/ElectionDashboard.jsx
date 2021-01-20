/* eslint-disable object-curly-newline */
import { Button, Container, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import FabButton from '../FabButton';
import NavBar from '../Navbar';

const useStyles = makeStyles(() => ({
  electionWrapper: {
    height: '100vh',
  },
  banner: {
    margin: 0,
  },
  banner__title: {
    marginTop: 40,
    marginBottom: 40,
  },
}));

const ElectionDashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.electionWrapper}>
      <NavBar actionIcon="back" path={{ from: '/' }} />
      <FabButton />
      <Container maxWidth="md" className={classes.banner}>
        <h1 className={classes.banner__title}>Title</h1>
        <Button color="secondary" variant="contained">
          Action button
        </Button>
        <IconButton>
          <SettingsIcon />
        </IconButton>
      </Container>
    </div>
  );
};

export default ElectionDashboard;
