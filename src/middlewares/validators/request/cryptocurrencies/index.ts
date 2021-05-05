import { Request, Response, NextFunction } from 'express';

export function validateCreateCryptocurrency(
  req: Request,
  res: Response,
  next: NextFunction,
): NextFunction | Response {
  const { icon, name, symbol } = req.body;

  const errors: string[] = [];

  if (!icon) {
    errors.push('icon is required');
  } else if (icon.length === 0) {
    errors.push('icon must be valid.');
  }

  if (!name) {
    errors.push('name is required');
  } else if (name.length === 0) {
    errors.push('name must be valid.');
  }

  if (!symbol) {
    errors.push('symbol is required');
  } else if (symbol.length === 0) {
    errors.push('symbol must be valid.');
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
