import { Application } from 'express';

import cryptocurrencies from './cryptocurrencies';
import cryptocurrency from './cryptocurrency';

export default (app: Application): void => {
  app.use('/cryptocurrencies', cryptocurrencies);
  app.use('/cryptocurrency', cryptocurrency);
};
