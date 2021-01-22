const chalk = require('chalk');

const { log } = console;

// Configure listening port
app.listen(5000, () => log(chalk.blue('\nServer running!')));
