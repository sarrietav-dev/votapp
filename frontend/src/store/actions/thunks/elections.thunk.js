import axios from 'axios';
import { fetchElections, setOneElection } from '../election.actions';

export const fetchElectionsThunk = () => async (dispatch) => {
  await axios
    .get('http://localhost:5000/api/elections/')
    .then((response) => dispatch(fetchElections(response.data)));
};

export const saveElection = (title, position) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/elections',
    data: {
      title,
      position,
    },
  }).then((response) => {
    dispatch(setOneElection(response.data));
  });
};
