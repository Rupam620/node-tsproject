import { Request, Response, NextFunction } from 'express';
import logger from '../logger';
export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction){
  const isOperational = err.isOperational ?? false;
  const status = err.statusCode || 500;
  const safeMessage = isOperational ? err.message : 'Internal Server Error';
  logger.error({ err, reqId: (req as any).requestId }, 'Unhandled error');
  res.status(status).json({ success: false, error: { message: safeMessage, code: err.code || 'INTERNAL_ERROR' } });
}
