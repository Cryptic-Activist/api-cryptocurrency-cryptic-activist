import { Router } from 'express';

import {
  index,
  indexCoinGecko,
  createCryptocurrencies,
  createCryptocurrenciesCoinGecko,
} from '@controllers/cryptocurrencies';
import { authenticateUser } from '@middlewares/authorization';

const router = Router();

router.get('', index);

router.get('/coin-gecko', indexCoinGecko);

router.post('/create', authenticateUser, createCryptocurrencies);

router.post(
  '/coin-gecko/create',
  authenticateUser,
  createCryptocurrenciesCoinGecko,
);

export default router;
