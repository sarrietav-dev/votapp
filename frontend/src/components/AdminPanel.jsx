import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddUser from '@material-ui/icons/GroupAdd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePanel } from '../store/actions/panel.actions';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.panel.open);
  return (
    <Drawer open={open} anchor="right" onClose={() => dispatch(closePanel())}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <AddUser />
          </ListItemIcon>
          <ListItemText primary="Verify users" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminPanel;
