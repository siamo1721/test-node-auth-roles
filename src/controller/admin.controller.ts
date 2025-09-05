import { Response } from 'express';
import { bannedUser, getAllUsers, getUserById } from '../service/admin.service';
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
export const getUser = async (req: RequestMiddleware, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const user = await getUserById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({
            message:
                error instanceof Error ? error.message : 'Что-то пошло не так',
        });
    }
};
export const banned = async (req: RequestMiddleware, res: Response) => {
    try {
        const user = await bannedUser(parseInt(req.params.id));
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({
            message:
                error instanceof Error ? error.message : 'Что-то пошло не так',
        });
    }
};
