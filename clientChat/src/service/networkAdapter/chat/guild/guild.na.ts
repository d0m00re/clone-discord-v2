import http from "../../http/initAxios";
import * as entitiesGuild from "./guild.entities";

const createOne = (guild: entitiesGuild.IGuildCreate) => {
  return http.post("/chat/guild", guild);
};

const getAll = () => {
  return http.get("/chat/guild");
};

const getAllDump = () => {
  return http.get("/chat/guild/dump")
}

const UserServiceApi = {
  createOne,
  getAll,
  getAllDump
};

export default UserServiceApi;
