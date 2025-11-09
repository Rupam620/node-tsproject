import 'reflect-metadata';
import http from 'http';
import app from './app';
import config from './config';
import logger from './logger';
const server = http.createServer(app);
server.listen(config.port, () => {
  logger.info({ port: config.port }, 'Server listening');
});
const graceful = () => {
  logger.info('Shutting down gracefully');
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000);
};
process.on('SIGINT', graceful);
process.on('SIGTERM', graceful);
