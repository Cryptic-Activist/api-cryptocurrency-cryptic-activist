import chalk from 'chalk';

import app from './app';
import { APP_NAME, NODE_ENV, PORT } from './constants/envs';
import { checkEnvironmentVariable } from './utils/checkers/env';
import { success } from './utils/logger/logger';

checkEnvironmentVariable();

app.listen(PORT, () => {
  success(`${APP_NAME} is listening on port: ${chalk.green(PORT)}`);
  success(`NODE_ENV=${NODE_ENV}`);
});
