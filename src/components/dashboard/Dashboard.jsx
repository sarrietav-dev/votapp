import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Navbar from '../Navbar';
import CreateElectionDialog from './CreateElectionDialog';
import ElectionCard from './ElectionCard';
import FabButton from './FabButton';
import { setElections } from '../../store/actions/election.actions';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    await axios
      .get('http://localhost:5000/api/elections/')
      .then((response) => dispatch(setElections(response.data)))
      .catch((err) => console.log(err));
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
