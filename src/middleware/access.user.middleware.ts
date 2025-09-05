import { RequestMiddleware } from './request.middleware';
import { NextFunction, Response } from 'express';

export const accessUserMiddleware = (
    req: RequestMiddleware,
    res: Response,
    next: NextFunction,
) => {
    if (
        req.user?.role === 'ADMIN' ||
        req.user?.id === parseInt(req.params.id)
    ) {
        return next();
    }
    return res.status(403).json({ message: 'Нет доступа' });
};
