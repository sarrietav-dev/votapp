import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import CreateElectionDialog from './CreateElectionDialog';
import { openDialog } from '../../actions/fab.actions';

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
  const dispatch = useDispatch();

  return (
    <div className="fab-wrapper">
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={() => dispatch(openDialog())}
      >
        <AddIcon />
      </Fab>
      <CreateElectionDialog />
    </div>
  );
};

export default FabButton;
