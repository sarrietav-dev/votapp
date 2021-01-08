import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const FabButton = () => (
  <Fab color="secondary" aria-label="add">
    <AddIcon />
  </Fab>
);

export default FabButton;
