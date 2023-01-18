import * as entities from "./entities.d";

const makeEmptyRoom = (): entities.IRoom => ({
    title: "",
    uuid: "",
    ownerId: -1,
    GuildId: -1
});

export {
    makeEmptyRoom
}