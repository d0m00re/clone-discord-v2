import http from "../../http/initAxios";
import * as entitiesRoom from "./room.entities";
import GenPromise from "./../../globalReponseType";

interface IGetAll {
  GuildId: number;
}

const createOne = (room: entitiesRoom.IRoomCreate): Promise<GenPromise<any>> => {
  return http.post("/chat/room", room);
};

const getAll = (props: IGetAll): Promise<GenPromise<any>> => {
  return http.get(`/chat/room?GuildId=${props.GuildId}`);
};

const UserServiceApi = {
  createOne,
  getAll,
};

export default UserServiceApi;
