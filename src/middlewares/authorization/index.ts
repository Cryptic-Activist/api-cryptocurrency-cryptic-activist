import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const response = await fetch(
      `${process.env.USER_API_ENDPOINT}/user/authorization/authorize`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Authorization: req.headers.authorization,
        },
      },
    );

    const data = await response.json();

    if (data.status_code === 200) {
      next();
    } else {
      return res.status(401).send({
        status_code: 401,
        results: {},
        errors: [],
      });
    }
  } catch (err) {
    return res.status(401).send({
      status_code: 401,
      results: {},
      errors: [err],
    });
  }
}
