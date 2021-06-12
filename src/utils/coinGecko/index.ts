import fetch from 'node-fetch';

export async function getCoinPrice(ids: string, fiatSymbol: string): Promise<any> {
  console.log(ids, fiatSymbol);

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${fiatSymbol}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}
