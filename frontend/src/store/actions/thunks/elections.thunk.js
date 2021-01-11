import axios from 'axios';
import { setElections, setOneElection } from '../election.actions';

export const getAllElections = () => async (dispatch) => {
  await axios
    .get('http://localhost:5000/api/elections/')
    .then((response) => dispatch(setElections(response.data)))
    .catch((err) => console.log(err));
};

export const saveElection = (title, position) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/elections',
    data: {
      title,
      position,
    },
  })
    .then((response) => {
      dispatch(setOneElection(response.data));
    })
    .catch((err) => console.log(err));
};
