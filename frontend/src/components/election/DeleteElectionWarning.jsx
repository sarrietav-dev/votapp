import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';

const DeleteElectionWarning = () => (
  <Dialog>
    <DialogTitle>Are you sure you want to delete this?</DialogTitle>
    <DialogContent>This can&apost be undone</DialogContent>
    <DialogActions>
      <Button>Cancel</Button>
      <Button>Continue</Button>
    </DialogActions>
  </Dialog>
);

export default DeleteElectionWarning;
