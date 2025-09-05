import { Request } from 'express';
import { ROLES } from '../models/user.model';
export interface RequestMiddleware extends Request {
    user?: {
        id: number;
        email: string;
        role: ROLES;
    };
}
