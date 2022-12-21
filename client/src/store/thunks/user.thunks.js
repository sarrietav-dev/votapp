/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import serverUrl from './utils/server-url';
import { raiseAlert } from '../reducers/alerts.reducer';

const fetchUsers = createAsyncThunk(
  'users/fetchUsersStatus',
  async (thunkAPI) => {
    const res = axios
      .get(`${serverUrl}/users/`)
      .then((response) => response.data)
      .catch((err) =>
        thunkAPI.dispatch(
          raiseAlert({ message: err.response.data.error, variant: 'error' })
        )
      );
    return res;
  }
);

export default fetchUsers;
