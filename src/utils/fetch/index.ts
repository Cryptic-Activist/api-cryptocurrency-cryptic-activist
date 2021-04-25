import fetch from 'node-fetch';

export async function fetchGet(endpoint: string): Promise<any> {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}
