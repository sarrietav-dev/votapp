import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';

// TODO: Map Election Cards.

const Dashboard = () => {
  useEffect(async () => {
    const response = await axios.get('http://localhost:5000/api/elections/');
    console.log(response.data);
  }, []);

  const elections = useSelector((state) => state.election.elections);

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <FabButton />
      <CreateElectionDialog />
      {elections.map((election) => (
        <ElectionCard title={election.title} position={election.position} />
      ))}
    </div>
  );
};

export default Dashboard;
