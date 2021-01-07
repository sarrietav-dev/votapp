import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Toolbar, AppBar, Typography, IconButton } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/Menu';

const Navbar = () => (
  <div className="appbar-wrapper">
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Typography variant="h4">Voteapp</Typography>
    </AppBar>
  </div>
);

export default Navbar;
