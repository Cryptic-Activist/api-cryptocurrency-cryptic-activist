import { Request, Response, NextFunction } from 'express';
import { getAuth } from '@services/api';

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response> {
  try {
    const { headers } = req;
    const { authorization } = headers;
    if (!authorization) {
      return res.status(401).send({
        status_code: 401,
        results: {},
        errors: ['Authorization token is required'],
      });
    }

    const data = await getAuth(
      process.env.USER_API_ENDPOINT,
      req.headers.authorization,
    );

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
    console.log(err);
    return res.status(401).send({
      status_code: 401,
      results: {},
      errors: [err.message],
    });
  }
}
