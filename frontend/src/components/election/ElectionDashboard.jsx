/* eslint-disable object-curly-newline */
import { Button, Container, IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FabButton from '../FabButton';
import NavBar from '../Navbar';
import { openDialog } from '../../store/reducers/dialogs.reducer';
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
  const currentElection = useSelector(
    (state) => state.election.currentElection,
  );
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(currentElection).length === 0) history.push('/');
  });

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
        {isAdmin && (
          <IconButton onClick={() => dispatch(openDialog())}>
            <SettingsIcon />
          </IconButton>
        )}
      </Container>
    </div>
  );
};

export default ElectionDashboard;
