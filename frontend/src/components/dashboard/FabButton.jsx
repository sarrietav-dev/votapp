import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CreateElectionDialog from './CreateElectionDialog';

const useStyles = makeStyles(() => ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
}));

const FabButton = () => {
  const classes = useStyles();

  const handleClick = () => {};

  const handleClose = () => {};

  return (
    <Fab color="secondary" aria-label="add" className={classes.fab} onClick={handleClick}>
      <AddIcon />
    </Fab>
    <CreateElectionDialog />
  );
};

export default FabButton;
