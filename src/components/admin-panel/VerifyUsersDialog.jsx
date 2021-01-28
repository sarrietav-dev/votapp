import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const VerifyUsersDialog = ({ isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogContent>
      <div className="" />
    </DialogContent>
  </Dialog>
);

VerifyUsersDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VerifyUsersDialog;
