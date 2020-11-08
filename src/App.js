import React, { useState } from 'react';
import { NavigationBar } from './Reusables/Interactive/NavigationBar';
import { Authentication } from './Authentication';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dashboard } from './Dashboard/Dashboard';

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
        <Switch>
          <Route path="/board">
            <Dashboard />
          </Route>
          <Route path="/" exact>
            <Authentication isSignup={isSignup} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </MainWrapper>
  );
}

export default App;
