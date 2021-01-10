import React, { useState } from 'react';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';

// TODO: Map Election Cards.

const Dashboard = () => {
  const [elections, setElections] = useState();

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <FabButton />
      <CreateElectionDialog />
      <ElectionCard />
    </div>
  );
};

export default Dashboard;
