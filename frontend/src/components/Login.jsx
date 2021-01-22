import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line object-curly-newline
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginThunk } from '../store/actions/thunks/auth.thunks';
import { raiseAlert } from '../store/actions/alert.actions';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

function Login() {
  const { login, handleSubmit } = useForm();

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
    try {
      dispatch(loginThunk(data));
      history.push('/');
    } catch (err) {
      dispatch(raiseAlert({ variant: 'error', message: err }));
    }
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
                <TextField
                  variant="outlined"
                  name="email"
                  label="Email"
                  ref={login}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  ref={login}
                />
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
