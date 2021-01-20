/* eslint-disable object-curly-newline */
import { Button, Container, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import FabButton from '../FabButton';
import NavBar from '../Navbar';
import { openDialog } from '../../store/actions/dialog.actions';
import ElectionSettings from './ElectionSettings';

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
  const currentElection = useSelector((state) => state.election.currentElection);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.electionWrapper}>
      <NavBar actionIcon="back" path={{ from: '/' }} />
      <ElectionSettings />
      <FabButton />
      <Container maxWidth="md" className={classes.banner}>
        <h1 className={classes.banner__title}>{currentElection.title}</h1>
        <Button color="secondary" variant="contained">
          Action button
        </Button>
        <IconButton onClick={() => dispatch(openDialog())}>
          <SettingsIcon />
        </IconButton>
      </Container>
    </div>
  );
};

export default ElectionDashboard;
