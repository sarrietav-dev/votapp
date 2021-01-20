/* eslint-disable no-underscore-dangle */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../store/actions/dialog.actions';
import { editElectionThunk } from '../../store/actions/thunks/elections.thunk';

const ElectionSettings = () => {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const currentElection = useSelector(
    (state) => state.election.currentElection,
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(editElectionThunk({ ...currentElection, title, position }));
    } catch (err) {
      console.log(err);
    }
    dispatch(closeDialog());
  };

  return (
    <Dialog open={isOpen}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Election Title</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Position"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e) => setPosition(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => dispatch(closeDialog())}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Accept
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ElectionSettings;
