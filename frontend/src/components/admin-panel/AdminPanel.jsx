import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddUser from '@material-ui/icons/GroupAdd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { raiseAlert } from '../../store/reducers/alerts.reducer';
import { closePanel } from '../../store/reducers/panel.reducer';
import VerifyUsersDialog from './VerifyUsersDialog';
import LocaleSelect from './LocaleSelect';

const AdminPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const open = useSelector((state) => state.panel.open);

  const unverifiedUsersLength = useSelector(
    (state) => state.unverified.unverifiedUsers.length,
  );

  const handleAddUserClick = () => {
    if (unverifiedUsersLength === 0) {
      dispatch(
        raiseAlert({
          message: 'There are no users left to check',
          variant: 'warning',
        }),
      );
    } else {
      setOpenDialog(true);
    }
  };

  return (
    <>
      <Drawer open={open} anchor="right" onClose={() => dispatch(closePanel())}>
        <List>
          <ListItem button onClick={handleAddUserClick}>
            <ListItemIcon>
              <AddUser />
            </ListItemIcon>
            <ListItemText primary="Verify users" />
          </ListItem>
        </List>
        <LocaleSelect />
      </Drawer>
      <VerifyUsersDialog
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </>
  );
};

export default AdminPanel;
