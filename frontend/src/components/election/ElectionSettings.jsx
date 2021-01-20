import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';

const ElectionSettings = () => (
  <Dialog>
    <DialogTitle>Election Title</DialogTitle>
    <DialogContent>
      <TextField
        margin="dense"
        label="Title"
        type="text"
        fullWidth
        variant="filled"
      />
      <TextField
        margin="dense"
        label="Position"
        type="text"
        fullWidth
        variant="filled"
      />
    </DialogContent>
    <DialogActions>
      <Button color="primary">Cancel</Button>
      <Button color="primary">Accept</Button>
    </DialogActions>
  </Dialog>
);

export default ElectionSettings;
