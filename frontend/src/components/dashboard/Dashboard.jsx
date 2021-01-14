import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';
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
      {elections.map((election) => (
        <ElectionCard
          title={election.title}
          position={election.position}
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default Dashboard;
