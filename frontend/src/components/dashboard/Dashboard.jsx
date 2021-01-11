import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';

// TODO: Map Election Cards.

const Dashboard = () => {
  const elections = useSelector((state) => state.elections.elections);

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <FabButton />
      <CreateElectionDialog />
      <ElectionCard election={elections} />
    </div>
  );
};

export default Dashboard;
