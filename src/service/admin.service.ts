import { UserModel } from '../models/user.model';

export const getAllUsers = async () => {
    return await UserModel.findAll();
};
export const getUserById = async (id: number) => {
    const user = await UserModel.findByPk(id);
    if (!user) {
        throw new Error('Пользователь не найден');
    }
    return user;
};
export const bannedUser = async (id: number) => {
    const user = await UserModel.findByPk(id);
    if (!user) {
        throw new Error('Пользователь не найден');
    }
    user.active_status = false;
    await user.save();
    return { email: user.email, active_status: user.active_status };
};
