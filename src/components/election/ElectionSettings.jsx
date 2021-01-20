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

const ElectionSettings = () => {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`${title} and ${position}`);
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
          <Button color="primary" type="submit">Accept</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ElectionSettings;
