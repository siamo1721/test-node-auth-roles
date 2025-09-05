import { Response } from 'express';
import { getAllUsers } from '../service/admin.service';
import { RequestMiddleware } from '../middleware/request.middleware';

export const getUsers = async (req: RequestMiddleware, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({
            message:
                error instanceof Error ? error.message : 'Что-то пошло не так',
        });
    }
};
