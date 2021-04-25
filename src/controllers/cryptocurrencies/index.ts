import { Request, Response } from 'express';
import CrypticBase from 'cryptic-base';

import { fetchGet } from '@utils/fetch';

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
    const data = await fetchGet('https://api.coingecko.com/api/v3/coins/list');

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

export async function createCryptocurrenciesCoinGecko(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const data = await fetchGet('https://api.coingecko.com/api/v3/coins/list');

    const response = data.filter(
      (crypto) => crypto.id.includes('long') === false &&
        crypto.id.includes('short') === false,
    );

    console.log(response);

    // response.forEach(async (c) => {
    //   try {
    //     const coinData = await fetchGet(
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
