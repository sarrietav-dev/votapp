/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { raiseAlert } from '../alert.actions';
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

export const saveElectionThunk = (data) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/elections',
    data,
  })
    .then((response) => {
      dispatch(saveElection(response.data));
    })
    .catch((err) => {
      // TODO: Fix "title" is required.
      dispatch(
        raiseAlert({ variant: 'error', message: err.response.data.error }),
      );
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
