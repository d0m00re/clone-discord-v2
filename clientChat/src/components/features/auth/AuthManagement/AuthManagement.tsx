import { useState } from 'react';
import * as Feature from "./../../../features";
import Flex from "./../../../atoms/Flex";

type TAuthScreen = 'register' | 'login';

const AuthManagement = () => {
  const [screen, setScreen] = useState<TAuthScreen>('login');

  return (
    <section>
      <Flex>
        <button onClick={() => setScreen('register')}>register</button>
        <button onClick={() => setScreen('login')}>login</button>
      </Flex>

      {screen === 'register' ?
        <Feature.Auth.Register />
        :
        <Feature.Auth.Login />
      }

    </section>
  );
}

export default AuthManagement;