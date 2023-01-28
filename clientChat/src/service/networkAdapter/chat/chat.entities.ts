import * as entityGuild from "./guild/guild.entities";
import * as entityRoom from "./room/room.entities";
import * as entityItems from "./roomItem/roomItem.entities";

interface IRoomWtJoin extends entityRoom.IRoomId {
    RoomsItems : entityItems.IRoomItemId[];
}

interface IGuildWtJoin extends entityGuild.IGuildId {
    Rooms : entityRoom.IRoomId[];
}

export type {
    IRoomWtJoin,
    IGuildWtJoin,
    entityGuild,
    entityRoom,
    entityItems
}