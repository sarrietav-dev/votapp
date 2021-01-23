const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const dotenv = require('dotenv');
const loginRoute = require('./routes/login.routes');
const userRoute = require('./routes/user.routes');
const electionRoute = require('./routes/election.routes');
const db = require('./database/index');

const { log } = console;

dotenv.config();

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

if (process.env.NODE_ENV !== 'test') db.connect();
app.listen(5000, () => log(chalk.blue('\nServer running!')));

module.exports = app;
// a
