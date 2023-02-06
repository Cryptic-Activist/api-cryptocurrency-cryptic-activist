import {
  createCryptocurrency,
  createManyCryptocurrencies,
  getCryptocurrencies,
} from 'base-ca';
import { Request, Response } from 'express';

import { get } from '@services/api';

export const index = async (req: Request, res: Response): Promise<Response> => {
  try {
    const cryptocurrencies = await getCryptocurrencies();

    return res.status(200).send({
      status_code: 200,
      results: cryptocurrencies,
      errors: [],
    });
  } catch (err) {
    return res.status(500).send({
      status_code: 500,
      results: [],
      errors: [err.message],
    });
  }
};

export async function indexCoinGecko(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const data = await get('https://api.coingecko.com/api/v3/coins/list');

    const response = data.filter(
      (crypto) =>
        crypto.id.includes('long') === false &&
        crypto.id.includes('short') === false,
    );

    const createdCryptocurrencyMapped = response.map(async (cryptocurrency) => {
      const createdCryptocurrency = await createCryptocurrency({
        coingeckoId: cryptocurrency.id,
        name: cryptocurrency.name,
        symbol: cryptocurrency.symbol,
      });

      return createdCryptocurrency;
    });

    const promises = await Promise.all(createdCryptocurrencyMapped);

    return res.status(200).send({
      status_code: 200,
      results: promises,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: [],
      errors: [err.message],
    });
  }
}

export const createCryptocurrenciesCoinGecko = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const data = await get('https://api.coingecko.com/api/v3/coins/list');

    const response = data
      .filter(
        ({ id }) =>
          id.includes('long') === false && id.includes('short') === false,
      )
      .map(({ id, name, symbol }) => ({ coingeckoId: id, name, symbol }));

    const created = await createManyCryptocurrencies(response);

    return res.status(200).send({
      status_code: 200,
      results: created,
      errors: [],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status_code: 500,
      results: [],
      errors: [err.message],
    });
  }
};
