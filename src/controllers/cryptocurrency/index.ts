import { Request, Response } from 'express';
import { createCryptocurrency, getCryptocurrency } from 'cryptic-base';
import { getCoinPrice } from '@services/coinGecko';

import { get } from '@services/api';

export async function getPrice(req: Request, res: Response): Promise<Response> {
  try {
    const { id, fiatSymbol } = req.query;

    // @ts-ignore
    const price = await getCoinPrice(id, fiatSymbol);
    // @ts-ignore
    if (price[id] && Object.entries(price[id]).length > 0) {
      return res.status(200).send({
        status_code: 200,
        results: Object.values(price[id])[0],
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

export async function getCryptocurrencyController(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { coingecko_id } = req.query;

    const crypto = await getCryptocurrency({
      coingecko_id,
    });

    if (!crypto) {
      return res.status(400).send({
        status_code: 400,
        results: {},
        errors: ['Coin does not exist!'],
      });
    }

    return res.status(200).send({
      status_code: 200,
      results: {
        coingecko_id: crypto.coingecko_id,
        icon: crypto.icon,
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
      },
      errors: [],
    });
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: [],
      errors: [err.message],
    });
  }
}

export async function createCryptocurrencyCoinGecko(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { coingecko_id } = req.body;

    const data = await get(
      `https://api.coingecko.com/api/v3/coins/${coingecko_id}`,
    );

    if (data.error) {
      return res.status(400).send({
        status_code: 400,
        results: {},
        errors: [data.error],
      });
    }

    const newCrypto = await createCryptocurrency({
      icon: data.image.small,
      name: data.name,
      symbol: data.symbol.toUpperCase(),
      coingecko_id: data.id,
    });

    if (!newCrypto) {
      return res.status(400).send({
        status_code: 400,
        results: {},
        errors: ['Coin already exists!'],
      });
    }

    return res.status(200).send({
      status_code: 200,
      results: newCrypto,
      errors: [],
    });
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: [],
      errors: [err.message],
    });
  }
}
