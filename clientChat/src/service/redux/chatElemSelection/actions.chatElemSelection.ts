import * as contants from "./constants.chatElemSelection";

export const setRoomUuid = (payload : string) => {
    return {
      type: contants.SET_ROOM_UUID,
      payload: payload,
    };
  };

  export const setGuildUuid = (payload : string) => {
    return {
      type: contants.SET_GUILD_UUID,
      payload: payload,
    };
  };

  export type Actions = ReturnType<
    typeof setRoomUuid |
    typeof setGuildUuid>