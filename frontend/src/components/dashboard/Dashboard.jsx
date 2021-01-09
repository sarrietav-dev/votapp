import React from 'react';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import FabButton from './FabButton';

const Dashboard = () => (
  <div className="dashboard-wrapper">
    <Navbar />
    <FabButton />
    <CreateElectionDialog />
  </div>
);

export default Dashboard;
