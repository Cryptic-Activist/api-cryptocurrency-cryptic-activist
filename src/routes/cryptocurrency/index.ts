import { Router } from 'express';

import {
  getPrice,
  createCryptocurrencyCoinGecko,
  getCryptocurrencyController,
} from '@controllers/cryptocurrency';

import { authenticateUser } from '@middlewares/authorization';
import {
  validateCreateCryptocurrencyCoinGecko,
  validateGetCryptocurrency,
} from '@middlewares/validators/request/cryptocurrency';

const router = Router();

router.get('', validateGetCryptocurrency, getCryptocurrencyController);

router.get('/price', getPrice);

router.post(
  '/coin-gecko/create',
  authenticateUser,
  validateCreateCryptocurrencyCoinGecko,
  createCryptocurrencyCoinGecko,
);

export default router;
