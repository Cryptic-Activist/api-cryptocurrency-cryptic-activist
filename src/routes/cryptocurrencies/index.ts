import { Router } from 'express';

import {
  index,
  indexCoinGecko,
  createCryptocurrencies,
  createCryptocurrenciesCoinGecko,
} from '@controllers/cryptocurrencies';

import { authenticateUser } from '@middlewares/authorization';
import { validateCreateCryptocurrency } from '@middlewares/validators/request/cryptocurrencies';

const router = Router();

router.get('', index);

router.get('/coin-gecko', indexCoinGecko);

router.post(
  '/create',
  authenticateUser,
  validateCreateCryptocurrency,
  createCryptocurrencies,
);

router.post(
  '/coin-gecko/create',
  authenticateUser,
  createCryptocurrenciesCoinGecko,
);

export default router;
