import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { closeDialog } from '../../store/actions/dialog.actions';
import { saveElectionThunk } from '../../store/actions/thunks/elections.thunk';
import { raiseAlert } from '../../store/actions/alert.actions';

const CreateElectionDialog = () => {
  const { createElection, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.isOpen);

  const handleClose = () => dispatch(closeDialog());
  const onSubmit = (data) => {
    try {
      dispatch(saveElectionThunk(data));
      handleClose();
    } catch (err) {
      dispatch(raiseAlert({ variant: 'error', message: err }));
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Create election</DialogTitle>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="election-title"
            label="Title"
            type="text"
            fullWidth
            variant="filled"
            name="title"
            ref={createElection}
          />
          <TextField
            autoFocus
            margin="dense"
            id="election-position"
            label="Position"
            type="text"
            fullWidth
            variant="filled"
            name="position"
            ref={createElection}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateElectionDialog;
