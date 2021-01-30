/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import serverUrl from '../../utils/server-url';
import { raiseAlert } from '../reducers/alerts.reducer';
import {
  deleteElection,
  editElection,
  fetchElections,
  saveElection,
} from '../reducers/elections.reducer';

export const fetchElectionsThunk = () => async (dispatch) => {
  await axios
    .get(`${serverUrl}/elections/`)
    .then((response) => dispatch(fetchElections(response.data)));
};

export const saveElectionThunk = (data) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${serverUrl}/elections`,
    data,
  })
    .then((response) => {
      dispatch(saveElection(response.data));
    })
    .catch((err) => {
      dispatch(
        raiseAlert({ variant: 'error', message: err.response.data.error }),
      );
    });
};

export const editElectionThunk = (data) => async (dispatch) => {
  await axios({
    method: 'PATCH',
    url: `${serverUrl}/elections/${data._id}`,
    data,
  })
    .then(() => dispatch(editElection(data)))
    .catch((err) => {
      dispatch(
        raiseAlert({ variant: 'error', message: err.response.data.error }),
      );
    });
};

export const deleteElectionThunk = (id) => async (dispatch) => {
  await axios({
    method: 'DELETE',
    url: `${serverUrl}/elections/${id}`,
  })
    .then(() => dispatch(deleteElection(id)))
    .catch((err) => {
      dispatch(
        raiseAlert({ variant: 'error', message: err.response.data.error }),
      );
    });
};
