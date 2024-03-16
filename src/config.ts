import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

function getEnvVar(name: string) {
  return process.env[name] as string;
}

export const CONFIG = {
  MONGODB_URL: getEnvVar('MONGODB_URL'),
  PORT: getEnvVar('PORT'),
  JWT_SECRET: getEnvVar('JWT_SECRET'),
};
