import http from "../../http/initAxios";
import * as entitiesRoom from "./room.entities";

interface IGetAll {
  GuildId : number;
}

const createOne = (room: entitiesRoom.IRoomCreate) => {
  return http.post("/chat/room", room);
}

const getAll = (props : IGetAll) => {
  return http.get(`/chat/room?GuildId=${props.GuildId}`);
}

const UserServiceApi = {
  createOne,
  getAll
}

export default UserServiceApi;