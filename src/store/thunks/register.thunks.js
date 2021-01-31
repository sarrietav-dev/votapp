/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';
import serverUrl from '../../utils/server-url';
import { raiseAlert } from '../reducers/alerts.reducer';

export default (data) => async (dispatch) => {
  await axios({
    method: 'POST',
    url: `${serverUrl}/users/`,
    data,
  })
    .then(() => {
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
