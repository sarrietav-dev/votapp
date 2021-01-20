import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DeleteElectionWarning = ({ isOpen }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(isOpen), []);

  return (
    <Dialog open={open}>
      <DialogTitle>Are you sure you want to delete this?</DialogTitle>
      <DialogContent>This can&apost be undone</DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button>Continue</Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteElectionWarning.defaultProps = {
  isOpen: false,
};

DeleteElectionWarning.propTypes = {
  isOpen: PropTypes.bool,
};

export default DeleteElectionWarning;
