/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';

function App() {
  const [token, setToken] = useState();

  const saveToken = (tokenArg) => {
    setToken(tokenArg);
  };

  return (
    <div className="App">
      <Login setToken={saveToken} />
      {token}
    </div>
  );
}

export default App;
