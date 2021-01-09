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

  const handleClose = () => dispatch(closeDialog());

  return (
    <Dialog open={isOpen} onClose={handleClose}>
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
        <TextField
          autoFocus
          margin="dense"
          id="election-position"
          label="Position"
          type="text"
          fullWidth
          variant="filled"
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateElectionDialog;
