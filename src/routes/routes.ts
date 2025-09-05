import express from 'express';
import { check, login, register } from '../controller/auth.controller';
import { banned, getUser, getUsers } from '../controller/admin.controller';
import { checkRole } from '../middleware/check.role.middleware';
import { ROLES } from '../models/user.model';
import { authMiddleware } from '../middleware/auth.middleware';
import { accessUserMiddleware } from '../middleware/access.user.middleware';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);

router.get('/check', authMiddleware, check);

router.get('/getUsersById/:id', authMiddleware, accessUserMiddleware, getUser);

router.get('/getUsers', authMiddleware, checkRole(ROLES.ADMIN), getUsers);

router.patch('/banned/:id', authMiddleware, accessUserMiddleware, banned);

export default router;
