import {UserModel, ROLES} from "../models/user.model";
import bcrypt from "bcrypt";

interface UserData {
    email: string,
    password: string,
}

export const registerUser = async (userData: UserData) => {
    const existingUser = await UserModel.findOne({where: {email: userData.email}});
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
    return user;
}