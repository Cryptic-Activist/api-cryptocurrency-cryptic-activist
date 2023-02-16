import fetch from 'node-fetch';
import { USER_API_ENDPOINT } from '../constants/envs';
import { fetchGet } from './axios';

export const getAuth = async (authorization: string) => {
  const response = await fetchGet(
    `${USER_API_ENDPOINT}/users/authorization/authorize`,
    { Authorization: authorization },
  );

  if (response.status !== 200) {
    return null;
  }

  return response.data;
};

export const getAdminAuth = async (
  endpoint: string,
  authorization: string,
): Promise<any> => {
  const response = await fetch(`${endpoint}/admins/authorization/authorize`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  });

  const data = await response.json();

  return data;
};
