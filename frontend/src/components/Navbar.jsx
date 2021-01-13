import React from 'react';
import {
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutThunk } from '../store/actions/thunks/auth.thunks';

const useStyles = makeStyles(() => ({
  navbarRightButtons: {
    marginLeft: 'auto',
  },
  navbar: {
    marginBottom: 20,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutThunk());
    history.push('/login');
  };

  return (
    <div className="appbar-wrapper">
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <HowToVoteIcon />
          </IconButton>
          <Typography variant="h5">Voteapp</Typography>
          <div className={classes.navbarRightButtons}>
            <Tooltip title="Admin Panel">
              <IconButton color="inherit">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton color="inherit" onClick={handleLogout}>
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
