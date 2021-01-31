/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { closeDialog } from '../../store/reducers/dialogs.reducer';
import { saveElectionThunk } from '../../store/thunks/elections.thunk';
import UserSelector from './UserSelector';
import fetchUsers from '../../store/thunks/user.thunks';

const CreateElectionDialog = () => {
  const { handleSubmit, control } = useForm();
  const [isChecked] = useState(true);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const selectedCandidates = useSelector(
    (state) => state.election.selectedCandidates,
  );

  const handleClose = () => dispatch(closeDialog());
  const onSubmit = (data) => {
    dispatch(saveElectionThunk({ ...data, candidates: selectedCandidates }));
    handleClose();
  };

  useEffect(() => dispatch(fetchUsers()), []);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="xs">
      <DialogTitle>Create election</DialogTitle>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Controller
                name="title"
                as={
                  <TextField
                    autoFocus
                    margin="dense"
                    id="election-title"
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
                    autoFocus
                    margin="dense"
                    id="election-position"
                    label="Position"
                    type="text"
                    fullWidth
                    variant="filled"
                    name="position"
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
              <FormControlLabel
                disabled
                control={<Switch checked={isChecked} />}
                label="Select candidates beforehand"
              />
            </Grid>
            {isChecked && (
              <Grid item>
                <UserSelector />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" type="submit">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateElectionDialog;
