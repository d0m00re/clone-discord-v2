import { sequelize } from "./../../../../../Service/db/sequelize/init.sequelize";
import * as entities from "./../../entity/entities";
import { Optional, Model, HasMany, UUID, DataTypes } from 'sequelize';

/*
interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table
class Person extends Model<PersonAttributes, PersonCreationAttributes> {}
*/

interface GuildCreationAttributes extends Optional<entities.IGuildId, 'id'> { }

export default class Guild extends Model<entities.IGuildId, GuildCreationAttributes> {
    declare id: number;
    declare title: string;
    declare ownerId: number;
    declare uuid: string;
}

Guild.init({
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
        type: DataTypes.UUID,
        defaultValue: UUID
    },
    ownerId: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: "Guild"
});