import { Request, Response } from 'express';
import { createCryptocurrency, getCryptocurrencies } from 'base-ca';

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

export async function createCryptocurrenciesCoinGecko(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    console.log('Working...');
    const data = await get('https://api.coingecko.com/api/v3/coins/list');

    const response = data.filter(
      (crypto) =>
        crypto.id.includes('long') === false &&
        crypto.id.includes('short') === false,
    );

    console.log(response);

    // response.forEach(async (c) => {
    //   try {
    //     const coinData = await get(
    //       `https://api.coingecko.com/api/v3/coins/ethereum`,
    //     );

    //     console.log(coinData);
    //   } catch (err) {
    //     console.log('error');
    //   }
    // });

    return res.status(200).send({
      status_code: 200,
      results: response,
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
