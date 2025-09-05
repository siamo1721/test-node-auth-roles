import { ROLES, UserModel } from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserData {
    email: string;
    password: string;
}

const generateToken = (id: number | undefined, email: string, role: ROLES) => {
    return jwt.sign(
        { id: id, email: email, role: role },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
        },
    );
};
export const registerUser = async (userData: UserData) => {
    const existingUser = await UserModel.findOne({
        where: { email: userData.email },
    });
    if (existingUser) {
        throw new Error('Email уже используется');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await UserModel.create({
        email: userData.email,
        password: hashedPassword,
        role: ROLES.USER,
        active_status: true,
    });
    const token = generateToken(user.id, user.email, user.role);
    return { message: 'Пользователь успешно зарегистрирован', token: token };
};
export const loginUser = async (userData: UserData) => {
    const user = await UserModel.findOne({ where: { email: userData.email } });
    if (!user) {
        throw new Error('Неверный email или пароль');
    }
    const isPasswordValid = await bcrypt.compare(
        userData.password,
        user.password,
    );
    if (!isPasswordValid) {
        throw new Error('Неверный email или пароль');
    }
    const token = generateToken(user.id, user.email, user.role);
    return { message: 'Вы успешно вошли', token: token };
};
export const checkAuth = async (
    user: { id: number; email: string; role: ROLES } | undefined,
) => {
    const token = generateToken(user!.id, user!.email, user!.role);
    return { token: token, role: user!.role };
};
