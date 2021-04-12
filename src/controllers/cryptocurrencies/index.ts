import { Request, Response } from 'express';
import CrypticBase from 'cryptic-base';

const crypticbase = new CrypticBase(false);

export async function index(req: Request, res: Response): Promise<Response> {
  try {
    const cryptocurrencies = await crypticbase.getCryptocurrencies(null);

    return res.status(200).send({
      status_code: 200,
      results: cryptocurrencies,
      errors: [],
    });
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}

export async function createCryptocurrencies(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { icon, name, symbol } = req.body;

    const newCryptocurrency = await crypticbase.createCryptocurrency({
      icon,
      name,
      symbol,
    });

    return res.status(200).send({
      status_code: 200,
      results: newCryptocurrency,
      errors: [],
    });
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: {},
      errors: [err.message],
    });
  }
}
