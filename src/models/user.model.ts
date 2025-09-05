import {DataTypes, Model} from "sequelize";

import sequelize from "../config/config";

const ROLES: { USER: string; ADMIN: string }  = {
    USER: 'USER',
    ADMIN: 'ADMIN',
}

class UserModel extends Model {
}

UserModel.init({
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, allowNull: false, unique: true},
        password: {type: DataTypes.STRING, allowNull: false},
        active_status: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
        role: {type: DataTypes.ENUM(ROLES.USER, ROLES.ADMIN), allowNull: false, defaultValue: ROLES.USER},
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    });
export {UserModel, ROLES};