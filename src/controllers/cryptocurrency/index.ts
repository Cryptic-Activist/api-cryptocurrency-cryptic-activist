import { Request, Response } from 'express';
import CrypticBase from 'cryptic-base';
import { getCoinPrice } from '@services/coinGecko';

const crypticbase = new CrypticBase(false);

export async function getPrice(req: Request, res: Response): Promise<Response> {
  try {
    const { id, fiatSymbol } = req.query;

    // @ts-ignore
    const price = await getCoinPrice(id, fiatSymbol);
    // @ts-ignore
    if (price[id] && Object.entries(price[id]).length > 0) {
      return res.status(200).send({
        status_code: 200,
        results: price,
        errors: [],
      });
    }
    return res.status(400).send({
      status_code: 400,
      results: {},
      errors: ['Cryptocurrency not found.'],
    });
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: [],
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
