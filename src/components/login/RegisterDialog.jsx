/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
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
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../../store/reducers/dialogs.reducer';
import registerThunk from '../../store/thunks/register.thunks';

const RegisterDialog = () => {
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const locales = useSelector((state) => state.locales.locale.registerDialog);
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registerThunk(data));
    dispatch(closeDialog());
  };
  const handleCancel = () => dispatch(closeDialog());

  return (
    <Dialog open={isOpen} maxWidth="xs" fullWidth>
      <DialogTitle>{locales.dialogTitle}</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={3} direction="column">
            <Grid item xs={12}>
              <Controller
                name="name"
                as={
                  <TextField name="name" label={locales.yourName} fullWidth />
                }
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
                  <TextField
                    type="number"
                    name="code"
                    label={locales.code}
                    fullWidth
                  />
                }
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  maxLength: 10,
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
                defaultValue=""
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
                    label={locales.password}
                    fullWidth
                  />
                }
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
            </Grid>
            <Grid item xs>
              <Controller
                name="gender"
                as={
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">{locales.gender}</FormLabel>
                    <RadioGroup aria-label="gender" name="gender">
                      <FormControlLabel
                        value="female"
                        label={locales.female}
                        control={<Radio />}
                      />
                      <FormControlLabel
                        value="male"
                        label={locales.male}
                        control={<Radio />}
                      />
                    </RadioGroup>
                  </FormControl>
                }
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
            </Grid>
            <Grid item xs>
              <Controller
                name="career"
                as={
                  <FormControl style={{ minWidth: 120 }}>
                    <InputLabel>Career</InputLabel>
                    <Select fullWidth>
                      <MenuItem value="Computer Science">
                        Computer Science
                      </MenuItem>
                      <MenuItem value="Chemistry Engineering">
                        Chemistry Engineering
                      </MenuItem>
                      <MenuItem value="Civil Engineering">
                        Civil Engineering
                      </MenuItem>
                      <MenuItem value="Medicine">Medicine</MenuItem>
                    </Select>
                  </FormControl>
                }
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary" variant="outlined">
            {locales.cancel}
          </Button>
          <Button type="submit" color="primary" variant="contained">
            {locales.send}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RegisterDialog;
