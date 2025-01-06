import 'dotenv/config';

export const NODE_ENV = process.env.NODE_ENV as string;
export const PORT = parseInt(process.env.PORT as string);
export const APP_NAME = process.env.APP_NAME as string;

export const JWT_SECRET = process.env.JWT_SECRET as string;

export const MAIN_API_ENDPOINT = process.env.MAIN_API_ENDPOINT as string;
export const MAIN_DOMAIN = process.env.MAIN_DOMAIN as string;
export const USER_API_ENDPOINT = process.env.USER_API_ENDPOINT as string;
export const OFFER_API_ENDPOINT = process.env.OFFER_API_ENDPOINT as string;
export const CHAT_API_ENDPOINT = process.env.CHAT_API_ENDPOINT as string;
export const CRYPTOCURRENCY_API_ENDPOINT = process.env
  .CRYPTOCURRENCY_API_ENDPOINT as string;
export const FIAT_API_ENDPOINT = process.env.FIAT_API_ENDPOINT as string;
export const TRADE_API_ENDPOINT = process.env.TRADE_API_ENDPOINT as string;
export const NEW_CRYPTIC_ACTIVIST_CATALOG = process.env
  .NEW_CRYPTIC_ACTIVIST_CATALOG as string;
export const WEB3_ETHEREUM_HTTP_PROVIDER = process.env
  .WEB3_ETHEREUM_HTTP_PROVIDER as string;
export const CRYPTIC_ACTIVIST_CATALOG = process.env
  .CRYPTIC_ACTIVIST_CATALOG as string;
export const ADMIN_CRYPTIC_ACTIVIST_CATALOG = process.env
  .ADMIN_CRYPTIC_ACTIVIST_CATALOG as string;
