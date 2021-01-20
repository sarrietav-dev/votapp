import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const message = "This can't be undone";

const DeleteElectionWarning = ({ open, setIsWarningOpen }) => (
  <Dialog open={open}>
    <DialogTitle>Are you sure you want to delete this?</DialogTitle>
    <DialogContent>{message}</DialogContent>
    <DialogActions>
      <Button onClick={() => setIsWarningOpen(false)} color="secondary">
        Cancel
      </Button>
      <Button>Continue</Button>
    </DialogActions>
  </Dialog>
);

DeleteElectionWarning.propTypes = {
  open: PropTypes.bool.isRequired,
  setIsWarningOpen: PropTypes.func.isRequired,
};

export default DeleteElectionWarning;
