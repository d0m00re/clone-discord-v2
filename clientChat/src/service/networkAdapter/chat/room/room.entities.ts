export interface IRoomCreate {
    GuildId: number; // fk key
    title: string;
}

export interface IRoom {
    GuildId: number; // fk key
    title: string;
    uuid: string;
    ownerId: number;
}

export interface IRoomId extends IRoom {
    id: number;
}