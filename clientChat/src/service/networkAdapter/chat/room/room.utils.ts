import * as entities from "./room.entities";

const makeEmptyRoom = (): entities.IRoom => ({
    title: "",
    uuid: "",
    ownerId: -1,
    GuildId: -1
});

export {
    makeEmptyRoom
}