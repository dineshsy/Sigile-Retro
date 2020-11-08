import React from 'react';
import { Toolbar } from './components/Toolbar';
import styled from 'styled-components';
import { Board } from './components/Board';

const DashboardWrapper = styled.section`
  display: block;
  padding: 2rem 0rem;
  width: 100%;
`;
export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Toolbar />
      <Board />
    </DashboardWrapper>
  );
};
