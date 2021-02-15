import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../store/reducers/alerts.reducer';

const AlertMessage = () => {
  const { open, message, variant } = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <Snackbar autoHideDuration={6000} open={open} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        severity={variant}
        onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
