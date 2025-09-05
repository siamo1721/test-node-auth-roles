import express from 'express';
import { check, login, register } from '../controller/auth.controller';
import { getUsers } from '../controller/admin.controller';
import { checkRole } from '../middleware/check.role.middleware';
import { ROLES } from '../models/user.model';
import { authMiddleware } from '../middleware/auth.middleware';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);

router.get('/check', authMiddleware, check);

router.get(
    '/getUsersById/:userId',
    authMiddleware,
    checkRole(ROLES.ADMIN),
    getUsers,
); // --=---

router.get('/getUsers', authMiddleware, checkRole(ROLES.ADMIN), getUsers);

router.patch('/banned/:userId', authMiddleware, checkRole(ROLES.ADMIN)); // --

export default router;
