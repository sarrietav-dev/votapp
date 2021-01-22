/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from '../FabButton';
import { fetchElectionsThunk } from '../../store/actions/thunks/elections.thunk';
import { raiseAlert } from '../../store/actions/alert.actions';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      dispatch(fetchElectionsThunk());
    } catch (err) {
      dispatch(raiseAlert({ variant: 'error', message: err }));
    }
  }, []);

  const elections = useSelector((state) => state.election.elections);

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <FabButton />
      <CreateElectionDialog />
      <Grid container spacing={5} justify="center" alignItems="center">
        {elections.map((election) => (
          <Grid item key={shortid.generate()}>
            <ElectionCard
              data={{
                _id: election._id,
                title: election.title,
                position: election.position,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
