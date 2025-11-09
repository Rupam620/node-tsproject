import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import pinoHttp from 'pino-http';
import logger from './logger';
import requestId from './middleware/requestId';
import errorHandler from './middleware/errorHandler';
import rateLimiter from './middleware/rateLimiter';
import routes from './routes';
import promClient from 'prom-client';
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestId);
app.use(pinoHttp({ logger }));
app.use(rateLimiter);
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});
app.get('/', (req, res) => {
  res.json({
    name: 'Node API Starter (TypeScript)',
    status: 'ok',
    docs: '/api', 
    health: '/api/health/live'
  });
});
app.use('/api', routes);
app.use(errorHandler);
export default app;
