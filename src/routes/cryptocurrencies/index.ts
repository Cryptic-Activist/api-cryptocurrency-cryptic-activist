import { Router } from 'express';

import {
  index,
  indexCoinGecko,
  createCryptocurrenciesCoinGecko,
} from '@controllers/cryptocurrencies';

import { authenticateUser } from '@middlewares/authorization';

const router = Router();

router.get('', index);

router.get('/coin-gecko', indexCoinGecko);

router.post(
  '/coin-gecko/create',
  authenticateUser,
  createCryptocurrenciesCoinGecko,
);

export default router;
