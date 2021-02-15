/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from '../FabButton';
import { fetchElectionsThunk } from '../../store/thunks/election.thunks';
import { raiseAlert } from '../../store/reducers/alerts.reducer';
import Blob from '../Blob';

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
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const locale = useSelector((state) => state.locales.locale.dashboard);

  return (
    <div className="dashboard-wrapper">
      {isAdmin && <FabButton />}
      <Navbar />
      <CreateElectionDialog />
      {elections.length === 0 && <Blob text={locale.blob} />}
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        style={{ margin: 0 }}
        xs={12}>
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
