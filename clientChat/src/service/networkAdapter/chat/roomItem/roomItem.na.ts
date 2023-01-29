import http from "../../http/initAxios";
import * as entitiesRoomItem from "./roomItem.entities";
import GenPromise from "./../../globalReponseType";

const createOne = (roomItem: entitiesRoomItem.IRoomItemCreate) : Promise<GenPromise<any>> => {
  return http.post("/chat/roomItem", roomItem);
};

const getAll = (idRoom: number): Promise<GenPromise<any>> => {
  return http.get(`/chat/roomItem?RoomId=${idRoom}`);
};

const RoomItemServiceApi = {
  createOne,
  getAll,
};

export default RoomItemServiceApi;
