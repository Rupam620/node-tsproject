import dotenv from 'dotenv';
dotenv.config();
export default {
  port: process.env.PORT ? Number(process.env.PORT) : 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'changeme',
  redisUrl: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
};
