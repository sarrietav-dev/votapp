/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
import axios from 'axios';
import { verify } from 'jsonwebtoken';
import serverUrl from './utils/server-url';
import { raiseAlert } from '../reducers/alerts.reducer';
import { logOut, setAuthToken, setData } from '../reducers/auth-token.reducer';

export const loginThunk = (data) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${serverUrl}/login/`,
    data,
  })
    .then((response) => {
      const payload = response.data.token;
      localStorage.setItem('AUTH_TOKEN', payload);
      dispatch(setAuthToken(payload));

      const decodedToken = verify(payload, process.env.REACT_APP_TOKEN_SECRET);
      dispatch(setData(decodedToken));
    })
    .catch((err) => {
      dispatch(
        raiseAlert({ variant: 'error', message: err.response.data.error }),
      );
    });
};

export const logoutThunk = () => (dispatch) => {
  localStorage.removeItem('AUTH_TOKEN');
  dispatch(logOut());
};
