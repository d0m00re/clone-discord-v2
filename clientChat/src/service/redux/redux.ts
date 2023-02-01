import { combineReducers, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import UserReducer from "./user/reducer.user";
import ChatReducer from "./chat/reducer.chat";
import ChatElemSelection from "./chatElemSelection/reducer.chatElemSelection";

export const defaultState = {
  user: UserReducer,
  chat : ChatReducer,
  chatElemSelection : ChatElemSelection
};

export const reducers = combineReducers(defaultState);

export function configureStore(initialState = reducers) {
  const store = createStore(reducers, composeWithDevTools());
  return store;
}

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore();
