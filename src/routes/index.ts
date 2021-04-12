import { Application } from 'express';

import cryptocurrencies from './cryptocurrencies';

export default (app: Application): void => {
  app.use('/cryptocurrencies', cryptocurrencies);
};
