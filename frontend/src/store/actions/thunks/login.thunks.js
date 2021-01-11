import axios from 'axios';
import setAuthToken from '../auth-token.actions';

export default (email, password) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/login/',
    data: {
      email,
      password,
    },
  }).then((response) => dispatch(setAuthToken(response.data.token)));
};
