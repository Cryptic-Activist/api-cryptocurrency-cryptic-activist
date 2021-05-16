import chalk from 'chalk';
import { success, warning } from '@utils/logger/logger';
import app from './app';

if (!process.env.NODE_ENV) {
  warning('NODE_ENV environment variable is missing');
}

const port = process.env.PORT || 5002;

app.listen(port, () => {
  success(`${process.env.APP_NAME} is listening on port: ${chalk.green(port)}`);
});
