/* eslint-disable import/no-cycle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import serverUrl from './utils/server-url';
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

export const vote = createAsyncThunk(
  'elections/voteStatus',
  async (data, thunkAPI) => {
    const res = await axios
      .patch(`${serverUrl}/elections/vote/${data.electionId}`, {
        userId: data.userId,
        candidateId: data.candidateId,
      })
      .then((response) => {
        thunkAPI.dispatch(
          raiseAlert({ message: 'Ballot stored!', variant: 'success' }),
        );
        return response;
      })
      .catch((err) =>
        thunkAPI.dispatch(
          raiseAlert({ message: err.response.data.error, variant: 'error' }),
        ),
      );
    return res;
  },
);

export const endElection = createAsyncThunk(
  'elections/endElectionStatus',
  async (electionId, thunkAPI) => {
    const res = await axios
      .patch(`${serverUrl}/elections/end/${electionId}`)
      .then((response) => {
        thunkAPI.dispatch(
          raiseAlert({
            message: 'The election has ended successfully',
            variant: 'success',
          }),
        );
        return response;
      })
      .catch((err) => {
        thunkAPI.dispatch(
          raiseAlert({ message: err.response.data.error, variant: 'error' }),
        );
      });
    return res;
  },
);
