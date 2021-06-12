import { Router } from 'express';

import {
  getPrice,
} from '@controllers/cryptocurrency';

const router = Router();

router.get('/price', getPrice);

export default router;
