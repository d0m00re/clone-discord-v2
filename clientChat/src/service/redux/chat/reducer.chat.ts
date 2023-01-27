import * as utilsUser from "./../../networkAdapter/user/user.utils";
import * as actionsUser from "./actions.chat";
import * as C_USER from "./constants.chat";

//export const initialState : types.IMe = utils.makeEmptyUser();

export const initialState = utilsUser.makeEmptyUserId();

const UserReducer = (state = initialState, action: actionsUser.Actions) => {
  switch (action.type) {
    case C_USER.SET_ALL_ELEM:
      return { ...action.payload };
    
    default:
      return state;
  }
};

export default UserReducer;
