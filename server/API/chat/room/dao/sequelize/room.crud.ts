import modelGuild from "./room.model";
import * as entityRoom from "./../../entity/entities"
import { v4 as uuidv4 } from 'uuid';
import { WhereOptions, IncludeOptions, FindAttributeOptions } from "sequelize";

interface IRoomDB {
    where?: Partial<entityRoom.IRoomId>;
    include?: IncludeOptions[];
    attributes?: FindAttributeOptions;
    createData?: entityRoom.IRoom;
    updateData?: entityRoom.IRoomId;
}

class Room {
    createOne(props: Omit<entityRoom.IRoom, 'uuid'>) {
        return modelGuild.create({
            GuildId: props.GuildId,
            ownerId: props.ownerId,
            title: props.title,
            uuid: uuidv4()
        })
    }

    findOne(props: IRoomDB) {

    }

    findAll(props: IRoomDB) {
        return modelGuild.findAll({ where: props.where });
    }

    async deleteOne(id: number) {
        let elem = await modelGuild.findOne({ where: { id: id } });
        let data = await elem?.destroy();
        return data;
    }

    putOne(props: IRoomDB) {

    }
}

export default new Room();