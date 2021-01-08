import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line object-curly-newline
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../../actions/auth-token.action';

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

  useEffect(() => {
    const authToken = useSelector((state) => state.authToken);
    if (authToken !== '') {
      history.push('/');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios({
      method: 'POST',
      url: 'http://localhost:5000/api/login/',
      data: {
        email,
        password,
      },
    });

    if (response.status === 200) {
      dispatch(setAuthToken(response.data.token));
      history.push('/');
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
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
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
