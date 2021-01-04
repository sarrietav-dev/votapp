import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField variant="outlined" label="Usuario" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" fullWidth type="submit" variant="contained">
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
