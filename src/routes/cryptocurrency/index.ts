import { Router } from 'express';

import {
  getPrice,
  createCryptocurrencies,
} from '@controllers/cryptocurrency';

import { authenticateUser } from '@middlewares/authorization';
import { validateCreateCryptocurrency } from '@middlewares/validators/request/cryptocurrencies';

const router = Router();

router.get('/price', getPrice);

router.post(
  '/create',
  authenticateUser,
  validateCreateCryptocurrency,
  createCryptocurrencies,
);

export default router;
