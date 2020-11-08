import React from 'react';
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
  return (
    <MainWrapper>
      <NavigationBar />
      <main>
        <Authentication />
      </main>
    </MainWrapper>
  );
}

export default App;
