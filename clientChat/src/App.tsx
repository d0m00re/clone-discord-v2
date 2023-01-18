import { useState, useEffect } from 'react';
import './App.css'
import * as Feature from "./components/features";
import toast, { Toaster } from 'react-hot-toast';
import Flex from "./components/atoms/Flex";
import Button from "./components/atoms/Button";
import populateUser from "./service/redux/user/populate.user";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './service/redux/redux';
import { IUserId } from './service/networkAdapter/user/user.entities';
import * as reduxActionUser from "./service/redux/user/actions.user";
import userNa from "./service/networkAdapter/user/user.na";
import AuthManagement from "./../src/components/features/auth/AuthManagement";



function ViewUserInfo(props : IUserId) {
  return (
    <section>
      <p>{props.firstname}</p>
      <p>{props.lastname}</p>
      <p>{props.id}</p>
    </section>
  )
}

function App() {
  const dispatch = useDispatch();
  const userReducer = useSelector<RootState, IUserId>(state => state.user);

  useEffect(() => {
    populateUser(dispatch);
  }, []);

  const logout = () => {
    userNa.logout()
    .then(() => {
      toast("logout")
      dispatch(reduxActionUser.resetUser(null))
    })
    .catch(err => {
      toast("error logout")
    })
  }

  return (
    <div className="App">
      <ViewUserInfo {...userReducer} />
      {userReducer.id < 0 ?
        <AuthManagement />
        :
        <>
        <Button onClick={logout}>logout</Button>
        <Feature.Chat.ChatRoomMain />
        </> 
      }
      <Toaster />
    </div>
  )
}

export default App