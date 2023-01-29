import http from "../../http/initAxios";
import * as entitiesGuild from "./guild.entities";
import * as chatEntities from "./../chat.entities";
import GenPromise from "./../../globalReponseType";

const createOne = (guild: entitiesGuild.IGuildCreate): Promise<GenPromise<any>> => {
  return http.post("/chat/guild", guild);
};

const getAll = (): Promise<GenPromise<any>> => {
  return http.get("/chat/guild");
};

const getAllDump = (): Promise<GenPromise<chatEntities.IGuildWtJoin>> => {
  return http.get("/chat/guild/dump")
}

const UserServiceApi = {
  createOne,
  getAll,
  getAllDump
};

export default UserServiceApi;
