import * as entities from "./entities.d";

/*
interface IGuild {
    title: string;
    uuid: string;
    ownerId: number;
}
*/

const makeEmptyGuild = (): entities.IGuild => ({
    title: "",
    uuid: "",
    ownerId: -1
});

export {
    makeEmptyGuild
}