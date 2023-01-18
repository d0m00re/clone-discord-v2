import { sequelize } from "./../../../../../Service/db/sequelize/init.sequelize";
import * as entities from "./../../entity/entities";
import { Optional, Model, HasMany, UUIDV4, DataTypes } from 'sequelize';
import RoomModel from "./../../../room/dao/sequelize/room.model";
/*
interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table
class Person extends Model<PersonAttributes, PersonCreationAttributes> {}
*/

interface RoomItemCreationAttributes extends Optional<entities.IRoomItemId, 'id'> { }

export default class RoomItem extends Model<entities.IRoomItemId, RoomItemCreationAttributes> {
    declare id: number;
    declare uuid: string;
    declare contentType: 'msg' | 'file' | 'notation';
    declare content: string;
    declare RoomId: number;
    declare ownerId: number;
}

RoomItem.init({
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
    contentType: {
        type: DataTypes.TEXT
    },
    content: {
        type: DataTypes.TEXT
    },
    ownerId: {
        type: DataTypes.TEXT
    },
    RoomId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Rooms',
            key: 'id'
        },
    },
}, {
    sequelize,
    modelName: "RoomItem"
});

RoomModel.hasMany(RoomItem);
RoomItem.belongsTo(RoomModel)