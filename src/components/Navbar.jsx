import React from 'react';
import {
  Toolbar,
  AppBar,
  Typography,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  navbarSettings: {
    marginLeft: 'auto',
  },
}));

const Navbar = () => (
  <div className="appbar-wrapper">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <HowToVoteIcon />
        </IconButton>
        <Typography variant="h5">Voteapp</Typography>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
