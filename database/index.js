/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');

const { log } = console;

dotenv.config();

function connect() {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test') {
      const Mockgoose = require('mockgoose').Mockgoose;
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage().then(() => {
        mongoose
          .connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
          })
          .then((res, err) => {
            if (err) return reject(err);
            log(chalk.blue('Connected to MongoDB Atlas!'));
            resolve();
          });
      });
    } else {
      mongoose
        .connect(process.env.CONNECTION_STRING, {
          useNewUrlParser: true,
          useCreateIndex: true,
        })
        .then((res, err) => {
          if (err) return reject(err);
          log(chalk.blue('Connected to MongoDB Atlas!'));
          resolve();
        });
    }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
