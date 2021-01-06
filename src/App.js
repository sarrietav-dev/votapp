/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  const setToken = (token) => token;

  const token = setToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login setToken={token} />
            {token}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
