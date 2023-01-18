import modelRoomItem from "./roomItem.model";
import * as entityRoomItem from "../../entity/entities"
import { v4 as uuidv4 } from 'uuid';
import { WhereOptions, IncludeOptions, FindAttributeOptions } from "sequelize";

interface IRoomItemDB {
    where?: Partial<entityRoomItem.IRoomItemId>;
    include?: IncludeOptions[];
    attributes?: FindAttributeOptions;
    createData?: entityRoomItem.IRoomItem;
    updateData?: entityRoomItem.IRoomItemId;
}

class RoomItem {
    createOne(props: Omit<entityRoomItem.IRoomItem, 'uuid'>) {
        return modelRoomItem.create({
            RoomId: props.RoomId,
            ownerId: props.ownerId,
            uuid: uuidv4(),
            contentType: props.contentType,
            content: props.content
        })
    }

    findOne(props: IRoomItemDB) {

    }

    findAll(props: IRoomItemDB) {
        return modelRoomItem.findAll({ where: props.where });
    }

    async deleteOne(id: number) {
        let elem = await modelRoomItem.findOne({ where: { id: id } });
        let data = await elem?.destroy();
        return data;
    }

    putOne(props: IRoomItemDB) {

    }
}

export default new RoomItem();