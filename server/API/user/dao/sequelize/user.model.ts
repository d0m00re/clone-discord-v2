import { sequelize } from "./../../../../Service/db/sequelize/init.sequelize";
import * as entities from "./../../entity/entities";
import { Optional, Model, UUIDV4, DataTypes } from 'sequelize';

interface UserCreationAttributes extends Optional<entities.IUserId, 'id'> { }

export default class User extends Model<entities.IUserId, UserCreationAttributes> {
    declare id: number;
    declare firstname: string;
    declare lastname: string;
    declare uuid: string;
    declare password: string;
    declare email: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.TEXT,
        defaultValue: UUIDV4
    },
    email: {
        type: DataTypes.TEXT,
       // unique: true
    },
    password: {
        type: DataTypes.TEXT,
    },
    firstname: {
        type: DataTypes.TEXT
    },
    lastname: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: "User"
})