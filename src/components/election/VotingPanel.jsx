/* eslint-disable operator-linebreak */
import { IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { generate } from 'shortid';
import BackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
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
  const candidates =
    useSelector((state) => state.election.currentElection.candidates) || [];
  const classes = useStyles();
  const history = useHistory();


  return (
    <>
      <div className={classes.votingPanel}>
        {candidates.map((candidate) => (
          <CandidateCard data={candidate} onClick={onClick} key={generate()} />
        ))}
        <CandidateCard data={{ name: 'Blank ballot', code: '' }} />
      </div>
    </>
  );
};

export default VotingPanel;
