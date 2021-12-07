import { Request, Response, NextFunction } from 'express';

export function validateCreateCryptocurrencyCoinGecko(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const { coingecko_id } = req.body;

  const errors: string[] = [];

  if (!coingecko_id) {
    errors.push('coingecko_id is required');
  } else if (coingecko_id.length === 0) {
    errors.push('coingecko_id must be valid.');
  }

  if (errors.length > 0) {
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors,
    });
  }

  next();
}

export function validateGetCryptocurrency(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const { coingecko_id } = req.query;

  const errors: string[] = [];

  if (!coingecko_id) {
    errors.push('coingecko_id is required');
  } else if (coingecko_id.length === 0) {
    errors.push('coingecko_id must be valid.');
  }

  if (errors.length > 0) {
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors,
    });
  }

  next();
}
