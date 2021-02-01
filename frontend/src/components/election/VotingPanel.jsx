import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { generate } from 'shortid';
import CandidateCard from './CandidateCard';

const useStyles = makeStyles(() => ({
  votingPanel: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));

const VotingPanel = () => {
  const candidates = useSelector(
    (state) => state.election.currentElection.candidates,
  );
  const classes = useStyles();

  const onClick = (id) => {
    console.log(id);
  };

  return (
    <div className={classes.votingPanel}>
      {candidates.map((candidate) => (
        <CandidateCard data={candidate} onClick={onClick} key={generate()} />
      ))}
      <CandidateCard data={{ name: 'Blank ballot', code: '' }} />
    </div>
  );
};

export default VotingPanel;
