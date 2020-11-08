import React, { useState } from 'react';
import { NavigationBar } from './Reusables/Interactive/NavigationBar/NavigationBar';
import { Authentication } from './Authentication';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  > main {
    height: 100%;
    display: flex;
    flex: 1;
  }
`;
function App() {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <MainWrapper>
      <NavigationBar
        handleLoginClick={() => setIsSignup(false)}
        handleSignUpClick={() => setIsSignup(true)}
      />
      <main>
        <Authentication isSignup={isSignup} />
      </main>
    </MainWrapper>
  );
}

export default App;
