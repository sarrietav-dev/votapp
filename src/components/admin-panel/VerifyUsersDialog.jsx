import { Dialog, DialogContent } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import UnverifiedUser from './UnverifiedUser';

const VerifyUsersDialog = ({ isOpen, onClose }) => (
  <Dialog open={isOpen} onClose={onClose} fullWidth>
    <DialogContent>
      <UnverifiedUser
        data={{
          name: 'Sebastian',
        }}
      />
    </DialogContent>
  </Dialog>
);

VerifyUsersDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VerifyUsersDialog;
