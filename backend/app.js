const express = require('express');
const cors = require('cors');
const loginRoute = require('./routes/login.routes');
const userRoute = require('./routes/user.routes');
const electionRoute = require('./routes/election.routes');

const app = express();

app.use(cors());

// Configure express to recieve JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route middleware.
app.use('/api/login', loginRoute);
// TODO: Check if the user is authenticated for the routes below.
app.use('/api/users', userRoute);
app.use('/api/elections', electionRoute);

module.exports = app;
