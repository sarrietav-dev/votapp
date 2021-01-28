import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AddUser from '@material-ui/icons/GroupAdd';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closePanel } from '../store/actions/panel.actions';

const AdminPanel = ({ open }) => {
  const dispatch = useDispatch();
  return (
    <Drawer open={open} onClose={() => dispatch(closePanel())}>
      <List>
        <ListItem>
          <ListItemIcon>
            <AddUser />
          </ListItemIcon>
          <ListItemText primary="Verify users" />
        </ListItem>
      </List>
    </Drawer>
  );
};

AdminPanel.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default AdminPanel;
