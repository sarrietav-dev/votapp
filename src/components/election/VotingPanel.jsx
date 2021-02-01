import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { generate } from 'shortid';

const useStyles = makeStyles(() => ({
  votingPanel: {
    height: '100vh',
  },
}));

const VotingPanel = () => {
  const candidates = useSelector(
    (state) => state.election.currentElection.candidates,
  );
  const classes = useStyles();

  return (
    <div className={classes.votingPanel}>
      {candidates.map((candidate) => (
        <h1 key={generate()}>{candidate}</h1>
      ))}
    </div>
  );
};

export default VotingPanel;
