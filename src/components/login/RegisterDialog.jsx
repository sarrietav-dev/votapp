/* eslint-disable react/jsx-wrap-multilines */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../store/actions/dialog.actions';

const RegisterDialog = () => {
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => console.log(data);
  const handleCancel = () => dispatch(closeDialog());

  return (
    <Dialog open={isOpen} maxWidth="xs" fullWidth>
      <DialogTitle>Fill request</DialogTitle>
      <form onSubmit={onSubmit(handleSubmit)}>
        <DialogContent>
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <Controller
                name="name"
                as={<TextField name="name" label="Your name" fullWidth />}
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                }}
              />
            </Grid>
            <Grid item xs>
              <Controller
                name="code"
                as={
                  <TextField type="number" name="code" label="Code" fullWidth />
                }
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  max: 10,
                }}
              />
            </Grid>
            <Grid item xs>
              <Controller
                name="email"
                as={
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    fullWidth
                  />
                }
                control={control}
                rules={{ required: true }}
              />
            </Grid>
            <Grid item xs>
              <Controller
                name="password"
                as={
                  <TextField
                    type="password"
                    name="password"
                    label="Password"
                    fullWidth
                  />
                }
                control={control}
                rules={{ required: true }}
              />
            </Grid>
            <Grid item xs>
              <Controller
                name="gender"
                as={
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender">
                      <FormControlLabel
                        value="female"
                        label="Female"
                        control={<Radio />}
                      />
                      <FormControlLabel
                        value="male"
                        label="Male"
                        control={<Radio />}
                      />
                    </RadioGroup>
                  </FormControl>
                }
                control={control}
                rules={{ required: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RegisterDialog;
