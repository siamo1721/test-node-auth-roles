import { DataTypes, Model } from 'sequelize';

import sequelize from '../config/config';

enum ROLES {
  USER = 'USER',
  ADMIN = 'ADMIN',
}
interface UserData {
  id?: number;
  email: string;
  password: string;
  active_status?: boolean;
  role?: ROLES;
}
class UserModel extends Model<UserData> implements UserData {
  public id?: number;
  public email!: string;
  public password!: string;
  public active_status!: boolean;
  public role!: ROLES;
}

UserModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    active_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    role: {
      type: DataTypes.ENUM(ROLES.USER, ROLES.ADMIN),
      allowNull: false,
      defaultValue: ROLES.USER,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  },
);
export { UserModel, ROLES };
