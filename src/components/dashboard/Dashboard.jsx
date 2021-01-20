/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from '../FabButton';
import { fetchElectionsThunk } from '../../store/actions/thunks/elections.thunk';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(fetchElectionsThunk());
  }, []);

  const elections = useSelector((state) => state.election.elections);

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <FabButton />
      <CreateElectionDialog />
      <Grid container spacing={5} xs={12} justify="center" alignItems="center">
        {elections.map((election) => (
          <Grid item>
            <ElectionCard
              data={{
                _id: election._id,
                title: election.title,
                position: election.position,
              }}
              key={uuid()}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
