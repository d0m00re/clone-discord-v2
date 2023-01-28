import * as contants from "./constants.chat";
import * as entityChat from "./../../networkAdapter/chat/chat.entities";
/*
export {
    SET_ALL_ELEM,
    SET_ALL_GUILD,
    SET_ALL_ROOM,
    SET_ALL_ROOM_ITEMS
}
*/

export const setAllElem = (payload : entityChat.IGuildWtJoin) => {
    return {
      type: contants.SET_ALL_ELEM,
      payload: payload,
    };
  };

  export const setAllGuild = (payload :any) => {
    return {
      type: contants.SET_ALL_GUILD,
      payload: payload,
    };
  };
  export const setAllRoom = (payload : entityChat.entityRoom.IRoomId[]) => {
    return {
      type: contants.SET_ALL_ROOM,
      payload: payload,
    };
  };
  export const setAllRoomItems = (payload :any) => {
    return {
      type: contants.SET_ALL_ROOM_ITEMS,
      payload: payload,
    };
  };

  export type Actions = ReturnType<
    typeof setAllElem |
    typeof setAllGuild |
    typeof setAllRoom |
    typeof setAllRoomItems
  >