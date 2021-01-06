import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line object-curly-newline
import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const loginUser = async (credentials) => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:5000/api/login',
    data: credentials,
  });
  return response.data.headers['auth-token'];
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = loginUser({ email, password });
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
