/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import AuthRoute from './components/AuthRoute';
import ElectionDashboard from './components/election/ElectionDashboard';
import AlertMessage from './components/AlertMessage';
import AdminPanel from './components/admin-panel/AdminPanel';
import VotingPanel from './components/election/VotingPanel';

const useStyles = makeStyles({
  app: {
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <AdminPanel />
      <AlertMessage />
      <HashRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <AuthRoute path="/vote">
            <VotingPanel />
          </AuthRoute>
          <AuthRoute path="/election">
            <ElectionDashboard />
          </AuthRoute>
          <AuthRoute path="/">
            <Dashboard />
          </AuthRoute>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
