import modelGuild from "./guild.model";
import modelRoom from "./../../../room/dao/sequelize/room.model";
import modelRoomItem from "./../../../roomItem/dao/sequelize/roomItem.model";

import * as entityGuild from "./../../entity/entities"
import { v4 as uuidv4 } from 'uuid';
import { WhereOptions, IncludeOptions, FindAttributeOptions } from "sequelize";

interface IGuildDB {
    where?: Partial<entityGuild.IGuildId>;
    include?: IncludeOptions[];
    attributes?: FindAttributeOptions;
    createData?: entityGuild.IGuild;
    updateData?: entityGuild.IGuildId;
}

// include base info
const attributeGuild = ["id", "title", "uuid", "ownerId"];
const attributeModelRoom = ['id', 'uuid', 'ownerId', 'GuildId'];
const attributeModelRoomItems = ['id', 'uuid', 'contentType', 'content', 'ownerId', 'RoomId'];

class Guild {
    createOne(props: Omit<entityGuild.IGuild, 'uuid'>) {
        return modelGuild.create({
            ownerId: props.ownerId,
            title: props.title,
            uuid: uuidv4()
        })
    }

    findOne(props: IGuildDB) {

    }

    findAll(props: IGuildDB) {
        return modelGuild.findAll({ where: props.where });
    }

    findAllWithJoin() {
        return modelGuild.findAll({
            attributes : attributeGuild,
            include: [
                {
                    model: modelRoom,
                    attributes : attributeModelRoom,
                   // as: 'rooms',
                    include: [{
                        model : modelRoomItem,
                        attributes : attributeModelRoomItems
                     //   as : "roomItems"
                    }]
                }]
            });
    }

    async deleteOne(id: number) {
        let elem = await modelGuild.findOne({ where: { id: id } });
        let data = await elem?.destroy();
        return data;
    }

    putOne(props: IGuildDB) {

    }
}

export default new Guild();