import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { closeDialog } from '../../actions/fab.actions';
import { setOneElection } from '../../actions/election.actions';

const CreateElectionDialog = () => {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.fab.isOpen); // <--- Issue

  const handleClose = () => dispatch(closeDialog());
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/elections',
      data: {
        title,
        position,
      },
      // eslint-disable-next-line no-console
    }).catch((err) => console.log(err));

    if (response.status === 200) {
      dispatch(setOneElection({ title, position }));
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Create election</DialogTitle>
      <form action="" onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="election-title"
            label="Title"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="election-position"
            label="Position"
            type="text"
            fullWidth
            variant="filled"
            onChange={(e) => setPosition(e.target.value)}
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
