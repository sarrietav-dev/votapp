/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
import { IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import BackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import CandidateCard from './CandidateCard';
import { vote } from '../../store/thunks/elections.thunk';

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
  const dispatch = useDispatch();

  const onClick = (candidateId) => {
    const electionId = useSelector(
      (state) => state.election.currentElection._id,
    );
    const userId = useSelector((state) => state.auth._id);
    dispatch(vote({ electionId, userId, candidateId }));
  };

  const onBackClick = () => {
    history.push('/election');
  };

  useEffect(() => {
    if (candidates.length === 0) {
      history.push('/');
    }
  });

  return (
    <>
      <IconButton onClick={onBackClick}>
        <BackIcon />
      </IconButton>
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
