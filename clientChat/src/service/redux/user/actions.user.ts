import * as entitiesUser from "./../../networkAdapter/user/user.entities";
import * as C_USER from "./contants.user";

export const resetUser = (payload: any) => {
  return {
    type: C_USER.RESET_USER_DATA,
    payload: payload,
  };
};

export const setUser = (payload: entitiesUser.IUserOutput) => {
  return {
    type: C_USER.SET_USER_DATA,
    payload: payload,
  };
};

export const setUserNotConnected = () => {
  return {
    type: C_USER.USER_NOT_CONNECTED,
    payload: null,
  };
};

export type Actions = ReturnType<
  typeof resetUser | typeof setUser | typeof setUserNotConnected
>;
