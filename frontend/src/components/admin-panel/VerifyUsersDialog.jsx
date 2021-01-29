import { Dialog, DialogContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import UnverifiedUser from './UnverifiedUser';
import { fetchUnverifiedUsersThunk } from '../../store/actions/thunks/verify.thunks';

const VerifyUsersDialog = ({ isOpen, onClose }) => {
  const unverifiedUsers = useSelector(
    (state) => state.unverified.unverifiedUsers,
  );
  const dispatch = useDispatch();

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
};

export default VerifyUsersDialog;
