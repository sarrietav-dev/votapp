/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const chalk = require('chalk');
const { MongoMemoryServer } = require('mongodb-memory-server');

const { log } = console;
const mongod = new MongoMemoryServer();

dotenv.config();
mongoose.set('useFindAndModify', false);

module.exports.connectMock = async () => {
  const URI = await mongod.getUri();

  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log(chalk.blue('Connected to MongoDB mock!'));
    })
    .catch((err) => log(chalk.red(err)));
};

module.exports.close = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

module.exports.clear = async () => {
  const { collections } = mongoose.connection;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

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
