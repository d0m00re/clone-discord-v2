import http from "../http/initAxios";
import * as entitiesUser from "./user.entities.d";

const endpoint = '/user';
// register
const register = (user: entitiesUser.IUserInput) => {
  return http.post(`${endpoint}/register`, user);
}
// login
const login = (user: entitiesUser.IUserLogin) => {
  return http.post(`${endpoint}/login`, user);
}

const logout = () => {
  return http.post(`${endpoint}/logout`);
}

// me
const me = () => {
  return http.get(`${endpoint}/me`);
}

const UserServiceApi = {
  register,
  login,
  logout,
  me
}

export default UserServiceApi;