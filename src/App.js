/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import AuthRoute from './components/AuthRoute';
import ElectionDashboard from './components/election/ElectionDashboard';
import AlertMessage from './components/AlertMessage';

const useStyles = makeStyles({
  app: {
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <AlertMessage />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AuthRoute path="/election">
            <ElectionDashboard />
          </AuthRoute>
          <AuthRoute path="/">
            <Dashboard />
          </AuthRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
