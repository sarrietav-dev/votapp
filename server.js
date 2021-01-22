const chalk = require('chalk');
const db = require('./database/index');
const app = require('./app');

const { log } = console;

db.connect().then(() => {
  app.listen(5000, () => log(chalk.blue('\nServer running!')));
});
