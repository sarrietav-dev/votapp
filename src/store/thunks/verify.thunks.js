/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import serverUrl from './utils/server-url';
import { raiseAlert } from '../reducers/alerts.reducer';
import {
  denyUser,
  fetchUnverifiedUsers,
  verifyUser,
} from '../reducers/unverified-users.reducer';

export const fetchUnverifiedUsersThunk = () => async (dispatch) => {
  await axios({
    method: 'GET',
    url: `${serverUrl}/users/unverified`,
  })
    .then((response) => {
      const { data } = response;
      dispatch(fetchUnverifiedUsers(data));
    })
    .catch((error) =>
      dispatch(
        raiseAlert({
          message: error.response.data.error,
          variant: 'error',
        })
      )
    );
};

export const verifyUserThunk = (id) => async (dispatch) => {
  await axios({
    method: 'PATCH',
    url: `${serverUrl}/users/verify/${id}`,
  })
    .then((response) => {
      const { data } = response;
      dispatch(verifyUser(id));

      raiseAlert({
        message: data.message,
        variant: 'success',
      });
    })
    .catch((error) => {
      dispatch(
        raiseAlert({
          message: error.response.data.error,
          variant: 'error',
        })
      );
    });
};

export const denyUserThunk = (id) => async (dispatch) => {
  await axios({
    method: 'DELETE',
    url: `${serverUrl}/users/deny/${id}`,
  })
    .then((response) => {
      const { data } = response;
      dispatch(denyUser(id));

      raiseAlert({
        message: data.message,
        variant: 'success',
      });
    })
    .catch((error) => {
      dispatch(
        raiseAlert({
          message: error.response.data.error,
          variant: 'error',
        })
      );
    });
};
