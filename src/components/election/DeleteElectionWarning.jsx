/* eslint-disable no-underscore-dangle */
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
import { deleteElectionThunk } from '../../store/thunks/elections.thunk';
import { raiseAlert } from '../../store/reducers/alerts.reducer';

const message = "This can't be undone";

const DeleteElectionWarning = ({ open, setIsWarningOpen }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.election.currentElection._id);
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
      <DialogTitle>Are you sure you want to delete this?</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={() => setIsWarningOpen(false)} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleClick}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteElectionWarning.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsWarningOpen: PropTypes.func.isRequired,
};

export default DeleteElectionWarning;
