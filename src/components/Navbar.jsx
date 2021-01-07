import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Toolbar, AppBar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => (
  <div className="appbar-wrapper">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">Voteapp</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Navbar;
