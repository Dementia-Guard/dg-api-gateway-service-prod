// config/config.js
import dotenv from 'dotenv';

dotenv.config();

export const EnvConfig = {
    GATEWAY_PORT: process.env.GATEWAY_PORT,
    AUTH_SERVICE_ROUTE:process.env.AUTH_SERVICE_ROUTE,
    CHIA_SERVICE_ROUTE:process.env.CHIA_SERVICE_ROUTE,
    MRI_SERVICE_ROUTE:process.env.MRI_SERVICE_ROUTE,
    TREATMENT_PLAN_SERVICE_ROUTE:process.env.TREATMENT_PLAN_SERVICE_ROUTE,
    NOTIFICATION_SERVICE_ROUTE:process.env.NOTIFICATION_SERVICE_ROUTE,
    HOME_MQTT_SERVICE_ROUTE:process.env.HOME_MQTT_SERVICE_ROUTE,
};