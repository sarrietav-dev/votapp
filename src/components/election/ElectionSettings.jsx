/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { Controller, useForm } from 'react-hook-form';
import { closeDialog } from '../../store/actions/dialog.actions';
import { editElectionThunk } from '../../store/actions/thunks/elections.thunk';
import DeleteElectionWarning from './DeleteElectionWarning';
import { raiseAlert } from '../../store/actions/alert.actions';

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
      <Dialog open={isOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Election Title</DialogTitle>
          <DialogContent>
            <FormControl>
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
              />
            </FormControl>
            <FormControl>
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
                control={control}
              />
            </FormControl>
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
