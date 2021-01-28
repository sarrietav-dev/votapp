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
import { closePanel } from '../../store/actions/panel.actions';
import VerifyUsersDialog from './VerifyUsersDialog';

const AdminPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const open = useSelector((state) => state.panel.open);
  return (
    <>
      <Drawer open={open} anchor="right" onClose={() => dispatch(closePanel())}>
        <List>
          <ListItem button onClick={() => setOpenDialog(true)}>
            <ListItemIcon>
              <AddUser />
            </ListItemIcon>
            <ListItemText primary="Verify users" />
          </ListItem>
        </List>
      </Drawer>
      <VerifyUsersDialog
        isOpen={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </>
  );
};

export default AdminPanel;
