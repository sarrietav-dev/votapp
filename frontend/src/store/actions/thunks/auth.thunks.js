import axios from 'axios';
import { setAuthToken } from '../auth-token.actions';

export const loginThunk = (email, password) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/login/',
    data: {
      email,
      password,
    },
  }).then((response) => {
    const payload = response.data.token;
    // eslint-disable-next-line no-undef
    localStorage.setItem('AUTH_TOKEN', payload);
    dispatch(setAuthToken(payload));
  });
};

export const logoutThunk = () => (dispatch) => {
  localStorage.removeItem('AUTH_TOKEN');
};
