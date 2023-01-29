import http from "../http/initAxios";
import * as entitiesUser from "./user.entities.d";
import GenPromise from "./../globalReponseType";
const endpoint = "/user";
// register
const register = (user: entitiesUser.IUserInput) : Promise<GenPromise<any>> => {
  return http.post(`${endpoint}/register`, user);
};
// login
const login = (user: entitiesUser.IUserLogin) : Promise<GenPromise<any>> => {
  return http.post(`${endpoint}/login`, user);
};

const logout = () : Promise<GenPromise<any>> => {
  return http.post(`${endpoint}/logout`);
};

// me
const me = () : Promise<GenPromise<any>> => {
  return http.get(`${endpoint}/me`);
};

const UserServiceApi = {
  register,
  login,
  logout,
  me,
};

export default UserServiceApi;
