/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-undef */
import axios from 'axios';
import { raiseAlert } from '../alert.actions';
import { logOut, setAuthToken } from '../auth-token.actions';

export const loginThunk = (data) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/login/',
    data,
  })
    .then((response) => {
      const payload = response.data.token;
      localStorage.setItem('AUTH_TOKEN', payload);
      dispatch(setAuthToken(payload));
    })
    .catch((err) =>
      dispatch(
        raiseAlert({ variant: 'error', message: err.response.data.error }),
      ),
    );
};

export const logoutThunk = () => (dispatch) => {
  localStorage.removeItem('AUTH_TOKEN');
  dispatch(logOut());
};
