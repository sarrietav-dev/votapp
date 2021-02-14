import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { closeDialog } from '../../store/reducers/dialogs.reducer';
import { deleteElectionThunk } from '../../store/thunks/election.thunks';
import { raiseAlert } from '../../store/reducers/alerts.reducer';

const DeleteElectionWarning = ({ open, setIsWarningOpen }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.election.currentElection._id);
  const locales = useSelector(
    (state) => state.locales.locale.deleteElectionWarning
  );
  const history = useHistory();

  const handleClick = () => {
    try {
      dispatch(deleteElectionThunk(id));
      setIsWarningOpen(false);
      dispatch(closeDialog());
      history.push('/');
    } catch (err) {
      dispatch(raiseAlert({ variant: 'error', message: err }));
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{locales.dialogTitle}</DialogTitle>
      <DialogContent>{locales.dialogContent}</DialogContent>
      <DialogActions>
        <Button onClick={() => setIsWarningOpen(false)} color="secondary">
          {locales.cancel}
        </Button>
        <Button onClick={handleClick}>{locales.continue}</Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteElectionWarning.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsWarningOpen: PropTypes.func.isRequired,
};

export default DeleteElectionWarning;
