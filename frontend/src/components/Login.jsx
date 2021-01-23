/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line object-curly-newline
import {
  Button,
  Container,
  FormControl,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { loginThunk } from '../store/actions/thunks/auth.thunks';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

function Login() {
  const { handleSubmit, control } = useForm();

  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.authToken);

  useEffect(() => {
    if (authToken !== '') {
      history.push('/');
    }
  }, [authToken]);

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
    history.push('/');
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <FormControl>
                  <Controller
                    name="email"
                    as={
                      <TextField
                        variant="outlined"
                        name="email"
                        label="Email"
                      />
                    }
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      min: 6,
                      max: 1024,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl>
                  <Controller
                    name="password"
                    as={
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                      />
                    }
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      min: 6,
                      max: 1024,
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <Button color="primary" type="submit" variant="contained">
                  Log In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;