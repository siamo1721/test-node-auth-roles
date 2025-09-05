import { NextFunction, Response } from 'express';
import { RequestMiddleware } from './request.middleware';
import jwt from 'jsonwebtoken';
import { ROLES } from '../models/user.model';

export const authMiddleware = (
    req: RequestMiddleware,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.headers.authorization!.split(' ')[1]; // Bearer token
        if (!token) {
            return res.status(401).json({ message: 'Не авторизован' });
        }
        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY!,
        ) as jwt.JwtPayload;
        {
            req.user = {
                id: decoded.id as number,
                email: decoded.email as string,
                role: decoded.role as ROLES,
            };
            next();
        }
    } catch (error) {
        return res.status(401).json({ message: 'Не авторизован' });
    }
};
