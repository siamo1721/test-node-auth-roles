import { registerUser, loginUser, checkAuth } from '../service/auth.service';
import { Request, Response } from 'express';
import { RequestMiddleware } from '../middleware/request.middleware';

export const register = async (req: Request, res: Response) => {
    try {
        const result = await registerUser(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error instanceof Error ? error.message : 'Что-то пошло не так',
        });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const result = await loginUser(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error instanceof Error ? error.message : 'Что-то пошло не так',
        });
    }
};
export const check = async (req: RequestMiddleware, res: Response) => {
    try {
        const result = await checkAuth(req.user);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message:
                error instanceof Error ? error.message : 'Что-то пошло не так',
        });
    }
};
