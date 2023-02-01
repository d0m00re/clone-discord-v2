import * as utilsChatElemSelection from "./utils.chatElemSelection";
import * as actionsUser from "./actions.chatElemSelection";
import * as C_CHAT_ELEM_SELECTION from "./constants.chatElemSelection";

export const initialState = utilsChatElemSelection.makeEmpty();

const ChatElemSelectionReducer = (state = initialState, action: actionsUser.Actions) => {
  switch (action.type) {
    case C_CHAT_ELEM_SELECTION.SET_GUILD_UUID:
      return {
        guildUuid:  action.payload,
        roomUuid : ""
      };

    case C_CHAT_ELEM_SELECTION.SET_ROOM_UUID:
      return {
        ...state,
        roomUuid : action.payload
      }

    default:
      return state;
  }
};

export default ChatElemSelectionReducer;
