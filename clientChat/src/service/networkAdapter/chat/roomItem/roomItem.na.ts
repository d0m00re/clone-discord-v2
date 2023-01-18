import http from "../../http/initAxios";
import * as entitiesRoomItem from "./roomItem.entities";

const createOne = (roomItem: entitiesRoomItem.IRoomItemCreate) => {
  return http.post("/chat/roomItem", roomItem);
}

const getAll = (idRoom : number) => {
  return http.get(`/chat/roomItem?RoomId=${idRoom}`);
}

const RoomItemServiceApi = {
  createOne,
  getAll
}

export default RoomItemServiceApi;