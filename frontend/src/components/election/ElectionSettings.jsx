/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { Controller, useForm } from 'react-hook-form';
import { closeDialog } from '../../store/reducers/dialogs.reducer';
import { editElectionThunk } from '../../store/thunks/election.thunks';
import DeleteElectionWarning from './DeleteElectionWarning';
import { raiseAlert } from '../../store/reducers/alerts.reducer';

const ElectionSettings = () => {
  const { handleSubmit, control } = useForm();
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const currentElection = useSelector(
    (state) => state.election.currentElection,
  );

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      dispatch(editElectionThunk({ ...currentElection, ...data }));
      dispatch(closeDialog());
    } catch (err) {
      dispatch(raiseAlert({ variant: 'error', message: err }));
    }
  };

  return (
    <div className="election-settings-wrapper">
      <DeleteElectionWarning
        open={isWarningOpen}
        setIsWarningOpen={setIsWarningOpen}
      />
      <Dialog open={isOpen} fullWidth maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Election Title</DialogTitle>
          <DialogContent>
            <Grid container direction="column">
              <Grid item>
                <Controller
                  name="title"
                  as={
                    <TextField
                      margin="dense"
                      label="Title"
                      type="text"
                      fullWidth
                      variant="filled"
                      name="title"
                    />
                  }
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    min: 6,
                  }}
                />
              </Grid>
              <Grid item>
                <Controller
                  name="position"
                  as={
                    <TextField
                      margin="dense"
                      label="Position"
                      type="text"
                      fullWidth
                      variant="filled"
                      name="position"
                    />
                  }
                  rules={{
                    required: true,
                    min: 6,
                  }}
                  defaultValue=""
                  control={control}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <IconButton onClick={() => setIsWarningOpen(true)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <div>
                  <Button
                    color="primary"
                    onClick={() => dispatch(closeDialog())}
                  >
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Accept
                  </Button>
                </div>
              </Grid>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default ElectionSettings;
