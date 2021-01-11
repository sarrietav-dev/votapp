import axios from 'axios';
import { setElections } from '../election.actions';

export const getAllElections = () => async (dispatch) => {
  await axios
    .get('http://localhost:5000/api/elections/')
    .then((response) => dispatch(setElections(response.data)))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
};

export const saveElection = () => () => {};
