import * as utilsUser from "./../../networkAdapter/user/user.utils";
import * as actionsUser from "./actions.user";
import * as C_USER from "./contants.user";

//export const initialState : types.IMe = utils.makeEmptyUser();

export const initialState = utilsUser.makeEmptyUserId();

const UserReducer = (state = initialState, action: actionsUser.Actions) => {
  switch (action.type) {
    case C_USER.RESET_USER_DATA:
      return { ...initialState, id: -1 };
    case C_USER.SET_USER_DATA:
      return {
        ...action.payload,
      };
    // -2 --> to -1
    case C_USER.USER_NOT_CONNECTED:
      return {
        ...state,
        id: -1,
      };

    default:
      return state;
  }
};

export default UserReducer;
