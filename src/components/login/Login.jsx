import {
  Button,
  Container,
  FormControl,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { openDialog } from '../../store/reducers/dialogs.reducer';
import { loginThunk } from '../../store/thunks/auth.thunks';
import LocaleSelect from '../LocaleSelect';
import RegisterDialog from './RegisterDialog';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
  },
}));

function Login() {
  const { handleSubmit, control } = useForm();

  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.authToken);
  const locales = useSelector((state) => state.locales.locale.login);

  useEffect(() => {
    if (authToken !== '') {
      history.push('/');
    }
  }, [authToken]);

  const onSubmit = (data) => {
    dispatch(loginThunk(data));
    history.push('/');
  };

  const handleRegisterClick = () => {
    dispatch(openDialog());
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <Grid container justify="flex-end">
        <Grid item>
          <LocaleSelect />
        </Grid>
      </Grid>
      <Grid>
        <RegisterDialog />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <Grid item>
              <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center">
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
                          label={locales.password}
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
                <Grid container spacing={2}>
                  <Grid item>
                    <Button color="primary" type="submit" variant="contained">
                      {locales.logIn}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={handleRegisterClick}>
                      {locales.requestAccess}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default Login;
