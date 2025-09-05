import { UserModel } from '../models/user.model';

export const getAllUsers = async () => {
    return await UserModel.findAll();
};
