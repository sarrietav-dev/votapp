import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line object-curly-newline
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../store/actions/thunks/auth.thunks';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.authToken);

  useEffect(() => {
    if (authToken !== '') {
      history.push('/');
    }
  }, [authToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginThunk(email, password));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <form action="" onSubmit={handleSubmit}>
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
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
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
