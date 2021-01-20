import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../store/actions/dialog.actions';

const DeleteElectionWarning = () => {
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const dispatch = useDispatch();

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Are you sure you want to delete this?</DialogTitle>
      <DialogContent>This can&apost be undone</DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(closeDialog())}>Cancel</Button>
        <Button>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteElectionWarning;
