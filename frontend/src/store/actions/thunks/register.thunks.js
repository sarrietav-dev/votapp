/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import { raiseAlert } from '../alert.actions';

export default (data) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/users/',
    data,
  })
    .then((res) => {
      console.log(data);
      console.log(res.status);
      console.log(res.data);
      if (Object.prototype.hasOwnProperty.call(data, 'is_admin')) {
        dispatch(
          raiseAlert({
            message: 'New admin has been created',
            variant: 'success',
          }),
        );
      } else {
        dispatch(
          raiseAlert({
            message: 'Request sent!',
            variant: 'success',
          }),
        );
      }
    })
    .catch((error) =>
      dispatch(
        raiseAlert({ message: error.response.data.error, variant: 'error' }),
      ),
    );
};
