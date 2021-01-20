/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import {
  deleteElection,
  editElection,
  fetchElections,
  saveElection,
} from '../election.actions';

export const fetchElectionsThunk = () => async (dispatch) => {
  await axios
    .get('http://localhost:5000/api/elections/')
    .then((response) => dispatch(fetchElections(response.data)));
};

export const saveElectionThunk = (title, position) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/elections',
    data: {
      title,
      position,
    },
  }).then((response) => {
    dispatch(saveElection(response.data));
  });
};

export const editElectionThunk = (data) => async (dispatch) => {
  await axios({
    method: 'PATCH',
    url: `http://localhost:5000/api/elections/${data._id}`,
    data,
  }).then(() => dispatch(editElection(data)));
};

export const deleteElectionThunk = (id) => async (dispatch) => {
  await axios({
    method: 'DELETE',
    url: `http://localhost:5000/api/elections/${id}`,
  }).then(() => dispatch(deleteElection(id)));
};
