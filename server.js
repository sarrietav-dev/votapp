const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const chalk = require('chalk');

const { log } = console;

// Environment variables configuration
dotenv.config();

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => log(chalk.blue('Connected to MongoDB Atlas!\n')),
);

const app = express();

// Configure express to recieve JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure listening port
app.listen(5000, () => log(chalk.blue('\nServer running!')));
