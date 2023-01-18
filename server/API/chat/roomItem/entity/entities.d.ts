interface IRoomItem {
    RoomId: number;
    uuid: string;
    contentType: 'msg' | 'file' | 'notation',
    content: string;
    ownerId: number;
}

interface IRoomItemId extends IRoomItem {
    id: number;
}

export {
    IRoomItem,
    IRoomItemId
}