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
import LanguageIcon from '@material-ui/icons/Language';
import PropTypes from 'prop-types';
import { raiseAlert } from '../../store/reducers/alerts.reducer';
import { closePanel } from '../../store/reducers/panel.reducer';
import VerifyUsersDialog from './VerifyUsersDialog';
import LocaleSelect from './LocaleSelect';

const VerifyUsersButton = ({ handleAddUserClick, itemText }) => (
  <ListItem button onClick={handleAddUserClick}>
    <ListItemIcon>
      <AddUser />
    </ListItemIcon>
    <ListItemText primary={itemText} />
  </ListItem>
);

const AdminPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const open = useSelector((state) => state.panel.open);
  const locales = useSelector((state) => state.locales.locale.adminPanel);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

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
          {isAdmin && (
            <VerifyUsersButton
              handleAddUserClick={handleAddUserClick}
              itemText={locales}
            />
          )}

          <ListItem>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <LocaleSelect />
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

VerifyUsersButton.propTypes = {
  handleAddUserClick: PropTypes.func.isRequired,
  itemText: PropTypes.string.isRequired,
};

export default AdminPanel;
