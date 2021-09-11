import fetch from 'node-fetch';

export async function get(endpoint: string): Promise<any> {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return data;
}

export async function getAuth(endpoint: string, authorization: string): Promise<any> {
  const response = await fetch(
    `${endpoint}/user/authorization/authorize`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorization,
      },
    },
  );

  const data = await response.json();

  return data;
}
