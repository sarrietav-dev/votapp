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
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const RegisterDialog = () => {
  const isOpen = useSelector((state) => state.dialog.isOpen);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>Fill request</DialogTitle>
      <form onSubmit={onSubmit(handleSubmit)}>
        <DialogContent>
          <Controller
            name="name"
            as={<TextField variant="outlined" name="name" label="Your name" />}
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
          />
          <Controller
            name="code"
            as={
              <TextField
                type="number"
                variant="outlined"
                name="code"
                label="Code"
              />
            }
            control={control}
            defaultValue=""
            rules={{
              required: true,
            }}
          />
          <Controller
            name="email"
            as={<TextField type="email" name="email" label="Email" />}
            control={control}
            rules={{ required: true }}
          />
          <Controller
            name="password"
            as={<TextField type="password" name="password" label="Password" />}
            control={control}
            rules={{ required: true }}
          />
          <Controller
            name="gender"
            as={
              <FormControl component="fieldset">
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
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button type="submit">Send</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RegisterDialog;
