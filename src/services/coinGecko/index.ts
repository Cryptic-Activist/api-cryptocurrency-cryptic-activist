import { get } from '@services/api';

export async function getCoinPrice(ids: string, fiatSymbol: string): Promise<any> {
  const response = await get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${fiatSymbol}`);
  const data = await response.json();

  return data;
}
