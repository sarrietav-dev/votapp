const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Environment variables configuration
dotenv.config();

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to db'),
);

const app = express();

// Configure express to recieve JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure listening port
// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Server up!'));
