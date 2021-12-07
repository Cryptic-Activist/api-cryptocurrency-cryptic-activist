import { Request, Response } from 'express';
import { getCryptocurrencies } from 'cryptic-base';

import { get } from '@services/api';

export async function index(req: Request, res: Response): Promise<Response> {
  try {
    const cryptocurrencies = await getCryptocurrencies(null);

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
}

export async function indexCoinGecko(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const data = await get('https://api.coingecko.com/api/v3/coins/list');

    const response = data.filter(
      (crypto) => crypto.id.includes('long') === false &&
        crypto.id.includes('short') === false,
    );

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

export async function createCryptocurrenciesCoinGecko(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const data = await get('https://api.coingecko.com/api/v3/coins/list');

    const response = data.filter(
      (crypto) => crypto.id.includes('long') === false &&
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
