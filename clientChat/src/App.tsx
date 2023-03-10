import { useState, useEffect } from "react";
import "./App.css";
import * as Feature from "./components/features";
import toast, { Toaster } from "react-hot-toast";
import populateUser from "./service/redux/user/populate.user";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./service/redux/redux";
import { IUserId } from "./service/networkAdapter/user/user.entities";
import * as reduxActionUser from "./service/redux/user/actions.user";
import userNa from "./service/networkAdapter/user/user.na";
import AuthManagement from "./../src/components/features/auth/AuthManagement";
import populateAll from "./service/redux/chat/populate.chat";

function App() {
  const dispatch = useDispatch();
  const userReducer = useSelector<RootState, IUserId>((state) => state.user);

  useEffect(() => {
    populateUser(dispatch);
   // populateAll(dispatch);
  }, []);

  useEffect(() => {
   // if (userReducer.id > 0)
      populateAll(dispatch);
  }, []);//[userReducer])

  const logout = () => {
    userNa
      .logout()
      .then(() => {
        toast("logout");
        dispatch(reduxActionUser.resetUser(null));
      })
      .catch((err) => {
        toast("error logout");
      });
  };

  return (
    <div className="App" style={{ width: "100%", height: "100%" }}>
      {userReducer.id < 0 ?
        <AuthManagement /> :
        <Feature.Chat.ChatRoomMain />}
      <Toaster />
    </div>
  );
}

export default App;
