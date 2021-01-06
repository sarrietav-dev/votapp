/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import Login from './components/login/Login';

function App() {
  const setToken = (token) => token;

  const token = setToken();

  return (
    <div className="App">
      <Login setToken={token} />
      {token}
    </div>
  );
}

export default App;
