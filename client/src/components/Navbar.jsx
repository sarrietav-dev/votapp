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
import BackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';
import { logoutThunk } from '../store/thunks/auth.thunks';
import { emptyCurrentElection } from '../store/reducers/elections.reducer';
import { openPanel } from '../store/reducers/panel.reducer';

const useStyles = makeStyles(() => ({
  navbarRightButtons: {
    marginLeft: 'auto',
  },
  navbar: {
    marginBottom: 20,
  },
}));

const Navbar = ({ actionIcon, path }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutThunk());
    history.push('/login');
  };

  const handleOnClick = () => {
    if (actionIcon === 'back') {
      dispatch(emptyCurrentElection());
      history.push(path.from);
    } else {
      history.push('/');
    }
  };

  const openPanelHandler = () => {
    dispatch(openPanel());
  };

  return (
    <div className="appbar-wrapper">
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleOnClick}>
            {actionIcon === 'back' ? <BackIcon /> : <HowToVoteIcon />}
          </IconButton>
          <Typography variant="h5">Voteapp</Typography>
          <div className={classes.navbarRightButtons}>
            <Tooltip title="Admin Panel">
              <IconButton color="inherit" onClick={openPanelHandler}>
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

Navbar.defaultProps = {
  actionIcon: 'home',
  path: { from: '' },
};

Navbar.propTypes = {
  actionIcon: PropTypes.string,
  path: PropTypes.shape({
    from: PropTypes.string,
  }),
};

export default Navbar;
