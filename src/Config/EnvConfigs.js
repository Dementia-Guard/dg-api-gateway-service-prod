// config/config.js
import dotenv from 'dotenv';

dotenv.config();

export const EnvConfig = {
    GATEWAY_PORT: process.env.GATEWAY_PORT,
    AUTH_SERVICE_ROUTE:process.env.AUTH_SERVICE_ROUTE,
    CHIA_SERVICE_ROUTE:process.env.CHIA_SERVICE_ROUTE,
};