/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');

const { log } = console;

dotenv.config();
mongoose.set('useFindAndModify', false);

module.exports.connect = async () => {
  await mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log(chalk.blue('Connected to MongoDB Atlas!'));
    })
    .catch((err) => log(chalk.red(err)));
};
