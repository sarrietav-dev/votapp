import React from 'react';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';

const Dashboard = () => (
  <div className="dashboard-wrapper">
    <Navbar />
    <FabButton />
    <CreateElectionDialog />
    <ElectionCard />
  </div>
);

export default Dashboard;
