import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({ body: req.body, params: req.params, query: req.query });
    return next();
  } catch (e: any) {
    return res.status(400).json({ success: false, error: { message: e.errors || e.message } });
  }
};
