import { Router } from 'express';

import { index, createCryptocurrencies } from '@controllers/cryptocurrencies';
import { authenticateUser } from '@middlewares/authorization';

const router = Router();

router.get('', index);

router.post('/create', authenticateUser, createCryptocurrencies);

export default router;
