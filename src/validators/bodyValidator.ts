import type { ZodType } from 'zod';
import type { Request, Response, NextFunction } from 'express';

export const validator =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {

    const parsed = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (!parsed.success) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: parsed.error.flatten(),
      });
    }

    // Replace req with parsed data if you like
    // req.body = parsed.data.body

    next();
  };
