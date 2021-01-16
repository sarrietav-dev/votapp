/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import AuthRoute from './components/AuthRoute';

const useStyles = makeStyles({
  app: {
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AuthRoute path="/">
            <Dashboard />
          </AuthRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
