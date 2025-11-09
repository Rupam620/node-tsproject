import pino from 'pino';
const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  timestamp: () => `,"time":"${new Date().toISOString()}"`
});
export default logger;
