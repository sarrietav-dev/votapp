export default process.env.NODE_ENV === 'development'
  ? 'http://localhost:5000/api'
  : 'https://votapp-backend.herokuapp.com/api';
