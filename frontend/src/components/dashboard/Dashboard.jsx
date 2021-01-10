import React from 'react';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';

const Dashboard = () => (
  <div className="dashboard-wrapper">
    <Navbar />
    <ElectionCard />
    <FabButton />
    <CreateElectionDialog />
  </div>
);

export default Dashboard;
