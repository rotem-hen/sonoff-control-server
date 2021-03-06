import dotenv from 'dotenv';
// Parse dotenv variables. Note: this will also go to process.env
const { parsed: env } = dotenv.config();

const toBoolean = (str: string): boolean => str !== undefined ? JSON.parse(str) : false;
const toNumber = (str: string): number => str !== undefined ? parseInt(str, 10) : 0;

export default {
  GOOGLE_CLIENT_ID: <string> env.GOOGLE_CLIENT_ID,
  MONGO_URI: <string> env.MONGO_URI,
  MULTI_USER: <boolean> toBoolean(env.MULTI_USER),
  SERVER_IP: <string> env.SERVER_IP,
  SERVER_API_PORT: <number> toNumber(env.SERVER_API_PORT),
  SSL_KEY_FILE: <string> env.SSL_KEY_FILE,
  SSL_CERT_FILE: <string> env.SSL_CERT_FILE,
  WEBSOCKET_PORT: <number> toNumber(env.WEBSOCKET_PORT),
};
