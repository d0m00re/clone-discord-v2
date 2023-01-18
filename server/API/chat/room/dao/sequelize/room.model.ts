import { sequelize } from "./../../../../../Service/db/sequelize/init.sequelize";
import * as entities from "./../../entity/entities";
import { Optional, Model, HasMany, UUIDV4, DataTypes } from 'sequelize';
import GuildModel from './../../../guild/dao/sequelize/guild.model';
/*
interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table
class Person extends Model<PersonAttributes, PersonCreationAttributes> {}
*/

interface RoomCreationAttributes extends Optional<entities.IRoomId, 'id'> { }

export default class Room extends Model<entities.IRoomId, RoomCreationAttributes> {
    declare id: number;
    declare title: string;
    declare ownerId: number;
    declare uuid: string;
    declare GuildId: number;
}

Room.init({
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.TEXT
    },
    uuid: {
        type: DataTypes.TEXT,
        defaultValue: UUIDV4
    },
    ownerId: {
        type: DataTypes.TEXT
    },
    GuildId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        references: {
            model: 'Guilds',
            key: 'id'
        },
    },
}, {
    sequelize,
    modelName: "Room"
});

GuildModel.hasMany(Room);
Room.belongsTo(GuildModel);