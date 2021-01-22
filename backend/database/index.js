/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then((res, err) => {
        if (err) return reject(err);
        resolve();
      });
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
