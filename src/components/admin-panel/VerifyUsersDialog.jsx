import { Dialog, DialogContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { generate } from 'shortid';
import UnverifiedUser from './UnverifiedUser';
import { fetchUnverifiedUsersThunk } from '../../store/thunks/verify.thunks';

const VerifyUsersDialog = ({ isOpen, onClose, unverifiedUsers }) => {
  const dispatch = useDispatch();

  if (unverifiedUsers.length === 0) {
    onClose();
  }

  useEffect(() => {
    dispatch(fetchUnverifiedUsersThunk());
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogContent>
        {unverifiedUsers.map((user) => (
          <UnverifiedUser data={user} key={generate()} />
        ))}
      </DialogContent>
    </Dialog>
  );
};

VerifyUsersDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  unverifiedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.string,
      _id: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      code: PropTypes.string,
    }),
  ).isRequired,
};

export default VerifyUsersDialog;
