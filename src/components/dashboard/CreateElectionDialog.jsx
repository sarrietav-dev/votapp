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
import { closeDialog } from '../../actions/fab.actions';

const CreateElectionDialog = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.fab.isOpen); // <--- Issue

  return (
    <Dialog open={isOpen} onClose={() => dispatch(closeDialog())}>
      <DialogTitle>Create election</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="election-title"
          label="Title"
          type="text"
          fullWidth
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateElectionDialog;
