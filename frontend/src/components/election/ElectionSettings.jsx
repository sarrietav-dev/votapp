import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ElectionSettings = () => {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const isOpen = useSelector((state) => state.dialog.isOpen);

  return (
    <Dialog open={isOpen}>
      <form>
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
          <Button color="primary">Cancel</Button>
          <Button color="primary">Accept</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ElectionSettings;
