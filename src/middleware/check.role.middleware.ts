import { ROLES } from '../models/user.model';
import { NextFunction, Response } from 'express';
import { RequestMiddleware } from './request.middleware';
export const checkRole = (role: ROLES) => {
  return (req: RequestMiddleware, res: Response, next: NextFunction) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Нет доступа' });
    }
  };
};
