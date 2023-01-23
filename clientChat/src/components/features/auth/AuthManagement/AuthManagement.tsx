import { useState } from 'react';
import * as Feature from "./../../../features";
import Flex from "./../../../atoms/Flex";
import styled from "styled-components";

type TAuthScreen = 'register' | 'login';

const MainLayer = styled.section`
  top: 0;
  left : 0;
  
  display : flex;
  justify-content: center;
  align-items: center;
  
  width : 100vw;
  height : 100vh;
  background-color: black;
  background-image: url("https://img.freepik.com/premium-photo/beautiful-galaxy-deep-space-elements-this-image-furnished-by-nasa-high-quality-photo_496756-8391.jpg?w=2000");
`;

const ChildLayer = styled.section`
  display : flex;
  flex-direction: column;
  background-color: white;

  border-radius: 16px;
  padding: 16px;
`;

interface IHeadeAuth {
  setScreen: React.Dispatch<React.SetStateAction<TAuthScreen>>;
}

const HeaderAuth = (props: IHeadeAuth) => {
  return (
    <Flex>
      <button onClick={() => props.setScreen('register')}>register</button>
      <button onClick={() => props.setScreen('login')}>login</button>
    </Flex>
  )
}

const AuthManagement = () => {
  const [screen, setScreen] = useState<TAuthScreen>('login');

  return (
    <MainLayer>
      <ChildLayer>
        <HeaderAuth setScreen={setScreen} />

        {screen === 'register' ?
          <Feature.Auth.Register />
          :
          <Feature.Auth.Login />
        }
      </ChildLayer>
    </MainLayer>
  );
}

export default AuthManagement;