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

const AdminPanel = ({ open, close }) => (
  <Drawer open={open} onClose={close}>
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

AdminPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default AdminPanel;
