// HOLA AMORCITO
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const chalk = require('chalk');
const cors = require('cors');
const loginRoute = require('./routes/login');
const userRoute = require('./routes/user');

const { log } = console;

// Environment variables configuration
dotenv.config();

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => log(chalk.blue('Connected to MongoDB Atlas!\n'))
);

const app = express();

app.use(cors());

// Configure express to recieve JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route middleware.
app.use('/api/login', loginRoute);
app.use('/api/users', userRoute);

// Configure listening port
app.listen(5000, () => log(chalk.blue('\nServer running!')));
