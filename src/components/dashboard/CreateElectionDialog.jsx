import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

const CreateElectionDialog = () => (
  <Dialog open={} onClose={}>
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

export default CreateElectionDialog;
