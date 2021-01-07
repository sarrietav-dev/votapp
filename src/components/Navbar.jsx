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

const useStyles = makeStyles(() => ({
  navbarSettings: {
    marginLeft: 'auto',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className="appbar-wrapper">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <HowToVoteIcon />
          </IconButton>
          <Typography variant="h5">Voteapp</Typography>
          <div className={classes.navbarSettings}>
            <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
