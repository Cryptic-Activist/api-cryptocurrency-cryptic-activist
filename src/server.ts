import chalk from 'chalk';

import { APP_NAME, NODE_ENV, PORT } from '@/constants/envs';
import { checkEnvironmentVariable } from '@/utils/checkers/env';
import { success } from '@/utils/logger/logger';

import app from './app';

checkEnvironmentVariable();

console.log({ NODE_ENV });

const port = PORT || 5001;

app.listen(port, () => {
  success(`${APP_NAME} is listening on port: ${chalk.green(port)}`);
  success(`NODE_ENV=${NODE_ENV}`);
});
