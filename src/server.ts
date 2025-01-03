import chalk from 'chalk';

import app from './app';
import { checkEnvironmentVariable } from './utils/checkers/env';
import { success } from './utils/logger/logger';

checkEnvironmentVariable();

const port = process.env.PORT;

app.listen(port, () => {
  success(`${process.env.APP_NAME} is listening on port: ${chalk.green(port)}`);
  success(`NODE_ENV=${process.env.NODE_ENV}`);
});
