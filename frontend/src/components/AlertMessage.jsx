import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import PropTypes from 'prop-types';

const AlertMessage = ({ type }) => (
  <Snackbar autoHideDuration={6000}>
    <Alert elevation={6} variant="filled" severity={type} />
  </Snackbar>
);

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AlertMessage;
